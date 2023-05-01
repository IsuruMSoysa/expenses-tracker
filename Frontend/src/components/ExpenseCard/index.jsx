/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router";

function ExpenseCard(props) {
  const navigate = useNavigate();
  const [expenseType, setExpenseType] = useState("autorenew");
  const [cardBg, setCardBg] = useState("grey");
  const [cardBg2, setCardBg2] = useState("grey");

  useEffect(matchIconName, [props.type]);

  function matchIconName() {
    switch (props.type) {
      case "Transport":
        setExpenseType("directions_car");
        setCardBg("#0AD357");
        setCardBg2("#00C48E");
        break;
      case "Rent":
        setExpenseType("attach_money");
        setCardBg("#FBE432");
        setCardBg2("#B3D42B");
        break;
      case "Food":
        setExpenseType("restaurant");
        setCardBg("#D5B0E2");
        setCardBg2("#BD5DE7");
        break;
      case "Utilities":
        setExpenseType("construction");
        setCardBg("#FAA875");
        setCardBg2("#E68787");
        break;
      case "Entertainment":
        setExpenseType("celebration");
        setCardBg("#00DEFF");
        setCardBg2("#00A6C6");
        break;
      default:
        setExpenseType("autorenew");
        setCardBg("#FF63A4");
    }
  }
  return (
    <Row
      className="expense-card m-1"
      style={{
        backgroundImage: `linear-gradient(to bottom right, ${cardBg}, ${cardBg2})`,
      }}
    >
      <Col xs={2}>
        <div className="icon-div">
          <span className="material-symbols-outlined" style={{ color: cardBg }}>
            {expenseType}
          </span>
        </div>
      </Col>
      <Col>
        <Row>
          <Col className="expense-card-date pt-2">
            <label>{props.date}</label>
          </Col>
          <Col className="expand-icon text-end">
            <span
              onClick={() => navigate("/ViewItem")}
              className="material-symbols-outlined p-1"
            >
              open_in_new
            </span>
          </Col>
        </Row>
        <Row className="card-2-cont">
          <Col className="expense-card-title">
            <label>{props.title}</label>
          </Col>
          <Col className="expense-card-amount text-end pe-3">
            <label>Rs.{props.amount} </label>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default ExpenseCard;
