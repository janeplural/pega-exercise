import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import GlobalStyle from '../themes/GlobalStyle';
import Header from '../components/Header';
import SundayPage from '../components/SundayPage';
import MondayPage from '../components/MondayPage';
import TuesdayPage from '../components/TuesdayPage';
import WednesdayPage from '../components/WednesdayPage';
import ThursdayPage from '../components/ThursdayPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <GlobalStyle/>
      <Header/>
      <Switch>
        <Route path="/" component={SundayPage} exact={true}/>
        <Route path="/design-track/sunday" component={SundayPage}/>
        <Route path="/design-track/monday" component={MondayPage}/>
        <Route path="/design-track/tuesday" component={TuesdayPage}/>
        <Route path="/design-track/wednesday" component={WednesdayPage}/>
        <Route path="/design-track/thursday" component={ThursdayPage}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;