import "./q2.css";

const Q2 = () => {
  return (
    <div className="q__wrapper">
      <h1>Question 2</h1>
      <h2>Where do you mostly hold your business activities?</h2>
      <p>Select any three (3) regions</p>
      <div className="choice__wrapper grid__container">
        <div className="option grid__item">
          <input
            type="checkbox"
            value="Event Planning"
            id="accra"
            name="location"
          />
          <label for="accra">Greater Accra</label>
        </div>
        <div className="option grid__item">
          <input type="checkbox" value="Eastern" id="eastern" name="location" />
          <label for="eastern">Eastern</label>
        </div>
        <div className="option grid__item">
          <input type="checkbox" value="Central" id="central" name="location" />
          <label for="central">Central</label>
        </div>
        <div className="option grid__item">
          <input
            type="checkbox"
            value="North East"
            id="northEast"
            name="location"
          />
          <label for="northEast">North East</label>
        </div>
        <div className="option grid__item">
          <input
            type="checkbox"
            value="Northern"
            id="northern"
            name="location"
          />
          <label for="northern">Northern</label>
        </div>
        <div className="option grid__item">
          <input type="checkbox" value="Ahafo" id="ahafo" name="location" />
          <label for="ahafo">Ahafo</label>
        </div>
        <div className="option grid__item">
          <input type="checkbox" value="Ashanti" id="ashanti" name="location" />
          <label for="ashanti">Ashanti</label>
        </div>
        <div className="option grid__item">
          <input type="checkbox" value="Bono East" id="bono" name="location" />
          <label for="bono">Bono East</label>
        </div>
        <div className="option grid__item">
          <input
            type="checkbox"
            value="Brong Ahafo"
            id="brongAhafo"
            name="location"
          />
          <label for="brongAhafo">Brong Ahafo</label>
        </div>
        <div className="option grid__item">
          <input type="checkbox" value="Oti" id="oti" name="location" />
          <label for="oti">Oti</label>
        </div>
        <div className="option grid__item">
          <input
            type="checkbox"
            value="Savannah"
            id="savannah"
            name="location"
          />
          <label for="savannah">Savannah</label>
        </div>
        <div className="option grid__item">
          <input
            type="checkbox"
            value="Upper East"
            id="upperEast"
            name="location"
          />
          <label for="upperEast">Upper East</label>
        </div>
        <div className="option grid__item">
          <input
            type="checkbox"
            value="Upper West"
            id="upperWest"
            name="location"
          />
          <label for="upperWest">Upper West</label>
        </div>
        <div className="option grid__item">
          <input type="checkbox" value="Western" id="western" name="location" />
          <label for="western">Western</label>
        </div>
        <div className="option grid__item">
          <input
            type="checkbox"
            value="Western North"
            id="westernNorth"
            name="location"
          />
          <label for="westernNorth">Western North</label>
        </div>
        <div className="option grid__item">
          <input type="checkbox" value="Volta" id="volta" name="location" />
          <label for="volta">Volta</label>
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
