import Link from "next/link";

export default function ContactWatsapp() {
    return(
    
    <button className="card-body">
       <Link href="https://wa.me/22372128364?text=Bonjour C'est Kalifadev Bienvennue dans notre monde numerique%20!" target="_blank" className="btn w-100 rounded-0  "  > <i className="fa-brands fa-whatsapp"></i> Chat on WhatsApp </Link> </button>
  

  );
}
