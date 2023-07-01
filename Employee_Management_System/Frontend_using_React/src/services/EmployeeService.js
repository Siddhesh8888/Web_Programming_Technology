import axios from "axios";
var baseUrl = "http://localhost:3002";

class EmployeeService {
  constructor() {}

  getAllEmloyee() {
    return axios.get(baseUrl + "/employees");
  }

  addEmployee(emp) {
    return axios.post(baseUrl + "/employees/employee", emp);
  }

  getEmpById(id) {
    return axios.get(baseUrl + "/employees/employee/" + id);
  }

  updateEmp(emp) {
    return axios.put(baseUrl + "/employees/employee/" + emp.empid, emp);
  }

  deleteEmp(id) {
    return axios.delete(baseUrl + "/employees/employee/" + id);
  }
}

export default new EmployeeService();
