import { FaReact, FaJsSquare, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaArrowDown, FaRegHeart  } from "react-icons/fa";
import { BiLogoTypescript, BiLogoTailwindCss, BiSolidZap } from "react-icons/bi";
import { SiVite, SiReactrouter, SiReacthookform, SiZod, SiFigma } from "react-icons/si";
import { TbBeach, TbBrandFramerMotion, TbTargetArrow } from "react-icons/tb";
import { GoRocket } from "react-icons/go";
import { IoMdCode } from "react-icons/io";
import { RiFolderChartLine } from "react-icons/ri";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { MdArrowOutward, MdMailOutline  } from "react-icons/md";

const techIcons = {
  // Tech Stack Icons
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  BiLogoTypescript,
  BiLogoTailwindCss,
  SiVite,
  SiReactrouter,
  TbBeach,
  SiReacthookform,
  SiZod,
  SiFigma,
  TbBrandFramerMotion,
  FaGithub
} as const;

const heroIcons = {
  FaGithub,
  RiFolderChartLine,
  FaArrowDown,
} as const

const aboutIcons = {
  GoRocket,
  IoMdCode,
  BiSolidZap,
  TbTargetArrow,
} as const

const projectIcons = {
  FiGithub,
  MdArrowOutward
} as const

const footerIcons = {
  FiGithub,
  FiLinkedin,
  MdMailOutline,
  FaRegHeart 
} as const

export default { techIcons, heroIcons, aboutIcons, projectIcons, footerIcons };