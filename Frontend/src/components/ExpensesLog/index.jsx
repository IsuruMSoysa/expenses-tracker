/* eslint-disable react/prop-types */
import { Row, Col } from "react-bootstrap";
import ExpenseCard from "../ExpenseCard";
import { useEffect, useState } from "react";
import ReactLoading from "react-loading";

function ExpensesLog(props) {
  const [expensesArray, setExpensesArray] = useState([]);

  useEffect(
    () => {
      setExpensesArray(props.expenses);
    },
    [props.expenses],
    []
  );

  const mapExpense =
    expensesArray &&
    expensesArray.map((e) => {
      if (!e.isArchived) {
        return (
          // eslint-disable-next-line react/jsx-key
          <Col className="card-cube p-0" lg={6}>
            <ExpenseCard
              title={e.name}
              date={e.date.toDate().toLocaleDateString()}
              amount={e.amount}
              type={e.type}
              key={e.id}
              id={e.id}
            />
          </Col>
        );
      }
    });

  const loadingData = (
    <Col className="inner-loading">
      <ReactLoading type="cylon" color="#ffffff" height={"55%"} width={"55%"} />
    </Col>
  );

  return (
    <Row>
      <Col>
        <Row>
          <Col className="expense-log-title text-center px-lg-4 py-3">
            <h4>Expenses Log</h4>
          </Col>
        </Row>
        <Row className="expense-cards-cont">
          {props.expenses ? mapExpense : loadingData}
        </Row>
      </Col>
    </Row>
  );
}

export default ExpensesLog;
