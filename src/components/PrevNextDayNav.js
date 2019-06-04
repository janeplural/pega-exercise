import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.div`
  margin: 0 auto 14rem;
  width: 90vw;
  max-width: 99.2rem;
  display: flex;
  flex-direction: ${props => props.noPrev ? 'row-reverse' : 'initial'}
  justify-content: space-between;
`
const PageLink = styled(Link)`
  font-size: 1.6rem;
  line-height: 2.1rem;
  text-decoration: none;
`

const PrevNextDayNav = (props) => (
  <NavContainer noPrev={!props.prev}>
    {props.prev && <PageLink to={props.prev}>View previous day</PageLink>}
    {props.next && <PageLink to={props.next}>View next day</PageLink>}
  </NavContainer>
);

export default PrevNextDayNav;