import Iphones from "./Service";
import Panier from "./Paneir";
import '../styles/Main.css'
import Dernierpro from "./Dernierpro";
import Contact from "./Contact";

function Main(){
    return(
        <main className="Main">
        <Panier />
        <Iphones />
        <Dernierpro />
        <Contact />
        </main>
    );

    
}
export default Main;