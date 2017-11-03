import React from 'react';
import { node }  from 'prop-types';
import Navigation from '../../containers/NavigationContainer';
import Footer from '../../components/Footer';
import Head from 'next/head';

const BaseLayout =  ({ children }) => (
    <div className="base-layout">
        <Head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"/>
        </Head>

        <div className="base-layout__navigation">
            <Navigation />
        </div>
        
        <div className="base-layout__content">
            {children}
        </div>

        <div className="base-layout__footer">
            <Footer />
        </div>

        <style jsx global>{`
            body,
            html,
            body > *,
            body > * > *,
            body > * > * > * {
                height: 100%;
            }

            body {
                font-family: "Open Sans";
            }

            * {
                box-sizing: border-box;
            }

            img, video {
                vertical-align: middle;
                max-width: 100%;
            }
        `}</style>

        <style jsx>{`
            .base-layout {
                display: flex;
                flex-direction: column;
                align-items: stretch;
                height: 100%;
            }

            .base-layout__navigation {
                flex: 0 0 60px;
            }

            .base-layout__content {
                flex: 1 1 100%;
            }

            .base-layout__footer {
                flex: 0 0 70px;
            }
        
        `}</style>
    </div>
);

BaseLayout.displayName = 'BaseLayout';
BaseLayout.propTypes = {
    children: node
}

export default BaseLayout;