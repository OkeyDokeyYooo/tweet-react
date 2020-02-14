import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import LoginForm from './auth/LoginForm'
import SignupForm from './auth/SignupForm'
import Profile from './profile/Profile'
import ProfileForm from './profile/ProfileForm';

class SideBar extends Component {

    handleAuth(Component) {
        return this.props.token ? Component : <Redirect to="/signup"/>
    }

    handleIsAuth(Component) {
        return this.props.token ? <Redirect to="/" /> : Component
    }

    render() {
        return (
            <div>
                <Route path='(/|/profile)' exact render={() => (this.handleAuth(<Profile avatar={this.props.avatar} handleLogout={this.props.handleLogout}/>))}/>
                <Route path='/profile/edit' render={() => (this.handleAuth(<ProfileForm avatar={this.props.avatar}/>))}/>
                <Route path='/login' render={() => (this.handleIsAuth(<LoginForm handleTokenUpdate={this.props.handleTokenUpdate}/>))} />
                <Route path='/signup' render={() => (this.handleIsAuth(<SignupForm handleTokenUpdate={this.props.handleTokenUpdate}/>))}/>
            </div>
        );
    }
}

export default SideBar;