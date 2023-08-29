import React from "react";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import soloImg from "../image.png";
import SoloStake1Style from "../solostate1.module.css";

const StakingThree = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className="app_login_panel_title">
      <div className="app_login_panel_title_close">
        <KeyboardBackspaceIcon onClick={() => navigate("/solustake3")} />
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

    {/*  */}

    <div className={SoloStake1Style.StakingContainer}>
      <h4>Staking amount</h4>
      <div style={{display:"flex",alignItems:"center",gap:"3px",marginBottom:"15px"}}>
        <input
          type="number"
          name="number"
          placeholder="Please enter the deposite amount"
        />
        <p style={{fontWeight:"bold"}}>SOLU</p>
      </div>
      <p style={{color:"#99a6af"}}>Amount Available: 0.00SOLU</p>
      <div className={SoloStake1Style.StakinContainerpart2}>
        <div>
          <p>Deposit amount</p>
          <p>single limit</p>
          <p>Estimated earnings</p>
          <p>Expire date</p>
          <p>Income rule</p>
        </div>
        <div>
          <p>SOLU</p>
          <p>50-1000000 SOLU</p>
          <p>0 SOLU</p>
          <p>2023-10-13 00:34</p>
          <p>+(*0.01*45)=0 SOLU</p>
        </div>
      </div>
    </div>
    {/*  */}
    <div
      className={SoloStake1Style.buttonContainer}
      onClick={() => window.alert("Your staking has been submited")}
    >
      <div>Staking Now</div>
    </div>
  </>
  )
}

export default StakingThree