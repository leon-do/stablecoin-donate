import Web3 from "web3";
import getNetwork from "./getNetwork";
import getEtherScanLink from "./getEtherscanLink";

async function sendETH(amount, toAddress) {
  const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
  const fromAddress = (await web3.eth.getAccounts())[0];

  const { transactionHash } = await web3.eth.sendTransaction({
    from: fromAddress,
    to: toAddress,
    value: web3.utils.toWei(amount.toString(), "ether"),
  });

  const network = getNetwork();
  return getEtherScanLink(network, transactionHash);
}

export default sendETH;
