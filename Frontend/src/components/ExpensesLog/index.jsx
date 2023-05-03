/* eslint-disable react/prop-types */
import { Row, Col } from "react-bootstrap";
import ExpenseCard from "../ExpenseCard";
import { useEffect, useState } from "react";
import LoadingScreen from "../common/LoadingScreen/LoadingScreen";
import ReactLoading from "react-loading";

function ExpensesLog(props) {
  const [expensesArray, setExpensesArray] = useState([]);

  useEffect(() => {
    setExpensesArray(props.expenses);
    console.log(props.expenses);
  }, [props.expenses]);

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

  const mapExpense =
    expensesArray &&
    expensesArray.map((e) => {
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
    });

  // function mapExpense(){
  //   if(expensesArray){
  //     if(expensesArray.length == 0){
  //       return  (
  //   <h4 style={{ color: "#ffffff" }}>No expenses added</h4>
  // )
  //     }
  //     else{
  //       (
  //   expensesArray.map((e) => {
  //     return (
  //       // eslint-disable-next-line react/jsx-key
  //       <Col className="card-cube p-0" lg={6}>
  //         <ExpenseCard
  //           title={e.name}
  //           date={e.date.toDate().toLocaleDateString()}
  //           amount={e.amount}
  //           type={e.type}
  //           key={e.id}
  //           id={e.id}
  //         />
  //       </Col>
  //     );
  //   })
  // )
  //     }
  //   }else{
  //     return loadingData
  //   }
  // }

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
          {/* {props.expenses && expensesArray.length === 0 ? (
            <i>
              <label className="py-3" style={{ color: "#717171" }}>
                No expenses added yet
              </label>
            </i>
          ) : null} */}
        </Row>
      </Col>
    </Row>
  );
}

export default ExpensesLog;
