import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import LoginForm from './auth/LoginForm'
import SignupForm from './auth/SignupForm'
import Profile from './profile/Profile'
import ProfileFrom from './profile/ProfileForm';

class SideBar extends Component {

    render() {
        return (
            <div>
                <Route path='/' exact render={() => <Profile avatar={this.props.avatar}/>}/>
                <Route path='/profile' exact render={() => <Profile avatar={this.props.avatar}/>}/>
                <Route path='/profile/edit' render={() => <ProfileFrom avatar={this.props.avatar}/>}/>
                <Route path='/login' component={LoginForm} />
                <Route path='/signup' component={SignupForm}/>
            </div>
        );
    }
}

export default SideBar;