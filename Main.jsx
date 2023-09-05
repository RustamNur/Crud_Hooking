import React, { Fragment, useState } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { employees } from "./employees";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  let history = useNavigate();

  const [users, setUsers] = useState(employees);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [id, setId] = useState("");

  // -------------delete user ------------
  const onDelete = (id) => {
    setUsers(users.filter((value) => value.id !== id));
    history("/");
  };

  // -------------update user ------------
  const onEdit = (id, name, age) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
    history("/");
  };

  return (
    <Fragment>
      <div style={{ margin: "10rem" }}>
        <Table stripped bordered hover size="sm">
          <thead>
            <tr>
              <th>ID{""}</th>
              <th>Full Name</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 /* -----read users data----*/ ? (
              users.map((item) => {
                return (
                  <tr key={id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>
                      <Button onClick={() => onDelete(item.id)}>Delete</Button>
                      &nbsp;
                      <Link to={"/edit"}>
                        <Button
                          onClick={() => onEdit(item.id, item.name, item.age)}
                        >
                          Edit
                        </Button>
                      </Link>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <th colSpan={8}>
                  <h2>No Data Available</h2>
                </th>
              </tr>
            )}
          </tbody>
        </Table>
        <hr />
        <Link className="d-grid gap-2" to="/create">
          <Button size="lg">Create</Button>
        </Link>
      </div>
    </Fragment>
  );
};

export default Home;
