import React from "react"
import styled from "styled-components";
import { AiOutlineCamera } from 'react-icons/ai';
import { RxHamburgerMenu } from 'react-icons/rx';


const NavBar = styled.div`
  width: 100%;
  height: 56px;
  background-color: rgb(52, 58, 64);
  box-sizing: border-box;
  display: flex;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  justify-content: space-between;
  margin: auto;
`;

const Logo = styled.div`
  color: white;
  padding: 0.3125rem 0;
  cursor: pointer;
  align-items: center;
`;

const Logo__Album = styled.strong`
  font-size: 1.25rem;
  margin-left: 0.5rem;
`;

const Menu = styled.div`
  padding: 0.25rem 0.75rem;
  font-size: 1.25rem;
  line-height: 1;
  color: rgba(255,255,255,.5);
  border: 1px solid rgba(255,255,255,.1);
  border-radius: 0.25rem;
  cursor: pointer;
`;

const Header = (props) => {
  return (
    <>
      <NavBar>
        <Container>
          <Logo>
            <AiOutlineCamera size='20px'/>
            <Logo__Album>Album</Logo__Album>
          </Logo>
          <Menu>
            <RxHamburgerMenu size='30px'/>
          </Menu>
        </Container>
      </NavBar>
    </>
  );
};

export default Header;