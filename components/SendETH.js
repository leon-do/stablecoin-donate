import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import sendETH from "../lib/sendETH";
import getETHBalance from "../lib/getETHBalance";

function SendETH() {
  const { toAddress } = useRouter().query;
  const [amount, setAmount] = useState("");
  const [balance, setBalance] = useState("");

  useEffect(() => {
    getETHBalance().then((balance) => setBalance(balance));
  }, [useRouter]);

  const handleSend = () => {
    sendETH(amount, toAddress)
      .then((etherscanLink) => {
        console.log(etherscanLink);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="sendEth">
      <div>ETH Balance: {balance}</div>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button className="send" onClick={() => handleSend()}>
        send ETH
      </button>
      <style jsx>{`
        .sendEth {
          margin: 20px;
        }
        button:hover {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}

export default SendETH;
