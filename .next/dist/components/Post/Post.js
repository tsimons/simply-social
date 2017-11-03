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
                css: '.post.jsx-4205585472{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column nowrap;-ms-flex-flow:column nowrap;flex-flow:column nowrap;margin:0 0 25px;border:1px solid #dee1e5;border-radius:4px;background:white;}.post--standalone.jsx-4205585472{width:975px;}.post--tile.jsx-4205585472{max-width:375px;}.post__text.jsx-4205585472{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;padding:25px;}.post__author-image-container.jsx-4205585472{-webkit-flex:0 0 40px;-ms-flex:0 0 40px;flex:0 0 40px;}.post__author-image.jsx-4205585472{border-radius:4px;}.post__contents.jsx-4205585472{-webkit-flex:1;-ms-flex:1;flex:1;margin:0 0 0 16px;}.post__header.jsx-4205585472{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;margin:0 0 10px;}.post__author-name.jsx-4205585472{font-size:16px;color:#3f454d;}.post__message.jsx-4205585472{font-size:15px;color:#70767f;line-height:1.6;}.post__message-link{text-decoration:none;color:#bec3cc;}.post__controls.jsx-4205585472{text-align:right;padding:24px 22px 21px 0;}.post__header.jsx-4205585472 .post__controls.jsx-4205585472{text-align:left;padding:0;}.post__liked.jsx-4205585472{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:12px;color:#00b286;margin:26px 0 0;}.post__liked.jsx-4205585472 img.jsx-4205585472{margin:0 6px 0 0;}.post__media.jsx-4205585472{text-align:center;}.post__text.jsx-4205585472{-webkit-order:1;-ms-flex-order:1;order:1;}.post__media.jsx-4205585472{-webkit-order:2;-ms-flex-order:2;order:2;}.post__expand.jsx-4205585472{-webkit-order:3;-ms-flex-order:3;order:3;}.post__replies.jsx-4205585472{-webkit-order:4;-ms-flex-order:4;order:4;}.post__controls.jsx-4205585472{-webkit-order:5;-ms-flex-order:5;order:5;}.post__reply-form.jsx-4205585472{-webkit-order:6;-ms-flex-order:6;order:6;}.post--standalone.jsx-4205585472 .post__media.jsx-4205585472{-webkit-order:-1;-ms-flex-order:-1;order:-1;margin:-1px -1px 0 -1px;text-align:center;}.post__media.jsx-4205585472 video{width:100%;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdC9Qb3N0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdKNEIsQUFHc0MsQUFZRCxBQUlJLEFBSUgsQUFTQyxBQUlJLEFBSVgsQUFLTSxBQVNFLEFBS0EsQUFNTSxBQUtKLEFBS0QsQUFLSCxBQVVJLEFBSUMsQUFLdkIsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR2MsQUFNRSxXQUNmLENBNUdBLEdBdUNrQixBQUtBLENBeENsQixBQXdEYyxDQUxlLEFBb0I3QixDQXREQSxBQTBEQSxHQTdCa0IsS0FXbEIsR0FyQkEsQUFLb0IsSUFwQkUsRUEwQnRCLE1BZ0NBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxDQTFDQSxFQThDNEIsQ0F4RDVCLE1BcEJBLEdBVEEsY0FzRnNCLE1BbkhNLEFBb0JMLEFBc0JBLEFBbUNBLFlBdUN2Qix5REEvRmtDLEFBc0JBLEFBbUNYLGVBNUVILGdCQUVTLHlCQUNQLGtCQUVELGlCQUNyQixFQXdFbUIsZUFDRCxPQTNEUyxBQXNCQSxPQXNDUCxnQkFDcEIsc0ZBM0RpQixBQXNCRyxhQXJCcEIsR0FzQkEiLCJmaWxlIjoiY29tcG9uZW50cy9Qb3N0L1Bvc3QuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL1RKL3Byb2plY3RzL3NpbXBseS1zb2NpYWwiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgc2hhcGUsIHN0cmluZywgbnVtYmVyLCBhcnJheU9mLCBib29sLCBvbmVPZiwgZnVuYyB9IGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgbGlua2lmeU1lc3NhZ2UgZnJvbSAnLi4vLi4vaGVscGVycy9saW5raWZ5TWVzc2FnZSc7XG5cbmltcG9ydCBWaWRlbyBmcm9tICcuLi9WaWRlbyc7XG5cbmltcG9ydCBSZXBseSBmcm9tICcuL1JlcGx5JztcbmltcG9ydCBDb250cm9scyBmcm9tICcuL0NvbnRyb2xzJztcblxuY29uc3QgTElTVCA9ICdsaXN0JztcbmNvbnN0IFRJTEUgPSAndGlsZSc7XG5jb25zdCBTVEFOREFMT05FID0gJ3N0YW5kYWxvbmUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3N0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBwb3N0OiBzaGFwZSh7XG4gICAgICAgICAgICBtZXNzYWdlOiBzdHJpbmcsXG4gICAgICAgICAgICBhdXRob3I6IG51bWJlcixcbiAgICAgICAgICAgIHRpbWVzdGFtcDogbnVtYmVyLFxuICAgICAgICAgICAgaW1hZ2U6IHN0cmluZyxcbiAgICAgICAgICAgIHZpZGVvOiBzdHJpbmcsXG4gICAgICAgICAgICByZXBsaWVzOiBhcnJheU9mKHNoYXBlKHtcbiAgICAgICAgICAgICAgICBhdXRob3I6IG51bWJlcixcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBzdHJpbmdcbiAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgIGxvdmVzOiBhcnJheU9mKG51bWJlciksXG4gICAgICAgICAgICBsb2NhdGlvbjogc3RyaW5nXG4gICAgICAgIH0pLmlzUmVxdWlyZWQsXG4gICAgICAgIGF1dGhvcjogc2hhcGUoe1xuICAgICAgICAgICAgbmFtZTogc3RyaW5nLFxuICAgICAgICAgICAgaW1hZ2U6IHN0cmluZyxcbiAgICAgICAgICAgIGlkOiBudW1iZXJcbiAgICAgICAgfSksXG4gICAgICAgIGxheW91dDogb25lT2YoW0xJU1QsIFRJTEUsIFNUQU5EQUxPTkVdKSxcbiAgICAgICAgbGlrZWQ6IGJvb2wsXG4gICAgICAgIGxpa2U6IGZ1bmMsXG4gICAgICAgIHJlcGx5VG9Qb3N0OiBmdW5jLFxuICAgICAgICB1c2VySWQ6IG51bWJlcixcbiAgICAgICAgZm9jdXNQb3N0OiBmdW5jXG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGxheW91dDogTElTVFxuICAgIH1cblxuICAgIHN0YXRpYyBkaXNwbGF5TmFtZSA9ICdQb3N0JztcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGV4cGFuZGVkOiBmYWxzZSxcbiAgICAgICAgICAgIHJlcGx5T3BlbjogZmFsc2VcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cGFuZCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiAoeyBleHBhbmRlZDogIXRoaXMuc3RhdGUuZXhwYW5kZWQgfSkpO1xuICAgIH1cblxuICAgIHJlcGx5KCkge1xuICAgICAgICB0aGlzLmV4cGFuZCgpO1xuICAgICAgICB0aGlzLnJlZnMucmVwbHkuZm9jdXMoKTtcbiAgICB9XG5cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBwb3N0LCBhdXRob3IsIGxheW91dCwgbGlrZWQsIGxpa2UsIHVzZXJJZCwgZm9jdXNQb3N0IH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB7IGV4cGFuZGVkIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGNvbnN0IGhhc1JlcGxpZXMgPSBwb3N0LnJlcGxpZXMgJiYgcG9zdC5yZXBsaWVzLmxlbmd0aCA+IDA7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBsaW5raWZ5TWVzc2FnZShwb3N0Lm1lc3NhZ2UpO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHBvc3QgcG9zdC0tJHtsYXlvdXR9YH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X190ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fYXV0aG9yLWltYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwb3N0X19hdXRob3ItaW1hZ2VcIiBzcmM9e2F1dGhvci5pbWFnZX0gYWx0PXtgQSBwaWN0dXJlIG9mICR7YXV0aG9yLm5hbWV9YH0vPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19jb250ZW50c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX2F1dGhvci1uYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthdXRob3IubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChsYXlvdXQgPT09IExJU1QgfHwgbGF5b3V0ID09PSBTVEFOREFMT05FKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX2NvbnRyb2xzXCI+PENvbnRyb2xzIHJlcGx5PXsoKSA9PiB7IH19IGxpa2U9eygpID0+IGxpa2UocG9zdC5pZCwgdXNlcklkKX0gdGltZXN0YW1wPXtwb3N0LnRpbWVzdGFtcH0gLz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19tZXNzYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge21lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaWtlZCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fbGlrZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2hlYXJ0LWljb24tZ3JlZW4ucG5nXCIgYWx0PVwiXCIvPiBMaWtlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIChwb3N0LmltYWdlIHx8IHBvc3QudmlkZW8pICYmXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fbWVkaWFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0LmltYWdlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Bvc3QuaW1hZ2V9IG9uQ2xpY2s9eygpID0+IGxheW91dCAhPT0gU1RBTkRBTE9ORSAmJiBmb2N1c1Bvc3QocG9zdC5pZCl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0LnZpZGVvICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZGVvIGNvbnRyb2xzIHNyYz17cG9zdC52aWRlb30+PC9WaWRlbz5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaGFzUmVwbGllcyAmJlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX2V4cGFuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIGNsYXNzTmFtZT1cInBvc3RfX2V4cGFuZC1saW5rXCIgb25DbGljaz17dGhpcy5leHBhbmR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgZXhwYW5kZWQgPyAnRXhwYW5kJyA6ICdDb2xsYXBzZScgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGhhc1JlcGxpZXMgJiYgZXhwYW5kZWQgJiZcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19yZXBsaWVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdC5yZXBsaWVzLm1hcCgocmVwbHksIGkpID0+ICg8UmVwbHkga2V5PXtyZXBseS5tZXNzYWdlfSByZXBseT17cmVwbHl9IC8+KSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsYXlvdXQgPT09IFRJTEUgJiZcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19jb250cm9sc1wiPjxDb250cm9scyByZXBseT17KCkgPT4geyB9fSBsaWtlPXsoKSA9PiBsaWtlKHBvc3QuaWQsIHVzZXJJZCl9IHRpbWVzdGFtcD17cG9zdC50aW1lc3RhbXB9IC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZXhwYW5kZWQgJiZcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19yZXBseS1mb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwicG9zdF9fcmVwbHktdGV4dGFyZWFcIiBwbGFjZWhvbGRlcj17YFdoYXQgd291bGQgeW91IGxpa2UgdG8gc2F5IHRvICR7cG9zdC5hdXRob3IubmFtZX0/YH0+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICAucG9zdCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCAyNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMWU1O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5wb3N0LS1zdGFuZGFsb25lIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5NzVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5wb3N0LS10aWxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMzc1cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5wb3N0X190ZXh0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAucG9zdF9fYXV0aG9yLWltYWdlLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAwIDAgNDBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5wb3N0X19hdXRob3ItaW1hZ2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnBvc3RfX2NvbnRlbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCAwIDE2cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAucG9zdF9faGVhZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAucG9zdF9fYXV0aG9yLW5hbWUge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzZjQ1NGQ7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAucG9zdF9fbWVzc2FnZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzcwNzY3ZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICA6Z2xvYmFsKC5wb3N0X19tZXNzYWdlLWxpbmspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjYmVjM2NjO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnBvc3RfX2NvbnRyb2xzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjRweCAyMnB4IDIxcHggMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5wb3N0X19oZWFkZXIgLnBvc3RfX2NvbnRyb2xzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnBvc3RfX2xpa2VkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMGIyODY7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDI2cHggMCAwO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnBvc3RfX2xpa2VkIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgNnB4IDAgMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5wb3N0X19tZWRpYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAucG9zdF9fdGV4dCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlcjogMVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5wb3N0X19tZWRpYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlcjogMlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5wb3N0X19leHBhbmQge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI6IDNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAucG9zdF9fcmVwbGllcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlcjogNFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5wb3N0X19jb250cm9scyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlcjogNVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5wb3N0X19yZXBseS1mb3JtIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyOiA2XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAucG9zdC0tc3RhbmRhbG9uZSAucG9zdF9fbWVkaWEge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI6IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAtMXB4IC0xcHggMCAtMXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnBvc3RfX21lZGlhIDpnbG9iYWwodmlkZW8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufSJdfQ== */\n/*@ sourceURL=components/Post/Post.js */'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdC9Qb3N0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50Iiwic2hhcGUiLCJzdHJpbmciLCJudW1iZXIiLCJhcnJheU9mIiwiYm9vbCIsIm9uZU9mIiwiZnVuYyIsImxpbmtpZnlNZXNzYWdlIiwiVmlkZW8iLCJSZXBseSIsIkNvbnRyb2xzIiwiTElTVCIsIlRJTEUiLCJTVEFOREFMT05FIiwiUG9zdCIsInByb3BzIiwic3RhdGUiLCJleHBhbmRlZCIsInJlcGx5T3BlbiIsInNldFN0YXRlIiwiZXhwYW5kIiwicmVmcyIsInJlcGx5IiwiZm9jdXMiLCJwb3N0IiwiYXV0aG9yIiwibGF5b3V0IiwibGlrZWQiLCJsaWtlIiwidXNlcklkIiwiZm9jdXNQb3N0IiwiaGFzUmVwbGllcyIsInJlcGxpZXMiLCJsZW5ndGgiLCJtZXNzYWdlIiwiaW1hZ2UiLCJuYW1lIiwiaWQiLCJ0aW1lc3RhbXAiLCJ2aWRlbyIsIm1hcCIsImkiLCJwcm9wVHlwZXMiLCJsb3ZlcyIsImxvY2F0aW9uIiwiaXNSZXF1aXJlZCIsInJlcGx5VG9Qb3N0IiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU8sQUFBUSxBQUFRLEFBQVMsQUFBTSxBQUFPOztBQUV0RCxBQUFPLEFBQW9COzs7O0FBRTNCLEFBQU8sQUFBVzs7OztBQUVsQixBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBTyxBQUFjOzs7Ozs7Ozs7QUFFckIsSUFBTSxPQUFOLEFBQWE7QUFDYixJQUFNLE9BQU4sQUFBYTtBQUNiLElBQU0sYUFBTixBQUFtQjs7SUFFRSxBO2tDQWtDakI7O2tCQUFBLEFBQVksT0FBTzs0Q0FBQTs7c0lBQUEsQUFDVCxBQUNOOztjQUFBLEFBQUs7c0JBQVEsQUFDQyxBQUNWO3VCQUpXLEFBRWYsQUFBYSxBQUVFO0FBRkYsQUFDVDtl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TUFBSCxBQUFRLHNCQUFtRCxTQUFTLEtBQXBFLEFBQXlFLDRDQUF6RSxBQUF1Qzs7OEJBQXZDO2dDQUFBLEFBQ007QUFETjswQkFDTSxBQUFXLFdBN0M3QixBQTJDUSxBQUNJLEFBQzRCLEFBTWhDLDRCQUFBLEFBQWMsNEJBQ2QsY0FBQTtvREFBQSxBQUFlOzs4QkFBZjtnQ0FBQSxBQUVRO0FBRlI7QUFBQSxhQUFBLE9BRVEsQUFBSyxRQUFMLEFBQWEsSUFBSSxVQUFBLEFBQUMsT0FBRCxBQUFRLEdBQVI7dUNBQWUsQUFBQyxpQ0FBTSxLQUFLLE1BQVosQUFBa0IsU0FBUyxPQUEzQixBQUFrQztrQ0FBbEM7b0NBQWYsQUFBZTtBQUFBO2lCQUFBO0FBdERoRCxBQW9EUSxBQUVRLEFBTVIsNEJBQUEsQUFBVyx3QkFDWCxjQUFBO29EQUFBLEFBQWU7OzhCQUFmO2dDQUFBLEFBQWdDO0FBQWhDO0FBQUEsYUFBQSxrQkFBZ0MsQUFBQyxvQ0FBUyxPQUFPLGlCQUFNLEFBQUcsQ0FBMUIsR0FBNEIsTUFBTSxnQkFBQTsyQkFBTSxNQUFLLEtBQUwsQUFBVSxJQUFoQixBQUFNLEFBQWM7QUFBdEQsbUJBQStELFdBQVcsS0FBMUUsQUFBK0U7OEJBQS9FO2dDQTdEeEMsQUE2RFEsQUFBZ0MsQUFHaEM7QUFIZ0M7NkNBSWhDLGNBQUE7b0RBQUEsQUFBZTs7OEJBQWY7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSw4Q0FDK0MsZ0RBQThDLEtBQUEsQUFBSyxPQUFuRCxBQUEwRCxPQUFyRyx5Q0FBQSxBQUFvQjs7OEJBQXBCO2dDQWxFWixBQWlFUSxBQUNJO0FBQUE7O3lCQWxFWjtxQkFESixBQUNJLEFBcU1QO0FBck1POzs7OztBLEFBNURzQjs7QSxBQUFiLEtBQ1YsQTs7QUFDUyxBQUNDLEFBQ1Q7QUFGUSxBQUVBLEFBQ1I7QUFIUSxBQUdHLEFBQ1g7QUFKUSxBQUlELEFBQ1A7QUFMUSxBQUtELEFBQ1A7O0FBQXVCLEFBQ1gsQUFDUjtBQVJJLEFBTUMsQUFBUSxBQUFNLEFBRVYsQUFFYjtBQUp1QixBQUNuQixTQURhLENBQVI7ZUFORCxBQVVELEFBQVEsQUFDZjtBQVhFLEFBQU0sQUFXRTtBQVhGLEFBQ1IsS0FERSxFQURTLEFBYVosQUFDSDs7QUFBYyxBQUNKLEFBQ047QUFGVSxBQUVILEFBQ1A7QUFqQlcsQUFjUCxBQUFNLEFBR04sQUFFUjtBQUxjLEFBQ1YsS0FESTtZQUtBLHNCQUFNLENBQUEsQUFBQyxNQUFELEFBQU8sTUFuQk4sQUFtQlAsQUFBTSxBQUFhLEFBQzNCO0FBcEJlLEFBb0JSLEFBQ1A7QUFyQmUsQUFxQlQsQUFDTjtBQXRCZSxBQXNCRixBQUNiO0FBdkJlLEFBdUJQLEFBQ1I7QUF4QmUsQUF3QkosQTtBQXhCSSxBQUNmO0EsQUFGYSxLLEFBNEJWO1ksQUFBZSxBQUNWO0FBRFUsQUFDbEI7QUE3QmEsQSxLQWdDVixBLGNBQWMsQTtrQkFoQ0osQSIsImZpbGUiOiJQb3N0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9USi9wcm9qZWN0cy9zaW1wbHktc29jaWFsIn0=