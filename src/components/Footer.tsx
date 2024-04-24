import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  display: flex;
  flex-direction: column;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: row;
    gap: 70px;
  }
`;

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: gray solid;
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
`;

const Footer = () => {
  return (
    <Container>
      <NavBar>
        <nav> Картинка EaTLY</nav>
        <Nav>
          <div>
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
            <a href=""></a> Картинка инсты
          </nav>
          <nav>
            <a href=""></a> Картинка ЛинкдИН
          </nav>
          <nav>
            <a href=""></a> Картинка фейсбук
          </nav>
          <nav>
            <a href=""></a> Картинка твитера
          </nav>
        </div>
      </SocialMedia>
    </Container>
  );
};

export default Footer;
