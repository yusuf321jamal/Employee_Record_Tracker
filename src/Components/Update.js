import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Update = () => {
  const navigate = useNavigate();
  const [id, setid] = useState(0);
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [department, setDepartment] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [birthday, setBirthday] = useState("");

  useEffect(() => {
    setid(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));

    setEmail(localStorage.getItem("email"));
    setPosition(localStorage.getItem("position"));
    setDepartment(localStorage.getItem("department"));
    setPhone(localStorage.getItem("phone"));
    setBirthday(localStorage.getItem("birthday"));
    setLocation(localStorage.getItem("location"));
  }, []);

  const handelUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`https://655c0046ab37729791a9b44b.mockapi.io/Crud-employees/${id}`, {
        emp_name: name,
        emp_email: email,
        emp_position: position,
        emp_department: department,
        emp_phone: phone,
        emp_birthday: birthday,
        emp_location: location,
      })
      .then(() => {
        navigate("/");
      });
  };

  return (
    <>
      <div className="col-md-4 container">
        <form>
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
            <select>
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
            <button
              onClick={handelUpdate}
              type="submit"
              class="btn btn-primary"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Update;
