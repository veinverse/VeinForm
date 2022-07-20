import spaceType from "../../../photos/spaceType.jpg";
import "./q4.css";
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

const Q4 = ({setState4}) => { 
  const handleChange = e => {
    const { value } = e.target;

    setState4(value);
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
    <div className="imq__body" id="question4">
      <div className="img__wrapper">
        <img src={spaceType} alt="spaceType" />
      </div>
      <div className="q__wrapper">
        <h1>Question 4</h1>
        <h2>What kind of space do you have?</h2>
        <motion.div variants={childVariant} className="choice__wrapper">
          <div className="option">
            <input type="radio" value="Event Centre" id="event-centre" name="What kind of space do you have?" onChange={handleChange}  />
            <label for="event-centre">Event Centre</label>
          </div>
          <div className="option">
            <input type="radio" value="Photo Studio" id="photo-studio" name="What kind of space do you have?"onChange={handleChange}  />
            <label for="photo-studio">Photo Studio</label>
          </div>
          <div className="option">
            <input
              type="radio"
              value="Astro Turf Pitch"
              id="astro-turf"
              name="What kind of space do you have?" onChange={handleChange} 
            />
            <label for="astro-turf">Astro Turf Pitch</label>
          </div>
          <div className="option">
            <input type="radio" value="Art Gallery" id="art-gallery" name="What kind of space do you have?"onChange={handleChange}  />
            <label for="art-gallery">Art Gallery</label>
          </div>
          <div className="option">
            <input
              type="text"
              placeholder="Other? Type here.."
              name="other"
              className="text_enter"
              onChange={(e)=>setState4(e.target.value)}
            />
          </div>
        </motion.div>
        
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
