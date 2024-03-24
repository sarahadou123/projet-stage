import React, { useState } from 'react';
import "../StyleCss/Accueilstyle.css";
import { Link } from 'react-router-dom';
import axios from 'axios';
function FormulaireContact({dataadmine,setdataadmine}) {

  
  const [Matricule , setMatricule]=useState()
  const [nom, setNom]=useState()
  const [prenom, setprenom]=useState()
  const [login, setlogin]=useState()
  const [password, setpassword]=useState()
  function inscrire(e){
    e.preventDefault()

    axios.post('http://localhost:2000/admin', {Matricule,nom,prenom,login,password})

    setdataadmine([...dataadmine,{Matricule,nom,prenom,login,password}]);
    setMatricule('');
    setNom("");
    setprenom("");
    setlogin("");
    setpassword("");

  }

  return (
    <>
    <div className="containerfadmin">
      <h2 className='H1'> Ajouter un Compte</h2>
      <form className='forAdmin'>
      <div className="form-groupad">

          <input className='inputAdmin' type="text" id="nom" name="nom"  placeholder='nom' required  value={nom} onChange={(e)=>setNom(e.target.value)} />
        </div>
        <div className="form-groupad">
          <input type="text" className='inputAdmin' id="prenom" name="prenom"  placeholder='prenom'   value={prenom} onChange={(e)=>setprenom(e.target.value)}required />
        </div>
        <div className="form-groupad">
          <input type="text" className='inputAdmin' value={Matricule} onChange={(e)=>setMatricule(e.target.value)} placeholder='matricule' id="nom" name="nom"  required />
        </div>
        <div className="form-groupad">
          <input type="login" className='inputAdmin' placeholder='login'  value={login} onChange={(e)=>setlogin(e.target.value)} id="login" name="login" required />
        </div>
        <div className="form-groupad">
          <input type="text" className='inputAdmin' placeholder='pasword' id="nom" name="nom"   value={password} onChange={(e)=>setpassword(e.target.value)}  required />
        </div>
        
               <button className='buutadmin' type="submit"  onClick={(e)=>inscrire(e)} >Envoyer</button>
      </form>
      <Link className='linadmin' to="/Accueil">
      retour
      </Link> 
      </div>
      
    
    </>
  );
}

export default FormulaireContact;
