import gadgets from "../../../photos/gadgets.jpg";

const Q3 = () => {
  return (
    <div className="imq__body" id="question3">
      <div className="q__wrapper">
        <h1>Question 3</h1>
        <h2>Which gadget do you use the most for your business activities?</h2>
        <div className="choice__wrapper">
          <div className="option">
            <input type="radio" value="Laptop" id="laptop" name="gadget" />
            <label for="laptop">Laptop</label>
          </div>
          <div className="option">
            <input type="radio" value="Tablet" id="tablet" name="gadget" />
            <label for="tablet">Tablet</label>
          </div>
          <div className="option">
            <input type="radio" value="Mobile Phone" id="phone" name="gadget" />
            <label for="phone">Mobile Phone</label>
          </div>
        </div>

        <button className="next__btn">
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
        </button>
      </div>
      <div className="img__wrapper">
        <img src={gadgets} alt="gadgets" />
      </div>
    </div>
  );
};

export default Q3;
