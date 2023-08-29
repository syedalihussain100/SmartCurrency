import React from "react";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const StakingOne = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="app_login_panel_title">
        <div className="app_login_panel_title_close">
          <KeyboardBackspaceIcon onClick={() => navigate("/solustake1")} />
        </div>
        <div className="app_login_panel_title_value">
          <h3
            style={{
              fontWeight: "normal",
              fontSize: "25px",
              textAlign: "center",
            }}
          >
            staking
          </h3>
        </div>
      </div>
      {/*  */}
    </>
  );
};

export default StakingOne;
