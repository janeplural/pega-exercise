import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const Container = styled.div`
  margin-bottom: 3.5rem;
  padding-right: 2.1rem;
  padding-left: 2.1rem;
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 992px) {
    flex-direction: column;
    position: sticky;
    top: 100px;
    align-self: flex-start;
  }
`
const HelperText = styled.p`
  width: 100%;
  font-size: 1.4rem;
  color: #5C5E70;
`
const HotLink = styled(Link)`
  margin-right: 1.4rem;
  margin-bottom: 1.4rem;
  border: 1px solid #295ED9;
  border-radius: .3rem;
  padding: 1.1rem 1.4rem;
  color: #295ED9;
  font-size: 1.6rem;
  line-height: 2.1rem;
  text-transform: capitalize;
  :hover {
    cursor: pointer;
    box-shadow: .3rem .1rem .9rem .2rem rgba(16,19,46,.2);
  }
  :focus {
    color: #10132E;
    border-color: #10132E;
    background-color: #EAEFFA;
    outline: none;
    box-shadow: .3rem .1rem .9rem .2rem rgba(16,19,46,.2);
  }
`

function HotLinks() {
  const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday'];
  const addMatchStyle = (e) => {
    document.getElementById(`${e}-link`).classList.add('viewing');
  }
  const removeMatchStyle = (e) => {
    document.getElementById(`${e}-link`).classList.remove('viewing');
  }
  
  return (
    <Container>
      <HelperText>Jump to day:</HelperText>
      {
        days.map((day, i) => {
          return (
            <HotLink
              key={i+day}
              id={`${day}-link`}
              spy={true}
              activeClass="active"
              to={day}
              smooth={true}
              offset={-95}
              duration={1000}
              delay={100}
              onSetActive={(e) => addMatchStyle(e)}
              onSetInactive={(e) => removeMatchStyle(e)}
            >
              {`${day.substring(0,3)}, June ${i+3}`}
            </HotLink>
          )
        })
      }
  </Container>
);}

export default HotLinks;
