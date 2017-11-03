import React from 'react';
import { bool, func } from 'prop-types';
import classNames from 'classnames';

const Slider = ({ checked, onClick }) => (
    <span className={classNames('slider-container', {
        on: checked,
        off: !checked
    })}>
        <span className="slider-thumb"></span>

        <style jsx>{`
            .slider-container {
                display: inline-block;
                position: relative;

                width: 48px;
                height: 23px;
                
                
                border: 1px solid #00b286;
                border-radius: 25px;
                
                transition: background .15s, border .15s;
            }
            
            .slider-container.on {
                background: #00b286;
                border-color: #00b286;
            }
            
            .slider-container.off {
                background: #dee1e5;
                border-color: #dee1e5;
            }

            .slider-thumb {
                display: inline-block;
                width: 21px;
                height: 21px;

                position: absolute;
                top: 0;
                bottom: 0;
                margin: auto 0;

                background: white;

                border-radius: 21px;

                transition: left .25s;
            }

            .on .slider-thumb {
                left: 1px;                
            }

            .off .slider-thumb {
                left: 26px;                
            }
        `}</style>
    </span>
);

Slider.displayName = 'Slider';
Slider.propTypes = {
    checked: bool,
    onClick: func
};

export default Slider;