import contact from "../../../photos/contact.jpg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

import ReactPhoneInput, { isPossiblePhoneNumber } from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";


const containerVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "just",
      duration: 1,
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
};

const childVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { type: "just", duration: 1 },
  },
};

const Q3 = ({setState3}) => {

  const handleChange = e => {
    const {value } = e.target;
  
    setState3(value);
  }

  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const [value, setValue] = useState();

  return (
    <div className="imq__body" id="question3">
      <div className="q__wrapper">
        <h1>Question 3</h1>
        <h2>May we have your contact number?</h2>
        <div className="choice__wrapper">
          <div className="option">
            <ReactPhoneInput
                country={"gh"}
                value = {value}
                onChange = {() => handleChange}
                error = {value && isPossiblePhoneNumber(value) ? "true" : "false"}
                buttonStyle={{background: 'none', border: 'solid #f4e6b1', borderTopLeftRadius: '12px', borderBottomLeftRadius: '12px'}}
                enableSearch={true}
                inputProps={{
                  style: {
                    display: 'block',
                    width: '100%',
                    padding: '1.8rem 3rem',
                    cursor: 'pointer',
                    border: '2px solid #f4e6b1',
                    borderRadius: '12px',
                    background: 'none',
                    fontSize: '18px',
                    color: '#ffffff',
                  },
                }}
              />
          </div>
        </div>

        <motion.a href="#question4" className="next__btn">
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
        </motion.a>
      </div>
      <div className="img__wrapper">
        <img src={contact} alt="contact" />
      </div>
    </div>
  );
};

export default Q3;
