import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandSparkles } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div className="about" id="About">
      <div className="about-card">
        <div className="about-heading">
          <h2 className="about-heading-h2">ABOUT ME</h2>
          <div className="wave-icon">
            <FontAwesomeIcon icon={faHandSparkles}></FontAwesomeIcon>
          </div>
        </div>
        <div className="about-rectangle"></div>
        <p>
          Hello! My name is Vsevolod Bakutov ( I go by "Seva" ) and I
          enjoy coding in Python. <br></br>
          <br></br> I’m a Back-End Web Developer with Computer Science background, seeking to utilize my
          knowledge of Django, Django REST, Python and C++ skills to build 
          applications. Quick learner who’s able
          to function independently and in a team setting.
        </p>
      </div>
    </div>
  );
};

export default About;
