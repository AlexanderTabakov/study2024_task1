import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 80px 0 40px;
  background-color: #eaeaea;
  margin-top: auto;
`;

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 720px) {
    .navBarMenu {
      flex-direction: column;
    }
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

  .navBarMenu {
    display: flex;
    flex-direction: row;
    gap: 70px;
  }
`;

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #cbcbcb;
`;

const SocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  div {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }

  p {
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 17px;
    color: #999999;
  }
`;

const Footer = () => {
  return (
    <Container>
      <NavBar>
        <nav>
          <img src="/Logo.svg" alt="" />
        </nav>
        <Nav>
          <div className={"navBarMenu"}>
            <nav>Menu</nav>
            <nav>Blog</nav>
            <nav>Pricing</nav>
            <nav>Contacts</nav>
          </div>
        </Nav>
      </NavBar>

      <SocialMedia>
        <p>© 2023 EATLY All Rights Reserved.</p>
        <div>
          <nav>
            <a href="">
              <img src="/LogoInst.svg" alt="" />
            </a>
          </nav>
          <nav>
            <a href="">
              <img src="/LogoLInk.svg" alt="" />
            </a>
          </nav>
          <nav>
            <a href="">
              <img src="/LogoFB.svg" alt="" />
            </a>
          </nav>
          <nav>
            <a href="">
              <img src="/LogoTwit.svg" alt="" />
            </a>
          </nav>
        </div>
      </SocialMedia>
    </Container>
  );
};

export default Footer;
