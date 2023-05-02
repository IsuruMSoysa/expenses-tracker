import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.substring(1);

  const navLabel = ["Dashboard", "Archived", "Account"].map((e) => {
    console.log(path);
    return path.toLocaleLowerCase() === e.toLocaleLowerCase() ? (
      <Col className="nav-menuitem-selected py-1">{e}</Col>
    ) : (
      <Col
        className="nav-menuitem py-1"
        onClick={() => {
          navigate("/" + e.toLocaleLowerCase());
        }}
      >
        {e}
      </Col>
    );
  });

  function handleLogOut() {
    localStorage.removeItem("uid");
    navigate("/login");
  }
  return (
    <Row className="navbar-cont text-center mx-2">
      <Col className="logo-section text-start ps-4">Expenses Tracker</Col>
      <Col>
        <Row>
          <Col lg={1}></Col>
          {navLabel}
          <Col className="nav-menuitem py-1" onClick={handleLogOut}>
            Logout
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Navbar;
