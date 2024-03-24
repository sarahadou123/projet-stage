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
  const [data,setdata]=useState([]);
  const [activites, setActivites] = useState([]);
  const [idUtili,setidUtili]=useState("")

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
  useEffect(() => {
    axios.get("http://localhost:2000/equipement")
      .then(response => setdata(response.data))
      .catch(error => console.error("Error fetching data", error));
  }, []);


  return (
    <Router>
      <div>
        <nav>
        
        </nav>

        <Routes>
          
          <Route path="/" exact element={<Login dataadmine={dataadmine}    dataUtilisateur={dataUtilisateur}  setDatautilisateur={setDatautilisateur} idUtili={idUtili} setidUtili={setidUtili}   />} />
          <Route path="/Accueil" exact element={<Accueil  data={data}  dataUtilisateur={dataUtilisateur}  />} />
          <Route path="/Profile"  element={<ProfileAdmin activites={activites} setActivites={setActivites}/>} />
          <Route path="/Equipement"  element={<ListeEquipement  data={data} setdata={setdata}/>} />
          <Route path="/Emplacement" element={<EquipemntEpla activites={activites} setActivites={setActivites} data={data} setdata={setdata}/>} />
          <Route path="/Etulisateur" element={<Etulisateur />}  />
          <Route path="/AjouterAdmin" element={<FormulaireContact  dataadmine={dataadmine} setdataadmine={setdataadmine} />}  />
          <Route path="/profileUtili" element={<ProfileUtilisatuer idUtili={idUtili}      dataUtilisateur={dataUtilisateur} />}/>
         
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
