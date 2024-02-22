import React, { useState } from 'react';

const SuspectDetails = () => {
  const suspects = [
    { id: 1, name: 'Suspect 1', name1: "Dora", age: 15, hobby: 'full time adventure', image: 'https://assets.nickjr.com/uri/mgid:arc:imageassetref:shared.nickjr.us:1bf56408-16a6-4079-b160-61906899d07d?quality=0.7&gen=ntrn&legacyStatusCode=true' },
    { id: 2, name: 'Suspect 2', name1: "Jackie Chan", age: 30, hobby: 'inovating stunts', image: 'https://www.bhmpics.com/downloads/jackie-chan-adventures-Wallpapers/56.latest.png' },
    { id: 3, name: 'Suspect 3', name1: "Chutki", age: 23, hobby: 'Making ladoos for Bheem', image: 'https://mir-s3-cdn-cf.behance.net/projects/404/11d564130021667.Y3JvcCwxMDI0LDgwMCwwLDM4.png' },
    { id: 4, name: 'Suspect 4', name1: "Mr.Bean", age: 42, hobby: 'playing with toys', image: 'https://wallpapercave.com/wp/wp6858447.jpg' },
    { id: 5, name: 'Suspect 5', name1: "He-Man", age: 35, hobby: 'Protecting kingdom', image: 'https://www.writeups.org/wp-content/uploads/He-Man-Masters-Universe-portrait-featured.jpg' },
    { id: 6, name: 'Suspect 6', name1: "Ben-10", age: 22, hobby: 'Alien transform', image: 'https://yt3.googleusercontent.com/ytc/AIf8zZQSMQt8bKyEl8i9Q-_dLBot2-B94CyBEyvTr0we2g=s900-c-k-c0x00ffffff-no-rj' },
    { id: 7, name: 'Suspect 7', name1: "Chota Bheem", age: 27, hobby: 'Protecting Dholakpur', image: 'https://ik.imagekit.io/j83rchiauw/tring/202302111148_qbWQ1287LpGNwHRA.png' },
    { id: 8, name: 'Suspect 8', name1: "Julie", age: 12, hobby: 'Following Jackie chan', image: 'https://i.pinimg.com/474x/69/aa/de/69aade2f0f3a12a350d9cb49f8023cf4.jpg' },
    { id: 9, name: 'Suspect 9', name1: "Mrs.Wicket", age: 58, hobby: 'Screaming at Bean', image: 'https://pbs.twimg.com/media/EztEjofVUAMD0Ix.jpg' },
    { id: 10, name: 'Suspect 10', name1: "Benny", age: 30, hobby: 'Helping Dora', image: 'https://i.pinimg.com/originals/c9/b9/76/c9b97665ec5793638ae08cee95f55466.jpg' }
    // Add more suspects as needed
  ];
  const [selectedSuspect, setSelectedSuspect] = useState(null);
  const [result, setResult] = useState(null);

  const handleSuspectClick = (suspect) => {
    setSelectedSuspect(suspect);
    setResult(null);
  };

  const handleAttemptArrest = () => {
    if (selectedSuspect && selectedSuspect.name1 === 'Mr.Bean') {
      setResult('You won!');
    } else {
      setResult('Your guess was wrong. The suspect is innocent. Investigate again!!!');
    }
  };

  const renderSuspectCard = () => {
    if (!selectedSuspect) {
      return null;
    }

    return (
      <div style={{ textAlign: 'center',marginTop:"100px" }}>
        {result ? (
          <>
            <h2>{result}</h2>
            {result === 'You won!' ? (
              <>
                <img
                  src="https://i.pinimg.com/originals/a3/16/60/a31660c76956cc544fd24f4f5b26873e.jpg"  // Replace with the actual URL of your winning image
                  alt="You win"
                  style={{ width: '300px', height: '300px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',marginTop:"20px" }}
                />
                <p style={{padding:"20px",borderRadius:"8px",backgroundColor:"black",color:"white"}}>Congratulations! 
                <br/>Your guess was right. The swiper took away Bean's teddy and Bean in turn killed him.</p>
                
              </>
            ) : (
              
              <button style={{backgroundColor:"black",color:"white",padding:"10px",borderRadius:"8px",marginTop:"60px"}} onClick={() => setSelectedSuspect(null)}>Back to suspect list</button>
            )}
          </>
        ) : (
          <>
            <h2 style={{ marginTop: '20px' }}></h2>
            <div style={{border:"1px solid white",padding:"20px",borderRadius:"8px", backgroundColor: 'rgb(169, 227, 208)'}}>
              <img
                src={selectedSuspect.image}
                alt={selectedSuspect.name}
                style={{ width: '250px', height: '250px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
              />
              <p style={{backgroundColor:"rgb(169, 227, 208)"}}>Name: {selectedSuspect.name1}</p>
              <p style={{backgroundColor:"rgb(169, 227, 208)"}}>Age: {selectedSuspect.age}</p>
              <p style={{backgroundColor:"rgb(169, 227, 208)"}}>Hobby: {selectedSuspect.hobby}</p>
            </div>
            <br/>
            <button style={{padding:"10px",borderRadius:"8px",backgroundColor:"black",color:"white"}} onClick={handleAttemptArrest}>Attempt Arrest</button>
            {/* Close button will be hidden if the answer is correct */}
          </>
        )}
      </div>
    );
  };

  return (
    <div style={{ textAlign: 'center' }}>
      {!selectedSuspect && (
        <>
          <h1 style={{ marginTop: "70px", fontSize: "20px" }}>Here is the suspect board. Click on a suspect to know more about them</h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {suspects.map((suspect) => (
              <div key={suspect.id} style={{ margin: '10px', cursor: 'pointer' }} onClick={() => handleSuspectClick(suspect)}>
                <img
                  src={suspect.image}
                  alt={suspect.name}
                  style={{ width: '250px', height: '250px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
                />
                <p>{suspect.name}</p>
              </div>
            ))}
          </div>
        </>
      )}
      {renderSuspectCard()}
    </div>
  );
};

export default SuspectDetails;
