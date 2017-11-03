import React from 'react';
import { node } from 'prop-types';

import Base from '../Base';

import SubNavigation from '../../components/SubNavigation';

import Header from './Header';

const defaultProfile = {
    name: 'TJ Simons',
    bio: 'Engineer in the Twin Cities Area',
    site: 'http://tjsimons.com',
    img: 'https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-1/p160x160/20228285_10156386606534638_4208836979691078674_n.jpg?oh=fbeb0943ca159be516c2eba0fd068152&oe=5A6A3C09',
    followersCount: 2542,
    followingCount: 517
};

const thirdDigitPattern = /\B(?=(\d{3})+(?!\d))/g;
const formatNumber = (num = 1) => num.toString().replace(thirdDigitPattern, ",");


const ProfileLayout = ({ profile, children }) => {
    const followersCount = formatNumber(profile.followersCount);
    const followingCount = formatNumber(profile.followingCount);
    
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
ProfileLayout.defaultProps = {
    profile: defaultProfile,
}

export default ProfileLayout;