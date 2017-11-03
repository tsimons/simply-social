import react from 'react';
import withRedux from 'next-redux-wrapper';
import { bindActionCreators } from 'redux';

import createStore from '../modules/store';
import { actions } from '../modules/posts';
import { getAuthor } from '../modules/profile/profile.selectors';

import Home from '../layouts/Home';
import Post from '../components/Post';


const Videos = ({ posts, likePost }) => (
    <Home route="Videos">
        <div className={`posts posts--tile`}>
            {posts.map(p => (
                <div className="post__container" key={p.post.id}>
                    <Post post={p.post} author={p.author} liked={p.liked} layout="tile" like={likePost} />
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
        posts: state.posts.data.filter(p => p.video).map((post) => ({
            post,
            author: getAuthor(state, post.author),
            liked: post.likes.indexOf(state.user.data.profileId) > -1
        }))
    }
};

const mapDispatchToProps = (dispatch) => ({
    likePost: bindActionCreators(actions.likePost, dispatch),
})

export default withRedux(createStore, mapStateToProps, mapDispatchToProps)(Videos);