import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import "./Rule.css";
import { useNavigate } from "react-router-dom";

const Rules = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="app_login_panel_title">
        <div className="app_login_panel_title_close">
          <KeyboardBackspaceIcon onClick={() => navigate("/team")} />
        </div>
        <div className="app_login_panel_title_value">
          <h3
            style={{
              fontWeight: "normal",
              fontSize: "25px",
              textAlign: "center",
            }}
          >
            Rules
          </h3>
        </div>
      </div>
      <div className="panel_line"></div>
      <div className="content-body2">
        <div className="app_msg_info_page_title" trans="app_rules_title">
          Commission Rules
        </div>
        <div className="app_msg_info_page_content">
          <div className="data">
            <p className="common_btn">
              <span
                trans="app_rules_title"
                style={{ lineHeight: "36px", fontSize: "1.2rem" }}
              >
                Commission Rules
              </span>
            </p>
            <p className="sub-content">
              1. Get 10% commission amount from deposit from the invited user
              within 24 hours.
              <br />
              2. Can earn a certain percentage of the commission from the
              staking income of the invited user. (3 levels)
            </p>
          </div>
          <div className="data">
            <p className="common_btn">
              <span trans="app_rules_title" style={{ lineHeight: "36px" }}>
                Commission Rules
              </span>
            </p>
            {/* one */}
            <div>
              <p className="sub-title "></p>
              <p className="sub-title ">
                <span trans="upgrade_conditions">Upgrade</span>:{" "}
                <span trans="number_invitations2">invited</span> > = 0
              </p>
              <table style={{ width: "100%" }}>
                <tbody>
                  <tr>
                    <td
                      trans="app_rules_partner"
                      style={{
                        textAlign: "left",
                        fontSize: "1rem",
                        padding: "5px 0px",
                      }}
                    >
                      Partner
                    </td>
                    <td
                      trans="app_rules_mining"
                      style={{
                        textAlign: "left",
                        fontSize: "1rem",
                        padding: "5px 0px",
                      }}
                    >
                      Staking Rebate
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        textAlign: "left",
                        fontSize: "1rem",
                        padding: "5px 0px",
                      }}
                    >
                      {" "}
                      Level 1
                    </td>
                    <td
                      style={{
                        textAlign: "left",
                        fontSize: "1rem",
                        padding: "5px 0px",
                      }}
                    >
                      10%{" "}
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        textAlign: "left",
                        fontSize: "1rem",
                        padding: "5px 0px",
                      }}
                    >
                      {" "}
                      Level 2
                    </td>
                    <td
                      style={{
                        textAlign: "left",
                        fontSize: "1rem",
                        padding: "5px 0px",
                      }}
                    >
                      6%{" "}
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        textAlign: "left",
                        fontSize: "1rem",
                        padding: "5px 0px",
                      }}
                    >
                      {" "}
                      Level 3
                    </td>
                    <td
                      style={{
                        textAlign: "left",
                        fontSize: "1rem",
                        padding: "5px 0px",
                      }}
                    >
                      2%{" "}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* two */}
            <div>
              <p className="sub-title "></p>
              <p className="sub-title ">
                <span trans="upgrade_conditions">Upgrade</span>:{" "}
                <span trans="number_invitations2">invited</span> > = 5
              </p>
              <table style={{ width: "100%" }}>
                <tbody>
                  <tr>
                    <td
                      trans="app_rules_partner"
                      style={{
                        textAlign: "left",
                        fontSize: "1rem",
                        padding: "5px 0px",
                      }}
                    >
                      Partner
                    </td>
                    <td
                      trans="app_rules_mining"
                      style={{
                        textAlign: "left",
                        fontSize: "1rem",
                        padding: "5px 0px",
                      }}
                    >
                      Staking Rebate
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        textAlign: "left",
                        fontSize: "1rem",
                        padding: "5px 0px",
                      }}
                    >
                      {" "}
                      Level 1
                    </td>
                    <td
                      style={{
                        textAlign: "left",
                        fontSize: "1rem",
                        padding: "5px 0px",
                      }}
                    >
                      11%{" "}
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        textAlign: "left",
                        fontSize: "1rem",
                        padding: "5px 0px",
                      }}
                    >
                      {" "}
                      Level 2
                    </td>
                    <td
                      style={{
                        textAlign: "left",
                        fontSize: "1rem",
                        padding: "5px 0px",
                      }}
                    >
                      7%{" "}
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        textAlign: "left",
                        fontSize: "1rem",
                        padding: "5px 0px",
                      }}
                    >
                      {" "}
                      Level 3
                    </td>
                    <td
                      style={{
                        textAlign: "left",
                        fontSize: "1rem",
                        padding: "5px 0px",
                      }}
                    >
                      3%{" "}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* three */}
            <div>
              <p className="sub-title "></p>
              <p className="sub-title ">
                <span trans="upgrade_conditions">Upgrade</span>:{" "}
                <span trans="number_invitations2">invited</span> > = 10
              </p>
              <table style={{ width: "100%" }}>
                <tbody>
                  <tr>
                    <td
                      trans="app_rules_partner"
                      style={{
                        textAlign: "left",
                        fontSize: "1rem",
                        padding: "5px 0px",
                      }}
                    >
                      Partner
                    </td>
                    <td
                      trans="app_rules_mining"
                      style={{
                        textAlign: "left",
                        fontSize: "1rem",
                        padding: "5px 0px",
                      }}
                    >
                      Staking Rebate
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        textAlign: "left",
                        fontSize: "1rem",
                        padding: "5px 0px",
                      }}
                    >
                      {" "}
                      Level 1
                    </td>
                    <td
                      style={{
                        textAlign: "left",
                        fontSize: "1rem",
                        padding: "5px 0px",
                      }}
                    >
                      12%{" "}
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        textAlign: "left",
                        fontSize: "1rem",
                        padding: "5px 0px",
                      }}
                    >
                      {" "}
                      Level 2
                    </td>
                    <td
                      style={{
                        textAlign: "left",
                        fontSize: "1rem",
                        padding: "5px 0px",
                      }}
                    >
                      8%{" "}
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        textAlign: "left",
                        fontSize: "1rem",
                        padding: "5px 0px",
                      }}
                    >
                      {" "}
                      Level 3
                    </td>
                    <td
                      style={{
                        textAlign: "left",
                        fontSize: "1rem",
                        padding: "5px 0px",
                      }}
                    >
                      3%{" "}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* four */}
            <div>
              <p className="sub-title "></p>
              <p className="sub-title ">
                <span trans="upgrade_conditions">Upgrade</span>:{" "}
                <span trans="number_invitations2">invited</span> > = 15
              </p>
              <table style={{ width: "100%" }}>
                <tbody>
                  <tr>
                    <td
                      trans="app_rules_partner"
                      style={{
                        textAlign: "left",
                        fontSize: "1rem",
                        padding: "5px 0px",
                      }}
                    >
                      Partner
                    </td>
                    <td
                      trans="app_rules_mining"
                      style={{
                        textAlign: "left",
                        fontSize: "1rem",
                        padding: "5px 0px",
                      }}
                    >
                      Staking Rebate
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        textAlign: "left",
                        fontSize: "1rem",
                        padding: "5px 0px",
                      }}
                    >
                      {" "}
                      Level 1
                    </td>
                    <td
                      style={{
                        textAlign: "left",
                        fontSize: "1rem",
                        padding: "5px 0px",
                      }}
                    >
                      13%{" "}
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        textAlign: "left",
                        fontSize: "1rem",
                        padding: "5px 0px",
                      }}
                    >
                      {" "}
                      Level 2
                    </td>
                    <td
                      style={{
                        textAlign: "left",
                        fontSize: "1rem",
                        padding: "5px 0px",
                      }}
                    >
                      8%{" "}
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        textAlign: "left",
                        fontSize: "1rem",
                        padding: "5px 0px",
                      }}
                    >
                      {" "}
                      Level 3
                    </td>
                    <td
                      style={{
                        textAlign: "left",
                        fontSize: "1rem",
                        padding: "5px 0px",
                      }}
                    >
                      4%{" "}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* five */}
            <div>
              <p className="sub-title "></p>
              <p className="sub-title ">
                <span trans="upgrade_conditions">Upgrade</span>:{" "}
                <span trans="number_invitations2">invited</span> > = 20
              </p>
              <table style={{ width: "100%" }}>
                <tbody>
                  <tr>
                    <td
                      trans="app_rules_partner"
                      style={{
                        textAlign: "left",
                        fontSize: "1rem",
                        padding: "5px 0px",
                      }}
                    >
                      Partner
                    </td>
                    <td
                      trans="app_rules_mining"
                      style={{
                        textAlign: "left",
                        fontSize: "1rem",
                        padding: "5px 0px",
                      }}
                    >
                      Staking Rebate
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        textAlign: "left",
                        fontSize: "1rem",
                        padding: "5px 0px",
                      }}
                    >
                      {" "}
                      Level 1
                    </td>
                    <td
                      style={{
                        textAlign: "left",
                        fontSize: "1rem",
                        padding: "5px 0px",
                      }}
                    >
                      14%{" "}
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        textAlign: "left",
                        fontSize: "1rem",
                        padding: "5px 0px",
                      }}
                    >
                      {" "}
                      Level 2
                    </td>
                    <td
                      style={{
                        textAlign: "left",
                        fontSize: "1rem",
                        padding: "5px 0px",
                      }}
                    >
                      9%{" "}
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        textAlign: "left",
                        fontSize: "1rem",
                        padding: "5px 0px",
                      }}
                    >
                      {" "}
                      Level 3
                    </td>
                    <td
                      style={{
                        textAlign: "left",
                        fontSize: "1rem",
                        padding: "5px 0px",
                      }}
                    >
                      4%{" "}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* six */}
            <div>
              <p className="sub-title "></p>
              <p className="sub-title ">
                <span trans="upgrade_conditions">Upgrade</span>:{" "}
                <span trans="number_invitations2">invited</span> > = 25
              </p>
              <table style={{ width: "100%" }}>
                <tbody>
                  <tr>
                    <td
                      trans="app_rules_partner"
                      style={{
                        textAlign: "left",
                        fontSize: "1rem",
                        padding: "5px 0px",
                      }}
                    >
                      Partner
                    </td>
                    <td
                      trans="app_rules_mining"
                      style={{
                        textAlign: "left",
                        fontSize: "1rem",
                        padding: "5px 0px",
                      }}
                    >
                      Staking Rebate
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        textAlign: "left",
                        fontSize: "1rem",
                        padding: "5px 0px",
                      }}
                    >
                      {" "}
                      Level 1
                    </td>
                    <td
                      style={{
                        textAlign: "left",
                        fontSize: "1rem",
                        padding: "5px 0px",
                      }}
                    >
                      15%{" "}
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        textAlign: "left",
                        fontSize: "1rem",
                        padding: "5px 0px",
                      }}
                    >
                      {" "}
                      Level 2
                    </td>
                    <td
                      style={{
                        textAlign: "left",
                        fontSize: "1rem",
                        padding: "5px 0px",
                      }}
                    >
                      9%{" "}
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        textAlign: "left",
                        fontSize: "1rem",
                        padding: "5px 0px",
                      }}
                    >
                      {" "}
                      Level 3
                    </td>
                    <td
                      style={{
                        textAlign: "left",
                        fontSize: "1rem",
                        padding: "5px 0px",
                      }}
                    >
                      5%{" "}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* seven */}
            <div>
              <p className="sub-title "></p>
              <p className="sub-title ">
                <span trans="upgrade_conditions">Upgrade</span>:{" "}
                <span trans="number_invitations2">invited</span> > = 40
              </p>
              <table style={{ width: "100%" }}>
                <tbody>
                  <tr>
                    <td
                      trans="app_rules_partner"
                      style={{
                        textAlign: "left",
                        fontSize: "1rem",
                        padding: "5px 0px",
                      }}
                    >
                      Partner
                    </td>
                    <td
                      trans="app_rules_mining"
                      style={{
                        textAlign: "left",
                        fontSize: "1rem",
                        padding: "5px 0px",
                      }}
                    >
                      Staking Rebate
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        textAlign: "left",
                        fontSize: "1rem",
                        padding: "5px 0px",
                      }}
                    >
                      {" "}
                      Level 1
                    </td>
                    <td
                      style={{
                        textAlign: "left",
                        fontSize: "1rem",
                        padding: "5px 0px",
                      }}
                    >
                      19%{" "}
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        textAlign: "left",
                        fontSize: "1rem",
                        padding: "5px 0px",
                      }}
                    >
                      {" "}
                      Level 2
                    </td>
                    <td
                      style={{
                        textAlign: "left",
                        fontSize: "1rem",
                        padding: "5px 0px",
                      }}
                    >
                      11%{" "}
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        textAlign: "left",
                        fontSize: "1rem",
                        padding: "5px 0px",
                      }}
                    >
                      {" "}
                      Level 3
                    </td>
                    <td
                      style={{
                        textAlign: "left",
                        fontSize: "1rem",
                        padding: "5px 0px",
                      }}
                    >
                      7%{" "}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <br />
          </div>

          <div className="data">
            <p className="common_data">
              <span
                trans="app_rules_simple_1"
                style={{ lineHeight: "36px", whiteSpace: "nowrap" }}
              >
                Overview of the above example (VIP 1 example)
              </span>
            </p>
            <p className="sub-content">
              User D's staking output is 200 USDT as an example.
            </p>
            <p className="sub-title">C user revenue formula</p>
            <p className="sub-content">
              User D is a Level 1 partner of User C, and the rate of return is
              11%
              <br />
              200 USDT * 11% = {"200 * level[0].p / 100"} USDT
              <br />
              That is, the C user gets 22 USDT.
            </p>
            <p className="sub-title">B user revenue formula</p>
            <p className="sub-content">
              User D is a Level 2 partner of User B, and the rate of return is
              7%
              <br />
              {"200 USDT * 7% = { {200 * level[1].p / 100}} USDT"}
              <br />
              User B gets 14 USDT.
            </p>
            <p className="sub-title">A user revenue formula</p>
            <p className="sub-content">
              User D is the Level 3 partner of User A, and the rate of return is
              3%
              <br />
              {"200 USDT * 3% = { {200 * level[2].p / 100}} USDT"}
              <br />
              A user gets 6 USDT
              <br />
              to complete the rebate.
            </p>
          </div>
          <div className="common_data1">
            <p style={{padding:"20px",fontSize:"17px"}}>
              Risk warning: There are risks in digital currency transactions.
              Please purchase with caution and pay attention to transaction
              risks. We will select high-quality currencies, but we will not be
              responsible for any guarantee or compensation for any of your
              transactions.
            </p>
          </div>
        </div>
      </div>

      <div style={{ padding: "30px 0px" }}></div>
    </>
  );
};

export default Rules;
