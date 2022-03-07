import React from "react";
import Footer from "../components/FooterSection";
import Payment from "../components/PaymentComponent";
import ScrolltoTop from "../components/ScrollToTop";

const PaymentGold = () => {
  return (
    <>
      <ScrolltoTop />
      <Payment pack={"Gold"} />
      <Footer />
    </>
  );
};

export default PaymentGold;
