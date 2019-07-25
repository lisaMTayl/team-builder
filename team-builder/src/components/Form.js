import React, { useState } from "react";

const Form = (props) => {
  const [member, setMember] = useState([{name: "", email: "", role: ""}]);

  const handleChange = event => {
    console.log(member);
    setMember({
      ...member, [event.target.name]: event.target.value
    });
  };

    const submitHandler = event => {
      event.preventDefault();
      // console.log(username)
      // console.log(password)
      // Send data to server
      // Change data
      // Go to a new page
    };


  return (
    <form onSubmit={event => submitHandler(event)}>
      <fieldset>
        <legend>Signup</legend>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Enter your name"
            value={member.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={member.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="text"
            className="form-control"
            name="role"
            placeholder="Enter your job role"
            onChange={handleChange}
            value={member.role}
          />
        </div>
        <button type="submit">Submit</button>
      </fieldset>
    </form>
  );
}

export default Form;
