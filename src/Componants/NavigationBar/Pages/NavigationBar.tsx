import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item nav-link">
              <Link
                style={{ textDecoration: "none", color: "#fff" }}
                to={"/my"}
              >
                Componant
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
