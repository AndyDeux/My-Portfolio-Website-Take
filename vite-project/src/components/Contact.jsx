import { React } from 'react'
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import Map from './Map'

const Section =  styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container =  styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Left =  styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Title =  styled.h1`
  font-weight: 200px;
  margin-bottom: 20px;
`;

const IconLink = styled.a`
  color: inherit; /* Inherit color from parent */
  font-size: 48px; /* Size of the icons */
  margin: 10px; /* Space between icons */
  transition: color 0.3s;

  &:hover {
    color: #da4ea2; /* Change color on hover */
  }
`;



const Right =  styled.div`
  flex: 1;
  user-select: none;
  pointer-events: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Contact = () => {
  return (
    <Section id="contact">
      <Container>
        <Left>
          <Title>Find me on</Title>
            <IconLink href='https://www.instagram.com/andrija.gajic2/' target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </IconLink>
            <IconLink href='https://www.linkedin.com/in/andrija-gaji%C4%87-3a9359297/' target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </IconLink>
            <IconLink href='https://github.com/AndyDeux' target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </IconLink>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  )
}

export default Contact
