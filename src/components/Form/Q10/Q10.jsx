const q10 = (props) => {
  const handleChange = e => {
    const {value } = e.target;
  
    props.setState10( value);
  }

 
  return (
    <div className="q__wrapper" id="question10">
      <h1>Question 10</h1>
      <h2>
        Will you be willing to use a website or mobile app to help your business
        activities (for free)?
      </h2>
      <div className="choice__wrapper">
        <div className="option">
          <input type="radio" value="Yes" id="yes2" name="Will you be willing to use a website or mobile app to help your business
        activities (for free)?" onChange={handleChange}  />
          <label for="yes2">Yes</label>
        </div>
        <div className="option">
          <input type="radio" value="Maybe" id="maybe2" name="Will you be willing to use a website or mobile app to help your business
        activities (for free)?" onChange={handleChange}  />
          <label for="maybe2">Not really</label>
        </div>
        <div className="option">
          <input
            type="radio"
            value="No"
            id="no2"
            name="Will you be willing to use a website or mobile app to help your business
        activities (for free)?" onChange={handleChange} 
          />
          <label for="no2">No</label>
        </div>
      </div>
      <a href={handleChange} className="next__btn" onClick={props.form}>
        <p className="btn__text">Submit</p>
      </a>
    </div>
  );
};

export default q10;
