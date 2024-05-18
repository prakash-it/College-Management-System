import React, { useState } from 'react';
import './css/About.css'
export default function About() {

  const [showabout, setAbout] = useState(false)
  const [showAbout, setShowAbout] = useState(false);
  const [showVisionMission, setShowVisionMission] = useState(false);
  const toggleAbout = () => {
    setShowAbout(!showAbout);
    setShowVisionMission(false);
  };

  const toggleVisionMission = () => {
    setShowVisionMission(!showVisionMission);
    setShowAbout(false); 
  };
  return (
    <div className="about-section">
      <div className="row">
        <div className="col-1">
          <h4 onClick={toggleAbout}>About PC EDU</h4>
          <h4>About The College</h4>
          <h4 onClick={toggleVisionMission}>Vision & Mission</h4>
        </div>
        <div className="col-2">
      {!showabout && 

          (<p>
            PC Education College is a well-established institution committed to providing quality education and training across various disciplines. With campuses situated in diverse locations, PC Education College caters to the educational needs of a wide range of students. The college offers a plethora of programs including diploma courses, undergraduate degrees, and professional certifications, ensuring that students have ample choices to pursue their academic and career goals.

            At PC Education College, emphasis is placed not only on theoretical knowledge but also on practical learning experiences. The curriculum is designed to be dynamic and industry-relevant, equipping students with the skills and expertise necessary to thrive in today's competitive job market. Through hands-on projects, internships, and industrial training programs, students gain valuable insights and real-world experience, preparing them for successful careers ahead.

            One of the distinguishing features of PC Education College is its faculty members, who are highly qualified and experienced in their respective fields. They serve as mentors and guides, nurturing students' intellectual growth and fostering a conducive learning environment. The college also frequently invites industry experts and guest lecturers to share their insights, providing students with diverse perspectives and networking opportunities.

            PC Education College takes pride in its state-of-the-art facilities and infrastructure, which are designed to support various academic and extracurricular activities. From well-equipped laboratories and libraries to sports facilities and student lounges, the college offers a vibrant campus life conducive to holistic development.

            Moreover, PC Education College places a strong emphasis on research and innovation. Students are encouraged to explore their interests, engage in research projects, and contribute to the advancement of knowledge in their respective fields. The college also supports entrepreneurship initiatives, providing resources and mentorship to aspiring entrepreneurs.

            In addition to academic excellence, PC Education College places a high value on character building and ethical values. Students are encouraged to uphold principles of integrity, respect, and social responsibility, preparing them to become responsible citizens and leaders in their communities.

            Furthermore, PC Education College is committed to fostering a diverse and inclusive environment where students from different backgrounds feel welcome and valued. The college celebrates cultural diversity and encourages cross-cultural exchange through various events and activities.

            In conclusion, PC Education College stands as a beacon of excellence in the field of education, striving to empower students with knowledge, skills, and values that will enable them to make meaningful contributions to society. With its focus on academic rigor, practical learning, research, and inclusivity, the college continues to shape the future leaders and innovators of tomorrow.
            
          </p>)}



          {showVisionMission && (
            <div className="vision-mission">
              <h5>Vision:</h5>
              <p>To be a leading institution in PC education, empowering individuals with the knowledge and skills to thrive in the digital age.</p>
              <h5>Mission:</h5>
              <p>
                <ul>
                  <li>To provide comprehensive PC education programs that cater to diverse learning needs and skill levels.</li>
                  <li>To foster a dynamic learning environment that promotes innovation, critical thinking, and problem-solving in the realm of PC technology.</li>
                  <li>To cultivate a community of lifelong learners equipped to adapt and excel in an ever-evolving technological landscape.</li>
                  <li>To collaborate with industry partners to ensure our curriculum remains relevant and aligned with current and emerging trends in PC technology.</li>
                  <li>To instill values of integrity, professionalism, and ethical conduct in our students, preparing them to contribute positively to society as responsible digital citizens.</li>
                </ul>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
