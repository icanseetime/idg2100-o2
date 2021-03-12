import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import './App.css'
import USERS from './users'

// Pages
import About from './pages/about/About'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Register from './pages/register/Register.jsx'
import ForgotPassword from './pages/forgot-password/ForgotPassword'
import NotFound from './pages/NotFound'
import UserList from './pages/user-list/user-list'

// Components
import Header from './components/header/header'

// Routes
import PrivateRoute from './routes/PrivateRoute'


class App extends Component {
  constructor(props) {
    super(props);
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
    )
  }

  updateUserPlace = (onCampus) => {
    const place = onCampus ? 'on-campus' : 'home-office'
    this.setState((state) => {

      let newUserList = [...this.state.users]
      //myUser is always in pos[0] in the demo. However, in real app this will not be true.
      newUserList[0].place = place

      return {
        myUser: {
          ...state.myUser,
          place
        },
        users: newUserList
      }
    })
  }

  updateUserStatus = (available) => {
    const status = available ? 'available' : 'busy'
    this.setState((state) => {

      let newUserList = [...this.state.users]
      //myUser is always in pos[0] in the demo. However, in real app this will not be true.
      newUserList[0].status = status

      return {
        myUser: {
          ...state.myUser,
          status
        },
        users: newUserList
      }
    })
  }
}

export default App