import React from 'react';

const Logo = () => (
    <div className="logo">
        <img src="/static/logo-symbol.png" alt=""/>
        <span className="logo__simply">simply</span><span className="logo__social">social</span>

        <style jsx>{`
            img {
                margin: 0 14px 0 0;
            }
            span {
                font-family: 'Proxima Nova';
                font-size: 19px;
            }
            .logo__simply {
                color: #70767f;
            }
            .logo__social {
                color: #bec3cc;
            }
        `}</style>
    </div>
);

Logo.displayName = 'Logo';

export default Logo;