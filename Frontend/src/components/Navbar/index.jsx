import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.substring(1);
  const [hambActive, setHambActive] = useState(false);

  const navLabel = ["Dashboard", "Archived", "Account", "Logout"].map((e) => {
    return path.toLocaleLowerCase() === e.toLocaleLowerCase() ? (
      <Col className="nav-menuitem-selected  px-1">
        <label>{e}</label>
      </Col>
    ) : e === "Logout" ? (
      <Col className="nav-menuitem py-1" onClick={handleLogOut}>
        Logout
      </Col>
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
    localStorage.removeItem("at");
    navigate("/login");
  }
  return (
    <Row className="navbar-cont text-center mx-2">
      <Col className="logo-section text-start ps-4" lg={5} md={4}>
        Expenses Tracker
      </Col>
      <Col lg={7} md={8}>
        <Row className="menu-items">
          <Col lg={1} md={0}></Col>
          {navLabel}
        </Row>
      </Col>
      {hambActive ? <div className="resp-nav py-2">{navLabel}</div> : null}
      <div
        className="hamb-btn"
        onClick={() => {
          setHambActive(!hambActive);
        }}
      >
        <span className="material-symbols-outlined">menu</span>
      </div>
    </Row>
  );
}

export default Navbar;
