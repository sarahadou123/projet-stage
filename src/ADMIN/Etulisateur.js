import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineLogout ,AiOutlineSearch } from "react-icons/ai";
import { BsFillPersonFill, BsFillPeopleFill, BsArrowLeftCircleFill, BsArchiveFill, BsBack, BsTrash3 } from "react-icons/bs";
import Header from "./header";
import axios from "axios";
import "../StyleCss/Accueilstyle.css";
import { useNavigate } from "react-router-dom";
import { IoOpenOutline,IoPersonAddOutline } from "react-icons/io5"; 

export default function Utilisateurs(props) {
  const [dataetu, setdataetu] = useState([]);
  const {admineId ,dataUtilisateur}=props
  const [showProfile, setShowProfile] = useState(false);
  const navigate=useNavigate()
  const [data1DMINE, setdata1DMINE ]=useState([])

  const [search,setsearch]=useState("")
  const [datasearch,setdatasearch]=useState([])
  const [vide,setvide]=useState("")


  function searcher(e){
    e.preventDefault()
    setdatasearch(dataUtilisateur.filter(element => element.matricule.toUpperCase() === search.trim().toUpperCase() || element.nom.trim().toUpperCase().startsWith(search.trim().toUpperCase() )  || element.prenom.trim().toUpperCase().startsWith(search.trim().toUpperCase() ) ))
    setvide(search)
  }
  

  useEffect( ()=>
  {
    axios.get('http://localhost:2000/admin')
    .then(reponse => setdata1DMINE(reponse.data))
    .catch(error => console.error('error fetch :',error))
  }
 
  ,[])

  const admineConn = data1DMINE.find(element => element.id == admineId)

  function profile(){
    navigate("/Profile")
  }

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
      {/* <Header /> */}
      <div className="divA">
        <div className="topbar">
          <div className="logoA">
            <img src=" " alt="" />
            <p>Gestion </p>
            <h4>D'Equipements</h4>
          </div>
          <div className="searchdiv">
            <form onSubmit={(e)=>searcher(e)}>
              <button className="iconesearch"   type="submit"><AiOutlineSearch  /></button>
              <input  type="text" name="search" id="search" placeholder="Search" value={search} onChange={(e)=>setsearch(e.target.value)} />
            </form>
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
                                        <h3> {admineConn.nom}</h3>
                                        <p>{admineConn.prenom}</p>
                                        <p>afficher le compte <IoOpenOutline onClick={profile} /></p>
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
            {datasearch.length >0 ? 
                datasearch.map((etu, index) => (
                  <tr key={index}>
                    <td>{etu.matricule}</td>
                    <td>{etu.nom}</td>
                    <td>{etu.prenom}</td>
                    <td>{etu.nbraffectation}</td>
                    <td><button onClick={() => supprimerUtilisateur(etu.id)} className="btnsuppe"><BsTrash3 /></button></td>
                  </tr>
                ))
                :
                datasearch == 0 && vide !==""  ?(
                  <tr>
                    <td colSpan={8}> Aucun Utilisateurs avec ce Matricule ({search})</td>
                  </tr>
                )
            :dataetu.map((etu, index) => (
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
