/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import ProjectButton from "../../components/common/Button";
import { Row, Col, Form, Dropdown, DropdownButton } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { createExpense } from "../../features/expenses/expensesSlice";
import { useDispatch } from "react-redux";
import { toggleLoading } from "../../features/loadingScreen/loadingSlice";
import { useSelector } from "react-redux";

function AddExpensePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const currentUser = useSelector((state) => state.auth);
  const [name, setName] = useState();
  const [exDate, setExDate] = useState();
  const [amount, setAmount] = useState();
  const [selectedType, setSelectedType] = useState(null);
  const [description, setDescription] = useState();

  const typeList = ["Transport", "Food", "Rent", "Entrtainment", "Utilities"];

  const handleDateChange = (value) => {
    setExDate(value);
  };

  function handleCreateExpense(e) {
    e.preventDefault();
    dispatch(toggleLoading());
    const dataObj = {
      userId: currentUser.user.uid,
      name: name,
      date: exDate,
      amount: amount,
      type: selectedType,
      description: description,
      isArchived: false,
    };
    dispatch(createExpense(dataObj));
    dispatch(toggleLoading());
    navigate(`/dashboard/${id}`);
  }
  return (
    <Row className="create-expense-cont mx-3 my-2">
      <Col className="create-expense  p-md-4" xl={6} md={5} sm={6} xs={10}>
        <h4 className="text-center py-3 mt-4">Add Expense Item</h4>
        <Form onSubmit={handleCreateExpense}>
          <Form.Group className="row">
            <Form.Group className="col-xl-6 mb-3" controlId="forExpenseName">
              <Form.Label>Expense Name</Form.Label>
              <Form.Control
                type="text"
                maxLength="15"
                placeholder="Enter Expense name"
                onChange={(event) => {
                  const remainingChars = 15 - event.target.value.length;
                  const label = document.getElementById("expenseNameLabel");
                  label.textContent = `Remaining characters: ${remainingChars}`;
                  setName(event.target.value);
                }}
              />
              <Form.Text id="expenseNameLabel" muted>
                Remaining characters: 10
              </Form.Text>
            </Form.Group>
            <Form.Group className="col-xl-6 mb-3" controlId="formDate">
              <Form.Label>Date</Form.Label>
              <DatePicker
                selected={exDate}
                onChange={handleDateChange}
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                placeholderText="Select date of expense"
                dateFormat="MM/dd/yyyy"
                className="form-control"
              />
            </Form.Group>
          </Form.Group>

          <Form.Group className="row">
            <Form.Group className="col-xl-6 mb-3" controlId="formAmount">
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
            <Form.Group className="col-xl-6 mb-3" controlId="formType">
              <Form.Label>Expense Type</Form.Label>
              <DropdownButton
                key="1"
                title={selectedType ? selectedType : "Select Expense Type"}
                menuVariant="dark"
                drop="up"
              >
                {typeList.map((item) => (
                  <Dropdown.Item
                    value={item}
                    key={item}
                    eventKey={item}
                    onClick={(e) => setSelectedType(e.target.text)}
                  >
                    {item}
                  </Dropdown.Item>
                ))}
              </DropdownButton>
            </Form.Group>
            <Form.Group className="row">
              <Form.Group className="col-xl-12 mb-3" controlId="formType">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  type="textarea"
                  id="whatsappNumber"
                  placeholder="Description"
                  value={description}
                  className="login-input-space  bg-variant-dark"
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </Form.Group>
            </Form.Group>
            <Form.Group className="text-center" controlId="addExpBtn">
              <ProjectButton
                label="Add Expense"
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

export default AddExpensePage;
