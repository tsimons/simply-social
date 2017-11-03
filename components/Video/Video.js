import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Video extends Component {
    static displayName = 'Video';
    static propTypes = {
        children: PropTypes.node
    }
    
    constructor(props) {
        super(props);

        this.state = {
            playing: false
        };

        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
        this.togglePlayState = this.togglePlayState.bind(this);
    }

    componentDidMount() {
        this.videoTag.addEventListener('ended', () => this.setState(() => ({ playing: false })));
    }

    play() {
        this.setState(() => ({ playing: true }));
        this.videoTag.play();
    }

    pause() {
        this.setState(() => ({ playing: false }));
        this.videoTag.pause();
    }

    togglePlayState() {
        if (this.state.playing) {
            return this.pause();
        }

        return this.play();
    }

    showControls() {
        return this.state.playing || this.videoTag && this.videoTag.currentTime !== 0;
    }

    render() {

        return (
            <div className={classNames('video', { 'video--playing': this.state.playing })} onClick={this.togglePlayState}>
                <video controls={this.showControls()} src={this.props.src} ref={(v) => this.videoTag = v} onClick={this.playPause}>
                    {this.props.children}
                </video>

                <style jsx>{`
                    .video {
                        position: relative;
                        cursor: pointer;
                    }

                    .video.video--playing::before {
                        display: none;
                    }

                    .video::before {
                        content: '►';

                        display: block;
                        box-sizing: border-box;
                        
                        position: absolute;
                        top: 0;
                        right: 0;
                        bottom: 0;
                        left: 0;

                        height: 76px;
                        width: 76px;

                        margin: auto;
                        padding: 20px 0 20px 5px;

                        border: 3px solid white;
                        border-radius: 3em;

                        color: white;
                        font-size: 26px;
                        line-height: 1;
                        text-align: center;
                    }
                `}</style>
            </div>
        );
    }
}