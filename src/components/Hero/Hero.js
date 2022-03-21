import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopading>
    <LeftSection>
      <SectionTitle main center>
        Welcome to José María Cabrera <br/>
        Personal Portfolio
      </SectionTitle>
      <SectionText>
        Comming from a highly changing context i'm used to do what i need to do with anything i have at hand. Be certain that whatever needs donde, it will be done.
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
