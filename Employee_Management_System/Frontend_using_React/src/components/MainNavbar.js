import { NavLink } from "react-router-dom";

const MainNavbar = () => {
  return (
    <div>
      <NavLink to="/home">home</NavLink>
      <br></br>
      <NavLink to="/table">table</NavLink>
      <br />
      <NavLink to="/form">form</NavLink>
      <br />
    </div>
  );
};

export default MainNavbar;
