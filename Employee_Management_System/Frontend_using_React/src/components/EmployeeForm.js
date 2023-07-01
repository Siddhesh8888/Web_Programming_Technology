import { useState } from "react";
import EmployeeService from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

const EmployeeForm = (props) => {
  let [empdetails, setEmployeedetails] = useState({
    empid: "",
    ename: "",
    sal: "",
  });
  var navigate = useNavigate();

  let addEmp = () => {
    EmployeeService.addEmployee(empdetails)
      .then(() => {
        navigate("/table");
      })
      .catch(() => {});
  };

  return (
    <div>
      <form>
        Employee Id :{" "}
        <input
          type="text"
          id="empid"
          name="empid"
          value={empdetails.empid}
          onChange={(event) => {
            setEmployeedetails({ ...empdetails, empid: event.target.value });
          }}
        />
        <br />
        <br />
        Employee Name :{" "}
        <input
          type="text"
          id="ename"
          name="ename"
          value={empdetails.ename}
          onChange={(event) => {
            setEmployeedetails({ ...empdetails, ename: event.target.value });
          }}
        />
        <br />
        <br />
        Employee Salary :{" "}
        <input
          type="text"
          id="sal"
          name="sal"
          value={empdetails.sal}
          onChange={(event) => {
            setEmployeedetails({ ...empdetails, sal: event.target.value });
          }}
        />
        <br />
        <br />
        <button type="button" id="btn" name="btn" value="btn" onClick={addEmp}>
          ADD EMPLOYEE
        </button>
      </form>
    </div>
  );
};

export default EmployeeForm;
