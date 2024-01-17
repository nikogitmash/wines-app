// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import AddWinePage from './components/AddWinePage';
import ListOfWinesPage from './components/ListOfWinesPage';
import EditWinePage from './components/EditWinePage';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ListOfWinesPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/add" component={AddWinePage} />
        <Route path="/edit/:id" component={EditWinePage} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
