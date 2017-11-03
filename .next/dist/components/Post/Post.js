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
                className: 'jsx-2018766601' + ' ' + ('post post--' + layout),
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, _react2.default.createElement('div', {
                className: 'jsx-2018766601' + ' ' + 'post__text',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }, _react2.default.createElement('div', {
                className: 'jsx-2018766601' + ' ' + 'post__author-image-container',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                }
            }, _react2.default.createElement('img', { src: author.image, alt: 'A picture of ' + author.name, className: 'jsx-2018766601' + ' ' + 'post__author-image',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            })), _react2.default.createElement('div', {
                className: 'jsx-2018766601' + ' ' + 'post__contents',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                }
            }, _react2.default.createElement('div', {
                className: 'jsx-2018766601' + ' ' + 'post__header',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                }
            }, _react2.default.createElement('div', {
                className: 'jsx-2018766601' + ' ' + 'post__author-name',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                }
            }, author.name), (layout === LIST || layout === STANDALONE) && _react2.default.createElement('div', {
                className: 'jsx-2018766601' + ' ' + 'post__controls',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 86
                }
            }, _react2.default.createElement(_Controls2.default, { reply: function reply() {}, like: function like() {}, timestamp: post.timestamp, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 86
                }
            }))), _react2.default.createElement('div', {
                className: 'jsx-2018766601' + ' ' + 'post__message',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90
                }
            }, message), liked && _react2.default.createElement('div', {
                className: 'jsx-2018766601' + ' ' + 'post__liked',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 95
                }
            }, 'liked'))), (post.image || post.video) && _react2.default.createElement('div', {
                className: 'jsx-2018766601' + ' ' + 'post__media',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 103
                }
            }, post.image && _react2.default.createElement('img', { src: post.image, className: 'jsx-2018766601',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 106
                }
            }), post.video && _react2.default.createElement(_Video2.default, { controls: true, src: post.video, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 111
                }
            })), hasReplies && _react2.default.createElement('div', {
                className: 'jsx-2018766601' + ' ' + 'post__expand',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 117
                }
            }, _react2.default.createElement('a', { href: 'javascript:void(0)', onClick: this.expand, className: 'jsx-2018766601' + ' ' + 'post__expand-link',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 118
                }
            }, expanded ? 'Expand' : 'Collapse')), hasReplies && expanded && _react2.default.createElement('div', {
                className: 'jsx-2018766601' + ' ' + 'post__replies',
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
                className: 'jsx-2018766601' + ' ' + 'post__controls',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 135
                }
            }, _react2.default.createElement(_Controls2.default, { reply: function reply() {}, like: function like() {}, timestamp: post.timestamp, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 135
                }
            })), expanded && _react2.default.createElement('div', {
                className: 'jsx-2018766601' + ' ' + 'post__reply-form',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 139
                }
            }, _react2.default.createElement('textarea', { placeholder: 'What would you like to say to ' + post.author.name + '?', className: 'jsx-2018766601' + ' ' + 'post__reply-textarea',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 140
                }
            })), _react2.default.createElement(_style2.default, {
                styleId: '2018766601',
                css: '.post.jsx-2018766601{margin:0 0 25px;border:1px solid #dee1e5;border-radius:4px;background:white;}.post--tile.jsx-2018766601{max-width:375px;}.post__text.jsx-2018766601{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;padding:25px;}.post__author-image-container.jsx-2018766601{-webkit-flex:0 0 40px;-ms-flex:0 0 40px;flex:0 0 40px;}.post__author-image.jsx-2018766601{border-radius:4px;}.post__contents.jsx-2018766601{-webkit-flex:1;-ms-flex:1;flex:1;margin:0 0 0 16px;}.post__header.jsx-2018766601{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;margin:0 0 10px;}.post__author-name.jsx-2018766601{font-size:16px;color:#3f454d;}.post__message.jsx-2018766601{font-size:15px;color:#70767f;line-height:1.6;}.post__message-link{text-decoration:none;color:#bec3cc;}.post__controls.jsx-2018766601{text-align:right;padding:24px 22px 21px 0;}.post__header.jsx-2018766601 .post__controls.jsx-2018766601{text-align:left;padding:0;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdC9Qb3N0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStJNEIsQUFHeUMsQUFTQSxBQUlILEFBU0MsQUFJSSxBQUlYLEFBS00sQUFTRSxBQUtBLEFBTU0sQUFLSixBQUtELGVBcEJGLEFBS0EsQ0FoRFcsQUFRN0IsQUF3RGMsQ0FMZSxDQWxDN0IsR0E2QmtCLEtBV2xCLEdBckJBLEFBS29CLElBcEJFLEVBMEJ0QixNQXREc0IsQ0EyRHRCLEdBVkEsTUFwQkEsR0FUQSxLQWxCcUIsZUFTRSxBQXNCQSxFQTlCdkIsbUVBU2tDLEFBc0JBLG1IQXJCUCxBQXNCQSw2R0FwQlYsQUFzQkcsYUFyQnBCLEdBc0JBIiwiZmlsZSI6ImNvbXBvbmVudHMvUG9zdC9Qb3N0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9USi9wcm9qZWN0cy9zaW1wbHktc29jaWFsIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHNoYXBlLCBzdHJpbmcsIG51bWJlciwgYXJyYXlPZiwgYm9vbCwgb25lT2YsIGZ1bmMgfSBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IGxpbmtpZnlNZXNzYWdlIGZyb20gJy4uLy4uL2hlbHBlcnMvbGlua2lmeU1lc3NhZ2UnO1xuXG5pbXBvcnQgVmlkZW8gZnJvbSAnLi4vVmlkZW8nO1xuXG5pbXBvcnQgUmVwbHkgZnJvbSAnLi9SZXBseSc7XG5pbXBvcnQgQ29udHJvbHMgZnJvbSAnLi9Db250cm9scyc7XG5cbmNvbnN0IExJU1QgPSAnbGlzdCc7XG5jb25zdCBUSUxFID0gJ3RpbGUnO1xuY29uc3QgU1RBTkRBTE9ORSA9ICdzdGFuZGFsb25lJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9zdCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgcG9zdDogc2hhcGUoe1xuICAgICAgICAgICAgbWVzc2FnZTogc3RyaW5nLFxuICAgICAgICAgICAgYXV0aG9yOiBudW1iZXIsXG4gICAgICAgICAgICB0aW1lc3RhbXA6IG51bWJlcixcbiAgICAgICAgICAgIGltYWdlOiBzdHJpbmcsXG4gICAgICAgICAgICB2aWRlbzogc3RyaW5nLFxuICAgICAgICAgICAgcmVwbGllczogYXJyYXlPZihzaGFwZSh7XG4gICAgICAgICAgICAgICAgYXV0aG9yOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogc3RyaW5nXG4gICAgICAgICAgICB9KSksXG4gICAgICAgICAgICBsb3ZlczogYXJyYXlPZihudW1iZXIpLFxuICAgICAgICAgICAgbG9jYXRpb246IHN0cmluZ1xuICAgICAgICB9KS5pc1JlcXVpcmVkLFxuICAgICAgICBhdXRob3I6IHNoYXBlKHtcbiAgICAgICAgICAgIG5hbWU6IHN0cmluZyxcbiAgICAgICAgICAgIGltYWdlOiBzdHJpbmcsXG4gICAgICAgICAgICBpc01lOiBib29sXG4gICAgICAgIH0pLFxuICAgICAgICBsYXlvdXQ6IG9uZU9mKFtMSVNULCBUSUxFLCBTVEFOREFMT05FXSksXG4gICAgICAgIGxpa2VkOiBib29sLFxuICAgICAgICBsaWtlUG9zdDogZnVuYyxcbiAgICAgICAgcmVwbHlUb1Bvc3Q6IGZ1bmNcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgbGF5b3V0OiBMSVNUXG4gICAgfVxuXG4gICAgc3RhdGljIGRpc3BsYXlOYW1lID0gJ1Bvc3QnO1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZXhwYW5kZWQ6IGZhbHNlLFxuICAgICAgICAgICAgcmVwbHlPcGVuOiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwYW5kKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7IGV4cGFuZGVkOiAhdGhpcy5zdGF0ZS5leHBhbmRlZCB9KSk7XG4gICAgfVxuXG4gICAgcmVwbHkoKSB7XG4gICAgICAgIHRoaXMuZXhwYW5kKCk7XG4gICAgICAgIHRoaXMucmVmcy5yZXBseS5mb2N1cygpO1xuICAgIH1cblxuICAgIFxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHBvc3QsIGF1dGhvciwgbGF5b3V0LCBsaWtlZCB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgeyBleHBhbmRlZCB9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBjb25zdCBoYXNSZXBsaWVzID0gcG9zdC5yZXBsaWVzICYmIHBvc3QucmVwbGllcy5sZW5ndGggPiAwO1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gbGlua2lmeU1lc3NhZ2UocG9zdC5tZXNzYWdlKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bwb3N0IHBvc3QtLSR7bGF5b3V0fWB9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX2F1dGhvci1pbWFnZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicG9zdF9fYXV0aG9yLWltYWdlXCIgc3JjPXthdXRob3IuaW1hZ2V9IGFsdD17YEEgcGljdHVyZSBvZiAke2F1dGhvci5uYW1lfWB9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fY29udGVudHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9faGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19hdXRob3ItbmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YXV0aG9yLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAobGF5b3V0ID09PSBMSVNUIHx8IGxheW91dCA9PT0gU1RBTkRBTE9ORSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19jb250cm9sc1wiPjxDb250cm9scyByZXBseT17KCkgPT4ge319IGxpa2U9eygpID0+IHt9fSB0aW1lc3RhbXA9e3Bvc3QudGltZXN0YW1wfSAvPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX21lc3NhZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpa2VkICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19saWtlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaWtlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIChwb3N0LmltYWdlIHx8IHBvc3QudmlkZW8pICYmXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fbWVkaWFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0LmltYWdlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Bvc3QuaW1hZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0LnZpZGVvICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZGVvIGNvbnRyb2xzIHNyYz17cG9zdC52aWRlb30+PC9WaWRlbz5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaGFzUmVwbGllcyAmJlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX2V4cGFuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIGNsYXNzTmFtZT1cInBvc3RfX2V4cGFuZC1saW5rXCIgb25DbGljaz17dGhpcy5leHBhbmR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgZXhwYW5kZWQgPyAnRXhwYW5kJyA6ICdDb2xsYXBzZScgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGhhc1JlcGxpZXMgJiYgZXhwYW5kZWQgJiZcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19yZXBsaWVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdC5yZXBsaWVzLm1hcCgocmVwbHksIGkpID0+ICg8UmVwbHkga2V5PXtyZXBseS5tZXNzYWdlfSByZXBseT17cmVwbHl9IC8+KSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsYXlvdXQgPT09IFRJTEUgJiZcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19jb250cm9sc1wiPjxDb250cm9scyByZXBseT17KCkgPT4geyB9fSBsaWtlPXsoKSA9PiB7IH19IHRpbWVzdGFtcD17cG9zdC50aW1lc3RhbXB9IC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZXhwYW5kZWQgJiZcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19yZXBseS1mb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwicG9zdF9fcmVwbHktdGV4dGFyZWFcIiBwbGFjZWhvbGRlcj17YFdoYXQgd291bGQgeW91IGxpa2UgdG8gc2F5IHRvICR7cG9zdC5hdXRob3IubmFtZX0/YH0+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICAucG9zdCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCAyNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMWU1O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5wb3N0LS10aWxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMzc1cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5wb3N0X190ZXh0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAucG9zdF9fYXV0aG9yLWltYWdlLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAwIDAgNDBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5wb3N0X19hdXRob3ItaW1hZ2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnBvc3RfX2NvbnRlbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCAwIDE2cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAucG9zdF9faGVhZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAucG9zdF9fYXV0aG9yLW5hbWUge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzZjQ1NGQ7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAucG9zdF9fbWVzc2FnZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzcwNzY3ZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICA6Z2xvYmFsKC5wb3N0X19tZXNzYWdlLWxpbmspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjYmVjM2NjO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnBvc3RfX2NvbnRyb2xzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjRweCAyMnB4IDIxcHggMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5wb3N0X19oZWFkZXIgLnBvc3RfX2NvbnRyb2xzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufSJdfQ== */\n/*@ sourceURL=components/Post/Post.js */'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdC9Qb3N0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50Iiwic2hhcGUiLCJzdHJpbmciLCJudW1iZXIiLCJhcnJheU9mIiwiYm9vbCIsIm9uZU9mIiwiZnVuYyIsImxpbmtpZnlNZXNzYWdlIiwiVmlkZW8iLCJSZXBseSIsIkNvbnRyb2xzIiwiTElTVCIsIlRJTEUiLCJTVEFOREFMT05FIiwiUG9zdCIsInByb3BzIiwic3RhdGUiLCJleHBhbmRlZCIsInJlcGx5T3BlbiIsInNldFN0YXRlIiwiZXhwYW5kIiwicmVmcyIsInJlcGx5IiwiZm9jdXMiLCJwb3N0IiwiYXV0aG9yIiwibGF5b3V0IiwibGlrZWQiLCJoYXNSZXBsaWVzIiwicmVwbGllcyIsImxlbmd0aCIsIm1lc3NhZ2UiLCJpbWFnZSIsIm5hbWUiLCJ0aW1lc3RhbXAiLCJ2aWRlbyIsIm1hcCIsImkiLCJwcm9wVHlwZXMiLCJsb3ZlcyIsImxvY2F0aW9uIiwiaXNSZXF1aXJlZCIsImlzTWUiLCJsaWtlUG9zdCIsInJlcGx5VG9Qb3N0IiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU8sQUFBUSxBQUFRLEFBQVMsQUFBTSxBQUFPOztBQUV0RCxBQUFPLEFBQW9COzs7O0FBRTNCLEFBQU8sQUFBVzs7OztBQUVsQixBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBTyxBQUFjOzs7Ozs7Ozs7QUFFckIsSUFBTSxPQUFOLEFBQWE7QUFDYixJQUFNLE9BQU4sQUFBYTtBQUNiLElBQU0sYUFBTixBQUFtQjs7SSxBQUVFO2tDQWdDakI7O2tCQUFBLEFBQVksT0FBTzs0Q0FBQTs7c0lBQUEsQUFDVCxBQUNOOztjQUFBLEFBQUs7c0JBQVEsQUFDQyxBQUNWO3VCQUpXLEFBRWYsQUFBYSxBQUVFO0FBRkYsQUFDVDtlQUdQOzs7OztpQ0FFUTt5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