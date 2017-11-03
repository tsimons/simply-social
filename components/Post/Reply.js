import React from 'react';
import linkifyMessage from '../../helpers/linkifyMessage';

const Reply = ({ reply }) => (
    <div className="reply">
        <div className="reply__image-container">
            <img src={ reply.author.image } alt={`Photo of ${reply.author.name}`}/>
        </div>
        <div className="reply__message">
            {linkifyMessage(reply.message)}
        </div>

        <style jsx>{`
            .reply {
                display: flex;
                flex-flow: row nowrap;
                align-items: center;
                justify-content: stretch;

                padding: 15px 15px 15px 40px;

                background: #dee1e5;
            }

            .reply__image-container {
                flex: 0 0 30px;
                margin: 0 18px 0 0;
            }

            .reply__message {
                flex: 1;
                font-size: 14px;
                color: #70767f;
                line-height: 1.4;
            }
        `}</style>
    </div>
);

export default Reply;