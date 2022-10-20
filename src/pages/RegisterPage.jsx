import { Fragment, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const RegisterPage = () => {
  const history = useHistory();
  const [userInput, setUserInput] = useState({
    nameInput: "",
    emailInput: "",
    passwordInput: "",
    bizInput: false,
  });
  const handleUserInputChange = (ev) => {
    let newUserInput = JSON.parse(JSON.stringify(userInput));
    if (newUserInput.hasOwnProperty(ev.target.id)) {
      newUserInput[ev.target.id] = ev.target.value;
      setUserInput(newUserInput);
    }
  };

  const handleCheckBoxInputChange = (ev) => {
    let newUserInput = JSON.parse(JSON.stringify(userInput));
    if (newUserInput.hasOwnProperty(ev.target.id)) {
      newUserInput[ev.target.id] = ev.target.checked;
      setUserInput(newUserInput);
    }
  };

  const handleRegisterClick = () => {
    axios
      .post("/users/register", {
        name: userInput.nameInput,
        email: userInput.emailInput,
        password: userInput.passwordInput,
        biz: userInput.bizInput,
      })
      .then((res) => {
        history.push("/login");
      })
      .catch((err) => {
        //err from axios
      });
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
      <div className="form-check mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="bizInput"
          checked={userInput.bizInput}
          onChange={handleCheckBoxInputChange}
        />
        <label className="form-check-label" htmlFor="bizInput">
          Are you business
        </label>
      </div>

      <button className="btn btn-primary" onClick={handleRegisterClick}>
        Register
      </button>
    </Fragment>
  );
};
export default RegisterPage;
