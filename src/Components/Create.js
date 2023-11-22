import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [position, setPosition] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [birthday, setBirthday] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      name === "" ||
      department === "" ||
      position === "" ||
      email === "" ||
      phone === "" ||
      birthday === "" ||
      location === ""
    ) {
      alert("All feilds are mandatory");
    } else {
      axios
        .post("https://655c0046ab37729791a9b44b.mockapi.io/Crud-employees", {
          emp_name: name,
          emp_department: department,
          emp_position: position,
          emp_email: email,
          emp_phone: phone,
          emp_birthday: birthday,
          emp_location: location,
        })
        .then(() => {
          navigate("/");
        })
        .catch((err) => console.log(err));

      setName("");
      setEmail("");
      setPosition("");
      setDepartment("");
      setPhone("");
      setLocation("");
      setBirthday("");
    }
    console.log("clicked");
  };

  return (
    <>
      <div className="col-md-4 container">
        <form onSubmit={submitHandler}>
          <div className="my-2">
            <Link to="/">
              <button className="btn btn-success ">Go to Employees data</button>
            </Link>
          </div>
          <div className="form-group my-2">
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Name"
              name="Name"
            ></input>
          </div>

          <div className="form-group my-3">
            <label>Department:</label>
            <select onChange={(e) => setDepartment(e.target.value)}>
              <option value="null">--Choose options--</option>
              <option value="Development">Development</option>
              <option value="HR">HR</option>
              <option value="Training">Training</option>
              <option value="Finance">Finance</option>
              <option value="Sales">Sales</option>
            </select>
          </div>
          <div className="form-group my-3">
            <label>Position:</label>
            <select
              onChange={(e) => {
                setPosition(e.target.value);
              }}
            >
              <option value="">--Choose options--</option>
              <option value="Frontend Developer">Frontend Developer</option>
              <option value="Backend Developer">Backend Developer</option>
              <option value="Quality Testing">Quality Tester</option>
            </select>
          </div>
          <div className="form-group my-3">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              name="Email"
            ></input>
          </div>
          <div className="form-group my-3">
            <label>Phone:</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter Phone No."
              name="Phone"
            ></input>
          </div>
          <div className="form-group my-3">
            <label>Birthday:</label>
            <input
              type="date"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
              name="Birthday"
            ></input>
          </div>
          <address className="form-group my-3">
            <label>Location:</label>
            <input
              value={location}
              type="text"
              name="Location"
              onChange={(e) => setLocation(e.target.value)}
            ></input>
          </address>
          <br></br>
          <div>
            <button type="submit" class="btn btn-primary">
              Add Employee
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Create;
