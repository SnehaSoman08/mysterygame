// src/components/VictimInfo.js
import React, { useState } from 'react';
import SuspectDetails from './SuspectDetails';

const VictimInfo = ({ onContinueInvestigation }) => {
  const [showSuspectDetails, setShowSuspectDetails] = useState(false);

  // Replace the dummy victim details with the actual victim information
  const victimDetails = {
    name: 'Swiper',
    age: 35,
    hobby: 'Torturing others by misplacing their belongings',
    resultOfPrimaryAnalysis: 'found a brown teddy nearby the body',
    imageUrl: 'https://facts.net/wp-content/uploads/2023/09/17-facts-about-swiper-the-fox-dora-the-explorer-1694511277.jpg',
  };

  const handleToggleDetails = () => {
    setShowSuspectDetails((prev) => !prev);
  };

  return (
    <div style={{ textAlign: 'center', fontWeight: 'bolder' }}>
      <h2 style={{ marginTop: '50px' }}>{showSuspectDetails ? 'Suspect Details' : 'Victim Details'}</h2>

      {showSuspectDetails ? (
        <SuspectDetails />
      ) : (
        <div
          style={{
            marginTop: '20px',
            padding: '15px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            backgroundColor: 'rgb(169, 227, 208)',
            display: 'inline-block',
          }}
        >
          <img
            src={victimDetails.imageUrl}
            alt="Victim"
            style={{ width: '200px', height: '200px', borderRadius: '10px', marginBottom: '15px' }}
          />
          <p style={{ textAlign: 'left', backgroundColor: 'rgb(169, 227, 208)',padding:"5px",fontWeight:'bold',fontSize:"18px" }}>Name: {victimDetails.name}</p>

          <p style={{ textAlign: 'left', backgroundColor: 'rgb(169, 227, 208)',padding:"5px",fontWeight:'bold',fontSize:"18px" }}>Age: {victimDetails.age}</p>

          <p style={{ textAlign: 'left', backgroundColor: 'rgb(169, 227, 208)',padding:"5px",fontWeight:'bold',fontSize:"18px" }}>Hobby: {victimDetails.hobby}</p>

          <p style={{ textAlign: 'left', backgroundColor: 'rgb(169, 227, 208)',padding:"5px",fontWeight:'bold',fontSize:"18px" }}>
            Result of Primary Analysis: {victimDetails.resultOfPrimaryAnalysis}
          </p>
        </div>
      )}

      {!showSuspectDetails && (
        <div style={{ marginTop: '20px' }}>
          <button
            style={{
              padding: '10px',
              borderRadius: '8px',
              backgroundColor: 'black',
              color:"white"
              
            }}
            onClick={handleToggleDetails}
          >
            Show suspect list
          </button>
        </div>
      )}
    </div>
  );
};

export default VictimInfo;
