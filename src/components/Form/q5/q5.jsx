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

const Q5 = ({setState5}, props) => {
  const click = (e)=>{
    const {checked,value}= e.target   
        if(checked===true){
         localStorage.setItem(`${value}`, value)}
      props.setState5([localStorage])  
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
      id="question5"
    >
      <div className="q__wrapper">
        <h1>Question 5</h1>
        <h2>What events are open to your space?</h2>
        <p style={{ color: "white", fontWeight: 600, paddingTop: "10px" }}>
          Select any that apply
        </p>
        <motion.div
          variants={childVariant}
          className="choice__wrapper grid__container"
          ref={ref}
        >
          <div className="option grid__item">
            <input
              type="checkbox"
              value="Weddings"
              id="weddings"
              name="What events are open to your space?"    
            onChange={click} 
            />
            <label for="weddings">Weddings</label>
          </div>
          <div className="option grid__item">
            <input type="checkbox" value="Engagements" id="engagements" name="What events are open to your space?"    
            onChange={click}    
            />
            <label for="engagements">Engagements</label>
          </div>
          <div className="option grid__item">
            <input type="checkbox" value="Parties" id="parties" name="What events are open to your space?"    
            onChange={click}    
            />
            <label for="parties">Parties</label>
          </div>
          <div className="option grid__item">
            <input type="checkbox" value="Dinners" id="dinners" name="What events are open to your space?"    
            onChange={click}    
            />
            <label for="dinners">Dinners</label>
          </div>
          <div className="option grid__item">
            <input type="checkbox" value="Workshops" id="workshops" name="What events are open to your space?"    
            onChange={click}    
            />
            <label for="workshops">Workshops</label>
          </div>
          <div className="option grid__item">
            <input type="checkbox" value="Sports" id="sports" name="What events are open to your space?"    
            onChange={click}    
            />
            <label for="sports">Sports</label>
          </div>
          <div className="option grid__item">
            <input type="checkbox" value="Conferences" id="conferences" name="What events are open to your space?"    
            onChange={click}    
            />
            <label for="conferences">Conferences</label>
          </div>
          <div className="option grid__item">
            <input type="checkbox" value="Studio Shoots" id="studio-shoots" name="What events are open to your space?"    
            onChange={click}    
            />
            <label for="studio-shoots">Studio Shoots</label>
          </div>
          <div className="option grid__item">
            <input
              type="text"
              placeholder="Other? Type here.."
              name="other"
              className="text_enter"
              onChange={(e)=>setState5(e.target.value)}
            />
        </div>
        </motion.div>

        <a href="#question6" className="next__btn">
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
    </motion.div>
  );
};

export default Q5;
