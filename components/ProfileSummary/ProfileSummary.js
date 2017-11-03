import React from 'react';
import { shape, string, number } from 'prop-types';

import formatNumber from '../../helpers/formatNumber';

const ProfileSummary = ({ profile }) => (
    <div className="profile">
        <div className="profile__image">
            <img src={profile.image} alt={`A photo of ${profile.name}`}/>
        </div>
        <div className="profile__info">
            <p className="profile__name">{profile.name}</p>
            <div className="profile__details">
                <span className="profile__post-count">{formatNumber(profile.posts.length)} posts</span>
                <span className="profile__follower-count">{formatNumber(profile.followers.length)} Followers</span>
                <span className="profile__following-count">{formatNumber(profile.following.length)} Following</span>
            </div>
        </div>
        <div className="profile__is-following">
            <img src="/static/following-icon.png" alt=""/>
        </div>

        <style jsx>{`
            .profile {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: stretch;
                width: 100%;

                padding: 25px 0;

                border-bottom: 1px solid #dee1e5;
            }

            .profile__image {
                flex: 0 0 40px;
            }

            .profile__image img {
                border-radius: 4px;
            }

            .profile__info {
                flex: 1 1 auto;
                display: flex;
                flex-direction: column;

                margin: 0 0 0 16px;

            }

            .profile__name {
                font-size: 16px;
                color: #3f454d;
                margin: 0 0 12px;
            }

            .profile__details {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-start;
            }

            .profile__details span {
                margin: 0 22px 0 0;

                font-size: 13px;
                color: #bec3cc;
            }

            .profile__is-following {
                flex: 0 0 30px;
            }
        `}</style>
    </div>
);

ProfileSummary.displayName = 'ProfileSummary';
ProfileSummary.propTypes = {
    profile: shape({
        name: string,
        image: string,
        postCount: number,
        followersCount: number,
        followingCount: number
    }).isRequired
};

export default ProfileSummary;