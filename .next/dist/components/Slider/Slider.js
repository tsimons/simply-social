'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/TJ/projects/simply-social/components/Slider/Slider.js';


var Slider = function Slider(_ref) {
    var checked = _ref.checked,
        onClick = _ref.onClick;
    return _react2.default.createElement('span', { onClick: onClick, className: 'jsx-2219802500' + ' ' + ((0, _classnames2.default)('slider-container', {
            on: checked,
            off: !checked
        }) || ''),
        __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    }, _react2.default.createElement('span', {
        className: 'jsx-2219802500' + ' ' + 'slider-thumb',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }), _react2.default.createElement(_style2.default, {
        styleId: '2219802500',
        css: '.slider-container.jsx-2219802500{display:inline-block;position:relative;width:48px;height:23px;border:1px solid #00b286;border-radius:25px;-webkit-transition:background .15s,border .15s;transition:background .15s,border .15s;}.slider-container.on.jsx-2219802500{background:#00b286;border-color:#00b286;}.slider-container.off.jsx-2219802500{background:#dee1e5;border-color:#dee1e5;}.slider-thumb.jsx-2219802500{display:inline-block;width:21px;height:21px;position:absolute;top:0;bottom:0;margin:auto 0;background:white;border-radius:21px;-webkit-transition:left .25s;transition:left .25s;}.on.jsx-2219802500 .slider-thumb.jsx-2219802500{left:1px;}.off.jsx-2219802500 .slider-thumb.jsx-2219802500{left:26px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2xpZGVyL1NsaWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXb0IsQUFHc0MsQUFjRixBQUtBLEFBS0UsQUFpQlosQUFJQyxTQUhkLENBSUEsU0EvQnlCLEFBS0EsRUFuQkgsQUF3QlAsV0FDQyxPQXZCRCxDQWFmLEFBS0EsSUFPc0IsTUF4Qk4sWUFHYSxBQXNCbkIsTUFDRyxTQUNLLFVBdkJLLElBeUJGLGVBdkJ1QixFQXlCckIsbUJBRUUsa0RBQ3pCLGVBM0JBIiwiZmlsZSI6ImNvbXBvbmVudHMvU2xpZGVyL1NsaWRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvVEovcHJvamVjdHMvc2ltcGx5LXNvY2lhbCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBib29sLCBmdW5jIH0gZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuY29uc3QgU2xpZGVyID0gKHsgY2hlY2tlZCwgb25DbGljayB9KSA9PiAoXG4gICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdzbGlkZXItY29udGFpbmVyJywge1xuICAgICAgICBvbjogY2hlY2tlZCxcbiAgICAgICAgb2ZmOiAhY2hlY2tlZFxuICAgIH0pfSBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2xpZGVyLXRodW1iXCI+PC9zcGFuPlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5zbGlkZXItY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQ4cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyM3B4O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMGIyODY7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4xNXMsIGJvcmRlciAuMTVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAuc2xpZGVyLWNvbnRhaW5lci5vbiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwYjI4NjtcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICMwMGIyODY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5zbGlkZXItY29udGFpbmVyLm9mZiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2RlZTFlNTtcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICNkZWUxZTU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zbGlkZXItdGh1bWIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICB3aWR0aDogMjFweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIxcHg7XG5cbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG8gMDtcblxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjFweDtcblxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGxlZnQgLjI1cztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm9uIC5zbGlkZXItdGh1bWIge1xuICAgICAgICAgICAgICAgIGxlZnQ6IDFweDsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5vZmYgLnNsaWRlci10aHVtYiB7XG4gICAgICAgICAgICAgICAgbGVmdDogMjZweDsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L3NwYW4+XG4pO1xuXG5TbGlkZXIuZGlzcGxheU5hbWUgPSAnU2xpZGVyJztcblNsaWRlci5wcm9wVHlwZXMgPSB7XG4gICAgY2hlY2tlZDogYm9vbCxcbiAgICBvbkNsaWNrOiBmdW5jXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTbGlkZXI7Il19 */\n/*@ sourceURL=components/Slider/Slider.js */'
    }));
};

Slider.displayName = 'Slider';
Slider.propTypes = {
    checked: _propTypes.bool,
    onClick: _propTypes.func
};

exports.default = Slider;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2xpZGVyL1NsaWRlci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsImJvb2wiLCJmdW5jIiwiY2xhc3NOYW1lcyIsIlNsaWRlciIsImNoZWNrZWQiLCJvbkNsaWNrIiwib24iLCJvZmYiLCJkaXNwbGF5TmFtZSIsInByb3BUeXBlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFTLEFBQU07O0FBQ2YsQUFBTzs7Ozs7Ozs7O0FBRVAsSUFBTSxTQUFTLFNBQVQsQUFBUyxhQUFBO1FBQUEsQUFBRyxlQUFILEFBQUc7UUFBSCxBQUFZLGVBQVosQUFBWTsyQkFDdkIsY0FBQSxVQUdJLFNBSEosQUFHYSx3RUFISSxBQUFXO2dCQUFvQixBQUN4QyxBQUNKO2lCQUFLLENBRlQsQUFBaUIsQUFBK0IsQUFFdEM7QUFGc0MsQUFDNUMsU0FEYSxLQUFqQjs7c0JBQUE7d0JBQUEsQUFJSTtBQUpKO0tBQUE7NENBSUksQUFBZ0I7O3NCQUFoQjt3QkFKSixBQUlJO0FBQUE7QUFBQTtpQkFKSjthQURXLEFBQ1g7QUFBQTtBQURKOztBQTREQSxPQUFBLEFBQU8sY0FBUCxBQUFxQjtBQUNyQixPQUFBLEFBQU87QUFBWSxBQUNOLEFBQ1Q7QUFGSixBQUFtQixBQUVOLEFBR2I7QUFMbUIsQUFDZjs7a0JBSUosQUFBZSIsImZpbGUiOiJTbGlkZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL1RKL3Byb2plY3RzL3NpbXBseS1zb2NpYWwifQ==