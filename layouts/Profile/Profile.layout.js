import React from 'react';
import { node } from 'prop-types';

import formatNumber from '../../helpers/formatNumber';

import Base from '../Base';

import SubNavigation from '../../components/SubNavigation';

import Header from './Header';


const ProfileLayout = ({ profile, children }) => {
    const followersCount = formatNumber(profile.followers.length);
    const followingCount = formatNumber(profile.following.length);
    
    const links = [{
        href: '/profile',
        name: `${profile.name}'s Feed`
    }, {
        href: '/profile/followers',
        name: `${followersCount} Followers`
    }, {
        href: '/profile/following',
        name: `${followingCount} following`
    }];

    return (
        <Base>
            <div className="profile-layout__header">
                <Header profile={profile} />

                <SubNavigation links={links} />
            </div>
            <div className="profile-layout__content">
                {children}
            </div>

            <style jsx>{`
                .profile-layout__header {
                    display: flex;
                    height: 427px;
                    flex-direction: column;
                    align-items: center;
                    justify-content: space-between;

                    padding-top: 90px;
                    background: url(/static/hero-background.jpg) center center no-repeat;
                    background-size: cover;
                }
            `}</style>
        </Base>
    );
};

ProfileLayout.displayName = 'ProfileLayout';
ProfileLayout.propTypes = {
    children: node.isRequired
};

export default ProfileLayout;