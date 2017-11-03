'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _propTypes2 = _interopRequireDefault(_propTypes);

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
            showVideoUrl: false
        };

        // Bind functions now to avoid creating functions in the render method
        _this.clickAddImage = _this.clickAddImage.bind(_this);
        _this.clickAddVideo = _this.clickAddVideo.bind(_this);
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
        key: 'render',
        value: function render() {
            var theme = this.props.theme;
            var _state = this.state,
                showImageUrl = _state.showImageUrl,
                showVideoUrl = _state.showVideoUrl;

            return _react2.default.createElement('div', {
                className: 'jsx-875025957' + ' ' + ((0, _classnames2.default)('new-post', {
                    'new-post--light': theme === 'light',
                    'new-post--dark': theme === 'dark',
                    'new-post--media-open': showImageUrl || showVideoUrl,
                    'new-post--image-open': showImageUrl,
                    'new-post--video-open': showVideoUrl
                }) || ''),
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, _react2.default.createElement('div', {
                className: 'jsx-875025957' + ' ' + 'new-post__text-container',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, _react2.default.createElement('textarea', { placeholder: 'What\'s on your mind?', rows: '2', className: 'jsx-875025957' + ' ' + 'new-post__text',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            })), _react2.default.createElement('div', {
                className: 'jsx-875025957' + ' ' + 'new-post__addons',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, _react2.default.createElement('div', {
                className: 'jsx-875025957' + ' ' + 'new-post__addons-links',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, _react2.default.createElement('div', {
                className: 'jsx-875025957' + ' ' + 'new-post__addons-image',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, _react2.default.createElement('a', { href: 'javascript:void(0)', onClick: this.clickAddImage, className: 'jsx-875025957' + ' ' + ((0, _classnames2.default)('new-post__media-link', {
                    'is-active': showImageUrl
                }) || ''),
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, theme === 'light' ? _react2.default.createElement('img', { src: '/static/camera-icon-o.png', alt: '', className: 'jsx-875025957',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }) : _react2.default.createElement('img', { src: '/static/camera-icon-o-dark.png', alt: '', className: 'jsx-875025957',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }), '  Add Photo')), _react2.default.createElement('div', {
                className: 'jsx-875025957' + ' ' + 'new-post__addons-video',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            }, _react2.default.createElement('a', { href: 'javascript:void(0)', onClick: this.clickAddVideo, className: 'jsx-875025957' + ' ' + ((0, _classnames2.default)('new-post__media-link', {
                    'is-active': showVideoUrl
                }) || ''),
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }, theme === 'light' ? _react2.default.createElement('img', { src: '/static/video-icon-o.png', alt: '', className: 'jsx-875025957',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                }
            }) : _react2.default.createElement('img', { src: '/static/video-icon-o-dark.png', alt: '', className: 'jsx-875025957',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                }
            }), ' Add Video'))), _react2.default.createElement('div', {
                className: 'jsx-875025957' + ' ' + 'new-post__addons-inputs',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 86
                }
            }, showImageUrl && _react2.default.createElement('div', {
                className: 'jsx-875025957' + ' ' + 'new-post__addons-image-url',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 89
                }
            }, _react2.default.createElement('input', { type: 'url', placeholder: 'Image url', className: 'jsx-875025957' + ' ' + 'new-post__media-input',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90
                }
            })), showVideoUrl && _react2.default.createElement('div', {
                className: 'jsx-875025957' + ' ' + 'new-post__addons-video-url',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 95
                }
            }, _react2.default.createElement('input', { type: 'url', placeholder: 'Video url', className: 'jsx-875025957' + ' ' + 'new-post__media-input',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 96
                }
            }))), _react2.default.createElement('div', {
                className: 'jsx-875025957' + ' ' + 'new-post__addons-post',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 101
                }
            }, _react2.default.createElement('button', {
                className: 'jsx-875025957' + ' ' + 'new-post__addons-post-btn',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 102
                }
            }, 'Post'))), _react2.default.createElement(_style2.default, {
                styleId: '875025957',
                css: '.new-post.jsx-875025957{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.new-post__text-container.jsx-875025957{-webkit-flex:1;-ms-flex:1;flex:1;margin-bottom:12px;}.new-post__text.jsx-875025957{width:100%;padding:6px 10px;resize:none;font-size:30px;font-weight:100;border-radius:3px;}.new-post--light.jsx-875025957 .new-post__text.jsx-875025957{background:transparent;color:white;}.new-post--dark.jsx-875025957 .new-post__text.jsx-875025957{background:white;color:#3f454d;}.new-post__addons.jsx-875025957{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.new-post--media-open.jsx-875025957 .new-post__addons.jsx-875025957{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.new-post__addons-links.jsx-875025957{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.new-post__addons-inputs.jsx-875025957{margin:15px 0 0;}.new-post__media-input.jsx-875025957{width:100%;font-size:18px;font-weight:100;padding:8px 6px 6px;border:none;outline:none;border-radius:3px;}.new-post--light.jsx-875025957 .new-post__media-input.jsx-875025957{background:rgba(255,255,255,.3);color:white;}.new-post--dark.jsx-875025957 .new-post__media-input.jsx-875025957{background:white;color:#3f454d;}.new-post__media-input.jsx-875025957::-webkit-input-placeholder{color:rgba(255,255,255,.7);}.new-post__media-input.jsx-875025957::-moz-placeholder{color:rgba(255,255,255,.7);}.new-post__media-input.jsx-875025957:-ms-input-placeholder{color:rgba(255,255,255,.7);}.new-post__media-input.jsx-875025957::placeholder{color:rgba(255,255,255,.7);}.new-post__addons.jsx-875025957,.new-post__media-link.jsx-875025957{font-size:15px;font-weight:100;text-decoration:none;opacity:.5;-webkit-transition:opacity .25s;transition:opacity .25s;}.new-post--light.jsx-875025957 .new-post__media-link.jsx-875025957{color:white;}.new-post--dark.jsx-875025957 .new-post__media-link.jsx-875025957{color:#70767f;}.new-post__media-link.jsx-875025957:hover,.new-post__media-link.jsx-875025957:focus{opacity:1;outline:none;}.new-post__addons.jsx-875025957 a.is-active.jsx-875025957{opacity:1;}.new-post__addons-image.jsx-875025957,.new-post__addons-video.jsx-875025957{-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;}.new-post__addons-video.jsx-875025957{margin:0 0 0 45px;}.new-post__text.jsx-875025957,.new-post__text.jsx-875025957:focus{outline:none;border:none;}.new-post__text.jsx-875025957::-webkit-input-placeholder{color:rgba(255,255,255,.5);}.new-post__text.jsx-875025957::-moz-placeholder{color:rgba(255,255,255,.5);}.new-post__text.jsx-875025957:-ms-input-placeholder{color:rgba(255,255,255,.5);}.new-post__text.jsx-875025957::placeholder{color:rgba(255,255,255,.5);}.new-post__addons-post.jsx-875025957{-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;}.new-post--media-open.jsx-875025957 .new-post__addons-post.jsx-875025957{margin-top:12px;}.new-post__addons-post-btn.jsx-875025957{padding:13px 24px;outline:none;border:none;border-radius:3px;background:#00b286;color:white;font-size:14px;-webkit-transition:background .25s;transition:background .25s;}.new-post--light.jsx-875025957 .new-post__addons-post-btn.jsx-875025957{display:none;}.new-post__addons-post-btn.jsx-875025957:hover,.new-post__addons-post-btn.jsx-875025957:focus{background:#41ceab;cursor:pointer;}'
            }));
        }
    }]);

    return NewPost;
}(_react.Component);

NewPost.propTypes = {
    theme: _propTypes2.default.oneOf(['light', 'dark'])
};
NewPost.defaultProps = {
    theme: 'light'
};
NewPost.displayNames = 'NewPost';
exports.default = NewPost;