import React, { useState, } from 'react';

function DreamAppWelcomeForm({
  // eslint-disable-next-line react/prop-types
  handleCheckIp,
}) {
  const [name, setName,] = useState('');
  const [intention, setIntention,] = useState('');
  const [intentionError, setIntentionError,] = useState('');
  const [nameError, setNameError,] = useState('');

  const handleSubmitIp = () => {
    if (!name.trim()) {
      setNameError('Le nom est requis');
    } else if (!intention.trim()) {
      setIntentionError('L’intention est requis');
    } else {
      handleCheckIp();
    }
  };

  return (
    <div className="welcome-form">
      <h2>Pour commencer…</h2>
      <p>
        Faire votre Shynleï, jouer avec, c’est l’occasion d’écouter vos rêves,
        de les partager et de prendre confiance dans votre richesse.
      </p>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label>Nom et prénom :</label>
      <input
        value={name}
        onChange={(event) => {
          setName(event?.target?.value);
          setNameError('');
        }}
        placeholder="Votre nom"
      />
      {nameError && <span style={{ color: 'red', }}>{nameError}</span>}
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label>Mon intention :</label>
      <p className="subtext">L’intention, l’objectif de ce Shynleï</p>
      <input
        value={intention}
        onChange={(event) => {
          setIntention(event?.target?.value);
          setIntentionError('');
        }}
        placeholder="Votre intention"
      />
      <p style={{ color: 'red', marginBottom: '16px', }}>
        {intentionError}
      </p>
      {/* eslint-disable-next-line react/button-has-type */}
      <button
        className="cta-button"
        onClick={handleSubmitIp}
      >
        Exprimer mes rêves &gt;
      </button>
    </div>
  );
}

export default DreamAppWelcomeForm;
