import React from "react";
import Layout from "../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>
            {" "}
            <h4>Privacy Policy for Tail of Time </h4>
          </p>
          <p>
            Welcome to Tail of Time at Tail of Time, we respect your privacy and
            are committed to protecting your personal information. This Privacy
            Policy explains how we collect, use, disclose, and safeguard your
            information when you visit our website and purchase products from
            us.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
