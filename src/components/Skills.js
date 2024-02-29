import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenRuler } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faToolbox } from "@fortawesome/free-solid-svg-icons";

import Cards from "./Skills_components/Card";

const CardSelector = () => {
  return <div className="card-selector"></div>;
};

const Skills = () => {
  return (
    <div className="skills" id="Skills">
      <div className="skills-heading">
        <h2>MY SKILLS</h2>
      </div>
      <div className="rectangle"></div>
      <Cards />
    </div>
  );
};

export default Skills;
