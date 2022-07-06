import interact from "../../../photos/interact.png";

const Q5 = ({setState5}) => {
  const handleChange = e => {
    const {value } = e.target;
  
    setState5(value);
  }
  return (
    <div className="imq__body" id="question5">
      <div className="q__wrapper">
        <h1>Question 5</h1>
        <h2>With which medium do you mostly interact with your clients?</h2>

        <div className="choice__wrapper">
                    <div className="option">
                        <input type="radio" value="Social Media (Facebook, WhatsApp, etc.)" id="social media" name="With which medium do you mostly interact with your clients?" onChange={handleChange}/>
                        <label for="social media">Social Media (Facebook, WhatsApp, etc.)</label>
                    </div>
                    <div className="option">
                        <input type="radio" value="E-mail" id="email" name="With which medium do you mostly interact with your clients?" onChange={handleChange}/>
                        <label for="email">E-mail</label>
                    </div>
                    <div className="option">
                        <input
                            type="radio"
                            value="Phone calls"
                            id="calls"
                            name="With which medium do you mostly interact with your clients?" onChange={handleChange}
                        />
                        <label for="calls">Phone calls</label>
                    </div>
                    <div className="option">
                        <input type="radio" value="Meet In-Person" id="meet" name="With which medium do you mostly interact with your clients?" onChange={handleChange}/>
                        <label for="meet">Meet In-Person</label>
                    </div>
                </div>

        <a href="#question6" className="next__btn">
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
        </a>
      </div>
      <div className="img__wrapper">
        <img src={interact} alt="interact" />
      </div>
    </div>
  );
};

export default Q5;
