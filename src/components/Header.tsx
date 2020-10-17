import React from "react";
import styled from "styled-components";

const Container = styled.header`
  background-color: #1da1f2;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  font-size: calc(10px + 2vmin);
  color: white;
  padding: 0.5rem;

  & .headline {
    margin: 0 2rem 0 2rem;
  }
`;

const Img = styled.img`
  border-radius: 50%;
`;

export const Header = () => (
  <Container>
    <Img
      src="https://media-exp1.licdn.com/dms/image/C4D03AQG1VRjvr-JfHw/profile-displayphoto-shrink_100_100/0?e=1607558400&v=beta&t=qauuybGQWNCBsM_kgLdn5F_bxW23yrMRpEleKesYSlQ"
      alt="profile"
    />
    <div className="headline">Twitter feed - Gary Alway</div>
  </Container>
);
