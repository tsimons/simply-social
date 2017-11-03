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
                css: '.video.jsx-3658314438{position:relative;cursor:pointer;}.video.video--playing.jsx-3658314438::before{display:none;}.video.jsx-3658314438::before{content:\'\u25BA\';display:block;box-sizing:border-box;position:absolute;top:0;right:0;bottom:0;left:0;height:76px;width:76px;margin:auto;padding:20px 0 20px 5px;border:3px solid white;border-radius:3em;color:white;font-size:26px;line-height:1;text-align:center;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVmlkZW8vVmlkZW8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0Q0QixBQUcyQyxBQUtMLEFBSUQsWUFFRSxDQUxsQixLQUxtQixRQVdPLE9BVjFCLGVBWXNCLGtCQUNaLE1BQ0UsUUFDQyxTQUNGLE9BRUssWUFDRCxXQUVDLFlBQ1ksd0JBRUQsdUJBQ0wsa0JBRU4sWUFDRyxlQUNELGNBQ0ksa0JBQ3RCIiwiZmlsZSI6ImNvbXBvbmVudHMvVmlkZW8vVmlkZW8uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL1RKL3Byb2plY3RzL3NpbXBseS1zb2NpYWwiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWRlbyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGRpc3BsYXlOYW1lID0gJ1ZpZGVvJztcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGVcbiAgICB9XG4gICAgXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBwbGF5aW5nOiBmYWxzZVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMucGxheSA9IHRoaXMucGxheS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnBhdXNlID0gdGhpcy5wYXVzZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnRvZ2dsZVBsYXlTdGF0ZSA9IHRoaXMudG9nZ2xlUGxheVN0YXRlLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMudmlkZW9UYWcuYWRkRXZlbnRMaXN0ZW5lcignZW5kZWQnLCAoKSA9PiB0aGlzLnNldFN0YXRlKCgpID0+ICh7IHBsYXlpbmc6IGZhbHNlIH0pKSk7XG4gICAgfVxuXG4gICAgcGxheSgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiAoeyBwbGF5aW5nOiB0cnVlIH0pKTtcbiAgICAgICAgdGhpcy52aWRlb1RhZy5wbGF5KCk7XG4gICAgfVxuXG4gICAgcGF1c2UoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHsgcGxheWluZzogZmFsc2UgfSkpO1xuICAgICAgICB0aGlzLnZpZGVvVGFnLnBhdXNlKCk7XG4gICAgfVxuXG4gICAgdG9nZ2xlUGxheVN0YXRlKCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5wbGF5aW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXVzZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucGxheSgpO1xuICAgIH1cblxuICAgIHNob3dDb250cm9scygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUucGxheWluZyB8fCB0aGlzLnZpZGVvVGFnICYmIHRoaXMudmlkZW9UYWcuY3VycmVudFRpbWUgIT09IDA7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcygndmlkZW8nLCB7ICd2aWRlby0tcGxheWluZyc6IHRoaXMuc3RhdGUucGxheWluZyB9KX0gb25DbGljaz17dGhpcy50b2dnbGVQbGF5U3RhdGV9PlxuICAgICAgICAgICAgICAgIDx2aWRlbyBjb250cm9scz17dGhpcy5zaG93Q29udHJvbHMoKX0gc3JjPXt0aGlzLnByb3BzLnNyY30gcmVmPXsodikgPT4gdGhpcy52aWRlb1RhZyA9IHZ9IG9uQ2xpY2s9e3RoaXMucGxheVBhdXNlfT5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC92aWRlbz5cblxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgLnZpZGVvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC52aWRlby52aWRlby0tcGxheWluZzo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAudmlkZW86OmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAn4pa6JztcblxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NnB4O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDAgMjBweCA1cHg7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM2VtO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn0iXX0= */\n/*@ sourceURL=components/Video/Video.js */'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVmlkZW8vVmlkZW8uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJjbGFzc05hbWVzIiwiVmlkZW8iLCJwcm9wcyIsInN0YXRlIiwicGxheWluZyIsInBsYXkiLCJiaW5kIiwicGF1c2UiLCJ0b2dnbGVQbGF5U3RhdGUiLCJ2aWRlb1RhZyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZXRTdGF0ZSIsImN1cnJlbnRUaW1lIiwic2hvd0NvbnRyb2xzIiwic3JjIiwidiIsInBsYXlQYXVzZSIsImNoaWxkcmVuIiwiZGlzcGxheU5hbWUiLCJwcm9wVHlwZXMiLCJub2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7OztJQUVjLEE7bUNBTWpCOzttQkFBQSxBQUFZLE9BQU87NENBQUE7O3dJQUFBLEFBQ1QsQUFFTjs7Y0FBQSxBQUFLO3FCQUFMLEFBQWEsQUFDQSxBQUdiO0FBSmEsQUFDVDs7Y0FHSixBQUFLLE9BQU8sTUFBQSxBQUFLLEtBQUwsQUFBVSxLQUF0QixBQUNBO2NBQUEsQUFBSyxRQUFRLE1BQUEsQUFBSyxNQUFMLEFBQVcsS0FBeEIsQUFDQTtjQUFBLEFBQUssa0JBQWtCLE1BQUEsQUFBSyxnQkFBTCxBQUFxQixLQVQ3QixBQVNmO2VBQ0g7Ozs7OzRDQUVtQjt5QkFDaEI7O2lCQUFBLEFBQUssU0FBTCxBQUFjLGlCQUFkLEFBQStCLFNBQVMsWUFBQTs4QkFBTSxBQUFLLFNBQVMsWUFBQTsyQkFBTyxFQUFFLFNBQVQsQUFBTyxBQUFXO0FBQXRDLEFBQU0saUJBQUE7QUFBOUMsQUFDSDs7OzsrQkFFTSxBQUNIO2lCQUFBLEFBQUssU0FBUyxZQUFBO3VCQUFPLEVBQUUsU0FBVCxBQUFPLEFBQVc7QUFBaEMsQUFDQTtpQkFBQSxBQUFLLFNBQUwsQUFBYyxBQUNqQjs7OztnQ0FFTyxBQUNKO2lCQUFBLEFBQUssU0FBUyxZQUFBO3VCQUFPLEVBQUUsU0FBVCxBQUFPLEFBQVc7QUFBaEMsQUFDQTtpQkFBQSxBQUFLLFNBQUwsQUFBYyxBQUNqQjs7OzswQ0FFaUIsQUFDZDtnQkFBSSxLQUFBLEFBQUssTUFBVCxBQUFlLFNBQVMsQUFDcEI7dUJBQU8sS0FBUCxBQUFPLEFBQUssQUFDZjtBQUVEOzttQkFBTyxLQUFQLEFBQU8sQUFBSyxBQUNmOzs7O3VDQUVjLEFBQ1g7bUJBQU8sS0FBQSxBQUFLLE1BQUwsQUFBVyxXQUFXLEtBQUEsQUFBSyxZQUFZLEtBQUEsQUFBSyxTQUFMLEFBQWMsZ0JBQTVELEFBQTRFLEFBQy9FOzs7O2lDQUVRO3lCQUVMOzttQ0FDSSxjQUFBLFNBQStFLFNBQVMsS0FBeEYsQUFBNkYsc0RBQTdFLDBCQUFBLEFBQVcsU0FBUyxFQUFFLGtCQUFrQixLQUFBLEFBQUssTUFBN0QsQUFBZ0IsQUFBb0IsQUFBK0IsY0FBbkU7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjthQUFBLGtCQUNJLGNBQUEsV0FBTyxVQUFVLEtBQWpCLEFBQWlCLEFBQUssZ0JBQWdCLEtBQUssS0FBQSxBQUFLLE1BQWhELEFBQXNELEtBQUssS0FBSyxhQUFBLEFBQUMsR0FBRDsyQkFBTyxPQUFBLEFBQUssV0FBWixBQUF1QjtBQUF2RixtQkFBMEYsU0FBUyxLQUFuRyxBQUF3RyxzQkFBeEc7OzhCQUFBO2dDQUFBLEFBQ0s7QUFETDtvQkFDSyxBQUFLLE1BRmQsQUFDSSxBQUNnQjt5QkFGcEI7cUJBREosQUFDSSxBQTRDUDtBQTVDTzs7Ozs7QUEvQ3VCLEE7O0FBQWQsQSxNQUNWLEEsY0FBYyxBO0FBREosQSxNQUVWLEE7Y0FDTyxvQkFESyxBQUNLLEE7QUFETCxBQUNmO2tCQUhhLEEiLCJmaWxlIjoiVmlkZW8uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL1RKL3Byb2plY3RzL3NpbXBseS1zb2NpYWwifQ==