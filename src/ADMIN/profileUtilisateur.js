import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState ,useEffect } from "react";
import  axios  from "axios";
import {AiOutlineClose} from "react-icons/ai";
import "../StyleCss/ProfileUtilisateur.css";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Utilisateurs from "./Etulisateur";


export default function ProfileUtili(props){
  const {  dataUtilisateur , data, setdata , setDatautilisateur,utiliID}=props
  const [affecterEquipement, setaffecterEquipement] = useState(false);
  const [existUA, setexistUA ]=useState()
  const navigate=useNavigate()
  const {id}=useParams()
  const [detailEmplacement, setdetailEmplacement] = useState(null);

  const [selectedModel, setSelectedModel] = useState('');
  const [customModel, setCustomModel] = useState('');
  const [showCustomInput, setShowCustomInput] = useState(false);
  const [model,setmodele]=useState("")

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
  const [editProfile, seteditProfile ]=useState(false)

  const [nomUtili, setnomUtili]=useState("")
  const [prenomUtili, setprenomUtili]=useState("")
  const [matriculeUtili, setmatriculeUtili]=useState("")
  const [loginUtili, setloginUtili]=useState("")
  const [passwordUtili, setpasswordUtili]=useState("")
  
  const initialValue = id || "";
  const [idLOcaleSt, setidLOcaleSt] = useState(initialValue);

  useEffect(() => {
    setidLOcaleSt(idLOcaleSt)
    localStorage.setItem("myValue", idLOcaleSt);
  }, [idLOcaleSt]);

  // Chargement des données utilisateur à partir du localStorage lors du chargement initial de la page
  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setDatautilisateur(JSON.parse(storedUserData));
    }
  }, [setDatautilisateur]);

  // Mise à jour des données utilisateur dans le localStorage lorsque les données changent
  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(dataUtilisateur));
  }, [dataUtilisateur]);



  

   
    
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
  
  const utiliExists=dataUtilisateur.find(element => element.id == id );
  console.log(utiliExists)
  const equipementsAffectes = data.filter(
    (element) => element.affectationetulisateur === utiliExists.matricule
  );
  

  function logout(){
    navigate("/")
  }
  const handleEmplacementClick = (emplacementDetails) => {
    setdetailEmplacement(emplacementDetails);
  };

  // if(affecterEquipement==true){
  //   setmatriculeUTilisateur(utiliExists.affectationetulisateur)
  // }

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
      affectationetulisateur:utiliExists.matricule,
      numeromarche:NumMarche
    };
    const nbAfectUTILI={
      nbraffectation:equipementsAffectes.length
    }
    axios.post('http://localhost:2000/etulisateur',nbAfectUTILI)
    axios.post('http://localhost:2000/equipement',nouvelEquipement)
    
    setdata([...data,nouvelEquipement]);
    setDatautilisateur([...dataUtilisateur,nouvelEquipement]);

    setnameEquipement('');
    setmarqueE("");
    setNumsérie("");
    setCAB("");
    setNumMarche("");
    // setmatriculeUTilisateur("");
    setEmplacementCAB("");
    setSiteEplac("");
    setCodeLocaleE("");
    setLocalisationE("");
    setObservationE("");
    setSelectedModel("")
    setCustomModel("")
    setShowCustomInput(false)

    toast.success("Equipement affecter avec success ", {
      position: toast.POSITION.TOP_LEFT
    })
  }

      

  function EditeProfile(){
      seteditProfile(true)
      setnomUtili(utiliExists.nom);
      setprenomUtili(utiliExists.prenom);
      setmatriculeUtili(utiliExists.matricule);
      setloginUtili(utiliExists.login);
      setpasswordUtili(utiliExists.password);
  }
  function EditeProfileUtili(){
    // e.preventDefault()
  
    if (utiliExists){
      utiliExists.login = loginUtili;
      utiliExists.password = passwordUtili;
      utiliExists.nom = nomUtili;
      utiliExists.prenom = prenomUtili;
      utiliExists.matricule = matriculeUtili;
      utiliExists.nbraffectation=equipementsAffectes.length
    }
    axios.put(`http://localhost:2000/etulisateur/${utiliExists.id}`, utiliExists)
      .then(response => {
        console.log('Data updated:', response.dataUtilisateur);
        alert('Data updated successfully');
      })
      .catch(error => {console.error('Error updating data:', error);});
  }

  return(
    <div>
      <div className="headerProfilU">
      <ToastContainer />
        <div>
          <p className="P1headerUt">Bonjour <span>{utiliExists && utiliExists.prenom}</span> </p>
          <p className="P2headerUt">{equipementsAffectes.length}</p>
        </div>
        <div className="butonoutP">
          <button className="BtnPROU">
            <div className="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>
            <div className="textPR" onClick={logout} >Logout </div>
          </button>
        </div>
      </div>
      <div className="containerProfileU">
        <div className="headerCont"></div>
        <div className="header2Cont"> 
          <img src="/profilprojet.jpg" alt=""/>
        </div>
        <button className="ptnediteProfile" onClick={()=>EditeProfile()} >Edite Profile</button>
        <div className="divformation">
          <p className="p1"> <span>{utiliExists && utiliExists.nom}</span> {utiliExists && utiliExists.prenom}</p>
          <p className="p3">{utiliExists && utiliExists.matricule}</p>
          <p className="p3"> Nbr equipement affecter :{equipementsAffectes.length} </p>
          <div className="conAFF">
            <p className="mesE">Mes Equipements</p>
            <button className="btnAffecter" onClick={()=>setaffecterEquipement(true)}>Affecter un equipement</button>
            <div className="contAffecter">
            {detailEmplacement && (
                <div>
                  <div className="divbalck">
                </div>
                <div className="divdetailEmplacementUTILI">
                  <p><AiOutlineClose className="iconeannuler" onClick={() => setdetailEmplacement(null)} /></p>
                  <p className="hjg">ste: {detailEmplacement.situe}</p>
                  <p>Code Locale: {detailEmplacement.codelocal}</p>
                  <p>Localisation: {detailEmplacement.localisation}</p>
                  <p>Observation: {detailEmplacement.Observation}</p>
                </div>
              </div>
              
              )}
              {equipementsAffectes && equipementsAffectes.map(element =>
                      <div className="Mequipement">
                      <div className="diE1">
                        <p className="nomEquipe">Equipement: <span>{element.nomequipment}</span></p> 
                        <p className="nomEquipe">Marque: <span>{element.marque}</span></p>
                      </div>
                      <div className="diE2">
                        <p className="nomEquipe">Modele: <span>{element.modele}</span></p>
                        <p className="nomEquipe">N°série: <span>{element.serie}</span></p>
                      </div>
                      <div className="diE3">
                        <p className="nomEquipe">CAB: <span>{element.codebar}</span></p>
                        <p className="nomEquipe">Emplacement: <Link onClick={()=> handleEmplacementClick(element.emplacement)}>{element.codebar}</Link></p>
                      </div>
                      <div className="diE4">
                        <p className="nomEquipe">N°marche: <span>{element.numeromarche}</span></p>
                      </div>
                      
                    </div>
                
              )}
              
             
              
             
            </div>
          </div>
        </div>
        
      </div>
      {affecterEquipement && (
                  <>
                    <div className="divbalckk">
                    </div>
                        <div className="AffecterEq">
                                <p><AiOutlineClose className="iconeEannuler" onClick={()=>setaffecterEquipement(false)} /></p>
                                <h2 className="h2ajE">Affceter Equipement</h2>
                                <div className="contaifor">
                                        <div className="divINP1">
                                          <label>Equipement :</label>
                                          <input type="text" name="aquipement" value={nameEquipement} onChange={(e)=>setnameEquipement(e.target.value)}/>
                                        </div>
                                        <div className="divINP1">
                                          <label>Marque : </label>
                                          <input type="text" name="marque" value={marqueE} onChange={(e)=>setmarqueE(e.target.value)}/>
                                        </div>
                                        <div className="divINP1">
                                          <label>Modele :  </label>
                                          {showCustomInput ?
                                                  (
                                                    <div>
                                                      <input
                                                        type="text"
                                                        placeholder="Saisir Modele"
                                                        value={customModel}
                                                        onChange={handleCustomModelChange}
                                                      />
                                                      <AiOutlineClose className="iconeANULmodelPpRO" onClick={() => setShowCustomInput(false)} />
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
                                        </div>
                                        <div className="divINP1">
                                          <label>N°série :</label>
                                          <input type="text" name="N°série" value={Numsérie} onChange={(e)=>setNumsérie(e.target.value)} />
                                        </div>
                                        <div className="divINP1">
                                          <label>CAB : </label>
                                          <input type="text" name="CAB" value={CAB} onChange={(e)=>setCAB(e.target.value)}/>
                                        </div>
                                        <div className="divINP1">
                                          <label>Emplacement CAB :</label>
                                          <input type="text" name="affecter" value={EmplacementCAB} onChange={(e)=>setEmplacementCAB(e.target.value)} />
                                        </div>
                                        <div className="divINP1">
                                          <label>site d'Emplacement:</label>
                                          <input type="text" name="SiteEplac" value={SiteEplac} onChange={(e)=>setSiteEplac(e.target.value)}/>
                                        </div>
                                        <div className="divINP1">
                                          <label>Code Locale d'Emplacement :</label>
                                          <input type="text" name="CodeLocaleE" value={CodeLocaleE} onChange={(e)=>setCodeLocaleE(e.target.value)} />
                                        </div>
                                        <div className="divINP1">
                                          <label>Localisation d'Emplacement :</label>
                                          <input type="text" name="LocalisationE" value={LocalisationE} onChange={(e)=>setLocalisationE(e.target.value)} />
                                        </div>
                                        <div className="divINP1">
                                          <label>observation d'Emplacement:</label>
                                          <input type="text" name="ObservationE" value={ObservationE} onChange={(e)=>setObservationE(e.target.value)}/>
                                        </div>
                                        <div className="divINP1">
                                          <label>N°Marche :</label>
                                          <input type="text" name="NumMarche" value={NumMarche} onChange={(e)=>setNumMarche(e.target.value)} />
                                        </div>
                                        {/* <div className="divINP1">
                                          <label>matricule UTilisateur :</label>
                                          <input type="text" name="matriculeUtil" value={matriculeUTilisateur}   />
                                        </div> */}

                                </div>
                                <div className="btnLAffecter">
                                  <input type="submit" value="affecter" onClick={(e)=>AjoutEquipement(e)} />
                                </div>
                                    
                                     
                        </div>
                    
                    
                  </>
                )}

            {editProfile && (
                  <>
                    <div className="divbalckkEditPro">
                    </div>
                        <div className="AffecterEqProfile">
                        <p><AiOutlineClose className="iconeEannulerEdit" onClick={()=>seteditProfile(false)} /></p>
                           <h2 className="h2ajEProfile">Editer votre profile </h2>
                           <div className="minicontainer">
                              <div >
                                <div className="divINP1EDit">
                                    <label>Nom :</label>
                                    <input type="text" name="Nom" value={nomUtili} onChange={(e)=>setnomUtili(e.target.value)} />
                                </div>
                                <div className="divINP1EDit">
                                    <label>Prenom :</label>
                                    <input type="text" name="Prenom" value={prenomUtili} onChange={(e)=>setprenomUtili(e.target.value)} />
                                </div>
                                <div className="divINP1EDit">
                                    <label>Matricule :</label>
                                    <input type="text" name="Matricule" value={matriculeUtili} onChange={(e)=>setmatriculeUtili(e.target.value)} />
                                </div>
                                <div className="divINP1EDit">
                                    <label>Login :</label>
                                    <input type="text" name="Login" value={loginUtili} onChange={(e)=>setloginUtili(e.target.value)} />
                                </div>
                                <div className="divINP1EDit">
                                    <label>Password :</label>
                                    <input type="text" name="Password" value={passwordUtili} onChange={(e)=>setpasswordUtili(e.target.value)} />
                                </div>
                                
                              </div>
                              
                              
                              <div className="btnLEdite">
                                  <input type="submit" value="affecter" onClick={()=>EditeProfileUtili()} />
                                </div>
                              
                           </div>
                          
                         
                         </div> 
                    </>)}
    </div>
  )
}