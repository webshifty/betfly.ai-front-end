/**
 *
 * Login
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectLogin } from './selectors';
import { loginSaga } from './saga';

interface Props {}

export function Login(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: loginSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const login = useSelector(selectLogin);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  return (
    <>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Description of Login" />
      </Helmet>
      <LoginContainer>
        <LoginForm>
          <LoginFormMain>
            <H1>Sign In</H1>
            <EmailInputContainer>
              <EmailInput placeholder="Email"></EmailInput>
            </EmailInputContainer>
            <PasswordInput type="password" placeholder="Password" />
            <SignInButton>Sign In</SignInButton>
          </LoginFormMain>
        </LoginForm>
      </LoginContainer>
    </>
  );
}

const SignInButton = styled.button`
border-radius: 4px;
font-size: 16px;
font-weight: 700;
margin: 24px 0 12px;
width: 100%;
    max-width: 100%;
    padding: 16px;
    background: #e50914;
    display: inline-block;
    min-width: 98px;
    min-height: 37px;
    line-height: 1em;
    box-shadow: 0 1px 0 rgba(0,0,0,.55);
    position: relative;
    color: white;
    text-align: center;
    cursor: pointer;
}
`;

const PasswordInput = styled.input`
  background: #333;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  border: 0;
  color: #fff;
  height: 50px;
  line-height: 50px;
  padding: 16px 20px 0;
  width: 100%;
  box-shadow: none;
  box-sizing: border-box;
  font-size: 16px;
  display: block;
  -webkit-appearance: none;
`;

const EmailInput = styled.input`
  background: #333;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  border: 0;
  color: #fff;
  height: 50px;
  line-height: 50px;
  padding: 16px 20px 0;
  width: 100%;
  box-shadow: none;
  box-sizing: border-box;
  font-size: 16px;
  display: block;
  -webkit-appearance: none;
`;

const LoginContainer = styled.div`
  margin: 0 auto -236px;
  min-height: 100vh;
  background-color: transparent;
  max-width: 450px;
  color: #333;
  margin: 0 auto;
  padding: 0 5%;
`;

const EmailInputContainer = styled.div`
  padding-bottom: 16px;
  max-width: 100%;
  position: relative;
`;

const LoginFormMain = styled.div`
  flex-grow: 1;
  -webkit-box-flex: 1;
`;

const H1 = styled.h1`
  color: #fff;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 28px;
`;

const LoginForm = styled.div`
  min-height: 400px;
  padding: 60px 68px 40px;
  margin-bottom: 90px;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  margin: 0;
  width: 100%;
  min-width: 380px;
`;
