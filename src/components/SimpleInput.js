import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredNameValue, setEnteredNameValue] = useState("");
  const [enteredEmailValue, setEnteredEmailValue] = useState("");
  const [isNameInputTouched, setNameInputTouched] = useState(false);

  let isFormValid = false;

  const isNameInputValid = enteredNameValue.trim() !== "";
  const isEmailInputValid =
    enteredEmailValue.includes("@") && enteredEmailValue.at(-1) !== "@";

  if (isEmailInputValid && isEmailInputValid) {
    isFormValid = true;
  }

  const showErrorMessage =
    !isNameInputValid && !isEmailInputValid && isNameInputTouched;

  function handleNameInput(e) {
    setEnteredNameValue(e.target.value);
  }
  function handleEmailInput(e) {
    setEnteredEmailValue(e.target.value);
  }
  function handleTouch() {
    setNameInputTouched(true);
  }
  function handleSubmitForm(e) {
    e.preventDefault();

    setNameInputTouched(true);
    if (!isNameInputValid && !isEmailInputValid) return;

    console.log(enteredNameValue, enteredEmailValue);

    setEnteredNameValue("");
    setEnteredEmailValue("");
    setNameInputTouched(false);
  }

  const formClassName = showErrorMessage
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={handleSubmitForm}>
      <div className={formClassName}>
        <label htmlFor="name">Your Name</label>
        <input
          onChange={handleNameInput}
          onBlur={handleTouch}
          value={enteredNameValue}
          type="text"
          id="name"
        />
      </div>
      <div className={formClassName}>
        <label htmlFor="email">Your E-mail</label>
        <input
          onChange={handleEmailInput}
          onBlur={handleTouch}
          value={enteredEmailValue}
          type="email"
          id="email"
        />
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
        {showErrorMessage && <p>Please enter valid email and name!!</p>}
      </div>
    </form>
  );
};

export default SimpleInput;
