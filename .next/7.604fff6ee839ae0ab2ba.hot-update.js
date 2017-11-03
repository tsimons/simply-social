webpackHotUpdate(7,{

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(395);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(52);

var _linkifyMessage = __webpack_require__(551);

var _linkifyMessage2 = _interopRequireDefault(_linkifyMessage);

var _Video = __webpack_require__(560);

var _Video2 = _interopRequireDefault(_Video);

var _Reply = __webpack_require__(562);

var _Reply2 = _interopRequireDefault(_Reply);

var _Controls = __webpack_require__(563);

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
                userId = _props.userId;
            var expanded = this.state.expanded;

            var hasReplies = post.replies && post.replies.length > 0;
            var message = (0, _linkifyMessage2.default)(post.message);

            return _react2.default.createElement('div', {
                className: 'jsx-1637666015' + ' ' + ('post post--' + layout),
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, _react2.default.createElement('div', {
                className: 'jsx-1637666015' + ' ' + 'post__text',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }, _react2.default.createElement('div', {
                className: 'jsx-1637666015' + ' ' + 'post__author-image-container',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                }
            }, _react2.default.createElement('img', { src: author.image, alt: 'A picture of ' + author.name, className: 'jsx-1637666015' + ' ' + 'post__author-image',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            })), _react2.default.createElement('div', {
                className: 'jsx-1637666015' + ' ' + 'post__contents',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                }
            }, _react2.default.createElement('div', {
                className: 'jsx-1637666015' + ' ' + 'post__header',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                }
            }, _react2.default.createElement('div', {
                className: 'jsx-1637666015' + ' ' + 'post__author-name',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                }
            }, author.name), (layout === LIST || layout === STANDALONE) && _react2.default.createElement('div', {
                className: 'jsx-1637666015' + ' ' + 'post__controls',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 86
                }
            }, _react2.default.createElement(_Controls2.default, { reply: function reply() {}, like: function like() {
                    return _like(post.id, userId);
                }, timestamp: post.timestamp, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 86
                }
            }))), _react2.default.createElement('div', {
                className: 'jsx-1637666015' + ' ' + 'post__message',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90
                }
            }, message), liked && _react2.default.createElement('div', {
                className: 'jsx-1637666015' + ' ' + 'post__liked',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 95
                }
            }, _react2.default.createElement('img', { src: '/static/heart-icon-green.png', alt: '', className: 'jsx-1637666015',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 96
                }
            }), ' Liked'))), (post.image || post.video) && _react2.default.createElement('div', {
                className: 'jsx-1637666015' + ' ' + 'post__media',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 103
                }
            }, post.image && _react2.default.createElement('img', { src: post.image, className: 'jsx-1637666015',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 106
                }
            }), post.video && _react2.default.createElement(_Video2.default, { controls: true, src: post.video, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 111
                }
            })), hasReplies && _react2.default.createElement('div', {
                className: 'jsx-1637666015' + ' ' + 'post__expand',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 117
                }
            }, _react2.default.createElement('a', { href: 'javascript:void(0)', onClick: this.expand, className: 'jsx-1637666015' + ' ' + 'post__expand-link',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 118
                }
            }, expanded ? 'Expand' : 'Collapse')), hasReplies && expanded && _react2.default.createElement('div', {
                className: 'jsx-1637666015' + ' ' + 'post__replies',
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
                className: 'jsx-1637666015' + ' ' + 'post__controls',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 135
                }
            }, _react2.default.createElement(_Controls2.default, { reply: function reply() {}, like: function like() {}, timestamp: post.timestamp, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 135
                }
            })), expanded && _react2.default.createElement('div', {
                className: 'jsx-1637666015' + ' ' + 'post__reply-form',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 139
                }
            }, _react2.default.createElement('textarea', { placeholder: 'What would you like to say to ' + post.author.name + '?', className: 'jsx-1637666015' + ' ' + 'post__reply-textarea',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 140
                }
            })), _react2.default.createElement(_style2.default, {
                styleId: '1637666015',
                css: '.post.jsx-1637666015{margin:0 0 25px;border:1px solid #dee1e5;border-radius:4px;background:white;}.post--tile.jsx-1637666015{max-width:375px;}.post__text.jsx-1637666015{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;padding:25px;}.post__author-image-container.jsx-1637666015{-webkit-flex:0 0 40px;-ms-flex:0 0 40px;flex:0 0 40px;}.post__author-image.jsx-1637666015{border-radius:4px;}.post__contents.jsx-1637666015{-webkit-flex:1;-ms-flex:1;flex:1;margin:0 0 0 16px;}.post__header.jsx-1637666015{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;margin:0 0 10px;}.post__author-name.jsx-1637666015{font-size:16px;color:#3f454d;}.post__message.jsx-1637666015{font-size:15px;color:#70767f;line-height:1.6;}.post__message-link{text-decoration:none;color:#bec3cc;}.post__controls.jsx-1637666015{text-align:right;padding:24px 22px 21px 0;}.post__header.jsx-1637666015 .post__controls.jsx-1637666015{text-align:left;padding:0;}.post__liked.jsx-1637666015{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:12px;color:#00b286;margin:26px 0 0;}.post__liked.jsx-1637666015 img.jsx-1637666015{margin:0 6px 0 0;}.post__media.jsx-1637666015{text-align:center;}.post__media.jsx-1637666015 video{width:100%;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdC9Qb3N0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStJNEIsQUFHeUMsQUFTQSxBQUlILEFBU0MsQUFJSSxBQUlYLEFBS00sQUFTRSxBQUtBLEFBTU0sQUFLSixBQUtELEFBS0gsQUFVSSxBQUlDLEFBSVAsV0FDZixJQTVDa0IsQUFLQSxDQWhEVyxBQVE3QixBQXdEYyxDQUxlLEFBb0I3QixDQXREQSxBQTBEQSxHQTdCa0IsS0FXbEIsR0FyQkEsQUFLb0IsSUFwQkUsRUEwQnRCLE1BdERzQixDQTJEdEIsR0FWQSxNQXBCQSxHQVRBLEtBbEJxQixlQVNFLEFBc0JBLEFBbUNBLEVBakV2QixtRUFTa0MsQUFzQkEsQUFtQ1gsNkZBRUosZUFDRCxPQTNEUyxBQXNCQSxPQXNDUCxnQkFDcEIsc0ZBM0RpQixBQXNCRyxhQXJCcEIsR0FzQkEiLCJmaWxlIjoiY29tcG9uZW50cy9Qb3N0L1Bvc3QuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL1RKL3Byb2plY3RzL3NpbXBseS1zb2NpYWwiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgc2hhcGUsIHN0cmluZywgbnVtYmVyLCBhcnJheU9mLCBib29sLCBvbmVPZiwgZnVuYyB9IGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgbGlua2lmeU1lc3NhZ2UgZnJvbSAnLi4vLi4vaGVscGVycy9saW5raWZ5TWVzc2FnZSc7XG5cbmltcG9ydCBWaWRlbyBmcm9tICcuLi9WaWRlbyc7XG5cbmltcG9ydCBSZXBseSBmcm9tICcuL1JlcGx5JztcbmltcG9ydCBDb250cm9scyBmcm9tICcuL0NvbnRyb2xzJztcblxuY29uc3QgTElTVCA9ICdsaXN0JztcbmNvbnN0IFRJTEUgPSAndGlsZSc7XG5jb25zdCBTVEFOREFMT05FID0gJ3N0YW5kYWxvbmUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3N0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBwb3N0OiBzaGFwZSh7XG4gICAgICAgICAgICBtZXNzYWdlOiBzdHJpbmcsXG4gICAgICAgICAgICBhdXRob3I6IG51bWJlcixcbiAgICAgICAgICAgIHRpbWVzdGFtcDogbnVtYmVyLFxuICAgICAgICAgICAgaW1hZ2U6IHN0cmluZyxcbiAgICAgICAgICAgIHZpZGVvOiBzdHJpbmcsXG4gICAgICAgICAgICByZXBsaWVzOiBhcnJheU9mKHNoYXBlKHtcbiAgICAgICAgICAgICAgICBhdXRob3I6IG51bWJlcixcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBzdHJpbmdcbiAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgIGxvdmVzOiBhcnJheU9mKG51bWJlciksXG4gICAgICAgICAgICBsb2NhdGlvbjogc3RyaW5nXG4gICAgICAgIH0pLmlzUmVxdWlyZWQsXG4gICAgICAgIGF1dGhvcjogc2hhcGUoe1xuICAgICAgICAgICAgbmFtZTogc3RyaW5nLFxuICAgICAgICAgICAgaW1hZ2U6IHN0cmluZyxcbiAgICAgICAgICAgIGlkOiBudW1iZXJcbiAgICAgICAgfSksXG4gICAgICAgIGxheW91dDogb25lT2YoW0xJU1QsIFRJTEUsIFNUQU5EQUxPTkVdKSxcbiAgICAgICAgbGlrZWQ6IGJvb2wsXG4gICAgICAgIGxpa2U6IGZ1bmMsXG4gICAgICAgIHJlcGx5VG9Qb3N0OiBmdW5jLFxuICAgICAgICB1c2VySWQ6IG51bWJlclxuICAgIH07XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBsYXlvdXQ6IExJU1RcbiAgICB9XG5cbiAgICBzdGF0aWMgZGlzcGxheU5hbWUgPSAnUG9zdCc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBleHBhbmRlZDogZmFsc2UsXG4gICAgICAgICAgICByZXBseU9wZW46IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBhbmQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHsgZXhwYW5kZWQ6ICF0aGlzLnN0YXRlLmV4cGFuZGVkIH0pKTtcbiAgICB9XG5cbiAgICByZXBseSgpIHtcbiAgICAgICAgdGhpcy5leHBhbmQoKTtcbiAgICAgICAgdGhpcy5yZWZzLnJlcGx5LmZvY3VzKCk7XG4gICAgfVxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgcG9zdCwgYXV0aG9yLCBsYXlvdXQsIGxpa2VkLCBsaWtlLCB1c2VySWQgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHsgZXhwYW5kZWQgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgY29uc3QgaGFzUmVwbGllcyA9IHBvc3QucmVwbGllcyAmJiBwb3N0LnJlcGxpZXMubGVuZ3RoID4gMDtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGxpbmtpZnlNZXNzYWdlKHBvc3QubWVzc2FnZSk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcG9zdCBwb3N0LS0ke2xheW91dH1gfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX3RleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19hdXRob3ItaW1hZ2UtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInBvc3RfX2F1dGhvci1pbWFnZVwiIHNyYz17YXV0aG9yLmltYWdlfSBhbHQ9e2BBIHBpY3R1cmUgb2YgJHthdXRob3IubmFtZX1gfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX2NvbnRlbnRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX2hlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fYXV0aG9yLW5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2F1dGhvci5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGxheW91dCA9PT0gTElTVCB8fCBsYXlvdXQgPT09IFNUQU5EQUxPTkUpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fY29udHJvbHNcIj48Q29udHJvbHMgcmVwbHk9eygpID0+IHsgfX0gbGlrZT17KCkgPT4gbGlrZShwb3N0LmlkLCB1c2VySWQpfSB0aW1lc3RhbXA9e3Bvc3QudGltZXN0YW1wfSAvPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX21lc3NhZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpa2VkICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19saWtlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaGVhcnQtaWNvbi1ncmVlbi5wbmdcIiBhbHQ9XCJcIi8+IExpa2VkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgKHBvc3QuaW1hZ2UgfHwgcG9zdC52aWRlbykgJiZcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19tZWRpYVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3QuaW1hZ2UgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cG9zdC5pbWFnZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3QudmlkZW8gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlkZW8gY29udHJvbHMgc3JjPXtwb3N0LnZpZGVvfT48L1ZpZGVvPlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBoYXNSZXBsaWVzICYmXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fZXhwYW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgY2xhc3NOYW1lPVwicG9zdF9fZXhwYW5kLWxpbmtcIiBvbkNsaWNrPXt0aGlzLmV4cGFuZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBleHBhbmRlZCA/ICdFeHBhbmQnIDogJ0NvbGxhcHNlJyB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaGFzUmVwbGllcyAmJiBleHBhbmRlZCAmJlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX3JlcGxpZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0LnJlcGxpZXMubWFwKChyZXBseSwgaSkgPT4gKDxSZXBseSBrZXk9e3JlcGx5Lm1lc3NhZ2V9IHJlcGx5PXtyZXBseX0gLz4pKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxheW91dCA9PT0gVElMRSAmJlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX2NvbnRyb2xzXCI+PENvbnRyb2xzIHJlcGx5PXsoKSA9PiB7IH19IGxpa2U9eygpID0+IHsgfX0gdGltZXN0YW1wPXtwb3N0LnRpbWVzdGFtcH0gLz48L2Rpdj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBleHBhbmRlZCAmJlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX3JlcGx5LWZvcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJwb3N0X19yZXBseS10ZXh0YXJlYVwiIHBsYWNlaG9sZGVyPXtgV2hhdCB3b3VsZCB5b3UgbGlrZSB0byBzYXkgdG8gJHtwb3N0LmF1dGhvci5uYW1lfT9gfT48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIC5wb3N0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDI1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWUxZTU7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnBvc3QtLXRpbGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzNzVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLnBvc3RfX3RleHQge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5wb3N0X19hdXRob3ItaW1hZ2UtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDAgMCA0MHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnBvc3RfX2F1dGhvci1pbWFnZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAucG9zdF9fY29udGVudHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDAgMTZweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5wb3N0X19oZWFkZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMTBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5wb3N0X19hdXRob3ItbmFtZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzNmNDU0ZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5wb3N0X19tZXNzYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNzA3NjdmO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIDpnbG9iYWwoLnBvc3RfX21lc3NhZ2UtbGluaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNiZWMzY2M7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAucG9zdF9fY29udHJvbHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyNHB4IDIycHggMjFweCAwO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnBvc3RfX2hlYWRlciAucG9zdF9fY29udHJvbHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAucG9zdF9fbGlrZWQge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwYjI4NjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMjZweCAwIDA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAucG9zdF9fbGlrZWQgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCA2cHggMCAwO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnBvc3RfX21lZGlhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5wb3N0X19tZWRpYSA6Z2xvYmFsKHZpZGVvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn0iXX0= */\n/*@ sourceURL=components/Post/Post.js */'
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
    userId: _propTypes.number
};
Post.defaultProps = {
    layout: LIST
};
Post.displayName = 'Post';
exports.default = Post;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdC9Qb3N0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50Iiwic2hhcGUiLCJzdHJpbmciLCJudW1iZXIiLCJhcnJheU9mIiwiYm9vbCIsIm9uZU9mIiwiZnVuYyIsImxpbmtpZnlNZXNzYWdlIiwiVmlkZW8iLCJSZXBseSIsIkNvbnRyb2xzIiwiTElTVCIsIlRJTEUiLCJTVEFOREFMT05FIiwiUG9zdCIsInByb3BzIiwic3RhdGUiLCJleHBhbmRlZCIsInJlcGx5T3BlbiIsInNldFN0YXRlIiwiZXhwYW5kIiwicmVmcyIsInJlcGx5IiwiZm9jdXMiLCJwb3N0IiwiYXV0aG9yIiwibGF5b3V0IiwibGlrZWQiLCJsaWtlIiwidXNlcklkIiwiaGFzUmVwbGllcyIsInJlcGxpZXMiLCJsZW5ndGgiLCJtZXNzYWdlIiwiaW1hZ2UiLCJuYW1lIiwiaWQiLCJ0aW1lc3RhbXAiLCJ2aWRlbyIsIm1hcCIsImkiLCJwcm9wVHlwZXMiLCJsb3ZlcyIsImxvY2F0aW9uIiwiaXNSZXF1aXJlZCIsInJlcGx5VG9Qb3N0IiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU8sQUFBUSxBQUFRLEFBQVMsQUFBTSxBQUFPOztBQUV0RCxBQUFPLEFBQW9COzs7O0FBRTNCLEFBQU8sQUFBVzs7OztBQUVsQixBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBTyxBQUFjOzs7Ozs7Ozs7QUFFckIsSUFBTSxPQUFOLEFBQWE7QUFDYixJQUFNLE9BQU4sQUFBYTtBQUNiLElBQU0sYUFBTixBQUFtQjs7SUFFRSxBO2tDQWlDakI7O2tCQUFBLEFBQVksT0FBTzs0Q0FBQTs7c0lBQUEsQUFDVCxBQUNOOztjQUFBLEFBQUs7c0JBQVEsQUFDQyxBQUNWO3VCQUpXLEFBRWYsQUFBYSxBQUVFO0FBRkYsQUFDVDtlQUdQOzs7OztpQ0FF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NEIsQUFNaEMsNEJBQUEsQUFBYyw0QkFDZCxjQUFBO29EQUFBLEFBQWU7OzhCQUFmO2dDQUFBLEFBRVE7QUFGUjtBQUFBLGFBQUEsT0FFUSxBQUFLLFFBQUwsQUFBYSxJQUFJLFVBQUEsQUFBQyxPQUFELEFBQVEsR0FBUjt1Q0FBZSxBQUFDLGlDQUFNLEtBQUssTUFBWixBQUFrQixTQUFTLE9BQTNCLEFBQWtDO2tDQUFsQztvQ0FBZixBQUFlO0FBQUE7aUJBQUE7QUF0RGhELEFBb0RRLEFBRVEsQUFNUiw0QkFBQSxBQUFXLHdCQUNYLGNBQUE7b0RBQUEsQUFBZTs7OEJBQWY7Z0NBQUEsQUFBZ0M7QUFBaEM7QUFBQSxhQUFBLGtCQUFnQyxBQUFDLG9DQUFTLE9BQU8saUJBQU0sQUFBRyxDQUExQixHQUE0QixNQUFNLGdCQUFNLEFBQUcsQ0FBM0MsR0FBNkMsV0FBVyxLQUF4RCxBQUE2RDs4QkFBN0Q7Z0NBN0R4QyxBQTZEUSxBQUFnQyxBQUdoQztBQUhnQzs2Q0FJaEMsY0FBQTtvREFBQSxBQUFlOzs4QkFBZjtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLDhDQUMrQyxnREFBOEMsS0FBQSxBQUFLLE9BQW5ELEFBQTBELE9BQXJHLHlDQUFBLEFBQW9COzs4QkFBcEI7Z0NBbEVaLEFBaUVRLEFBQ0k7QUFBQTs7eUJBbEVaO3FCQURKLEFBQ0ksQUFxS1A7QUFyS087Ozs7O0EsQUEzRHNCOztBLEFBQWIsS0FDVixBOztBQUNTLEFBQ0MsQUFDVDtBQUZRLEFBRUEsQUFDUjtBQUhRLEFBR0csQUFDWDtBQUpRLEFBSUQsQUFDUDtBQUxRLEFBS0QsQUFDUDs7QUFBdUIsQUFDWCxBQUNSO0FBUkksQUFNQyxBQUFRLEFBQU0sQUFFVixBQUViO0FBSnVCLEFBQ25CLFNBRGEsQ0FBUjtlQU5ELEFBVUQsQUFBUSxBQUNmO0FBWEUsQUFBTSxBQVdFO0FBWEYsQUFDUixLQURFLEVBRFMsQUFhWixBQUNIOztBQUFjLEFBQ0osQUFDTjtBQUZVLEFBRUgsQUFDUDtBQWpCVyxBQWNQLEFBQU0sQUFHTixBQUVSO0FBTGMsQUFDVixLQURJO1lBS0Esc0JBQU0sQ0FBQSxBQUFDLE1BQUQsQUFBTyxNQW5CTixBQW1CUCxBQUFNLEFBQWEsQUFDM0I7QUFwQmUsQUFvQlIsQUFDUDtBQXJCZSxBQXFCVCxBQUNOO0FBdEJlLEFBc0JGLEFBQ2I7QUF2QmUsQUF1QlAsQTtBQXZCTyxBQUNmO0EsQUFGYSxLLEFBMkJWO1ksQUFBZSxBQUNWO0FBRFUsQUFDbEI7QUE1QmEsQSxLQStCVixBLGNBQWMsQTtrQkEvQkosQSIsImZpbGUiOiJQb3N0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9USi9wcm9qZWN0cy9zaW1wbHktc29jaWFsIn0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/TJ/projects/simply-social/components/Post/Post.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/TJ/projects/simply-social/components/Post/Post.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy42MDRmZmY2ZWU4MzlhZTBhYjJiYS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qb3N0L1Bvc3QuanM/ZTg2MGM1YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgc2hhcGUsIHN0cmluZywgbnVtYmVyLCBhcnJheU9mLCBib29sLCBvbmVPZiwgZnVuYyB9IGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgbGlua2lmeU1lc3NhZ2UgZnJvbSAnLi4vLi4vaGVscGVycy9saW5raWZ5TWVzc2FnZSc7XG5cbmltcG9ydCBWaWRlbyBmcm9tICcuLi9WaWRlbyc7XG5cbmltcG9ydCBSZXBseSBmcm9tICcuL1JlcGx5JztcbmltcG9ydCBDb250cm9scyBmcm9tICcuL0NvbnRyb2xzJztcblxuY29uc3QgTElTVCA9ICdsaXN0JztcbmNvbnN0IFRJTEUgPSAndGlsZSc7XG5jb25zdCBTVEFOREFMT05FID0gJ3N0YW5kYWxvbmUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3N0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBwb3N0OiBzaGFwZSh7XG4gICAgICAgICAgICBtZXNzYWdlOiBzdHJpbmcsXG4gICAgICAgICAgICBhdXRob3I6IG51bWJlcixcbiAgICAgICAgICAgIHRpbWVzdGFtcDogbnVtYmVyLFxuICAgICAgICAgICAgaW1hZ2U6IHN0cmluZyxcbiAgICAgICAgICAgIHZpZGVvOiBzdHJpbmcsXG4gICAgICAgICAgICByZXBsaWVzOiBhcnJheU9mKHNoYXBlKHtcbiAgICAgICAgICAgICAgICBhdXRob3I6IG51bWJlcixcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBzdHJpbmdcbiAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgIGxvdmVzOiBhcnJheU9mKG51bWJlciksXG4gICAgICAgICAgICBsb2NhdGlvbjogc3RyaW5nXG4gICAgICAgIH0pLmlzUmVxdWlyZWQsXG4gICAgICAgIGF1dGhvcjogc2hhcGUoe1xuICAgICAgICAgICAgbmFtZTogc3RyaW5nLFxuICAgICAgICAgICAgaW1hZ2U6IHN0cmluZyxcbiAgICAgICAgICAgIGlkOiBudW1iZXJcbiAgICAgICAgfSksXG4gICAgICAgIGxheW91dDogb25lT2YoW0xJU1QsIFRJTEUsIFNUQU5EQUxPTkVdKSxcbiAgICAgICAgbGlrZWQ6IGJvb2wsXG4gICAgICAgIGxpa2U6IGZ1bmMsXG4gICAgICAgIHJlcGx5VG9Qb3N0OiBmdW5jLFxuICAgICAgICB1c2VySWQ6IG51bWJlclxuICAgIH07XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBsYXlvdXQ6IExJU1RcbiAgICB9XG5cbiAgICBzdGF0aWMgZGlzcGxheU5hbWUgPSAnUG9zdCc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBleHBhbmRlZDogZmFsc2UsXG4gICAgICAgICAgICByZXBseU9wZW46IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBhbmQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHsgZXhwYW5kZWQ6ICF0aGlzLnN0YXRlLmV4cGFuZGVkIH0pKTtcbiAgICB9XG5cbiAgICByZXBseSgpIHtcbiAgICAgICAgdGhpcy5leHBhbmQoKTtcbiAgICAgICAgdGhpcy5yZWZzLnJlcGx5LmZvY3VzKCk7XG4gICAgfVxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgcG9zdCwgYXV0aG9yLCBsYXlvdXQsIGxpa2VkLCBsaWtlLCB1c2VySWQgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHsgZXhwYW5kZWQgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgY29uc3QgaGFzUmVwbGllcyA9IHBvc3QucmVwbGllcyAmJiBwb3N0LnJlcGxpZXMubGVuZ3RoID4gMDtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGxpbmtpZnlNZXNzYWdlKHBvc3QubWVzc2FnZSk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcG9zdCBwb3N0LS0ke2xheW91dH1gfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX3RleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19hdXRob3ItaW1hZ2UtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInBvc3RfX2F1dGhvci1pbWFnZVwiIHNyYz17YXV0aG9yLmltYWdlfSBhbHQ9e2BBIHBpY3R1cmUgb2YgJHthdXRob3IubmFtZX1gfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX2NvbnRlbnRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX2hlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fYXV0aG9yLW5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2F1dGhvci5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGxheW91dCA9PT0gTElTVCB8fCBsYXlvdXQgPT09IFNUQU5EQUxPTkUpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fY29udHJvbHNcIj48Q29udHJvbHMgcmVwbHk9eygpID0+IHsgfX0gbGlrZT17KCkgPT4gbGlrZShwb3N0LmlkLCB1c2VySWQpfSB0aW1lc3RhbXA9e3Bvc3QudGltZXN0YW1wfSAvPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX21lc3NhZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpa2VkICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19saWtlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaGVhcnQtaWNvbi1ncmVlbi5wbmdcIiBhbHQ9XCJcIi8+IExpa2VkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgKHBvc3QuaW1hZ2UgfHwgcG9zdC52aWRlbykgJiZcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19tZWRpYVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3QuaW1hZ2UgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cG9zdC5pbWFnZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3QudmlkZW8gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlkZW8gY29udHJvbHMgc3JjPXtwb3N0LnZpZGVvfT48L1ZpZGVvPlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBoYXNSZXBsaWVzICYmXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fZXhwYW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgY2xhc3NOYW1lPVwicG9zdF9fZXhwYW5kLWxpbmtcIiBvbkNsaWNrPXt0aGlzLmV4cGFuZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBleHBhbmRlZCA/ICdFeHBhbmQnIDogJ0NvbGxhcHNlJyB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaGFzUmVwbGllcyAmJiBleHBhbmRlZCAmJlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX3JlcGxpZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0LnJlcGxpZXMubWFwKChyZXBseSwgaSkgPT4gKDxSZXBseSBrZXk9e3JlcGx5Lm1lc3NhZ2V9IHJlcGx5PXtyZXBseX0gLz4pKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxheW91dCA9PT0gVElMRSAmJlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX2NvbnRyb2xzXCI+PENvbnRyb2xzIHJlcGx5PXsoKSA9PiB7IH19IGxpa2U9eygpID0+IHsgfX0gdGltZXN0YW1wPXtwb3N0LnRpbWVzdGFtcH0gLz48L2Rpdj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBleHBhbmRlZCAmJlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX3JlcGx5LWZvcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJwb3N0X19yZXBseS10ZXh0YXJlYVwiIHBsYWNlaG9sZGVyPXtgV2hhdCB3b3VsZCB5b3UgbGlrZSB0byBzYXkgdG8gJHtwb3N0LmF1dGhvci5uYW1lfT9gfT48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIC5wb3N0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDI1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWUxZTU7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnBvc3QtLXRpbGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzNzVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLnBvc3RfX3RleHQge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5wb3N0X19hdXRob3ItaW1hZ2UtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDAgMCA0MHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnBvc3RfX2F1dGhvci1pbWFnZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAucG9zdF9fY29udGVudHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDAgMTZweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5wb3N0X19oZWFkZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMTBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5wb3N0X19hdXRob3ItbmFtZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzNmNDU0ZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5wb3N0X19tZXNzYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNzA3NjdmO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIDpnbG9iYWwoLnBvc3RfX21lc3NhZ2UtbGluaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNiZWMzY2M7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAucG9zdF9fY29udHJvbHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyNHB4IDIycHggMjFweCAwO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnBvc3RfX2hlYWRlciAucG9zdF9fY29udHJvbHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAucG9zdF9fbGlrZWQge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwYjI4NjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMjZweCAwIDA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAucG9zdF9fbGlrZWQgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCA2cHggMCAwO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnBvc3RfX21lZGlhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5wb3N0X19tZWRpYSA6Z2xvYmFsKHZpZGVvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1Bvc3QvUG9zdC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBa0NBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFFQTtBQUFBO0FBREE7QUFHQTs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7Ozs7QUFHQTtBQUNBO0FBQUE7Ozs7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBRUE7QUFGQTtBQUVBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBS0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUpBO0FBSUE7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUtBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7O0FBQUE7QUFFQTtBQUZBO0FBQUE7O0FBR0E7QUFJQTtBQUpBO0FBQUE7QUFLQTtBQUtBO0FBTEE7QUFBQTtBQU1BOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBT0E7O0FBQUE7QUFFQTtBQUZBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFIQTtBQUlBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBOztBQWxFQTtBQXFLQTtBQXJLQTs7Ozs7Ozs7O0FBdkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFFQTtBQUhBO0FBSUE7QUFBQTtBQVZBOztBQWNBO0FBQ0E7QUFFQTtBQUpBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7O0FBdEJBOzs7QUEwQkE7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9