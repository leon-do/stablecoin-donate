import React from "react";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="container">
        <div className="foobar">stuff</div>
        <style jsx>{`
          .foobar {
            border: 1px solid red;
          }
        `}</style>
      </div>
    </Layout>
  );
}
