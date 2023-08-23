import React from "react";
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
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
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

            <div className="registerbtn_Container">
              <div className="register_btn">Login</div>
            </div>
            <p
              onClick={() => navigate("/register")}
              style={{
                textAlign: "left",
                position: "relative",
                top: "-165px",
                cursor: "pointer",
              }}
            >
              Register here!
            </p>

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
            <label
              htmlFor="Loginpassword"
              className="form-label"
              style={{ fontSize: "18px" }}
            >
              Phone number
            </label>
            <FormControl
              sx={{ width: "100%", marginBottom: "10px" }}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Please enter phone number
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type="number"
                label="Please enter phone number"
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

            <div className="registerbtn_Container">
              <div className="register_btn">Login</div>
            </div>
            <p
              style={{
                textAlign: "right",
                position: "relative",
                top: "-170px",
              }}
              onClick={() => navigate("/forget-password")}
            >
              forget password?
            </p>
          </div>
        </CustomTabPanel>
      </Box>
    </>
  );
};

export default Login;
