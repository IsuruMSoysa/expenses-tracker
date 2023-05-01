import { Row, Col, Button } from "react-bootstrap";
import ProjectButton from "../../components/common/Button";
import { useNavigate } from "react-router";

function ViewExpensesPage() {
  const navigate = useNavigate();
  return (
    <Row
      className="exp-det-pop-cont justify-item-center"
      id="expenseDetailsWindow"
    >
      {/* <Col xl={3}></Col> */}
      <Col className="exp-details-crd-cont py-3 px-4" xl={6}>
        <Row>
          <Col className="exp-title text-start">
            <h3>Expense Name</h3>
          </Col>
          <Col className="text-end">
            <label>2023.03.02</label>
          </Col>
        </Row>
        <Row>
          <Col className="text-start pb-3 ps-3">
            <label>Expense Type</label>
          </Col>
        </Row>
        <Row>
          <Col className="exp-amount text-center">
            <h2>Rs.100000</h2>
          </Col>
        </Row>
        <Row className="exp-descrip">
          <Col className="text-start m-2 pb-3">
            <label>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </label>
          </Col>
        </Row>
        <Row className="pb-3 text-center">
          <Col className="">
            <ProjectButton
              label="Edit"
              backgroundColor="#0ad357"
              size="small"
              btnOnClick={() => navigate("/EditItem")}
            />
          </Col>
          <Col className="">
            <ProjectButton
              label="Delete"
              backgroundColor="#ff5d96"
              size="small"
              // btnOnClick={() => navigate("/login")}
            />
          </Col>
          <Col className="">
            <ProjectButton
              label="Archive"
              backgroundColor="#D5B0E2"
              size="small"
              // btnOnClick={() => navigate("/login")}
            />
          </Col>
          <Col className="">
            <ProjectButton
              label="Back"
              backgroundColor="#717171"
              size="small"
              color="#ffffff"
              btnOnClick={() => navigate(-1)}
            />
          </Col>
        </Row>
      </Col>
      {/* <Col xl={3}></Col> */}
    </Row>
  );
}

export default ViewExpensesPage;
