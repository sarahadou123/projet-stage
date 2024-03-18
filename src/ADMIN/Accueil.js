import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineTeam, AiOutlineUser, AiOutlineLogout, AiOutlineSearch, AiOutlineCheck } from "react-icons/ai";
import { VscSymbolEnum, VscVersions, VscTarget } from "react-icons/vsc";
import "../StyleCss/Accueilstyle.css";
import { BsFillPersonFill, BsFillPeopleFill, BsArrowLeftCircleFill, BsArchiveFill, BsBack } from "react-icons/bs";
import { IoOpenOutline } from "react-icons/io5";
import { IoPersonAddOutline } from "react-icons/io5";
import { useState } from "react";
import Header from "./header";
// import Login from "../Loginpage";
export default function Accueil() {
 
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
              <span>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;Equipement </span>
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
          <div>
            <p className="pHES">Data d'aujourd'hui</p>
            <div className="ensemDiv">
              <div className="divH1" style={{ backgroundColor: "rgb(254, 242, 224)" }}>
                <p>Nbm d'Equipement </p>
                <p> 5000 </p>
                <p> ...  ...  ...  ... </p>
                <p className="picone" style={{ backgroundColor: "blue" }}><AiOutlineCheck className="iconeDat" /></p>
              </div>
              
              <div className="divH1" style={{ backgroundColor: "rgb(180, 250, 249)" }}>
                <p>Nbm d'Emplacements </p>
                <p> 5000 </p>
                <p> ...  ...  ...  ... </p>
                <p className="picone" style={{ backgroundColor: "green" }}><AiOutlineCheck className="iconeDat" /></p>
              </div>
              <div className="divH1" style={{ backgroundColor: "rgb(232, 236, 236)" }}>
                <p>Nbm d'Affectations </p>
                <p> 5000 </p>
                <p> ...  ...  ...  ... </p>
                <p className="picone" style={{ backgroundColor: "blue" }}><AiOutlineCheck className="iconeDat" /></p>
              </div>
            </div>
          </div>
        </div>
        <div className="tabHAcceuil">
          <p className="pT">Last affectation </p>

          <table>
            <thead>
              <tr>
                <th>Date</th>
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
                <td>2023-12-12</td>
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
                <td>2023-12-12</td>
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
                <td>2023-12-12</td>
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
                <td>2023-12-12</td>
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
                <td>2023-12-12</td>
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
                <td colSpan="9" style={{ backgroundColor: 'rgb(98, 98, 164)', color: " white", fontSize: "15px", fontWeight: "bold" }}>Last 5 Affectation Effectuer</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
   
  );
}
