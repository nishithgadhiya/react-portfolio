import React from "react";
//Page components
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";

//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import ScrollTop from "../components/ScrollTop";

const ABoutUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutSection />
      <SkillsSection />
      <ScrollTop />
    </motion.div>
  );
};

export default ABoutUs;
