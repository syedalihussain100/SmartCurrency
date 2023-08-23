import React from "react";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Box, Button, Tab, Tabs, Typography } from "@mui/material";
import PropTypes from "prop-types";
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

const ForgetPassword = () => {
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
              textAlign: "right",
              marginRight: "20px",
            }}
            onClick={() => navigate("/login")}
          >
            Log in
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
            <Tab label="Email verification" {...a11yProps(0)} />
            <Tab label="Mobile phone verification" {...a11yProps(1)} />
          </Tabs>
        </Box>

        <CustomTabPanel value={value} index={0}>
          <div className="content-body position-relative">
            {/*  */}
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
            {/*  */}
            <label
              htmlFor="Loginpassword"
              className="form-label"
              style={{ fontSize: "18px" }}
            >
              verification code
            </label>
            <FormControl
              sx={{ width: "100%", marginBottom: "10px" }}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Please enter a verification code
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type="text"
                endAdornment={
                  <InputAdornment position="end">
                    <Button
                      aria-label="toggle password visibility"
                      edge="end"
                      sx={{ background: "#446e9b", color: "white" }}
                      className="forgetButton1"
                    >
                      Send
                    </Button>
                  </InputAdornment>
                }
                label="Please enter a verification code"
              />
            </FormControl>
            {/*  */}

            <label
              htmlFor="Loginpassword"
              className="form-label"
              style={{ fontSize: "18px" }}
            >
              New login password
            </label>
            <FormControl
              sx={{ width: "100%", marginBottom: "10px" }}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Please enter a new password
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
                label="Please enter a new password"
              />
            </FormControl>

            {/*  */}
            <label
              htmlFor="Loginpassword"
              className="form-label"
              style={{ fontSize: "18px" }}
            >
              Confirm password again
            </label>

            <FormControl
              sx={{ width: "100%", marginBottom: "10px" }}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-password">
              Please enter the password again
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
                label="Please enter the password again"
              />
            </FormControl>

            {/* end */}

            <div className="registerbtn_Container">
              <div className="register_btn">Confirm</div>
            </div>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <div className="content-body position-relative">
            {/*  */}
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
                type="email"
                label=" Please enter phone number"
              />
            </FormControl>
            {/*  */}
            <label
              htmlFor="Loginpassword"
              className="form-label"
              style={{ fontSize: "18px" }}
            >
              verification code
            </label>
            <FormControl
              sx={{ width: "100%", marginBottom: "10px" }}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Please enter a verification code
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type="text"
                endAdornment={
                  <InputAdornment position="end">
                    <Button
                      aria-label="toggle password visibility"
                      edge="end"
                      sx={{ background: "#446e9b", color: "white" }}
                      className="forgetButton1"
                    >
                      Send
                    </Button>
                  </InputAdornment>
                }
                label="Please enter a verification code"
              />
            </FormControl>
            {/*  */}

            <label
              htmlFor="Loginpassword"
              className="form-label"
              style={{ fontSize: "18px" }}
            >
              New login password
            </label>
            <FormControl
              sx={{ width: "100%", marginBottom: "10px" }}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Please enter a new password
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
                label="Please enter a new password"
              />
            </FormControl>

            {/*  */}
            <label
              htmlFor="Loginpassword"
              className="form-label"
              style={{ fontSize: "18px" }}
            >
              Confirm password again
            </label>

            <FormControl
              sx={{ width: "100%", marginBottom: "10px" }}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-password">
              Please enter the password again
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
                label="Please enter the password again"
              />
            </FormControl>

            {/* end */}

            <div className="registerbtn_Container">
              <div className="register_btn">Confirm</div>
            </div>
          </div>
        </CustomTabPanel>
      </Box>
    </>
  );
};

export default ForgetPassword;
