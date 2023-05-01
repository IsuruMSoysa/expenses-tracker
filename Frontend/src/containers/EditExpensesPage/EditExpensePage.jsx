/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import ProjectButton from "../../components/common/Button";
import { Row, Col, Form, Dropdown, DropdownButton } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function EditExpensePage() {
  const navigate = useNavigate();
  const [dob, setDob] = useState("");
  const [typeList, seTypeList] = useState([
    "Transport",
    "Food",
    "Rent",
    "Entrtainment",
    "Utilities",
  ]);
  const [selectedType, setSelectedType] = useState(null);
  const [Description, setDescription] = useState();

  const handleDateChange = (value, formattedValue) => {
    setDob(formattedValue);
  };

  return (
    <Row className="edit-expense-cont mx-3 my-2">
      <Col className="edit-expense  p-md-4" xl={6} md={5} sm={6} xs={10}>
        <h4 className="text-center py-3 mt-4">Edit Expense Item</h4>
        <Form>
          <Form.Group className="row">
            <Form.Group className="col-xl-6 mb-3" controlId="forExpenseName">
              <Form.Label>Expense Name</Form.Label>
              <Form.Control
                type="text"
                maxLength="10"
                placeholder="Enter Expense name"
                onChange={(event) => {
                  const remainingChars = 10 - event.target.value.length;
                  const label = document.getElementById("expenseNameLabel");
                  label.textContent = `Remaining characters: ${remainingChars}`;
                }}
              />
              <Form.Text id="expenseNameLabel" muted>
                Remaining characters: 10
              </Form.Text>
            </Form.Group>
            <Form.Group className="col-xl-6 mb-3" controlId="formDate">
              <Form.Label>Date</Form.Label>
              <DatePicker
                selected={dob}
                onChange={handleDateChange}
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                placeholderText="Select date of birth"
                dateFormat="MM/dd/yyyy"
                className="form-control"
              />
            </Form.Group>
          </Form.Group>

          <Form.Group className="row">
            <Form.Group className="col-xl-6 mb-3" controlId="formAmount">
              <Form.Label>Amount</Form.Label>
              <Form.Control type="number" placeholder="Enter amount" />
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
                  value={Description}
                  className="login-input-space  bg-variant-dark"
                  required
                />
              </Form.Group>
            </Form.Group>
            <Form.Group className="text-center" controlId="EditExpBtn">
              <ProjectButton
                label="Save Expense"
                backgroundColor="#0ad357"
                size="small"
                // btnOnClick={() => navigate("/login")}
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

export default EditExpensePage;
