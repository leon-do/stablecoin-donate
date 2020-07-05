import React from "react";
import Web3 from "web3";
import getNetwork from "../lib/getNetwork";
import getEtherscanLink from "../lib/getEtherscanLink";

export default function SendETH() {
  const handleSend = async () => {
    const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
    const network = getNetwork(web3);
    const fromAddress = (await web3.eth.getAccounts())[0];
    const toAddress = "0xc49a7E03d79d3eEFb09920263a42D33B88dA9250";
    const amount = 0.001;

    web3.eth.sendTransaction(
      {
        from: fromAddress,
        to: toAddress,
        value: web3.utils.toWei(amount.toString(), "ether"),
      },
      (error, transactionHash) => {
        if (error) return console.log("Payment failed", error);
        const etherscanLink = getEtherscanLink(network, transactionHash);
        console.log(etherscanLink);
      }
    );
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
