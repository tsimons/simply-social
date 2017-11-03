import Home from '../../layouts/Home';
import Post from '../../components/Post';

const posts = [{
    post: {
        message: '@Test post, please ignore',
        author: 123,
        timestamp: Date.now(),
        image: '',
        video: '',
        replies: null,
        loves: null,
        location: null
    },
    author: {
        name: 'TJ Simons',
        image: 'https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-1/p160x160/20228285_10156386606534638_4208836979691078674_n.jpg?oh=fbeb0943ca159be516c2eba0fd068152&oe=5A6A3C09',
        isMe: true
    },
    liked: false
}, {
    post: {
        message: 'Pretty sick bridge in Duluth. #liftbridge',
        author: 123,
        timestamp: Date.now() - 100000,
        image: 'https://c1.staticflickr.com/5/4385/36336677412_42f0fb3138_h.jpg',
        video: '',
        replies: null,
        loves: null,
        location: null
    },
    author: {
        name: 'TJ Simons',
        image: 'https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-1/p160x160/20228285_10156386606534638_4208836979691078674_n.jpg?oh=fbeb0943ca159be516c2eba0fd068152&oe=5A6A3C09',
        isMe: false
    },
    liked: false
}, {
    post: {
        message: 'When I finish this thing, I will be sooooo happy. Beers at http://www.badgerhillbrewing.com/ on Saturday!',
        author: 123,
        timestamp: Date.now() - 20000000,
        image: '',
        video: 'https://giant.gfycat.com/DearSoggyGrasshopper.webm',
        replies: null,
        loves: null,
        location: null
    },
    author: {
        name: 'TJ Simons',
        image: 'https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-1/p160x160/20228285_10156386606534638_4208836979691078674_n.jpg?oh=fbeb0943ca159be516c2eba0fd068152&oe=5A6A3C09',
        isMe: false
    },
    liked: false
}, {
    post: {
        message: 'Wrap wrap baby!',
        author: 123,
        timestamp: Date.now(),
        image: '',
        video: '',
        replies: null,
        loves: null,
        location: null
    },
    author: {
        name: 'TJ Simons',
        image: 'https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-1/p160x160/20228285_10156386606534638_4208836979691078674_n.jpg?oh=fbeb0943ca159be516c2eba0fd068152&oe=5A6A3C09',
        isMe: true
    },
    liked: false
}]

export default () => (
    <Home>
        <div className="posts posts--tile" style={{ height: posts.length * 250 }}>
            {posts.filter((p) => p.post.video).map(p => (
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