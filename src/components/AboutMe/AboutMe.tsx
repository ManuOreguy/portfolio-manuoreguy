import { GITHUB_URL, LINKEDIN_URL } from '@/constants/urls';
import ResumePdf from '@/assets/resume/ResumePDF.pdf';
import AvatarImage from '@/assets/img/avatar/Avatar.jpg';

function AboutMe() {
  const downloadResume = () => {
    window.open(ResumePdf, '_blank');
  };

  return (
    <div className="flex flex-col items-center">
      <img src={AvatarImage} alt="Avatar" className="rounded-full w-20 h-20 mb-2" />
      <h2 className="text-2xl font-bold text-violet-500">Juan Manuel Oreguy</h2>
      <h4 className="mb-4">Frontend Developer</h4>
      <div className="flex flex-col pb-10">
        <div className="flex space-x-2 pb-2">
          <a
            href={`${LINKEDIN_URL}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            LinkedIn
          </a>
          <a
            href={`${GITHUB_URL}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white px-4 py-2 rounded"
          >
            GitHub
          </a>
        </div>

        <button type="button" onClick={downloadResume} className="bg-violet-700 text-white px-4 py-2 rounded">
          Resume
        </button>
      </div>
      <div>
        <h1 className="text-lg font-bold text-violet-500 pb-4">About Me</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Vestibulum ac justo eu sem
          feugiat interdum.
        </p>
        <p>
          Sed auctor arcu id varius efficitur. Proin id tristique dolor. Aenean bibendum erat id efficitur
          dignissim.
        </p>
        <p>
          Nunc euismod risus id ultrices dapibus. Integer tristique sem id odio fermentum, in vulputate ex
          malesuada.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
