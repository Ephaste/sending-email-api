import express from "express";
import dotenv from "dotenv";
import { addNewContact } from "./controllers/contactController.js";

dotenv.config();
const app = express();

app.use(express.json());

app.post("/contact", addNewContact);

app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running on http://localhost:${process.env.PORT}`);
});
