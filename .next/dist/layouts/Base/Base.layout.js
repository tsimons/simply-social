'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _NavigationContainer = require('../../containers/NavigationContainer');

var _NavigationContainer2 = _interopRequireDefault(_NavigationContainer);

var _Footer = require('../../components/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/TJ/projects/simply-social/layouts/Base/Base.layout.js';


var BaseLayout = function BaseLayout(_ref) {
    var children = _ref.children;
    return _react2.default.createElement('div', {
        className: 'jsx-1675202940' + ' ' + 'base-layout',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    }, _react2.default.createElement(_head2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }, _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css', className: 'jsx-1675202940',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700', rel: 'stylesheet', className: 'jsx-1675202940',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    })), _react2.default.createElement('div', {
        className: 'jsx-1675202940' + ' ' + 'base-layout__navigation',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    }, _react2.default.createElement(_NavigationContainer2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    })), _react2.default.createElement('div', {
        className: 'jsx-1675202940' + ' ' + 'base-layout__content',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 18
        }
    }, children), _react2.default.createElement('div', {
        className: 'jsx-1675202940' + ' ' + 'base-layout__footer',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 22
        }
    }, _react2.default.createElement(_Footer2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 23
        }
    })), _react2.default.createElement(_style2.default, {
        styleId: '2846283029',
        css: 'body,html{height:100%;}body,p,a,input,textarea,h1,h2,h3,h4,h5,h6{font-family:\'Open Sans\';}*{box-sizing:border-box;}img,video{vertical-align:middle;max-width:100%;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dHMvQmFzZS9CYXNlLmxheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QjJCLEFBSTZCLEFBSVksQUFJRixBQUlBLFlBWDFCLFVBUUEsQUFJbUIsRUFSbkIsYUFTQSIsImZpbGUiOiJsYXlvdXRzL0Jhc2UvQmFzZS5sYXlvdXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL1RKL3Byb2plY3RzL3NpbXBseS1zb2NpYWwiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbm9kZSB9ICBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4uLy4uL2NvbnRhaW5lcnMvTmF2aWdhdGlvbkNvbnRhaW5lcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRm9vdGVyJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmNvbnN0IEJhc2VMYXlvdXQgPSAgKHsgY2hpbGRyZW4gfSkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFzZS1sYXlvdXRcIj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL21leWVyLXJlc2V0LzIuMC9yZXNldC5taW4uY3NzXCIvPlxuICAgICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnM6MzAwLDQwMCw2MDAsNzAwXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgICAgIDwvSGVhZD5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhc2UtbGF5b3V0X19uYXZpZ2F0aW9uXCI+XG4gICAgICAgICAgICA8TmF2aWdhdGlvbiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFzZS1sYXlvdXRfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXNlLWxheW91dF9fZm9vdGVyXCI+XG4gICAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgICBib2R5LFxuICAgICAgICAgICAgaHRtbCB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBib2R5LCBwLCBhLCBpbnB1dCwgdGV4dGFyZWEsIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgKiB7XG4gICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW1nLCB2aWRlbyB7XG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuYmFzZS1sYXlvdXQge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5iYXNlLWxheW91dF9fbmF2aWdhdGlvbiB7XG4gICAgICAgICAgICAgICAgZmxleDogMCAwIDYwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5iYXNlLWxheW91dF9fY29udGVudCB7XG4gICAgICAgICAgICAgICAgZmxleDogMSAxIDEwMCU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5iYXNlLWxheW91dF9fZm9vdGVyIHtcbiAgICAgICAgICAgICAgICBmbGV4OiAwIDAgNzBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbik7XG5cbkJhc2VMYXlvdXQuZGlzcGxheU5hbWUgPSAnQmFzZUxheW91dCc7XG5CYXNlTGF5b3V0LnByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogbm9kZVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYXNlTGF5b3V0OyJdfQ== */\n/*@ sourceURL=layouts/Base/Base.layout.js */'
    }), _react2.default.createElement(_style2.default, {
        styleId: '1937562464',
        css: '.base-layout.jsx-1675202940{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;height:100%;}.base-layout__navigation.jsx-1675202940{-webkit-flex:0 0 60px;-ms-flex:0 0 60px;flex:0 0 60px;}.base-layout__content.jsx-1675202940{-webkit-flex:1 1 100%;-ms-flex:1 1 100%;flex:1 1 100%;}.base-layout__footer.jsx-1675202940{-webkit-flex:0 0 70px;-ms-flex:0 0 70px;flex:0 0 70px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dHMvQmFzZS9CYXNlLmxheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2Q29CLEFBRzhCLEFBT0MsQUFJQSxBQUlBLHNEQVBsQixBQUlBLEFBSUEsb0JBZjBCLDhFQUNGLGlHQUNSLFlBQ2hCIiwiZmlsZSI6ImxheW91dHMvQmFzZS9CYXNlLmxheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvVEovcHJvamVjdHMvc2ltcGx5LXNvY2lhbCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBub2RlIH0gIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi4vLi4vY29udGFpbmVycy9OYXZpZ2F0aW9uQ29udGFpbmVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Gb290ZXInO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuY29uc3QgQmFzZUxheW91dCA9ICAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiYXNlLWxheW91dFwiPlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbWV5ZXItcmVzZXQvMi4wL3Jlc2V0Lm1pbi5jc3NcIi8+XG4gICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2FuczozMDAsNDAwLDYwMCw3MDBcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICAgICAgPC9IZWFkPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFzZS1sYXlvdXRfX25hdmlnYXRpb25cIj5cbiAgICAgICAgICAgIDxOYXZpZ2F0aW9uIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXNlLWxheW91dF9fY29udGVudFwiPlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhc2UtbGF5b3V0X19mb290ZXJcIj5cbiAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAgIGJvZHksXG4gICAgICAgICAgICBodG1sIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJvZHksIHAsIGEsIGlucHV0LCB0ZXh0YXJlYSwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAqIHtcbiAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbWcsIHZpZGVvIHtcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5iYXNlLWxheW91dCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJhc2UtbGF5b3V0X19uYXZpZ2F0aW9uIHtcbiAgICAgICAgICAgICAgICBmbGV4OiAwIDAgNjBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJhc2UtbGF5b3V0X19jb250ZW50IHtcbiAgICAgICAgICAgICAgICBmbGV4OiAxIDEgMTAwJTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJhc2UtbGF5b3V0X19mb290ZXIge1xuICAgICAgICAgICAgICAgIGZsZXg6IDAgMCA3MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuKTtcblxuQmFzZUxheW91dC5kaXNwbGF5TmFtZSA9ICdCYXNlTGF5b3V0JztcbkJhc2VMYXlvdXQucHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBub2RlXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VMYXlvdXQ7Il19 */\n/*@ sourceURL=layouts/Base/Base.layout.js */'
    }));
};

BaseLayout.displayName = 'BaseLayout';
BaseLayout.propTypes = {
    children: _propTypes.node
};

exports.default = BaseLayout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dHMvQmFzZS9CYXNlLmxheW91dC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIm5vZGUiLCJOYXZpZ2F0aW9uIiwiRm9vdGVyIiwiSGVhZCIsIkJhc2VMYXlvdXQiLCJjaGlsZHJlbiIsImRpc3BsYXlOYW1lIiwicHJvcFR5cGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVM7O0FBQ1QsQUFBTyxBQUFnQjs7OztBQUN2QixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTzs7Ozs7Ozs7O0FBRVAsSUFBTSxhQUFjLFNBQWQsQUFBYyxpQkFBQTtRQUFBLEFBQUcsZ0JBQUgsQUFBRzsyQkFDbkIsY0FBQTs0Q0FBQSxBQUFlOztzQkFBZjt3QkFBQSxBQUNJO0FBREo7QUFBQSxLQUFBLGtCQUNJLEFBQUM7O3NCQUFEO3dCQUFBLEFBQ0k7QUFESjtBQUFBLCtDQUNVLEtBQU4sQUFBVSxjQUFhLE1BQXZCLEFBQTRCLG1GQUE1Qjs7c0JBQUE7d0JBREosQUFDSSxBQUNBO0FBREE7Z0RBQ00sTUFBTixBQUFXLHFFQUFvRSxLQUEvRSxBQUFtRix5QkFBbkY7O3NCQUFBO3dCQUhSLEFBQ0ksQUFFSSxBQUdKO0FBSEk7eUJBR0osY0FBQTs0Q0FBQSxBQUFlOztzQkFBZjt3QkFBQSxBQUNJO0FBREo7QUFBQSx1QkFDSSxBQUFDOztzQkFBRDt3QkFQUixBQU1JLEFBQ0ksQUFHSjtBQUhJO0FBQUEseUJBR0osY0FBQTs0Q0FBQSxBQUFlOztzQkFBZjt3QkFBQSxBQUNLO0FBREw7QUFBQSxPQVZKLEFBVUksQUFJQSwyQkFBQSxjQUFBOzRDQUFBLEFBQWU7O3NCQUFmO3dCQUFBLEFBQ0k7QUFESjtBQUFBLHVCQUNJLEFBQUM7O3NCQUFEO3dCQWZSLEFBY0ksQUFDSTtBQUFBO0FBQUE7aUJBZlI7YUFBQTtBQUFBO2lCQUFBO2FBRGdCLEFBQ2hCO0FBQUE7QUFESjs7QUErREEsV0FBQSxBQUFXLGNBQVgsQUFBeUI7QUFDekIsV0FBQSxBQUFXO0FBQVgsQUFBdUIsQUFDVCxBQUdkO0FBSnVCLEFBQ25COztrQkFHSixBQUFlIiwiZmlsZSI6IkJhc2UubGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9USi9wcm9qZWN0cy9zaW1wbHktc29jaWFsIn0=