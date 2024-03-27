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
import Header from "./header";
// import PasswordForget from "./PasswordForget"

function App() {
  const [dataadmine, setdataadmine]=useState([])
  const [dataUtilisateur , setDatautilisateur]=useState([])
  const [data,setdata]=useState([])
  const initialValue = localStorage.getItem("myValue") || "valeur par défaut";
  const [admineId,setadmineId]=useState(initialValue)
  const initialid = localStorage.getItem("myID") || "valeur par défaut";
  const [utiliID,setutiliID]=useState(initialid)
  const initialsearch = localStorage.getItem("mysearch") ;
  const [searchA,setsearchA]=useState(initialsearch)

  

  

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

  
  const [valeur, setValeur] = useState('valeur par défaut');

  // Fonction pour mettre à jour la valeur et la stocker dans localStorage
  const mettreAJourValeurEtLocalStorage = (nouvelleValeur) => {
    setValeur(nouvelleValeur);
    localStorage.setItem('nom', nouvelleValeur);
  };

  return (
    <Router>
      <div>
        <nav>
        
        </nav>

        <Routes>
          
          <Route path="/" exact element={<Login setutiliID={setutiliID}   dataadmine={dataadmine}    dataUtilisateur={dataUtilisateur}  setDatautilisateur={setDatautilisateur}   setadmineId={setadmineId} admineId={admineId} />} />
          <Route path="/Accueil" exact element={<Accueil admineId={admineId}  dataadmine={dataadmine} setsearchA={setsearchA} searchA={searchA} />} />
          <Route path="/Profile"  element={<ProfileAdmin/>} />
          <Route path="/header" element={<Header   admineId={admineId}  dataadmine={dataadmine}/>} />
          <Route path="/Equipement"  element={<ListeEquipement admineId={admineId} data={data} setdata={setdata} searchA={searchA} setsearchA={setsearchA}/>} />
          <Route path="/Emplacement" element={<EquipemntEpla admineId={admineId}  data={data} setdata={setdata}/>} />
          <Route path="/Etulisateur" element={<Etulisateur admineId={admineId} dataUtilisateur={dataUtilisateur}  />}  />
          <Route path="/AjouterAdmin" element={<FormulaireContact/>}  />
          <Route path="/profileUtili/:id" element={<ProfileUtilisatuer utiliID={utiliID} data={data} setdata={setdata}   dataUtilisateur={dataUtilisateur} setDatautilisateur={setDatautilisateur} />}/>        
          {/* <Route path="/forgetPassword"   element={<PasswordForget/>}/>  */}
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
