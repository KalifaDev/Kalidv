import '../styles/Header.css'


export default function Header(){
  return(
    <header>
 <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
    <div className="container-fluid">
      <img src='IMG_1755(1).PNG'></img>
      <div className="collapse navbar-collapse " id="navbarSupportedContent" >
        <ul className="navbar-nav mx-auto me-auto mb-2 mb-lg-0 ">
         <li className="nav-item ">
           <a className="nav-link " aria-current="page" href="#home" vrole="button" > <i class="bi bi-house-door-fill" style={{paddingRight :"5px"}}></i>Home</a>
          </li>
         <li className="nav-item">
            <a className="nav-link" href="#apropos" role="button"> <i class="bi bi-file-person-fill" style={{paddingRight :"5px"}}></i> A propos</a>
         </li>
          <li className="nav-item">
            <a className="nav-link " href="#service" role="button"> <i class="bi bi-person-workspace"style={{paddingRight :"5px"}}></i> Service</a>
          
            
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#contact" role="button"> <i class="bi bi-telephone-fill" style={{paddingRight :"5px"}}></i> Contact</a>
          </li>
        </ul>
            

        <form className="d-flex" role="search">
         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>

  <main  style={{ padding: "40px", textAlign: "center"}} className="photomain" 
   id="home"
    role="tablist" >
      <h1 style={{fontWeight:"bold"}} >Bienvenue sur mon Portfolio</h1>
      <p>Je m’appelle Kalifa Camara Developpeur Frontend and Backend </p>
      <nav style={{ marginTop: "20px" }}>

      </nav>
        <p className="titre">Voyageur du code et des songes,
          Ici s’ouvrent mes lignes,<br/> mes projets, mes mensonges.
          Chaque pixel raconte un bout de chemin,<br/>
          Chaque projet témoigne d’un rêve entre mes mains.
         </p>
        
        <div style={{display:"flex",left:"100px",gap:"1%",paddingLeft:"30px"}} > 

          <i className="fa-brands fa-instagram" style={{paddingRight :"10px", fontSize:"200%",marginTop:"15px"}}/>
         <i className="fa-brands fa-whatsapp" style={{paddingRight :"10px", fontSize:"200%",marginTop:"15px"}}/>
         <i className="fa-brands fa-tiktok" style={{paddingRight :"10px", fontSize:"200%",marginTop:"15px"}}/>
         <i className="fa-brands fa-facebook" style={{paddingRight :"10px", fontSize:"200%",marginTop:"15px"}}/>
         
         </div>
         
  

   </main> 

   <div className="conte"> 
        <div className="Container" ></div>
        <div className="Portfolio">
          <h1 style={{fontSize: "80px", fontWeight:"bold", color:"white"}} > My <br/>Portfolio <hr/></h1>
          <p className="decript" style={{fontFamily:"cursive"}}>N'hésitez pas à explioorer mon portefolio et à me contacter pour collaborer . </p>
          
          </div>
        </div>  
</header>

  )
}