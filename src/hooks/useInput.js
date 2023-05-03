import { useState } from "react";

const useInput = (checkValidity) => {
  const [enteredVal, setEnteredVal] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const isValidValue = checkValidity(enteredVal);
  const showErrorMessage = !isValidValue && isTouched;

  function handleTouch() {
    setIsTouched(true);
  }
  function handleUserInput(e) {
    setEnteredVal(e.target.value);
  }

  const InputClassName = showErrorMessage
    ? "form-control invalid"
    : "form-control";
  function reset() {
    setEnteredVal("");
    setIsTouched(false);
  }
  return {
    enteredVal,
    isValidValue,
    handleUserInput,
    handleTouch,
    InputClassName,
    showErrorMessage,
    reset,
  };
};

export default useInput;

