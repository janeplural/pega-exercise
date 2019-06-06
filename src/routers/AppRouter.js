import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import styled from 'styled-components';
import GlobalStyle from '../themes/GlobalStyle';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import MainPage from '../components/MainPage';
import SundayPage from '../components/SundayPage';
import MondayPage from '../components/MondayPage';
import TuesdayPage from '../components/TuesdayPage';
import WednesdayPage from '../components/WednesdayPage';
import ThursdayPage from '../components/ThursdayPage';
import NotFoundPage from '../components/NotFoundPage';

const TopButton = styled.button`
  position: fixed;
  bottom: 5rem;
  right: 5rem;
  border-radius: .3rem;
  padding: 1.4rem;
  color: #00647D;
  font-size: 1.8rem;
  font-weight: 700;
  cursor: pointer;
  :visited {
    color: #585B73;
  }
  :hover {
    color: #295ED9;
  }
  :focus {
    color: #585B73;
    background-color: #CFD1E6;
  }
  @media (max-width: 576px) {
    background-color: #F2F3F4;
    opacity: .95;
    :hover {
      color: #3A3D4D;
    }
  }
  @media (min-width: 1200px) {
    right: 5rem;
  }
`

class AppRouter extends React.Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  render(){
    return (
      <BrowserRouter>
        <div>
          <GlobalStyle/>
          <Header/>
          <Switch>
            <Route path="/" component={HomePage} exact/>
            <Route path="/design-track" component={MainPage} exact/>
            <Route path="/design-track/sunday" component={SundayPage}/>
            <Route path="/design-track/monday" component={MondayPage}/>
            <Route path="/design-track/tuesday" component={TuesdayPage}/>
            <Route path="/design-track/wednesday" component={WednesdayPage}/>
            <Route path="/design-track/thursday" component={ThursdayPage}/>
            <Route component={NotFoundPage}/>
          </Switch>
          <TopButton onClick={this.scrollToTop}>Top</TopButton>
        </div>
      </BrowserRouter>
    )
  }
}

export default AppRouter;