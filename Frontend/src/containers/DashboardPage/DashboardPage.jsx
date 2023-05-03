import { Row, Col } from "react-bootstrap";
import Navbar from "../../components/Navbar";
import ExpensesLog from "../../components/ExpensesLog";
import CategoryData from "../../components/CategoryData";
import AddButton from "../../components/AddButton";
import { db } from "../../firebase-config";
import { collection, getDocs } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExpenses } from "./../../features/expenses/expensesSlice";
import { useParams } from "react-router-dom";
import { setExpenses } from "../../features/cardDetails/cardDetailsSlice";

function DashboardPage() {
  const dispatch = useDispatch();
  let { id } = useParams();
  const expensesArr = useSelector((state) => state.expenses);
  const cards = useSelector((state) => state.cards);
  const user = useSelector((state) => state.auth);
  const [userExpenseArray, setUserExpenseArray] = useState([]);

  useEffect(() => {
    dispatch(fetchExpenses(id));
    dispatch(setExpenses(expensesArr));
  }, [dispatch]);

  useEffect(() => {
    dispatch(setExpenses(expensesArr.expenses));
  }, [expensesArr]);

  return (
    <>
      <div className="add-btn-section">
        <AddButton />
      </div>
      <Row className="dashboard-cont m-0 p-0">
        <Col>
          <Row className="dash-nav-cont">
            <Col className="pt-2 px-1">
              <Navbar />
            </Col>
          </Row>
          <Row className="dash-content">
            <Col className="dash-side-section my-1 px-3" xl={3}>
              <Row className="dash-total-section">
                <Col>
                  <Row>
                    <Col className="total-card">
                      <label>Total Earnings</label>
                      <h4>Rs. {cards.totalEarnings}</h4>
                    </Col>
                    <Col className="total-card">
                      <label>Total Expenses</label>
                      <h4>Rs. {cards.totalExpenses}</h4>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="total-card text-center">
                      <label>Total Leftover</label>
                      <h2>Rs. {cards.totalEarnings - cards.totalExpenses}</h2>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="dash-data-section pb-4">
                <Col>
                  <Row>
                    <Col>
                      <CategoryData />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col className="dash-main-content ms-xl-4" xl={8}>
              <ExpensesLog expenses={expensesArr.expenses} />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default DashboardPage;
