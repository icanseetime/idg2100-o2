import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import USERS from './users';

import Header from './components/header/header'
import Home from './components/home/Home';
import Login from './components/login/Login'
import Register from './components/register/Register'
import ForgotPassword from './components/forgot-password/ForgotPassword'
import UserList from './components/user-list/user-list';
import NotFound from './components/NotFound';

import About from './components/about/About';
import PrivateRoute from './routes/PrivateRoute';
// import Login from './components/login/Login';

import RegisterForm from './components/form-controls/register-form/RegisterForm'

class App extends Component {
  constructor(props) {
    super(props);
    // posible values "available/busy and on-campus/home-office"
    this.state = {
      myUser: { ...USERS[0] },
      users: [...USERS]
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header />
            <main>
              <Switch>
                <Route exact path="/test">
                  <RegisterForm />
                </Route>
                <Route exact path="/dashboard">
                  <UserList users={this.state.users} />
                </Route>
                <Route exact path="/login">
                  <Login />
                </Route>
                <Route exact path="/register">
                  <Register />
                </Route>
                <Route exact path="/forgot-password">
                  <ForgotPassword />
                </Route>
                {/* <Route exact path="/"> */}
                <PrivateRoute exact path="/user">
                  <Home user={this.state.myUser} onChangePlace={this.updateUserPlace} onChangeStatus={this.updateUserStatus} />
                </PrivateRoute>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/">
                  <About />
                </Route>
                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>
            </main>
          </div>
        </Router>
      </div >
    );
  }

  updateUserPlace = (onCampus) => {
    const place = onCampus ? 'on-campus' : 'home-office';
    this.setState((state) => {

      let newUserList = [...this.state.users];
      //myUser is always in pos[0] in the demo. However, in real app this will not be true.
      newUserList[0].place = place;

      return {
        myUser: {
          ...state.myUser,
          place
        },
        users: newUserList
      }
    });
  }

  updateUserStatus = (available) => {
    const status = available ? 'available' : 'busy';
    this.setState((state) => {

      let newUserList = [...this.state.users];
      //myUser is always in pos[0] in the demo. However, in real app this will not be true.
      newUserList[0].status = status;

      return {
        myUser: {
          ...state.myUser,
          status
        },
        users: newUserList
      }
    });
  }
}

export default App;