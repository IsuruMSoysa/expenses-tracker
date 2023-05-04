import { Row, Col } from "react-bootstrap";
import { useRouteError, useNavigate } from "react-router";
import ProjectButton from "../../components/common/Button";

function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <Row>
      <Col>
        <Row>
          <Col>
            <h1>
              <b>Oops!</b>
            </h1>
          </Col>
        </Row>
        <Row>
          <Col>
            {" "}
            <h3>Sorry, an unexpected error has occurred.</h3>
          </Col>
        </Row>
        <Row>
          <Col
            style={{ borderRadius: "0.7em", backgroundColor: "#F0F8FF" }}
            className=" m-3 p-2"
          >
            <p>
              <i>{error.statusText || error.message}</i>
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <ProjectButton
              label="Go back"
              backgroundColor="#717171"
              size="small"
              color="#ffffff"
              btnOnClick={() => navigate(-1)}
              type="reset"
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default ErrorPage;
