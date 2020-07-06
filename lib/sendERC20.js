import Web3 from "web3";
import getNetwork from "./getNetwork";
import getEtherScanLink from "./getEtherscanLink";

async function sendERC20(amount, toAddress, contractAddress, decimals) {
  const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
  const fromAddress = (await web3.eth.getAccounts())[0];

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
  const contract = new web3.eth.Contract(abi, contractAddress);

  // https://web3js.readthedocs.io/en/v1.2.7/web3-eth-contract.html#methods-mymethod-send
  const { transactionHash } = await contract.methods
    .transfer(toAddress, amount)
    .send({ from: fromAddress });

  const network = getNetwork();
  return getEtherScanLink(network, transactionHash);
}

export default sendERC20;
