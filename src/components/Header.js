import React, { Component } from 'react';
import logo from '../svg/logo.svg';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from './Button';
import { Icon } from 'react-icons-kit';
import { ic_keyboard_arrow_right } from 'react-icons-kit/md/ic_keyboard_arrow_right';

class Header extends Component {
  render() {
    return (
      <HeaderComponent className="header-container">
        <div className="header-top">
          <Logo src={logo} alt="logo" />
          <NavLink to="/" className="signIn-btn">
            Sign In
          </NavLink>
        </div>
        {/* Header Content */}
        <div className="header-content">
          <Title>Unlimited movies, TV shows, and more.</Title>
          <Subtitle>Watch Anywhere. Cancel Anytime.</Subtitle>
          <Button className="main-offer-btn" primary>
            try it now
            <Icon className="Icon" icon={ic_keyboard_arrow_right} size={37} />
          </Button>
        </div>
      </HeaderComponent>
    );
  }
}

export default Header;

//Logo
const Logo = styled.img`
  width: 10rem;
  height: 3.5rem;
  position: absolute;
  top: 1.1125rem;
  left: 3%;
`;

//Header Container

const HeaderComponent = styled.div`
  .signIn-btn {
    right: 0;
    margin: 1.1125rem 3% 0;
    padding: 0.4375rem 1.0625rem;
    font-weigth: 400;
    line-height: normal;
    border-radius: 0.1875rem;
    font-size: 1rem;
    background: var(--main-red);
    position: absolute;
    translate: transform(-50%, 50%);
    cursor: pointer;
    transition: background 0.2s ease-in;
    &:hover {
      background: var(--main-red-hover);
    }
  }

  /* Header Top */
  .header-top {
    position: relative;
    height: 10rem;
    z-index: 1;
  }
  /* Header Content */
  .header-content {
    width: 65%;
    position: relative;
    margin: 4.5rem auto 0;
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;
    flex-direction: column;
    z-index: 1;
  }

  .Icon svg {
    vertical-align: bottom;
    margin-left: 0.5rem;
  }
`;

//Main Title
const Title = styled.h1`
  margin: 0 auto;
  font-size: 3rem;
  font-weight: 700;
  line-heigth: 1.1rem;
  width: 60%;
`;

//Main Subtitle
const Subtitle = styled.h2`
  margin: 2rem 0 1.875rem;
  font-size: 1.4rem;
  font-weight: 400;
  line-heigth: 1.25rem;
`;
