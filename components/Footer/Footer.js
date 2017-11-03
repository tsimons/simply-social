import React from 'react';
import Link from 'next/link';

export default () => (
    <div className="footer">
        <nav>
            <Link href="/about"><a>About Us</a></Link>
            <Link href="/support"><a>Support</a></Link>
            <Link href="/privacy"><a>Privacy</a></Link>
            <Link href="/terms"><a>Terms</a></Link>
            <span>&copy; { (new Date()).getFullYear() } simplysocial</span>
        </nav>
        <style jsx>{`
            .footer {
                padding-top: 31px;
                
                border-top: 1px solid #dee1e5;

                text-transform: uppercase;
                font-size: 11px;
                font-weight: 500;

                color: #70767f;
            }

            nav {
                text-align: center;
            }

            a {
                margin: 0 14px 0 15px;
                text-decoration: none;
            }

            a,
            a:link,
            a:visited {
                color: #00b286;
            }

            a:hover,
            a:focus {
                color: #07c596;
                outline: none;
            }
        `}</style>
    </div>
);