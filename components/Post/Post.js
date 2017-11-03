import React, { Component } from 'react';
import { shape, string, number, arrayOf, bool, oneOf, func } from 'prop-types';

import linkifyMessage from '../../helpers/linkifyMessage';

import Video from '../Video';

import Reply from './Reply';
import Controls from './Controls';

const LIST = 'list';
const TILE = 'tile';
const STANDALONE = 'standalone';

export default class Post extends Component {
    static propTypes = {
        post: shape({
            message: string,
            author: number,
            timestamp: number,
            image: string,
            video: string,
            replies: arrayOf(shape({
                author: number,
                message: string
            })),
            loves: arrayOf(number),
            location: string
        }).isRequired,
        author: shape({
            name: string,
            image: string,
            id: number
        }),
        layout: oneOf([LIST, TILE, STANDALONE]),
        liked: bool,
        like: func,
        replyToPost: func,
        userId: number
    };

    static defaultProps = {
        layout: LIST
    }

    static displayName = 'Post';

    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
            replyOpen: false
        }
    }

    expand() {
        this.setState(() => ({ expanded: !this.state.expanded }));
    }

    reply() {
        this.expand();
        this.refs.reply.focus();
    }


    render() {
        const { post, author, layout, liked, like, userId } = this.props;
        const { expanded } = this.state;

        const hasReplies = post.replies && post.replies.length > 0;
        const message = linkifyMessage(post.message);

        return (
            <div className={`post post--${layout}`}>
                <div className="post__text">
                    <div className="post__author-image-container">
                        <img className="post__author-image" src={author.image} alt={`A picture of ${author.name}`}/>
                    </div>
                    <div className="post__contents">
                        <div className="post__header">
                            <div className="post__author-name">
                                {author.name}
                            </div>
                            {
                                (layout === LIST || layout === STANDALONE) &&
                                <div className="post__controls"><Controls reply={() => { }} like={() => like(post.id, userId)} timestamp={post.timestamp} /></div>
                            }
                        </div>

                        <div className="post__message">
                            {message}
                        </div>
                        {
                            liked &&
                            <div className="post__liked">
                                <img src="/static/heart-icon-green.png" alt=""/> Liked
                            </div>
                        }
                    </div>
                </div>
                {
                    (post.image || post.video) &&
                    <div className="post__media">
                        {
                            post.image &&
                            <img src={post.image} />
                        }

                        {
                            post.video &&
                            <Video controls src={post.video}></Video>
                        }
                    </div>
                }
                {
                    hasReplies &&
                    <div className="post__expand">
                        <a href="javascript:void(0)" className="post__expand-link" onClick={this.expand}>
                            { expanded ? 'Expand' : 'Collapse' }
                        </a>
                    </div>

                }
                {
                    hasReplies && expanded &&
                    <div className="post__replies">
                        {
                            post.replies.map((reply, i) => (<Reply key={reply.message} reply={reply} />))
                        }
                    </div>

                }
                {
                    layout === TILE &&
                    <div className="post__controls"><Controls reply={() => { }} like={() => { }} timestamp={post.timestamp} /></div>
                }
                {
                    expanded &&
                    <div className="post__reply-form">
                        <textarea className="post__reply-textarea" placeholder={`What would you like to say to ${post.author.name}?`}></textarea>
                    </div>
                }

                <style jsx>{`
                    .post {
                        margin: 0 0 25px;
                        
                        border: 1px solid #dee1e5;
                        border-radius: 4px;

                        background: white;
                    }

                    .post--tile {
                        max-width: 375px;
                    }
                    
                    .post__text {
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        align-items: flex-start;

                        padding: 25px;
                    }

                    .post__author-image-container {
                        flex: 0 0 40px;
                    }

                    .post__author-image {
                        border-radius: 4px;
                    }

                    .post__contents {
                        flex: 1;
                        margin: 0 0 0 16px;
                    }

                    .post__header {
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        align-items: flex-start;

                        margin: 0 0 10px;
                    }

                    .post__author-name {
                        font-size: 16px;
                        color: #3f454d;
                    }

                    .post__message {
                        font-size: 15px;
                        color: #70767f;
                        line-height: 1.6;
                    }

                    :global(.post__message-link) {
                        text-decoration: none;
                        color: #bec3cc;
                    }

                    .post__controls {
                        text-align: right;
                        padding: 24px 22px 21px 0;
                    }

                    .post__header .post__controls {
                        text-align: left;
                        padding: 0;
                    }

                    .post__liked {
                        display: flex;
                        flex-direction: row;
                        align-items: center;

                        font-size: 12px;
                        color: #00b286;
                        margin: 26px 0 0;
                    }

                    .post__liked img {
                        margin: 0 6px 0 0;
                    }

                    .post__media {
                        text-align: center;
                    }

                    .post__media :global(video) {
                        width: 100%;
                    }
                `}</style>
            </div>
        );
    }
}