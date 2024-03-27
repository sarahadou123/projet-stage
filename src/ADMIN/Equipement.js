import React, { useState  ,useEffect} from "react";
import { Link } from "react-router-dom";
import { AiOutlineLogout, AiOutlineClose ,AiOutlineSearch} from "react-icons/ai";
import { BsArrowLeftCircleFill, BsFillPersonFill, BsFillPeopleFill, BsArchiveFill, BsBack, BsTrash3 } from "react-icons/bs";
import { BiDownload } from "react-icons/bi";
import Header from "./header";
import { IoOpenOutline,IoPersonAddOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function ListeEquipement(props) {
  const {admineId ,data ,setdata ,searchA ,setsearchA }=props
  const [detailEmplacement, setdetailEmplacement] = useState(null);
  const [search,setsearch]=useState(searchA)
  const [datasearch,setdatasearch]=useState([])
  const [showProfile, setShowProfile] = useState(false);
  const navigate=useNavigate()
  const [data1DMINE, setdata1DMINE ]=useState([])
  const [vide,setvide]=useState("")
  

    function searcher(e){
      e.preventDefault()
      setdatasearch(data.filter(element => element.codebar === search.trim().toUpperCase() || element.nomequipment.toUpperCase() ===search.trim().toUpperCase() || element.marque.toUpperCase() ===search.trim().toUpperCase() || element.affectationetulisateur.toUpperCase() ===search.trim().toUpperCase() || element.numeromarche ===search.trim().toUpperCase() ))
      setvide(search)

      setsearchA("") 
      localStorage.setItem("mysearch","");
    }

    useEffect(() => {
      if (searchA) {
        searcher(new Event('click')); // Simuler un clic sur le bouton de recherche
      }
    }, [searchA]);

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
  

  const handleEmplacementClick = (emplacementDetails) => {
    setdetailEmplacement(emplacementDetails);
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
            <Link to="/profilDdmin" className="AlinkD">
              <BsFillPersonFill className="iconeDashbord" />
              <span>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;Profile </span>
            </Link>
          </li>
          <li>
            <Link to="/Equipement" className="AlinkD">
              <BsBack className="iconeDashbord" />
              <span>&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;Liste </span>
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
                              ) }
            </div>
        </div>
    <div className="contEmpl">
      <div className="tabH">
        <p className="pT">Liste Equipement</p>
        {detailEmplacement && (
          <div>
            <div className="divbalck">
          </div>
          <div className="divdetailEmplacement">
            <p><AiOutlineClose className="iconeannuler" onClick={() => setdetailEmplacement(null)} /></p>
            <p className="hjg">ste: {detailEmplacement.situe}</p>
            <p>Code Locale: {detailEmplacement.codelocal}</p>
            <p>Localisation: {detailEmplacement.localisation}</p>
            <p>Observation: {detailEmplacement.Observation}</p>
          </div>
        </div>
         
        )}
        <div className="icontelecharger">
          <BiDownload className="telecharger" />
        </div>
        
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
            
            {datasearch.length >0 ? 
                datasearch.map((element, index) => (
                  <tr key={index}>
                    <td>{element.nomequipment}</td>
                    <td>{element.marque}</td>
                    <td>{element.modele}</td>
                    <td>{element.serie}</td>
                    <td>{element.codebar}</td>
                    <td>
                      <Link onClick={() => handleEmplacementClick(element.emplacement)}>
                        {element.emplacement.codebar}
                      </Link>
                    </td>
                    <td>{element.affectationetulisateur}</td>
                    <td>{element.numeromarche}</td>
                  </tr>
                ))
                :
                datasearch == 0 && vide !==""  ?(
                  <tr>
                    <td colSpan={8}> Aucun equipement avec CAB ({search})</td>
                  </tr>
                )
                : data.map((element, index) => (
                  <tr key={index}>
                    <td>{element.nomequipment}</td>
                    <td>{element.marque}</td>
                    <td>{element.modele}</td>
                    <td>{element.serie}</td>
                    <td>{element.codebar}</td>
                    <td>
                      <Link onClick={() => handleEmplacementClick(element.emplacement)}>
                        {element.emplacement.codebar}
                      </Link>
                    </td>
                    <td>{element.affectationetulisateur}</td>
                    <td>{element.numeromarche}</td>
                  </tr>
                ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="9" style={{ backgroundColor: 'rgb(98, 98, 164)', color: "white", fontSize: "15px", fontWeight: "bold" }}></td>
            </tr>
          </tfoot>
        </table>
      </div>
        
        
         </div>
    </div>  
  
  );
}
