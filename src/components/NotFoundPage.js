import React from 'react';
import styled from 'styled-components';

const Main = styled.main`
  padding-top: 10rem;
`;

class NotFoundPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Main>
        <h1>Page could not be located.</h1>
        <h2>Please ensure the correct URL was used.</h2>
      </Main>
    )
  }
}

export default NotFoundPage;
