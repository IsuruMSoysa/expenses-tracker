import { Row, Col } from "react-bootstrap";
import ProjectButton from "../../components/common/Button";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import InnerLoading from "./../../components/common/InnerLoading";
import { assignSelectedExpense } from "../../features/selectedExpense/selectedExpenseSlice";
import {
  deleteExpense,
  updateExpense,
} from "../../features/expenses/expensesSlice";
import { toggleLoading } from "../../features/loadingScreen/loadingSlice";
import { Modal } from "antd";

function ViewExpensesPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let { id, itemid } = useParams();
  const expensesArr = useSelector((state) => state.expenses);
  const [expObj, setExpObj] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);
  const [modalOpen3, setModalOpen3] = useState(false);

  useEffect(() => {
    if (expensesArr.expenses) {
      let obj = filterExpenseItem();
      setExpObj(obj);
      dispatch(assignSelectedExpense(obj));
    }
  }, [expObj]);

  function filterExpenseItem() {
    const filteredExpenses = expensesArr.expenses.filter(
      (expense) => expense.id === itemid
    );
    if (filteredExpenses.length === 0) {
      return null;
    }
    return filteredExpenses[0];
  }
  function handleDeleteItem(e) {
    e.preventDefault();
    dispatch(toggleLoading());
    dispatch(deleteExpense(itemid));
    dispatch(toggleLoading());
    navigate(`/dashboard/${id}`);
  }

  function handleArchiveItem(e) {
    e.preventDefault();
    dispatch(toggleLoading());
    const editObj = {
      isArchived: true,
    };
    dispatch(updateExpense({ itemid, editObj }));
    dispatch(toggleLoading());
    navigate(`/dashboard/${id}`);
  }

  function handleRestoreItem(e) {
    e.preventDefault();
    dispatch(toggleLoading());
    const editObj = {
      isArchived: false,
    };
    dispatch(updateExpense({ itemid, editObj }));
    dispatch(toggleLoading());
    navigate(`/dashboard/${id}`);
  }

  const renderDetails = expObj && (
    <>
      <Row>
        <Modal
          title="Do you Want to delete this item?"
          centered
          open={modalOpen}
          onOk={handleDeleteItem}
          onCancel={() => setModalOpen(false)}
        ></Modal>
        <Modal
          title="Do you Want to archive this item?"
          centered
          open={modalOpen2}
          onOk={handleArchiveItem}
          onCancel={() => setModalOpen2(false)}
        ></Modal>
        <Modal
          title="Do you Want to restore this item?"
          centered
          open={modalOpen3}
          onOk={handleRestoreItem}
          onCancel={() => setModalOpen3(false)}
        ></Modal>
        <Col className="exp-title text-start">
          <h3>{expObj.name}</h3>
        </Col>
        <Col className="text-end">
          <label>2{expObj.date.toDate().toLocaleDateString()}</label>
        </Col>
      </Row>
      <Row>
        <Col className="exp-type text-start pb-3 ps-3">
          <label>{expObj.type}</label>
        </Col>
      </Row>
      <Row>
        <Col className="exp-amount text-center">
          <h2>Rs.{expObj.amount}</h2>
        </Col>
      </Row>
      <Row className="exp-descrip my-4 pb-2">
        <Col className="text-start m-2 px-4">
          <label>{expObj.description}</label>
        </Col>
      </Row>
    </>
  );
  return (
    <Row
      className="exp-det-pop-cont justify-item-center"
      id="expenseDetailsWindow"
    >
      {/* <Col xl={3}></Col> */}
      <Col className="exp-details-crd-cont py-3 px-4" xl={6}>
        {expObj ? renderDetails : <InnerLoading />}
        <Row className="pb-3 text-center">
          <Col className="">
            <ProjectButton
              label="Edit"
              backgroundColor="#0ad357"
              size="small"
              btnOnClick={() => navigate(`/EditItem/${id}/${itemid}`)}
            />
          </Col>
          <Col className="">
            <ProjectButton
              label="Delete"
              backgroundColor="#ff5d96"
              size="small"
              btnOnClick={(e) => {
                e.preventDefault();
                setModalOpen(true);
              }}
            />
          </Col>
          <Col className="">
            {expObj ? (
              expObj.isArchived ? (
                <ProjectButton
                  label="Restore"
                  backgroundColor="#00DEFF"
                  size="small"
                  btnOnClick={(e) => {
                    e.preventDefault();
                    setModalOpen3(true);
                  }}
                />
              ) : (
                <ProjectButton
                  label="Archive"
                  backgroundColor="#D5B0E2"
                  size="small"
                  btnOnClick={(e) => {
                    e.preventDefault();
                    setModalOpen2(true);
                  }}
                />
              )
            ) : null}
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
    </Row>
  );
}

export default ViewExpensesPage;
