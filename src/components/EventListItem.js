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
      travel: 'dashed #CACDD5'
    };
    return {category: colors[category]}
  };
  render() {
    return (
      <>
        <ThemeProvider theme={this.getThemeColor(this.props.theme)}>
          <Card>
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
