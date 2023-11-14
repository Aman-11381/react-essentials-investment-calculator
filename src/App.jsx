import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Result from "./components/Result.jsx";

import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleUserInputChange(inputIdentifier, newValue) {
    setUserInput((prevInputValue) => {
      return {
        ...prevInputValue,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput
        userInput={userInput}
        onUserInputChange={handleUserInputChange}
      />
      {!inputIsValid && <p>Please enter a duration greater than zero</p>}
      {inputIsValid && <Result userInput={userInput} />}
    </>
  );
}

export default App;
