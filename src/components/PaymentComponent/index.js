import React from "react";
import {
  PaymentContainer,
  PaymentForm,
  PaymentHeading,
  PaymentSubheading,
  PBtn,
  PBtnWrap,
  PEmailInput,
  PFirstNameInput,
  PLabel,
  PLastNameInput,
  PPackType,
  PPhoneNumberInput,
} from "./PaymentElements";

const Payment = ({ pack }) => {
  return (
    <>
      <PaymentContainer fluid>
        <PaymentHeading>Payment Section</PaymentHeading>
        <PaymentSubheading>
          You have chosen{" "}
          <span
            style={{
              color: "black",
              fontWeight: "bold",
              borderBottom: "5px solid #ffc947",
            }}
          >
            {pack}
          </span>{" "}
          Pack
        </PaymentSubheading>
        <PaymentForm>
          <PLabel>Name</PLabel> <br />
          <PFirstNameInput type="text" placeholder="Enter Your First Name" />
          <PLastNameInput type="text" placeholder="Enter Your Last Name" />
          <br /> <PLabel>Email</PLabel>
          <PEmailInput type="email" placeholder="Enter Your Email" />
          <PLabel>Pack Type</PLabel>
          <PPackType
            type="text"
            value={pack}
            placeholder={`${pack}`}
            readOnly
          />
          <PLabel>Phone Number</PLabel>
          <PPhoneNumberInput
            type="phone"
            placeholder="Enter Your Phone Number"
          />
          <PBtnWrap>
            <PBtn>Submit</PBtn>
          </PBtnWrap>
        </PaymentForm>
      </PaymentContainer>
    </>
  );
};

export default Payment;
