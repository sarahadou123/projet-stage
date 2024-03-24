import React, { useEffect } from "react";
import "../StyleCss/loginstyle.css"
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function UseEffectLogin(props){

  const {dataadmine , dataUtilisateur , setDatautilisateur ,idUtili ,setidUtili ,admineId,setadmineId }=props
  const [inscri,setinscri]=useState(false)
  const [loginUA , setloginUA ] =useState("")
  const [passwordUA , setpasswordUA ] =useState("")

  const [matricule , setmatricule]=useState()
  const [nom, setNom]=useState()
  const [prenom, setprenom]=useState()
  const [login, setlogin]=useState()
  const [password, setpassword]=useState()
  const [nbraffectation,setnbraffectation]=useState(0)


  const navigate=useNavigate()

  function loginAdmiUtili(e){
    e.preventDefault()

    const admineExist=dataadmine.find(element => element.login ==  loginUA && element.password == passwordUA  );
    const utiliExists=dataUtilisateur.find(element => element.login ==  loginUA && element.password == passwordUA  );

    if(admineExist){
      setadmineId(admineExist.id);
      navigate("/Accueil");
    }
    else if(utiliExists){
      navigate(`/profileUtili/${utiliExists.id}`)
      // setidUtili(utiliExists.id)
      
    }
    else{
      // alert("utilisateur non exists , si vous n'avez pas de conpte vous devez inscrire")
      toast.error("utilisateur non exists , si vous n'avez pas de conpte vous devez inscrire  ", {
        position: toast.POSITION.TOP_LEFT
      })
    }
  }
  function inscrire(e){
    e.preventDefault()

    axios.post('http://localhost:2000/etulisateur', {matricule,nom,prenom,login,password,nbraffectation})

    setDatautilisateur([...dataUtilisateur,{matricule,nom,prenom,login,password ,nbraffectation}]);
    setmatricule('');
    setNom("");
    setprenom("");
    setlogin("");
    setpassword("");
  }
  


  return(
    <div>
      <div className="Containerlogin" >
      <div className="div12Log" style={{ display: inscri  ? "block" : "none" }}>
          <h2>Bonjour</h2>
          <p>Devenir un de nos Utilisateurs et S'inscrire  </p>
          <form>
            <div className="input1login">
              <input type="text" placeholder="matricule" value={matricule} onChange={(e)=>setmatricule(e.target.value)} />
            </div>
            <div className="input1login">
              <input type="text" placeholder="Nom" value={nom} onChange={(e)=>setNom(e.target.value)}  />
            </div>
            <div className="input1login">
              <input  type="text" placeholder="Prenom" value={prenom} onChange={(e)=>setprenom(e.target.value)}  />
            </div>
            <div className="input1login">
              <input  type="text" placeholder="login"  value={login} onChange={(e)=>setlogin(e.target.value)} />
            </div>
            <div className="input2login">
              <input type="password" placeholder="Password" value={password} onChange={(e)=>setpassword(e.target.value)}  />
            </div>
            <div className="boutonlogin">
              <input type="submit" value="s'inscrire" onClick={(e)=>inscrire(e)} />
            </div>
            <div>
              <p className="pseco" > <Link onClick={()=> setinscri(false)}>se connecter</Link></p>
            </div>
              
            
          </form>
        </div>
        <div className={inscri === false ? "div1Log" :"div1SLog" }> 
          <img className="imgonda" src="clipart2582995.png" alt="" />
          <h2 className="h2div1SLog">Gestions D'Equipement </h2>
          <p className="pdiv1SLog">Ce site donner la possibilité de gérer les Equipements d'une façons trés simple et meilleurs </p>
        </div>
        <div className="div2Log" style={{ display: inscri  ? "none" : "block" }}>
          <h2>Bonjour</h2>
          <p>Bienvenue Dans l'espace de Gestion de stock Equipement </p>
          <form>
            <div className="input1login" >
              <input type="text" placeholder="login" value={loginUA} onChange={(e)=>setloginUA(e.target.value)} />
            </div>
            <div className="input2login">
              <input style={{marginTop:"15px"}} type="password" placeholder="Password" value={passwordUA} onChange={(e)=>setpasswordUA(e.target.value)} />
              <Link className="PASOublier">Oublier MotDePass ?</Link>
            </div>
            <div className="boutonlogin">
              <input type="submit" value="Login" onClick={(e)=>loginAdmiUtili(e)} />
            </div>
            {/* <div className="boutonGlogin">
              <input type="submit" value="Connectez avec l'e-mail" />
            </div> */}
            <div>
              <p className="pinscr">Vous n'avez pas de compte ? <Link onClick={()=> setinscri(true)}>s'inscrire</Link></p>
            </div>
              
            
          </form>
        </div>

      </div>
      <ToastContainer />
    </div>
  )
}