import React from 'react';
import { node } from 'prop-types';
import Link from 'next/link';
import classNames from 'classnames';

import Base from '../Base';

import NewPost from '../../containers/NewPostContainer';
import SubNavigation from '../../components/SubNavigation';

const links = [
    {
        href: '/',
        name: 'All Posts'
    }, {
        href: '/photos',
        name: 'Photos'
    }, {
        href: '/videos',
        name: 'Videos'
    }
];

const HomeLayout = ({ children, setPostLayout, layout, route, addPost }) => (
    <Base>
        <div className="home-layout__header">
            <div className="home-layout__new-post">
                <NewPost theme="light" />
            </div>
            <div className="home-layout__sub-nav-container">
                <div className="home-layout__sub-navigation">
                    <SubNavigation links={links} active={route} />
                </div>

                {
                    setPostLayout &&
                    <ul className="home-layout__layout-btns">
                        <li>
                            <a className={classNames("home-layout__layout-btn", { active: layout === 'list' })} href="javascript:void(0)" onClick={() => setPostLayout('list')}>
                                <img src="/static/list-icon.png" alt="list layout" />
                            </a>
                        </li>
                        <li>
                            <a className={classNames("home-layout__layout-btn", { active: layout === 'tile' })} href="javascript:void(0)" onClick={() => setPostLayout('tile')}>
                                <img src="/static/tile-icon.png" alt="tile layout" />
                            </a>
                        </li>
                    </ul>
                }
            </div>

        </div>

        <div className="home-layout__content">
            {children}
        </div>

        <style jsx>{`
            .home-layout__header {
                display: flex;
                height: 427px;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;

                padding: 123px 12px 0;

                background: url(/static/hero-background.jpg) center center no-repeat;
                background-size: cover;
            }

            .home-layout__new-post {
                max-width: 575px;
                background: rgba(0, 178, 134, .7);
                border-radius: 3px;
                width: 100%;
                max-width: 575px;
                padding: 49px 33px 29px;
            }

            .home-layout__layout-btns {
                display: flex;
                flex-direction: row;
            }
            .home-layout__layout-btns li {
                margin: 0 0 0 16px;
            }
            .home-layout__layout-btn {
                opacity: .5;
                transition: opacity .35s;
            }
            .home-layout__layout-btn:hover,
            .home-layout__layout-btn:active {
                opacity: .8;
            }
            .home-layout__layout-btn.active {
                opacity: 1;
            }

            .home-layout__sub-nav-container {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: flex-start;
                width: 100%;
                max-width: 575px;
            }
        `}</style>
    </Base>
);

HomeLayout.displayName = 'HomeLayout';
HomeLayout.propTypes = {
    children: node
};

export default HomeLayout;