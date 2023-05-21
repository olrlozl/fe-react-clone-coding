import React from "react";
import styled from "styled-components";
import Card from "./card";

const Wrapper = styled.div`
  background-color:#f8f9fa;
  padding: 3rem 0;
  box-sizing: border-box;
`;

const Container = styled.div`
  max-width: 1140px;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
  box-sizing: border-box;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
  box-sizing: border-box;
`;

const Col = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 33.333333%;
  max-width: 33.333333%;
  position: relative;
  width: 100%;
  padding: 0 15px;
  box-sizing: border-box;
`;

const Album = (props) => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Col>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Album;