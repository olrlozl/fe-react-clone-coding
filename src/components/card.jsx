import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 10px;
  width: 350px;
  box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);
  flex-direction: column;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0,0,0,.125);
  border-radius: 0.25rem;
`;

const Thumbnail = styled.div`
  font-size: 1.125rem;
  text-align: center;
  user-select: none;
  width: 100%;
  color: #fff;
  background-color: rgb(85, 89, 92);
  border-radius: 0.25rem 0.25rem 0 0;
  height: 225px;
  padding: 98px 0;
  box-sizing: border-box;
`;

const Card__body = styled.div`
  flex: 1 1 auto;
  padding: 1.25rem;
  box-sizing: border-box;
`;

const Card__text = styled.p`
  margin-top: 0;
  margin-bottom: 1rem;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

const Card__bottom = styled.div`
  align-items: center;
  justify-content: space-between;
  display: flex;
  box-sizing: border-box;
`;

const Button_group = styled.div`
  position: relative;
  display: inline-flex;
  vertical-align: middle;
`;

const Button = styled.button`
  border-radius: ${(props) => props.borderRadius};
  background-color: transparent;
  font-size: .875rem;
  line-height: 1.5;
  padding: 0.25rem 0.5rem;
  color: #6c757d;
  border-color: #6c757d;
  outline: none;
  font-weight: 400;
  text-align: center;
  cursor: pointer;
`;

const Time = styled.small`
  color: #6c757d;
  font-size: 80%;
  font-weight: 400;
`;

const Card = (props) => {
  return (
    <Wrapper>
      <Thumbnail>Thumbnail</Thumbnail>
      <Card__body>
          <Card__text>
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </Card__text>
          <Card__bottom>
            <Button_group>
              <Button borderRadius="4px 0 0 4px">View</Button>
              <Button borderRadius="0 4px 4px 0">Edit</Button>
            </Button_group>
            <Time>9 mins</Time>
          </Card__bottom>
        </Card__body>
    </Wrapper>
  );
};

export default Card;