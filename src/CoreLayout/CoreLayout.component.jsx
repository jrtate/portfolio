import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useInView } from 'react-intersection-observer';
import css from './CoreLayout.module.scss';
import { NavItems } from './CoreLayout.constants';
import Toolbar from '../components/Toolbar/Toolbar.component';
import Intro from '../Intro/Intro.component';
import About from '../About/About.component';
import Skills from '../Skills/Skills.component';
import Projects from '../Projects/Projects.component';
import Testimonials from '../Testimonials/Testimonials.component';
import FunFacts from '../FunFacts/FunFacts.component';
import Connect from '../Connect/Connect.component';

const Index = () => {
  const observerThreshold = 0.5;
  const [introRef, introInView] = useInView({ threshold: observerThreshold });
  const [aboutRef, aboutInView] = useInView({ threshold: observerThreshold });
  const [skillsRef, skillsInView] = useInView({ threshold: observerThreshold });
  const [projectsRef, projectsInView] = useInView({ threshold: observerThreshold });
  const [testimonialsRef, testimonialsInView] = useInView({ threshold: observerThreshold });
  const [funFactsRef, funFactsInView] = useInView({ threshold: observerThreshold });
  const [connectRef, connectInView] = useInView({ threshold: observerThreshold });
  const [activeSection, setActiveSection] = useState('intro');

  useEffect(() => {
    if (introInView) { setActiveSection('intro'); }
    if (aboutInView) { setActiveSection('about'); }
    if (skillsInView) { setActiveSection('skills'); }
    if (projectsInView) { setActiveSection('projects'); }
    if (testimonialsInView) { setActiveSection('testimonials'); }
    if (funFactsInView) { setActiveSection('funfacts'); }
    if (connectInView) { setActiveSection('connect'); }
  });

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <div className={css.appContainer} id="corelayout">

      {/* TOOLBAR */}
      <Toolbar navItems={NavItems} activeSection={activeSection} />

      {/* BODY CONTENT */}
      <Intro
        pageId="intro"
        className={css.bodyContent}
        ref={introRef}
      />

      <About
        pageId="about"
        className={css.bodyContent}
        ref={aboutRef}
      />

      <Skills
        pageId="skills"
        className={css.bodyContent}
        ref={skillsRef}
      />

      <Projects
        pageId="projects"
        className={css.bodyContent}
        ref={projectsRef}
      />

      <Testimonials
        pageId="testimonials"
        className={css.bodyContent}
        ref={testimonialsRef}
      />

      <FunFacts
        pageId="funfacts"
        className={css.bodyContent}
        ref={funFactsRef}
      />

      <Connect
        pageId="connect"
        className={css.bodyContent}
        ref={connectRef}
      />

    </div>
  );
};

export default Index;
