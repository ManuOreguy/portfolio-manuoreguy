import cssIcon from '@/assets/img/techIcons/css3.svg';
import figmaIcon from '@/assets/img/techIcons/figma.svg';
import gitIcon from '@/assets/img/techIcons/git.svg';
import jsIcon from '@/assets/img/techIcons/javascript.svg';
import tsIcon from '@/assets/img/techIcons/typescript.svg';
import mysqlIcon from '@/assets/img/techIcons/mysql.svg';
import nextjsIcon from '@/assets/img/techIcons/nextjs.svg';
import reactIcon from '@/assets/img/techIcons/react.svg';
import reduxIcon from '@/assets/img/techIcons/redux.svg';
import sassIcon from '@/assets/img/techIcons/sass.svg';
import htmlIcon from '@/assets/img/techIcons/html.svg';
import tailwindIcon from '@/assets/img/techIcons/tailwind.svg';

function TechStack() {
  return (
    <div className="flex flex-col items-center mb-10">
      <p className="text-lg font-bold text-violet-500 pb-4">Tech Stack</p>
      <div className="flex flex-wrap items-center space-x-4">
        <img className="h-10 w-10" src={htmlIcon} alt="HTML" />
        <img className="h-10 w-10" src={cssIcon} alt="CSS" />
        <img className="h-10 w-10" src={sassIcon} alt="Sass" />
        <img className="h-10 w-10" src={tailwindIcon} alt="Tailwind" />
        <img className="h-10 w-10" src={jsIcon} alt="JavaScript" />
        <img className="h-10 w-10" src={reactIcon} alt="React" />
        <img className="h-10 w-10" src={nextjsIcon} alt="Next.js" />
        <img className="h-10 w-10" src={tsIcon} alt="TypeScript" />
        <img className="h-10 w-10" src={reduxIcon} alt="Redux" />
        <img className="h-10 w-10" src={mysqlIcon} alt="MySQL" />
        <img className="h-10 w-10" src={gitIcon} alt="Git" />
        <img className="h-10 w-10" src={figmaIcon} alt="Figma" />
      </div>
    </div>
  );
}

export default TechStack;
