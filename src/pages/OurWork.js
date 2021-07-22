import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//Images
import htmlcss_img from "../img/htmlcss_img.jpg";
import js_img from "../img/js_img.jpg";
import react_img from "../img/react_img.jpg";
//Animations
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  photoAnimation,
  lineAnimation,
  slider,
  sliderContainer,
} from "../animation";
import { useScroll } from "../components/useScroll";
import ScrollTop from "../components/ScrollTop";

const OurWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  return (
    <Work
      style={{ background: "#fff" }}
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <Project initial="show">
        <motion.h2 variants={fade}>HTML/CSS Projects</motion.h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <Hide>
            <motion.img
              variants={photoAnimation}
              src={htmlcss_img}
              alt="athlete"
            />
          </Hide>
        </Link>
      </Project>
      <Project
        ref={element}
        variants={fade}
        animate={controls}
        initial="hidden"
      >
        <h2>JavaScript Projects</h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/work/the-racer">
          <img src={js_img} alt="theracer" />
        </Link>
      </Project>
      <Project
        ref={element2}
        variants={fade}
        animate={controls2}
        initial="hidden"
      >
        <h2>React Projects</h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/work/good-times">
          <img src={react_img} alt="goodtimes" />
        </Link>
      </Project>
      <ScrollTop />
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  zoom: 0.9;
  @media (max-width: 786px) {
    padding: 2rem 2rem;
  }
  h2 {
    padding: 1rem 0rem;
  }
`;

const Project = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: #fffebf;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;

const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default OurWork;
