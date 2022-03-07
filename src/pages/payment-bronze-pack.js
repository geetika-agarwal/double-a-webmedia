import React from "react";
import Footer from "../components/FooterSection";
import Payment from "../components/PaymentComponent";
import ScrolltoTop from "../components/ScrollToTop";

const PaymentBronze = () => {
  return (
    <>
      <ScrolltoTop />
      <Payment pack={"Bronze"} />
      <Footer />
    </>
  );
};

export default PaymentBronze;
