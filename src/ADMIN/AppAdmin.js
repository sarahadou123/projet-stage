import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from "./Accueil";
import EquipemntEpla from "./Emplacement";
import ListeEquipement from "./Equipement";
import Etulisateur from "./Etulisateur";
import ProfileAdmin from "./Profile";
import FormulaireContact from "./AjouterAdmin";
import Login from "./login";
import axios from "axios";
import ProfileUtilisatuer from "./profileUtilisateur";

function App() {
  const [dataadmine, setdataadmine]=useState([]);
  const [dataUtilisateur , setDatautilisateur]=useState([]);
  const [data,setdata]=useState([]);
  const [activites, setActivites] = useState([]);
  const [idUtili,setidUtili]=useState("")
  const [activitesetu, setActivitesetu] = useState([]);
  const [activitesequip, setactivitesequip] = useState([]);
  const initialid = localStorage.getItem("myID") || "valeur par défaut";
  const [idAdmin,setidAdmin]=useState(initialid)
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const initialID = localStorage.getItem("myValue") || "valeur par défaut";
    setidAdmin(initialID);

    axios.get('http://localhost:2000/admin')
      .then(response => {
        setdataadmine(response.data);
        setLoading(false); // Mettre le chargement à false une fois les données chargées
      })
      .catch(error => console.error('error fetch :', error));

    axios.get('http://localhost:2000/etulisateur')
      .then(response => setDatautilisateur(response.data))
      .catch(error => console.error('error fetch :', error));

    axios.get("http://localhost:2000/equipement")
      .then(response => setdata(response.data))
      .catch(error => console.error("Error fetching data", error));
  }, []);

  if (loading) {
    return <div>Loading...</div>}
  return (
    <Router>
      <div>
        <nav>
        
        </nav>

        <Routes>
          
          <Route path="/" exact element={<Login idAdmin={idAdmin} setidAdmin={setidAdmin} dataadmine={dataadmine}    dataUtilisateur={dataUtilisateur}  setDatautilisateur={setDatautilisateur} idUtili={idUtili} setidUtili={setidUtili}   />} />
          <Route path="/Accueil" exact element={<Accueil  data={data}  dataUtilisateur={dataUtilisateur}  />} />
          <Route path="/Profile"  element={<ProfileAdmin  idAdmin={idAdmin} setidAdmin={setidAdmin}  dataadmine={dataadmine}  activitesetu={activitesetu} setActivitesetu={setActivitesetu} />} />
          <Route path="/Equipement"  element={<ListeEquipement   dataadmine={dataadmine}  data={data} setdata={setdata}/>} />
          <Route path="/Emplacement" element={<EquipemntEpla   idAdmin={idAdmin} setidAdmin={setidAdmin}  dataadmine ={dataadmine}  activitesequip={activitesequip} setactivitesequip={setactivitesequip} data={data} setdata={setdata}/>} />
          <Route path="/Etulisateur" element={<Etulisateur   activitesetu={activitesetu} setActivitesetu={setActivitesetu}  dataUtilisateur={dataUtilisateur}  />}  />
          <Route path="/AjouterAdmin" element={<FormulaireContact  dataadmine={dataadmine} setdataadmine={setdataadmine} />}  />
          <Route path="/profileUtili" element={<ProfileUtilisatuer idUtili={idUtili}      dataUtilisateur={dataUtilisateur} />}/>
         
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
