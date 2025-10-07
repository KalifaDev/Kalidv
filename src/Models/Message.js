import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  email: { type: String, required: true },
  contenu: { type: String, required: true },
}, { timestamps: true });

export default mongoose.models.Message || mongoose.model("Message", MessageSchema);
