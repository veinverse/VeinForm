import React from "react";
import "./home.css";
import { MdNavigateNext } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";

const home = () => {
  return (
    <main className="section">
      <div className="main">
        <div className="main__text">
          <h1>Hi there,</h1>
          <h2>
            We’ll like to know a bit about your business experience with
            technology.
          </h2>
          <button>
            <h1>Get Started </h1>
            <span>
              <MdNavigateNext />
            </span>
          </button>
          <h3>
            <AiOutlineClockCircle /> &nbsp; Takes just 1 minute to complete
          </h3>
        </div>
        <div className="main__text-sub">
          <h3>
            This is a little survey for the commencement of a software
            engineering project to make life easier and better
          </h3>
          <h4>All rights Reseved | Veinverse Inc.</h4>
        </div>
      </div>
    </main>
  );
};

export default home;
