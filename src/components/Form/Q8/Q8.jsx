import React from "react";

const Q8 = () => {
  return (
    <div className="q__wrapper" id="question8">
      <h1>Question 8</h1>
      <h2>How well are you able to interact with a mobile app?</h2>
      <div className="choice__wrapper flex-row">
        <div className="option">
          <input type="radio" value="1" id="n8-1" name="numbers" />
          <label className="option__numbers" for="n8-1">
            1
          </label>
        </div>
        <div className="option">
          <input type="radio" value="2" id="n8-2" name="numbers" />
          <label className="option__numbers" for="n8-2">
            2
          </label>
        </div>
        <div className="option">
          <input type="radio" value="3" id="n8-3" name="numbers" />
          <label className="option__numbers" for="n8-3">
            3
          </label>
        </div>
        <div className="option">
          <input type="radio" value="4" id="n8-4" name="numbers" />
          <label className="option__numbers" for="n8-4">
            4
          </label>
        </div>
        <div className="option">
          <input type="radio" value="5" id="n8-5" name="numbers" />
          <label className="option__numbers" for="n8-5">
            5
          </label>
        </div>
        <div className="option">
          <input type="radio" value="6" id="n8-6" name="numbers" />
          <label className="option__numbers" for="n8-6">
            6
          </label>
        </div>
        <div className="option">
          <input type="radio" value="7" id="n8-7" name="numbers" />
          <label className="option__numbers" for="n8-7">
            7
          </label>
        </div>
        <div className="option">
          <input type="radio" value="8" id="n8-8" name="numbers" />
          <label className="option__numbers" for="n8-8">
            8
          </label>
        </div>
        <div className="option">
          <input type="radio" value="9" id="n8-9" name="numbers" />
          <label className="option__numbers" for="n8-9">
            9
          </label>
        </div>
        <div className="option">
          <input type="radio" value="10" id="n8-10" name="numbers" />
          <label className="option__numbers" for="n8-10">
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

export default Q8;
