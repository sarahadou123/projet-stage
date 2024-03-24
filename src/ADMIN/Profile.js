import React from 'react';
import "../StyleCss/profiladmin.css";
import { FaEnvelope,FaPhone,FaBuilding ,FaRegFileAlt,FaMapMarkerAlt} from 'react-icons/fa'
function ProfileAdmin({activites}) {
    return (
        <div>
            <div class='div1'>
                <div class="image-container">
                <img src="./profilprojet.jpg" alt="Description de votre image" className='imagg'/>
            </div>
        
            <div class='div1profile'>
                    <div class="cardprofil cart">
                    <label class="titleprofil"> Informations</label> 
                    <hr/>
                 
                        <div className='div2'>
                                   <div className='div3'>
                                        <FaMapMarkerAlt style={{ marginTop: 4,}}/> 
                                        <div className='divh'><p>Adresse professionnelle :<p>  MARRAKECH</p></p></div>
                                    </div>
                                    <div className='div3'>
                                        <FaRegFileAlt style={{ marginTop: 4,}}/> 
                                        <div className='divh'><p>Poste :<p> admin &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p></p></div>
                                    </div>
                                    
                                    <div className='div3'>
                                    <FaBuilding style={{ marginTop: 4,}}/> 
                                    <div className='divh'><p>Entreprise :<p>  NOM ENTREPRISE</p></p></div>
                                    
                                    </div>
                                
                         </div>
                 </div>      
      </div>
            </div>
            <div class="divtab">
            <label class="titleprofil">ait haddou sara</label> 
            <button class="cssbuttons-io-button"> Edit Profile
                        <div class="icon">
                            <svg
                            height="24"
                            width="24"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path d="M0 0h24v24H0z" fill="none"></path>
                            <path
                                d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                                fill="currentColor"
                            ></path>
                            </svg>
                        </div>
                   </button>
                   </div>
            <hr/>
            <div className='divprofiladmin'>
            <h2>Activités récentes</h2>
      <ul>
        {activites.map((activite, index) => (
          <li key={index}>
            {activite.action} - {activite.description} - {activite.date}
          </li>
        ))}
      </ul>
    </div>
               
            </div>
           
           
       
    );
}

export default ProfileAdmin;