import '../styles/Panier.css'


function Panier(){
    return(
        <section>
             <div className="introimage"></div>
        <div className="Intro">
            <h1 style={{fontSize:"50px", fontWeight:"bold",}} className="textintro">A <h2 style={{fontSize:"50px", fontWeight:"bold",color:"blue"}}>propos</h2> </h1>
            <p className="kali">Kalifa (DEV), j'e construit des applicationqui allient desingn, performance et inovation.
              <br/>j'aime consevoir des interfaces simple mais efficaces.<br/>Bienvenue dans mon univers numerique</p>
           
            <div className="objectif-container">
              <div className="objectif">
              <h3>Mon objectif</h3>
              <p>Mon objectif est d'aider les entreprise et <br/> particulieurs a trasformer leurs idees <br/>en solutions numerique efficaces.</p>
            </div>

            <div className="objectif">
              <h3>Specialites</h3>
              <p>Developpement Java(Java Swing, Spring boot). <br/> Creation d'application web avec Next.js et React.<br/>Bases de donnes et l'integration securisee.</p>
            </div>
            
            
   </div>
            <div>
              <button className="button-Vd">Portfolio VD</button>
            </div>
        </div>
        </section>
    )
}

export default Panier;