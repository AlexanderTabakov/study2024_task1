import React from "react";
import styled from "styled-components";
import Auth from "components/Auth";
import DropDownMenu from "ui/DropDownMenu";

const Container = styled.header`
  position: fixed;
  width: 100%;
  z-index: 2;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  border-bottom: 2px solid #cbcbcb;

  @media (max-width: 720px) {
    justify-content: end;
  }

  nav {
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 18px;
    color: #606060;
    transition: color 0.2s ease;
  }
  &:hover {
    cursor: pointer;
    color: #6c5fbc;
  }
`;

const NavBar = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 55px;
  align-items: center;

  @media (max-width: 720px) {
    display: none;
  }
`;

const LoginAndSignUp = styled.div`
  display: flex;
  flex-direction: row;
  .dropDown {
    display: none;
  }

  @media (max-width: 720px) {
    .dropDown {
      display: block;
    }
  }
`;

const Header = () => {
  return (
    <header>
      <Container>
        <NavBar>
          <nav>
            <img src="/Logo.svg" alt="" />{" "}
          </nav>
          <nav>Menu</nav>
          <nav>Blog</nav>
          <nav>Pricing</nav>
          <nav>Contacts</nav>
        </NavBar>

        <LoginAndSignUp>
          <Auth />
          <div className={"dropDown"}>
            <DropDownMenu />
          </div>
        </LoginAndSignUp>
      </Container>
    </header>
  );
};

export default Header;
