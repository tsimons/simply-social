import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import Link from 'next/link';

const SubNavigation = ({ links }) => (
    <nav className="sub-navigation">
        {links.map(link => (
            <Link key={link.href} href={link.href}><a className="sub-navigation-link">{ link.name }</a></Link>
        ))}

        <style jsx>{`
            .sub-navigation {
                display: flex;
                flex-direction: row;
            }

            .sub-navigation-link {
                margin: 0 0 0 39px;

                padding: 5px 11px 19px;
                
                border-bottom: 4px solid transparent;
                
                transition: color .25s;

                text-align: center;
            }
            
            .sub-navigation-link:first-child {
                margin: 0;
            }

            .sub-navigation-link,
            .layout-btn {
                font-weight: 600;
                font-size: 12px;
                text-transform: uppercase;
                text-decoration: none;
                color: #bec3cc;
            }

            .sub-navigation-link.active,
            .layout-btn.active {
                border-color: #00cc99;
            }

            .sub-navigation-link:hover,
            .sub-navigation-link:focus,
            .layout-btn:hover,
            .layout-btn:focus {
                color: #fff;
            }
        `}</style>
    </nav>
);

SubNavigation.displayName = 'SubNavigation';
SubNavigation.propTypes = {
    links: arrayOf(shape({
        href: string.isRequired,
        name: string.isRequired
    })).isRequired
};

export default SubNavigation;