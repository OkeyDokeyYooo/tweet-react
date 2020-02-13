import React, { Component } from 'react';

import uploadImage from '../../img/upload.png';

class ProfileForm extends Component {

    render() {
        return (
            <div className="col-2of5 bg-white">
                <form class="profile" action="profile.html">
                    <div class="relative img-edit">
                        <img class="avatar" src={this.props.avatar} alt="avatar" id="avatar-image" />
                        <img class="avatar-upload" src={uploadImage} alt="upload-img" id="avatar-file-btn"/>
                    </div>
                    <h5 id="username">@yan</h5>
                    <input class="input-profile" type="text" id="name-input" placeholder="Full name" />
                    <input class="input-profile" type="text" id="location-input" placeholder="Location"/>
                    <textarea class="input-profile" id="bio-input" placeholder="Personal Bio"></textarea>
                    <button class="btn-primary space-top" type="button" id="save-btn">Save</button>
                    <button class="btn-border space-top" type="button" id="cancel-btn">Cancel</button>
                </form>
            </div>
        );
    }
}


export default ProfileForm;