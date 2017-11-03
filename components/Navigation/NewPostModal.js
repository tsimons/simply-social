import React from 'react';
import { node, func } from 'prop-types';

import Modal from '../Modal';
import NewPost from '../../containers/NewPostContainer';

const NewPostModal = ({ children, onClose }) => (
    <Modal onClose={onClose}>
        <div className="new-post-modal">
            <h3>Create new message</h3>
            <NewPost theme="dark" />
        </div>

        <style jsx>{`
            .new-post-modal {
                width: 575px;
                
                padding: 25px 26px 13px;
                margin: 0 auto;
                
                background: #dee1e5;

                border-radius: 3px;
            }

            h3 {
                margin: 0 0 21px;
                
                font-size: 16px;
                font-weight: 500;
                color: #70767f;
            }
        `}</style>
    </Modal>
);

NewPostModal.displayName = 'NewPostModal';
NewPostModal.propTypes = {
    onClose: func.isRequired
}

export default NewPostModal;