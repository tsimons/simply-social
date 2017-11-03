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
                liked = _props.liked;
            var expanded = this.state.expanded;

            var hasReplies = post.replies && post.replies.length > 0;
            var message = (0, _linkifyMessage2.default)(post.message);

            return _react2.default.createElement('div', {
                className: 'jsx-2829892836' + ' ' + ('post post--' + layout),
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, _react2.default.createElement('div', {
                className: 'jsx-2829892836' + ' ' + 'post__text',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }, _react2.default.createElement('div', {
                className: 'jsx-2829892836' + ' ' + 'post__author-image-container',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                }
            }, _react2.default.createElement('img', { src: author.image, alt: 'A picture of ' + author.name, className: 'jsx-2829892836' + ' ' + 'post__author-image',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            })), _react2.default.createElement('div', {
                className: 'jsx-2829892836' + ' ' + 'post__contents',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                }
            }, _react2.default.createElement('div', {
                className: 'jsx-2829892836' + ' ' + 'post__header',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                }
            }, _react2.default.createElement('div', {
                className: 'jsx-2829892836' + ' ' + 'post__author-name',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                }
            }, author.name), (layout === LIST || layout === STANDALONE) && _react2.default.createElement('div', {
                className: 'jsx-2829892836' + ' ' + 'post__controls',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 86
                }
            }, _react2.default.createElement(_Controls2.default, { reply: function reply() {}, like: function like() {}, timestamp: post.timestamp, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 86
                }
            }))), _react2.default.createElement('div', {
                className: 'jsx-2829892836' + ' ' + 'post__message',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90
                }
            }, message), liked && _react2.default.createElement('div', {
                className: 'jsx-2829892836' + ' ' + 'post__liked',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 95
                }
            }, _react2.default.createElement('img', { src: '/static/heart-icon-green.png', alt: '', className: 'jsx-2829892836',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 96
                }
            }), ' Liked'))), (post.image || post.video) && _react2.default.createElement('div', {
                className: 'jsx-2829892836' + ' ' + 'post__media',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 103
                }
            }, post.image && _react2.default.createElement('img', { src: post.image, className: 'jsx-2829892836',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 106
                }
            }), post.video && _react2.default.createElement(_Video2.default, { controls: true, src: post.video, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 111
                }
            })), hasReplies && _react2.default.createElement('div', {
                className: 'jsx-2829892836' + ' ' + 'post__expand',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 117
                }
            }, _react2.default.createElement('a', { href: 'javascript:void(0)', onClick: this.expand, className: 'jsx-2829892836' + ' ' + 'post__expand-link',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 118
                }
            }, expanded ? 'Expand' : 'Collapse')), hasReplies && expanded && _react2.default.createElement('div', {
                className: 'jsx-2829892836' + ' ' + 'post__replies',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 126
                }
            }, post.replies.map(function (reply, i) {
                return _react2.default.createElement(_Reply2.default, { key: reply.message, reply: reply, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 128
                    }
                });
            })), layout === TILE && _react2.default.createElement('div', {
                className: 'jsx-2829892836' + ' ' + 'post__controls',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 135
                }
            }, _react2.default.createElement(_Controls2.default, { reply: function reply() {}, like: function like() {}, timestamp: post.timestamp, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 135
                }
            })), expanded && _react2.default.createElement('div', {
                className: 'jsx-2829892836' + ' ' + 'post__reply-form',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 139
                }
            }, _react2.default.createElement('textarea', { placeholder: 'What would you like to say to ' + post.author.name + '?', className: 'jsx-2829892836' + ' ' + 'post__reply-textarea',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 140
                }
            })), _react2.default.createElement(_style2.default, {
                styleId: '2829892836',
                css: '.post.jsx-2829892836{margin:0 0 25px;border:1px solid #dee1e5;border-radius:4px;background:white;}.post--tile.jsx-2829892836{max-width:375px;}.post__text.jsx-2829892836{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;padding:25px;}.post__author-image-container.jsx-2829892836{-webkit-flex:0 0 40px;-ms-flex:0 0 40px;flex:0 0 40px;}.post__author-image.jsx-2829892836{border-radius:4px;}.post__contents.jsx-2829892836{-webkit-flex:1;-ms-flex:1;flex:1;margin:0 0 0 16px;}.post__header.jsx-2829892836{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;margin:0 0 10px;}.post__author-name.jsx-2829892836{font-size:16px;color:#3f454d;}.post__message.jsx-2829892836{font-size:15px;color:#70767f;line-height:1.6;}.post__message-link{text-decoration:none;color:#bec3cc;}.post__controls.jsx-2829892836{text-align:right;padding:24px 22px 21px 0;}.post__header.jsx-2829892836 .post__controls.jsx-2829892836{text-align:left;padding:0;}.post__liked.jsx-2829892836{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:12px;color:#00b286;}.post__liked.jsx-2829892836 img.jsx-2829892836{margin:0 6px 0 0;}.post__media.jsx-2829892836{text-align:center;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdC9Qb3N0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStJNEIsQUFHeUMsQUFTQSxBQUlILEFBU0MsQUFJSSxBQUlYLEFBS00sQUFTRSxBQUtBLEFBTU0sQUFLSixBQUtELEFBS0gsQUFTSSxBQUlDLGVBdENKLEFBS0EsQ0FoRFcsQUFRN0IsQUF3RGMsQ0FMZSxBQW1CN0IsQ0FyREEsQUF5REEsR0E1QmtCLEtBV2xCLEdBckJBLEFBS29CLElBcEJFLEVBMEJ0QixNQXREc0IsQ0EyRHRCLEdBVkEsTUFwQkEsR0FUQSxLQWxCcUIsZUFTRSxBQXNCQSxBQW1DQSxFQWpFdkIsbUVBU2tDLEFBc0JBLEFBbUNYLDZGQUVKLGVBQ0QsT0EzRFMsQUFzQkEsT0FzQzNCLHNHQTFEaUIsQUFzQkcsYUFyQnBCLEdBc0JBIiwiZmlsZSI6ImNvbXBvbmVudHMvUG9zdC9Qb3N0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9USi9wcm9qZWN0cy9zaW1wbHktc29jaWFsIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHNoYXBlLCBzdHJpbmcsIG51bWJlciwgYXJyYXlPZiwgYm9vbCwgb25lT2YsIGZ1bmMgfSBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IGxpbmtpZnlNZXNzYWdlIGZyb20gJy4uLy4uL2hlbHBlcnMvbGlua2lmeU1lc3NhZ2UnO1xuXG5pbXBvcnQgVmlkZW8gZnJvbSAnLi4vVmlkZW8nO1xuXG5pbXBvcnQgUmVwbHkgZnJvbSAnLi9SZXBseSc7XG5pbXBvcnQgQ29udHJvbHMgZnJvbSAnLi9Db250cm9scyc7XG5cbmNvbnN0IExJU1QgPSAnbGlzdCc7XG5jb25zdCBUSUxFID0gJ3RpbGUnO1xuY29uc3QgU1RBTkRBTE9ORSA9ICdzdGFuZGFsb25lJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9zdCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgcG9zdDogc2hhcGUoe1xuICAgICAgICAgICAgbWVzc2FnZTogc3RyaW5nLFxuICAgICAgICAgICAgYXV0aG9yOiBudW1iZXIsXG4gICAgICAgICAgICB0aW1lc3RhbXA6IG51bWJlcixcbiAgICAgICAgICAgIGltYWdlOiBzdHJpbmcsXG4gICAgICAgICAgICB2aWRlbzogc3RyaW5nLFxuICAgICAgICAgICAgcmVwbGllczogYXJyYXlPZihzaGFwZSh7XG4gICAgICAgICAgICAgICAgYXV0aG9yOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogc3RyaW5nXG4gICAgICAgICAgICB9KSksXG4gICAgICAgICAgICBsb3ZlczogYXJyYXlPZihudW1iZXIpLFxuICAgICAgICAgICAgbG9jYXRpb246IHN0cmluZ1xuICAgICAgICB9KS5pc1JlcXVpcmVkLFxuICAgICAgICBhdXRob3I6IHNoYXBlKHtcbiAgICAgICAgICAgIG5hbWU6IHN0cmluZyxcbiAgICAgICAgICAgIGltYWdlOiBzdHJpbmcsXG4gICAgICAgICAgICBpc01lOiBib29sXG4gICAgICAgIH0pLFxuICAgICAgICBsYXlvdXQ6IG9uZU9mKFtMSVNULCBUSUxFLCBTVEFOREFMT05FXSksXG4gICAgICAgIGxpa2VkOiBib29sLFxuICAgICAgICBsaWtlUG9zdDogZnVuYyxcbiAgICAgICAgcmVwbHlUb1Bvc3Q6IGZ1bmNcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgbGF5b3V0OiBMSVNUXG4gICAgfVxuXG4gICAgc3RhdGljIGRpc3BsYXlOYW1lID0gJ1Bvc3QnO1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZXhwYW5kZWQ6IGZhbHNlLFxuICAgICAgICAgICAgcmVwbHlPcGVuOiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwYW5kKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7IGV4cGFuZGVkOiAhdGhpcy5zdGF0ZS5leHBhbmRlZCB9KSk7XG4gICAgfVxuXG4gICAgcmVwbHkoKSB7XG4gICAgICAgIHRoaXMuZXhwYW5kKCk7XG4gICAgICAgIHRoaXMucmVmcy5yZXBseS5mb2N1cygpO1xuICAgIH1cblxuICAgIFxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHBvc3QsIGF1dGhvciwgbGF5b3V0LCBsaWtlZCB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgeyBleHBhbmRlZCB9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBjb25zdCBoYXNSZXBsaWVzID0gcG9zdC5yZXBsaWVzICYmIHBvc3QucmVwbGllcy5sZW5ndGggPiAwO1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gbGlua2lmeU1lc3NhZ2UocG9zdC5tZXNzYWdlKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bwb3N0IHBvc3QtLSR7bGF5b3V0fWB9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX2F1dGhvci1pbWFnZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicG9zdF9fYXV0aG9yLWltYWdlXCIgc3JjPXthdXRob3IuaW1hZ2V9IGFsdD17YEEgcGljdHVyZSBvZiAke2F1dGhvci5uYW1lfWB9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fY29udGVudHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9faGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19hdXRob3ItbmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YXV0aG9yLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAobGF5b3V0ID09PSBMSVNUIHx8IGxheW91dCA9PT0gU1RBTkRBTE9ORSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19jb250cm9sc1wiPjxDb250cm9scyByZXBseT17KCkgPT4ge319IGxpa2U9eygpID0+IHt9fSB0aW1lc3RhbXA9e3Bvc3QudGltZXN0YW1wfSAvPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX21lc3NhZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpa2VkICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19saWtlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaGVhcnQtaWNvbi1ncmVlbi5wbmdcIiBhbHQ9XCJcIi8+IExpa2VkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgKHBvc3QuaW1hZ2UgfHwgcG9zdC52aWRlbykgJiZcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19tZWRpYVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3QuaW1hZ2UgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cG9zdC5pbWFnZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3QudmlkZW8gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlkZW8gY29udHJvbHMgc3JjPXtwb3N0LnZpZGVvfT48L1ZpZGVvPlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBoYXNSZXBsaWVzICYmXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fZXhwYW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgY2xhc3NOYW1lPVwicG9zdF9fZXhwYW5kLWxpbmtcIiBvbkNsaWNrPXt0aGlzLmV4cGFuZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBleHBhbmRlZCA/ICdFeHBhbmQnIDogJ0NvbGxhcHNlJyB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaGFzUmVwbGllcyAmJiBleHBhbmRlZCAmJlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX3JlcGxpZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0LnJlcGxpZXMubWFwKChyZXBseSwgaSkgPT4gKDxSZXBseSBrZXk9e3JlcGx5Lm1lc3NhZ2V9IHJlcGx5PXtyZXBseX0gLz4pKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxheW91dCA9PT0gVElMRSAmJlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX2NvbnRyb2xzXCI+PENvbnRyb2xzIHJlcGx5PXsoKSA9PiB7IH19IGxpa2U9eygpID0+IHsgfX0gdGltZXN0YW1wPXtwb3N0LnRpbWVzdGFtcH0gLz48L2Rpdj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBleHBhbmRlZCAmJlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX3JlcGx5LWZvcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJwb3N0X19yZXBseS10ZXh0YXJlYVwiIHBsYWNlaG9sZGVyPXtgV2hhdCB3b3VsZCB5b3UgbGlrZSB0byBzYXkgdG8gJHtwb3N0LmF1dGhvci5uYW1lfT9gfT48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIC5wb3N0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDI1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWUxZTU7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnBvc3QtLXRpbGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzNzVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLnBvc3RfX3RleHQge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5wb3N0X19hdXRob3ItaW1hZ2UtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDAgMCA0MHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnBvc3RfX2F1dGhvci1pbWFnZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAucG9zdF9fY29udGVudHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDAgMTZweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5wb3N0X19oZWFkZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMTBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5wb3N0X19hdXRob3ItbmFtZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzNmNDU0ZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5wb3N0X19tZXNzYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNzA3NjdmO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIDpnbG9iYWwoLnBvc3RfX21lc3NhZ2UtbGluaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNiZWMzY2M7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAucG9zdF9fY29udHJvbHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyNHB4IDIycHggMjFweCAwO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnBvc3RfX2hlYWRlciAucG9zdF9fY29udHJvbHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAucG9zdF9fbGlrZWQge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwYjI4NjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5wb3N0X19saWtlZCBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDZweCAwIDA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAucG9zdF9fbWVkaWEge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufSJdfQ== */\n/*@ sourceURL=components/Post/Post.js */'
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
        isMe: _propTypes.bool
    }),
    layout: (0, _propTypes.oneOf)([LIST, TILE, STANDALONE]),
    liked: _propTypes.bool,
    likePost: _propTypes.func,
    replyToPost: _propTypes.func
};
Post.defaultProps = {
    layout: LIST
};
Post.displayName = 'Post';
exports.default = Post;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdC9Qb3N0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50Iiwic2hhcGUiLCJzdHJpbmciLCJudW1iZXIiLCJhcnJheU9mIiwiYm9vbCIsIm9uZU9mIiwiZnVuYyIsImxpbmtpZnlNZXNzYWdlIiwiVmlkZW8iLCJSZXBseSIsIkNvbnRyb2xzIiwiTElTVCIsIlRJTEUiLCJTVEFOREFMT05FIiwiUG9zdCIsInByb3BzIiwic3RhdGUiLCJleHBhbmRlZCIsInJlcGx5T3BlbiIsInNldFN0YXRlIiwiZXhwYW5kIiwicmVmcyIsInJlcGx5IiwiZm9jdXMiLCJwb3N0IiwiYXV0aG9yIiwibGF5b3V0IiwibGlrZWQiLCJoYXNSZXBsaWVzIiwicmVwbGllcyIsImxlbmd0aCIsIm1lc3NhZ2UiLCJpbWFnZSIsIm5hbWUiLCJ0aW1lc3RhbXAiLCJ2aWRlbyIsIm1hcCIsImkiLCJwcm9wVHlwZXMiLCJsb3ZlcyIsImxvY2F0aW9uIiwiaXNSZXF1aXJlZCIsImlzTWUiLCJsaWtlUG9zdCIsInJlcGx5VG9Qb3N0IiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU8sQUFBUSxBQUFRLEFBQVMsQUFBTSxBQUFPOztBQUV0RCxBQUFPLEFBQW9COzs7O0FBRTNCLEFBQU8sQUFBVzs7OztBQUVsQixBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBTyxBQUFjOzs7Ozs7Ozs7QUFFckIsSUFBTSxPQUFOLEFBQWE7QUFDYixJQUFNLE9BQU4sQUFBYTtBQUNiLElBQU0sYUFBTixBQUFtQjs7SSxBQUVFO2tDQWdDakI7O2tCQUFBLEFBQVksT0FBTzs0Q0FBQTs7c0lBQUEsQUFDVCxBQUNOOztjQUFBLEFBQUs7c0JBQVEsQUFDQyxBQUNWO3VCQUpXLEFBRWYsQUFBYSxBQUVFO0FBRkYsQUFDVDtlQUdQOzs7OztpQ0FFUTt5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QUwsQUFBYSxJQUFJLFVBQUEsQUFBQyxPQUFELEFBQVEsR0FBUjt1Q0FBZSxBQUFDLGlDQUFNLEtBQUssTUFBWixBQUFrQixTQUFTLE9BQTNCLEFBQWtDO2tDQUFsQztvQ0FBZixBQUFlO0FBQUE7aUJBQUE7QUF0RGhELEFBb0RRLEFBRVEsQUFNUiw0QkFBQSxBQUFXLHdCQUNYLGNBQUE7b0RBQUEsQUFBZTs7OEJBQWY7Z0NBQUEsQUFBZ0M7QUFBaEM7QUFBQSxhQUFBLGtCQUFnQyxBQUFDLG9DQUFTLE9BQU8saUJBQU0sQUFBRyxDQUExQixHQUE0QixNQUFNLGdCQUFNLEFBQUcsQ0FBM0MsR0FBNkMsV0FBVyxLQUF4RCxBQUE2RDs4QkFBN0Q7Z0NBN0R4QyxBQTZEUSxBQUFnQyxBQUdoQztBQUhnQzs2Q0FJaEMsY0FBQTtvREFBQSxBQUFlOzs4QkFBZjtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLDhDQUMrQyxnREFBOEMsS0FBQSxBQUFLLE9BQW5ELEFBQTBELE9BQXJHLHlDQUFBLEFBQW9COzs4QkFBcEI7Z0NBbEVaLEFBaUVRLEFBQ0k7QUFBQTs7eUJBbEVaO3FCQURKLEFBQ0ksQUFnS1A7QUFoS087Ozs7O0EsQUEzRHNCOztBLEFBQWIsS0FDVixBOztBQUNTLEFBQ0MsQUFDVDtBQUZRLEFBRUEsQUFDUjtBQUhRLEFBR0csQUFDWDtBQUpRLEFBSUQsQUFDUDtBQUxRLEFBS0QsQUFDUDs7QUFBdUIsQUFDWCxBQUNSO0FBUkksQUFNQyxBQUFRLEFBQU0sQUFFVixBQUViO0FBSnVCLEFBQ25CLFNBRGEsQ0FBUjtlQU5ELEFBVUQsQUFBUSxBQUNmO0FBWEUsQUFBTSxBQVdFO0FBWEYsQUFDUixLQURFLEVBRFMsQUFhWixBQUNIOztBQUFjLEFBQ0osQUFDTjtBQUZVLEFBRUgsQUFDUDtBQWpCVyxBQWNQLEFBQU0sQUFHSixBQUVWO0FBTGMsQUFDVixLQURJO1lBS0Esc0JBQU0sQ0FBQSxBQUFDLE1BQUQsQUFBTyxNQW5CTixBQW1CUCxBQUFNLEFBQWEsQUFDM0I7QUFwQmUsQUFvQlIsQUFDUDtBQXJCZSxBQXFCTCxBQUNWO0FBdEJlLEFBc0JGLEE7QUF0QkUsQUFDZjtBQUZhLEEsSyxBQTBCVjtZQUFlLEFBQ1YsQTtBQURVLEFBQ2xCO0FBM0JhLEEsS0E4QlYsQSxjQUFjLEE7a0JBOUJKLEEiLCJmaWxlIjoiUG9zdC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvVEovcHJvamVjdHMvc2ltcGx5LXNvY2lhbCJ9