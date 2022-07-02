import "./q2.css";

const Q2 = () => {
  return (
    <div className="q__wrapper">
      <h1>Question 2</h1>
      <h2>Where do you mostly hold your business activities?</h2>
      <p className="select__any3">Select any three (3) regions</p>
      <div className="choice__wrapper grid__container">
        <div className="option grid__item">
          <input
            type="checkbox"
            value="Event Planning"
            id="11"
            name="location"
          />
          <label for="11">Greater Accra</label>
        </div>
        <div className="option grid__item">
          <input type="checkbox" value="Eastern" id="22" name="location" />
          <label for="22">Eastern</label>
        </div>
        <div className="option grid__item">
          <input type="checkbox" value="Central" id="33" name="location" />
          <label for="33">Central</label>
        </div>
        <div className="option grid__item">
          <input type="checkbox" value="North East" id="44" name="location" />
          <label for="44">North East</label>
        </div>
        <div className="option grid__item">
          <input type="checkbox" value="Northern" id="5" name="location" />
          <label for="5">Northern</label>
        </div>
        <div className="option grid__item">
          <input type="checkbox" value="Ahafo" id="6" name="location" />
          <label for="6">Ahafo</label>
        </div>
        <div className="option grid__item">
          <input type="checkbox" value="Ashanti" id="7" name="location" />
          <label for="7">Ashanti</label>
        </div>
        <div className="option grid__item">
          <input type="checkbox" value="Bono East" id="8" name="location" />
          <label for="8">Bono East</label>
        </div>
        <div className="option grid__item">
          <input type="checkbox" value="Brong Ahafo" id="9" name="location" />
          <label for="9">Brong Ahafo</label>
        </div>
        <div className="option grid__item">
          <input type="checkbox" value="Oti" id="10" name="location" />
          <label for="10">Oti</label>
        </div>
        <div className="option grid__item">
          <input type="checkbox" value="Savannah" id="11" name="location" />
          <label for="11">Savannah</label>
        </div>
        <div className="option grid__item">
          <input type="checkbox" value="Upper East" id="12" name="location" />
          <label for="12">Upper East</label>
        </div>
        <div className="option grid__item">
          <input type="checkbox" value="Upper West" id="13" name="location" />
          <label for="13">Upper West</label>
        </div>
        <div className="option grid__item">
          <input type="checkbox" value="Western" id="14" name="location" />
          <label for="14">Western</label>
        </div>
        <div className="option grid__item">
          <input
            type="checkbox"
            value="Western North"
            id="15"
            name="location"
          />
          <label for="15">Western North</label>
        </div>
        <div className="option grid__item">
          <input type="checkbox" value="Volta" id="16" name="location" />
          <label for="16">Volta</label>
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

export default Q2;
