import React from "react";
import styled from "styled-components";
import Card from "./card";

const Wrapper = styled.div`
  background-color:#f8f9fa;
  padding: 3rem 0;
  box-sizing: border-box;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 33.333333%;
  margin: 0 auto;
  padding: 0 15px;
`;

const Album = (props) => {
  return (
    <Wrapper>
      <Container>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </Container>
    </Wrapper>
  );
};

export default Album;