import React from "react";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import "./ModifyPhone.css";
import Box from "@mui/material/Box";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { Button } from "@mui/material";

const ModifyPhone = () => {
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
          <KeyboardBackspaceIcon onClick={() => navigate("/securitycenter")} />
        </div>
        <div className="app_login_panel_title_value">
          <h3
            style={{
              fontWeight: "normal",
              fontSize: "25px",
              textAlign: "center",
            }}
          >
            Verify phone
          </h3>
        </div>
      </div>

      {/*  */}

      <Box sx={{ width: "100%" }}>
        <div className="content-body position-relative">
          <label
            htmlFor="Loginpassword"
            className="form-label"
            style={{ fontSize: "18px" }}
          >
            login password
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

          <label
            htmlFor="Loginpassword"
            className="form-label"
            style={{ fontSize: "18px" }}
          >
            Verification code
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

          <div className="registerbtn_Container">
            <div className="register_btn">Confirm</div>
          </div>
        </div>
      </Box>
    </>
  );
};

export default ModifyPhone;
