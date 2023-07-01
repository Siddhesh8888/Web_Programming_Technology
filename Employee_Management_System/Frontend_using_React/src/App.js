import logo from "./logo.svg";
import "./App.css";
import MainNavbar from "./components/MainNavbar";
import { Route, Routes, Navigate } from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeTable from "./components/EmployeeTable";
import EmployeeEdit from "./components/EmployeeEdit";

function App() {
  return (
    <div className="App">
      <MainNavbar></MainNavbar>
      <Routes>
        <Route
          path="/"
          element={<Navigate replace to="/home"></Navigate>}
        ></Route>
        <Route path="/home" element={<HomeComponent />}></Route>
        <Route path="/form" element={<EmployeeForm />}></Route>
        <Route path="/table" element={<EmployeeTable />}></Route>
        <Route path="/edit/:eid" element={<EmployeeEdit />}></Route>
      </Routes>
    </div>
  );
}

export default App;
