import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  // Open Chatbot Page
  const handleChatClick = () => {
    navigate("/chat");
  };

  return (
    <div id="contact-us" className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">

        {/* LEFT SECTION */}
        <div className="flexColStart c-left">
          <span className="orangeText">Get in Touch</span>
          <span className="primaryText">We're Here to Help</span>
          <span className="secondaryText">
            Whether you need assistance, have questions, or want to explore properties,
            our team is available anytime to support you.
          </span>

          <div className="flexColStart contactModes">

            {/* ROW 1 */}
            <div className="flexStart row">

              {/* PHONE CALL */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call Us</span>
                    <span className="secondaryText">+91 96753498</span>
                  </div>
                </div>
                <div className="flexCenter button">
                  Call now
                </div>
              </div>

              {/* AI CHAT */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat with AI</span>
                    <span className="secondaryText">Instant replies</span>
                  </div>
                </div>

                <div className="flexCenter button" onClick={handleChatClick}>
                  Chat now
                </div>
              </div>

            </div>

            {/* ROW 2 */}
            <div className="flexStart row">

              {/* VIDEO CALL */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Video Call</span>
                    <span className="secondaryText">+91 96753498</span>
                  </div>
                </div>
                <div className="flexCenter button">
                  Video Call now
                </div>
              </div>

{/* MESSAGE */}
{/* 📧 EMAIL */}
<div className="flexColCenter mode">
  <div className="flexStart">
    <div className="flexCenter icon">
      <HiChatBubbleBottomCenter size={25} />
    </div>
    <div className="flexColStart detail">
      <span className="primaryText">Email</span>
      <span className="secondaryText">Send Mail</span>
    </div>
  </div>

  {/* Opens Gmail compose in a new tab */}
  <a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=chiragmambore24@gmail.com&su=Property%20Inquiry&body=Hi,%20I%20would%20like%20to%20know%20more%20about%20your%20properties."
    target="_blank"
    rel="noopener noreferrer"
    className="flexCenter button"
    style={{ textDecoration: "none" }}
  >
    Email now
  </a>
</div>



            </div>

          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flexEnd c-right">
          <div className="image-container">
            {/* Use PUBLIC folder path for safe loading */}
            <img src="/contact.jpg" alt="Contact" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
