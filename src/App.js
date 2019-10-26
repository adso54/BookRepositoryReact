import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
 
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import NewBook from './pages/new-book/new-book.component';
import RegistrationForm from './pages/registration/registration.component'
import SignInForm from './pages/sign-in/sign-in.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';



class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    };
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path = '/' component = {HomePage}/>
          <Route path = '/new' component = {NewBook}/>
          <Route path = '/registration' component = {RegistrationForm}/>
          <Route path = '/signin' component = {SignInForm}/>
        </Switch>
      </div>   
    );
  }
}

export default App;
