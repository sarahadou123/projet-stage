import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {AiOutlineClose} from "react-icons/ai";
import "../StyleCss/ProfileUtilisateur.css";


export default function ProfileUtili(props){
  const {idUtili , dataUtilisateur}=props
  const [affecterEquipement, setaffecterEquipement] = useState(false);
  const [existUA, setexistUA ]=useState()
  const navigate=useNavigate()
  
  const utiliExists=dataUtilisateur.find(element => element.id == idUtili );

  function logout(){
    navigate("/")
  }

  return(
    <div>
      <div className="headerProfilU">
        <div>
          <p className="P1headerUt">Bonjour <span>{utiliExists.prenom}</span> </p>
          <p className="P2headerUt">{utiliExists.nbraffectation}</p>
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
          <img src="profilprojet.jpg" alt=""/>
        </div>
        <button className="ptnediteProfile">Edite Profile</button>
        <div className="divformation">
          <p className="p1"> <span>{utiliExists.nom}</span> {utiliExists.prenom}</p>
          <p className="p3">{utiliExists.matricule}</p>
          <p className="p3"> Nbr equipement affecter :{utiliExists.nbraffectation} </p>
          <div className="conAFF">
            <p className="mesE">Mes Equipements</p>
            <button className="btnAffecter" onClick={()=>setaffecterEquipement(true)}>Affecter un equipement</button>
            <div className="contAffecter">
              <div className="Mequipement">
                <div className="diE1">
                  <p className="nomEquipe">Equipement: <span>PC</span></p> 
                  <p className="nomEquipe">Marque: <span>dell</span></p>
                </div>
                <div className="diE2">
                  <p className="nomEquipe">Modele: <span>2010</span></p>
                  <p className="nomEquipe">N°série: <span>213</span></p>
                </div>
                <div className="diE3">
                  <p className="nomEquipe">CAB: <span>123E45</span></p>
                  <p className="nomEquipe">Emplacement: <span>9808</span></p>
                </div>
                <div className="diE4">
                  <p className="nomEquipe">N°marche: <span>12</span></p>
                </div>
                
              </div>
              <div className="Mequipement">
                <div className="diE1">
                  <p className="nomEquipe">Equipement: <span>PC</span>  </p> 
                  <p className="nomEquipe">Marque: <span>dell</span></p>
                </div>
                <div className="diE2">
                  <p className="nomEquipe">Modele: <span>2010</span></p>
                  <p className="nomEquipe">N°série: <span>213</span></p>
                </div>
                <div className="diE3">
                  <p className="nomEquipe">CAB: <span>123E45</span></p>
                  <p className="nomEquipe">Emplacement: <span>9808</span></p>
                </div>
                <div className="diE4">
                  <p className="nomEquipe">N°marche: <span>12</span></p>
                </div>
              </div>
              
             
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
                                          <input type="text" name="aquipement" />
                                        </div>
                                        <div className="divINP1">
                                          <label>Marque : </label>
                                          <input type="text" name="marque" />
                                        </div>
                                        <div className="divINP1">
                                          <label>Modele :  </label>
                                          <input type="text" name="Modele" />
                                        </div>
                                        <div className="divINP1">
                                          <label>N°série :</label>
                                          <input type="text" name="N°série" />
                                        </div>
                                        <div className="divINP1">
                                          <label>CAB : </label>
                                          <input type="text" name="CAB" />
                                        </div>
                                        <div className="divINP1">
                                          <label>Affceter :</label>
                                          <input type="text" name="affecter" />
                                        </div>
                                        <div className="divINP1">
                                          <label>N°Marche :</label>
                                          <input type="text" name="N°Marche" />
                                        </div>

                                </div>
                                <div className="btnLAffecter">
                                  <input type="submit" value="affecter"/>
                                </div>
                                    
                                     
                        </div>
                    
                    
                  </>
                )}
    </div>
  )
}