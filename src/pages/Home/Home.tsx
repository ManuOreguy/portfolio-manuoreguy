import AboutMe from '@/components/AboutMe/AboutMe';
import Contact from '@/components/Contact/Contact';
import Experience from '@/components/Experience/Experience';
import TechStack from '@/components/TechStack/TechStack';

function Home() {
  return (
    <>
      <AboutMe />
      {/* <Experience /> */}
      <TechStack />
      <Contact />
    </>
  );
}

export default Home;
