import React from "react";
import "./Header.css";
import { BiUserCircle, BiSolidUser } from "react-icons/bi";
import {
  AiOutlineMail,
  AiOutlineRight,
  AiOutlineRetweet,
  AiOutlineGlobal,
  AiFillCloud,
  AiTwotoneRocket,
} from "react-icons/ai";
import { BsCurrencyDollar, BsFillVolumeUpFill, BsSafe2 } from "react-icons/bs";
import { MdPhoneAndroid, MdInsertInvitation } from "react-icons/md";
import { HiOutlineClipboard } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { FaWallet } from "react-icons/fa";

// Drawer here
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { BsServer } from "react-icons/bs";
import { BiHome, BiRotateRight } from "react-icons/bi";
import { useUserAuth } from "../context/UserAuthContext";

const Header = () => {
  const navigate = useNavigate();
  const { logOut, user } = useUserAuth();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  // Define an array of icons you want to use in the Drawer
  const iconArray = [
    <BsServer />,
    <BiRotateRight />,
    <MdInsertInvitation />,
    <BsSafe2 />,
    <FaWallet />,
    <AiOutlineGlobal />,
    <AiFillCloud />,
    <AiTwotoneRocket />,
    // Add more icons as needed
  ];

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        minWidth: "30vw",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          "Staking",
          "Re-energy",
          "Invitation rebate",
          "Security center",
          "Withdrawl address",
          "Language",
          "Download APP",
          "Current version: v1.0",
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => handleItemClick(index)}>
              <ListItemIcon style={{ fontSize: "1.7rem" }}>
                {iconArray[index % iconArray.length]}
                {/* Use the icon from the array based on the index */}
              </ListItemIcon>
              <ListItemText primary={text} style={{ paddingTop: "27px" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {user &&   <button className="logout" onClick={logOut}>
        Logout
      </button>}
    </Box>
  );

  const handleItemClick = (index) => {
    switch (index) {
      case 0:
        navigate("/staking");
        break;

      case 1:
        navigate("/customer");
        break;

      case 2:
        navigate("/team");
        break;

      case 3:
        navigate("/securitycenter");
        break;

      case 4:
        navigate("/withdrawl");
        break;

      case 5:
        navigate("/language");
        break;

      case 6:
        navigate("/downloadapp");
        break;

      default:
        navigate("/");
    }
  };

  return (
    <>
      <div className="bc1">
        <header className="header_container my">
          <div>
            <Button onClick={toggleDrawer("left", true)}>
              <BiUserCircle style={{ fontSize: "2rem", color: "white" }} />
            </Button>
            <Drawer
              anchor="left"
              open={state["left"]}
              onClose={toggleDrawer("left", false)}
            >
              {list("left")}
            </Drawer>
          </div>
          <h3 className="text_white">SOLU/USDT</h3>
          <AiOutlineMail className="icons text_white" />
        </header>
        <header className="my">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <BsCurrencyDollar className="icons headericon_2" />
            <span className="headericon_2">Account assets</span>
          </div>
        </header>
        <header className="my header_container">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <span className="text_white" style={{ fontSize: "30px" }}>
              0.00
            </span>
            <span
              style={{
                padding: "0px 10px",
                fontSize: "14px",
                color: "lightgray",
              }}
            >
              USDT
            </span>
          </div>
          <AiOutlineRight className="icons text_white" />
        </header>
        <header className="my">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <BsFillVolumeUpFill className="icons text_white" />
            <marquee behavior="scroll" direction="up" scrollamount="1">
              <span
                className="text_white"
                style={{ padding: "0px 10px", fontSize: "17px" }}
              >
                This is a system notification
              </span>
            </marquee>
          </div>
        </header>
      </div>

      {/* Part 2 */}

      <div
        className="bc2 my"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          onClick={() => navigate("/deposite")}
        >
          <BsCurrencyDollar className="icons2 headericon_2" />
          <p style={{ color: "gray", fontSize: "16px" }}>Deposit</p>
        </div>
        <div onClick={() => navigate("/withdraw")}>
          <AiOutlineRetweet className="icons2 headericon_2" />
          <p style={{ color: "gray", fontSize: "16px" }}>Withdraw</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          onClick={() => navigate("/license")}
        >
          <HiOutlineClipboard className="icons2 headericon_2" />
          <p style={{ color: "red", fontSize: "16px" }}>License</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <a
            href="https://solunapower.pro/app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "gray" }}
          >
            <MdPhoneAndroid className="icons2 headericon_2" />
            <p style={{ color: "gray", fontSize: "16px", textAlign: "center" }}>
              APP
            </p>
          </a>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          onClick={() => navigate("/customer")}
        >
          <BiSolidUser className="icons2 headericon_2" />
          <p style={{ color: "gray", fontSize: "16px" }}>Customer service</p>
        </div>
      </div>
    </>
  );
};

export default Header;
