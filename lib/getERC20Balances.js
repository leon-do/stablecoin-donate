import Web3 from "web3";

// https://github.com/DeltaBalances/DeltaBalances.github.io
// const balances = await getERC20Balance(['0x4f38f4229924bfa28d58eeda496cc85e8016bccc'])
async function getERC20Balances(contractAddresses) {
  const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
  const fromAddress = (await web3.eth.getAccounts())[0];

  const deltaBalanceAddress = "0xbf320b8336b131e0270295c15478d91741f9fc11";
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
  const balances = await contract.methods
    .tokenBalances(fromAddress, contractAddresses)
    .call();
  return balances;
}

export default getERC20Balances;
