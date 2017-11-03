import React from 'react';
import { shape, string } from 'prop-types';

const Header = ({ profile }) => (
    <div className="header">
        <div className="header__img-container">
            <img src={profile.image} className="header__img" alt=""/>
        </div>

        <h1 className="header__name">{profile.name}</h1>
        <p className="header__bio">{profile.bio}</p>
        <p className="header__site"><a href={profile.site} className="header__site-link">{profile.site}</a></p>

        <style jsx>{`
            .header {
                text-align: center;
            }
            .header__img-container {
                margin: 0 0 25px 0;
            }
            .header__img {
                display: inline-block;
                width: 85px;
                height: 85px;
                border-radius: 3px;
            }

            .header__name {
                margin : 0 0 15px 0;

                font-size: 30px;
                color: white;
            }

            .header__bio {
                margin : 0 0 10px 0;

                font-size: 15px;
                color: white;
                opacity: .7;
            }

            .header__site-link:link {
                font-size: 15px;
                text-decoration: none;
                opacity: .7;
            }
            
            .header__site-link:link,
            .header__site-link:visited {
                color: #262728;
            }
        `}</style>
    </div>
);

Header.displayName = 'HomeLayoutHeader';
Header.propTypes = {
    profile: shape({
        img: string,
        name: string,
        bio: string,
        site: string
    })
}
Header.defaultProps = {
    profile: {
        img: '',
        name: '',
        bio: '',
        site: ''
    }
}

export default Header;