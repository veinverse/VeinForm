import "./q1.css";
import { useNavigate } from "react-router-dom";

const Q1 = () => {
  const navigate = useNavigate();
  const navigateToQ2 = () => {
    navigate("/q2");
  };

  return (
    <div className="q1__wrapper">
      <div className="question__text">
        <h1 className="title">Question 1</h1>
        <span className="question">What do you do?</span>
      </div>
      <div className="choice__wrapper">
          <div className="answer__options">
            <div className="option">
                <div className="option__text">Event Planning</div>
            </div>
            <div className="option">
                <div className="option__text">Own a Studio</div>
            </div>
            <div className="option">
                <div className="option__text">Manage a Restaurant</div>
            </div>
            <div className="option">
                <div className="option__text">Other</div>
            </div>
          </div>
      </div>
      <button className="next__btn"  onClick={navigateToQ2}>
        <p className="btn__text">Next</p>
      </button>
    </div>
  );
};

export default Q1;
