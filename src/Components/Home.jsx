import React, { useState, useEffect } from "react";
import "./Home.css";
import Image from "./image.png";
import Image2 from "./about_bg2.gif";
import One from "./1.png";
import Two from "./2.png";
import Three from "./3.png";
import Four from "./4.png";
import Five from "./5.png";
import Six from "./6.png";
import Header from "../Components/Header";
import Marquee from "react-fast-marquee";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { sendEmailVerification, onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase";
import Swal from "sweetalert2";

const Home = () => {
  const navigate = useNavigate();
  const [coinData, setCoinData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Auth", currentUser);
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const sendVerificationEmail = async () => {
    if (user) {
      try {
        await sendEmailVerification(user);
        Swal.fire({
          position: "top-start",
          icon: "success",
          title: "Verification Email Send",
          showConfirmButton: false,
          timer: 1500,
        });
      } catch (error) {
        Swal.fire({
          position: "top-start",
          icon: "error",
          title: "Oops...",
          text: `Some thing Went Wrong! ${error?.message}`,
          footer: '<a href="">Why do I have this issue?</a>',
        });
      }
    } else {
      console.warn("User is not authenticated.");
    }
  };

  return (
    <>
      <Header />

      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        {user && !user.emailVerified ? (
          <div>
            <p style={{ marginBottom: "5px", color: "red" }}>
              Your email is not verified yet. Click the button below to send a
              verification email.
            </p>
            <button
              onClick={sendVerificationEmail}
              style={{
                backgroundColor: "#446e9b",
                color: "#fff",
                padding: "12px 20px",
                borderRadius: "50px",
                fontSize: "1rem",
              }}
            >
              Send Verification Email
            </button>
          </div>
        ) : (
          <>
            {user && user.emailVerified ? <p>Your email is verified.</p> : null}
          </>
        )}
      </div>
      <div className="container">
        <h4 className="title">staking list</h4>
        <p className="titleP">Welcome to the Solunapower Platform (SOLU).</p>
      </div>

      {/* fetching data here */}
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

      {/* section 2 */}

      <section className="main-card mb-3 card my">
        <div className="card-body">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h4 style={{ color: "#656B71", fontSize: "1.1rem" }}>
              Staking Lists
            </h4>
            <p style={{ color: "#999" }}>More</p>
          </div>

          {/* one */}
          <div className="section_container_1">
            <div className="app_mining_pannel_logo">
              <img src={Image} alt="image" />
            </div>
            <span className="app_mining_pannel_name ">
              SOLU stake - 45 days
            </span>
            <span className="app_mining_pannel_purchasing ">
              <span trans="home_mining_purchase_limit">Amount invested</span>
              <span class="bg-tips4">High yield</span>
            </span>
            <span className="app_mining_pannel_purchasing_value">
              50 ~ 1000000 SOLU
            </span>
            <span className="app_mining_pannel_commission">
              1% / <span trans="home_mining_per_day">day</span>
            </span>
            <button
              className="btn-pinkred app_mining_pannel_join"
              onClick={() => navigate("/solustake1")}
            >
              Start
            </button>
            {/*  */}
            <div className="mb-3 app_mining_pannel_progress progress-bar-animated-alt progress">
              <div
                className="progress-bar bg-success"
                role="progressbar"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "0.00014%" }}
              ></div>
              <span className="app_mining_pannel_progress_tag">0.00%</span>
            </div>
          </div>

          {/* two */}
          <div className="section_container_1">
            <div className="app_mining_pannel_logo">
              <img src={Image} alt="image" />
            </div>
            <span className="app_mining_pannel_name ">
              SOLU novice - 15 days
            </span>
            <span className="app_mining_pannel_purchasing ">
              <span trans="home_mining_purchase_limit">Amount invested</span>
              <span class="bg-tips1">Experientia</span>
            </span>
            <span className="app_mining_pannel_purchasing_value">
              500 ~ 10000 SOLU
            </span>
            <span className="app_mining_pannel_commission">
              1% / <span trans="home_mining_per_day">day</span>
            </span>
            <button
              className="btn-pinkred app_mining_pannel_join"
              onClick={() => navigate(`/solustake2`)}
            >
              Start
            </button>
            {/*  */}
            <div className="mb-3 app_mining_pannel_progress progress-bar-animated-alt progress">
              <div
                className="progress-bar bg-success"
                role="progressbar"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "0.00014%" }}
              ></div>
              <span className="app_mining_pannel_progress_tag">0.00%</span>
            </div>
          </div>
          {/* three */}
          <div className="section_container_1">
            <div className="app_mining_pannel_logo">
              <img src={Image} alt="image" />
            </div>
            <span className="app_mining_pannel_name ">SOLU max - 30 days</span>
            <span className="app_mining_pannel_purchasing ">
              <span trans="home_mining_purchase_limit">Amount invested</span>
              <span class="bg-tips5">Premium Picks</span>
            </span>
            <span className="app_mining_pannel_purchasing_value">
              100 ~ 10000 SOLU
            </span>
            <span className="app_mining_pannel_commission">
              1% / <span trans="home_mining_per_day">day</span>
            </span>
            <button
              className="btn-pinkred app_mining_pannel_join"
              onClick={() => navigate(`/solustake3`)}
            >
              Start
            </button>
            {/*  */}
            <div className="mb-3 app_mining_pannel_progress progress-bar-animated-alt progress">
              <div
                className="progress-bar bg-success"
                role="progressbar"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "0.00014%" }}
              ></div>
              <span className="app_mining_pannel_progress_tag">0.00%</span>
            </div>
          </div>
          {/* four */}
          <div className="section_container_1">
            <div className="app_mining_pannel_logo">
              <img src={Image} alt="image" />
            </div>
            <span className="app_mining_pannel_name ">Test SOLU - 1 days </span>
            <span className="app_mining_pannel_purchasing ">
              <span trans="home_mining_purchase_limit">Amount invested</span>
              <span class="bg-tips1">Experiential</span>
            </span>
            <span className="app_mining_pannel_purchasing_value">
              10 ~ 1000 SOLU{" "}
            </span>
            <span className="app_mining_pannel_commission">
              10% / <span trans="home_mining_per_day">day</span>
            </span>
            <button
              className="btn-pinkred app_mining_pannel_join"
              onClick={() => navigate(`/solustake4`)}
            >
              Start
            </button>
            {/*  */}
            <div className="mb-3 app_mining_pannel_progress progress-bar-animated-alt progress">
              <div
                className="progress-bar bg-success"
                role="progressbar"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "0.00014%" }}
              ></div>
              <span className="app_mining_pannel_progress_tag">0.00%</span>
            </div>
          </div>
        </div>
      </section>

      {/* seciton3  */}
      <section className="mb-3 card my" style={{ height: "300px" }}>
        <div className="card-body">
          <h4 style={{ fontSize: "30px", fontWeight: "normal" }}>
            User output
          </h4>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "10px 10px",
            }}
          >
            <p style={{ fontWeight: "bold", fontSize: "18px" }}>Address</p>
            <p style={{ fontWeight: "bold", fontSize: "18px" }}>Income</p>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <marquee
                behavior="scroll"
                direction="up"
                scrollamount="1"
                style={{ height: "170px", color: "#656b71", fontSize: "20px" }}
              >
                MkLKGUT*****nmiplgqL <br />
                SWfSGkG*****akfoabib <br />
                KTSqqqT*****lLakkkw <br />
                xSSqZMx*****xssakznmx <br />
                TSMLhUL*****wssnmpyqp <br />
                xxhKICM*****xxylhPnm <br />
                ITLqxxS*****hwpkxxa <br />
                ULShKAK*****qpaylal <br />
                qSSUUIq*****kssaqqhk <br />
                IKkWITf*****hlikhwfo <br />
                ShfkhWG*****ssyfoiyqg <br />
                GlGUKql*****blbqlkl <br />
                ffkLSSK*****fofoipssssl <br />
                SGTqhkW*****agLkyik <br />
                GWfTfTG*****bqfowfowg <br />
                LKxSKqh*****plxsslky <br />
                TWSxqhA*****Lkssxkya <br />
                hSTCLWC*****yssLPpkP <br />
                WfUTSCG*****kfoqLaPb <br />
                GKThAAU*****glLyaaq <br />
                MkLKGUT*****nmiplgqL <br />
                SWfSGkG*****akfoabib <br />
                KTSqqqT*****lLakkkw <br />
                xSSqZMx*****xssakznmx <br />
                TSMLhUL*****wssnmpyqp <br />
                xxhKICM*****xxylhPnm <br />
                ITLqxxS*****hwpkxxa <br />
                ULShKAK*****qpaylal <br />
                qSSUUIq*****kssaqqhk <br />
                IKkWITf*****hlikhwfo <br />
                ShfkhWG*****ssyfoiyqg <br />
                GlGUKql*****blbqlkl <br />
                ffkLSSK*****fofoipssssl <br />
                SGTqhkW*****agLkyik <br />
                GWfTfTG*****bqfowfowg <br />
                LKxSKqh*****plxsslky <br />
                TWSxqhA*****Lkssxkya <br />
                hSTCLWC*****yssLPpkP <br />
                WfUTSCG*****kfoqLaPb <br />
                GKThAAU*****glLyaaq <br />
              </marquee>
            </div>
            <div>
              <marquee
                behavior="scroll"
                direction="up"
                scrollamount="1"
                style={{ height: "170px", color: "#656b71", fontSize: "20px" }}
              >
                64.5024 SOLU <br />
                52.83894 SOLU <br />
                89.158582 SOLU <br />
                45.30631 SOLU <br />
                32.456410 SOLU <br />
                45.1620 SOLU <br />
                40.582157 SOLU <br />
                31.297774 SOLU <br />
                4.911912 SOLU <br />
                57.15305 SOLU <br />
                55.1697 SOLU <br />
                67.829090 SOLU <br />
                58.362565 SOLU <br />
                12.308415 SOLU <br />
                87.186152 SOLU <br />
                5.97432 SOLU <br />
                55.833 SOLU <br />
                61.71314 SOLU <br />
                88.88356 SOLU <br />
                8.4207 SOLU <br />
                64.5024 SOLU <br />
                52.83894 SOLU <br />
                89.158582 SOLU <br />
                45.30631 SOLU <br />
                32.456410 SOLU <br />
                45.1620 SOLU <br />
                40.582157 SOLU <br />
                31.297774 SOLU <br />
                4.911912 SOLU <br />
                57.15305 SOLU <br />
                55.1697 SOLU <br />
                67.829090 SOLU <br />
                58.362565 SOLU <br />
                12.308415 SOLU <br />
                87.186152 SOLU <br />
                5.97432 SOLU <br />
                55.833 SOLU <br />
                61.71314 SOLU <br />
                88.88356 SOLU <br />
                8.4207 SOLU <br />
              </marquee>
            </div>
          </div>
        </div>
      </section>

      {/* section 4 */}

      <section className="mb-3 card my">
        <div className="card-body">
          <div className="accordion-wrapper mb-3">
            <div className="card-header">
              <p style={{ color: "#3255BE", fontSize: "27px" }}>
                SOLU Staking?
              </p>
            </div>
            <div className="card-para-header">
              <p
                style={{ width: "45vw", fontSize: "20px", lineHeight: "30px" }}
              >
                Renewable Computing More green energy. More sustainable
                computing. Cloud Computing for innovative workloads that you can
                feel good about. We turn wasted renewable energy into efficient
                computing power for video transcoding, scientific research, and
                deep learning. Do your best work at a lower cost using the
                planet's sustainable resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* section 5 */}

      <section className="mb-3 card my">
        <div className="card-body">
          <img src={Image2} alt="image" style={{ width: "100%" }} />
        </div>
      </section>

      {/* section 6 */}

      <section className="mb-3 card my" style={{ height: "auto" }}>
        <div className="card-body" style={{ height: "55vh" }}>
          <div className="container" style={{ padding: "20px 0px" }}>
            <p style={{ fontSize: "30px", marginBottom: "4px" }}>partner</p>
            <p>our business partners</p>
          </div>

          <div className="app-other-logo">
            <img src={One} alt="one" />
          </div>
          <div className="app-other-logo">
            <img src={Two} alt="one" />
          </div>
          <div className="app-other-logo">
            <img src={Three} alt="one" />
          </div>
          <div className="app-other-logo">
            <img src={Four} alt="one" />
          </div>
          <div className="app-other-logo">
            <img src={Five} alt="one" />
          </div>
          <div className="app-other-logo">
            <img src={Six} alt="one" />
          </div>
        </div>
      </section>

      {/*  */}
      <section style={{ padding: "50px 0px" }}></section>
    </>
  );
};

export default Home;
