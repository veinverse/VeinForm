import payment from "../../../photos/payment.jpg";
import "./q4.css";

const Q4 = ({setState4}) => {
  let data = []
  const click = (e)=>{
    const {checked}= e.target
        if(checked===true){
          if(document.getElementById('MoMo').checked===true){
            data.push(document.getElementById('MoMo').value)
          }
          if(document.getElementById('bank').checked===true){
            data.push(document.getElementById('bank').value)
          }
          if(document.getElementById('cash').checked===true){
            data.push(document.getElementById('cash').value)
          }
          setState4(data)
        }
        if(checked===false){
          if(document.getElementById('MoMo').checked===true){
            data.push(document.getElementById('MoMo').value)
          }
          if(document.getElementById('bank').checked===true){
            data.push(document.getElementById('bank').value)
          }
          if(document.getElementById('cash').checked===true){
            data.push(document.getElementById('cash').value)
          }
          setState4(data)
        }
    }
    
   
  return (
    <div className="imq__body" id="question4">
      <div className="img__wrapper">
        <img src={payment} alt="payment" />
      </div>
      <div className="q__wrapper">
        <h1>Question 4</h1>
        <h2>How do you receive payments from your clients?</h2>
        <div className="choice__wrapper">
                    <div className="option">
                        <input type="checkbox" value="Mobile Money (MoMo)" id="MoMo" name="How do you receive payments from your clients?" onChange={click}/>
                        <label for="MoMo">Mobile Money (MoMo)</label>
                    </div>
                    <div className="option">
                        <input type="checkbox" value="Bank Account" id="bank" name="How do you receive payments from your clients?" onChange={click}/>
                        <label for="bank">Bank Account</label>
                    </div>
                    <div className="option">
                        <input type="checkbox" value="Physical Cash" id="cash" name="How do you receive payments from your clients?" onChange={click}/>
                        <label for="cash">Physical Cash</label>
                    </div>
                </div>

        <a href="#question5" className="next__btn">
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
    </div>
  );
};

export default Q4;
