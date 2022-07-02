const Q9 = () => {
  return (
    <div className="q__wrapper">
      <h1>Question 9</h1>
      <h2>
        Have you used a website or mobile app to help your business activities?
      </h2>
      <div className="choice__wrapper">
        <div className="option">
          <input type="radio" value="Event Planning" id="yes" name="useapp" />
          <label for="yes">Yes</label>
        </div>
        <div className="option">
          <input type="radio" value="Own a Studio" id="maybe" name="useapp" />
          <label for="maybe">Not really</label>
        </div>
        <div className="option">
          <input
            type="radio"
            value="Manage a Restaurant"
            id="no"
            name="useapp"
          />
          <label for="no">No</label>
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

export default Q9;
