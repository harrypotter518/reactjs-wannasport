import React, { useContext } from 'react';
import { PropTypes } from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../Templates/Dashboard';
import { AppContext } from './ThemeWrapper';
import {
  DashboardPage,
  BlankPage,
  Error,
  NotFound,
  Form,
  Table,
  Parent
} from '../pageListAsync';

function Application(props) {
  const { history } = props;
  const changeMode = useContext(AppContext);

  return (
    <Dashboard history={history} changeMode={changeMode}>
      <Switch>
        { /* Home */ }
        <Route exact path="/app" component={BlankPage} />
        <Route path="/app/dashboard" component={DashboardPage} />
        {/* <Route path="/app/form" component={Form} /> */}
        <Route exact path="/app/:facilityId/create-activity" component={Form} />
        <Route path="/app/:facilityId/list-activities" component={Table} />
        <Route path="/app/page-list" component={Parent} />
        <Route path="/app/pages/not-found" component={NotFound} />
        <Route path="/app/pages/error" component={Error} />        
        <Route component={NotFound} />
      </Switch>
    </Dashboard>
  );
}

Application.propTypes = {
  history: PropTypes.object.isRequired
};

export default Application;
