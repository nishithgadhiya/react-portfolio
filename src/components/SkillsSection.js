import React from "react";
//Import Icons
import html from "../img/html.svg";
import js from "../img/js.svg";
import react from "../img/react.svg";
import css from "../img/css.svg";
import minimal from "../img/minimal.jpg";

//Styles
import { About, Description, Image } from "../styles";
import styled from "styled-components";
import { fade } from "../animation";
import { useScroll } from "./useScroll";

const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <Services variants={fade} animate={controls} initial="hidden" ref={element}>
      <Description>
        <h2>
          Frontend <span>Skills</span>
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={html} alt="icon" />
              <h3>HTML</h3>
            </div>
            <p>HTML</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={css} alt="icon" />
              <h3>CSS</h3>
            </div>
            <p>CSS, SCSS, styledComponents</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={js} alt="icon" />
              <h3>JavaScript</h3>
            </div>
            <p>JavaScript, ES6</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={react} alt="icon" />
              <h3>React</h3>
            </div>
            <p>React, Redux</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={minimal} alt="camera" />
      </Image>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 786px) {
    justify-content: center;
  }
`;

const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;

export default ServicesSection;
