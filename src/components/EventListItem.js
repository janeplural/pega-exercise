import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

export const Card = styled.div`
  margin-top: ${props => (props.category === 'break') ? '0' : '1.4rem'};
  margin-bottom: ${props => (props.category === 'break') ? '3.5rem' : '4.9rem'};
  border-left: .7rem ${props => props.theme.category};
  padding: .7rem 1.4rem;
  &:last-of-type {
    margin-bottom: 7.7rem;
  }
`;
export const BlockPlace = styled.dt`
  font-size: 1.9rem;
  line-height: 2.6rem;
  color: #707070;
`;
export const Title = styled.dd`
  margin-top: .7rem;
  margin-left: 0;
  font-size: 2.1rem;
  line-height: 2.94rem;
  font-weight: 700;
`;
export const Subtitle = styled.dd`
  margin: 0;
  font-size: 1.6rem;
  line-height: 2.24rem;
  font-style: italic;
  color: #707070;
`;

class EventListItem extends React.Component {
  getThemeColor = (category) => {
    const colors = {
      break: 'solid #fff',
      centricity: 'solid #E00A81',
      cx: 'solid #2B38A1',
      main: 'solid #585C73',
      event: 'solid #FFCA5F',
      info: 'solid #A9D400',
      mobile: 'solid #FD6000',
      pegaworld: 'solid #295ED9',
      strategy: 'solid #20A950',
      travel: 'dashed #CACDD5',
      ucd: 'solid #E10B81'
    };
    return {category: colors[category]}
  };
  render() {
    return (
      <>
        <ThemeProvider theme={this.getThemeColor(this.props.theme)}>
          <Card aria-label={this.props.theme} category={this.props.theme}>
            <BlockPlace>{this.props.block}{this.props.place && `, ${this.props.place}`}</BlockPlace>
            <Title>{this.props.title}</Title>
            {this.props.subtitle && <Subtitle>{this.props.subtitle}</Subtitle>}
          </Card>
        </ThemeProvider>
      </>
    );
  }
}

export default EventListItem;
