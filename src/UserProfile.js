import React from 'react';
import './user-profile.css';
import logo from './logo.svg';
import avatarPlaceholder from './avatar-placeholder.svg';

function UserProfile() {
    return (
        <div className="user-profile-container">
            {/* <img className='user-profile-avatar' src='https://public-files.gumroad.com/variants/8924y85a3rjotg3b2gzpbmvwjr88/4ec519eb32080d4ff1ef08cba157dc2ac7dab092fa26aeca54e8e2b8f31f9a63' /> */}
            <img className='user-profile-avatar Avatar-logo' src={avatarPlaceholder} />
            <h2 className='user-profile-name'>Jinglehymer Schmit</h2>
            <p className='user-profile-location'>Hobbiton, The Shire</p>
        </div>
    );
}

export default UserProfile;

//this file is a component definition
//interactions and dom elements rendered
//can input this component into others and render them as many places as I want.