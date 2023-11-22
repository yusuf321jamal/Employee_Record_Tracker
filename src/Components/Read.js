import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ShowLoading from "./ShowLoading";
const Read = () => {
  const [incomingData, setIncomingData] = useState([]); ///for storing the coming data
  const [isLoading, setIsLoading] = useState(false);

  const getData = () => {
    axios
      .get("https://655c0046ab37729791a9b44b.mockapi.io/Crud-employees")
      .then((response) => {
        console.log(response.data);
        setIncomingData(response.data);
      });
  };

  const setToLocalStorage = (
    id,
    name,
    department,
    position,
    email,
    phone,
    birthday,
    location
  ) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("department", department);
    localStorage.setItem("position", position);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
    localStorage.setItem("birthday", birthday);
    localStorage.setItem("location", location);
  };

  useEffect(() => {
    getData();
    setIsLoading(true);
  }, []);


  const deleteHandler = (id) => {
    axios
      .delete(
        `https://655c0046ab37729791a9b44b.mockapi.io/Crud-employees/${id}`
      )
      .then(() => {
        getData();
      });
  };

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="my-2">
            <Link to="/create">
              <button className="btn btn-success ">Add new Employees</button>
            </Link>
          </div>
          <table className="table table-bordered table-striped table-dark table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>DEPARTMENT</th>
                <th>POSITION</th>
                <th>EMAIL</th>
                <th>PHONE</th>
                <th>BIRTHDAY</th>
                <th>LOCATION</th>
                <th>EDIT</th>
                <th>DELETE</th>
              </tr>
            </thead>
            {isLoading && <ShowLoading />}
            {isLoading &&
              incomingData.length !== 0 &&
              incomingData.map((singleData) => {
                return (
                  <tbody>
                    <tr>
                      <td>{singleData.id}</td>
                      <td>{singleData.emp_name}</td>
                      <td>{singleData.emp_department}</td>
                      <td>{singleData.emp_position}</td>
                      <td>{singleData.emp_email}</td>
                      <td>{singleData.emp_phone}</td>
                      <td>{singleData.emp_birthday}</td>
                      <td>{singleData.emp_location}</td>

                      <td>
                        <Link to="/update">
                          <button
                            className="btn btn-primary"
                            onClick={() =>
                              setToLocalStorage(
                                singleData.id,
                                singleData.emp_name,
                                singleData.emp_department,
                                singleData.emp_position,
                                singleData.emp_email,
                                singleData.emp_phone,
                                singleData.emp_birthday,
                                singleData.emp_location
                              )
                            }
                          >
                            Edit
                          </button>
                        </Link>
                      </td>
                      <td>
                        <button
                          className="btn-danger"
                          onClick={() => deleteHandler(singleData.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
          </table>
        </div>
      </div>
    </>
  );
};

export default Read;
