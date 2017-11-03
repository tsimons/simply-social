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

var _jsxFileName = '/Users/TJ/projects/simply-social/components/Video/Video.js';


var Video = function (_Component) {
    (0, _inherits3.default)(Video, _Component);

    function Video(props) {
        (0, _classCallCheck3.default)(this, Video);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Video.__proto__ || (0, _getPrototypeOf2.default)(Video)).call(this, props));

        _this.state = {
            playing: false
        };

        _this.play = _this.play.bind(_this);
        _this.pause = _this.pause.bind(_this);
        _this.togglePlayState = _this.togglePlayState.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(Video, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.videoTag.addEventListener('ended', function () {
                return _this2.setState(function () {
                    return { playing: false };
                });
            });
        }
    }, {
        key: 'play',
        value: function play() {
            this.setState(function () {
                return { playing: true };
            });
            this.videoTag.play();
        }
    }, {
        key: 'pause',
        value: function pause() {
            this.setState(function () {
                return { playing: false };
            });
            this.videoTag.pause();
        }
    }, {
        key: 'togglePlayState',
        value: function togglePlayState() {
            if (this.state.playing) {
                return this.pause();
            }

            return this.play();
        }
    }, {
        key: 'showControls',
        value: function showControls() {
            return this.state.playing || this.videoTag && this.videoTag.currentTime !== 0;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement('div', { onClick: this.togglePlayState, className: 'jsx-3658314438' + ' ' + ((0, _classnames2.default)('video', { 'video--playing': this.state.playing }) || ''),
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, _react2.default.createElement('video', { controls: this.showControls(), src: this.props.src, ref: function ref(v) {
                    return _this3.videoTag = v;
                }, onClick: this.playPause, className: 'jsx-3658314438',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, this.props.children), _react2.default.createElement(_style2.default, {
                styleId: '3658314438',
                css: '.video.jsx-3658314438{position:relative;cursor:pointer;}.video.video--playing.jsx-3658314438::before{display:none;}.video.jsx-3658314438::before{content:\'\u25BA\';display:block;box-sizing:border-box;position:absolute;top:0;right:0;bottom:0;left:0;height:76px;width:76px;margin:auto;padding:20px 0 20px 5px;border:3px solid white;border-radius:3em;color:white;font-size:26px;line-height:1;text-align:center;}'
            }));
        }
    }]);

    return Video;
}(_react.Component);

Video.displayName = 'Video';
Video.propTypes = {
    children: _propTypes2.default.node
};
exports.default = Video;