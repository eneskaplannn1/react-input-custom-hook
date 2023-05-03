import { useState } from "react";
import useInput from "../hooks/useInput";

const BasicForm = (props) => {
  const {
    enteredVal: enteredNameValue,
    isValidValue: isValidName,
    handleUserInput: handleNameInput,
    handleTouch: handleTouchedName,
    InputClassName: nameInputClassName,
    showErrorMessage: showErrorMessageName,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");
  const {
    enteredVal: enteredLastNameValue,
    isValidValue: isValidLastName,
    handleUserInput: handleLastNameInput,
    handleTouch: handleTouchedLastName,
    InputClassName: nameInputClassLastName,
    showErrorMessage: showErrorMessageLastName,
    reset: resetLastNameInput,
  } = useInput((value) => value.trim() !== "");
  const {
    enteredVal: enteredEmailValue, //
    isValidValue: isValidEmail, //
    handleUserInput: handleEmailInput, //
    handleTouch: handleTouchedEmail, //
    InputClassName: nameInputClassEmail,
    showErrorMessage: showErrorMessageEmail,
    reset: resetEmailInput, //
  } = useInput(
    (value) =>
      value.includes("@") && value.at(-1) !== "@" && value.at(0) !== "@"
  );

  let formIsValid = false;
  if (isValidName && isValidLastName && isValidEmail) formIsValid = true;

  function handleSubmit(e) {
    e.preventDefault();

    handleTouchedName(true);
    handleTouchedLastName(true);
    handleTouchedEmail(true);

    if (!isValidLastName && !isValidName && !isValidEmail) return;

    console.log(enteredNameValue, enteredLastNameValue, enteredEmailValue);

    resetNameInput();
    resetLastNameInput();
    resetEmailInput();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="control-group">
        <div className={nameInputClassName}>
          <label htmlFor="name">First Name</label>
          <input
            onBlur={handleTouchedName}
            onChange={handleNameInput}
            value={enteredNameValue}
            type="text"
            id="name"
          />
          {showErrorMessageName && <p>Please Enter Valid Name</p>}
        </div>
        <div className={nameInputClassLastName}>
          <label htmlFor="name">Last Name</label>
          <input
            value={enteredLastNameValue}
            onBlur={handleTouchedLastName}
            onChange={handleLastNameInput}
            type="text"
            id="name"
          />
          {showErrorMessageLastName && <p>Please Enter Valid Last Name</p>}
        </div>
      </div>
      <div className={nameInputClassEmail}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          value={enteredEmailValue}
          onChange={handleEmailInput}
          onBlur={handleTouchedEmail}
          type="text"
          id="name"
        />
        {showErrorMessageEmail && <p>Please Enter Valid E-mail</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
