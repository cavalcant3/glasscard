import React from 'react';
import perfil from '../images/perfil.jpg';
import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring'


const Container = styled(animated.div)`
  display: inline-block;
  padding: 3em;
  background: #c7d2fe66;
  border-radius: 10px;
  z-index: 1;
  position: relative;
  backdrop-filter: blur(10px);  /* Meu navegador não suporta*/
  border: 2px solid transparent;
  background-clip: border-box;
  cursor: pointer;
`;


const StyledImg = styled.img`
  width: 200px;
  height: auto;
  border: 2px solid #000;
  border-radius: 50%;
`;

const StyledH1 = styled.h1 `
  line-height: 1.5;
  letter-spacing: 1.15;
  font-family: "sans-serif";

`;

const StyledH3 = styled.h1 `
  line-height: 1.5;
  letter-spacing: 1.15;
  font-family: "sans-serif";
  font-size: 20px;

`;


const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]

const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const GlassCard = () => {
  const [props, set] = useSpring(()=>({ xys:[0,0, 1], config: config.default}) )
  return (
    <Container
      onMouseMove={({clientX: x, clientY: y}) =>(set({xys: calc(x, y)})) }
      onMouseLeave={()=>set({xys:[0,0,1]})}
      style={{
        transform: props.xys.to(trans)  //o metodo correto era ...xys.interpolate... o react deixou pra trás
      }}
    >
     <StyledImg src={perfil} />
      <StyledH1>Matheus Cavalcante</StyledH1>
      <br />
      <StyledH3>Desenvolvedor front-end</StyledH3>
      <StyledH3>Estudante de ADS</StyledH3>
    </Container>
  );
}

export default GlassCard;