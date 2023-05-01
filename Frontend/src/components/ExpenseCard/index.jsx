/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";

function ExpenseCard(props) {
  const [expenseType, setExpenseType] = useState("autorenew");
  const [carBg, setCardBg] = useState("grey");

  useEffect(matchIconName, [props.type]);

  function matchIconName() {
    switch (props.type) {
      case "Transport":
        setExpenseType("directions_car");
        setCardBg("#0AD357");
        break;
      case "Rent":
        setExpenseType("attach_money");
        setCardBg("#FFE100");
        break;
      case "Food":
        setExpenseType("restaurant");
        setCardBg("#00A6FF");
        break;
      case "Utilities":
        setExpenseType("construction");
        setCardBg("#E863FF");
        break;
      case "Entertainment":
        setExpenseType("celebration");
        setCardBg("#1abda9");
        break;
      default:
        setExpenseType("autorenew");
        setCardBg("#FF63A4");
    }
  }
  return (
    <Row className="expense-card m-1" style={{ backgroundColor: carBg }}>
      <Col xs={2}>
        <div className="icon-div">
          <span className="material-symbols-outlined" style={{ color: carBg }}>
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
            <span className="material-symbols-outlined p-1">open_in_new</span>
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
