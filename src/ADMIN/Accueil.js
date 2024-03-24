import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineTeam, AiOutlineUser, AiOutlineLogout, AiOutlineSearch, AiOutlineCheck } from "react-icons/ai";
import { VscSymbolEnum, VscVersions, VscTarget } from "react-icons/vsc";
import "../StyleCss/Accueilstyle.css";
import { BsFillPersonFill, BsFillPeopleFill, BsArrowLeftCircleFill, BsArchiveFill, BsBack } from "react-icons/bs";
import { IoOpenOutline } from "react-icons/io5";
import { IoPersonAddOutline } from "react-icons/io5";
import { useState,useEffect } from "react";
import Header from "./header";
import axios from "axios";
// import Login from "../Loginpage";
export default function Accueil({data, dataUtilisateur,dataempalacemet}) {
  const [lastEquipements, setLastEquipements] = useState([]);
  const  nbrequipement=data.length

  const utilisateursAffectes = dataUtilisateur.filter(user => user.hasOwnProperty("nbraffectation"));
  const nombreTotalAffectations = utilisateursAffectes.length; 
  const empl=data.length
  useEffect(() => {
    const fetchLastEquipements = async () => {
      try {
        const response = await axios.get("http://localhost:2000/equipement");
        // Filtrer les équipements avec une affectation non vide
        const equipementsWithAffectation = response.data.filter(equipement => equipement.affectationetulisateur !== null);
        // Sélectionner les 5 derniers équipements avec une affectation non vide
        const lastFiveEquipements = equipementsWithAffectation.slice(-5);
        console.log(lastFiveEquipements); // Ajout d'un log pour afficher les équipements filtrés
        setLastEquipements(lastFiveEquipements);
      } catch (error) {
        console.error("Erreur lors de la récupération des derniers équipements :", error);
      }
    };

    fetchLastEquipements();
  }, []);


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

      <Header />

      <div className="header">
        <div>
          <p className="pHES">Data d'aujourd'hui</p>
          <div className="ensemDiv">
            <div className="divH1" style={{ backgroundColor: "rgb(254, 242, 224)" }}>
              <p>Nbm d'Equipement </p>
              <p> {nbrequipement} </p>
              <p> ...  ...  ...  ... </p>
              <p className="picone" style={{ backgroundColor: "blue" }}><AiOutlineCheck className="iconeDat" /></p>
            </div>
            <div className="divH1" style={{ backgroundColor: "rgb(180, 250, 249)" }}>
              <p>Nbm d'Emplacements </p>
              <p> {empl} </p>
              <p> ...  ...  ...  ... </p>
              <p className="picone" style={{ backgroundColor: "green" }}><AiOutlineCheck className="iconeDat" /></p>
            </div>
            <div className="divH1" style={{ backgroundColor: "rgb(232, 236, 236)" }}>
              <p>Nbm d'Affectations </p>
              <p> {nombreTotalAffectations} </p>
              <p> ...  ...  ...  ... </p>
              <p className="picone" style={{ backgroundColor: "blue" }}><AiOutlineCheck className="iconeDat" /></p>
            </div>
          </div>
        </div>
      </div>
      <div className="tabHAcceuil">
  <p className="pT">Last affectation</p>
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
  {lastEquipements
    .filter(affectation => affectation.affectationetulisateur !== "")
    .slice()
    .reverse()
    .map((affectation, index) => (
      <tr key={index}>
        <td>{affectation.date}</td>
        <td>{affectation.nomequipment}</td>
        <td>{affectation.marque}</td>
        <td>{affectation.modele}</td>
        <td>{affectation.serie}</td>
        <td>{affectation.codebar}</td>
        <td>{affectation.emplacement.codebar}</td>
        <td>{affectation.affectationetulisateur}</td>
        <td>{affectation.numeromarche}</td>
      </tr>
    ))}
</tbody>

    <tfoot>
      <tr>
        <td colSpan="9" style={{ backgroundColor: 'rgb(98, 98, 164)', color: "white", fontSize: "15px", fontWeight: "bold" }}>Last 5 Affectation Effectuer</td>
      </tr>
    </tfoot>
  </table>
</div>


     
      </div>
    
  );
}