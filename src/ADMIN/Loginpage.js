import React from "react";
import "../StyleCss/loginstyle.css"
import { Link } from "react-router-dom";
// import { AiOutlineMail } from "react-icons/ai";
// <AiOutlineMail />


export default function login(){
  return(
    <div>
      <div className="Containerlogin">
        <div className="div1Log"> 
        <img className="imgonda" src="clipart2582995.png" alt="" />
        <h2>Gestions D'Equipement </h2>
        <p>Ce site donner la possibilité de gérer les Equipements d'une façons trés simple et meilleurs </p>
        </div>
        <div className="div2Log">
          <h2>Bonjour</h2>
          <p>Bienvenue Dans l'espace de Gestion de stock Equipement </p>
          <form>
            <div className="input1login">
              <input type="text" placeholder="login" />
            </div>
            <div className="input2login">
              <input type="password" placeholder="Password" />
              <Link className="PASOublier">Oublier MotDePass ?</Link>
            </div>
            <div className="boutonlogin">
              <input type="submit" value="Login" />
            </div>
            <div className="boutonGlogin">
              <input type="submit" value="Connectez avec l'e-mail" />
            </div>
            
              
            
          </form>
        </div>

      </div>
    </div>
  )
}