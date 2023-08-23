import React, { useState, useEffect } from "react";
import "./Asset.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
import TImage from "./t1.png";
import SoloImage from "./image.png";
import Marquee from "react-fast-marquee";

const Assets = () => {
  const [coinData, setCoinData] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const handleClick = () => {
    setToggle(!toggle);
    console.log("testing here");
  };

  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/simple/price",
          {
            params: {
              ids: "bitcoin,ethereum,ripple,litecoin,tether,tron,cardano,polkadot,stellar,chainlink,bitcoin-cash,dogecoin,binancecoin,solana, usd-coin,avalanche-2, cosmos,tezos,dash,eos,vechain,polygon", // Example coins
              vs_currencies: "usd",
            },
          }
        );

        const coinIds = Object.keys(response.data);
        const coinWithImages = await Promise.all(
          coinIds.map(async (coinId) => {
            const coinResponse = await axios.get(
              `https://api.coingecko.com/api/v3/coins/${coinId}`
            );
            return {
              id: coinId,
              price: response.data[coinId].usd,
              image: coinResponse.data.image.large,
              url: coinResponse.data.links.homepage[0], // Replace with actual URL
            };
          })
        );

        setCoinData(coinWithImages);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCoinData();
    const interval = setInterval(fetchCoinData, 60000); // Fetch data every minute
    return () => clearInterval(interval);
  }, []);

  // useEffect(() => {
  //   const fetchCoinData = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://api.coingecko.com/api/v3/simple/price",
  //         {
  //           params: {
  //             ids: "bitcoin,ethereum,ripple,litecoin,tether,tron", // Example coins
  //             vs_currencies: "usd",
  //           },
  //         }
  //       );
  //       setCoinData(response.data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchCoinData();
  //   const interval = setInterval(fetchCoinData, 60000); // Fetch data every minute
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <>
      {" "}
      <div className="app_asset_header BG-color">
        <div className="app_asset_header_value">
          <span className="app_asset_header_value_v">536.462</span>
          <span className="app_asset_header_value_usdt">USDT</span>
        </div>
        <div className="app_asset_header_buttons text-nowrap overflow-x">
          <button
            className="mb-2 me-2 btn-square btn btn-danger mindata"
            onClick={() => navigate(`/deposite`)}
          >
            Deposit
          </button>
          <button
            className="mb-2 me-2 btn-square btn btn-danger mindata"
            onClick={() => navigate(`/withdraw`)}
          >
            Withdraw
          </button>
          <button
            className="mb-2 me-2 btn-square btn btn-danger mindata"
            onClick={() => navigate(`/swap`)}
          >
            Swap
          </button>
          <button
            className="mb-2 me-2 btn-square btn btn-danger mindata"
            onClick={() => navigate(`/orders`)}
          >
            Orders
          </button>
        </div>
      </div>
      {/* fetching here */}
      <div style={{ margin: "30px 20px" }}>
        {loading ? (
          "LOADING HERE ..."
        ) : (
          <Marquee behavior="scroll" direction="left">
            <div className="cg-containerlarge">
              <div className="cg-marquee">
                <span className="cg-marquee-content-1">
                  <div className="cg-flex cg-flex-row">
                    {coinData.map((coin) => (
                      <div key={coin.id} className="coin-info">
                        <a
                          href={coin.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={coin.image}
                            alt={`${coin.id} Logo`}
                            className="coin-logo"
                          />
                          <span className="coin-price">
                            {coin.id}: ${coin.price}
                          </span>
                        </a>
                      </div>
                    ))}
                  </div>
                </span>
              </div>
            </div>
          </Marquee>
        )}
      </div>
      {/* line */}
      <div className="line"></div>
      <div className="card1">
        <div className="app-page-pannel-body-cointitle">
          <div className="myContainer">
            {/* one */}
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                type="checkbox"
                className="rightContainerInput"
                onClick={handleClick}
              />
              <label htmlFor="" style={{ color: "gray" }}>
                Hide Small Currency
              </label>
            </div>
            {/* two */}
            <div className="leftContainer">
              <SearchIcon className="icon1" />
              <input
                type="text"
                placeholder="Search..."
                className="inputdata"
              />
            </div>
          </div>
        </div>
        {toggle ? (
          <>
            {/* one */}
            <div className="app-page-pannel-body-coinlist-item">
              <div className="app-page-pannel-body-coinlist-item-title">
                <img
                  src={TImage}
                  alt="logo"
                  className="app-page-pannel-body-coinlist-item-icon"
                />
                <span
                  className="app-page-pannel-body-coinlist-item-name"
                  onClick={() => navigate(`/viewtext`)}
                >
                  View
                </span>
              </div>
              <div className="app-page-pannel-body-coinlist-item-vaild">
                <div className="app-page-pannel-body-coinlist-item-vaild-name">
                  Available
                </div>
                <div className="app-page-pannel-body-coinlist-item-vaild-value text-nowrap">
                  9.462
                </div>
              </div>
              <div className="app-page-pannel-body-coinlist-item-freeze ">
                <div className="app-page-pannel-body-coinlist-item-vaild-name">
                  Freeze
                </div>
                <div className="app-page-pannel-body-coinlist-item-vaild-value text-nowrap">
                  0.00
                </div>
              </div>
              <div className="app-page-pannel-body-coinlist-item-exchange">
                <div className="app-page-pannel-body-coinlist-item-vaild-name">
                  Converted (USDT)
                </div>
                <div className="app-page-pannel-body-coinlist-item-vaild-value text-nowrap">
                  ≈ 9.462
                </div>
              </div>
            </div>
            {/* two */}
            <div className="app-page-pannel-body-coinlist-item">
              <div className="app-page-pannel-body-coinlist-item-title">
                <img
                  src={SoloImage}
                  alt="logo"
                  className="app-page-pannel-body-coinlist-item-icon"
                />
                <span
                  className="app-page-pannel-body-coinlist-item-name"
                  onClick={() => navigate(`/viewsolo`)}
                >
                  View
                </span>
              </div>
              <div className="app-page-pannel-body-coinlist-item-vaild">
                <div className="app-page-pannel-body-coinlist-item-vaild-name">
                  Available
                </div>
                <div className="app-page-pannel-body-coinlist-item-vaild-value text-nowrap">
                  1054
                </div>
              </div>
              <div className="app-page-pannel-body-coinlist-item-freeze ">
                <div className="app-page-pannel-body-coinlist-item-vaild-name">
                  Freeze
                </div>
                <div className="app-page-pannel-body-coinlist-item-vaild-value text-nowrap">
                  10
                </div>
              </div>
              <div className="app-page-pannel-body-coinlist-item-exchange">
                <div className="app-page-pannel-body-coinlist-item-vaild-name">
                  Converted (USDT)
                </div>
                <div className="app-page-pannel-body-coinlist-item-vaild-value text-nowrap">
                  ≈ 527
                </div>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default Assets;
