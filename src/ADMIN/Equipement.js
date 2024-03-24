import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineLogout, AiOutlineClose } from "react-icons/ai";
import { BsArrowLeftCircleFill, BsFillPersonFill, BsFillPeopleFill, BsArchiveFill, BsBack, BsTrash3 } from "react-icons/bs";
import { BiDownload } from "react-icons/bi";
import Header from "./header";
import axios from 'axios';
import * as XLSX from 'xlsx';

export default function ListeEquipement({ data, setdata }) {
  const [detailEmplacement, setdetailEmplacement] = useState(null);
 
  const handleEmplacementClick = (emplacementDetails) => {
    setdetailEmplacement(emplacementDetails);
  };
  const [dataequip, setDataequip] = useState([]);
  const fetchDataAndExportToExcel = async () => {
    try {
      const response = await axios.get('http://localhost:2000/equipement');
      setDataequip(response.data);

      exportToExcel(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des données ou de l\'exportation vers Excel : ', error);
    }
  };
  const exportToExcel = (data) => {
    const formattedData = data.map(item => ({
      nomequipment: item.nomequipment,
      marque: item.marque,
      modele: item.modele,
      serie: item.serie,
      codebar: item.codebar,
      emp_situe: item.emplacement.situe,
      emp_codelocal: item.emplacement.codelocal,
      emp_localisation: item.emplacement.localisation,
      emp_Observation: item.emplacement.Observation,
      affectationetulisateur: item.affectationetulisateur,
      numeromarche: item.numeromarche,
      id: item.id
    }));
  
    const worksheet = XLSX.utils.json_to_sheet(formattedData);
    
    // Applying cell styles for specific fields
    worksheet.A1.s = { fill: { fgColor: { rgb: "FFFF00" } } }; // Yellow color for nomequipment
    worksheet.J1.s = { fill: { fgColor: { rgb: "FF0000" } } }; // Red color for id
  
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Data');
    XLSX.writeFile(workbook, 'donnees.xlsx');
  };
  
  
 

  

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
            <Link to="/profilDdmin" className="AlinkD">
              <BsFillPersonFill className="iconeDashbord" />
              <span>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;Profile </span>
            </Link>
          </li>
          <li>
            <Link to="/Equipement" className="AlinkD">
              <BsBack className="iconeDashbord" />
              <span>&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;Liste </span>
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
            <Link to="/logout" className="AlinkD">
              <AiOutlineLogout className="iconeDashbord" />
              <span>&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;Logout </span>
            </Link>
          </li>
        </ul>
      </div>

      <Header />
    <div className="contEmpl">
      <div className="tabH">
        <p className="pT">Liste Equipement</p>
        {detailEmplacement && (
          <div>
            <div className="divbalck">
          </div>
          <div className="divdetailEmplacement">
            <p><AiOutlineClose className="iconeannuler" onClick={() => setdetailEmplacement(null)} /></p>
            <p className="hjg">ste: {detailEmplacement.situe}</p>
            <p>Code Locale: {detailEmplacement.codelocal}</p>
            <p>Localisation: {detailEmplacement.localisation}</p>
            <p>Observation: {detailEmplacement.Observation}</p>
          </div>
        </div>
         
        )}
       <div className="icontelecharger">
  <BiDownload className="telecharger" onClick={fetchDataAndExportToExcel} />
</div>



        
        <table>
          <thead>
            <tr>
              <th>Equipement</th>
              <th>Marque</th>
              <th>Modele</th>
              <th>N°Service</th>
              <th>CAB</th>
              <th>Emplacement</th>
              <th>Affecter</th>
              <th>N°Marche</th>
            </tr>
          </thead>
          <tbody>
            {data.map((element, index) => (
              <tr key={index}>
                <td>{element.nomequipment}</td>
                <td>{element.marque}</td>
                <td>{element.modele}</td>
                <td>{element.serie}</td>
                <td>{element.codebar}</td>
                <td>
                  <Link onClick={() => handleEmplacementClick(element.emplacement)}>
                    {element.emplacement.codebar}
                  </Link>
                </td>
                <td>{element.affectationetulisateur}</td>
                <td>{element.numeromarche}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="9" style={{ backgroundColor: 'rgb(98, 98, 164)', color: "white", fontSize: "15px", fontWeight: "bold" }}></td>
            </tr>
          </tfoot>
        </table>
      </div>
        
        
         </div>
    </div>  
  
  );
}
