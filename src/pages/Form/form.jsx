import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./form.css";
import Q1 from "../../components/Form/Q1/q1";
import Q2 from "../../components/Form/Q2/q2";
import Q3 from "../../components/Form/Q3/q3";
import Q4 from "../../components/Form/Q4/q4";
import Q5 from "../../components/Form/Q5/q5";
import Q6 from "../../components/Form/Q6/q6";


const Form = () => {
  const [state1, setState1] = useState([])
  const [state2, setState2] = useState([])
  const [state3, setState3] = useState([])
  const [state4, setState4] = useState([])
  const [state5, setState5] = useState([])
  const [state6, setState6] = useState([])

  let navigate = useNavigate();

  const form = async ()=>{
    const response = {state1, state2, state3, state4, state5, state6}
    await fetch('https://dry-savannah-94364.herokuapp.com/answers', {
      method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(response),
}).then(()=>{
  if(state1.length!==0 && state2.length!==0  && state3.length!==0  && state4.length!==0  && state5.length!==0  && state6.length!==0 ){
   navigate('/success', window.localStorage.clear())
  }else{
    alert('Answer all Questions')
  }
})
  }

  return (
    <main>
      <form>
          <Q1 setState1={setState1}/>
          <Q2 setState2={setState2}  />
          <Q3 setState3={setState3} />
          <Q4 setState4={setState4} />
          <Q5 setState5={setState5} />
          <Q6 setState6={setState6} />
      </form>
      <a href="#question1" className="fixed">
        <span className="scroll-top">
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
        <p>Scroll to top</p>
      </a>
    </main>
  );
};

export default Form;
