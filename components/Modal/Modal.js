import React from 'react';
import { node, func } from 'prop-types';

const Modal = ({ children, onClose }) => (
    <div className="modal">
        <div className="modal__shield"></div>
        <div className="modal__container">
            <div className="modal__content">
                <a href="javascript:void(0)" className="modal__close-btn" onClick={onClose}>&#215;</a>
                {children}
            </div>
        </div>

        <style jsx>{`
            .modal {
                position: fixed;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                z-index: 999;
            }

            .modal__shield {
                background: rgba(0, 0, 0, .8);
                filter: blur(5px);
                position: absolute;
                height: 100%;
                width: 100%;
            }

            .modal__container {
                position: absolute;
                top: 183px;
                left: 0;
                right: 0;
                text-align: center;
            }

            .modal__content {
                position: relative;
                display: inline-block;
                text-align: left;
            }

            .modal__close-btn {
                position: absolute;
                left: calc(100% + 4px);
                bottom: calc(100% + 4px);

                display: inline-block;
                height: 21px;
                width: 21px;

                padding: 8.5px 5.5px;
                
                color: #70767f;
                font-size: 16px;
                
                border: 1px solid #70767f;
                border-radius: 21px;
                
                transition: color .25s, border .25s;

                text-align: center;
                text-decoration: none;
                line-height: 0;
            }

            .modal__close-btn:hover,
            .modal__close-btn:focus {
                color: white;
                border-color: white;
            }
        `}</style>
    </div>
);

Modal.displayName = 'Modal';
Modal.propTypes = {
    children: node.isRequired,
    onClose: func.isRequired
};

export default Modal;