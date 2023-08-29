import React from "react";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import SoloStake1Style from "./solostate1.module.css";
import soloImg from "./image.png";
import Icon1Img from "./icon1.png";
import Icon2Img from "./icon2.png";
import Icon3Img from "./icon3.png";

const SoloStake3 = () => {
  const navigate = useNavigate();
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
          SOLU stake
        </h3>
      </div>
    </div>
    {/*  */}

    {/* part1 */}
    <div className={SoloStake1Style.card}>
      <div className={SoloStake1Style.cardBody}>
        <div className={SoloStake1Style.right1}>
          <img src={soloImg} alt="logo" />
          <div className={SoloStake1Style.rightParaContainer}>
            <p className={SoloStake1Style.paraone}>SOLU stake</p>
            <p className={SoloStake1Style.paratwo}>staking SOLU stake</p>
          </div>
        </div>
        <div className={SoloStake1Style.centerContainer}>
          <div>
            <p className={SoloStake1Style.centerparaContainer1}>1%</p>
            <p className={SoloStake1Style.centerparaContainer2}>Daily</p>
          </div>
        </div>
        <div className={SoloStake1Style.leftContainer}>
          <p className={SoloStake1Style.leftpara1}>30day</p>
          <p className={SoloStake1Style.leftpara2}>Lock Date</p>
        </div>
      </div>
    </div>

    {/* part2 */}
    <div className={SoloStake1Style.part2Container}>
      <div className={SoloStake1Style.app_miningpool_info_date}>
        <div
          className={
            SoloStake1Style.app_miningpool_info_date_bg_position_relative
          }
        >
          <div
            className={
              SoloStake1Style.app_miningpool_info_date_dot_dot_left_position_absolute
            }
          ></div>
          <div
            className={
              SoloStake1Style.app_miningpool_info_date_dot_dot_center_position_absolute
            }
          ></div>
          <div
            className={
              SoloStake1Style.app_miningpool_info_date_dot_dot_right_position_absolute
            }
          ></div>
        </div>
        {/*  */}
        <div className={SoloStake1Style.my3}>
          <div className={SoloStake1Style.stakingtextContainer}>
            <div>
              <p>staking</p>
              <p className={SoloStake1Style.end}>08-28 21:33</p>
            </div>
            <div>
              <p>start calculating</p>
              <p className={SoloStake1Style.end}>08-28 21:33</p>
            </div>
            <div>
              <p>product expiration</p>
              <p className={SoloStake1Style.end}>10-12 21:33</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* part 3 */}
    <div className={SoloStake1Style.part3Container}>
      <div className={SoloStake1Style.app_miningpool_info_tag}>
        <span>Description</span>
      </div>
      <div className={SoloStake1Style.part3para}>
        <p>
          Join the stake project with SOLU, get stable returns and earn as
          SOLU+Profit can be withdrawn in USDT immediately, Leaders will
          receive Referral Commission will be received after the team has
          completed the staking process.
        </p>
      </div>
    </div>

    {/* part 4 */}
    <div className={SoloStake1Style.part4Container}>
      <div className={SoloStake1Style.part4paraContainer}>
        <img src={Icon1Img} alt="icon1" />
        <p
          style={{
            fontWeight: "bold",
            fontSize: "1.2rem",
            padding: "13px 0px",
          }}
        >
          Diverse
        </p>
        <div className={SoloStake1Style.endPara}>
          <p>Support multiple currencies</p>
          <p>Multiple staking products</p>
        </div>
      </div>
      <div className={SoloStake1Style.part4paraContainer}>
        <img src={Icon2Img} alt="icon2" />
        <p
          style={{
            fontWeight: "bold",
            fontSize: "1.2rem",
            padding: "13px 0px",
          }}
        >
          Profession
        </p>
        <div className={SoloStake1Style.endPara}>
          <p>Adopt the full name leading</p>
          <p>asset risk control system</p>
        </div>
      </div>
      <div className={SoloStake1Style.part4paraContainer}>
        <img src={Icon3Img} alt="icon2" />
        <p
          style={{
            fontWeight: "bold",
            fontSize: "1.2rem",
            padding: "13px 0px",
          }}
        >
          Safety
        </p>
        <div className={SoloStake1Style.endPara}>
          <p>Offline storage</p>
          <p>Multiple signatures</p>
          <p>Secure and transparent</p>
        </div>
      </div>
    </div>

    {/* part 5 */}

    <div className={SoloStake1Style.part5Container}>
      <div className={SoloStake1Style.my3}>
        <span className={SoloStake1Style.app_miningpool_info_tag}>
          Staking rules
        </span>
      </div>
      {/* one */}
      <div className={SoloStake1Style.part5left}>
        <div className={SoloStake1Style.red_dot}></div>
        <div className={SoloStake1Style.listPara}>
          <p>Limit</p>
          <p>50-1000000SOLU</p>
        </div>
      </div>
      {/* two */}
      <div className={SoloStake1Style.part5left}>
        <div className={SoloStake1Style.red_dot}></div>
        <div className={SoloStake1Style.listPara}>
          <p>Staking time</p>
          <p>00:00:00-23:59:59</p>
        </div>
      </div>
      {/* three */}
      <div className={SoloStake1Style.part5left}>
        <div className={SoloStake1Style.red_dot}></div>
        <div className={SoloStake1Style.listPara}>
          <p>Project</p>
          <p>Staking</p>
        </div>
      </div>
      {/* four */}
      <div className={SoloStake1Style.part5left}>
        <div className={SoloStake1Style.red_dot}></div>
        <div className={SoloStake1Style.listPara}>
          <p>Input</p>
          <p>SOLU</p>
        </div>
      </div>
      {/* five */}
      <div className={SoloStake1Style.part5left}>
        <div className={SoloStake1Style.red_dot}></div>
        <div className={SoloStake1Style.listPara}>
          <p>Revenue</p>
          <p>SOLU</p>
        </div>
      </div>
      {/* six */}
      <div className={SoloStake1Style.part5left}>
        <div className={SoloStake1Style.red_dot}></div>
        <div className={SoloStake1Style.listPara}>
          <p>Lockup period</p>
          <p>45day</p>
        </div>
      </div>
      {/*  */}
      <div className={SoloStake1Style.my3}>
        <span className={SoloStake1Style.app_miningpool_info_tag}>
          Income rules
        </span>
      </div>
      {/* one */}
      <div className={SoloStake1Style.part5left}>
        <div className={SoloStake1Style.red_dot}></div>
        <div className={SoloStake1Style.listPara}>
          <p>Take out rules</p>
          <p>Cannot be withdrawn before expiration</p>
        </div>
      </div>
      {/* two */}
      <div className={SoloStake1Style.part5left}>
        <div className={SoloStake1Style.red_dot}></div>
        <div className={SoloStake1Style.listPara}>
          <p>Income calculation</p>
          <p>Yield to maturity=Deposits*Interest rate*Lock-up period</p>
        </div>
      </div>
      {/* three */}
      <div className={SoloStake1Style.part5left}>
        <div className={SoloStake1Style.red_dot}></div>
        <div className={SoloStake1Style.listPara}>
          <p>Income calculation</p>
          <p>Same day deposit，Next day(UTC+8)</p>
        </div>
      </div>
      {/* four */}
      <div className={SoloStake1Style.part5left}>
        <div className={SoloStake1Style.red_dot}></div>
        <div className={SoloStake1Style.listPara}>
          <p>Profit rule</p>
          <p>
            Automatically distribute income to the balance when it expires
          </p>
        </div>
      </div>
      {/* five */}
      <div className={SoloStake1Style.part5left}>
        <div className={SoloStake1Style.red_dot}></div>
        <div className={SoloStake1Style.listPara}>
          <p>Daily income</p>
          <p>According to market conditions，Calculated at real-time rates</p>
        </div>
      </div>
    </div>

    {/* part 6 */}
    <div
      className={SoloStake1Style.buttonContainer}
      onClick={() => navigate("/stakingthree")}
    >
      <div>Staking Now</div>
    </div>

    {/*  */}
    <section style={{ padding: "50px 0px" }}></section>
  </>
    )
}

export default SoloStake3