import React from "react";
import Web3 from "web3";
import getNetwork from "../lib/getNetwork";
import getEtherscanLink from "../lib/getEtherscanLink";
import tokens from "../tokens/tokens.json";

export default function Confirmation() {
  const handleSend = async () => {
    const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
    const network = getNetwork(web3);
    const fromAddress = (await web3.eth.getAccounts())[0];
    const toAddress = "0xc49a7E03d79d3eEFb09920263a42D33B88dA9250";
    const amount = 2;

    // Get ERC20 Token contract instance
    const abi = [
      {
        constant: false,
        inputs: [
          { name: "_to", type: "address" },
          { name: "_value", type: "uint256" },
        ],
        name: "transfer",
        outputs: [{ name: "", type: "bool" }],
        type: "function",
      },
    ];

    // https://etherscan.io/token/0xb8c77482e45f1f44de1745f52c74426c631bdd52
    const contractAddress = tokens[1].address || "0xb8c77482e45f1f44de1745f52c74426c631bdd52";
    const contract = new web3.eth.Contract(abi, contractAddress);

    // calculate ERC20 token amount
    const decimals = tokens[1].decimals || 18;
    const value = (amount * Math.pow(10, decimals)).toString();

    // https://web3js.readthedocs.io/en/v1.2.7/web3-eth-contract.html#methods-mymethod-send
    contract.methods.transfer(toAddress, value).send({ from: fromAddress }, (error, transactionHash) => {
      if (error) return console.log("Payment failed", error);
      const etherscanLink = getEtherscanLink(network, transactionHash);
      console.log(etherscanLink);
    });
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
