import payment from "../../../photos/payment.jpg";

const Q6 = ({setState6}, props) => { 
  const handleChange = e => {
    const {value } = e.target;
  
    props.setState6( value);
  }

  return (
    <div className="imq__body" id="question6">
      <div className="q__wrapper">
        <h1>Question 6</h1>
        <h2>Kindly let us know your cost of space per hour</h2>
        <div className="choice__wrapper">
          <div className="option">
            <input
              type="number"
              placeholder="Cost Per Hour (GH¢)"
              name="cph"
              className="text_enter"
              onChange={(e)=>setState6(e.target.value)}
            />
          </div>
        </div>

        <a href={handleChange} className="next__btn" onClick={props.form}>
          <p className="btn__text">Submit</p>
        </a>
      </div>
      <div className="img__wrapper">
        <img src={payment} alt="payment" />
      </div>
    </div>
  );
};

export default Q6;
