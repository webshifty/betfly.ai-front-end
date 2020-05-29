/**
 *
 * Header
 *
 */
import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

interface Props {}

export function Header(props: Props) {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Link style={{ color: 'white', textDecoration: 'none' }} to="/">
          <Logo>
            <H1>BETFIX</H1>
          </Logo>
        </Link>
      </LogoContainer>
      <NavigationContainer>
        <SignIn>
          <Link style={{ color: 'white', textDecoration: 'none' }} to="/signin">
            Sign In
          </Link>
        </SignIn>
      </NavigationContainer>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  height: 10vh;
  align-items: center;
  padding: 0px 20px;
  border-bottom: 1px solid lightgray;
  margin-bottom: 10vh;
`;

const LogoContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 50px;
  background: linear-gradient(black, #e50914);
  border-radius: 15px;
  font-weight: 700;
  letter-spacing: 3px;
`;

const SignIn = styled.div`
  background-color: #e50914;
  line-height: normal;
  padding: 7px 17px;
  font-weight: 400;
  font-size: 1rem;
  color: white;
  border-radius: 3px;
`;

const H1 = styled.h1`
  font-size: 16px;
  background: -webkit-linear-gradient(white, wheat);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const NavigationContainer = styled.div`
  display: flex;
  flex: 4;
  align-items: center;
  justify-content: flex-end;
`;
