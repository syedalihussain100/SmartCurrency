import React from "react";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./Order.css";
import DocuImg from "./document.png";

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

const Orders = () => {
  const [value, setValue] = React.useState(0);

  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="app_login_panel_title">
        <div className="app_login_panel_title_close">
          <KeyboardBackspaceIcon onClick={() => navigate("/assets")} />
        </div>
        <div className="app_login_panel_title_value">
          <h3
            style={{
              fontWeight: "normal",
              fontSize: "25px",
              textAlign: "center",
              letterSpacing: "2px",
            }}
          >
            Orders
          </h3>
        </div>
      </div>
      {/* Tabs Start here */}
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Recharge" {...a11yProps(0)} />
            <Tab label="Withdrawl" {...a11yProps(1)} />
            <Tab label="Swap" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <div className="main-card mb-1 card">
            <div
              className="card-body text-grey"
              style={{ padding: "0.3rem 1rem" }}
            >
              <div className="app_record_item">
                <div className="float-left text-align-right">Amount:</div>
                <div className="float-left text-align-left fw-bold text-primary">
                  500
                </div>
              </div>
              <div className="app_record_item">
                <div className="float-left text-align-right">
                  <span>Type</span>:
                </div>
                <div className="float-left text-align-left">500</div>
              </div>
              <div className="app_record_item">
                <div className="float-left text-align-right">time:</div>
                <div className="float-left text-align-left">
                  2023-08-13 19:08:29
                </div>
              </div>
              <div className="app_record_item">
                <div className="float-left text-align-right">Order:</div>
                <div className="float-left text-align-left">
                  O1691924909892611
                </div>
              </div>
              <div className="app_record_item">
                <div className="float-left text-align-right">
                  Deposit address:
                </div>
                <div className="float-left text-align-left">
                  TLpbJv5H9y8YfRFwP2EdhRiniKuoSEbquV
                </div>
              </div>
              <div className="app_record_item">
                <div className="float-left text-align-right">State:</div>
                <div className="float-left text-align-left text-success fw-bold">
                  in the account
                </div>
              </div>
            </div>
          </div>
          <div class="app-myaccount-income-record-more">No more.</div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <div className="norecord1">
            <img
              src={DocuImg}
              alt="DocuImg"
              className="ic_list_emipty_image0"
            />
            <div class="icon-ic_list_emipty_text">No records...</div>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <div className="main-card mb-1 card">
            <div
              className="card-body text-grey"
              style={{ padding: "0.3rem 1rem" }}
            >
              <div className="app_record_item">
                <div className="float-left text-align-right">Order:</div>
                <div className="float-left text-align-left ">
                  O1691404465794750
                </div>
              </div>
              <div className="app_record_item">
                <div className="float-left text-align-right">
                  <span>from</span>:
                </div>
                <div className="float-left text-align-left text-danger">
                  -10 TRX
                </div>
              </div>
              <div className="app_record_item">
                <div className="float-left text-align-right">to:</div>
                <div className="float-left text-align-left text-success">
                  +5 USDT
                </div>
              </div>
              <div className="app_record_item">
                <div className="float-left text-align-right">time:</div>
                <div className="float-left text-align-left">
                  2023-08-07 18:34:25 -
                </div>
              </div>
            </div>
          </div>
          <div class="app-myaccount-income-record-more">No more.</div>
        </CustomTabPanel>
      </Box>
    </>
  );
};

export default Orders;
