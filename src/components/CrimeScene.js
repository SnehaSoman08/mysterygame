// src/components/CrimeScene.js
import React, { useState } from 'react';
import VictimPuzzle from './VictimPuzzle';

const CrimeScene = () => {
  const [showVictimPuzzle, setShowVictimPuzzle] = useState(false);

  const handleShowVictim = () => {
    setShowVictimPuzzle(true);
  };

  const handlePuzzleComplete = (isCorrect) => {
    // Handle puzzle completion logic if needed
    if (isCorrect) {
      // You may add additional logic here before showing anything else
      setShowVictimPuzzle(false); // Reset showVictimPuzzle when starting the investigation
    } else {
      alert('Wrong answers! Please try again.');
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {showVictimPuzzle ? (
          <VictimPuzzle onPuzzleComplete={handlePuzzleComplete} />
        ) : (
          <>
            <img
              src="https://cdn.pixabay.com/photo/2020/11/28/03/21/litle-detective-5783530_1280.jpg"
              alt="Crime Scene"
              style={{
                width: '100%',
                maxWidth: '600px',
                marginTop: '70px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                borderRadius: '8px',
              }}
            />
            <p style={{ backgroundColor: 'black', padding: '10px', borderRadius: '8px', marginTop: '20px',color:"white" }}>
              A Murder has occurred. Help the detective to find the culprit.
            </p>
            <button onClick={handleShowVictim} style={{ marginTop: '20px', padding: '10px', borderRadius: '8px',backgroundColor:"black",color:"white" }}>
              Show Victim
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CrimeScene;

