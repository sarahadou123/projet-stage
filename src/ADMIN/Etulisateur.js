import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";
import { BsFillPersonFill, BsFillPeopleFill, BsArrowLeftCircleFill, BsArchiveFill, BsBack, BsTrash3 } from "react-icons/bs";
import Header from "./header";
import axios from "axios";
import "../StyleCss/Accueilstyle.css";

export default function Utilisateurs() {
  const [dataetu, setdataetu] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:2000/etulisateur")
      .then(response => setdataetu(response.data))
      .catch(error => console.error("Error fetching data", error));
  }, []);

  const supprimerUtilisateur = (id) => {
    axios.delete(`http://localhost:2000/etulisateur/${id}`)
      .then(response => {
        // Si la suppression est réussie, mettre à jour l'état local
        setdataetu(dataetu.filter(user => user.id !== id));
      })
      .catch(error => console.error("Error deleting user", error));
  };

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
            <Link to="/logout" className="AlinkD">
              <AiOutlineLogout className="iconeDashbord" />
              <span>&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;Logout </span>
            </Link>
          </li>
        </ul>
     
     
      </div>
      <Header />
    <div className="contEmpl">
      <div className="tabHU">
        <p className="pTU">Listes des Utilisateurs </p>
        <table className="tableU">
          <thead>
            <tr>
              <th>Matricule</th>
              <th>Nom</th>
              <th>Prénom</th>
              <th>Nbr affectation</th>
              <th>Supprimer</th>
            </tr>
          </thead>
          <tbody>
            {dataetu.map((etu, index) => (
              <tr key={index}>
                <td>{etu.matricule}</td>
                <td>{etu.nom}</td>
                <td>{etu.prenom}</td>
                <td>{etu.nbraffectation}</td>
                <td><button onClick={() => supprimerUtilisateur(etu.id)} className="btnsuppe"><BsTrash3 /></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}
