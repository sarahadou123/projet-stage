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
import ProfileUtilisatuer from "./profileUtilisateur"
import Header from "./header";
// import PasswordForget from "./PasswordForget"

function App() {
  const [dataadmine, setdataadmine]=useState([])
  const [dataUtilisateur , setDatautilisateur]=useState([])
  const [data,setdata]=useState([])
  const [activites, setActivites] = useState([]);
  const initialValue = localStorage.getItem("myValue") || "valeur par défaut";
  const [admineId,setadmineId]=useState(initialValue)
  const initialid = localStorage.getItem("myID") || "valeur par défaut";
  const [utiliID,setutiliID]=useState(initialid)
  const initialsearch = localStorage.getItem("mysearch") ;
  const [searchA,setsearchA]=useState(initialsearch)
  const [loading, setLoading] = useState(true);
  const [activitesetu, setActivitesetu] = useState([]);
  const [activitesequip, setactivitesequip] = useState([]);
  const initialidd = localStorage.getItem("myID") || "valeur par défaut";
  const [idAdmin,setidAdmin]=useState(initialidd)

  

  

  // useEffect( ()=>
  // {
  //   axios.get('http://localhost:2000/admin')
  //   .then(reponse => setdataadmine(reponse.data))
  //   .catch(error => console.error('error fetch :',error))
  // }
 
  // ,[])
  // useEffect( ()=>
  // {
  //   axios.get('http://localhost:2000/etulisateur')
  //   .then(reponse => setDatautilisateur(reponse.data))
  //   .catch(error => console.error('error fetch :',error))
  // }
  // ,[])

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


  const [valeur, setValeur] = useState('valeur par défaut');

  // Fonction pour mettre à jour la valeur et la stocker dans localStorage
  const mettreAJourValeurEtLocalStorage = (nouvelleValeur) => {
    setValeur(nouvelleValeur);
    localStorage.setItem('nom', nouvelleValeur);
  };

  if (loading) {
    return <div>Loading...</div>
  }
  return (
    <Router>
      <div>
        <nav>
        
        </nav>

        <Routes>
          
          <Route path="/" exact element={<Login setutiliID={setutiliID}   dataadmine={dataadmine}    dataUtilisateur={dataUtilisateur}  setDatautilisateur={setDatautilisateur}   setadmineId={setadmineId} admineId={admineId} idAdmin={idAdmin} setidAdmin={setidAdmin} />} />
          <Route path="/Accueil" exact element={<Accueil admineId={admineId}  dataadmine={dataadmine} setsearchA={setsearchA} searchA={searchA} data={data}  dataUtilisateur={dataUtilisateur}/>} />
          <Route path="/Profile"  element={<ProfileAdmin idAdmin={idAdmin} dataadmine={dataadmine}  activitesetu={activitesetu} setActivitesetu={setActivitesetu}  />} />
          <Route path="/header" element={<Header   admineId={admineId}  dataadmine={dataadmine}/>} />
          <Route path="/Equipement"  element={<ListeEquipement admineId={admineId} dataadmine={dataadmine} data={data} setdata={setdata} searchA={searchA} setsearchA={setsearchA}/>} />
          <Route path="/Emplacement" element={<EquipemntEpla admineId={admineId} idAdmin={idAdmin} data={data} setdata={setdata} dataadmine ={dataadmine}  activitesequip={activitesequip} setactivitesequip={setactivitesequip} />} />
          <Route path="/Etulisateur" element={<Etulisateur admineId={admineId} activitesetu={activitesetu} setActivitesetu={setActivitesetu} dataUtilisateur={dataUtilisateur}  />}  />
          <Route path="/AjouterAdmin" element={<FormulaireContact/>} dataadmine={dataadmine} setdataadmine={setdataadmine}  />
          <Route path="/profileUtili/:id" element={<ProfileUtilisatuer utiliID={utiliID} data={data} setdata={setdata}   dataUtilisateur={dataUtilisateur} setDatautilisateur={setDatautilisateur} />}/>        
          {/* <Route path="/forgetPassword"   element={<PasswordForget/>}/>  */}

          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
