import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return <div className="navbar">
    <NavLink to="/" exact>Home</NavLink><br />
    <NavLink to="/movies" exact>Movies</NavLink><br/>
    <NavLink to="/directors" exact>Directors</NavLink><br/>
    <NavLink to="actors" exact>Actors</NavLink><br/>
    </div>;
}

export default NavBar;
