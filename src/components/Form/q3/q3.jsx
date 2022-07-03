import gadgets from "../../../photos/gadgets.jpg";
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

const Q3 = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
    console.log(inView);
  }, [inView, controls]);

  return (
    <div className="imq__body" id="question3">
      <div className="q__wrapper">
        <h1>Question 3</h1>
        <h2>Which gadget do you use the most for your business activities?</h2>
        <motion.div
          variants={containerVariant}
          initial="hidden"
          animate={controls}
          className="choice__wrapper"
          ref={ref}
        >
          <div className="option">
            <input type="radio" value="Laptop" id="laptop" name="gadget" />
            <label for="laptop">Laptop</label>
          </div>
          <div className="option">
            <input type="radio" value="Tablet" id="tablet" name="gadget" />
            <label for="tablet">Tablet</label>
          </div>
          <div className="option">
            <input type="radio" value="Mobile Phone" id="phone" name="gadget" />
            <label for="phone">Mobile Phone</label>
          </div>
        </motion.div>

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
        <img src={gadgets} alt="gadgets" />
      </div>
    </div>
  );
};

export default Q3;
