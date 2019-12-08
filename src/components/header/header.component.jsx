import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import './header.styles.scss';
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';

const Header = ({currentUser}) => (
<div>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href='/'>BookRegister</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href='/new'>Add new book <span className="sr-only">(current)</span></a>
      </li>
    </ul>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          <Link to='#'><FontAwesomeIcon icon={faUser} /> Sign out</Link>
        </div>
      ):(
        <div className='row user-bar'>
          <div className='col-6 link'>
            <Link to='/registration'><FontAwesomeIcon icon={faUser} /> Register</Link>
          </div>
          <div className='col-6 link'>
            <Link to='/signin'><FontAwesomeIcon icon={faSignInAlt} /> SignIn</Link>
          </div>
        </div> 
      )}
  </div>
  
</nav>

</div>
)

const mapStateToProps = createStructuredSelector(
  {
    currentUser: selectCurrentUser
  }
)

export default connect(mapStateToProps)(Header);