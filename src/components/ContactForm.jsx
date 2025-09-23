"use client";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ nom: "", prenom: "", email: "", contenu: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Envoi en cours...");

    const res = await fetch("/api/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    if (res.ok) {
      setStatus("✅ Message envoyé avec succès !");
      setForm({ nom: "", prenom: "", email: "", contenu: "" });
    } else {
      setStatus("❌ Erreur lors de l'envoi");
    }
  };

  return (

    <form onSubmit={handleSubmit} class="form-row">

     <input 
        type="text" 
        name="nom"
        placeholder="Nom" 
        required
        value={form.nom}
        onChange={handleChange}
        style={{ width: "48%",marginTop:"5%", }}
     />
    <input 
        type="text" 
        name="prenom"
        placeholder="Prénom" 
        value={form.prenom}
        onChange={handleChange}
        required
        style={{ width: "49%",marginTop:"5%", }}
    /><br/>
    <input 
        name="email"
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
        style={{ width: "100%",marginTop:"5%"}}
    /><br/>
    <textarea 
    className="Arealtext"  
    style={{ width: "100%", height: "100px", marginBottom: "10px", marginTop:"5%"}} 
    name="contenu"
    placeholder="Votre message"
    value={form.contenu}
    onChange={handleChange}
    required
    /><br/>
     <button  className="Areabutton" type="submit"><i class="fa-solid fa-paper-plane" style={{paddingRight :"10px", fontSize:"80%",marginTop:"8px"}}></i>Envoyer</button> 
     <p>{status}</p>
    </form>
   
  );
}
