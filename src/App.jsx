import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import Form from "./pages/Form/form";
import Success from "./pages/Success/success";
import DBView from "./pages/Data/dbView";
import { dummyData } from "./pages/Data/mockData";

function App() {
  const columns = [
    {question: "id", ID: "id"},
    {question: "Date", ID: "date"},
    {question: "What do you do?", ID: "q1"},
    {question: "Where do you mostly hold your business activities?", ID: "q2"},
    {question: "Which gadget do you use the most for your business activities?", ID: "q3"},
    {question: "How do you receive payments from your clients?", ID: "q4"},
    {question: "With which medium do you mostly interact with your clients?", ID: "q5"},
    {question: "Which issues do you face with your business activities?", ID: "q6"},
    {question: "How well are you able to interact with a website?", ID: "q7"},
    {question: "How well are you able to interact with a mobile app?", ID: "q8"},
    {question: "Have you used a website or mobile app to help your business activities?", ID: "q9"},
    {question: "Will you be willing to use a website or mobile app to help your business activities (for free)?", ID: "q10"},
  ]

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/success" element={<Success />} />
          <Route path="/dbView" element={<DBView columns={columns} data={dummyData} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
