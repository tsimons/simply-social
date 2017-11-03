import React from 'react';
import { connect } from 'react-redux';

import { getPost } from '../modules/posts/posts.selectors';
import { actions } from '../modules/posts/posts.reducer';
import { getAuthor } from '../modules/profile/profile.selectors';

import Modal from '../components/Modal';
import Post from '../components/Post';

const PostModal = ({ post, author, liked, layout, like, userId, onClose }) => (
    post ?
        <Modal onClose={onClose}>
            <Post layout="standalone" post={post} author={author} liked={liked} like={like} userId={userId} />
        </Modal>
        :
        <div></div>
);

const mapStateToProps = (state) => {
    const focused = state.posts.ui.focusedPost;
    if (!focused) {
        return {};
    }
    const post = getPost(state, state.posts.ui.focusedPost);
    const userId = state.user.data.profileId;
    
    return {
        post,
        userId,
        author: getAuthor(state, post.author),
        liked: post.likes.indexOf(userId) > -1
    };
};

const mapDispatchToProps = {
    like: actions.likePost,
    onClose: actions.blurPost
}

export default connect(mapStateToProps, mapDispatchToProps)(PostModal);