import { AsyncState } from "@alwaystudios/as-ui-components";
import React, { FunctionComponent } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 1rem;
  align-items: center;
  border-radius: 5px;
  margin: 1rem;
`;

const booleanToString = (bool: boolean) => (bool ? "true" : "false");

export const State: FunctionComponent<AsyncState> = ({
  state: { data, loading, error, called },
}) => (
  <Container>
    <div>data: {data}</div>
    <div>loading: {booleanToString(loading)}</div>
    <div>error: {booleanToString(error)}</div>
    <div>called: {booleanToString(called)}</div>
  </Container>
);
