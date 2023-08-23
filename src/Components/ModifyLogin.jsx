import React from "react";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { AiFillEyeInvisible } from "react-icons/ai";
import Box from "@mui/material/Box";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";

const ChangePassword = () => {
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
            Modify login password
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
            original login password
          </label>
          <FormControl
            sx={{ width: "100%", marginBottom: "10px" }}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Please enter the original password
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
              label="              Please enter the original password

              "
            />
          </FormControl>

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
              label="              Please enter a new password
              "
            />
          </FormControl>

          <label
            htmlFor="Loginpassword"
            className="form-label"
            style={{ fontSize: "18px" }}
          >
            Confirm new login password
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
              label="                            Please enter the password again

              "
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

export default ChangePassword;
