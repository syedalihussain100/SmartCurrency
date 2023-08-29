import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
// import { AiFillEyeInvisible } from "react-icons/ai";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { useUserAuth } from "../context/UserAuthContext";
import "react-phone-number-input/style.css";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "./config/firebase";

// Custom Pannel here
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);
  const [showPassword, setShowPassword] = React.useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [ottp, setOttp] = useState("");
  const [flag, setFlag] = useState(false);
  const [confirmObj, setConfirmObj] = useState("");
  // const ref = useRef();

  const { logIn } = useUserAuth();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async () => {
    try {
      await logIn(email, password);
      navigate("/");
      console.log("Login Successfully!");
    } catch (error) {
      setError(error.message);
    }

    setEmail("");
    SetPassword("");
  };

  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        },
      },
      auth
    );
  };

  //  get ottp

  const handleSubmitgetOttp = (e) => {
    e.preventDefault();

    if (phoneNumber.length >= 12) {
      generateRecaptcha();
      let appVerifier = window.recaptchaVerifier;
      signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
          console.log(confirmationResult);
          setConfirmObj(confirmationResult);
          setFlag(true);
        })
        .catch((error) => {
          console.log(error);
          setError(error?.message);
        });
    }
  };

  // verify ottp
  const VerifyOttp = async (e) => {
    e.preventDefault();

    try {
      setError("");
      if (ottp === "" || ottp === null) return;
      await confirmObj.confirm(ottp);
      navigate(`/`);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div className="app_login_panel_title">
        <div className="app_login_panel_title_close">
          <KeyboardBackspaceIcon onClick={() => navigate("/")} />
        </div>
        <div className="app_login_panel_title_value">
          <h3
            style={{
              fontWeight: "normal",
              fontSize: "25px",
              textAlign: "center",
            }}
          >
            LOGIN
          </h3>
        </div>
      </div>

      {/*  */}

      <Box sx={{ width: "100%" }}>
        <Box sx={{ marginLeft: "30px" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Email Login" {...a11yProps(0)} />
            <Tab label="Phone Login" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <div className="content-body position-relative">
            <label
              htmlFor="Loginpassword"
              className="form-label"
              style={{ fontSize: "18px" }}
            >
              Email address
            </label>
            <FormControl
              sx={{ width: "100%", marginBottom: "10px" }}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Please input the email address
              </InputLabel>
              <OutlinedInput
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="outlined-adornment-password"
                type="email"
                label="Please input the email address"
              />
            </FormControl>

            <label
              htmlFor="Loginpassword"
              className="form-label"
              style={{ fontSize: "18px" }}
            >
              Login password
            </label>
            <FormControl
              sx={{ width: "100%", marginBottom: "10px" }}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Please enter password
              </InputLabel>
              <OutlinedInput
                value={password}
                onChange={(e) => SetPassword(e.target.value)}
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? (
                        <VisibilityOff sx={{ width: "25px", height: "25px" }} />
                      ) : (
                        <Visibility sx={{ width: "25px", height: "25px" }} />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                label="Please enter password"
              />
            </FormControl>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              <input
                type="checkbox"
                style={{ height: "20px", width: "20px" }}
              />
              <span style={{ marginLeft: "15px" }}>Keep me logged in</span>
            </div>

            {error && (
              <p
                style={{
                  textAlign: "center",
                  color: "red",
                  fontSize: "1.2rem",
                }}
              >
                {error}
              </p>
            )}

            <div className="registerbtn_Container">
              <div className="register_btn" onClick={handleSubmit}>
                Login
              </div>
            </div>
            {/* <p
              onClick={() => navigate("/register")}
              style={{
                textAlign: "left",
                position: "relative",
                top: "-165px",
                cursor: "pointer",
              }}
            >
              Register here!
            </p> */}

            <p
              style={{
                textAlign: "right",
                position: "relative",
                top: "-180px",
                cursor: "pointer",
              }}
              onClick={() => navigate("/forget-password")}
            >
              forget password?
            </p>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <div className="content-body position-relative">
            {!flag ? (
              <label
                htmlFor="Loginpassword"
                className="form-label"
                style={{ fontSize: "18px" }}
              >
                Phone number
              </label>
            ) : null}

            <h3> {flag ? "Verfication code" : "Whats your Number?"}</h3>

            <p>
              {" "}
              {flag
                ? "Please enter the 5-digit code sent to"
                : "We’ll send you a OTP to verify your idenity"}
            </p>
            <form
              onSubmit={handleSubmitgetOttp}
              style={{ display: !flag ? "block" : "none" }}
            >
              <PhoneInput
                international
                countryCallingCodeEditable={false}
                defaultCountry="PK"
                placeholder="Enter Phone Number"
                value={phoneNumber}
                onChange={setPhoneNumber}
                error={
                  phoneNumber
                    ? isValidPhoneNumber(phoneNumber)
                      ? undefined
                      : "Invalid phone number"
                    : "Phone number required"
                }
              />
              <div id="recaptcha-container" className="captcha"></div>
              <button type="submit">Send Otp</button>
            </form>

            {error && <p>{error}</p>}

            <form
              onSubmit={VerifyOttp}
              style={{ display: flag ? "block" : "none" }}
            >
              <input
                type="text"
                // ref={ref}
                placeholder="Enter Your Ottp Code"
                value={ottp}
                onChange={(e) => setOttp(e.target.value)}
              />
              <div>
                <button
                  // className="bg-[#FFDE59] p-2 w-60 rounded-md text-sm"
                  type="submit"
                >
                  Verify Ottp
                </button>
              </div>
            </form>

            {/* <FormControl
              sx={{ width: "100%", marginBottom: "10px" }}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Phone Number
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type="tel"
                label="Phone Number"
              />
            </FormControl> */}

            {/* <label
              htmlFor="Loginpassword"
              className="form-label"
              style={{ fontSize: "18px" }}
            >
              Login password
            </label>
            <FormControl
              sx={{ width: "100%", marginBottom: "10px" }}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Please enter password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? (
                        <VisibilityOff sx={{ width: "25px", height: "25px" }} />
                      ) : (
                        <Visibility sx={{ width: "25px", height: "25px" }} />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                label="Please enter password"
              />
            </FormControl> */}

            {/* <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              <input
                type="checkbox"
                style={{ height: "20px", width: "20px" }}
              />
              <span style={{ marginLeft: "15px" }}>Keep me logged in</span>
            </div> */}

            {/* <div className="registerbtn_Container">
              <div className="register_btn">
                Send Verfication Code
              </div>
            </div> */}
            {/* <p
              style={{
                textAlign: "right",
                position: "relative",
                top: "-170px",
              }}
              onClick={() => navigate("/forget-password")}
            >
              forget password?
            </p> */}
          </div>
        </CustomTabPanel>
      </Box>
    </>
  );
};

export default Login;
