import React from "react";
import sendERC20 from "../lib/sendERC20";

function SendERC20() {
  const handleSend = async () => {
    const amount = 2;
    const toAddress = "0x5BB21b9ADA20B427EE24381C6Af7f6fA3A8c802D";
    const contractAddress = "0x33dc3264cb5297791d6327d438c126a485ecdbb7";
    const decimals = 18;
    const etherscanLink = await sendERC20(
      amount,
      toAddress,
      contractAddress,
      decimals
    );
    console.log(etherscanLink);
  };

  return (
    <>
      <button className="send" onClick={() => handleSend()}>
        send ERC20
      </button>
      <style jsx>{`
        button:hover {
          cursor: pointer;
        }
      `}</style>
    </>
  );
}

export default SendERC20;
