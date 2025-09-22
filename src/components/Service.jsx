import '../styles/Service.css'

function Iphones(){
    return(
         <section className="Section-service" id="service">
          <div>
            <h1 style={{fontSize:"50px", fontWeight:"bold",  fontFamily: 'Poppins'}} className="Service" ><i class="fa-solid fa-circle-check" style={{paddingRight :"10px", fontSize:"70%"}}></i> Mon Service</h1>
    
              <section>
                    <div className='list-service'>
                           <li type = "none"  className="dernier-conteneur">
                            <div style={{textAlign:"center"}} className="service-descrip">
                                <i class="fa-solid fa-code" style ={{fontSize: "60px", color:"blue"}}></i>
                              <h1 style ={{fontSize: "20px", fontWeight:"bold",marginTop:"15px"}} >Developpemet </h1>
                                 <p style={{fontFamily: 'Quicksand'}}>Nous concevons des application modernes,<br/>
                                 rapides et securises, adaptees a vos besoin.<br/>
                                 de la vitrin en ligne aux platformes complexes,<br/>
                                 nous assurons un design atrayant et une performance<br/>
                                 optimale pour offrir une experience fluide a vos utilisateurs</p>
                                 <button style={{fontFamily:"Monsterrat"}} className="Button-plus">Plus de voir...</button>
                                 </div>
                                 
                    
                           </li>
                            <li type = "none"  className="dernier-conteneur">
                              <div style={{textAlign:"center"}} className="service-descrip">
                                <i class="fa-solid fa-dna" style ={{fontSize: "60px", color:"blue"}}></i>
                                <h1 style ={{fontSize: "20px", fontWeight:"bold",marginTop:"15px"}}>Solutions Personnalisees</h1>
                                <p style={{fontFamily: 'Quicksand'}}>Chaque project est unique. nous analysons 
                                vos objectif<br/>  et mettons en place des solutions sur mesure :<br/>
                                integration des nouvelles fonctionnalites, <br/> automatisationdes processus, 
                                optimisation de vos otile<br/> existants. Notre priorite est de transformer
                                 vos idees en resultats concrets.</p>
                                 <button style={{fontFamily:"Monsterrat"}} className="Button-plus">Plus de voir...</button>
                                   </div>
                                   
                   
                            </li>
                            <li type = "none"  className="dernier-conteneur">
                                   <div style={{textAlign:"center" }} className="service-descrip">
                                    <i class="fa-solid fa-people-arrows" style ={{fontSize: "60px", color:"blue"}}></i>
                                    <h1 style ={{fontSize: "20px", fontWeight:"bold", marginTop:"15px"}} >Accompagnement et suporter</h1>
                                    <p style={{fontFamily: 'Quicksand'}}>Nous ne nous arrettons pas au develloppement.<br/>
                                      Nous vous accompagnons dans le deploiement,<br/> la maintenance
                                      et l'evolution de vos projects, avec un support reactif et<br/> 
                                      des conseils strategique pour garantir la reussite a long terme <br/>
                                      de votre activite.   
                                      </p>
                                      <button style={{fontFamily:"Monsterrat"}} className="Button-plus">Plus de voir...</button>
                                   </div>
                           </li>
                    </div>
          </section>

          </div>
        </section>
   
    )
}
export default Iphones;