import Home from '../../layouts/Home';
import Post from '../../components/Post';

import posts from '../../mockPosts';

export default () => (
    <Home>
        <div className="posts posts--tile">
            {posts.map(p => (
                <div className="post-container">
                    <Post key={p.post.message} post={p.post} author={p.author} liked={p.liked} layout="tile" />
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
    </Home>
);