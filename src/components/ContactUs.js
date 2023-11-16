import React from "react";
import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { fade } from "../animation";
import { useScroll } from "./useScroll";
//ICONS
import github from "../img/github.svg";
import linkedin from "../img/linkedin.svg";
import insta from "../img/insta.svg";

const ContactUs = () => {
  const [element, controls] = useScroll();
  return (
    <Faq variants={fade} animate={controls} ref={element} initial="hidden">
      <h2>Get in touch.</h2>
      <AnimateSharedLayout>
        <Toggle title="Send me a Email">
          <div className="answer">
            <p>at gadhiyanishith@gmail.com</p>
          </div>
        </Toggle>

        <Toggle title="Social Media">
          <div className="answer">
            <div className="icon">
              <a
                href="https://www.linkedin.com/in/nishith-gadhiya"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedin} alt="linkedin" />
              </a>
              <a
                href="https://github.com/nishithgadhiya"
                target="_blank"
                rel="noreferrer"
              >
                <img src={github} alt="github" />
              </a>
              <a
                href="https://www.instagram.com/nishith_gadhiya/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={insta} alt="insta" />
              </a>
            </div>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #23d997;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      font-size: 1.5rem;
      padding: 1rem 0rem;
    }
    .icon {
    display: flex;
    align-items: center;
    img{
      height:5rem;
      width:5rem;
    }
  }
`;

export default ContactUs;
