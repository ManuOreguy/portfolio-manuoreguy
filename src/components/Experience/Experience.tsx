import ExperienceListItem from '@/ExperienceListItem/ExperienceListItem';
import VerticalDivider from '@/utils/VerticalDivider';

function Experience() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-lg font-bold text-violet-500 pb-5">Experience</h2>
      <div className="flex">
        <VerticalDivider />
        <div className="pl-5">
          <ExperienceListItem description={[]} name="" position="" thumbnail="" />
        </div>
      </div>
    </div>
  );
}

export default Experience;
