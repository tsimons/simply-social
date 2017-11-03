import React, { Component } from 'react';
import { oneOf, func, number } from 'prop-types';
import classNames from 'classnames';

export default class NewPost extends Component {
    static propTypes = {
        theme: oneOf(['light', 'dark']),
        author: number,
        addPost: func
    };

    static defaultProps = {
        theme : 'light'
    }

    static displayNames = 'NewPost';

    constructor(props) {
        super(props);
        this.state = {
            showImageUrl: false,
            showVideoUrl: false,
            message: '',
            imageUrl: '',
            videoUrl: ''
        };

        // Bind functions now to avoid creating functions in the render method
        this.clickAddImage = this.clickAddImage.bind(this);
        this.clickAddVideo = this.clickAddVideo.bind(this);
        this.addPost = this.addPost.bind(this);
        this.setMessageText = this.setMessageText.bind(this);
        this.setImageUrl = this.setImageUrl.bind(this);
        this.setVideoUrl = this.setVideoUrl.bind(this);
    }

    clickAddImage() {
        this.setState(() => ({
            showImageUrl: !this.state.showImageUrl,
            showVideoUrl: false
        }));
    }

    clickAddVideo() {
        this.setState(() => ({
            showVideoUrl: !this.state.showVideoUrl,
            showImageUrl: false
        }));
    }

    setImageUrl(e) {
        const imageUrl = e.target.value;
        this.setState(() => ({
            imageUrl
        }));
    }

    setVideoUrl(e) {
        const videoUrl = e.target.value;
        this.setState(() => ({
            videoUrl
        }));
    }
    
    setMessageText(e) {
        // make sure to grab the value ahead of time since the event may change by the time the setState call goes through
        const message = e.target.value;
        this.setState(() => ({
            message
        }));
    }

    addPost(e) {
        e.preventDefault();
        this.props.addPost({
            message: this.state.message,
            image: this.state.imageUrl,
            video: this.state.videoUrl,
            author: this.props.author
        });
        this.reset();
    }

    reset() {
        this.setState(() => ({
            message: '',
            imageUrl: '',
            videoUrl: '',
            showImageUrl: false,
            showVideoUrl: false
        }));
    }

    render() {
        const { theme, addPost } = this.props;
        const { showImageUrl, showVideoUrl } = this.state;

        return (
            <form onSubmit={this.addPost} className={classNames('new-post', {
                'new-post--light': theme === 'light',
                'new-post--dark': theme === 'dark',
                'new-post--media-open': showImageUrl || showVideoUrl,
                'new-post--image-open': showImageUrl,
                'new-post--video-open': showVideoUrl,
            })}>
                <div className="new-post__text-container">
                    <textarea className="new-post__text" placeholder="What's on your mind?" rows="2" onChange={this.setMessageText} value={this.state.message}></textarea>
                </div>

                <div className="new-post__addons">
                    <div className="new-post__addons-links">
                        <div className="new-post__addons-image">
                            <a href="javascript:void(0)" onClick={this.clickAddImage} className={classNames('new-post__media-link', {
                                'is-active': showImageUrl
                            })}>
                                {
                                    theme === 'light' ?
                                        <img src="/static/camera-icon-o.png" alt="" />
                                :
                                        <img src="/static/camera-icon-o-dark.png" alt="" />
                                }  Add Photo
                            </a>
                        </div>
                        <div className="new-post__addons-video">
                            <a href="javascript:void(0)" onClick={this.clickAddVideo} className={classNames('new-post__media-link', {
                                'is-active': showVideoUrl
                            })}>
                                {
                                    theme === 'light' ?
                                        <img src="/static/video-icon-o.png" alt="" />
                                    :
                                        <img src="/static/video-icon-o-dark.png" alt="" />
                                } Add Video
                            </a>
                        </div>
                    </div>

                    <div className="new-post__addons-inputs">
                        {
                            showImageUrl &&
                            <div className="new-post__addons-image-url">
                                <input className="new-post__media-input" type="url" placeholder="Image url" onChange={this.setImageUrl} value={this.state.imageUrl} />
                            </div>
                        }
                        {
                            showVideoUrl &&
                            <div className="new-post__addons-video-url">
                                <input className="new-post__media-input" type="url" placeholder="Video url" onChange={this.setVideoUrl} value={this.state.videoUrl} />
                            </div>
                        }
                    </div>

                    <div className="new-post__addons-post">
                        <button className="new-post__addons-post-btn">Post</button>
                    </div>
                </div>

                <style jsx>{`
                    .new-post {
                        display: flex;
                        flex-direction: column;
                    }

                    .new-post__text-container {
                        flex: 1;
                        margin-bottom: 12px;
                    }

                    .new-post__text {
                        width: 100%;
                        padding: 6px 10px;
                        resize: none;
                        
                        font-size: 30px;
                        font-weight: 100;

                        border-radius: 3px;
                    }
                    
                    .new-post--light .new-post__text {
                        background: transparent;
                        color: white;
                    }
                    .new-post--dark .new-post__text {
                        background: white;
                        color: #3f454d;
                    }

                    .new-post__addons {
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: space-between;
                    }
                    
                    .new-post--media-open .new-post__addons {
                        flex-direction: column;
                        align-items: stretch;
                        justify-content: center;
                    }
                    
                    .new-post__addons-links {
                        display: flex;
                        flex-direction: row;
                    }

                    .new-post__addons-inputs {
                        margin: 15px 0 0;
                    }

                    .new-post__media-input {
                        width: 100%;
                        font-size: 18px;
                        font-weight: 100;
                        padding: 8px 6px 6px;
                        border: none;
                        outline: none;
                        border-radius: 3px;
                    }
                    
                    .new-post--light .new-post__media-input {
                        background: rgba(255, 255, 255, .3);
                        color: white;
                    }
                    .new-post--dark .new-post__media-input {
                        background: white;
                        color: #3f454d;
                    }

                    .new-post__media-input::placeholder {
                        color: rgba(255, 255, 255, .7);
                    }
                    
                    .new-post__addons,
                    .new-post__media-link {
                        font-size: 15px;
                        font-weight: 100;
                        text-decoration: none;
                        opacity: .5;
                        
                        transition: opacity .25s;
                    }
                    
                    .new-post--light .new-post__media-link {
                        color: white;
                    }
                    .new-post--dark .new-post__media-link {
                        color: #70767f;
                    }

                    .new-post__media-link:hover,
                    .new-post__media-link:focus {
                        opacity: 1;
                        outline: none;
                    }
                    
                    .new-post__addons a.is-active {
                        opacity: 1;
                    }

                    .new-post__addons-image,
                    .new-post__addons-video {
                        flex: 0 0 auto;
                    }

                    .new-post__addons-video {
                        margin: 0 0 0 45px;
                    }

                    .new-post__text ,
                    .new-post__text:focus {
                        outline: none;
                        border: none;
                    }

                    .new-post__text::placeholder {
                        color: rgba(255, 255, 255, .5);
                    }

                    .new-post__addons-post {
                        align-self: flex-end;
                    }

                    .new-post--media-open .new-post__addons-post {
                        margin-top: 12px;
                    }

                    .new-post__addons-post-btn {
                        
                        padding: 13px 24px;

                        outline: none;
                        border: none;
                        border-radius: 3px;
                        background: #00b286;

                        color: white;
                        font-size: 14px;

                        transition: background .25s;
                    }

                    .new-post--light .new-post__addons-post-btn {
                        display: none;
                    }

                    .new-post__addons-post-btn:hover,
                    .new-post__addons-post-btn:focus {
                        background: #41ceab;
                        cursor: pointer;
                    }

                `}</style>
            </form>
        );
    }
}