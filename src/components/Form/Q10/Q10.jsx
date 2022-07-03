const q10 = () => {
  return (
    <div className="q__wrapper" id="question10">
      <h1>Question 10</h1>
      <h2>
        Will you be willing to use a website or mobile app to help your business
        activities (for free)?
      </h2>
      <div className="choice__wrapper">
        <div className="option">
          <input type="radio" value="Event Planning" id="yes2" name="willing" />
          <label for="yes2">Yes</label>
        </div>
        <div className="option">
          <input type="radio" value="Own a Studio" id="maybe2" name="willing" />
          <label for="maybe2">Not really</label>
        </div>
        <div className="option">
          <input
            type="radio"
            value="Manage a Restaurant"
            id="no2"
            name="willing"
          />
          <label for="no2">No</label>
        </div>
      </div>
      <button className="next__btn">
        <p className="btn__text">Submit</p>
      </button>
    </div>
  );
};

export default q10;
