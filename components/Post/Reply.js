import React from 'react';
import linkifyMessage from '../../helpers/linkifyMessage';

const Reply = (reply) => (
    <div className="reply">
        <div className="reply-image-container">
            <img src={ reply.author.image } alt={`Photo of ${reply.author.name}`}/>
        </div>
        <div className="reply__message">
            {linkifyMessage(reply.message)}
        </div>
    </div>
);