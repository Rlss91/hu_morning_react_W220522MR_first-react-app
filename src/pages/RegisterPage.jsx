import { Fragment, useState } from "react";
const RegisterPage = () => {
  const [nameInput, setNameInput] = useState("");

  const handleNameInputChange = (event) => {
    setNameInput(event.target.value);
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
          value={nameInput}
          onChange={handleNameInputChange}
        />
        <label htmlFor="nameInput">Name</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="lastNameInput"
          placeholder="Lastname"
        />
        <label htmlFor="lastNameInput">Lastname</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating  mb-3">
        <input
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
        />
        <label htmlFor="floatingPassword">Password</label>
      </div>
      <button className="btn btn-primary">Register</button>
    </Fragment>
  );
};

export default RegisterPage;
