import React from "react";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Register = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

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
            REGISTER
          </h3>
        </div>
      </div>

      {/*  */}

      <div className="content-body position-relative">
        {/* one */}
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

        {/* two */}
        <label
          htmlFor="Loginpassword"
          className="form-label"
          style={{ fontSize: "18px" }}
        >
          Name
        </label>
        <FormControl
          sx={{ width: "100%", marginBottom: "10px" }}
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Please enter your name
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type="text"
            label="Please enter your name"
          />
        </FormControl>

        {/* three */}
        <label
          htmlFor="Loginpassword"
          className="form-label"
          style={{ fontSize: "18px" }}
        >
          Address
        </label>
        <FormControl
          sx={{ width: "100%", marginBottom: "10px" }}
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Please enter your address
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type="text"
            label="Please enter your address"
          />
        </FormControl>

        {/* four */}
        <label
          htmlFor="Loginpassword"
          className="form-label"
          style={{ fontSize: "18px" }}
        >
          Password
        </label>
        <FormControl
          sx={{ width: "100%", marginBottom: "10px" }}
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Please enter a password
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
            label="Please enter a password"
          />
        </FormControl>

        <div className="registerbtn_Container">
          <div className="register_btn">Register</div>
        </div>
      </div>
    </>
  );
};

export default Register;
