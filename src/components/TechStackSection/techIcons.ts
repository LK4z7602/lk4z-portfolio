import { FaReact, FaJsSquare, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { BiLogoTypescript, BiLogoTailwindCss } from "react-icons/bi";
import { SiVite, SiReactrouter, SiReacthookform, SiZod, SiFigma } from "react-icons/si";
import { TbBeach, TbBrandFramerMotion } from "react-icons/tb";

export const techIcons = {
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
} as const;

export type TechIconKey = keyof typeof techIcons;
