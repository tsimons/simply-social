import React from 'react';
import { func, number } from 'prop-types';

import formatTimeString from '../../helpers/formatTimeString';

const Controls = ({ reply, like, timestamp }) => (
    <div className="controls">
        <a href="javascript:void(0)" className="control__reply" onClick={reply}><img src="/static/reply-icon.png" alt="reply" /></a>
        <a href="javascript:void(0)" className="control__love" onClick={like}><img src="/static/like-icon.png" alt="like" /></a>

        <span className="post__timestamp">{formatTimeString(timestamp)}</span>

        <style jsx>{`
            .controls {
                font-size: 14px;
                color: #bec3cc;
                align-self: flex-end;
            }

            .controls a,
            .controls span {
                text-decoration: none;
                color: #dee1e5;
                margin-left: 23px;
            }

            .controls a {
                transition: color .25s;
            }

            .controls a:hover,
            .controls a:focus {
                color: #b5bac0;
            }
        `}</style>
    </div>
);

Controls.displayName = 'PostControls';
Controls.propTypes = {
    reply: func.isRequired,
    like: func.isRquired,
    timestamp: number
};

export default Controls;