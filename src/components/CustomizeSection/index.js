import React from "react";
import Swal from "sweetalert2";

import axios from "axios";
import {
  Backend,
  BackendLabel,
  Contact1,
  Contact2,
  CustomForm,
  CustomizeBackground,
  CustomizeBackgroundContainer,
  CustomizeBlockQuote,
  CustomizeContainer,
  CustomizeContentContainer,
  CustomizeSubTitle,
  CustomizeTitle,
  CustomLabel,
  DaysCounter,
  DesignInput,
  EmailInput1,
  EmailInput2,
  Frontend,
  FrontendLabel,
  NameInput,
  SubmitButton,
  SubmitButtonWrap,
  TermsCheck,
  TextArea,
  Title,
  UpdateInput,
} from "./CustomizeElements";

import background from "../../images/customize-background.jpg";
import Footer from "../FooterSection";
import { Alert } from "react-bootstrap";

class CustomizeSection extends React.Component {
  constructor(props) {
    super(props);
    this.addFormData = this.addFormData.bind(this);
  }

  addFormData(evt) {
    alert(
      "Your data is uploaded successfully. We will reach back to you shortly"
    );
    evt.preventDefault();
    const fd = new FormData();
    fd.append("companyname", this.refs.companyname.value);
    fd.append("email", this.refs.email.value);
    fd.append("emailo", this.refs.emailo.value);
    fd.append("num", this.refs.num.value);
    fd.append("numo", this.refs.numo.value);
    fd.append("title", this.refs.title.value);
    fd.append("desc", this.refs.desc.value);
    fd.append("price", this.refs.price.value);
    fd.append("data", this.refs.data.value);
    fd.append("days", this.refs.days.value);
    fd.append("involvement", this.refs.involvement.value);
    fd.append("frontframe", this.refs.frontframe.value);
    fd.append("backframe", this.refs.backframe.value);
    fd.append("other", this.refs.other.value);

    axios.post("http://localhost/customize.php", fd).then((res) => {
      Swal.fire({
        title: "Laxmi Cheat Fund",
        text: res.data.data,
        type: "success",
      });
      this.myFormRef.reset();
    });
  }

  handleChange(value) {
    this.setState({ selectedValue: value });
  }

  render() {
    return (
      <>
        <CustomizeContainer>
          <CustomizeBackgroundContainer>
            <CustomizeBackground src={background} />
            <CustomizeTitle>Customize Your Website.</CustomizeTitle>
            <CustomizeSubTitle>
              The Sky is your Limit and We will help you reach it.
            </CustomizeSubTitle>
          </CustomizeBackgroundContainer>
          <CustomizeContentContainer fluid>
            <CustomizeBlockQuote>
              We don't just build Websites, We build websites that SELLS
            </CustomizeBlockQuote>
            <CustomForm ref={(el) => (this.myFormRef = el)}>
              <CustomLabel>Name of your Company or Start-up:</CustomLabel>
              <NameInput
                type="text"
                placeholder="Name of your company"
                ref="companyname"
                required
              />{" "}
              <br />
              <CustomLabel>Your Email Id(s):</CustomLabel>
              <EmailInput1
                type="email"
                placeholder="Email id"
                ref="email"
                name="email1"
                required
              />
              <EmailInput2
                type="email"
                placeholder="Optional email id"
                ref="emailo"
              />{" "}
              <br />
              <CustomLabel>Enter your Contact number(s):</CustomLabel>
              <Contact1
                type="tel"
                placeholder="Contact number"
                ref="num"
                required
              />
              <Contact2
                type="tel"
                placeholder="Optional contact number"
                ref="numo"
              />{" "}
              <br />
              <CustomLabel>Give a Title to your Website's Idea:</CustomLabel>
              <Title
                type="text"
                placeholder="Enter the title"
                ref="title"
                required
              />{" "}
              <br />
              <CustomLabel>
                Give a brief Description of your Website's Idea:
              </CustomLabel>{" "}
              <br />
              <TextArea
                as="textarea"
                row={3}
                placeholder="Enter the description..."
                ref="desc"
                required
              />{" "}
              <br />
              <CustomLabel>
                How much price can you pay for the Website Designing:
              </CustomLabel>{" "}
              <DaysCounter
                type="number"
                placeholder="Enter the Price"
                ref="days"
                max="10000"
                min="2000"
                step="500"
                required
              />{" "}
              <br />
              <CustomLabel>
                How much of initial Designs and Data can you provide:{" "}
              </CustomLabel>
              <DesignInput
                type="text"
                placeholder="Design and data / Only Data / Only Design"
              />
              <CustomLabel>
                How many days can you invest for us to develop the Website:{" "}
              </CustomLabel>
              <DaysCounter
                type="number"
                placeholder="Enter a number"
                ref="days"
                max="100"
                min="7"
                required
              />{" "}
              <br />
              <CustomLabel>
                How much involvement will you want once we start designing:{" "}
              </CustomLabel>
              <UpdateInput
                type="text"
                placeholder="Daily / Weekly / Only Major "
              />
              <CustomLabel>
                Do you prefer any specific Frameworks for your Website:
              </CustomLabel>{" "}
              <br />
              <FrontendLabel>Front End Framework: </FrontendLabel>
              <Frontend
                type="text"
                placeholder="Frontend framework(s)"
                ref="frontframe"
              />{" "}
              <br />
              <BackendLabel>Back End Framework: </BackendLabel>
              <Backend
                type="text"
                placeholder="Backend framework(s)"
                ref="backframe"
              />{" "}
              <br />
              <CustomLabel>Other Information or Links: </CustomLabel> <br />
              <TextArea
                as="textarea"
                row={5}
                placeholder="Drop your Drive or OpenBox Links Here..."
                ref="other"
              />{" "}
              <br />
              <br />
              <TermsCheck
                type="checkbox"
                name="terms"
                label="I accept all the Terms and Conditions."
                required
              />
              <TermsCheck
                type="checkbox"
                name="terms"
                label="I accept that all the data mentioned above id genuine and intended for good purposes. I found fraudulent, serious actions can be taken against the Company."
                required
              />
              <TermsCheck
                type="checkbox"
                name="terms"
                label="I accept that extra Charges will be asked if the design, data or the idea is changes once the Website Development commences or when it is in its final stage of development."
                required
              />
              <SubmitButtonWrap>
                <SubmitButton
                  type="submit"
                  className="btn btn-primary"
                  onClick={this.addFormData}
                >
                  Submit
                </SubmitButton>
              </SubmitButtonWrap>
            </CustomForm>
          </CustomizeContentContainer>
        </CustomizeContainer>
        <Footer />
      </>
    );
  }
}

export default CustomizeSection;
