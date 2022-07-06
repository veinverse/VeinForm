
const Q6 = ({setState6}) => {  
  let data = []
  const click = (e)=>{
    const {checked}= e.target
        if(checked===true){
          if(document.getElementById('challenge1').checked===true){
            data.push(document.getElementById('challenge1').value)
          }
          if(document.getElementById('challenge2').checked===true){
            data.push(document.getElementById('challenge2').value)
          }
          if(document.getElementById('challenge3').checked===true){
            data.push(document.getElementById('challenge3').value)
          }
          if(document.getElementById('challenge4').checked===true){
            data.push(document.getElementById('challenge4').value)
          }
          setState6(data)
        }
        if(checked===false){
          if(document.getElementById('challenge1').checked===true){
            data.push(document.getElementById('challenge1').value)
          }
          if(document.getElementById('challenge2').checked===true){
            data.push(document.getElementById('challenge2').value)
          }
          if(document.getElementById('challenge3').checked===true){
            data.push(document.getElementById('challenge3').value)
          }
          if(document.getElementById('challenge4').checked===true){
            data.push(document.getElementById('challenge4').value)
          }
          setState6(data)
        }
    }
  return (
    <div className="q__wrapper" id="question6">
      <h1>Question 6</h1>
      <h2>
        Which issues do you face with your business activities? This question is
        required.
      </h2>
      <div className="choice__wrapper">
        <div className="option">
          <input
            type="checkbox"
            value="Challenges in receiving online payments"
            id="challenge1"
            name="business issues"  onChange={click} 
            
          />
          <label for="challenge1">
            Challenges in receiving online payments
          </label>
        </div>
        <div className="option">
          <input
            type="checkbox"
            value="Delay in receiving payments from clients"
            id="challenge2"
            name="business issues"  onChange={click} 
            
          />
          <label for="challenge2">
            Delay in receiving payments from clients
          </label>
        </div>
        <div className="option">
          <input
            type="checkbox"
            value="Advertisement of my business"
            id="challenge3"
            name="business issues"  onChange={click} 
            
          />
          <label for="challenge3">Advertisement of my business</label>
        </div>
        <div className="option">
          <input
            type="checkbox"
            value="Difficulty in communicating with clients"
            id="challenge4"
            name="business issues"  onChange={click} 
            
          />
          <label for="challenge4">
            Difficulty in communicating with client
          </label>
        </div>
        <div className="option">
          <input
            type="text"
            placeholder="Other? Please Type"
            name="business issues"
            className="text_enter"
            onChange={(e)=>setState6(e.target.value)}
          />
        </div>
      </div>

      <a href="#question2">
        <a href="#question7" className="next__btn">
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
        </a>
      </a>
    </div>
  );
};

export default Q6;
