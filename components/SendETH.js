import React from "react";
import sendETH from "../lib/sendETH";

function SendETH() {
  const handleSend = async () => {
    const amount = 0.2;
    const toAddress = "0x5BB21b9ADA20B427EE24381C6Af7f6fA3A8c802D";
    const etherscanLink = await sendETH(amount, toAddress);
    console.log(etherscanLink);
  };

  return (
    <>
      <button className="send" onClick={() => handleSend()}>
        send ETH
      </button>
      <style jsx>{`
        button:hover {
          cursor: pointer;
        }
      `}</style>
    </>
  );
}

export default SendETH;
