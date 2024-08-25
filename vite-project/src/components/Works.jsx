import React, { useState } from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';
import styled, { keyframes } from "styled-components";
import Education from "./Education";
import Certificates from "./Certificates";
import Activities from "./Activities";
import Music from './Music';
import BooksList from './BooksList';

const data = [
  "Education",
  "Certificates",
  "Activities",
  "Music",
  "Books"
];

const moveText = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  color: black;
  font-size: 14px;
  font-weight: 300;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    height: 30%;
    padding: 20px;
    justify-content: center;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.li`
  user-select: none;
  font-size: 90px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    font-size: 24px;
    color: white;
    -webkit-text-stroke: 0px;
  }

  &:after {
    content: "${(props) => props.$text}"; 
    position: absolute;
    top: 0;
    left: 0;
    color: pink;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    &:after {
      animation: ${moveText} 0.5s linear both;
    }
  }
`;

const ArrowButton = styled(FaArrowCircleRight)`
  user-select: none;
  margin-left: 10px;
  color: white;
  font-size: 70px;
  cursor: pointer;
  opacity: ${(props) => (props.active === "true" ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
  pointer-events: ${(props) => (props.active === "true" ? "auto" : "none")};

  z-index: 10;

  @media only screen and (max-width: 768px) {
    font-size: 24px;
    color: white;
    -webkit-text-stroke: 0px;
  }

  opacity: ${(props) => (props.active === "true" ? 1 : 0.3)};
`;


const Right = styled.div`
  flex: 1;
`;

const Works = () => {
  const [work, setWork] = useState("Education");

  const scrollToWho = () => {
    document.getElementById("who").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Section id="works">
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem key={item} $text={item} onClick={() => setWork(item)}>
                {item}
                <ArrowButton
                  active={work === item ? "true" : "false"}
                  onClick={scrollToWho}
                />
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
          {work === "Education" ? (
            <Education />
          ) : work === "Certificates" ? (
            <Certificates />
          ) : work === "Activities" ? (
            <Activities />
          ) : work === "Music" ? (
            <Music />
          ) : (
            <BooksList />
          )}
        </Right>
      </Container>
    </Section>
  );
};

export default Works;
