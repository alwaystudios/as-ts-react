import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { TweetContent } from "./TweetContent";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid black;
  padding: 1rem;
  align-items: center;
  border-radius: 5px;
  margin: 1rem;
`;

const Img = styled.img`
  border-radius: 5px;
  border: 1px solid black;
  object-fit: cover;
  width: 100px;
  height: 100px;
`;

type Props = {
  image: string;
  text: string;
  username: string;
};

export const Tweet: FunctionComponent<Props> = ({ image, text, username }) => (
  <Container>
    <Img src={image} alt="image" />
    <TweetContent username={username} text={text} />
  </Container>
);
