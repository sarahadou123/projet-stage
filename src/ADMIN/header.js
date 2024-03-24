// import "../StyleCss/Accueilstyle.css"
// import { IoOpenOutline ,IoPersonAddOutline} from "react-icons/io5";
// import { AiOutlineTeam, AiOutlineUser, AiOutlineLogout, AiOutlineSearch, AiOutlineCheck } from "react-icons/ai";
// import { useState ,useEffect} from "react";
// import { Link, useNavigate  } from "react-router-dom";

// import axios from "axios";

// export default function Header(props){

//     const {admineId }=props
//     const [showProfile, setShowProfile] = useState(false);
//     const navigate=useNavigate()
//     const [data1DMINE, setdata1DMINE ]=useState([])


    

//     useEffect( ()=>
//     {
//       axios.get('http://localhost:2000/admin')
//       .then(reponse => setdata1DMINE(reponse.data))
//       .catch(error => console.error('error fetch :',error))
//     }
   
//     ,[])

//     const admineConn = data1DMINE.find(element => element.id == admineId)

//     function profile(){
//       navigate("/Profile")
//     }
    
//     return(
      
        
        
//         <div className="divA">
//         <div className="topbar">
//           <div className="logoA">
//             <img src=" " alt="" />
//             <p>Gestion </p>
//             <h4>D'Equipements</h4>
//           </div>
//           <div className="searchdiv">
//             <AiOutlineSearch className="iconesearch" />
//             <input type="text" name="search" id="search" placeholder="Search" />
                  
//                       <img className="imgprofile" src="profilprojet.jpg"  onClick={() => setShowProfile(true)}  />
               
//           </div>

          
//         </div>
//         <div>
//               {showProfile && (
//                               <div>
//                                   <div className="profile-container">
//                                     <div className="profile-picture">
//                                     <img src="profilprojet.jpg" alt="Photo de profil" />
//                                   </div>
//                                     <div className="profile-details">
//                                         <h3> {admineConn.nom}</h3>
//                                         <p>{admineConn.prenom}</p>
//                                         <p>afficher le compte <IoOpenOutline onClick={profile} /></p>
//                                         <button className="buutonprofil" onClick={() => setShowProfile(false)}>Fermer</button>  
                                            
//                                     </div>

//                                 </div>
//                                 <div className="div77">
//                                   <p> <IoPersonAddOutline /><Link to="/AjouterAdmin">ajouter un autre compte</Link></p>
//                                 </div>
//                               </div>
//                               )}
//             </div>
//         </div>
        
       
//     )
// }