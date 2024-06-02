import React from "react";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About Faraz Ecomm App"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Welcome to Tale of Time, your ultimate destination for exquisite
            timepieces that combine style, precision, and craftsmanship. As a
            passionate watch enthusiast or someone seeking the perfect gift,
            you've come to the right place. Our online watch boutique is a
            curated haven for horology enthusiasts and fashion-conscious
            individuals alike.
          </p>
        </div>
      </div>
    </Layout>
  );
};
export default About;
