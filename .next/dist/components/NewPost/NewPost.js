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
                css: '.new-post.jsx-2855272136{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.new-post__text-container.jsx-2855272136{-webkit-flex:1;-ms-flex:1;flex:1;margin-bottom:37px;}.new-post__text.jsx-2855272136{width:100%;padding:6px 10px;font-size:30px;font-weight:100;border-radius:3px;}.new-post--light.jsx-2855272136 .new-post__text.jsx-2855272136{background:transparent;color:white;}.new-post--dark.jsx-2855272136 .new-post__text.jsx-2855272136{background:white;color:#3f454d;}.new-post__addons.jsx-2855272136{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.new-post--media-open.jsx-2855272136 .new-post__addons.jsx-2855272136{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.new-post__addons-links.jsx-2855272136{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.new-post__addons-inputs.jsx-2855272136{margin:15px 0 0;}.new-post__media-input.jsx-2855272136{width:100%;font-size:18px;font-weight:100;padding:8px 6px 6px;border:none;outline:none;border-radius:3px;}.new-post--light.jsx-2855272136 .new-post__media-input.jsx-2855272136{background:rgba(255,255,255,.3);color:white;}.new-post--dark.jsx-2855272136 .new-post__media-input.jsx-2855272136{background:white;color:#3f454d;}.new-post__media-input.jsx-2855272136::-webkit-input-placeholder{color:rgba(255,255,255,.7);}.new-post__media-input.jsx-2855272136::-moz-placeholder{color:rgba(255,255,255,.7);}.new-post__media-input.jsx-2855272136:-ms-input-placeholder{color:rgba(255,255,255,.7);}.new-post__media-input.jsx-2855272136::placeholder{color:rgba(255,255,255,.7);}.new-post__addons.jsx-2855272136,.new-post__media-link.jsx-2855272136{font-size:15px;font-weight:100;text-decoration:none;opacity:.5;-webkit-transition:opacity .25s;transition:opacity .25s;}.new-post--light.jsx-2855272136 .new-post__media-link.jsx-2855272136{color:white;}.new-post--dark.jsx-2855272136 .new-post__media-link.jsx-2855272136{color:#70767f;}.new-post__media-link.jsx-2855272136{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.new-post__media-link.jsx-2855272136 img.jsx-2855272136{margin:0 9px 0 0;}.new-post__media-link.jsx-2855272136:hover,.new-post__media-link.jsx-2855272136:focus{opacity:1;outline:none;}.new-post__addons.jsx-2855272136 a.is-active.jsx-2855272136{opacity:1;}.new-post__addons-image.jsx-2855272136,.new-post__addons-video.jsx-2855272136{-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;}.new-post__addons-video.jsx-2855272136{margin:0 0 0 45px;}.new-post__text.jsx-2855272136,.new-post__text.jsx-2855272136:focus{outline:none;border:none;}.new-post__text.jsx-2855272136::-webkit-input-placeholder{color:rgba(255,255,255,.5);}.new-post__text.jsx-2855272136::-moz-placeholder{color:rgba(255,255,255,.5);}.new-post__text.jsx-2855272136:-ms-input-placeholder{color:rgba(255,255,255,.5);}.new-post__text.jsx-2855272136::placeholder{color:rgba(255,255,255,.5);}.new-post__addons-post.jsx-2855272136{-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;}.new-post--media-open.jsx-2855272136 .new-post__addons-post.jsx-2855272136{margin-top:12px;}.new-post__addons-post-btn.jsx-2855272136{padding:13px 24px;outline:none;border:none;border-radius:3px;background:#00b286;color:white;font-size:14px;-webkit-transition:background .25s;transition:background .25s;}.new-post--light.jsx-2855272136 .new-post__addons-post-btn.jsx-2855272136{display:none;}.new-post__addons-post-btn.jsx-2855272136:hover,.new-post__addons-post-btn.jsx-2855272136:focus{background:#41ceab;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmV3UG9zdC9OZXdQb3N0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZKNEIsQUFHc0MsQUFLTixBQUtJLEFBVVksQUFJTixBQUtKLEFBT1MsQUFNVCxBQUtHLEFBSUwsQUFVd0IsQUFJbEIsQUFLYSxBQUtmLEFBU0gsQUFHRSxBQUlELEFBTUksQUFLUCxBQUtBLEFBS0ksQUFJSSxBQUtMLEFBS2lCLEFBSVYsQUFJSixBQUtFLEFBY0wsQUFLTSxVQXZETixBQUtqQixDQWpHcUIsQUF5Q0YsQ0FpQ25CLENBcUNnQixBQWdDaEIsQ0FsRUEsQ0Fab0IsQ0E1QnBCLEFBdUZBLENBOUdrQixBQXlDQSxBQWdDbEIsQ0FtQkEsQUF3QmlCLENBa0JFLElBMUlILEFBbUZoQixFQW1CQSxDQXRFb0IsQ0FrQnBCLEFBd0RBLENBbEhtQixHQWFuQixBQXlDQSxBQVV5QixBQWlFVCxDQWhGQSxDQXhETyxDQTBKdkIsQ0ExSUEsT0FnQ3dCLENBeENKLEFBaUlFLENBaEZ0QixRQXhEQSxBQXVFZSxFQW1DZixLQWpHc0IsRUFnSUMsQ0F6RlAsQ0F5QlksU0FtRDVCLEVBbEkwQixBQTZCSCxBQWFBLEFBYU4sQUFvQ00sR0EzRXZCLENBb0J3QixFQTZHUixPQXpGTSxLQTBGSCxhQXpGbkIsRUEyRitCLFlBcEUvQix3QkFsRHVCLEFBYXZCLEFBaUR1QixTQTNGdkIsaUJBb0pBLE1BaEgyQiw2REFOTyxBQThEbEMsc0NBdkRBLDZFQU5BIiwiZmlsZSI6ImNvbXBvbmVudHMvTmV3UG9zdC9OZXdQb3N0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9USi9wcm9qZWN0cy9zaW1wbHktc29jaWFsIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG9uZU9mLCBmdW5jLCBudW1iZXIgfSBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdQb3N0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICB0aGVtZTogb25lT2YoWydsaWdodCcsICdkYXJrJ10pLFxuICAgICAgICBhdXRob3I6IG51bWJlcixcbiAgICAgICAgYWRkUG9zdDogZnVuY1xuICAgIH07XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICB0aGVtZSA6ICdsaWdodCdcbiAgICB9XG5cbiAgICBzdGF0aWMgZGlzcGxheU5hbWVzID0gJ05ld1Bvc3QnO1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc2hvd0ltYWdlVXJsOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dWaWRlb1VybDogZmFsc2UsXG4gICAgICAgICAgICBtZXNzYWdlOiAnJyxcbiAgICAgICAgICAgIGltYWdlVXJsOiAnJyxcbiAgICAgICAgICAgIHZpZGVvVXJsOiAnJ1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIEJpbmQgZnVuY3Rpb25zIG5vdyB0byBhdm9pZCBjcmVhdGluZyBmdW5jdGlvbnMgaW4gdGhlIHJlbmRlciBtZXRob2RcbiAgICAgICAgdGhpcy5jbGlja0FkZEltYWdlID0gdGhpcy5jbGlja0FkZEltYWdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY2xpY2tBZGRWaWRlbyA9IHRoaXMuY2xpY2tBZGRWaWRlby5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmFkZFBvc3QgPSB0aGlzLmFkZFBvc3QuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zZXRNZXNzYWdlVGV4dCA9IHRoaXMuc2V0TWVzc2FnZVRleHQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zZXRJbWFnZVVybCA9IHRoaXMuc2V0SW1hZ2VVcmwuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zZXRWaWRlb1VybCA9IHRoaXMuc2V0VmlkZW9VcmwuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBjbGlja0FkZEltYWdlKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7XG4gICAgICAgICAgICBzaG93SW1hZ2VVcmw6ICF0aGlzLnN0YXRlLnNob3dJbWFnZVVybCxcbiAgICAgICAgICAgIHNob3dWaWRlb1VybDogZmFsc2VcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIGNsaWNrQWRkVmlkZW8oKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHtcbiAgICAgICAgICAgIHNob3dWaWRlb1VybDogIXRoaXMuc3RhdGUuc2hvd1ZpZGVvVXJsLFxuICAgICAgICAgICAgc2hvd0ltYWdlVXJsOiBmYWxzZVxuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgc2V0SW1hZ2VVcmwoZSkge1xuICAgICAgICBjb25zdCBpbWFnZVVybCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7XG4gICAgICAgICAgICBpbWFnZVVybFxuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgc2V0VmlkZW9VcmwoZSkge1xuICAgICAgICBjb25zdCB2aWRlb1VybCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7XG4gICAgICAgICAgICB2aWRlb1VybFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIFxuICAgIHNldE1lc3NhZ2VUZXh0KGUpIHtcbiAgICAgICAgLy8gbWFrZSBzdXJlIHRvIGdyYWIgdGhlIHZhbHVlIGFoZWFkIG9mIHRpbWUgc2luY2UgdGhlIGV2ZW50IG1heSBjaGFuZ2UgYnkgdGhlIHRpbWUgdGhlIHNldFN0YXRlIGNhbGwgZ29lcyB0aHJvdWdoXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiAoe1xuICAgICAgICAgICAgbWVzc2FnZVxuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgYWRkUG9zdChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5wcm9wcy5hZGRQb3N0KHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IHRoaXMuc3RhdGUubWVzc2FnZSxcbiAgICAgICAgICAgIGltYWdlOiB0aGlzLnN0YXRlLmltYWdlVXJsLFxuICAgICAgICAgICAgdmlkZW86IHRoaXMuc3RhdGUudmlkZW9VcmwsXG4gICAgICAgICAgICBhdXRob3I6IHRoaXMucHJvcHMuYXV0aG9yXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgfVxuXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICcnLFxuICAgICAgICAgICAgaW1hZ2VVcmw6ICcnLFxuICAgICAgICAgICAgdmlkZW9Vcmw6ICcnLFxuICAgICAgICAgICAgc2hvd0ltYWdlVXJsOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dWaWRlb1VybDogZmFsc2VcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyB0aGVtZSwgYWRkUG9zdCB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgeyBzaG93SW1hZ2VVcmwsIHNob3dWaWRlb1VybCB9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuYWRkUG9zdH0gY2xhc3NOYW1lPXtjbGFzc05hbWVzKCduZXctcG9zdCcsIHtcbiAgICAgICAgICAgICAgICAnbmV3LXBvc3QtLWxpZ2h0JzogdGhlbWUgPT09ICdsaWdodCcsXG4gICAgICAgICAgICAgICAgJ25ldy1wb3N0LS1kYXJrJzogdGhlbWUgPT09ICdkYXJrJyxcbiAgICAgICAgICAgICAgICAnbmV3LXBvc3QtLW1lZGlhLW9wZW4nOiBzaG93SW1hZ2VVcmwgfHwgc2hvd1ZpZGVvVXJsLFxuICAgICAgICAgICAgICAgICduZXctcG9zdC0taW1hZ2Utb3Blbic6IHNob3dJbWFnZVVybCxcbiAgICAgICAgICAgICAgICAnbmV3LXBvc3QtLXZpZGVvLW9wZW4nOiBzaG93VmlkZW9VcmwsXG4gICAgICAgICAgICB9KX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXctcG9zdF9fdGV4dC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cIm5ldy1wb3N0X190ZXh0XCIgcGxhY2Vob2xkZXI9XCJXaGF0J3Mgb24geW91ciBtaW5kP1wiIG9uQ2hhbmdlPXt0aGlzLnNldE1lc3NhZ2VUZXh0fSB2YWx1ZT17dGhpcy5zdGF0ZS5tZXNzYWdlfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXctcG9zdF9fYWRkb25zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3LXBvc3RfX2FkZG9ucy1saW5rc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXctcG9zdF9fYWRkb25zLWltYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIG9uQ2xpY2s9e3RoaXMuY2xpY2tBZGRJbWFnZX0gY2xhc3NOYW1lPXtjbGFzc05hbWVzKCduZXctcG9zdF9fbWVkaWEtbGluaycsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lzLWFjdGl2ZSc6IHNob3dJbWFnZVVybFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWUgPT09ICdsaWdodCcgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9jYW1lcmEtaWNvbi1vLnBuZ1wiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvY2FtZXJhLWljb24tby1kYXJrLnBuZ1wiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gIEFkZCBQaG90b1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXctcG9zdF9fYWRkb25zLXZpZGVvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIG9uQ2xpY2s9e3RoaXMuY2xpY2tBZGRWaWRlb30gY2xhc3NOYW1lPXtjbGFzc05hbWVzKCduZXctcG9zdF9fbWVkaWEtbGluaycsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lzLWFjdGl2ZSc6IHNob3dWaWRlb1VybFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWUgPT09ICdsaWdodCcgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy92aWRlby1pY29uLW8ucG5nXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvdmlkZW8taWNvbi1vLWRhcmsucG5nXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBBZGQgVmlkZW9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXctcG9zdF9fYWRkb25zLWlucHV0c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dJbWFnZVVybCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3LXBvc3RfX2FkZG9ucy1pbWFnZS11cmxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cIm5ldy1wb3N0X19tZWRpYS1pbnB1dFwiIHR5cGU9XCJ1cmxcIiBwbGFjZWhvbGRlcj1cIkltYWdlIHVybFwiIG9uQ2hhbmdlPXt0aGlzLnNldEltYWdlVXJsfSB2YWx1ZT17dGhpcy5zdGF0ZS5pbWFnZVVybH0gcGxhY2Vob2xkZXI9XCJVUkwgb2YgeW91ciBpbWFnZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1ZpZGVvVXJsICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXctcG9zdF9fYWRkb25zLXZpZGVvLXVybFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwibmV3LXBvc3RfX21lZGlhLWlucHV0XCIgdHlwZT1cInVybFwiIHBsYWNlaG9sZGVyPVwiVmlkZW8gdXJsXCIgb25DaGFuZ2U9e3RoaXMuc2V0VmlkZW9Vcmx9IHZhbHVlPXt0aGlzLnN0YXRlLnZpZGVvVXJsfSBwbGFjZWhvbGRlcj1cIlVSTCBvZiB5b3VyIHZpZGVvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXctcG9zdF9fYWRkb25zLXBvc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibmV3LXBvc3RfX2FkZG9ucy1wb3N0LWJ0blwiPlBvc3Q8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIC5uZXctcG9zdCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5uZXctcG9zdF9fdGV4dC1jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDM3cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAubmV3LXBvc3RfX3RleHQge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA2cHggMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAubmV3LXBvc3QtLWxpZ2h0IC5uZXctcG9zdF9fdGV4dCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAubmV3LXBvc3QtLWRhcmsgLm5ldy1wb3N0X190ZXh0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzZjQ1NGQ7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAubmV3LXBvc3RfX2FkZG9ucyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5uZXctcG9zdC0tbWVkaWEtb3BlbiAubmV3LXBvc3RfX2FkZG9ucyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLm5ldy1wb3N0X19hZGRvbnMtbGlua3Mge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAubmV3LXBvc3RfX2FkZG9ucy1pbnB1dHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxNXB4IDAgMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5uZXctcG9zdF9fbWVkaWEtaW5wdXQge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogOHB4IDZweCA2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAubmV3LXBvc3QtLWxpZ2h0IC5uZXctcG9zdF9fbWVkaWEtaW5wdXQge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLm5ldy1wb3N0LS1kYXJrIC5uZXctcG9zdF9fbWVkaWEtaW5wdXQge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzNmNDU0ZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5uZXctcG9zdF9fbWVkaWEtaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC43KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLm5ldy1wb3N0X19hZGRvbnMsXG4gICAgICAgICAgICAgICAgICAgIC5uZXctcG9zdF9fbWVkaWEtbGluayB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogLjU7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjI1cztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLm5ldy1wb3N0LS1saWdodCAubmV3LXBvc3RfX21lZGlhLWxpbmsge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5uZXctcG9zdC0tZGFyayAubmV3LXBvc3RfX21lZGlhLWxpbmsge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM3MDc2N2Y7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAubmV3LXBvc3RfX21lZGlhLWxpbmsge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLm5ldy1wb3N0X19tZWRpYS1saW5rIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgOXB4IDAgMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5uZXctcG9zdF9fbWVkaWEtbGluazpob3ZlcixcbiAgICAgICAgICAgICAgICAgICAgLm5ldy1wb3N0X19tZWRpYS1saW5rOmZvY3VzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAubmV3LXBvc3RfX2FkZG9ucyBhLmlzLWFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLm5ldy1wb3N0X19hZGRvbnMtaW1hZ2UsXG4gICAgICAgICAgICAgICAgICAgIC5uZXctcG9zdF9fYWRkb25zLXZpZGVvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLm5ldy1wb3N0X19hZGRvbnMtdmlkZW8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMCA0NXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLm5ldy1wb3N0X190ZXh0ICxcbiAgICAgICAgICAgICAgICAgICAgLm5ldy1wb3N0X190ZXh0OmZvY3VzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAubmV3LXBvc3RfX3RleHQ6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC41KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5uZXctcG9zdF9fYWRkb25zLXBvc3Qge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAubmV3LXBvc3QtLW1lZGlhLW9wZW4gLm5ldy1wb3N0X19hZGRvbnMtcG9zdCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLm5ldy1wb3N0X19hZGRvbnMtcG9zdC1idG4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxM3B4IDI0cHg7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDBiMjg2O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjI1cztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5uZXctcG9zdC0tbGlnaHQgLm5ldy1wb3N0X19hZGRvbnMtcG9zdC1idG4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5uZXctcG9zdF9fYWRkb25zLXBvc3QtYnRuOmhvdmVyLFxuICAgICAgICAgICAgICAgICAgICAubmV3LXBvc3RfX2FkZG9ucy1wb3N0LWJ0bjpmb2N1cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNDFjZWFiO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICk7XG4gICAgfVxufSJdfQ== */\n/*@ sourceURL=components/NewPost/NewPost.js */'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmV3UG9zdC9OZXdQb3N0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50Iiwib25lT2YiLCJmdW5jIiwibnVtYmVyIiwiY2xhc3NOYW1lcyIsIk5ld1Bvc3QiLCJwcm9wcyIsInN0YXRlIiwic2hvd0ltYWdlVXJsIiwic2hvd1ZpZGVvVXJsIiwibWVzc2FnZSIsImltYWdlVXJsIiwidmlkZW9VcmwiLCJjbGlja0FkZEltYWdlIiwiYmluZCIsImNsaWNrQWRkVmlkZW8iLCJhZGRQb3N0Iiwic2V0TWVzc2FnZVRleHQiLCJzZXRJbWFnZVVybCIsInNldFZpZGVvVXJsIiwic2V0U3RhdGUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJwcmV2ZW50RGVmYXVsdCIsImltYWdlIiwidmlkZW8iLCJhdXRob3IiLCJyZXNldCIsInRoZW1lIiwicHJvcFR5cGVzIiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTyxBQUFNOztBQUN0QixBQUFPOzs7Ozs7Ozs7SUFFYyxBO3FDQWFqQjs7cUJBQUEsQUFBWSxPQUFPOzRDQUFBOzs0SUFBQSxBQUNULEFBQ047O2NBQUEsQUFBSzswQkFBUSxBQUNLLEFBQ2Q7MEJBRlMsQUFFSyxBQUNkO3FCQUhTLEFBR0EsQUFDVDtzQkFKUyxBQUlDLEFBQ1Y7c0JBTEosQUFBYSxBQUtDLEFBR2Q7QUFSYSxBQUNUOztBQVFKO2NBQUEsQUFBSyxnQkFBZ0IsTUFBQSxBQUFLLGNBQUwsQUFBbUIsS0FBeEMsQUFDQTtjQUFBLEFBQUssZ0JBQWdCLE1BQUEsQUFBSyxjQUFMLEFBQW1CLEtBQXhDLEFBQ0E7Y0FBQSxBQUFLLFVBQVUsTUFBQSxBQUFLLFFBQUwsQUFBYSxLQUE1QixBQUNBO2NBQUEsQUFBSyxpQkFBaUIsTUFBQSxBQUFLLGVBQUwsQUFBb0IsS0FBMUMsQUFD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QUFBLG9FQUM2QyxNQUF6QyxBQUE4QyxPQUFNLGFBQXBELEFBQWdFLGFBQVksVUFBVSxLQUF0RixBQUEyRixhQUFhLE9BQU8sS0FBQSxBQUFLLE1BQXBILEFBQTBILGdGQUExSCxBQUFnSixpSEFBaEosQUFBaUI7MEJBQWpCOzRCQUFBO0FBQUEsZ0JBdENoQixBQTRCSSxBQVNRLEFBTVIsMkNBQUEsY0FBQTtvREFBQSxBQUFlOzs4QkFBZjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBO29EQUFBLEFBQWtCOzs4QkFBbEI7Z0NBQUE7QUFBQTtBQUFBLGVBdkRaLEFBV0ksQUEyQ0ksQUFDSTt5QkF2RFo7cUJBREosQUFDSSxBQWtPUDtBQWxPTzs7Ozs7QSxBQTlGeUI7O0FBQWhCLEEsUUFDVixBO1dBQ0ksc0JBQU0sQ0FBQSxBQUFDLFNBREMsQUFDUixBQUFNLEFBQVUsQUFDdkI7QUFGZSxBQUVQLEFBQ1I7QUFIZSxBLEFBR047QUFITSxBQUNmO0FBRmEsQSxRQU9WLEE7VyxBQUFlLEFBQ1Y7QUFEVSxBQUNsQjtBQVJhLEEsUUFXVixBLGVBQWUsQTtrQkFYTCxBIiwiZmlsZSI6Ik5ld1Bvc3QuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL1RKL3Byb2plY3RzL3NpbXBseS1zb2NpYWwifQ==