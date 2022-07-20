import "./q2.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

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
      staggerChildren: 0.2,
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

const Q2 = ({setState2}) => {

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

  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate={controls}
      className="q__wrapper"
      id="question2"
      ref={ref}
    >
      <h1>Question 2</h1>
      <h2>Kindly enter your email address</h2>
      <div className="choice__wrapper">
        <div className="option">
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="text_enter"
            onChange={(e)=>setState2(e.target.value)}
          />
        </div>
      </div>

      <a href="#question3" className="next__btn">
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
    </motion.div>
  );
};

export default Q2;
