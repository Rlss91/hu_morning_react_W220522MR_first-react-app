import { Fragment, useState } from "react";
const LoginPage = () => {
  const [emailInput, setEmailInput] = useState(""); //init state
  const [passwordInput, setPasswordInput] = useState(""); //init state
  const handleEmailInputChange = (ev) => {
    setEmailInput(ev.target.value);
  };
  const handlePasswordInputChange = (ev) => {
    setPasswordInput(ev.target.value);
  };
  return (
    <Fragment>
      <h2>Login page</h2>

      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          value={emailInput}
          onChange={handleEmailInputChange}
        />
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating  mb-3">
        <input
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
          value={passwordInput}
          onChange={handlePasswordInputChange}
        />
        <label htmlFor="floatingPassword">Password</label>
      </div>
      <button className="btn btn-primary">Register</button>
    </Fragment>
  );
};

export default LoginPage;
