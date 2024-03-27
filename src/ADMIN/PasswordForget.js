import React from "react";
import "../StyleCss/styleForgetPassword.css"


export default function forgetpassword(){


  return(
    <div className="divPrincipale">
      <div className="divContainerFROGET" >
        <h3 className="h3FORGET">Mot De Passe Oublier</h3>
        <p className="pForgetpass">Entrer votre email adresse</p>
        <input className="emailverify" type="email" name="email" id="email" placeholder="Entrer adress email" /><br/>
        <input className="BUTTverify" type="submit" value="Continue" />
      </div>

      <div className="divContainerFROGET2">
        <h3 className="h3FORGET">Nouveau Mot De Passe</h3>
        <p className="pConfirmer">s'il veux plait creer un noveau mot de passe </p>
        <input className="emailverify" type="password" placeholder="creer nouveau password"/><br/>
        <input className="emailverify" type="password" placeholder="Confirmer votre password"/><br/>
        <input className="BUTTverify" type="submit" value="Changer" />
      </div>
    </div>
  )
}