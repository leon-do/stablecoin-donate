import Web3 from "web3";
import deltaBalanceAddresses from "../config/deltaBalanceAddresses.json";
import tokens from "../config/tokens.json";
import getNetwork from "./getNetwork";

// https://github.com/DeltaBalances/DeltaBalances.github.io
// const balances = await getERC20Balance(['0x4f38f4229924bfa28d58eeda496cc85e8016bccc'])
async function getERC20Balances() {
  const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
  const fromAddress = (await web3.eth.getAccounts())[0];

  const deltaBalanceAddress = deltaBalanceAddresses[getNetwork()];
  const deltaBalanceABI = [
    {
      constant: true,
      inputs: [
        { name: "user", type: "address" },
        { name: "tokens", type: "address[]" },
      ],
      name: "tokenBalances",
      outputs: [{ name: "balances", type: "uint256[]" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
  ];

  const contract = new web3.eth.Contract(deltaBalanceABI, deltaBalanceAddress);
  const contractAddresses = tokens.map((token) => token.address);
  const balances = await contract.methods
    .tokenBalances(fromAddress, contractAddresses)
    .call();

  // format decimals
  const formatedBalances = balances.map((balance, i) => {
    const { decimals } = tokens[i];
    if (balance > 0) {
      return balance / Math.pow(10, decimals);
    }
    return 0;
  });

  return formatedBalances;
}

export default getERC20Balances;
