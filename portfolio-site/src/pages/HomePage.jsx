import Hero from '../components/sections/Hero';
import WorkExperience from '../components/sections/WorkExperience';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import Skills from '../components/sections/Skills';
import Education from '../components/sections/Education';
import Certifications from '../components/sections/Certifications';
import About from '../components/sections/About';
import Contact from '../components/sections/Contact';

const HomePage = () => {
  return (
    <>
      <Hero />
      <WorkExperience />
      <FeaturedProjects />
      <Skills />
      <Education />
      <Certifications />
      <About />
      <Contact />
    </>
  );
};

export default HomePage;
