const q10 = () => {
  return (
    <div className="q__wrapper">
      <h1>Question 10</h1>
      <h2>
        Will you be willing to use a website or mobile app to help your business
        activities (for free)?
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
        <p className="btn__text">Submit</p>
      </button>
    </div>
  );
};

export default q10;
