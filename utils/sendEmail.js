import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

export const sendEmail = async (to, subject, textContent, htmlContent) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL, 
        pass: process.env.PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Mobile Lab" <${process.env.EMAIL}>`,
      to,
      subject,
      text: textContent,   // plain text fallback
      html: htmlContent,   // HTML content
    });

    console.log(`✅ Email sent to ${to}`);
  } catch (error) {
    console.error("❌ Email error:", error);
  }
};
