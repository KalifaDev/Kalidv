import '../styles/Dernierpro.css'


export default function Dernierpro(){

    return (

    <section className="section-dernier">
      <div className="service-div">
        <h1  style={{fontSize:"50px", fontWeight:"bold", color:"white"}} className="dernier">Derniere projet</h1>
      <section>
        <div className='list-dernier'>
                <li type = "none"  className=".dernier-conteneur">
                  <img className="dernier-img" src="image russie.jpg" alt=""></img>
                    
                </li>
                <li type = "none"  className=".dernier-conteneur">
                  <img className="dernier-img" src="image russie.jpg" alt=""></img>
                   
                </li>
                <li type = "none"  className=".dernier-conteneur">
                    <img className="dernier-img" src="image russie.jpg" alt=""></img>  
                </li>
          </div>
        </section>
        
      </div>
    </section>
    )
}