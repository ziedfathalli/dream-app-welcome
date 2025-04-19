import React from 'react';

const steps = [
  { icon: '/logos/Page-1.svg', text: '1. Le rêve liber l’expression', },
  { icon: '/logos/Page-2.svg', text: '2. Le sens éclaire le parcours', },
  { icon: '/logos/Page-3.svg', text: '3. La différence rend unique', },
  { icon: '/logos/Page-4.svg', text: '4. La valeur humaine met en mouvement', },
  { icon: '/logos/Page-5.svg', text: '5. La clé exprime le style', },
  { icon: '/logos/Page-6.svg', text: '6. Le parcours associe rêve et réalité', },
  { icon: '/logos/Page-7.svg', text: '7. Le ciel bleu révèle l’alignement', },
];

function ShynleiSteps() {
  return (
    <div className="steps-section">
      <h2>Votre Shynleï c’est..</h2>
      <p>
        7 étapes, 2 fiches pour prendre note des rencontres, 1 page pour éclairer
        le sens, 3 interprétations pour vous aider..
      </p>
      <div className="steps">
        {steps.map((step) => (
          <div
            key={step.text}
            className="step"
          >
            <img
              src={step.icon}
              alt={`Icone de l’étape ${step.text + 1}`}
              style={{
                width: '30px',
                height: '30px',
                marginRight: '10px',
              }}
            />
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShynleiSteps;
