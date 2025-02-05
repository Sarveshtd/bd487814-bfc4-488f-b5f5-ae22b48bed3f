import "./Navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkModeContext } from "./darkmode/DarkModeContext";

function Navbar() {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="navbar-logo">
          <Link to="/admin">
            <img
              src={require("../../images/PhotoFramed-logos_black.png")}
              width={50}
              height={50}
              alt="PhotoFramed-logo_black"
            />
            <img
              src={require("../../images/logo.png")}
              width={200}
              height={50}
              alt="PhotoFramed-Text-logo"
            />
          </Link>
        </div>
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search...." />
        </div>
        <div className="item">
          <DarkModeOutlinedIcon
            className="icon"
            onClick={() => dispatch({ type: "TOGGLE" })}
          />
        </div>
        <div className="bottom">
          <div
            className="colorOption"
            onClick={() => dispatch({ type: "LIGHT" })}
          ></div>
          <div
            className="colorOption"
            onClick={() => dispatch({ type: "DARK" })}
          ></div>
        </div>
        <div className="item">
          <Link to="/login">
            <ExitToAppIcon
              className="icon"
              onClick={() => {
                sessionStorage.clear();
              }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
