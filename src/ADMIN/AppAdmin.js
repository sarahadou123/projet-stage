// App.js
import React from "react";
import { BrowserRouter as Router, Route,Routes, Link } from "react-router-dom";
import Accueil from "./Accueil";
import EquipemntEpla from "./Emplacement";
import ListeEquipement from "./Equipement";
import Etulisateur from "./Etulisateur";
import ProfileAdmin from "./Profile";
import FormulaireContact from "./AjouterAdmin";
function App() {
  return (
    <Router>
      <div>
        <nav>
        
        </nav>

        <Routes>
          <Route path="/" exact element={<Accueil/>} />
          <Route path="/Profile"  element={<ProfileAdmin/>}  />
          <Route path="/Equipement"  element={<ListeEquipement/>}  />
          <Route path="/Emplacement" element={<EquipemntEpla/>} />
          <Route path="/Etulisateur" element={<Etulisateur/>}  />
          <Route path="/AjouterAdmin" element={<FormulaireContact/>}  />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
