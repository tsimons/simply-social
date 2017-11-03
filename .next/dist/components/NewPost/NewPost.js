'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/TJ/projects/simply-social/components/NewPost/NewPost.js';


var NewPost = function (_Component) {
    (0, _inherits3.default)(NewPost, _Component);

    function NewPost(props) {
        (0, _classCallCheck3.default)(this, NewPost);

        var _this = (0, _possibleConstructorReturn3.default)(this, (NewPost.__proto__ || (0, _getPrototypeOf2.default)(NewPost)).call(this, props));

        _this.state = {
            showImageUrl: false,
            showVideoUrl: false,
            message: '',
            imageUrl: '',
            videoUrl: ''
        };

        // Bind functions now to avoid creating functions in the render method
        _this.clickAddImage = _this.clickAddImage.bind(_this);
        _this.clickAddVideo = _this.clickAddVideo.bind(_this);
        _this.addPost = _this.addPost.bind(_this);
        _this.setMessageText = _this.setMessageText.bind(_this);
        _this.setImageUrl = _this.setImageUrl.bind(_this);
        _this.setVideoUrl = _this.setVideoUrl.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(NewPost, [{
        key: 'clickAddImage',
        value: function clickAddImage() {
            var _this2 = this;

            this.setState(function () {
                return {
                    showImageUrl: !_this2.state.showImageUrl,
                    showVideoUrl: false
                };
            });
        }
    }, {
        key: 'clickAddVideo',
        value: function clickAddVideo() {
            var _this3 = this;

            this.setState(function () {
                return {
                    showVideoUrl: !_this3.state.showVideoUrl,
                    showImageUrl: false
                };
            });
        }
    }, {
        key: 'setImageUrl',
        value: function setImageUrl(e) {
            var imageUrl = e.target.value;
            this.setState(function () {
                return {
                    imageUrl: imageUrl
                };
            });
        }
    }, {
        key: 'setVideoUrl',
        value: function setVideoUrl(e) {
            var videoUrl = e.target.value;
            this.setState(function () {
                return {
                    videoUrl: videoUrl
                };
            });
        }
    }, {
        key: 'setMessageText',
        value: function setMessageText(e) {
            // make sure to grab the value ahead of time since the event may change by the time the setState call goes through
            var message = e.target.value;
            this.setState(function () {
                return {
                    message: message
                };
            });
        }
    }, {
        key: 'addPost',
        value: function addPost(e) {
            e.preventDefault();
            this.props.addPost({
                message: this.state.message,
                image: this.state.imageUrl,
                video: this.state.videoUrl,
                author: this.props.author
            });
            this.reset();
        }
    }, {
        key: 'reset',
        value: function reset() {
            this.setState(function () {
                return {
                    message: '',
                    imageUrl: '',
                    videoUrl: '',
                    showImageUrl: false,
                    showVideoUrl: false
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _React$createElement, _React$createElement2;

            var _props = this.props,
                theme = _props.theme,
                addPost = _props.addPost;
            var _state = this.state,
                showImageUrl = _state.showImageUrl,
                showVideoUrl = _state.showVideoUrl;

            return _react2.default.createElement('form', { onSubmit: this.addPost, className: 'jsx-2855272136' + ' ' + ((0, _classnames2.default)('new-post', {
                    'new-post--light': theme === 'light',
                    'new-post--dark': theme === 'dark',
                    'new-post--media-open': showImageUrl || showVideoUrl,
                    'new-post--image-open': showImageUrl,
                    'new-post--video-open': showVideoUrl
                }) || ''),
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 99
                }
            }, _react2.default.createElement('div', {
                className: 'jsx-2855272136' + ' ' + 'new-post__text-container',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 106
                }
            }, _react2.default.createElement('input', { placeholder: 'What\'s on your mind?', onChange: this.setMessageText, value: this.state.message, className: 'jsx-2855272136' + ' ' + 'new-post__text',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 107
                }
            })), _react2.default.createElement('div', {
                className: 'jsx-2855272136' + ' ' + 'new-post__addons',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 110
                }
            }, _react2.default.createElement('div', {
                className: 'jsx-2855272136' + ' ' + 'new-post__addons-links',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 111
                }
            }, _react2.default.createElement('div', {
                className: 'jsx-2855272136' + ' ' + 'new-post__addons-image',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 112
                }
            }, _react2.default.createElement('a', { href: 'javascript:void(0)', onClick: this.clickAddImage, className: 'jsx-2855272136' + ' ' + ((0, _classnames2.default)('new-post__media-link', {
                    'is-active': showImageUrl
                }) || ''),
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 113
                }
            }, theme === 'light' ? _react2.default.createElement('img', { src: '/static/camera-icon-o.png', alt: '', className: 'jsx-2855272136',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 118
                }
            }) : _react2.default.createElement('img', { src: '/static/camera-icon-o-dark.png', alt: '', className: 'jsx-2855272136',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 120
                }
            }), '  Add Photo')), _react2.default.createElement('div', {
                className: 'jsx-2855272136' + ' ' + 'new-post__addons-video',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 124
                }
            }, _react2.default.createElement('a', { href: 'javascript:void(0)', onClick: this.clickAddVideo, className: 'jsx-2855272136' + ' ' + ((0, _classnames2.default)('new-post__media-link', {
                    'is-active': showVideoUrl
                }) || ''),
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 125
                }
            }, theme === 'light' ? _react2.default.createElement('img', { src: '/static/video-icon-o.png', alt: '', className: 'jsx-2855272136',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 130
                }
            }) : _react2.default.createElement('img', { src: '/static/video-icon-o-dark.png', alt: '', className: 'jsx-2855272136',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 132
                }
            }), ' Add Video'))), _react2.default.createElement('div', {
                className: 'jsx-2855272136' + ' ' + 'new-post__addons-inputs',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 138
                }
            }, showImageUrl && _react2.default.createElement('div', {
                className: 'jsx-2855272136' + ' ' + 'new-post__addons-image-url',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 141
                }
            }, _react2.default.createElement('input', (_React$createElement = { type: 'url', placeholder: 'Image url', onChange: this.setImageUrl, value: this.state.imageUrl }, (0, _defineProperty3.default)(_React$createElement, 'placeholder', 'URL of your image'), (0, _defineProperty3.default)(_React$createElement, 'className', 'jsx-2855272136' + ' ' + 'new-post__media-input'), (0, _defineProperty3.default)(_React$createElement, '__source', {
                fileName: _jsxFileName,
                lineNumber: 142
            }), _React$createElement))), showVideoUrl && _react2.default.createElement('div', {
                className: 'jsx-2855272136' + ' ' + 'new-post__addons-video-url',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 147
                }
            }, _react2.default.createElement('input', (_React$createElement2 = { type: 'url', placeholder: 'Video url', onChange: this.setVideoUrl, value: this.state.videoUrl }, (0, _defineProperty3.default)(_React$createElement2, 'placeholder', 'URL of your video'), (0, _defineProperty3.default)(_React$createElement2, 'className', 'jsx-2855272136' + ' ' + 'new-post__media-input'), (0, _defineProperty3.default)(_React$createElement2, '__source', {
                fileName: _jsxFileName,
                lineNumber: 148
            }), _React$createElement2)))), _react2.default.createElement('div', {
                className: 'jsx-2855272136' + ' ' + 'new-post__addons-post',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 153
                }
            }, _react2.default.createElement('button', {
                className: 'jsx-2855272136' + ' ' + 'new-post__addons-post-btn',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 154
                }
            }, 'Post'))), _react2.default.createElement(_style2.default, {
                styleId: '2855272136',
                css: '.new-post.jsx-2855272136{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.new-post__text-container.jsx-2855272136{-webkit-flex:1;-ms-flex:1;flex:1;margin-bottom:37px;}.new-post__text.jsx-2855272136{width:100%;padding:6px 10px;font-size:30px;font-weight:100;border-radius:3px;}.new-post--light.jsx-2855272136 .new-post__text.jsx-2855272136{background:transparent;color:white;}.new-post--dark.jsx-2855272136 .new-post__text.jsx-2855272136{background:white;color:#3f454d;}.new-post__addons.jsx-2855272136{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.new-post--media-open.jsx-2855272136 .new-post__addons.jsx-2855272136{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.new-post__addons-links.jsx-2855272136{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.new-post__addons-inputs.jsx-2855272136{margin:15px 0 0;}.new-post__media-input.jsx-2855272136{width:100%;font-size:18px;font-weight:100;padding:8px 6px 6px;border:none;outline:none;border-radius:3px;}.new-post--light.jsx-2855272136 .new-post__media-input.jsx-2855272136{background:rgba(255,255,255,.3);color:white;}.new-post--dark.jsx-2855272136 .new-post__media-input.jsx-2855272136{background:white;color:#3f454d;}.new-post__media-input.jsx-2855272136::-webkit-input-placeholder{color:rgba(255,255,255,.7);}.new-post__media-input.jsx-2855272136::-moz-placeholder{color:rgba(255,255,255,.7);}.new-post__media-input.jsx-2855272136:-ms-input-placeholder{color:rgba(255,255,255,.7);}.new-post__media-input.jsx-2855272136::placeholder{color:rgba(255,255,255,.7);}.new-post__addons.jsx-2855272136,.new-post__media-link.jsx-2855272136{font-size:15px;font-weight:100;text-decoration:none;opacity:.5;-webkit-transition:opacity .25s;transition:opacity .25s;}.new-post--light.jsx-2855272136 .new-post__media-link.jsx-2855272136{color:white;}.new-post--dark.jsx-2855272136 .new-post__media-link.jsx-2855272136{color:#70767f;}.new-post__media-link.jsx-2855272136{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.new-post__media-link.jsx-2855272136 img.jsx-2855272136{margin:0 9px 0 0;}.new-post__media-link.jsx-2855272136:hover,.new-post__media-link.jsx-2855272136:focus{opacity:1;outline:none;}.new-post__addons.jsx-2855272136 a.is-active.jsx-2855272136{opacity:1;}.new-post__addons-image.jsx-2855272136,.new-post__addons-video.jsx-2855272136{-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;}.new-post__addons-video.jsx-2855272136{margin:0 0 0 45px;}.new-post__text.jsx-2855272136,.new-post__text.jsx-2855272136:focus{outline:none;border:none;}.new-post__text.jsx-2855272136::-webkit-input-placeholder{color:rgba(255,255,255,.5);}.new-post__text.jsx-2855272136::-moz-placeholder{color:rgba(255,255,255,.5);}.new-post__text.jsx-2855272136:-ms-input-placeholder{color:rgba(255,255,255,.5);}.new-post__text.jsx-2855272136::placeholder{color:rgba(255,255,255,.5);}.new-post__addons-post.jsx-2855272136{-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;}.new-post--media-open.jsx-2855272136 .new-post__addons-post.jsx-2855272136{margin-top:12px;}.new-post__addons-post-btn.jsx-2855272136{padding:13px 24px;outline:none;border:none;border-radius:3px;background:#00b286;color:white;font-size:14px;-webkit-transition:background .25s;transition:background .25s;}.new-post--light.jsx-2855272136 .new-post__addons-post-btn.jsx-2855272136{display:none;}.new-post__addons-post-btn.jsx-2855272136:hover,.new-post__addons-post-btn.jsx-2855272136:focus{background:#41ceab;cursor:pointer;}'
            }));
        }
    }]);

    return NewPost;
}(_react.Component);

NewPost.propTypes = {
    theme: (0, _propTypes.oneOf)(['light', 'dark']),
    author: _propTypes.number,
    addPost: _propTypes.func
};
NewPost.defaultProps = {
    theme: 'light'
};
NewPost.displayNames = 'NewPost';
exports.default = NewPost;