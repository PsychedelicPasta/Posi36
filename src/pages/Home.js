import React, { useRef, useEffect } from 'react';
import tw from 'twin.macro';
import Nav from '../components/navigation.js';

const Container = tw.div`w-full h-full overflow-y-scroll`;
const Section = tw.div`h-screen flex flex-col items-center justify-center relative snap-start`;
const GradientBackground = tw.div`w-full h-full absolute inset-0 z-[-1]`;

const Title = tw.h1`text-4xl font-extrabold text-black mb-4 text-center`;
const SubTitle = tw.p`text-lg font-semibold text-black text-center`;

function Home() {

    const sections = [
        {
          id: 1,
          title: 'Posi 36',
          SubTitle: 'Content for Section 1',
          gradient: 'linear-gradient(to right, #ff7e5f, #ff4e98)',
        },
        {
          id: 2,
          title: 'Services',
          SubTitle: 'Content for Section 2',
          gradient: 'linear-gradient(to right, #74ebd5, #ACD2E0)',
        },
        {
          id: 3,
          title: 'Clients',
          SubTitle: 'Content for Section 3',
          gradient: 'linear-gradient(to right, #ffaa91, #ffc0cb)',
        },
        {
            id: 4,
            title: 'Work with us',
            SubTitle: 'Content for Section 3',
            gradient: 'linear-gradient(to right, #ffaa91, #ffc0cb)',
          },
      ];

    const sectionRefs = useRef(sections.map(() => React.createRef()));
  
    const scrollToSection = (sectionIndex) => {
      sectionRefs.current[sectionIndex].current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    };

  return (
    <Container>
      <Nav onLinkClick={scrollToSection} />
      {sections.map((section, index) => (
        <Section key={section.id} ref={sectionRefs.current[index]}>
          <GradientBackground style={{ background: section.gradient }} />
          <Title>{section.title}</Title>
          <SubTitle>{section.SubTitle}</SubTitle>
        </Section>
      ))}
    </Container>
  );
}

export default Home;
