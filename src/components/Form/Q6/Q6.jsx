import "./q6.css";

const Q6 = () => {
  return (
    <div className="q__wrapper">
      <h1>Question 6</h1>
      <h2>
        Which issues do you face with your business activities? This question is
        required.
      </h2>
      <div className="choice__wrapper">
        <div className="option">
          <input
            type="checkbox"
            value="Challenges in receiving online payments"
            id="1"
            name="business issues"
          />
          <label for="1">Challenges in receiving online payments</label>
        </div>
        <div className="option">
          <input
            type="checkbox"
            value="Delay in receiving payments from clients"
            id="2"
            name="business issues"
          />
          <label for="2">Delay in receiving payments from clients</label>
        </div>
        <div className="option">
          <input
            type="checkbox"
            value="Advertisement of my business"
            id="3"
            name="business issues"
          />
          <label for="3">Advertisement of my business</label>
        </div>
        <div className="option">
          <input
            type="checkbox"
            value="Difficulty in communicating with clients"
            id="4"
            name="business issues"
          />
          <label for="4">Difficulty in communicating with client</label>
        </div>
        <div className="option">
          <input
            type="text"
            placeholder="Other? Please Type"
            name="business issues"
            className="text_enter"
          />
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

export default Q6;
