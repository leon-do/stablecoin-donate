export default function getEtherScanLink(network, transactionId) {
	// from getNetwork.js
	if (network === 'mainnet') {
		return `https://etherscan.io/tx/${transactionId}`
	}
	return `https://${network}.etherscan.io/tx/${transactionId}`
}