import "./q7.css";

const q7 = () => {
  return (
    <div className="q__wrapper">
      <h1>Question 7</h1>
      <h2>
        How well are you able to interact with a website?This question is
        required.
      </h2>
      <div className="choice__wrapper flex-row">
        <div className="option">
          <input type="radio" value="1" id="n1" name="numbers" />
          <label className="option__numbers" for="n1">
            1
          </label>
        </div>
        <div className="option">
          <input type="radio" value="2" id="n2" name="numbers" />
          <label className="option__numbers" for="n2">
            2
          </label>
        </div>
        <div className="option">
          <input type="radio" value="3" id="n3" name="numbers" />
          <label className="option__numbers" for="n3">
            3
          </label>
        </div>
        <div className="option">
          <input type="radio" value="4" id="n4" name="numbers" />
          <label className="option__numbers" for="n4">
            4
          </label>
        </div>
        <div className="option">
          <input type="radio" value="5" id="n5" name="numbers" />
          <label className="option__numbers" for="n5">
            5
          </label>
        </div>
        <div className="option">
          <input type="radio" value="6" id="n6" name="numbers" />
          <label className="option__numbers" for="n6">
            6
          </label>
        </div>
        <div className="option">
          <input type="radio" value="7" id="n7" name="numbers" />
          <label className="option__numbers" for="n7">
            7
          </label>
        </div>
        <div className="option">
          <input type="radio" value="8" id="n8" name="numbers" />
          <label className="option__numbers" for="n8">
            8
          </label>
        </div>
        <div className="option">
          <input type="radio" value="9" id="n9" name="numbers" />
          <label className="option__numbers" for="n9">
            9
          </label>
        </div>
        <div className="option">
          <input type="radio" value="10" id="n10" name="numbers" />
          <label className="option__numbers" for="n10">
            10
          </label>
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

export default q7;
