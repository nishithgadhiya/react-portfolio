import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { projectsState } from "../projectsState.js";
//Animations
import { motion } from "framer-motion";
import { pageAnimation, lineAnimation } from "../animation";

const ProjectDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [projects, setProjects] = useState(projectsState);
  //const projects = useState(projectsState);
  const [project, setProject] = useState(null);

  //Use Effect
  useEffect(() => {
    const currentProject = projects.filter(
      (stateProject) => stateProject.url === url
    );
    setProject(currentProject[0]);
  }, [projects, url]);
  return (
    <>
      {project && (
        <Details
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <HeadLine>
            <h2>
              <span>{project.title}</span>Projects
            </h2>
          </HeadLine>
          <ProjectInfo>
            {project.projectInfo.map((projectInf) => (
              <div>
                <a href={projectInf.link} target="_blank" rel="noreferrer">
                  <ImageDisplay>
                    <img src={projectInf.img} alt={projectInf.img} />
                  </ImageDisplay>
                </a>
                <ProjectInf
                  title={projectInf.title}
                  description={projectInf.description}
                  key={projectInf.title}
                />
              </div>
            ))}
          </ProjectInfo>
        </Details>
      )}
    </>
  );
};

const Details = styled(motion.div)`
  height: 90vh;
  overflow: hidden;
  color: white;
`;

const HeadLine = styled.div`
  padding-top: 5vh;
  position: relative;
  h2 {
    position: absolute;
    padding-top: 2rem;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  span {
    color: #23d997;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const ProjectInfo = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 786px) {
    display: block;
    margin: 2rem;
  }
`;

const ProjectStyle = styled.div`
  padding: 0rem 2rem;

  h3 {
    font-size: 2rem;
  }
  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
    &:hover {
      width: 0%;
    }
  }
  p {
    padding: 2rem 0rem;
  }
`;

const ImageDisplay = styled.div`
  padding: 2rem;

  img {
    height: 100%;
    width: 60vh;
    &:hover {
      opacity: 0.5;
      transition: all ease-in 0.3s;
    }
  }
`;

//Award Componnet
const ProjectInf = ({ title, description }) => {
  return (
    <ProjectStyle>
      <h3>{title}</h3>
      <motion.div className="line" variants={lineAnimation}></motion.div>
      <p>{description}</p>
    </ProjectStyle>
  );
};

export default ProjectDetail;
