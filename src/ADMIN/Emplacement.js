import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineTeam, AiOutlineUser, AiOutlineLogout, AiOutlineSearch, AiOutlineCheck } from "react-icons/ai";
import { VscSymbolEnum, VscVersions, VscTarget } from "react-icons/vsc";
import { AiFillEye} from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";
import { IoOpenOutline } from "react-icons/io5";
import { IoPersonAddOutline } from "react-icons/io5";
import Header from "./header";
import "../StyleCss/Accueilstyle.css";
import { BsFillPersonFill, BsFillPeopleFill, BsArrowLeftCircleFill, BsArchiveFill, BsBack } from "react-icons/bs";
// import { MdDelete } from 'react-icons/md';
import { BsTrash3 } from "react-icons/bs";
import { BsArrow90DegRight } from "react-icons/bs";
import { BsRepeat } from "react-icons/bs";
import { useState } from "react";
export default function EquipemntEpla() {
  const [showProfile, setShowProfile] = useState(false);
  return (
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
            <Link to="/" className="AlinkD">
              <AiOutlineLogout className="iconeDashbord" />
              <span>&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;Logout </span>
            </Link>
          </li>
        </ul>
      </div>
     

              
          <Header/>
        <div className="header">
          <form className="formEMp" >
            <tr>
                <td> <input type="text" placeholder="Equipement"/></td>
                <td><input type="text" placeholder="Marque"/></td>
                <td> <input type="text" placeholder="Modele"/></td>
                <td><input type="text"placeholder="N°Service"/><br/></td>

            </tr>
            <tr className="tr2">
                <td><input type="text" placeholder="CAB"/></td>
                <td>  <input type="text" placeholder="Emplacement"/></td>
                <td><input type="text"placeholder="N°Marche"/></td>
                <td><input type="text"placeholder="matricule utilisateur"/></td>
            </tr>
            <tr className="trtr3button3">
                <td><button type="button" className="buttonfo" >Ajouter</button></td>
                <td><button type="button"className="buttonfo"  >Modifier</button>
            </td>
            </tr>
            </form>
        </div>
        <div className="tabH">
          <p className="pT">liste Equipement </p>

          <table>
            <thead>
              <tr>
                
                <th>Equipement</th>
                <th>Marque</th>
                <th>Modele</th>
                <th>N°Service</th>
                <th>CAB</th>
                <th>Emplacement</th>
                <th>Affectation</th>

                <th>N°Marche</th>
                <th>supprission</th>
                
                <th>Modifier</th>
                
              </tr>
            </thead>
            <tbody>
              <tr>
                
                <td>PC</td>
                <td>__</td>
                <td>__</td>
                <td>__</td>
                <td>__</td>
                <td>__</td>
                <td>__</td>
                <td>__</td>
                <td>
                <BsTrash3  className="large-delete-icon" style={{ cursor: 'pointer', marginLeft: '15px' }} />
            </td> 
           
               
              <td>
              <button  className="modifier"><BsPencilSquare  style={{color:"white",fontSize:"20px"}} /></button>
            </td>
          
              </tr>
              <tr>
                
                <td>PC</td>
                <td>__</td>
                <td>__</td>
                <td>__</td>
                <td>__</td>
                <td>__</td>
                <td>__</td>
                <td>__</td>
                <td>
                <BsTrash3  className="large-delete-icon" style={{ cursor: 'pointer', marginLeft: '15px' }} />
            </td> 
            
               
              <td>
 <button  className="modifier"><BsPencilSquare  style={{color:"white",fontSize:"20px"}} /></button>            
            </td>
              </tr>
              <tr>
                
                <td>PC</td>
                <td>__</td>
                <td>__</td>
                <td>__</td>
                <td>__</td>
                <td>__</td>
                <td>__</td>
                <td>__</td>
                <td>
                <BsTrash3  className="large-delete-icon" style={{ cursor: 'pointer', marginLeft: '15px' }} />
            </td> 
           
              <td>
 <button  className="modifier"><BsPencilSquare  style={{color:"white",fontSize:"20px"}} /></button>            
            </td>
              </tr>
              <tr>
                
                <td>PC</td>
                <td>__</td>
                <td>__</td>
                <td>__</td>
                <td>__</td>
                <td>__</td>
                <td>__</td>
                <td>__</td>
                <td>
                <BsTrash3  className="large-delete-icon" style={{ cursor: 'pointer', marginLeft: '15px' }} />
            </td> 
           
              <td>
 <button  className="modifier"><BsPencilSquare  style={{color:"white",fontSize:"20px"}} /></button>            
            </td>
              </tr>
              <tr>
                
                <td>PC</td>
                <td>__</td>
                <td>__</td>
                <td>__</td>
                <td>__</td>
                <td>__</td>
                <td>__</td>
                <td>__</td>
                <td>
                <BsTrash3  className="large-delete-icon" style={{ cursor: 'pointer', marginLeft: '15px' }} />
            </td> 
           
              <td>
 <button  className="modifier"><BsPencilSquare  style={{color:"white",fontSize:"20px"}} /></button>            
            </td>
              </tr>
             
                
              
             
               
             
            </tbody>
            <tfoot>
              <tr  >
                <td className="tfoot" colSpan="12" style={{ backgroundColor: 'rgb(98, 98, 164)',color: " white", fontSize: "15px", fontWeight: "bold" }}></td>
              </tr>
            </tfoot>
            
          </table>
        
      
         
          
        </div>
        
        
    </div>
            
  
  );
}
