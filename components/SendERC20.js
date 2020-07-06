import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import tokenConfig from "../config/tokens.json";
import sendERC20 from "../lib/sendERC20";
import getERC20Balances from "../lib/getERC20Balances";

function SendERC20() {
  const { toAddress } = useRouter().query;
  const [tokens, setTokens] = useState(tokenConfig);
  const [amounts, setAmounts] = useState({});

  useEffect(() => {
    // get token balance and update token state
    const tokenAddresses = tokens.map((token) => token.address);
    getERC20Balances(tokenAddresses).then((balances) => {
      // add balances to token array
      const tokenWithBalance = tokens.map((token, i) => {
        token.balance = balances[i];
        return token;
      });
      setTokens(tokenWithBalance);
    });
  }, [useRouter]);

  const handleSend = async (amount, contractAddress, decimals) => {
    try {
      const etherscanLink = await sendERC20(
        amount,
        toAddress,
        contractAddress,
        decimals
      );
      console.log(etherscanLink);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleAmount = (e, tokenName) => {
    const updatedAmounts = amounts;
    updatedAmounts[tokenName] = e.target.value;
    setAmounts(updatedAmounts);
  };

  return (
    <>
      {tokens.map((token) => (
        <div className="sendERC20" key={token.name}>
          <div>
            {token.name} {token.balance}
          </div>
          <input type="number" onChange={(e) => handleAmount(e, token.name)} />
          <button
            className="send"
            onClick={() =>
              handleSend(amounts[token.name], token.address, token.decimals)
            }
          >
            send ERC20
          </button>
        </div>
      ))}

      <style jsx>{`
        .sendERC20 {
          margin: 20px;
        }
        button:hover {
          cursor: pointer;
        }
      `}</style>
    </>
  );
}

export default SendERC20;
