import { Row, Col } from "react-bootstrap";
import ExpenseCard from "../ExpenseCard";

function ExpensesLog() {
  const cards = [
    {
      amount: "100000",
      title: "House Rent",
      date: "2023.05.01",
      type: "Transport",
    },
    {
      amount: "100000",
      title: "House Rent",
      date: "2023.05.01",
      type: "Rent",
    },
    {
      amount: "100000",
      title: "House Rent",
      date: "2023.05.01",
      type: "Food",
    },
    {
      amount: "100000",
      title: "House Rent",
      date: "2023.05.01",
      type: "Utilities",
    },
    {
      amount: "100000",
      title: "House Rent",
      date: "2023.05.01",
      type: "Entertainment",
    },
    {
      amount: "100000",
      title: "House Rent",
      date: "2023.05.01",
      type: "Food",
    },
    {
      amount: "100000",
      title: "House Rent",
      date: "2023.05.01",
      type: "Food",
    },
    {
      amount: "100000",
      title: "House Rent",
      date: "2023.05.01",
      type: "Food",
    },
    {
      amount: "100000",
      title: "House Rent",
      date: "2023.05.01",
      type: "Food",
    },
    {
      amount: "100000",
      title: "House Rent",
      date: "2023.05.01",
      type: "Food",
    },
    {
      amount: "100000",
      title: "House Rent",
      date: "2023.05.01",
      type: "Food",
    },
    {
      amount: "100000",
      title: "House Rent",
      date: "2023.05.01",
      type: "Food",
    },
    {
      amount: "100000",
      title: "House Rent",
      date: "2023.05.01",
      type: "Food",
    },
    {
      amount: "100000",
      title: "House Rent",
      date: "2023.05.01",
      type: "Food",
    },
    {
      amount: "100000",
      title: "House Rent",
      date: "2023.05.01",
      type: "Food",
    },
    {
      amount: "100000",
      title: "House Rent",
      date: "2023.05.01",
      type: "Food",
    },
    {
      amount: "100000",
      title: "House Rent",
      date: "2023.05.01",
      type: "Food",
    },
    {
      amount: "100000",
      title: "House Rent",
      date: "2023.05.01",
      type: "Food",
    },
  ];
  return (
    <Row>
      <Col>
        <Row>
          <Col className="expense-log-title text-center px-lg-4 py-2">
            <h4>Expenses Log</h4>
          </Col>
        </Row>
        <Row className="expense-cards-cont">
          {cards.map((e) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <Col className="card-cube p-0" lg={6}>
                <ExpenseCard
                  title={e.title}
                  date={e.date}
                  amount={e.amount}
                  type={e.type}
                  key={e.index}
                />
              </Col>
            );
          })}
        </Row>
      </Col>
    </Row>
  );
}

export default ExpensesLog;
