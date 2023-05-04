/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import ProjectButton from "../../components/common/Button";
import { Row, Col, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import { toggleLoading } from "../../features/loadingScreen/loadingSlice";
import { useSelector } from "react-redux";
import {
  fetchAccountDetails,
  updateAccountDetails,
} from "../../features/accountDetails/accountDetailsSlice";
import { Modal } from "antd";

function IncreaseEarningsPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const userDetails = useSelector((state) => state.accountDetails);
  const [amount, setAmount] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (!userDetails.currentUserDetails) dispatch(fetchAccountDetails(id));
  }, []);

  function handleIncreaseEarnings(e) {
    e.preventDefault();
    dispatch(toggleLoading());
    let editObj = {
      totalEarning:
        parseInt(amount) +
        parseInt(userDetails.currentUserDetails.totalEarning),
    };
    dispatch(updateAccountDetails({ id, editObj }));
    dispatch(fetchAccountDetails(id));
    dispatch(toggleLoading());
    navigate(`/dashboard/${id}`);
  }
  return (
    <Row className="increase-earning-cont mx-3 my-2">
      <Modal
        title="Increse Earnings amount?"
        centered
        open={modalOpen}
        onOk={handleIncreaseEarnings}
        onCancel={() => setModalOpen(false)}
      ></Modal>
      <Col className="increase-earning  p-md-4" xl={4} md={5} sm={6} xs={10}>
        <h4 className="text-center py-3 mt-4">Increase Earnings By</h4>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            setModalOpen(true);
          }}
        >
          <Form.Group className="">
            <Form.Group className=" my-3" controlId="formAmount">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => {
                  e.target.value < 0 ? setAmount(0) : setAmount(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="text-center pt-3" controlId="addExpBtn">
              <ProjectButton
                label="Increase Earnings"
                backgroundColor="#0ad357"
                size="small"
                type="submit"
              />
              <ProjectButton
                label="Back"
                backgroundColor="#717171"
                size="small"
                color="#ffffff"
                btnOnClick={() => navigate(-1)}
              />
            </Form.Group>
          </Form.Group>
        </Form>
      </Col>
    </Row>
  );
}

export default IncreaseEarningsPage;
