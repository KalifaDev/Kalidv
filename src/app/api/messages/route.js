import { connectToDatabase } from "@/lib/mongodb";
import Message from "@/Models/Message";

export async function POST(req) {
  try {
    const data = await req.json();
    await connectToDatabase();

    const newMessage = await Message.create(data);
    return new Response(JSON.stringify(newMessage), { status: 201 });
  } catch (error) {
    console.error("Erreur :", error);
    return new Response(JSON.stringify({ error: "Erreur lors de l’envoi" }), { status: 500 });
  }
}
