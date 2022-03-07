import React, { useEffect } from "react";
import { FaQuoteLeft, FaRegStar, FaStar } from "react-icons/fa";
import profile1 from "../../images/profile-1.jpeg";
import profile2 from "../../images/profile-2.jpeg";
import profile3 from "../../images/profile-3.jpeg";
import { TestimonialContainer } from "./TestimonialElements";
import "./TestimonialElemnents.css";
import Aos from "aos";
import "aos/dist/aos.css";

const TestimonialSection = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <TestimonialContainer>
      <div>
        <h1 className="heading">Testimonials</h1>
        <hr className="testimonialHr" />
      </div>
      <div class="wrapper">
        <div class="box" data-aos="fade-up" data-aos-delay="0">
          <FaQuoteLeft className="quote" />
          <p className="message">
            “You made it so simple. My new site is so much faster and easier to
            work with than my old site. I just choose the page, make the change
            and click save. Thanks, guys!”
          </p>
          <div class="content">
            <div class="info">
              <div class="name">Alex Smith</div>
              <div class="job">Designer | Developer</div>
              <div class="stars">
                <FaStar className="stars" />
                <FaStar className="stars" />
                <FaRegStar className="stars" />
                <FaRegStar className="stars" />
                <FaRegStar className="stars" />
              </div>
            </div>
            <div class="image">
              <img src={profile1} alt="" />
            </div>
          </div>
        </div>
        <div class="box" data-aos="fade-up" data-aos-delay="200">
          <FaQuoteLeft className="quote" />
          <p className="message">
            “The Landscaping Professionals were quick, courteous and very
            helpful. They helped me restore my lawn and gardens completely after
            putting in my deck. I was worried it wouldn’t be done in time for my
            garden party, but they finished the job with time to spare!”
          </p>
          <div class="content">
            <div class="info">
              <div class="name">Steven Chris</div>
              <div class="job">YouTuber | Blogger</div>
              <div class="stars">
                <FaStar className="stars" />
                <FaStar className="stars" />
                <FaStar className="stars" />
                <FaRegStar className="stars" />
                <FaRegStar className="stars" />
              </div>
            </div>
            <div class="image">
              <img src={profile2} alt="" />
            </div>
          </div>
        </div>
        <div class="box" data-aos="fade-up" data-aos-delay="400">
          <FaQuoteLeft className="quote" />
          <p className="message">
            “I just wanted to share a quick note and let you know that you guys
            do a really good job. I’m glad I decided to work with you. It’s
            really great how easy your websites are to update and manage."
          </p>
          <div class="content">
            <div class="info">
              <div class="name">Kristina Bellis</div>
              <div class="job">Freelancer | Advertiser</div>
              <div class="stars">
                <FaStar className="stars" />
                <FaStar className="stars" />
                <FaStar className="stars" />
                <FaStar className="stars" />
                <FaRegStar className="stars" />
              </div>
            </div>
            <div class="image">
              <img src={profile3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </TestimonialContainer>
  );
};

export default TestimonialSection;
