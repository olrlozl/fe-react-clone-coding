import React from "react";
import styled from "styled-components";

const Jumbotron = styled.div`
  padding: 48px 32px;
  width: 100%;
  box-sizing: border-box;
`;

const Container = styled.div`
  max-width: 40rem;
  margin: 0 auto;
`;

const Heading = styled.div`
  font-size: 2.5rem;
  display: block;
  text-align: center;
  margin-bottom: 0.5rem;
  font-weight: 300;
`;

const Text = styled.div`
  color: #6c757d;
  font-size: 1.25rem;
  font-weight: 300;
  text-align: center;
  margin-bottom: 1rem;
`;

const Button_Container = styled.div`
  text-align: center;
`;

const Button_First = styled.div`
  display: inline-block;
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  margin: 0.5rem;
  cursor: pointer;
`;

const Button_Second = styled.div`
  display: inline-block;
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  margin: 0.5rem;
  cursor: pointer;
`;

const Example = (props) => {
  return (
    <Jumbotron>
      <Container>
        <Heading>Album example</Heading>
        <Text>
          Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.
        </Text>
        <Button_Container>
          <Button_First>Main call to action</Button_First>
          <Button_Second>Secondary action</Button_Second>
        </Button_Container>
      </Container>
    </Jumbotron>
  );
};

export default Example;