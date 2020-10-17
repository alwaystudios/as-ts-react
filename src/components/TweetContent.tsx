import React, { FunctionComponent } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  text-align: left;
  padding: 1rem;
`;

const Text = styled.div`
  display: flex;
  height: 100%;
  border: 1px solid black;
  padding: 1rem;
  border-radius: 5px;
`;

const Username = styled.div`
  font-weight: bold;
  padding: 0.5rem;
`;

type Props = {
  text: string;
  username: string;
};

export const TweetContent: FunctionComponent<Props> = ({ text, username }) => {
  return (
    <Container>
      <Username>{username}</Username>
      <Text>{text}</Text>
    </Container>
  );
};
