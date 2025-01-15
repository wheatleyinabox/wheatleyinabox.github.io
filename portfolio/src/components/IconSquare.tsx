/// <reference types="vite-plugin-svgr/client" />
import GitHubLogo from "./../assets/icons/github.svg?react";
import EmailLogo from "./../assets/icons/email.svg?react";
import LinkedinLogo from "./../assets/icons/linkedin.svg?react";
import ResumeLogo from "./../assets/icons/resume.svg?react";
import JavaLogo from "./../assets/icons/java.svg?react";
import PythonLogo from "./../assets/icons/python.svg?react";
import HTMLLogo from "./../assets/icons/html5.svg?react";
import CSSLogo from "./../assets/icons/css3.svg?react";
import JavascriptLogo from "./../assets/icons/javascript.svg?react";
import TypescriptLogo from "./../assets/icons/typescript.svg?react";
import ReactLogo from "./../assets/icons/react.svg?react";
import TailwindLogo from "./../assets/icons/tailwindcss.svg?react";
import GitLogo from "./../assets/icons/git.svg?react";
import FigmaLogo from "./../assets/icons/figma.svg?react";

const ICON_MAP = {
  github: GitHubLogo,
  email: EmailLogo,
  linkedin: LinkedinLogo,
  resume: ResumeLogo,
  java: JavaLogo,
  python: PythonLogo,
  html: HTMLLogo,
  css: CSSLogo,
  js: JavascriptLogo,
  ts: TypescriptLogo,
  react: ReactLogo,
  tailwind: TailwindLogo,
  git: GitLogo,
  figma: FigmaLogo,
} as const;

type IconType = keyof typeof ICON_MAP;

interface IconSquareProps {
  icon: IconType;
  href?: string;
  className?: string;
}

export const IconSquare = ({ icon, href, className = "" }: IconSquareProps) => {
  const onClick = () => {
    if (href) {
      window.open(href, "_blank", "noopener,noreferrer");
    }
  };

  const getIcon = () => {
    const Icon = ICON_MAP[icon];
    return Icon ? <Icon className={`w-8 h-8 ${className}`} /> : null;
  };

  return (
    <div
      onClick={onClick}
      className="flex items-center justify-center p-1 bg-iconBgPrimary rounded cursor-pointer transition-transform hover:animate-bounce"
    >
      {getIcon()}
    </div>
  );
};
