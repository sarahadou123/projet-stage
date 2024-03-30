import React from 'react';
import "../StyleCss/profiladmin.css";
import { FaEnvelope,FaPhone,FaBuilding ,FaRegFileAlt,FaMapMarkerAlt} from 'react-icons/fa'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
function ProfileAdmin({idAdmin,dataadmine}) {
  
  const archiveSuppression = JSON.parse(localStorage.getItem('archiveSuppression')) || [];

  // Trouver l'administrateur correspondant à l'idAdmin
  const admin = dataadmine.find(admin => admin.id === idAdmin);

  // Extraire le nom et le prénom de l'administrateur
  const nomAdmin = admin ? admin.nom : "Nom non disponible";
  const prenomAdmin = admin ? admin.prenom : "Prénom non disponible";
  

  return (
    <div>
      <div class='div1'>
      <Link className='linadmin1' to="/Accueil">
      retour
      </Link>
      <div>

      <div class="image-container">
          <img src="./profilprojet.jpg" alt="Description de votre image" className='imagg' />
    
        </div>
              <div class="divtab">
        <label class="titleprofil">{nomAdmin} {prenomAdmin}</label>
      
      </div>
        </div>

        
        <div class='div1profile'>
          <div class="cardprofil cart">
            <label class="titleprofil"> Informations</label>
            <hr />

            <div className='div2'>
              <div className='div3'>
                <FaMapMarkerAlt style={{ marginTop: 4, }} />
                <div className='divh'><p>Adresse professionnelle :<p> MARRAKECH</p></p></div>
              </div>
              <div className='div3'>
                <FaRegFileAlt style={{ marginTop: 4, }} />
                <div className='divh'><p>Poste :<p> admin &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p></p></div>
              </div>

              <div className='div3'>
                <FaBuilding style={{ marginTop: 4, }} />
                <div className='divh'><p>Entreprise :<p> NOM ENTREPRISE</p></p></div>

              </div>

            </div>
          </div>
        </div>
      </div>
     
      <hr />
      <div className='divprofiladmin'>
        <h2>Activités récentes</h2>

        <div>

          <ul>
            {archiveSuppression.map((activite, index) => (
              <li key={index}>{activite.date} - {activite.description} par {activite.nomAdmin} {activite.prenomAdmin}
              </li>
            ))}
          </ul>
        </div>


      </div>

    </div>



  );

}

export default ProfileAdmin;