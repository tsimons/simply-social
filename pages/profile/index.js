import React from 'react';
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';
import { bindActionCreators } from 'redux';
import Head from 'next/head';

import createStore from '../../modules/store';
import { actions } from '../../modules/posts';
import { getAuthor } from '../../modules/profile/profile.selectors';

import Profile from '../../layouts/Profile';

import Post from '../../components/Post';

const FeedView = ({ posts, profile, userId, likePost, focusPost }) => (
    <Profile profile={profile}>
        <Head>
            <title>simplysocial | {profile.name}'s Feed</title>
        </Head>
        <div className="posts">
            {posts.map(p => (
                <div className="post-container">
                    <Post key={p.post.message} post={p.post} author={p.author} liked={p.liked} like={likePost} layout="list" userId={userId} focusPost={focusPost} />
                </div>
            ))}
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

const mapStateToProps = (state) => {
    return {
        posts: state.posts.data.map((post) => ({
            post,
            author: getAuthor(state, post.author),
            liked: post.likes.indexOf(state.user.data.profileId) > -1
        })),
        profile: getAuthor(state, state.user.data.profileId),
        userId: state.user.data.profileId
    }
};

const mapDispatchToProps = (dispatch) => ({
    likePost: bindActionCreators(actions.likePost, dispatch),
    focusPost: bindActionCreators(actions.focusPost, dispatch)
})

export default withRedux(createStore, mapStateToProps, mapDispatchToProps)(FeedView);