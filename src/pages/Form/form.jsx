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
        <div className="for-scroll">
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
        </div>
      </form>
    </main>
  );
};

export default Form;
