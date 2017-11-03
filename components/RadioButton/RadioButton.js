import React from 'react';
import classNames from 'classnames';

const RadioButton = ({ checked, onClick }) => (
    <span className={classNames('radio-button', {
        on: checked,
        off: !checked
    })}>
        <span className="radio-button__circle"></span>
        <style jsx>{`
            .radio-button {
                display: inline-block;
                height: 23px;
                width: 23px;

                padding: 3px;

                border: 1px solid #bec3cc;
                border-radius: 23px;
            }

            .radio-button__circle {
                display: inline-block;
                height: 15px;
                width: 15px;

                background: #00b286;

                border-radius: 15px;
            }

            .off .radio-button__circle {
                disply: none;
            }
        `}</style>
    </span>
);

export default RadioButton;