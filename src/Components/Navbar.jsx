import "./Navbar.css";
import { React } from "react";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../Contexts/AuthContext";

function Navbar() {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      console.log("Logged Out");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/">
          <img className="nav-logo" src="/logo 184x62px.png" alt="" />
        </Link>

        <ul className={"nav-menu"}>
          {user ? (
            <>
              <li className="user-nav">
                <Link to="/planner">
                  <img src="IconsandImages/planter.png" />
                </Link>
              </li>
              <li className="user-nav">
                <Link to="/userdetails">
                  <img src="IconsandImages/details.png" />
                </Link>
              </li>
              <li className="user-nav">
                <img src="IconsandImages/signout.png" onClick={handleLogout} />
              </li>
            </>
          ) : (
            <>
              <li className="public-nav">
                <Link to="/signup">
                  <Button variant="contained" color="secondary">
                    SIGN UP
                  </Button>
                </Link>
              </li>
              <li className="public-nav">
                <Link to="/signin">
                  <Button variant="contained" color="primary">
                    SIGN IN
                  </Button>
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
