import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import CryptoJS from "crypto-js";

function App() {
  const _handleSubmit = async () => {
    try {
      const reqTime = new Date().getTime();

      const listBank = await axios.post(
        "https://sbgateway.zalopay.vn/api/getlistmerchantbanks",
        {
          appid: 2554,
          reqtime: reqTime,
          mac: CryptoJS.HmacSHA256(
            `2554|${reqTime}`,
            "sdngKKJmqEMzvh5QQcdD2A9XBSKUNaYn"
          ),
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      console.log(listBank);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={_handleSubmit}>Test</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
