import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import './canvas.css';


const Section = styled.div`
  -webkit-tap-highlight-color: transparent;
  height: 100vh;
  scroll-snap-align: center;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const Img = styled.img`
  user-select: none;
  width: 300px;
  height: 300px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;
  -drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;

  @media only screen and (max-width: 768px) {
    width: 200px;
    height: 200px;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const Hero = () => {
  const scrollToWho = () => {
    document.getElementById("who").scrollIntoView({ behavior: "smooth" });
  };
  return (
      <Section id="home">
        <Navbar />
        <Container>
          <Left>
          <Title>Hello 👋, <br></br> I am Andrija</Title>
            <WhatWeDo>
              <Line src="./img/line.png" />
              <Subtitle>What is my motto?</Subtitle>
            </WhatWeDo>
            <Desc>Create. Innovate. Excel.</Desc>
            <Button onClick={scrollToWho}>Learn More About Me</Button>
          </Left>
          <Right>
            <Canvas className="canvas">
              <ambientLight intensity={3} />
              <directionalLight position={[3, 2, 1]} />
              <OrbitControls enableZoom={false} enablePan={false} />
              <Sphere args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial color="#3d1c56" attach="material" distort={0.5} speed={2} />
              </Sphere>
            </Canvas>
            <Img src="./img/andrija.jpg" />
          </Right>
        </Container>
      </Section>
  );
}

export default Hero;
