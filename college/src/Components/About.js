import React, { useState } from 'react';

export default function About() {
  const [showVisionMission, setShowVisionMission] = useState(false);

  const toggleVisionMission = () => {
    setShowVisionMission(!showVisionMission);
  };

  return (
    <div className="about-section">
      <div className="row">
        <div className="col-1">
          <h4>About PC EDU</h4>
          <h4>About The College</h4>
          <h4 onClick={toggleVisionMission}>Vision & Mission</h4>
        </div>
        <div className="col-2">
          {showVisionMission && (
            <div className="vision-mission">
              <h5>Vision:</h5>
              <p>Add your college's vision here</p>
              <h5>Mission:</h5>
              <p>Add your college's mission here</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
