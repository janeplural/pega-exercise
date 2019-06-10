import React, { useState }from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logoMobile from '../images/logo-mobile.svg';
import logoDesktop from '../images/logo-desktop.svg';

const Navbar = styled.header`
  width: 100vw;
  min-height: 6.2rem;
  position: fixed;
  top: 0;
  padding-top: 1vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #1F2555;
  @media (max-width: 576px) {
    white-space: nowrap;
    overflow: visible;
  }
  @media (min-width: 992px) {
    align-items: center;
  }
`;
const LogoAddition = styled.div`
  margin-right: 10%;
  display: flex;
  align-items: center;
  @media (min-width: 576px) {
    margin-right: 33vw;
  }
`;
const PWDetails = styled.p`
  margin-left: 7px;
  font-size: 12px;
  line-height: ${12 * 1.4}px;
  color: #FEB53A;
`;
const Wrap = styled.div`
  min-width: 15rem;
  display: flex;
  flex-direction: column;
  @media (min-width: 992px) {
    flex-direction: row;
  }
`
const NavMain = styled.nav`
  display: ${props => props.open ? 'flex' : 'none'};
  flex-direction: column;
  @media (min-width: 992px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`
const SrOnly = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  border: 0;
`
const ToggleButton = styled.button`
  width: 5rem;
  height: 6.2rem;
  margin-left: 9.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  :focus {
    outline: none;
  }
  @media (min-width: 992px) {
    display: none;
  }
`
const Bar = styled.div`
  width: 3rem;
  height: .3rem;
  background-color: #fff;
  ${ToggleButton}:focus & {
    background-color: ${props => props.open ? '#FEB53A' : '#fff'};
  }
  ${ToggleButton}:focus &::before,
  ${ToggleButton}:focus &::after  {
    background-color: ${props => props.open ? '#FEB53A' : '#fff'};
  }
  ::before,
  ::after {
    background-color: #fff;
    content: '';
    display: block;
    height: .3rem;
    width: 3rem;
  }
  ::before {
    transform: translateY(-1rem);
  }
  ::after {
    transform: translateY(0.7rem);
  }
`
const NavMainLink = styled(Link)`
  margin: 1.4rem 2.8rem 1.2rem;
  font-size: 1.6rem;
  text-align: right;
  font-weight: 400;
  text-decoration: none;
  color: #fff;
`
const RegisterButton = styled.button`
  width: 12.2rem;
  margin-top: 1.4rem;
  margin-bottom: 2.1rem;
  margin-left: 1.4rem;
  border: none;
  border-radius: .3rem;
  padding: 1.4rem 2.8rem;
  background-color: #FEB53A;
  color: #1F2555;
  font-size: 1.6rem;
  font-weight: 700;
`
const ExtLink = styled.a`
  cursor: pointer;
`

export default function Header() {
  const [open, toggleNav] = useState(false);

  return (
    <Navbar>
      <LogoAddition>
        <ExtLink href="https://www.pega.com/">
          <SrOnly className="sr-only">Go to Pega's main website</SrOnly>
          <picture>
            <source media="(max-width: 576px)" srcSet={logoMobile}></source>
            <source media="(min-width: 577px)" srcSet={logoDesktop}></source>
            <img src={logoMobile} alt="Pega logo"/>
          </picture>
        </ExtLink>
        <PWDetails>Pega<span className="uppercase">world</span><br />June 3-7, 2019</PWDetails>
      </LogoAddition>
  
      <Wrap>
        <ToggleButton onClick={() => toggleNav(prevOpen => !prevOpen)}>
          <SrOnly className="sr-only">Open main menu</SrOnly>
          <Bar aria-hidden="true" open={open}></Bar>
        </ToggleButton>
  
        <NavMain open={open}>
          <NavMainLink to="/" onClick={() => toggleNav(prevOpen => !prevOpen)}>Home</NavMainLink>
          <NavMainLink to="/design-track" onClick={() => toggleNav(prevOpen => !prevOpen)}>Design Track</NavMainLink>
          <RegisterButton>Register</RegisterButton>
        </NavMain>
      </Wrap>
    </Navbar>
  );
}

