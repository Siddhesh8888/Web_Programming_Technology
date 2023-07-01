import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const EmployeeEdit = () => {
  let [empdetails, setEmployeedetails] = useState({
    empid: "",
    ename: "",
    sal: "",
  });

  let navigate = useNavigate();
  let param = useParams();

  useEffect(() => {
    EmployeeService.getEmpById(param.eid)
      .then((result) => {
        setEmployeedetails({ ...result.data });
      })
      .catch(() => {});
  }, []);

  let updateemp = () => {
    EmployeeService.updateEmp(empdetails)
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
        <button
          type="button"
          id="btn"
          name="btn"
          value="btn"
          onClick={updateemp}
        >
          UPDATE EMPLOYEE
        </button>
      </form>
    </div>
  );
};

export default EmployeeEdit;
