import slav_head from "../imgs/slav_head.png";

const Home = () => {
  return (
    <div className="home">
      <div className="left">
        <div className="left-wrapper">
          <h1>
            Hi, I'm <Svyatoslav />
            <br></br>I'm a front end developer.
          </h1>
        </div>
        <ul className="navigation">
          <li>
            <a href="#Skills">Skills</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="right">
        <div className="right-wrapper">
          {/* <div className="circleContainer">
          </div> */}
          <img src={slav_head} alt="" className="slav-head" />
        </div>
      </div>
    </div>
  );
};

const Svyatoslav = () => <span className="name">Slav.</span>;

export default Home;
