import React from 'react'
import styled from 'styled-components'
import Cube from './Cube';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import './canvas.css';

const Section =  styled.div`
  height: 100%;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;

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
  flex: 1;
  touch-action: auto!important;

  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }

`;


const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px) {
    font-size: 60px;
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


const Who = () => {
  const scrollToWorks = () => {
    document.getElementById("works").scrollIntoView({ behavior: "smooth" });
  };
    return (
        <Section id="who">
          <Container>
            <Left>
            <Canvas className="canvas" camera={{ position: [5, 5, 5], fov: 25 }}>
                  <ambientLight intensity={3} />
                  <directionalLight position={[3, 2, 1]} />
                  <Cube />
                  <OrbitControls enableZoom={false} autoRotate enablePan={false} />
            </Canvas>
            </Left>
            <Right>
                <Title>Exploring new perspectives, embracing challenges.</Title>
                <WhatWeDo>
                  <Line src="./img/line.png"/>
                  <Subtitle>What drives me?</Subtitle>
                </WhatWeDo>
                <Desc>Curiosity and a passion for learning.</Desc>
                <Button onClick={scrollToWorks}>See my achievements</Button>
            </Right>
          </Container>
        </Section>
    )
}

export default Who

