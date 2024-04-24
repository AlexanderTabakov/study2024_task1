import React from "react";
import styled from "styled-components";
import Auth from "components/Auth";

const Container = styled.header`
  position: sticky;
  display: flex;
  justify-content: space-between;
  border-bottom: darkblue solid;
`;

const NavBar = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 55px;
`;

const LoginAndSignUp = styled.div`
  display: flex;
  flex-direction: row;
`;

const Header = () => {
  return (
    <header>
      <Container>
        <NavBar>
          <nav> Картинка EaTLY </nav>
          <nav>Menu</nav>
          <nav>Blog</nav>
          <nav>Pricing</nav>
          <nav>Contacts</nav>
        </NavBar>



        <LoginAndSignUp>
          <Auth/>
          <button>Login</button>
          <button>Sign up</button>
        </LoginAndSignUp>
      </Container>
    </header>
  );
};

export default Header;
