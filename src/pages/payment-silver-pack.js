import React from "react";
import Footer from "../components/FooterSection";
import Payment from "../components/PaymentComponent";
import ScrolltoTop from "../components/ScrollToTop";

const PaymentSilver = () => {
  return (
    <>
      <ScrolltoTop />
      <Payment pack={"Silver"} />
      <Footer />
    </>
  );
};

export default PaymentSilver;
