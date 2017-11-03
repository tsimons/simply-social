import React from 'react';
import Link from 'next/link';

import Logo from '../Logo';
import DropDown from '../DropDown';
import NewPostModal from './NewPostModal';

export default ({ isPostModalOpen, openPostModal, closePostModal }) => (
    <div className="navigation">
        <div className="navigation__logo-container">
            <Link href="/home">
                <a><Logo /></a>
            </Link>
        </div>

        <div className="navigation__tools">
            <div className="navigation__tools__new-message">
                <a href="javascript:void(0)" onClick={openPostModal}><img src="/static/new-message.png" alt="new message"/></a>
            </div>
            <div className="navigation__tools__search">
                <input type="search" className="navigation__tools__search-input" />
                <span className="navigation__tools__search-icon"><img src="/static/search-icon.png" alt=""/></span>
            </div>

            <div className="navigation__tools__profile">
                <DropDown trigger={<img
                    src="https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-1/p160x160/20228285_10156386606534638_4208836979691078674_n.jpg?oh=fbeb0943ca159be516c2eba0fd068152&oe=5A6A3C09"
                    className="navigation__tools__profile-img"
                />}>
                    <ul className="navigation__tools__profile-links">
                        <li><Link href="/profile"><a className="navigation__tools__profile-link">Profile</a></Link></li>
                        <li><Link href="/profile/settings"><a className="navigation__tools__profile-link">Settings</a></Link></li>
                        <li><Link href="/logout"><a className="navigation__tools__profile-link">Logout</a></Link></li>
                    </ul>
                </DropDown>
            </div>

            {isPostModalOpen && <NewPostModal onClose={closePostModal} />}
        </div>

        <style jsx>{`
            .navigation {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;

                height: 100%;
                padding: 15px 103px;
                
                background: #262728;
            }

            .navigation__tools {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                
                width: 325px;
            }

            .navigation__tools__new-message {
                transition: opacity .25s;
            }

            .navigation__tools__new-message:hover,
            .navigation__tools__new-message:focus {
                opacity: .8;
            }

            .navigation__tools__search {
                position: relative;
            }

            .navigation__tools__search-input {
                background: transparent;
                border: 1px solid #44474b;
                border-radius: 4px;
                height: 30px;
                width: 200px;
                padding: 4px 30px 4px 4px;
                font-size: 13px;
                color: #262728;
                transition: border-color .25s, background .25s;
            }

            .navigation__tools__search-input:hover {
                border-color: #5c6166;
            }

            .navigation__tools__search-input:focus {
                background: white;
                outline: none;
            }

            .navigation__tools__search-icon {
                height: 16px;
                position: absolute;
                top: 5px;
                right: 9px;
                display: block;
                color: #44474b;
                transition: color .25s;                
            }

            .navigation__tools__profile {
                text-decoration: none;
                color: #4b4f54;
                transition: color .25s;
            }

            .navigation__tools__profile:hover {
                cursor: pointer;
            }

            .navigation__tools__profile:hover,
            .navigation__tools__profile:focus {
                color: #5c6166;
            }

            .navigation__tools__profile-img {
                width: 30px;
                border-radius: 4px;
                margin: 0 10px 0 0;
            }

            .navigation__tools__profile-link,
            .navigation__tools__profile-link:link {
                display: inline-block;
                width: 150px;

                padding: 6px 32px;

                font-size: 12px;
                color: #747c83;
                text-decoration: none;

                transition: color .15s;
            }

            .navigation__tools__profile-link:hover,
            .navigation__tools__profile-link:active {
                background: #00cc99;
                color: #e3e8ed;
            }
        `}</style>
    </div>
);