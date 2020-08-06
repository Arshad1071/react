import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

// App Components
import Header from './Header.js';
import Landing from './Landing';

const Dashboard = () => <dev><h2>Dashboard</h2></dev>
const SurvayNew = () => <dev><h2>SurvayNew</h2></dev>


class App extends Component {
    componentDidMount() {
      this.props.fetchUser();
    }
    render() {
      return (
        <Fragment>
          <BrowserRouter>
            <div>
              <Header />
              <Route exact path="/" component={Landing} />
              <Route exact path="/surveys" component={Dashboard} />
              <Route path="/surveys/new" component={SurvayNew} />
            </div>
          </BrowserRouter>
        </Fragment>
      );
    }
  }
  export default connect(
    null,
    actions
  )(App);