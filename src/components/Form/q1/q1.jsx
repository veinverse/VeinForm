import "./q1.css";
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

const Q1 = ({setState1}) => {
  const handleChange = e => {
    const { value } = e.target;

    setState1(value);
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

  return (
    <motion.div
      id="question1"
      className="q__wrapper"
      variants={containerVariant}
      initial="hidden"
      animate={controls}
      ref={ref}
    >
      <h1>Question 1</h1>
      <h2>What do you do?</h2>
      <motion.div variants={childVariant} className="choice__wrapper">
      
        <div className="option">
          <input type="radio" value="Event Planning" id="ep" name="What do you do?" onChange={handleChange}  />
          <label for="ep">Event Planning</label>
        </div>
        <div className="option">
          <input type="radio" value="Own a Studio" id="studio" name="What do you do?"onChange={handleChange}  />
          <label for="studio">Own a Studio</label>
        </div>
        <div className="option">
          <input
            type="radio"
            value="Manage a Restaurant"
            id="restaurant"
            name="What do you do?" onChange={handleChange} 
          />
          <label for="restaurant">Manage a Restaurant</label>
        </div>
        <div className="option">
          <input type="radio" value="Other" id="other" name="What do you do?" onChange={handleChange}  />
          <label for="other">Other</label>
        </div>
      </motion.div>

      <motion.a variants={childVariant} href="#question2" className="next__btn">
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
    </motion.div>
  );
};

export default Q1;
