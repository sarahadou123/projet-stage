import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";
import { BsFillPersonFill, BsFillPeopleFill, BsArrowLeftCircleFill, BsArchiveFill, BsBack, BsTrash3 } from "react-icons/bs";
import Header from "./header";
import axios from "axios";
import "../StyleCss/Accueilstyle.css";

export default function Utilisateurs({ setActivitesetu, activitesetu }) {
  const [dataetu, setdataetu] = useState([]);
  const [archiveSuppression, setArchiveSuppression] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:2000/etulisateur")
      .then(response => setdataetu(response.data))
      .catch(error => console.error("Error fetching data", error));
  }, []);

  useEffect(() => {
    const storedActivities = JSON.parse(localStorage.getItem('activities'));
    const storedArchive = JSON.parse(localStorage.getItem('archiveSuppression'));

    if (storedActivities) {
      setActivitesetu(storedActivities);
    }
    if (storedArchive) {
      setArchiveSuppression(storedArchive);
    }
  }, []);

  const ajouterActivite = (action, description) => {
    const nouvelleActivite = {
      action: action,
      description: description,
      date: new Date().toLocaleString(),
    };
    const updatedActivities = [...activitesetu, nouvelleActivite];
    setActivitesetu(updatedActivities);
    localStorage.setItem('activities', JSON.stringify(updatedActivities));
  
    // Ajouter à l'archive de suppression
    const updatedArchive = [...archiveSuppression, nouvelleActivite];
    setArchiveSuppression(updatedArchive); // Mettre à jour l'état local
    localStorage.setItem('archiveSuppression', JSON.stringify(updatedArchive)); // Stocker dans le localStorage
  };
  




  const supprimerUtilisateur = (id) => {
    const confirmation = window.confirm("Voulez-vous vraiment supprimer cet utilisateur ?");
    if (confirmation) {
      axios.delete(`http://localhost:2000/etulisateur/${id}`)
        .then(response => {
          setdataetu(dataetu.filter(user => user.id !== id));
          const nouvelleActivite = {
            action: "Suppression",
            description: "Suppression d'un utilisateur",
            date: new Date().toLocaleString(),
          };
          ajouterActivite("Suppression", "Suppression d'un utilisateur");
          setArchiveSuppression([...archiveSuppression, nouvelleActivite]);
        })
        .catch(error => console.error("Erreur lors de la suppression de l'utilisateur", error));
    }
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
          <Link to="/" className="AlinkD">
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
              {dataetu.map((user, index) => (
                <tr key={index}>
                  <td>{user.matricule}</td>
                  <td>{user.nom}</td>
                  <td>{user.prenom}</td>
                  <td>{user.nbraffectation}</td>
                  <td>
                    <button onClick={() => supprimerUtilisateur(user.id)} className="btnsuppe">
                      <BsTrash3 />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
