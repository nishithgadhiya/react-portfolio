import { React } from "react";

import profile from "../img/profile.jpg";
//styles

import { About, Description, Image, Hide } from "../styles";
//Import Framer Motion
import { motion } from "framer-motion";
import { titleAnimation, fade, photoAnimation } from "../animation";
import Wave from "./Wave";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnimation}>I'm </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              <span>Nishith Gadhiya.</span>
              <br /> I am a Software
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>Developer.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Self-taught frontend developer. I love creativity and I think Frontend
          development is one of the way to showcase.
        </motion.p>
        <motion.button variants={fade}>
          <Link to="/contact">Contact Me</Link>
        </motion.button>
      </Description>
      <Image>
        <motion.img
          variants={photoAnimation}
          src={profile}
          alt="guy with a camera"
        />
      </Image>
      <Wave />
    </About>
  );
};

//Styled-components

export default AboutSection;
