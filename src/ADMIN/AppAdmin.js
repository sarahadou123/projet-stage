// App.js
import React,{useEffect, useState} from "react";
import { BrowserRouter as Router ,Routes,Route } from "react-router-dom";
import Accueil from "./Accueil";
import EquipemntEpla from "./Emplacement";
import ListeEquipement from "./Equipement";
import Etulisateur from "./Etulisateur";
import ProfileAdmin from "./Profile";
import FormulaireContact from "./AjouterAdmin";
import Login from "./login";
import axios from "axios";
import ProfileUtilisatuer from "./profileUtilisateur"

function App() {
  const [dataadmine, setdataadmine]=useState([])
  const [dataUtilisateur , setDatautilisateur]=useState([])
  useEffect( ()=>
  {
    axios.get('http://localhost:2000/admin')
    .then(reponse => setdataadmine(reponse.data))
    .catch(error => console.error('error fetch :',error))
  }
 
  ,[])
  useEffect( ()=>
  {
    axios.get('http://localhost:2000/etulisateur')
    .then(reponse => setDatautilisateur(reponse.data))
    .catch(error => console.error('error fetch :',error))
  }
 
  ,[])
  return (
    <Router>
      <div>
        <nav>
        
        </nav>

        <Routes>
          
          <Route path="/" exact element={<Login dataadmine={dataadmine}    dataUtilisateur={dataUtilisateur}  setDatautilisateur={setDatautilisateur}  />} />
          <Route path="/Accueil" exact element={<Accueil/>} />
          <Route path="/Profile"  element={<ProfileAdmin/>}  />
          <Route path="/Equipement"  element={<ListeEquipement/>}  />
          <Route path="/Emplacement" element={<EquipemntEpla/>} />
          <Route path="/Etulisateur" element={<Etulisateur/>}  />
          <Route path="/AjouterAdmin" element={<FormulaireContact/>}  />
          <Route path="/profileUtili" element={<ProfileUtilisatuer/>}/>
         
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
