import "../StyleCss/Accueilstyle.css"
import { IoOpenOutline } from "react-icons/io5";
import { IoPersonAddOutline } from "react-icons/io5";
export default function Profile(){

    return (
        <>
             <div className="profile-container">
      <div className="profile-picture">
        <img src="profilee.png" alt="Photo de profil" />
      </div>
      <div className="profile-details">
        <h1>Nom: John Doe</h1>
        <p>Email: johndoe@example.com</p>
        <p>afficher le compte <IoOpenOutline /></p>
      </div>
    </div>
    <div className="div2">
        <h4> <IoPersonAddOutline />ajouter un autre compte</h4>
      </div>

        
     
        </>
    )
}