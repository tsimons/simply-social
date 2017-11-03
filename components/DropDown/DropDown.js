import React, { Component } from 'react';
import { node, string } from 'prop-types';
import classNames from 'classnames';

export default class DropDown extends Component {
    static displayName = 'DropDown';
    static propTypes = {
        children: node,
        trigger: node,
        className: string
    }

    constructor(props) {
        super(props);
        this.state = {
            isOpen : false
        }

        this.toggle = this.toggle.bind(this);
    }

    toggle () {
        this.setState(() => ({ isOpen: !this.state.isOpen }));
    }
    
    render() {
        const { trigger, children, className } = this.props;
        const { isOpen } = this.state;

        return (
            <div className={classNames('drop-down', className)}>
                <div className="drop-down__trigger" onClick={this.toggle}>
                    { trigger }
                    &#x25BE;
                </div>

                <div className={classNames("drop-down__container", {
                    'is-open': isOpen
                })}>
                    {children}
                </div>

                <style jsx>{`
                    .drop-down {
                        position: relative;
                    }

                    .drop-down__container {
                        display: none;

                        min-width: 125px;

                        padding: 12px 0;

                        position: absolute;
                        top: calc(100% + 15px);
                        right: -7px;

                        border-radius: 0 0 3px 3px;

                        background: #dee1e5;
                    }

                    .drop-down__container.is-open {
                        display: block;
                    }

                    .drop-down__container::before {
                        content: "▾";

                        // the up utf small arrow does not match the width of this one #fakeittilyoumakeit
                        transform: rotate(180deg);

                        position: absolute;
                        bottom: 100%;
                        right: 8px;
                        
                        color: #dee1e5;
                        line-height: .1;
                    }
                `}</style>
            </div>
        );
    }
}