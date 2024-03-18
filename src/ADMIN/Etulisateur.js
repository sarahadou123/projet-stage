import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineTeam ,AiOutlineUser, AiOutlineLogout ,AiOutlineSearch,AiOutlineCheck,AiFillEye} from "react-icons/ai";
import { VscSymbolEnum ,VscVersions,VscTarget} from "react-icons/vsc";
import "../StyleCss/Accueilstyle.css"
import { BsFillPersonFill,BsFillPeopleFill,BsArrowLeftCircleFill ,BsArchiveFill,BsBack,BsTrash3} from "react-icons/bs";
import Header from "./header";



export default function Utilisateurs(){
  return(
    <div>
    <div className="sidbar">
        <ul className="menu">
          <li className="active">
            <Link to="/Accueil" className="AlinkD">
              <BsArrowLeftCircleFill className="iconeDashbord" />
              <span>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;Accueil </span>
            </Link>
          </li>
          <li>
            <Link to="/Profile" className="AlinkD">
              <BsFillPersonFill className="iconeDashbord" />
              <span>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;profile </span>
            </Link>
          </li>
          <li>
            <Link to="/Equipement" className="AlinkD">
              <BsBack className="iconeDashbord" />
              <span>&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;liste </span>
            </Link>
          </li>
          <li>
            <Link to="/Emplacement" className="AlinkD">
              <BsArchiveFill className="iconeDashbord" />
              <span>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;Emplacements </span>
            </Link>
          </li>
          <li>
            <Link to="/Etulisateur" className="AlinkD">
              <BsFillPeopleFill className="iconeDashbord" />
              <span>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;Utilisateurs </span>
            </Link>
          </li>
         
          <li className="LOGOUT">
            <Link to="/logout" className="AlinkD">
              <AiOutlineLogout className="iconeDashbord" />
              <span>&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;Logout </span>
            </Link>
          </li>
        </ul>
      </div>
  <Header/>
      <div className="tabHU">
         <p className="pTU">Listes des Utilisateurs </p>
      
            <table className="tableU">
                <tr>
                  <th>CIN</th>
                  <th>Nom</th>
                  <th>Prenom</th>
                  <th>Num Telephone</th>
                  <th>Gmail</th>
                  <th>Détail</th>
                  <th>Supprimer</th>
                </tr>
                <tr>
                  <td>CIN</td>
                  <td>Utilisateurs</td>
                  <td>Utilisateurs</td>
                  <td>Numtele</td>
                  <td>Utilisateurs.Utilisateurs.0@gmail.com</td>
                  <td><button  className="btndetal"><AiFillEye style={{color:"white",fontSize:"20px"}} /></button> </td>
                  <td><button  className="btnsuppe"><BsTrash3/></button> </td>

                </tr>
                <tr>
                  <td>CIN</td>
                  <td>Utilisateurs</td>
                  <td>Utilisateurs</td>
                  <td>Numtele</td>
                  <td>Utilisateurs.Utilisateurs.0@gmail.com</td>
                  <td><button  className="btndetal"><AiFillEye style={{color:"white",fontSize:"20px"}} /></button> </td>
                  <td><button  className="btnsuppe"><BsTrash3/></button> </td>

                  
                </tr>
                <tr>
                  <td>CIN</td>
                  <td>Utilisateurs</td>
                  <td>Utilisateurs</td>
                  <td>Numtele</td>
                  <td>Utilisateurs.Utilisateurs.0@gmail.com</td>
                  <td><button  className="btndetal"><AiFillEye style={{color:"white",fontSize:"20px"}} /></button> </td>
                  <td><button  className="btnsuppe"><BsTrash3/></button> </td>

                </tr>
                <tr>
                  <td>CIN</td>
                  <td>Utilisateurs</td>
                  <td>Utilisateurs</td>
                  <td>Numtele</td>
                  <td>Utilisateurs.Utilisateurs.0@gmail.com</td>
                  <td><button  className="btndetal"><AiFillEye style={{color:"white",fontSize:"20px"}} /></button> </td>
                  <td><button  className="btnsuppe"><BsTrash3/></button> </td>

                </tr>
               
                
                <tr>
                  <td>CIN</td>
                  <td>Utilisateurs</td>
                  <td>Utilisateurs</td>
                  <td>Numtele</td>
                  <td>Utilisateurs.Utilisateurs.0@gmail.com</td>
                  <td><button  className="btndetal"><AiFillEye style={{color:"white",fontSize:"20px"}} /></button> </td>
                  <td><button  className="btnsuppe"><BsTrash3/></button> </td>

                </tr>
                <tr>
                  <td>CIN</td>
                  <td>Utilisateurs</td>
                  <td>Utilisateurs</td>
                  <td>Numtele</td>
                  <td>Utilisateurs.Utilisateurs.0@gmail.com</td>
                  <td><button  className="btndetal"><AiFillEye style={{color:"white",fontSize:"20px"}} /></button> </td>
                  <td><button  className="btnsuppe"><BsTrash3/></button> </td>
                </tr>
                <tr>
                  <td>CIN</td>
                  <td>Utilisateurs</td>
                  <td>Utilisateurs</td>
                  <td>Numtele</td>
                  <td>Utilisateurs.Utilisateurs.0@gmail.com</td>
                  <td><button  className="btndetal"><AiFillEye style={{color:"white",fontSize:"20px"}} /></button> </td>
                  <td><button  className="btnsuppe"><BsTrash3/></button> </td>

                </tr>
                <tr>
                  <td>CIN</td>
                  <td>Utilisateurs</td>
                  <td>Utilisateurs</td>
                  <td>Numtele</td>
                  <td>Utilisateurs.Utilisateurs.0@gmail.com</td>
                  <td><button  className="btndetal"><AiFillEye style={{color:"white",fontSize:"20px"}} /></button> </td>
                  <td><button  className="btnsuppe"><BsTrash3/></button> </td>

                </tr>
                <tr>
                  <td>CIN</td>
                  <td>Utilisateurs</td>
                  <td>Utilisateurs</td>
                  <td>Numtele</td>
                  <td>Utilisateurs.Utilisateurs.0@gmail.com</td>
                  <td><button  className="btndetal"><AiFillEye style={{color:"white",fontSize:"20px"}} /></button> </td>
                  <td><button  className="btnsuppe"><BsTrash3/></button> </td>

                </tr>
                <tr>
                  <td>CIN</td>
                  <td>Utilisateurs</td>
                  <td>Utilisateurs</td>
                  <td>Numtele</td>
                  <td>Utilisateurs.Utilisateurs.0@gmail.com</td>
                  <td><button  className="btndetal"><AiFillEye style={{color:"white",fontSize:"20px"}} /></button> </td>
                  <td><button  className="btnsuppe"><BsTrash3/></button> </td>

                </tr>

            </table>
        </div>
      </div>

    
  )
}

