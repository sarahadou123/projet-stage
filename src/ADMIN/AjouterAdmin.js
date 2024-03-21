import React, { useState } from 'react';
import "../StyleCss/Accueilstyle.css";
import { Link } from 'react-router-dom';
function FormulaireContact() {

  


  return (
    <>
    <div className="containerfadmin">
      <h2 className='H1'> Ajouter un Compte</h2>
      <form className='forAdmin'>
      <div className="form-groupad">

          <input className='inputAdmin' type="text" id="nom" name="nom"  placeholder='nom' required />
        </div>
        <div className="form-groupad">
          <input type="text" className='inputAdmin' id="nom" name="nom"  placeholder='prenom' required />
        </div>
        <div className="form-groupad">
          <input type="text" className='inputAdmin' placeholder='matricule' id="nom" name="nom"  required />
        </div>
        <div className="form-groupad">
          <input type="text" className='inputAdmin' placeholder='pasword' id="nom" name="nom"  required />
        </div>
        <div className="form-groupad">
          <input type="email" className='inputAdmin' placeholder='email' id="email" name="email" required />
        </div>
               <button className='buutadmin' type="submit">Envoyer</button>
      </form>
      <Link className='linadmin' to="/Accueil">
      retour
      </Link> 
      </div>
      
    
    </>
  );
}

export default FormulaireContact;
