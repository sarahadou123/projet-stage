import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineTeam, AiOutlineUser, AiOutlineLogout, AiOutlineSearch, AiOutlineCheck ,AiOutlineClose} from "react-icons/ai";
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
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";




export default function EquipemntEpla(props) {
  const { data,idAdmin, dataadmine, setdata, activitesequip,admineId , setactivitesequip}=props
  const [selectedModel, setSelectedModel] = useState('');
  const [customModel, setCustomModel] = useState('');
  const [showCustomInput, setShowCustomInput] = useState(false);

  const [nameEquipement, setnameEquipement ]=useState("")
  const [marqueE, setmarqueE ]=useState("")
  const [Numsérie, setNumsérie ]=useState("")
  const [CAB, setCAB ]=useState("")
  const [NumMarche, setNumMarche ]=useState("")
  const [matriculeUTilisateur, setmatriculeUTilisateur ]=useState("")
  const [EmplacementCAB, setEmplacementCAB]=useState("")
  const [SiteEplac, setSiteEplac ]=useState("")
  const [CodeLocaleE, setCodeLocaleE ]=useState("")
  const [LocalisationE, setLocalisationE ]=useState("")
  const [ObservationE, setObservationE ]=useState("")
  const [model,setmodele]=useState("")
  

  ///header
    const [idmodiff, setidmodiff]=useState()
    const [showProfile, setShowProfile] = useState(false);
    const navigate=useNavigate()
    const [data1DMINE, setdata1DMINE ]=useState([])

 
  // const [selectedModel, setSelectedModel] = useState("");
  const [archiveSuppression, setArchiveSuppression] = useState([]);
 

  useEffect(() => {
    const storedActivities = JSON.parse(localStorage.getItem('activities'));
    const storedArchive = JSON.parse(localStorage.getItem('archiveSuppression'));

    if (storedActivities) {
      setactivitesequip(storedActivities);
    }
    if (storedArchive) {
      setArchiveSuppression(storedArchive);
    }
  }, []);


  const ajouterActivite = (action, description) => {
    const admineAafficher = dataadmine.find(admin => admin.id === idAdmin);
    const nouvelleActivite = {
        action: action,
        description: description,
        date: new Date().toLocaleString(),
        nomAdmin: admineAafficher ? admineAafficher.nom : "vide",
        prenomAdmin: admineAafficher ? admineAafficher.prenom : "vide",
    };
    
    const updatedActivities = [...activitesequip, nouvelleActivite];
    setactivitesequip(updatedActivities);
    localStorage.setItem('activities', JSON.stringify(updatedActivities));
  
    // Ajouter à l'archive de suppression
    const updatedArchive = [...archiveSuppression, nouvelleActivite];
    setArchiveSuppression(updatedArchive); // Mettre à jour l'état local
    localStorage.setItem('archiveSuppression', JSON.stringify(updatedArchive)); // Stocker dans le localStorage
};
const admin = dataadmine.find(admin => admin.id === idAdmin);
console.log("admin:", admin); // Vérifiez les informations de l'administrateur dans la console
const nomAdmin = admin ? admin.nom : "Nom non disponible";
const prenomAdmin = admin ? admin.prenom : "Prénom non disponible";
console.log("nomAdmin:", nomAdmin); // Vérifiez le nom de l'administrateur dans la console
console.log("prenomAdmin:", prenomAdmin); 

 //----------------------------------------------SUPPRESSION---------------------------------------------------------------------------------


  
 const supprimerUtilisateur = (id) => {
  const confirmation = window.confirm("Voulez-vous vraiment supprimer cet equipement ?");
  if (confirmation) {
    axios.delete(`http://localhost:2000/equipement/${id}`)
      .then(response => {
        setdata(data.filter(user => user.id !== id));
        const nouvelleActivite = {
        
          action: "Suppression",
          description: "Suppression d'un utilisateur",
          date: new Date().toLocaleString(),
        };
        ajouterActivite("Suppression", "Suppression d'un equipement");
        setArchiveSuppression([...archiveSuppression, nouvelleActivite]);
      })
      .catch(error => console.error("Erreur lors de la suppression de l'utilisateur", error));
  }
};
  
 
 




 //-------------------------------------------------------------------------------------------------------------------------------


    const [search,setsearch]=useState("")
    const [datasearch,setdatasearch]=useState([])
    const [vide,setvide]=useState("")
  

    function searcher(e){
      e.preventDefault()
      setdatasearch(data.filter(element => element.codebar === search.trim().toUpperCase() || element.nomequipment.toUpperCase() ===search.trim().toUpperCase() || element.marque.toUpperCase() ===search.trim().toUpperCase() || element.affectationetulisateur.toUpperCase() ===search.trim().toUpperCase() || element.nomequipment.toUpperCase() ===search.trim().toUpperCase() || element.marque.toUpperCase() ===search.trim().toUpperCase() || element.affectationetulisateur.toUpperCase() ===search.trim().toUpperCase() || element.numeromarche ===search.trim().toUpperCase() ))
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
////

  const handleModelChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedModel(selectedValue);
    setShowCustomInput(selectedValue === 'custom');
    if (selectedValue === 'custom') {
      setCustomModel('');
    }
    setmodele(selectedValue)
  };
  const handleCustomModelChange = (e) => {
        setCustomModel(e.target.value);
        setmodele(e.target.value);
      };
    
  const handleCustomClick = () => {
      setSelectedModel('custom');
      setShowCustomInput(true);
  }; 
  
 //--------------------------------------------------------------AJOUTER-----------------------------------------------------------------

  

  useEffect(() => {
    axios.get("http://localhost:2000/equipement")
      .then(response => setdata(response.data))
      .catch(error => console.error("Error fetching data", error));
  }, []);
  

  function AjoutEquipement(e){
    // e.preventDefault()
    const nouvelEquipement = {
      nomequipment: nameEquipement,
      marque: marqueE,
      modele: model,
      serie: Numsérie,
      codebar: CAB,
      emplacement: {
          codebar: EmplacementCAB,
          situe: SiteEplac,
          codelocal: CodeLocaleE,
          localisation: LocalisationE,
          Observation: ObservationE
      },
      affectationetulisateur:matriculeUTilisateur,
      numeromarche:NumMarche
    };
    ajouterActivite("Ajouter", "Ajoute d'un équipement");

    axios.post('http://localhost:2000/equipement',nouvelEquipement)

    setdata([...data,nouvelEquipement]);

    setnameEquipement('');
    setmarqueE("");
    setNumsérie("");
    setCAB("");
    setNumMarche("");
    setmatriculeUTilisateur("");
    setEmplacementCAB("");
    setSiteEplac("");
    setCodeLocaleE("");
    setLocalisationE("");
    setObservationE("");
    setSelectedModel("")
    setCustomModel("")
    setShowCustomInput(false)
    // console.log(model)
  }

//---------------------------------------------------------SUPPRIMER----------------------------------------------------------------------

  function modifierEquipe(id ){
    const EquipemetModif=data.find(element => element.id==id  );
    if (EquipemetModif) {
      setnameEquipement(EquipemetModif.nomequipment);
      setmarqueE(EquipemetModif.marque);
      setNumsérie(EquipemetModif.serie);
      setCAB(EquipemetModif.codebar);
      setNumMarche(EquipemetModif.numeromarche);
      setmatriculeUTilisateur(EquipemetModif.affectationetulisateur);
      setEmplacementCAB(EquipemetModif.emplacement.codebar);
      setSiteEplac(EquipemetModif.emplacement.situe);
      setCodeLocaleE(EquipemetModif.emplacement.codelocal);
      setLocalisationE(EquipemetModif.emplacement.localisation);
      setObservationE(EquipemetModif.emplacement.Observation);
      setSelectedModel(EquipemetModif.modele);
      setCustomModel(EquipemetModif.modele)
      setidmodiff(EquipemetModif.id)
    }

    

  }
 

  function modifierEuipement(){
   const existE= data.find(element => element.id==idmodiff  )

    if (existE){
      existE.nomequipment=nameEquipement ;
      if (selectedModel){
        existE.modele=selectedModel
      }
      else{
        existE.modele=customModel
      };
      existE.marque=marqueE ;
      existE.serie=Numsérie ;
      existE.codebar=CAB ;
      existE.emplacement.codebar=EmplacementCAB ;
      existE.emplacement.situe=SiteEplac ;
      existE.emplacement.codelocal=CodeLocaleE ;
      existE.emplacement.localisation=LocalisationE ;
      existE.emplacement.Observation=ObservationE ;
      existE.affectationetulisateur=matriculeUTilisateur ;
      existE.numeromarche=NumMarche ;
   }
  
 
   axios.put(`http://localhost:2000/equipement/${existE.id}`, existE)
   .then(response => {
                      console.log('Data updated:', response.data);
                      alert('Data updated successfully');
                      ajouterActivite("Modification", "Modification d'un équipement");
                    })
   .catch(error => {console.error('Error updating data:', error);});
  }


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
     

              
          {/* <Header/> */}
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
                                    <div className="div77">
                                      <p> <IoPersonAddOutline /><Link to="/AjouterAdmin">ajouter un autre compte</Link></p>
                                    </div>
                                </div>
                                
                              </div>
                              )}
            </div>
        </div>
      <div className="contEmpl">
        <div className="header">
          <form className="formEMp" >
            <tr>
                <td> 
                  <input type="text" placeholder="Equipement" value={nameEquipement} onChange={(e)=>setnameEquipement(e.target.value)} />
                </td>
                <td>
                  <input type="text" placeholder="Marque" value={marqueE} onChange={(e)=>setmarqueE(e.target.value)}/>
                </td>
                <td>
                  {showCustomInput ?
                  (
                    <div>
                      <input
                        type="text"
                        placeholder="Saisir Modele"
                        value={customModel}
                        onChange={handleCustomModelChange}
                      />
                      <AiOutlineClose className="iconeANULmodel" onClick={() => setShowCustomInput(false)} />
                    </div>
                  )
                    :(
                      <select id="pcModel" value={selectedModel} onChange={handleModelChange}>
                        <option value="">Modele</option>
                        {[...new Set(data.map(model => model.modele))].map((uniqueModel, index) => (
                            <option key={index} value={uniqueModel}>{uniqueModel}</option>
                        ))}
                        <option value="custom">Saisir modele</option>
                      </select>
                    ) 
                  
                   }
                </td>
                <td>
                  <input type="text"placeholder="N°Série" value={Numsérie} onChange={(e)=>setNumsérie(e.target.value)}/><br/>
                </td>

            </tr>
            <tr className="tr2">
                <td><input type="text" placeholder="CAB" value={CAB} onChange={(e)=>setCAB(e.target.value)}/></td>
                <td><input type="text" placeholder="Emplacement CAB" value={EmplacementCAB} onChange={(e)=>setEmplacementCAB(e.target.value)}/></td>
                <td><input type="text"placeholder="site Emplacement" value={SiteEplac} onChange={(e)=>setSiteEplac(e.target.value)}/></td>
                <td><input type="text"placeholder="Code Locale Emplacement" value={CodeLocaleE} onChange={(e)=>setCodeLocaleE(e.target.value)}/></td>
            </tr>
            <tr className="tr2">
                <td><input type="text"placeholder="Localisation Emplacement"  value={LocalisationE} onChange={(e)=>setLocalisationE(e.target.value)}/></td>
                <td><input type="text"placeholder="observation Emplacement " value={ObservationE} onChange={(e)=>setObservationE(e.target.value)}/></td>
                <td><input type="text"placeholder="N°Marche" value={NumMarche} onChange={(e)=>setNumMarche(e.target.value)}/></td>
                <td><input type="text"placeholder="matricule utilisateur" value={matriculeUTilisateur} onChange={(e)=>setmatriculeUTilisateur(e.target.value)}/></td>
            </tr>
            <tr className="trtr3button3">
                <td><button type="button" className="buttonfo" onClick={(e)=>AjoutEquipement(e)} >Ajouter</button></td>
                <td><button className="buttonfo" onClick={()=>modifierEuipement()} >Modifier</button>
            </td>
            </tr>
            </form>
        </div>
        <div className="tabH" >
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
            
            
           
              {datasearch.length >0 ? 
                datasearch.map((element, index) => (
                  <tr key={index}>
                    <td>{element.nomequipment}</td>
                    <td>{element.marque}</td>
                    <td>{element.modele}</td>
                    <td>{element.serie}</td>
                    <td>{element.codebar}</td>
                    <td>{element.emplacement ? element.emplacement.codebar : ''}</td>
                    <td>{element.affectationetulisateur}</td>
                    <td>{element.numeromarche}</td>
                    <td>
                      <button  className="btnsuppe"  onClick={() => supprimerUtilisateur(element.id)}  ><BsTrash3 className="large-delete-icon" style={{ cursor: 'pointer', marginLeft: '15px' }} /></button>
                    </td>
                    <td>
                      <button  className="modifier" onClick={()=>modifierEquipe(element.id) } ><BsPencilSquare style={{color:"white",fontSize:"20px"}} /></button>
                    </td>
                  </tr>
                ))
                :
                datasearch == 0 && vide !==""  ?(
                  <tr>
                    <td colSpan={8}> Aucun equipement avec ce CAB ({search})</td>
                  </tr>
                )
              :data.map((elemnt)=>
              <tr>
                <td>{elemnt.nomequipment}</td>
                <td>{elemnt.marque}</td>
                <td>{elemnt.modele}</td>
                <td>{elemnt.serie}</td>
                <td>{elemnt.codebar}</td>
                <td>{elemnt.emplacement ? elemnt.emplacement.codebar : ''}</td>
                <td>{elemnt.affectationetulisateur}</td>
                <td>{elemnt.numeromarche}</td>
                <td>
                  <button  className="btnsuppe"  onClick={() => supprimerUtilisateur(elemnt.id)}  ><BsTrash3 className="large-delete-icon" style={{ cursor: 'pointer', marginLeft: '15px' }} /></button>
                </td>
                <td>
                  <button  className="modifier" onClick={()=>modifierEquipe(elemnt.id) } ><BsPencilSquare style={{color:"white",fontSize:"20px"}} /></button>
                </td>
              </tr>
                
                )}
             
            
            </tbody>
            <tfoot  >
              <tr>
                <td className="tfoot" colSpan="12" style={{ backgroundColor: 'rgb(98, 98, 164)',color: " white", fontSize: "15px", fontWeight: "bold" }}></td>
              </tr>
            </tfoot>
            
          </table>
        
      
         
          
        </div>
        
        </div>  
    </div>
    
            
  
  );
}

