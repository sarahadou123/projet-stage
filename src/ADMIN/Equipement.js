import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineTeam, AiOutlineUser, AiOutlineLogout, AiOutlineSearch, AiOutlineCheck ,AiOutlineClose } from "react-icons/ai";
import { VscSymbolEnum, VscVersions, VscTarget } from "react-icons/vsc";
import "../StyleCss/Accueilstyle.css";
import { BsFillPersonFill, BsFillPeopleFill, BsArrowLeftCircleFill, BsArchiveFill, BsBack } from "react-icons/bs";
import { BiDownload } from "react-icons/bi";
import { IoOpenOutline } from "react-icons/io5";
import { IoPersonAddOutline } from "react-icons/io5";
import Header from "./header";
import { useState } from "react";




export default function ListeEquipement() {
  const [detailEmplacement, setdetailEmplacement] = useState(false);
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
            <Link to="/profilDdmin" className="AlinkD">
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
        
       
        <div className="tabH">
          <p className="pT">Liste Equipent  </p>
          <div className="icontelecharger"><BiDownload className="telecharger" /></div>

          <table>
            <thead>
              <tr>
                
                <th>Equipement</th>
                <th>Marque</th>
                <th>Modele</th>
                <th>N°Service</th>
                <th>CAB</th>
                <th>Emplacement</th>
                <th>Affecter</th>
                <th>N°Marche</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                
                <td>PC</td>
                <td>__</td>
                <td>__</td>
                <td>__</td>
                <td>__</td>
                <td><Link onClick={()=>setdetailEmplacement(true)}>YY2344</Link></td>
                <td>__</td>
                <td>__</td>
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
              </tr>
         
         
             
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="9" style={{ backgroundColor: 'rgb(98, 98, 164)', color: " white", fontSize: "15px", fontWeight: "bold" }}></td>
              </tr>
            </tfoot>
           
          </table>
       
         
        </div>
        {detailEmplacement && (
                  <>
                    <div className="divbalck">
                        <div className="divdetailEmplacement">
                                     <p><AiOutlineClose className="iconeannuler" onClick={()=>setdetailEmplacement(false)} /></p>
                                    <p className="hjg">ste : #######</p>
                                    <p>Code Locale : #####</p>
                                    <p>Localisation : #~########## </p>
                                    <p>Observation : ################## </p>
                        </div>
                    
                    </div>
                  </>
                )}
      </div>
   
  );
}
