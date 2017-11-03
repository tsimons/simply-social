'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _formatTimeString = require('../../helpers/formatTimeString');

var _formatTimeString2 = _interopRequireDefault(_formatTimeString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/TJ/projects/simply-social/components/Post/Controls.js';


var Controls = function Controls(_ref) {
    var reply = _ref.reply,
        like = _ref.like,
        timestamp = _ref.timestamp;
    return _react2.default.createElement('div', {
        className: 'jsx-91151716' + ' ' + 'controls',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 7
        }
    }, _react2.default.createElement('a', { href: 'javascript:void(0)', onClick: reply, className: 'jsx-91151716' + ' ' + 'control__reply',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    }, _react2.default.createElement('img', { src: '/static/reply-icon.png', alt: 'reply', className: 'jsx-91151716',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    })), _react2.default.createElement('a', { href: 'javascript:void(0)', onClick: like, className: 'jsx-91151716' + ' ' + 'control__love',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }, _react2.default.createElement('img', { src: '/static/like-icon.png', alt: 'like', className: 'jsx-91151716',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    })), _react2.default.createElement('span', {
        className: 'jsx-91151716' + ' ' + 'post__timestamp',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    }, (0, _formatTimeString2.default)(timestamp)), _react2.default.createElement(_style2.default, {
        styleId: '91151716',
        css: '.controls.jsx-91151716{font-size:14px;color:#bec3cc;-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;}.controls.jsx-91151716 a.jsx-91151716,.controls.jsx-91151716 span.jsx-91151716{text-decoration:none;color:#dee1e5;margin-left:23px;}.controls.jsx-91151716 a.jsx-91151716{-webkit-transition:color .25s;transition:color .25s;}.controls.jsx-91151716 a.jsx-91151716:hover,.controls.jsx-91151716 a.jsx-91151716:focus{color:#b5bac0;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdC9Db250cm9scy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZb0IsQUFHZ0MsQUFPTSxBQU1DLEFBS1IsY0FDbEIsQ0FsQmtCLE1BT0EsUUFOTSxNQU9ILGlCQUNyQixBQUlBLGlEQVhBIiwiZmlsZSI6ImNvbXBvbmVudHMvUG9zdC9Db250cm9scy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvVEovcHJvamVjdHMvc2ltcGx5LXNvY2lhbCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBmdW5jLCBudW1iZXIgfSBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IGZvcm1hdFRpbWVTdHJpbmcgZnJvbSAnLi4vLi4vaGVscGVycy9mb3JtYXRUaW1lU3RyaW5nJztcblxuY29uc3QgQ29udHJvbHMgPSAoeyByZXBseSwgbGlrZSwgdGltZXN0YW1wIH0pID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xzXCI+XG4gICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiBjbGFzc05hbWU9XCJjb250cm9sX19yZXBseVwiIG9uQ2xpY2s9e3JlcGx5fT48aW1nIHNyYz1cIi9zdGF0aWMvcmVwbHktaWNvbi5wbmdcIiBhbHQ9XCJyZXBseVwiIC8+PC9hPlxuICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgY2xhc3NOYW1lPVwiY29udHJvbF9fbG92ZVwiIG9uQ2xpY2s9e2xpa2V9PjxpbWcgc3JjPVwiL3N0YXRpYy9saWtlLWljb24ucG5nXCIgYWx0PVwibGlrZVwiIC8+PC9hPlxuXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBvc3RfX3RpbWVzdGFtcFwiPntmb3JtYXRUaW1lU3RyaW5nKHRpbWVzdGFtcCl9PC9zcGFuPlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5jb250cm9scyB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjYmVjM2NjO1xuICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY29udHJvbHMgYSxcbiAgICAgICAgICAgIC5jb250cm9scyBzcGFuIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNkZWUxZTU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIzcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jb250cm9scyBhIHtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAuMjVzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY29udHJvbHMgYTpob3ZlcixcbiAgICAgICAgICAgIC5jb250cm9scyBhOmZvY3VzIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2I1YmFjMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuKTtcblxuQ29udHJvbHMuZGlzcGxheU5hbWUgPSAnUG9zdENvbnRyb2xzJztcbkNvbnRyb2xzLnByb3BUeXBlcyA9IHtcbiAgICByZXBseTogZnVuYy5pc1JlcXVpcmVkLFxuICAgIGxpa2U6IGZ1bmMuaXNScXVpcmVkLFxuICAgIHRpbWVzdGFtcDogbnVtYmVyXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250cm9sczsiXX0= */\n/*@ sourceURL=components/Post/Controls.js */'
    }));
};

Controls.displayName = 'PostControls';
Controls.propTypes = {
    reply: _propTypes.func.isRequired,
    like: _propTypes.func.isRquired,
    timestamp: _propTypes.number
};

exports.default = Controls;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdC9Db250cm9scy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsImZ1bmMiLCJudW1iZXIiLCJmb3JtYXRUaW1lU3RyaW5nIiwiQ29udHJvbHMiLCJyZXBseSIsImxpa2UiLCJ0aW1lc3RhbXAiLCJkaXNwbGF5TmFtZSIsInByb3BUeXBlcyIsImlzUmVxdWlyZWQiLCJpc1JxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUyxBQUFNOztBQUVmLEFBQU8sQUFBc0I7Ozs7Ozs7OztBQUU3QixJQUFNLFdBQVcsU0FBWCxBQUFXLGVBQUE7UUFBQSxBQUFHLGFBQUgsQUFBRztRQUFILEFBQVUsWUFBVixBQUFVO1FBQVYsQUFBZ0IsaUJBQWhCLEFBQWdCOzJCQUM3QixjQUFBOzBDQUFBLEFBQWU7O3NCQUFmO3dCQUFBLEFBQ0k7QUFESjtBQUFBLEtBQUEsa0JBQ0ksY0FBQSxPQUFHLE1BQUgsQUFBUSxzQkFBZ0QsU0FBeEQsQUFBaUUseUNBQWpFLEFBQXVDOztzQkFBdkM7d0JBQUEsQUFBd0U7QUFBeEU7OENBQTZFLEtBQUwsQUFBUywwQkFBeUIsS0FBbEMsQUFBc0Msb0JBQXRDOztzQkFBQTt3QkFENUUsQUFDSSxBQUF3RSxBQUN4RTtBQUR3RTt5QkFDeEUsY0FBQSxPQUFHLE1BQUgsQUFBUSxzQkFBK0MsU0FBdkQsQUFBZ0Usd0NBQWhFLEFBQXVDOztzQkFBdkM7d0JBQUEsQUFBc0U7QUFBdEU7OENBQTJFLEtBQUwsQUFBUyx5QkFBd0IsS0FBakMsQUFBcUMsbUJBQXJDOztzQkFBQTt3QkFGMUUsQUFFSSxBQUFzRSxBQUV0RTtBQUZzRTt5QkFFdEUsY0FBQTswQ0FBQSxBQUFnQjs7c0JBQWhCO3dCQUFBLEFBQW1DO0FBQW5DO0FBQUEsdUNBSkosQUFJSSxBQUFtQyxBQUFpQjtpQkFKeEQ7YUFEYSxBQUNiO0FBQUE7QUFESjs7QUFpQ0EsU0FBQSxBQUFTLGNBQVQsQUFBdUI7QUFDdkIsU0FBQSxBQUFTO1dBQ0UsZ0JBRFUsQUFDTCxBQUNaO1VBQU0sZ0JBRlcsQUFFTixBQUNYO0FBSEosQUFBcUIsQUFHTixBQUdmO0FBTnFCLEFBQ2pCOztrQkFLSixBQUFlIiwiZmlsZSI6IkNvbnRyb2xzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9USi9wcm9qZWN0cy9zaW1wbHktc29jaWFsIn0=