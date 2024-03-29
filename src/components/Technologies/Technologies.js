import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider/>
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      The last 3 years I learned an interesting range of technologies. From Games, Web, Desktop and Web3
    </SectionText>
    <List>
      <ListItem>
        <DiReact size='3rem'/>
        <ListContainer>
          <ListTitle>Front End</ListTitle>
          <ListParagraph>
            Experiencia with <br/>
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size='3rem'/>
        <ListContainer>
          <ListTitle>Back End</ListTitle>
          <ListParagraph>
            Experiencia with <br/>
            Node.js and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size='3rem'/>
        <ListContainer>
          <ListTitle>Cloud</ListTitle>
          <ListParagraph>
            Experiencia with <br/>
            AWS and Azure
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
