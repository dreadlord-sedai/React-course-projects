import { useState } from "react";
import "./Form.css";

const Form = (props) => {
  const [userInput, setUserInput] = useState({
    "current-savings": "",
    "yearly-contribution": "",
    "expected-return": "",
    duration: "",
  });

  const inputChangeHandler = (input, value) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        [input]: value,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onCalculate(userInput);
  };

  const resetHandler = () => {
    setUserInput({
      "current-savings": "",
      "yearly-contribution": "",
      "expected-return": "",
      duration: "",
    });
  };

  return (
    <form className="form" onSubmit={submitHandler} onReset={resetHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input type="number" id="current-savings"
            onChange={(event) => inputChangeHandler("current-savings", event.target.value)}
            value={userInput["current-savings"]} />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input type="number" id="yearly-contribution" 
            onChange={(event) => inputChangeHandler("yearly-contribution", event.target.value)}
            value={userInput["yearly-contribution"]} />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input type="number" id="expected-return"
            onChange={(event) => inputChangeHandler("expected-return", event.target.value)}
            value={userInput["expected-return"]}/>
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input type="number" id="duration"
            onChange={(event) => inputChangeHandler("duration", event.target.value)}
            value={userInput["duration"]}/>
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={resetHandler}>
          Reset
        </button>
        <button type="submit" className="button" onClick={submitHandler}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default Form;
