import React from "react";
import SendETH from "../components/SendETH";
import SendERC20 from "../components/SendERC20";
import getERC20Balances from "../lib/getERC20Balances";

nnn();
async function nnn() {
  const x = await getERC20Balances([
    "0x4f38f4229924bfa28d58eeda496cc85e8016bccc",
  ]);
  console.log(x);
}

export default function Test() {
  return (
    <>
      <SendETH />
      <SendERC20 />
    </>
  );
}
