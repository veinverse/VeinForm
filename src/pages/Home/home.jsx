import { useNavigate } from "react-router-dom";
import "./home.css";
import { MdNavigateNext } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";

const Home = () => {
  const navigate = useNavigate();
  const navigateToForm = () => {
    navigate("/form");
  };
  return (
    <main className="section">
      <div className="main">
        <div className="main__text">
          <h1>Hi there,</h1>
          <h2>
            We’ll like to know a bit about your business experience with
            technology.
          </h2>
          <button onClick={navigateToForm}>
            <h1 className="home__button-text">Get Started </h1>
            <span>
              <MdNavigateNext />
            </span>
          </button>
          <h3>
            <AiOutlineClockCircle /> &nbsp; Takes just 1 minute to complete
          </h3>
        </div>
        <div className="main__text-sub">
          <h3>
            This is a little survey for the commencement of a software
            engineering project to facilitate your business operations
          </h3>
          <h4>All rights Reseved | Veinverse Inc.</h4>
        </div>
      </div>
    </main>
  );
};

export default Home;
