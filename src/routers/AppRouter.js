import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import SundayPage from '../components/SundayPage';
import NotFoundPage from '../components/NotFoundPage';

// import Header from '../components/Header';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={SundayPage} exact={true}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;