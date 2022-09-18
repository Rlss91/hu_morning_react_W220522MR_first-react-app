import { Fragment, useState } from "react";
const RegisterPage = () => {
  const [userInput, setUserInput] = useState({
    nameInput: "",
    emailInput: "",
    passwordInput: "",
  });
  const handleUserInputChange = (ev) => {
    let newUserInput = JSON.parse(JSON.stringify(userInput));
    if (newUserInput.hasOwnProperty(ev.target.id)) {
      newUserInput[ev.target.id] = ev.target.value;
      setUserInput(newUserInput);
    }
  };
  return (
    <Fragment>
      <h2>Register page</h2>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="nameInput"
          placeholder="Name"
          value={userInput.nameInput}
          onChange={handleUserInputChange}
        />
        <label htmlFor="nameInput">Name</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="emailInput"
          placeholder="name@example.com"
          value={userInput.emailInput}
          onChange={handleUserInputChange}
        />
        <label htmlFor="emailInput">Email address</label>
      </div>
      <div className="form-floating  mb-3">
        <input
          type="password"
          className="form-control"
          id="passwordInput"
          placeholder="Password"
          value={userInput.passwordInput}
          onChange={handleUserInputChange}
        />
        <label htmlFor="passwordInput">Password</label>
      </div>
      <button className="btn btn-primary">Register</button>
    </Fragment>
  );
};
export default RegisterPage;
