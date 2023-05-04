/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import ProjectButton from "../../components/common/Button";
import { Row, Col, Form, Dropdown, DropdownButton } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { updateAccountDetails } from "../../features/accountDetails/accountDetailsSlice";
import { toggleLoading } from "../../features/loadingScreen/loadingSlice";
import { Modal } from "antd";

const countriesAPI = "https://restcountries.com/v3.1/all";

function EditProfilePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userObject = useSelector((state) => state.accountDetails);
  const { id } = useParams();
  const [dob, setDob] = useState(userObject.currentUserDetails.dob.toDate());
  const [countryList, setCountryList] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(
    userObject.currentUserDetails.country
  );
  const [firstName, setFirstName] = useState(
    userObject.currentUserDetails.firstName
  );
  const [lastName, setLastName] = useState(
    userObject.currentUserDetails.lastName
  );
  const [address1, setAddress1] = useState(
    userObject.currentUserDetails.address1
  );
  const [address2, setAddress2] = useState(
    userObject.currentUserDetails.address2
  );
  const [city, setCity] = useState(userObject.currentUserDetails.city);

  useEffect(() => {
    fetch(countriesAPI)
      .then((res) => res.json())
      .then((data) => {
        // Transform API response to an array of objects containing label and value properties
        const transformedData = data
          .map((country) => ({
            label: country.name.common,
            value: country.alpha2Code,
          }))
          .sort((a, b) => a.label.localeCompare(b.label)); // Sort by label in alphabetical order
        setCountryList(transformedData);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleDateChange = (value) => {
    setDob(value);
  };

  function handleEditProfileSubmit(e) {
    e.preventDefault();
    dispatch(toggleLoading());
    let editObj = {
      firstName: firstName,
      lastName: lastName,
      dob: dob,
      address1: address1,
      address2: address2,
      city: city,
      country: selectedCountry,
    };
    dispatch(updateAccountDetails({ id, editObj }));
    dispatch(toggleLoading());
    navigate(`/dashboard/${id}`);
  }

  return (
    <Row className="edit-prof-cont mx-3 my-2">
      <Modal
        title="Save Details?"
        centered
        open={modalOpen}
        onOk={handleEditProfileSubmit}
        onCancel={() => setModalOpen(false)}
      ></Modal>
      <Col className="edit-prof-panel p-md-4" xl={6} md={5} sm={6} xs={10}>
        <h4 className="text-center py-3 mt-4">Edit Profile Details</h4>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            setModalOpen(true);
          }}
        >
          <Form.Group className="row">
            <Form.Group className="col-xl-6 mb-3" controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
              />
            </Form.Group>
            <Form.Group className="col-xl-6 mb-3" controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter last name"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
              />
            </Form.Group>
          </Form.Group>

          <Form.Group className="row">
            <Form.Group className="col-xl-6 mb-3" controlId="formDob">
              <Form.Label>Date of Birth</Form.Label>
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
            <Form.Group className="col-xl-6 mb-3" controlId="formAddress1">
              <Form.Label>Address Line 1</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter address line 1"
                onChange={(e) => setAddress1(e.target.value)}
                value={address1}
              />
            </Form.Group>
            <Form.Group className="col-xl-6 mb-3" controlId="formAddress2">
              <Form.Label>Address Line 2</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter address line 2"
                onChange={(e) => setAddress2(e.target.value)}
                value={address2}
              />
            </Form.Group>
          </Form.Group>

          <Form.Group className="row">
            <Form.Group className="col-xl-6 mb-3" controlId="formCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter city"
                onChange={(e) => setCity(e.target.value)}
                value={city}
              />
            </Form.Group>
            <Form.Group className="col-xl-6 mb-3" controlId="formAddress2">
              <Form.Label>Country</Form.Label>
              <DropdownButton
                key="1"
                title={
                  selectedCountry ? selectedCountry : "Select your Country"
                }
                menuVariant="dark"
                drop="up"
              >
                {countryList.map((country) => (
                  <Dropdown.Item
                    value={country.value}
                    key={country.value}
                    eventKey={country.value}
                    onClick={(e) => setSelectedCountry(e.target.text)}
                  >
                    {country.label}
                  </Dropdown.Item>
                ))}
              </DropdownButton>
            </Form.Group>
            <Form.Group className="text-center pt-3" controlId="EditExpBtn">
              <ProjectButton
                label="Save Profile Details"
                backgroundColor="#0ad357"
                size="small"
                type="submit"
              />
              <ProjectButton
                label="Cancel"
                backgroundColor="#717171"
                size="small"
                color="#ffffff"
                btnOnClick={() => navigate(-1)}
                type="reset"
              />
            </Form.Group>
          </Form.Group>
        </Form>
      </Col>
    </Row>
  );
}

export default EditProfilePage;
