import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class ProfileAction extends Component {

    render() {
        return (
            <div className="profile-action">
                <Link className="btn-border space-top" to="/profile/edit">Edit Proflie</Link>
                <Link className="btn-border space-top" to="/login">Log out</Link>
            </div>
        )
    }
}

export default ProfileAction;