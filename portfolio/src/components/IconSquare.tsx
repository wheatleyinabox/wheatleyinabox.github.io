/// <reference types="vite-plugin-svgr/client" />
import GitHubLogo from './../assets/icons/github.svg?react';
import EmailLogo from './../assets/icons/email.svg?react';
import LinkedinLogo from './../assets/icons/linkedin.svg?react';
import ResumeLogo from './../assets/icons/resume.svg?react';

type IconType = 'github' | 'email' | 'linkedin' | 'resume';

interface IconSquareProps {
  icon: IconType;
  href?: string;
  className?: string;
}

export const IconSquare = ({ icon, href, className = '' }: IconSquareProps) => {
  const onClick = () => {
    if (href) {
      window.open(href, '_blank', 'noopener,noreferrer');
    }
  }
  
  const getIcon = () => {
    const svgProps = {
      className: `w-8 h-8 ${className}`,
    };

    switch (icon) {
      case 'github':
        return <GitHubLogo {...svgProps}/>
      case 'email':
        return <EmailLogo {...svgProps}/>
      case 'linkedin':
        return <LinkedinLogo {...svgProps}/>
      case 'resume':
        return <ResumeLogo {...svgProps}/>
      default: 
        return null;
    }
  };

  return (
    <div onClick={onClick} className="flex items-center justify-center p-1 bg-iconBgPrimary rounded">
      {getIcon()}
    </div>
  );
}
