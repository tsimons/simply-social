import React from 'react';

export default function linkifyMessage (message = '') {
    return message.split(/\s/).map((str, i, arr) => {
        let hasSpace = i !== (arr.length - 1);
        let maybeSpace = hasSpace ? ' ' : '';
        
        if (str && str.match(/^https?\:\/\//)) {
            return (
                <a key={str} href={str} target="_blank" className="post__message-link post__message-link--url">{str}{maybeSpace}</a>
            );
        }

        if (str && str.match(/^@/)) {
            return (
                <a key={str} href="" target="_blank" className="post__message-link post__message-link--at">{str}{maybeSpace}</a>
            );
        }

        if (str && str.match(/^#/)) {
            return (
                <a key={str} href="" target="_blank" className="post__message-link post__message-link--hashtag">{str}{maybeSpace}</a>
            );
        }

        return <span key={str}>{str + maybeSpace}</span>;
    });
}