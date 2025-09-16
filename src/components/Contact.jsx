"use client";
import "../styles/Contact.css"

export default function Contact() {

  
    return(
        <section className="Section-contact">
            <div>
                <h1 className="contact">Contact</h1>
                    <div className="Contact-section"> 
                         <div className="Message">
                            <div><div className="email">Email : Kalifacamara001@mail.com</div>
                              <div className="form-group">
                        
                                    <input style={{width: "20%"}} type="text" id="fullName" name="fullName" placeholder="Votre nom complet" required ></input>
                            <div className="error-message" id="nameError"></div>
                    </div>
                         </div>
                    </div>
                
               






                
                 <div>Tell : +223 72128364</div>
                    <div className="form-group">
                        
                        <input style={{width: "20%"}} type="Email" id="compteEmail" name="compteEmail" placeholder="Votre Email " required ></input>
                            <div className="error-message" id="nameError"></div>
                    </div>
                        <main >
                            <div>Adress : Nigeria (Kaduna) Tundu_Wada</div>
                            <textarea className="Arealtext"  style={{ width: "20%", height: "100px", marginBottom: "10px" }} placeholder="Ecrire vos message ici" required ></textarea> 
                                <br />
                                <button  className="Areabutton" type="submit">Envoyer</button>
                        </main>
                </div>
                <div style={{textAlign : "center", background : "#3333", marginTop:"15px"}}>Develloper par Kalifa_dev</div>
            </div>
                

        </section>
    
    )
}