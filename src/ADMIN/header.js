import "../StyleCss/Accueilstyle.css"
import { IoOpenOutline } from "react-icons/io5";
import { IoPersonAddOutline } from "react-icons/io5";
import { AiOutlineTeam, AiOutlineUser, AiOutlineLogout, AiOutlineSearch, AiOutlineCheck } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header(){
    const [showProfile, setShowProfile] = useState(false);
    return(
      
        
        
        <div className="divA">
        <div className="topbar">
          <div className="logoA">
            <img src=" " alt="" />
            <p>Gestion </p>
            <h4>D'Equipements</h4>
          </div>
          <div className="searchdiv">
            <AiOutlineSearch className="iconesearch" />
            <input type="text" name="search" id="search" placeholder="Search" />
                  
                      <img className="imgprofile" src="profilprojet.jpg"  onClick={() => setShowProfile(true)}  />
               
          </div>

          
        </div>
        <div>
              {showProfile && (
                              <div>
                                  <div className="profile-container">
                                    <div className="profile-picture">
                                    <img src="profilprojet.jpg" alt="Photo de profil" />
                                  </div>
                                    <div className="profile-details">
                                        <h3> ait haddou ahmed</h3>
                                        <p>ahmed@gemail.com</p>
                                        <p>afficher le compte <IoOpenOutline /></p>
                                        <button className="buutonprofil" onClick={() => setShowProfile(false)}>Fermer</button>  
                                            
                                    </div>

                                </div>
                                <div className="div77">
                                  <p> <IoPersonAddOutline /><Link to="/AjouterAdmin">ajouter un autre compte</Link></p>
                                </div>
                              </div>
                              )}
            </div>
        </div>
        
       
    )
}