import React from 'react';
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';

import createStore from '../../modules/store';

import Base from '../../layouts/Base';

import Slider from '../../components/Slider';
import RadioButton from '../../components/RadioButton';

const FeedView = () => (
    <Base>
        <div className="settings">
            <h1>Settings</h1>

            <div className="settings__account-container">
                <h2>Account</h2>
                <div className="settings__account">
                    <div className="settings__account-image-container">
                        <img src="https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-1/p160x160/20228285_10156386606534638_4208836979691078674_n.jpg?oh=fbeb0943ca159be516c2eba0fd068152&oe=5A6A3C09" alt=""/>
                        <button className="settings__account-change-image-btn">change</button>
                    </div>
                    <div className="settings__account-form-container">
                        <div className="settings__account-form-row">
                            <input type="text" value="TJ Simons" />
                        </div>
                        <div className="settings__account-form-row">
                            <input type="email" value="t.simons88@gmail.com" />
                        </div>
                        <div className="settings__account-form-row">
                            <input type="password" />
                        </div>
                        <div className="settings__account-form-row">
                            <input type="password"  />
                        </div>
                    </div>
                </div>

                <div className="settings__notifications">
                    <h2>Notifications</h2>
                    <div className="settings__notifications-row">
                        <Slider /> <span>email me when my posts are marked as favorites</span>
                    </div>
                    <div className="settings__notifications-row">
                        <Slider /> <span>email me when I'm mentioned</span>
                    </div>
                    <div className="settings__notifications-row">
                        <Slider /> <span>email me when I get a reply</span>
                    </div>
                    <div className="settings__notifications-row">
                        <Slider /> <span>email me when someone follows me</span>
                    </div>
                </div>

                <div className="settings__privacy">
                    <h2>Privacy</h2>
                    <div className="settings__privacy-group">
                        <div className="settings__privacy-row">
                            <RadioButton checked /> <span>allow anyone to tag me</span>
                        </div>
                        <div className="settings__privacy-row">
                            <RadioButton checked /> <span>only allow people I follow to tag me</span>
                        </div>
                        <div className="settings__privacy-row">
                            <RadioButton checked /> <span>don't allow anyone to tag me</span>
                        </div>
                    </div>
                    <div className="settings__privacy-group">
                        <div className="settings__privacy-row">
                            <RadioButton checked /> <span>add a location to my posts</span>
                        </div>
                    </div>
                    <div className="settings__privacy-group">
                        <div className="settings__privacy-row">
                            <RadioButton checked /> <span>let others find me by email address</span>
                        </div>
                    </div>
                    <div className="settings__privacy-group">
                        <div className="settings__privacy-row">
                            <RadioButton checked /> <span>tailor ads based on my information</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <style jsx>{`
            .settings {
                max-width: 575px;
                margin: 49px auto 0;

                font-size: 16px;
                color: #70767f;
            }

            h1 {
                margin: 0 0 54px;

                font-size: 30px;
                font-weight: normal;
                color: #3f454d;
            }

            h2 {
                margin: 0 0 25px;

                font-size: 13px;
                font-weight: 500;
                color: #70767f;
                text-transform: uppercase;   
            }

            .settings__account {
                display: flex;
                flex-direction: row;
                align-itmes: flex-start;
                justify-content: stretch;
            }

            .settings__account,
            .settings__notifications {
                padding: 0 0 50px 0;
                margin: 0 0 48px;

                border-bottom: 1px solid #dee1e5;
            }

            .settings__account-image-container {
                flex: 0 0 85px;
            }
            
            .settings__account-image-container img {
                border-radius: 4px;
                margin: 0 0 10px 0;
            }

            .settings__account-change-image-btn {
                display: block;
                width: 100%;

                padding: 6px 0;

                background: #fff;
                
                border: 1px solid #bec3cc;
                border-radius: 4px;

                text-align: center;
                color: #bec3cc;

                cursor: pointer;
            }

            .settings__account-change-image-btn:hover,
            .settings__account-change-image-btn:active {
                color: #9a9fa9;
                border-color: #9a9fa9;
            }

            .settings__account-form-container {
                flex: 1 1 auto;
                margin: 0 0 0 50px;
            }

            .settings__account-form-row {
                margin-bottom: 20px;
            }

            .settings__account input {
                width: 100%;
                padding: 14px 14px 9px 40px;

                border: 1px solid #bec3cc;
                border-radius: 4px;

                outline: none;

                font-size: 16px;
                color: #33f454d;
            }

            .settings__account input:focus {
                outline: none;
            }

            .settings__notifications-row {
                margin: 0 0 20px 0;

                display: flex;
                flex-direction: row;
                align-items: center;
            }

            .settings__notifications-row span {
                margin: 0 0 0 25px;
            }

            .settings__privacy-row {
                display: flex;
                flex-direction: row;
                align-items: center;

                margin: 0 0 10px 0;
            }
            .settings__privacy-row span {
                margin: 0 0 0 26px;
            }

            .settings__privacy-group {
                margin: 0 0 25px 0;
            }
        `}</style>
    </Base>
);

export default withRedux(createStore)(FeedView);