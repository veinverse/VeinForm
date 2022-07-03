import "./form.css";
import Q1 from "../../components/Form/q1/q1";
import Q2 from "../../components/Form/q2/q2";
import Q3 from "../../components/Form/q3/q3";
import Q4 from "../../components/Form/q4/q4";
import Q5 from "../../components/Form/q5/q5";
import Q6 from "../../components/Form/Q6/Q6";
import Q7 from "../../components/Form/Q7/Q7";
import Q8 from "../../components/Form/Q8/Q8";
import Q9 from "../../components/Form/Q9/Q9";
import Q10 from "../../components/Form/Q10/Q10";

const Form = () => {
  return (
    <main>
      <form>
        <Q1 />
        <Q2 />
        <Q3 />
        <Q4 />
        <Q5 />
        <Q6 />
        <Q7 />
        <Q8 />
        <Q9 />
        <Q10 />
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
