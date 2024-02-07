import { GITHUB_URL, LINKEDIN_URL } from '@/constants/urls';
import ResumePdf from '@/assets/resume/ResumePDF.pdf';
import AvatarImage from '@/assets/img/avatar/Avatar.jpg';
import githubLogo from '@/assets/logos/githubLogo.png';
import linkedinLogo from '@/assets/logos/linkedinLogo.png';

function AboutMe() {
  const downloadResume = () => {
    window.open(ResumePdf, '_blank');
  };

  return (
    <div className="flex flex-col items-center pb-10">
      <img src={AvatarImage} alt="Avatar" className="rounded-full w-20 h-20 mb-2" />
      <h2 className="text-2xl font-bold text-violet-500">Juan Manuel Oreguy</h2>
      <h4 className="mb-4">Frontend Developer</h4>
      <div className="flex flex-col pb-10">
        <div className="flex justify-between pb-2">
          <button type="button" onClick={() => window.open(`${LINKEDIN_URL}`, '_blank')}>
            <img src={linkedinLogo} alt="Linkedin Logo" className="w-8 h-8" />
          </button>
          <button type="button" onClick={() => window.open(`${GITHUB_URL}`, '_blank')}>
            <img src={githubLogo} alt="GitHub Logo" className="w-8 h-8" />
          </button>
        </div>

        <button type="button" onClick={downloadResume} className="bg-violet-700 text-white px-4 py-2 rounded">
          Resume
        </button>
      </div>
      <div className="max-w-lg">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Vestibulum ac justo eu sem
          feugiat interdum.
        </p>
        <br />
        <p>
          Sed auctor arcu id varius efficitur. Proin id tristique dolor. Aenean bibendum erat id efficitur
          dignissim.
        </p>
        <br />
        <p>
          Nunc euismod risus id ultrices dapibus. Integer tristique sem id odio fermentum, in vulputate ex
          malesuada.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
