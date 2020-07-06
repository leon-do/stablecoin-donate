import Web3 from "web3";

// https://web3js.readthedocs.io/en/v1.2.0/web3-eth.html#id34
async function getETHBalance() {
  const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
  const fromAddress = (await web3.eth.getAccounts())[0];
  const weiBalance = await web3.eth.getBalance(fromAddress);
  const ethBalance = web3.utils.fromWei(weiBalance, "ether");
  return Number(ethBalance).toFixed(4);
}

export default getETHBalance;
