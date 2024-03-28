import React from "react";
import "../StyleCss/styleForgetPassword.css"
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Useforgetpassword(props){

  const {loginconfirm , dataUtilisateur}=props
  const [email, setEmail] = useState('');
  const initialmea= localStorage.getItem("myValue") || "valeur par défaut";
  const [message, setMessage] = useState(initialmea);
  const initialcodeC= localStorage.getItem("mycode") || "code";
  const [codeConfirme,setcodeConfirme]=useState(initialcodeC)
  const form=useRef()
  const [etat,setetat]=useState(false)
  const [codeConf,setcodeConf]=useState("")
  const [password1,setpassword1]=useState("")
  const [password2,setpassword2]=useState("")
  const navigate=useNavigate()

  const generatemessage = () => {
    // Générer un code de confirmation aléatoire (par exemple, une chaîne de 6 caractères)
    const code = Math.random().toString(36).substr(2, 6);
    setMessage(code);
    localStorage.setItem("myValue", code);
    
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(message)
    // Générer le code de confirmation avant d'envoyer le formulaire
    generatemessage();

    setcodeConfirme(message)
    localStorage.setItem("mycode", message);

    emailjs.sendForm('service_r5x09tr','template_52o8xgl', e.target, 'lFP6UhD6CTTcchHb6')
      .then((result) => {
        console.log('Email sent successfully:', result.text);
      },
      (error) => {
        console.error('Failed to send email:', error.text);
      });
      setetat(true)
  };
  

  function VerifierCodeConfirmation(e){
    e.preventDefault();
    // console.log(codeConfirme)
    // console.log(codeConf)
    if (codeConf === codeConfirme )
    {
      alert("code confirmation est correct veullier saisie un noveau mot de passe")
      setetat("tre")
    }
    else{
      alert("Le code de confirmation est incorrect. Veuillez réessayer.");

    }
  }
  function noveaiPassword(e){
    e.preventDefault();
    console.log(password1)
    console.log(password2)
    if (  password1 === password2){
      

      const existEtulisateur= dataUtilisateur.find(element => element.login==loginconfirm  )
      if (existEtulisateur){
        existEtulisateur.password=password2 ;
      } 
        axios.put(`http://localhost:2000/etulisateur/${existEtulisateur.id}`, existEtulisateur)
        .then(response => {
                            console.log('Data updated:', response.data);
                            // alert('password updated successfully');
                          })
        .catch(error => {console.error('Error updating data:', error);});
     
      

      alert("Le code est modiftier avec succée")
      navigate("/")
    }else{
      alert("confirmation est incorrect ")

    }

  }

  return (
    <div className="divPrincipale">
      { etat == false  ? 

      <div className="divContainerFROGET"  >
        <h3 className="h3FORGET">Mot De Passe Oublier</h3>
        <p className="pForgetpass">Entrer votre adresse e-mail</p>
        <form ref={form} onSubmit={(e)=>handleSubmit(e)}>
          <input className="emailverify" type="email" name="email" id="email" placeholder="Entrer adresse e-mail"  value={email} onChange={(e)=>setEmail(e.target.value)} /><br/>
          <input className="BUTTverify" type="submit" value="Continue"   />
          <input style={{ display: "none" }}  type="text" name="message" id="message" placeholder="Entrer adresse message"  value={message} readOnly  /><br/>
        </form>
      </div>

      :etat == true?
      <div className="divContainerFROGET12" >
        <form onSubmit={(e)=>VerifierCodeConfirmation(e)} >
          <h5 className="h3FORGET2"> Entrer le code de confirmation renvoyé au e-mail </h5>
          <input className="emailverify" type="text" placeholder=""  value={codeConf}  onChange={(e)=>setcodeConf(e.target.value)}/>
          <input className="BUTTverify" type="submit" value="Continue"  />
        </form>
        
      </div>
        : 
        <div className="divContainerFROGET2">
            <h3 className="h3FORGET">Nouveau Mot De Passe</h3>
            <p className="pConfirmer">S'il vous plaît créer un nouveau mot de passe </p>
            <form onSubmit={(e)=>noveaiPassword(e)}>
              <input className="emailverify" type="password" placeholder="Créer nouveau mot de passe" value={password1} onChange={(e)=>setpassword1(e.target.value)} /><br/>
              <input className="emailverify" type="password" placeholder="Confirmer votre mot de passe" value={password2} onChange={(e)=>setpassword2(e.target.value)} /><br/>
              <input className="BUTTverify" type="submit" value="Changer" />
            </form>
            
          </div>
  
    }
      
  </div> 
      
      

      
  );
}
