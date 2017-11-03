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

var _linkifyMessage = require('../../helpers/linkifyMessage');

var _linkifyMessage2 = _interopRequireDefault(_linkifyMessage);

var _Video = require('../Video');

var _Video2 = _interopRequireDefault(_Video);

var _Reply = require('./Reply');

var _Reply2 = _interopRequireDefault(_Reply);

var _Controls = require('./Controls');

var _Controls2 = _interopRequireDefault(_Controls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/TJ/projects/simply-social/components/Post/Post.js';


var LIST = 'list';
var TILE = 'tile';
var STANDALONE = 'standalone';

var Post = function (_Component) {
    (0, _inherits3.default)(Post, _Component);

    function Post(props) {
        (0, _classCallCheck3.default)(this, Post);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Post.__proto__ || (0, _getPrototypeOf2.default)(Post)).call(this, props));

        _this.state = {
            expanded: false,
            replyOpen: false
        };
        return _this;
    }

    (0, _createClass3.default)(Post, [{
        key: 'expand',
        value: function expand() {
            var _this2 = this;

            this.setState(function () {
                return { expanded: !_this2.state.expanded };
            });
        }
    }, {
        key: 'reply',
        value: function reply() {
            this.expand();
            this.refs.reply.focus();
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                post = _props.post,
                author = _props.author,
                layout = _props.layout,
                liked = _props.liked,
                _like = _props.like,
                userId = _props.userId,
                focusPost = _props.focusPost;
            var expanded = this.state.expanded;

            var hasReplies = post.replies && post.replies.length > 0;
            var message = (0, _linkifyMessage2.default)(post.message);

            return _react2.default.createElement('div', {
                className: 'jsx-4205585472' + ' ' + ('post post--' + layout),
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }, _react2.default.createElement('div', {
                className: 'jsx-4205585472' + ' ' + 'post__text',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                }
            }, _react2.default.createElement('div', {
                className: 'jsx-4205585472' + ' ' + 'post__author-image-container',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            }, _react2.default.createElement('img', { src: author.image, alt: 'A picture of ' + author.name, className: 'jsx-4205585472' + ' ' + 'post__author-image',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                }
            })), _react2.default.createElement('div', {
                className: 'jsx-4205585472' + ' ' + 'post__contents',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                }
            }, _react2.default.createElement('div', {
                className: 'jsx-4205585472' + ' ' + 'post__header',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                }
            }, _react2.default.createElement('div', {
                className: 'jsx-4205585472' + ' ' + 'post__author-name',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 82
                }
            }, author.name), (layout === LIST || layout === STANDALONE) && _react2.default.createElement('div', {
                className: 'jsx-4205585472' + ' ' + 'post__controls',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 87
                }
            }, _react2.default.createElement(_Controls2.default, { reply: function reply() {}, like: function like() {
                    return _like(post.id, userId);
                }, timestamp: post.timestamp, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 87
                }
            }))), _react2.default.createElement('div', {
                className: 'jsx-4205585472' + ' ' + 'post__message',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 91
                }
            }, message), liked && _react2.default.createElement('div', {
                className: 'jsx-4205585472' + ' ' + 'post__liked',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 96
                }
            }, _react2.default.createElement('img', { src: '/static/heart-icon-green.png', alt: '', className: 'jsx-4205585472',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 97
                }
            }), ' Liked'))), (post.image || post.video) && _react2.default.createElement('div', {
                className: 'jsx-4205585472' + ' ' + 'post__media',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 104
                }
            }, post.image && _react2.default.createElement('img', { src: post.image, onClick: function onClick() {
                    return layout !== STANDALONE && focusPost(post.id);
                }, className: 'jsx-4205585472',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 107
                }
            }), post.video && _react2.default.createElement(_Video2.default, { controls: true, src: post.video, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 112
                }
            })), hasReplies && _react2.default.createElement('div', {
                className: 'jsx-4205585472' + ' ' + 'post__expand',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 118
                }
            }, _react2.default.createElement('a', { href: 'javascript:void(0)', onClick: this.expand, className: 'jsx-4205585472' + ' ' + 'post__expand-link',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 119
                }
            }, expanded ? 'Expand' : 'Collapse')), hasReplies && expanded && _react2.default.createElement('div', {
                className: 'jsx-4205585472' + ' ' + 'post__replies',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 127
                }
            }, post.replies.map(function (reply, i) {
                return _react2.default.createElement(_Reply2.default, { key: reply.message, reply: reply, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 129
                    }
                });
            })), layout === TILE && _react2.default.createElement('div', {
                className: 'jsx-4205585472' + ' ' + 'post__controls',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 136
                }
            }, _react2.default.createElement(_Controls2.default, { reply: function reply() {}, like: function like() {
                    return _like(post.id, userId);
                }, timestamp: post.timestamp, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 136
                }
            })), expanded && _react2.default.createElement('div', {
                className: 'jsx-4205585472' + ' ' + 'post__reply-form',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 140
                }
            }, _react2.default.createElement('textarea', { placeholder: 'What would you like to say to ' + post.author.name + '?', className: 'jsx-4205585472' + ' ' + 'post__reply-textarea',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 141
                }
            })), _react2.default.createElement(_style2.default, {
                styleId: '4205585472',
                css: '.post.jsx-4205585472{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column nowrap;-ms-flex-flow:column nowrap;flex-flow:column nowrap;margin:0 0 25px;border:1px solid #dee1e5;border-radius:4px;background:white;}.post--standalone.jsx-4205585472{width:975px;}.post--tile.jsx-4205585472{max-width:375px;}.post__text.jsx-4205585472{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;padding:25px;}.post__author-image-container.jsx-4205585472{-webkit-flex:0 0 40px;-ms-flex:0 0 40px;flex:0 0 40px;}.post__author-image.jsx-4205585472{border-radius:4px;}.post__contents.jsx-4205585472{-webkit-flex:1;-ms-flex:1;flex:1;margin:0 0 0 16px;}.post__header.jsx-4205585472{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;margin:0 0 10px;}.post__author-name.jsx-4205585472{font-size:16px;color:#3f454d;}.post__message.jsx-4205585472{font-size:15px;color:#70767f;line-height:1.6;}.post__message-link{text-decoration:none;color:#bec3cc;}.post__controls.jsx-4205585472{text-align:right;padding:24px 22px 21px 0;}.post__header.jsx-4205585472 .post__controls.jsx-4205585472{text-align:left;padding:0;}.post__liked.jsx-4205585472{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:12px;color:#00b286;margin:26px 0 0;}.post__liked.jsx-4205585472 img.jsx-4205585472{margin:0 6px 0 0;}.post__media.jsx-4205585472{text-align:center;}.post__text.jsx-4205585472{-webkit-order:1;-ms-flex-order:1;order:1;}.post__media.jsx-4205585472{-webkit-order:2;-ms-flex-order:2;order:2;}.post__expand.jsx-4205585472{-webkit-order:3;-ms-flex-order:3;order:3;}.post__replies.jsx-4205585472{-webkit-order:4;-ms-flex-order:4;order:4;}.post__controls.jsx-4205585472{-webkit-order:5;-ms-flex-order:5;order:5;}.post__reply-form.jsx-4205585472{-webkit-order:6;-ms-flex-order:6;order:6;}.post--standalone.jsx-4205585472 .post__media.jsx-4205585472{-webkit-order:-1;-ms-flex-order:-1;order:-1;margin:-1px -1px 0 -1px;text-align:center;}.post__media.jsx-4205585472 video{width:100%;}'
            }));
        }
    }]);

    return Post;
}(_react.Component);

Post.propTypes = {
    post: (0, _propTypes.shape)({
        message: _propTypes.string,
        author: _propTypes.number,
        timestamp: _propTypes.number,
        image: _propTypes.string,
        video: _propTypes.string,
        replies: (0, _propTypes.arrayOf)((0, _propTypes.shape)({
            author: _propTypes.number,
            message: _propTypes.string
        })),
        loves: (0, _propTypes.arrayOf)(_propTypes.number),
        location: _propTypes.string
    }).isRequired,
    author: (0, _propTypes.shape)({
        name: _propTypes.string,
        image: _propTypes.string,
        id: _propTypes.number
    }),
    layout: (0, _propTypes.oneOf)([LIST, TILE, STANDALONE]),
    liked: _propTypes.bool,
    like: _propTypes.func,
    replyToPost: _propTypes.func,
    userId: _propTypes.number,
    focusPost: _propTypes.func
};
Post.defaultProps = {
    layout: LIST
};
Post.displayName = 'Post';
exports.default = Post;