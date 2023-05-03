/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import ProjectButton from "../../components/common/Button";
import { Row, Col, Form, Dropdown, DropdownButton } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleLoading } from "../../features/loadingScreen/loadingSlice";
import {
  signup,
  createUser,
  loginSuccess,
} from "../../features/auth/authSlice";

const countriesAPI = "https://restcountries.com/v3.1/all";

function SignUpPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authObj = useSelector((state) => state.auth);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [dob, setDob] = useState("");
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [isValid, setIsValid] = useState(false);
  const [showLengthMessage, setShowLengthMessage] = useState(true);
  const [showNumberMessage, setShowNumberMessage] = useState(true);
  const [showSpecialCharMessage, setShowSpecialCharMessage] = useState(true);
  const [comparePw, setComparePw] = useState(false);

  useEffect(() => {
    // Fetch country list from API
    fetch(countriesAPI)
      .then((res) => res.json())
      .then((data) => {
        // Transform API response to an array of objects containing label and value properties
        const transformedData = data.map((country) => ({
          label: country.name.common,
          value: country.alpha2Code,
        }));
        setCountryList(transformedData);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleDateChange = (value) => {
    setDob(value);
  };

  function handlePasswordChange(event) {
    const newPassword = event.target.value;
    setPassword(newPassword);

    // Regular expression to validate password
    const regex =
      /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[@#$%^&+=])[0-9a-zA-Z@#$%^&+=]{8,12}$/;
    setIsValid(regex.test(newPassword));

    // Show/hide instructions based on password rules
    setShowLengthMessage(newPassword.length < 8 || newPassword.length > 12);
    setShowNumberMessage(!/\d/.test(newPassword));
    setShowSpecialCharMessage(!/[@#$%^&+=]/.test(newPassword));
  }

  const handleCreateAccount = async (event) => {
    let validation;
    event.preventDefault();
    let dataObj = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      dob: dob,
      address1: address1,
      address2: address2,
      city: city,
      country: selectedCountry,
      password: password,
      authId: null,
      imageUrl: null,
    };
    dispatch(toggleLoading());

    try {
      const firebaseUser = await dispatch(signup(email, password));
      if (firebaseUser.success) {
        dataObj.authId = firebaseUser.uid;
        let createdUser = dispatch(createUser(dataObj));
        dispatch(loginSuccess(createdUser.arg));
        navigate(`/dashboard/${firebaseUser.uid}`);
      } else {
        alert(firebaseUser.error);
      }
    } catch (error) {
      console.log(error.message);
    }
    dispatch(toggleLoading());

    // signUpWithEmailPassword(props.email, password).then((response) => {
    //   validation = response;
    //   console.log(response);
    //   if (validation.uid) {
    //     props.setPanel(4);
    //     localStorage.setItem("accessToken", validation.accessToken);
    //     localStorage.setItem("uid", validation.uid);
    //   } else {
    //     alert("Login Fail");
    //   }
    // });
  };

  function comparePassword(event) {
    setConfirmPassword(event.target.value);
  }

  useEffect(() => {
    if (password === confirmPassword) {
      setComparePw(true);
    } else {
      setComparePw(false);
    }
  }, [confirmPassword, password]);

  return (
    <Row className="signin-cont mx-3 my-2">
      <Col className="signin-panel p-md-4" xl={6} md={5} sm={6} xs={10}>
        <h4 className="text-center py-3 mt-4">Expenses Tracker</h4>
        <Form onSubmit={handleCreateAccount}>
          <Form.Group className="row">
            <Form.Group className="col-xl-6 mb-3" controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                required
              />
            </Form.Group>
            <Form.Group className="col-xl-6 mb-3" controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter last name"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                required
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
                required
              />
            </Form.Group>
            <Form.Group className="col-xl-6 mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
            </Form.Group>
          </Form.Group>

          <Form.Group className="row">
            <Form.Group className="col-xl-6 mb-3" controlId="formAddress1">
              <Form.Label>Address Line 1</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter address line 1"
                onChange={(e) => {
                  setAddress1(e.target.value);
                }}
                required
              />
            </Form.Group>
            <Form.Group className="col-xl-6 mb-3" controlId="formAddress2">
              <Form.Label>Address Line 2</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter address line 2"
                onChange={(e) => {
                  setAddress2(e.target.value);
                }}
                required
              />
            </Form.Group>
          </Form.Group>

          <Form.Group className="row">
            <Form.Group className="col-xl-6 mb-3" controlId="formCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter city"
                onChange={(e) => {
                  setCity(e.target.value);
                }}
                required
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
                required
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
          </Form.Group>

          <Form.Group className="row">
            <Form.Group className="col-xl-6 mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <div className="pw-labels py-1">
                {showLengthMessage && (
                  <div className="warn-label">
                    <span className="material-symbols-outlined error-icon">
                      error
                    </span>
                    <p>Password should be between 8 and 12 characters long</p>
                  </div>
                )}
                {showNumberMessage && (
                  <div className="warn-label">
                    <span className="material-symbols-outlined error-icon">
                      error
                    </span>
                    <p>Password should contain at least one number</p>
                  </div>
                )}
                {showSpecialCharMessage && (
                  <div className="warn-label">
                    <span className="material-symbols-outlined error-icon">
                      error
                    </span>
                    <p>
                      Password should contain at least one special character
                      (@#$%^&+=)
                    </p>
                  </div>
                )}
                {isValid && (
                  <div className="warn-label">
                    <span className="material-symbols-outlined ok-icon">
                      check_circle
                    </span>
                    <p className="pw-ok">Strong password</p>
                  </div>
                )}
              </div>
            </Form.Group>
            <Form.Group
              className="col-xl-6 mb-3"
              controlId="formConfirmPassword"
            >
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm your password"
                onChange={comparePassword}
                value={confirmPassword}
                required
              />
              <div className="pw-labels">
                {confirmPassword ? (
                  comparePw ? (
                    <div className="warn-label">
                      <span className="material-symbols-outlined ok-icon">
                        check_circle
                      </span>
                      <p className="pw-ok">Password Matching</p>
                    </div>
                  ) : (
                    <div className="warn-label">
                      <span className="material-symbols-outlined error-icon">
                        error
                      </span>
                      <p>Password not matching</p>
                    </div>
                  )
                ) : null}
              </div>
            </Form.Group>
            <Form.Group className="text-center" controlId="signupBtn">
              <ProjectButton
                label="Sign Up"
                backgroundColor="#0ad357"
                size="small"
                type="submit"
              />
            </Form.Group>
            <Form.Group
              className="mt-3 create-account-label text-center"
              controlId="createAccount"
            >
              <Form.Label onClick={() => navigate("/login")}>
                Already have an account? Login here
              </Form.Label>
            </Form.Group>
          </Form.Group>
        </Form>
      </Col>
    </Row>
  );
}

export default SignUpPage;
