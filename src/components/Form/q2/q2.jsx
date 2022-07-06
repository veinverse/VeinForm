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

const Q2 = (props) => {

  const click = (e)=>{
    const {checked,value}= e.target   
        if(checked===true){
         localStorage.setItem(`${value}`, value)}
      props.setState2([localStorage])  
        if(checked===false){
          localStorage.removeItem(`${value}`)
        }
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
      variants={containerVariant}
      initial="hidden"
      animate={controls}
      className="q__wrapper"
      id="question2"
    >
      <h1>Question 2</h1>
      <h2>Where do you mostly hold your business activities?</h2>
      <p style={{ color: "white", fontWeight: 600, paddingTop: "10px" }}>
        Select any three (3) regions
      </p>
      <motion.div
        variants={childVariant}
        className="choice__wrapper grid__container"
        ref={ref}
      >
        <div className="option grid__item">
          <input
            type="checkbox"
            value="Greater Accra"
            id="accra"
            name="Where do you mostly hold your business activities?"    
          onChange={click} 
          />
          <label for="accra">Greater Accra</label>
        </div>
        <div className="option grid__item">
          <input type="checkbox" value="Eastern" id="eastern" name="Where do you mostly hold your business activities?"    
          onChange={click}    
          />
          <label for="eastern">Eastern</label>
        </div>
        <div className="option grid__item">
          <input type="checkbox" value="Central" id="central" name="Where do you mostly hold your business activities?"    
          onChange={click}     
  
          />
          <label for="central">Central</label>
        </div>
        <div className="option grid__item">
          <input
            type="checkbox"
            value="North East"
            id="northEast"
            name="Where do you mostly hold your business activities?"    
          onChange={click}    
          />
          <label for="northEast">North East</label>
        </div>
        <div className="option grid__item">
          <input
            type="checkbox"
            value="Northern"
            id="northern"
            name="Where do you mostly hold your business activities?"    
          onChange={click}    
          />
          <label for="northern">Northern</label>
        </div>
        <div className="option grid__item">
          <input type="checkbox" value="Ahafo" id="ahafo" name="Where do you mostly hold your business activities?"    
          onChange={click}     />
          <label for="ahafo">Ahafo</label>
        </div>
        <div className="option grid__item">
          <input type="checkbox" value="Ashanti" id="ashanti" name="Where do you mostly hold your business activities?"    
          onChange={click}     />
          <label for="ashanti">Ashanti</label>
        </div>
        <div className="option grid__item">
          <input type="checkbox" value="Bono East" id="bono" name="Where do you mostly hold your business activities?"    
          onChange={click}     />
          <label for="bono">Bono East</label>
        </div>
        <div className="option grid__item">
          <input
            type="checkbox"
            value="Brong Ahafo"
            id="brongAhafo"
            name="Where do you mostly hold your business activities?"    
          onChange={click}    
          />
          <label for="brongAhafo">Brong Ahafo</label>
        </div>
        <div className="option grid__item">
          <input type="checkbox" value="Oti" id="oti" name="Where do you mostly hold your business activities?"    
          onChange={click}     />
          <label for="oti">Oti</label>
        </div>
        <div className="option grid__item">
          <input
            type="checkbox"
            value="Savannah"
            id="savannah"
            name="Where do you mostly hold your business activities?"    
          onChange={click}    
          />
          <label for="savannah">Savannah</label>
        </div>
        <div className="option grid__item">
          <input
            type="checkbox"
            value="Upper East"
            id="upperEast"
            name="Where do you mostly hold your business activities?"    
          onChange={click}    
          />
          <label for="upperEast">Upper East</label>
        </div>
        <div className="option grid__item">
          <input
            type="checkbox"
            value="Upper West"
            id="upperWest"
            name="Where do you mostly hold your business activities?"    
          onChange={click}    
          />
          <label for="upperWest">Upper West</label>
        </div>
        <div className="option grid__item">
          <input type="checkbox" value="Western" id="western" name="Where do you mostly hold your business activities?"    
          onChange={click}     />
          <label for="western">Western</label>
        </div>
        <div className="option grid__item">
          <input
            type="checkbox"
            value="Western North"
            id="westernNorth"
            name="Where do you mostly hold your business activities?"    
          onChange={click}    
          />
          <label for="westernNorth">Western North</label>
        </div>
        <div className="option grid__item">
          <input type="checkbox" value="Volta" id="volta" name="Where do you mostly hold your business activities?"    
          onChange={click}     />
          <label for="volta">Volta</label>
        </div>
      </motion.div>
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
