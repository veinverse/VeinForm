import "./q6.css";

const Q6 = () => {
  return (
    <section>
      <div>
        <h1>Question 6</h1>
        <h2>
          Which issues do you face with your business activities?This question
          is required.
        </h2>
        <div>
          <div>
            <input
              type="checkbox"
              value="Challenges in receiving online payments"
              id="1"
              name="business issues"
            />
            <label for="1">Challenges in receiving online payments</label>
          </div>
          <div>
            <input
              type="checkbox"
              value="Delay in receiving payments from clients"
              id="2"
              name="business issues"
            />
            <label for="2">Delay in receiving payments from clients</label>
          </div>
          <div>
            <input
              type="checkbox"
              value="Advertisement of my business"
              id="3"
              name="business issues"
            />
            <label for="3">Advertisement of my business</label>
          </div>
          <div>
            <input
              type="checkbox"
              value="Difficulty in communicating with clients"
              id="4"
              name="business issues"
            />
            <label for="4">Difficulty in communicating with client</label>
          </div>
          <div>
            <input type="text" placeholder="Other" name="business issues" />
          </div>
        </div>
        <button>Next</button>
      </div>
    </section>
  );
};

export default Q6;
