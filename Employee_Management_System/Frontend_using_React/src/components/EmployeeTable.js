import React, { Component } from "react";
import { render } from "react-dom";
import EmployeeService from "../services/EmployeeService";
import { Link } from "react-router-dom";

class EmployeeTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      err: [],
      searcherr: [],
    };
  }

  fetchData = () => {
    EmployeeService.getAllEmloyee()
      .then((result) => {
        this.setState({
          ...this.state,
          err: result.data,
          searcherr: result.data,
        });
      })
      .catch(() => {});
  };

  componentDidMount() {
    this.fetchData();
  }

  deleteEmp = (id) => {
    EmployeeService.deleteEmp(id)
      .then(() => {
        this.fetchData();
      })
      .catch(() => {});
  };

  render() {
    return (
      <div>
        <Link to="/form">
          <button type="button" id="btn" name="btn" value="btn">
            ADD NEW EMPLOYEE
          </button>
        </Link>
        <br />
        <br />
        <table border="2px">
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Employee Name</th>
              <th>Employee Salary</th>
              <th>Employee Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.searcherr.map((emp) => (
              <tr key={emp.empid}>
                <td>{emp.empid}</td>
                <td>{emp.ename}</td>
                <td>{emp.sal}</td>
                <td>
                  <button
                    type="button"
                    id="btn"
                    name="btn"
                    value="btn"
                    onClick={() => {
                      this.deleteEmp(emp.empid);
                    }}
                  >
                    DELETE
                  </button>
                  <Link to={`/edit/${emp.empid}`}>
                    <button type="button" id="btn" name="btn" value="btn">
                      EDIT
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default EmployeeTable;
