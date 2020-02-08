import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
 
import Header from './components/header/header.component';

import HomePage from './pages/homepage/homepage.component';
import NewBook from './pages/new-book/new-book.component';
import RegistrationForm from './pages/registration/registration.component'
import SignInForm from './pages/sign-in/sign-in.component';
import BookDetails from './pages/book-details/book-details.component'

import { auth, createUserProfileDocument } from './firebase/firebase.auth';
import { setCurrentUser } from './redux/user/user.action';


class App extends React.Component {

  componentDidMount() {

    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            });

        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path = '/' component = {HomePage}/>
          <Route path = '/new' component = {NewBook}/>
          <Route path = '/registration' render = {() => (
            this.props.currentUser ? (<Redirect to='/'/> 
            ) : (
              <RegistrationForm/>
            )
          )}/>
          <Route path = '/signin' render = {() => (
            this.props.currentUser ? (<Redirect to='/'/> 
            ) : (
              <SignInForm/>
            )
          )}/>
          <Route path = '/bookdetails/:id' component = {BookDetails}/>
        </Switch>
      </div>   
    );
  }
}

const mapStateToProps = ( { user } ) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
