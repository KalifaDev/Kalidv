"use client";
import "../styles/Contact.css"
// import ContactForm from './ContactForm'
import ContactForm from "@/components/ContactForm"

export default function Contact() {

        
  
    return(
        <section className="Section-contact" id="contact">
            <div>
                <h1 className="contact"><i class="fa-solid fa-envelope" style={{paddingRight :"10px", fontSize:"80%",marginTop:"8px"}}></i>Contact</h1>
                
                    <div className="Contact-section"> 

<div class="wrapper">
    
    <div className="container">
      
      <div className="email">Email : <a href="mailto:kalifacamara0001@gmail.com">kalifacamara0001@gmail.com</a> </div>
                              
         <div>Téléphone : <a href="tel:+22372128364">+223 72 12 83 64</a></div>
         <div>Adress : <a href="Nigeria (Kaduna) Tundu_Wada"> Nigeria (Kaduna) Tundu_Wada</a> </div>
         <i class="fa-brands fa-instagram" style={{paddingRight :"10px", fontSize:"200%",marginTop:"15px"}}></i><br/>
         <i class="fa-brands fa-whatsapp" style={{paddingRight :"10px", fontSize:"200%",marginTop:"15px"}}></i><br/>
         <i class="fa-brands fa-tiktok" style={{paddingRight :"10px", fontSize:"200%",marginTop:"15px"}}></i><br/>
         <i class="fa-brands fa-facebook" style={{paddingRight :"10px", fontSize:"200%",marginTop:"15px"}}></i><br/>
         
    </div>
 
            
         <div className="container">
      <ContactForm />
       
        </div> 
    </div>
  </div>
                        
                           
                <div style={{textAlign : "center", background : "#333",color:"InactiveBorder", marginTop:"15px"}}>Develloper par Kalifa_dev <span  >&copy; 2025</span></div>
            </div>
                

        </section>
    
    )
}