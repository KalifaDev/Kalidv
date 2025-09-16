import '../styles/Header.css'


export default function Header(){
  return(
    <header>
 <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <h1 className="navbar-brand" href="#" style={{color :"white"}}>PfKalifa</h1>
      <div className="collapse navbar-collapse " id="navbarSupportedContent" >
        <ul className="navbar-nav mx-auto me-auto mb-2 mb-lg-0 ">
         <li className="nav-item ">
           <a className="nav-link active" aria-current="page" href="#" vrole="button" style={{color :"white"}} >Home</a>
          </li>
         <li className="nav-item">
            <a className="nav-link" href="#" role="button" style={{color :"white"}}>A propos</a>
         </li>
          <li className="nav-item dropdown">
            <a className="nav-link " href="#" role="button" style={{color :"white"}}>Dropdown</a>
          
            
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#" role="button" style={{color :"white"}}>Contact</a>
          </li>
        </ul>
        <form className="d-flex" role="search">
         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>

  <main  style={{ padding: "40px", textAlign: "center"}} className="photomain" 
   id="navId"
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
        

         
   </main>

   <div class="conte"> 
        <div className="Container" ></div>
        <div className="Portfolio">
          <h1 style={{fontSize: "80px", fontWeight:"bold", color:"white"}} > My <br/>Portfolio <hr/></h1>
          <p className="decript">N'hésitez pas à explioorer mon portefolio et à me contacter pour collaborer . </p>
          
          </div>
        </div>  
</header>

  )
}