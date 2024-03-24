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



export default function EquipemntEpla({data , setdata,activites, setActivites}) {
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

  const [idmodiff, setidmodiff]=useState()
 
  // const [selectedModel, setSelectedModel] = useState("");
  

 
  const ajouterActivite = (action, description) => {
    const nouvelleActivite = {
      action: action,
      description: description,
      date: new Date().toLocaleString(),
    };
    setActivites([...activites, nouvelleActivite]);
  };






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
    ajouterActivite("Ajout", "Ajout d'un équipement");

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

// Fonction pour supprimer un équipement
const supprimerUtilisateur = (id) => {
  // Logique pour supprimer un équipement
  const confirmation = window.confirm("Voulez-vous vraiment supprimer cet équipement ?");
  if (confirmation) {
    axios.delete(`http://localhost:2000/equipement/${id}`)
      .then(response => {
        // Si la suppression réussit, mettre à jour les données d'équipement et les activités
        setdata(data.filter(equipement => equipement.id !== id)); // Filtrer pour supprimer l'équipement supprimé
        ajouterActivite("Suppression", "Suppression d'un équipement"); // Ajouter une activité pour la suppression
      })
      .catch(error => console.error("Erreur lors de la suppression de l'équipement", error));
  }


   

  };

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
   ajouterActivite("Modification", "Modification d'un équipement");
 
   axios.put(`http://localhost:2000/equipement/${existE.id}`, existE)
   .then(response => {
                      console.log('Data updated:', response.data);
                      alert('Data updated successfully');
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
     

              
          <Header/>
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
            
            
           
              {data.map((elemnt)=>
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

