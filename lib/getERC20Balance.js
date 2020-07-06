import Web3 from "web3";
import getNetwork from "./getNetwork";
import deltaBalanceAddresses from "../config/deltaBalanceAddresses.json";

// https://github.com/DeltaBalances/DeltaBalances.github.io
// const balances = await getERC20Balance(['0x4f38f4229924bfa28d58eeda496cc85e8016bccc'])
async function getERC20Balance(contractAddresses) {
  const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
  const fromAddress = (await web3.eth.getAccounts())[0];

  const network = getNetwork();

  const deltaBalanceAddress = deltaBalanceAddresses[network];
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

  try {
    const contract = new web3.eth.Contract(
      deltaBalanceABI,
      deltaBalanceAddress
    );
    const balances = await contract.methods
      .tokenBalances(fromAddress, contractAddresses)
      .call();
    return balances;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}

export default getERC20Balance;
