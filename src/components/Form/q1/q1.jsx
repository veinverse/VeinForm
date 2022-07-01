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
      <button className="next__btn" onClick={navigateToQ2}>
        <p className="btn__text">Next &nbsp;<span className="vector">
          <svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.50005 11.8L18.95 2.34999L17.375 0.87999L9.50005 8.64999L1.62505 0.87999L0.0500489 2.34999L9.50005 11.8Z" fill="white"/>
          </svg>
        </span>
        </p>
      </button>
    </div>
  );
};

export default Q1;
