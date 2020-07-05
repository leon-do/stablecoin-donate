function getEtherScanLink(network, transactionHash) {
  // from getNetwork.js
  if (network === "mainnet") {
    return `https://etherscan.io/tx/${transactionHash}`;
  }
  return `https://${network}.etherscan.io/tx/${transactionHash}`;
}

export default getEtherScanLink;
