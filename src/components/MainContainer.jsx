import React from 'react';
import MainSection from './MainSection';
import KnowledgeSection from './KnowledgeSection';
import PortafolioSection from './PortafolioSection';
import Experience from './ExperienceSection';
import ContactSection from './ContactSection';

const MainContainer = () => (
  <div>
    <MainSection />
    <KnowledgeSection />
    <PortafolioSection />
    <Experience />
    <ContactSection />
  </div>
);

export default MainContainer;
