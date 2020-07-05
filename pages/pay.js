import React from "react";
import Layout from "../components/Layout";

export default function Pay() {
  return (
    <Layout>
      <div className="container">
        <div className="foobar">Pay</div>
        <style jsx>{`
          .foobar {
            border: 1px solid green;
          }
        `}</style>
      </div>
    </Layout>
  );
}
