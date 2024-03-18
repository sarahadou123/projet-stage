import React from "react";
import "../StyleCss/loginstyle.css"
import { Link } from "react-router-dom";
import { useState } from "react";
// import { AiOutlineMail } from "react-icons/ai";
// <AiOutlineMail />


export default function Login(){
  const [inscri,setinscri]=useState(false)
  return(
    <div>
      <div className="Containerlogin" >
      <div className="div12Log" style={{ display: inscri  ? "block" : "none" }}>
          <h2>Bonjour</h2>
          <p>Devenir un de nos Utilisateurs et S'inscrire  </p>
          <form>
            <div className="input1login">
              <input type="text" placeholder="Matricule" />
            </div>
            <div className="input1login">
              <input type="text" placeholder="Nom" />
            </div>
            <div className="input1login">
              <input  type="text" placeholder="Prenom" />
            </div>
            <div className="input1login">
              <input  type="text" placeholder="login" />
            </div>
            <div className="input2login">
              <input type="password" placeholder="Password" />
            </div>
            <div className="boutonlogin">
              <input type="submit" value="s'inscrire" />
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
              <input type="text" placeholder="login" />
            </div>
            <div className="input2login">
              <input style={{marginTop:"15px"}} type="password" placeholder="Password" />
              <Link className="PASOublier">Oublier MotDePass ?</Link>
            </div>
            <div className="boutonlogin">
              <input type="submit" value="Login" />
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
    </div>
  )
}