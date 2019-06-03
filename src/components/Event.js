import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

const Card = styled.div`
  margin-top: 1.4rem;
  margin-bottom: 3.5rem;
  border-left: .7rem ${props => props.theme.category};
  padding: .7rem 1.4rem;
`;
const BlockPlace = styled.dt`
  font-size: 1.9rem;
  line-height: 2.6rem;
  color: #707070;
`;
const Title = styled.dd`
  margin-top: .7rem;
  margin-left: 0;
  font-size: 2.1rem;
  line-height: 2.94rem;
  font-weight: 700;
`;
const Subtitle = styled.dd`
  margin: 0;
  font-size: 1.6rem;
  line-height: 2.24rem;
  font-style: italic;
  color: #707070;
`;

class Event extends React.Component {
  getThemeColor = (category) => {
    const colors = {
      'break':'solid #fff',
      'main':'solid #585C73',
      'strategy':'solid #20A950',
      'centricity':'solid #E00A81',
      'cx':'solid #2B38A1',
      'travel':'dashed #CACDD5',
      'event':'solid #FFCA5F'
    };
    return {category: colors[category]}
  };
  render() {
    return (
      <>
        <ThemeProvider theme={this.getThemeColor(this.props.category)}>
          <Card>
            <BlockPlace>by 12:00, Marriot Orlando</BlockPlace>
            <Title>Check-in & Registration</Title>
            <Subtitle>Travel to Pega<span className="uppercase">World</span> and register</Subtitle>
          </Card>
        </ThemeProvider>
      </>
    );
  }
}

export default Event;