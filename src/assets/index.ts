import projectHub from "./projecthub.png";
import facebook from "./facebook.svg";
import twitter from "./twitter.svg";
import linkedin from "./linkedin.svg";
import instagram from "./instagram.svg";
import hero from "./hedaer-bg-2.jpg";
import html from "./html.png";
import css from "./css.png";
import js from "./javascript.png";
import tailwind from "./tailwind.png";
import sass from "./sass.png";
import react from "./react.png";
import typescript from "./typescript.png";
import wordpress from "./wordpress.png";
import nextjs from "./nextjs.png";
import chemistry from "./chemistry.svg";
import teaching from "./teacher-explaining-while-sitting-on-armchair.png";
import redux from "./redux.svg";
import projectOverlay from "./hedaer-bg-3.jpg";
import github from "./github.svg";
import logo from "./logo-2.png";
import logo2 from "./logo.png";
import personalImage3 from "./meBack.jpg";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import FlightIcon from "@mui/icons-material/Flight";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import SchoolIcon from "@mui/icons-material/School";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import gretch from "./gretch.png";
import { SvgIconProps } from "@mui/material";

export {
  facebook,
  twitter,
  linkedin,
  instagram,
  hero,
  html,
  css,
  js,
  tailwind,
  sass,
  react,
  typescript,
  nextjs,
  chemistry,
  teaching,
  projectOverlay,
  projectHub,
  github,
  logo,
  logo2,
  personalImage3,
  gretch,
};
export const icons = [
  { icon: html, title: "html" },
  { icon: css, title: "css" },
  { icon: js, title: "javascript" },
  { icon: tailwind, title: "tailwind css" },
  { icon: sass, title: "sass" },
  { icon: react, title: "react.js" },
  { icon: typescript, title: "typescript" },
  { icon: wordpress, title: "wordpress" },
  { icon: nextjs, title: "next.js" },
  { icon: chemistry, title: "chemistry" },
  { icon: teaching, title: "teaching" },
  { icon: redux, title: "redux toolkit" },
];
export const someProjects = [
  {
    name: "ProjectHub",
    link: "",
    github: "",
    image: projectHub,
  },
  {
    name: "African Wears",
    link: "",
    github: "",
    image: projectHub,
  },
  {
    name: "Olamide Estate",
    link: "",
    github: "",
    image: projectHub,
  },
  {
    name: "Soundify",
    link: "",
    github: "",
    image: projectHub,
  },
  {
    name: "Kikka's Fashion",
    link: "",
    github: "",
    image: projectHub,
  },
  {
    name: "PsyTest",
    link: "",
    github: "",
    image: projectHub,
  },
];

export type Interest = {
  text: string;
  icon: React.ComponentType<SvgIconProps>;
};

export const interests: Interest[] = [
  {
    icon: AutoStoriesIcon,
    text: "Reading",
  },
  {
    icon: AudiotrackIcon,
    text: "Music",
  },
  {
    icon: FlightIcon,
    text: "Travel",
  },
  {
    icon: CastForEducationIcon,
    text: "Teaching",
  },
  {
    icon: SchoolIcon,
    text: "Learning",
  },
  {
    icon: LiveTvIcon,
    text: "Movies",
  },
];
