import "./q1.css";

const Q1 = () => {
  return (
    <div className="q__wrapper">
      <h1>Question 1</h1>
      <h2>What do you do?</h2>
      <div className="choice__wrapper">
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
      <button className="next__btn">
        <p className="btn__text">
          Next &nbsp;
          <span>
            <svg
              width="19"
              height="13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.50005 11.8L18.95 2.34999L17.375 0.87999L9.50005 8.64999L1.62505 0.87999L0.0500489 2.34999L9.50005 11.8Z"
                fill="white"
              />
            </svg>
          </span>
        </p>
      </button>
    </div>
  );
};

export default Q1;
