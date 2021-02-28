//Import Images
import htmltravel from "./img/htmltravel.JPG";
import htmlelenajoy from "./img/htmlelenajoy.JPG";
import htmlportfolio from "./img/htmlportfolio.JPG";
import jsphoton from "./img/jsphoton.JPG";
import jscoloors from "./img/jscoloors.JPG";
import jsbeatmaker from "./img/jsbeatmaker.JPG";
import reactwaves from "./img/reactwaves.JPG";
import reactignite from "./img/reactignite.JPG";
import reactcapture from "./img/reactcapture.JPG";

export const projectsState = () => {
  return [
    {
      title: "HTML/CSS ",
      url: "/work/the-athlete",
      projectInfo: [
        {
          link: `https://html-css-travel-agency.netlify.app/`,
          img: htmltravel,
          title: "Travel Agency",
          description:
            "Basic HTML and CSS project. Showcase various CSS properties",
        },
        {
          link: `https://html-css-elena-joy.netlify.app/`,
          img: htmlelenajoy,
          title: "Elena Joy",
          description:
            "Simple website with use of CSS flexbox and grid. Addon with svg animation",
        },
        {
          link: `https://html-css-port-folio.netlify.app/`,
          img: htmlportfolio,
          title: "Portfolio",
          description: "Minimal portfolio with use of SCSS and svg animation",
        },
      ],
    },

    {
      title: "JavaScript ",
      url: "/work/the-racer",
      projectInfo: [
        {
          link: `https://javascript-beat-maker.netlify.app/`,
          img: jsbeatmaker,
          title: "Beat Maker",
          description:
            "Beatmaker using Vanila JS. Manipulation with Media and some eventlisteners",
        },
        {
          link: `https://javascript-coloors.netlify.app/`,
          img: jscoloors,
          title: "Coloors",
          description:
            "Very Interesting project for designers with JS. Showcasing use of local storage",
        },
        {
          link: `https://javascript-photon.netlify.app/`,
          img: jsphoton,
          title: "Photon",
          description: "Simple Image Search and download using Pexels web API",
        },
      ],
    },
    {
      title: "ReactJs ",
      url: "/work/good-times",
      projectInfo: [
        {
          link: `https://reactmusic-play.netlify.app/`,
          img: reactwaves,
          title: "Waves",
          description:
            "React Music Player with library of songs. Styled with SCSS. Use of Async JavaScript, props and various Media EventHandlers",
        },
        {
          link: `https://reactignite.netlify.app/`,
          img: reactignite,
          title: "Ignite",
          description:
            "Game information React app. Showcasing use of JSON Rawg web API, Redux, props, useeffect and other React conepts",
        },
        {
          link: `https://reactcapture.netlify.app/`,
          img: reactcapture,
          title: "Portfolio",
          description:
            "This React Portfolio. Use of States, props, styledComponents, reusable components and animation",
        },
      ],
    },
  ];
};
