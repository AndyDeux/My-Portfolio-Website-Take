import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;
const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
  height: 50px;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
  margin: 0 20px;
  cursor: pointer;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.img`
  height: 20px;
  margin-right: 20px;
  cursor: pointer;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px 20px;
  background-color: #fff;
  color: rebeccapurple;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`;

const Navbar = () => {
  const scrollToHome = () => {
    document.getElementById("home").scrollIntoView({ behavior: "smooth" });
  };
  const scrollToWho = () => {
    document.getElementById("who").scrollIntoView({ behavior: "smooth" });
  };
  const scrollToWorks = () => {
    document.getElementById("works").scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/neural.png" />
          <List>
            <ListItem onClick={scrollToHome}>Section One</ListItem>
            <ListItem onClick={scrollToWho}>Section Two</ListItem>
            <ListItem onClick={scrollToWorks}>Works</ListItem>
          </List>
        </Links>
        <Icons>
          <Icon src="./img/search.png" />
          <Button onClick={scrollToContact}>Contact me</Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
