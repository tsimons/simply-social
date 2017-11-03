import react from 'react';
import withRedux from 'next-redux-wrapper';
import { bindActionCreators } from 'redux';
import Head from 'next/head';

import createStore from '../modules/store';
import { actions } from '../modules/posts';
import { getAuthor } from '../modules/profile/profile.selectors';

import Home from '../layouts/Home';
import Post from '../components/Post';


const allPosts = ({ layout, posts, likePost, setPostLayout, addPost, userId, focusPost }) => (
    <Home setPostLayout={setPostLayout} layout={layout} route="All Posts" addPost={addPost}>
        <Head>
            <title>simplysocial | All Posts</title>
        </Head>
        <div className={`posts posts--${layout}`}>
            {posts.map(p => (
                <div className="post__container" key={p.post.id}>
                    <Post post={p.post} author={p.author} liked={p.liked} layout={layout} like={likePost} userId={userId} focusPost={focusPost} />
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

            .post__container {
                width: 100%;
            }

            .posts--tile .post__container {
                width: 100%;
                max-width: 375px;
                margin: 0 0 25px 25px;
            }

            .posts--tile .post__container:nth-child(3n + 1),
            .posts--tile .post__container:first-child {
                margin-left: 0;
            }
        `}</style>
    </Home>
);

const mapStateToProps = (state) => {
    return {
        posts: state.posts.data.map((post) => ({
            post,
            author: getAuthor(state, post.author),
            liked: post.likes.indexOf(state.user.data.profileId) > -1
        })),
        layout: state.posts.ui.layout,
        userId: state.user.data.profileId
    }
};

const mapDispatchToProps = (dispatch) => ({
    likePost: bindActionCreators(actions.likePost, dispatch),
    setPostLayout: bindActionCreators(actions.setPostLayout, dispatch),
    addPost: bindActionCreators(actions.addPost, dispatch),
    focusPost: bindActionCreators(actions.focusPost, dispatch)
})

export default withRedux(createStore, mapStateToProps, mapDispatchToProps)(allPosts);