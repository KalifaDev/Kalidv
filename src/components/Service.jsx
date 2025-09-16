import '../styles/Service.css'

function Iphones(){
    return(
         <section className="Section-service">
          <div>
            <h1 style={{fontSize:"50px", fontWeight:"bold",}} className="Service" >Mon Service</h1>
    
              <section>
                    <div className='list-service'>
                           <li type = "none"  className="dernier-conteneur">
                            <div style={{textAlign:"center"}} className="service-descrip">
                              <i className="fa-solid fa-house"></i>
                              <h1 style ={{fontSize: "20px", fontWeight:"bold"}} >Developpemet </h1>
                                 <p>Nous concevons des application modernes,<br/>
                                 rapides et securises, adaptees a vos besoin.<br/>
                                 de la vitrin en ligne aux platformes complexes,<br/>
                                 nous assurons un design atrayant et une performance<br/>
                                 optimale pour offrir une experience fluide a vos utilisateurs</p>
                                 <button className="Button-plus">Plus de voir</button>
                                 </div>
                                 
                    
                           </li>
                            <li type = "none"  className="dernier-conteneur">
                              <div style={{textAlign:"center"}} className="service-descrip">
                                <h1 style ={{fontSize: "20px", fontWeight:"bold"}}>Solutions Personnalisees</h1>
                                <p>Chaque project est unique. nous analysons 
                                vos objectif<br/>  et mettons en place des solutions sur mesure :<br/>
                                integration des nouvelles fonctionnalites, <br/> automatisationdes processus, 
                                optimisation de vos otile<br/> existants. Notre priorite est de transformer
                                 vos idees en resultats concrets.</p>
                                 <button className="Button-plus">Plus de voir</button>
                                   </div>
                                   
                   
                            </li>
                            <li type = "none"  className="dernier-conteneur">
                                   <div style={{textAlign:"center"}} className="service-descrip">
                                    <h1 style ={{fontSize: "20px", fontWeight:"bold"}} >Accompagnement et suporter</h1>
                                    <p>Nous ne nous arrettons pas au develloppement.<br/>
                                      Nous vous accompagnons dans le deploiement,<br/> la maintenance
                                      et l'evolution de vos projects, avec un support reactif et<br/> 
                                      des conseils strategique pour garantir la reussite a long terme <br/>
                                      de votre activite.   
                                      </p>
                                      <button className="Button-plus">Plus de voir</button>
                                   </div>
                           </li>
                    </div>
          </section>

          </div>
        </section>
   
    )
}
export default Iphones;