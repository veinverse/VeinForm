const Q9 = ({setState9}) => {
  const handleChange = e => {
    const {value } = e.target;
  
    setState9(value);
  }
  return (
    <div className="q__wrapper" id="question9">
      <h1>Question 9</h1>
      <h2>
        Have you used a website or mobile app to help your business activities?
      </h2>
      <div className="choice__wrapper">
        <div className="option">
          <input type="radio" value="Yes" id="yes" name="Have you used a website or mobile app to help your business activities?" onChange={handleChange} />
          <label for="yes">Yes</label>
        </div>
        <div className="option">
          <input type="radio" value="Maybe" id="maybe" name="Have you used a website or mobile app to help your business activities?" onChange={handleChange} />
          <label for="maybe">Not really</label>
        </div>
        <div className="option">
          <input
            type="radio"
            value="No"
            id="no"
            name="Have you used a website or mobile app to help your business activities?" onChange={handleChange}
          />
          <label for="no">No</label>
        </div>
      </div>

      <a href="#question10" className="next__btn">
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
      </a>
    </div>
  );
};

export default Q9;
