import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineLogout, AiOutlineClose } from "react-icons/ai";
import { BsArrowLeftCircleFill, BsFillPersonFill, BsFillPeopleFill, BsArchiveFill, BsBack, BsTrash3 } from "react-icons/bs";
import { BiDownload } from "react-icons/bi";
import Header from "./header";

export default function ListeEquipement({ data, setdata }) {
  const [detailEmplacement, setdetailEmplacement] = useState(null);

  const handleEmplacementClick = (emplacementDetails) => {
    setdetailEmplacement(emplacementDetails);
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
          <BiDownload className="telecharger" />
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
