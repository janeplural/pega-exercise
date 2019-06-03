import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import GlobalStyle from '../themes/GlobalStyle';
import Header from '../components/Header';
import SundayPage from '../components/SundayPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <GlobalStyle/>
      <Header/>
      <Switch>
        <Route path="/" component={SundayPage} exact={true}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;