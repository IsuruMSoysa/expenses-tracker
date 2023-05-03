import { Row, Col } from "react-bootstrap";
import Navbar from "../../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import ExpenseCard from "../../components/ExpenseCard";
import ReactLoading from "react-loading";
import { useEffect } from "react";
import { fetchExpenses } from "../../features/expenses/expensesSlice";
import { setExpenses } from "../../features/cardDetails/cardDetailsSlice";
import { useParams } from "react-router";

function ArchivedPage() {
  const dispatch = useDispatch();
  const expensesArray = useSelector((state) => state.expenses);
  const { id } = useParams();

  useEffect(
    () => {
      dispatch(fetchExpenses(id));
      dispatch(setExpenses(expensesArray));
    },
    [dispatch],
    []
  );
  const renderArcheived =
    expensesArray.expenses &&
    expensesArray.expenses.map((e) => {
      if (e.isArchived) {
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
    <>
      <Row>
        <Col className="pt-2">
          <Navbar />
          <Row>
            <Col className="text-center py-3">
              <h4>Archived Expenses</h4>
            </Col>
          </Row>
          <Row className="expense-cards-cont">
            {expensesArray ? renderArcheived : loadingData}
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default ArchivedPage;
