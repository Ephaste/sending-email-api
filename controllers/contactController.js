import { db } from "../db/index.js";
import { contacts } from "../db/schema.js";
import { sendEmail } from "../utils/sendEmail.js";
import { emailContent } from "../utils/emailContent.js";

export const addNewContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Insert into DB
    const newContact = await db
      .insert(contacts)
      .values({ name, email, message })
      .returning();

    // Prepare HTML with placeholders replaced
    const htmlBody = emailContent
      .replace("{{name}}", name)
      .replace("{{email}}", email)
      .replace("{{message}}", message);

    // Send email
    await sendEmail(
      email,                        // Recipient
      "Welcome Message",            // Subject
      `Hi ${name}, thanks for contacting Mobile Lab!`, // plain text fallback
      htmlBody                       // HTML content
    );

    res.status(201).json({
      success: true,
      data: newContact[0],
      message: "Contact saved and welcome email sent."
    });
  } catch (error) {
    console.error("❌ Controller error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
