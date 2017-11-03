import React from 'react';
import PropTypes from 'prop-types';

import Profile from '../../layouts/Profile';

import ProfileSummary from '../../components/ProfileSummary';

import profiles from '../../mockProfiles';

const FollowingView = () => (
    <Profile>
        <div className="posts">
            {profiles.map((p) => <ProfileSummary profile={p} />)}
        </div>

        <style jsx>{`
            .posts {
                display: flex;
                flex-flow: row wrap;
                align-items: flex-start;
                justify-content: space-between;
                max-width: 599px;
                margin: 0 auto;
                padding: 50px 12px 0;
            }

            .posts--tile {
                max-width: 1199px;
            }

            .post-container {
                flex: 1 1 100%;
            }

            .posts--tile .post-container {
                max-width: 375px;
                margin: 0 0 25px 25px;
                max-height: 500px;
            }

            .posts--tile .post-container:nth-child(3n + 1),
            .posts--tile .post-container:first-child {
                margin-left: 0;
            }
        `}</style>
    </Profile>
);

FollowingView.displayName = 'FollowingView';
FollowingView.PropTypes = {

}

export default FollowingView;