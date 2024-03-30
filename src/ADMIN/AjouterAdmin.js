import React, { useState } from 'react';
import "../StyleCss/Accueilstyle.css";
import { Link } from 'react-router-dom';
import axios from 'axios';

function FormulaireContact({ dataadmine, setdataadmine }) {
  
  const [Matricule, setMatricule] = useState('');
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  function inscrire(e) {
    e.preventDefault();

    if (!Matricule || !nom || !prenom || !login || !password) {
      setErrorMessage(alert('Veuillez remplir tous les champs.'));
      return;
    }

    axios.post('http://localhost:2000/admin', { Matricule, nom, prenom, login, password })
      .then(response => {
        setdataadmine([...dataadmine, { Matricule, nom, prenom, login, password }]);
        setMatricule('');
        setNom('');
        setPrenom('');
        setLogin('');
        setPassword('');
        setErrorMessage('');
      })
      .catch(error => {
        console.error('Erreur lors de l\'envoi des données :', error);
        setErrorMessage('Une erreur est survenue lors de l\'envoi des données. Veuillez réessayer plus tard.');
      });
  }

  return (
    <>
      <div className="containerfadmin">
        <h2 className='H1'> Ajouter un Compte</h2>
        <form className='forAdmin'>
          <div className="form-groupad">
            <input className='inputAdmin' type="text" id="nom" name="nom" placeholder='nom' required value={nom} onChange={(e) => setNom(e.target.value)} />
          </div>
          <div className="form-groupad">
            <input type="text" className='inputAdmin' id="prenom" name="prenom" placeholder='prenom' value={prenom} onChange={(e) => setPrenom(e.target.value)} required />
          </div>
          <div className="form-groupad">
            <input type="text" className='inputAdmin' value={Matricule} onChange={(e) => setMatricule(e.target.value)} placeholder='matricule' id="matricule" name="matricule" required />
          </div>
          <div className="form-groupad">
            <input type="text" className='inputAdmin' placeholder='login' value={login} onChange={(e) => setLogin(e.target.value)} id="login" name="login" required />
          </div>
          <div className="form-groupad">
            <input type="password" className='inputAdmin' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button className='buutadmin' type="submit" onClick={(e) => inscrire(e)}>Envoyer</button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
        <Link className='linadmin' to="/Accueil">
          retour
        </Link>
      </div>
    </>
  );
}

export default FormulaireContact
