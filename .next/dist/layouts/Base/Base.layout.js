'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _Navigation = require('../../components/Navigation');

var _Navigation2 = _interopRequireDefault(_Navigation);

var _Footer = require('../../components/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/TJ/projects/simply-social/layouts/Base/Base.layout.js';


var BaseLayout = function BaseLayout(_ref) {
    var children = _ref.children;
    return _react2.default.createElement('div', {
        className: 'jsx-1443766461' + ' ' + 'base-layout',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    }, _react2.default.createElement(_head2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }, _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css', className: 'jsx-1443766461',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    })), _react2.default.createElement('div', {
        className: 'jsx-1443766461' + ' ' + 'base-layout__navigation',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 13
        }
    }, _react2.default.createElement(_Navigation2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    })), _react2.default.createElement('div', {
        className: 'jsx-1443766461' + ' ' + 'base-layout__content',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 17
        }
    }, children), _react2.default.createElement('div', {
        className: 'jsx-1443766461' + ' ' + 'base-layout__footer',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 21
        }
    }, _react2.default.createElement(_Footer2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 22
        }
    })), _react2.default.createElement(_style2.default, {
        styleId: '1096902356',
        css: 'body,html,body>*,body>*>*,body>*>*>*{height:100%;}body{font-family:"Open Sans";}*{box-sizing:border-box;}img,video{vertical-align:middle;max-width:100%;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dHMvQmFzZS9CYXNlLmxheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3QjJCLEFBTzZCLEFBSVksQUFJRixBQUlBLFlBWDFCLFVBUUEsQUFJbUIsRUFSbkIsYUFTQSIsImZpbGUiOiJsYXlvdXRzL0Jhc2UvQmFzZS5sYXlvdXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL1RKL3Byb2plY3RzL3NpbXBseS1zb2NpYWwiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbm9kZSB9ICBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTmF2aWdhdGlvbic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRm9vdGVyJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmNvbnN0IEJhc2VMYXlvdXQgPSAgKHsgY2hpbGRyZW4gfSkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFzZS1sYXlvdXRcIj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL21leWVyLXJlc2V0LzIuMC9yZXNldC5taW4uY3NzXCIvPlxuICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXNlLWxheW91dF9fbmF2aWdhdGlvblwiPlxuICAgICAgICAgICAgPE5hdmlnYXRpb24gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhc2UtbGF5b3V0X19jb250ZW50XCI+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFzZS1sYXlvdXRfX2Zvb3RlclwiPlxuICAgICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgICAgYm9keSxcbiAgICAgICAgICAgIGh0bWwsXG4gICAgICAgICAgICBib2R5ID4gKixcbiAgICAgICAgICAgIGJvZHkgPiAqID4gKixcbiAgICAgICAgICAgIGJvZHkgPiAqID4gKiA+ICoge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICoge1xuICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGltZywgdmlkZW8ge1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLmJhc2UtbGF5b3V0IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYmFzZS1sYXlvdXRfX25hdmlnYXRpb24ge1xuICAgICAgICAgICAgICAgIGZsZXg6IDAgMCA2MHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYmFzZS1sYXlvdXRfX2NvbnRlbnQge1xuICAgICAgICAgICAgICAgIGZsZXg6IDEgMSAxMDAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYmFzZS1sYXlvdXRfX2Zvb3RlciB7XG4gICAgICAgICAgICAgICAgZmxleDogMCAwIDcwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4pO1xuXG5CYXNlTGF5b3V0LmRpc3BsYXlOYW1lID0gJ0Jhc2VMYXlvdXQnO1xuQmFzZUxheW91dC5wcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IG5vZGVcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZUxheW91dDsiXX0= */\n/*@ sourceURL=layouts/Base/Base.layout.js */'
    }), _react2.default.createElement(_style2.default, {
        styleId: '1937562464',
        css: '.base-layout.jsx-1443766461{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;height:100%;}.base-layout__navigation.jsx-1443766461{-webkit-flex:0 0 60px;-ms-flex:0 0 60px;flex:0 0 60px;}.base-layout__content.jsx-1443766461{-webkit-flex:1 1 100%;-ms-flex:1 1 100%;flex:1 1 100%;}.base-layout__footer.jsx-1443766461{-webkit-flex:0 0 70px;-ms-flex:0 0 70px;flex:0 0 70px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dHMvQmFzZS9CYXNlLmxheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQ29CLEFBRzhCLEFBT0MsQUFJQSxBQUlBLHNEQVBsQixBQUlBLEFBSUEsb0JBZjBCLDhFQUNGLGlHQUNSLFlBQ2hCIiwiZmlsZSI6ImxheW91dHMvQmFzZS9CYXNlLmxheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvVEovcHJvamVjdHMvc2ltcGx5LXNvY2lhbCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBub2RlIH0gIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9OYXZpZ2F0aW9uJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Gb290ZXInO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuY29uc3QgQmFzZUxheW91dCA9ICAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiYXNlLWxheW91dFwiPlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbWV5ZXItcmVzZXQvMi4wL3Jlc2V0Lm1pbi5jc3NcIi8+XG4gICAgICAgIDwvSGVhZD5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhc2UtbGF5b3V0X19uYXZpZ2F0aW9uXCI+XG4gICAgICAgICAgICA8TmF2aWdhdGlvbiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFzZS1sYXlvdXRfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXNlLWxheW91dF9fZm9vdGVyXCI+XG4gICAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgICBib2R5LFxuICAgICAgICAgICAgaHRtbCxcbiAgICAgICAgICAgIGJvZHkgPiAqLFxuICAgICAgICAgICAgYm9keSA+ICogPiAqLFxuICAgICAgICAgICAgYm9keSA+ICogPiAqID4gKiB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgKiB7XG4gICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW1nLCB2aWRlbyB7XG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuYmFzZS1sYXlvdXQge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5iYXNlLWxheW91dF9fbmF2aWdhdGlvbiB7XG4gICAgICAgICAgICAgICAgZmxleDogMCAwIDYwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5iYXNlLWxheW91dF9fY29udGVudCB7XG4gICAgICAgICAgICAgICAgZmxleDogMSAxIDEwMCU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5iYXNlLWxheW91dF9fZm9vdGVyIHtcbiAgICAgICAgICAgICAgICBmbGV4OiAwIDAgNzBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbik7XG5cbkJhc2VMYXlvdXQuZGlzcGxheU5hbWUgPSAnQmFzZUxheW91dCc7XG5CYXNlTGF5b3V0LnByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogbm9kZVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYXNlTGF5b3V0OyJdfQ== */\n/*@ sourceURL=layouts/Base/Base.layout.js */'
    }));
};

BaseLayout.displayName = 'BaseLayout';
BaseLayout.propTypes = {
    children: _propTypes.node
};

exports.default = BaseLayout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dHMvQmFzZS9CYXNlLmxheW91dC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIm5vZGUiLCJOYXZpZ2F0aW9uIiwiRm9vdGVyIiwiSGVhZCIsIkJhc2VMYXlvdXQiLCJjaGlsZHJlbiIsImRpc3BsYXlOYW1lIiwicHJvcFR5cGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVM7O0FBQ1QsQUFBTyxBQUFnQjs7OztBQUN2QixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTzs7Ozs7Ozs7O0FBRVAsSUFBTSxhQUFjLFNBQWQsQUFBYyxpQkFBQTtRQUFBLEFBQUcsZ0JBQUgsQUFBRzsyQkFDbkIsY0FBQTs0Q0FBQSxBQUFlOztzQkFBZjt3QkFBQSxBQUNJO0FBREo7QUFBQSxLQUFBLGtCQUNJLEFBQUM7O3NCQUFEO3dCQUFBLEFBQ0k7QUFESjtBQUFBLCtDQUNVLEtBQU4sQUFBVSxjQUFhLE1BQXZCLEFBQTRCLG1GQUE1Qjs7c0JBQUE7d0JBRlIsQUFDSSxBQUNJLEFBR0o7QUFISTt5QkFHSixjQUFBOzRDQUFBLEFBQWU7O3NCQUFmO3dCQUFBLEFBQ0k7QUFESjtBQUFBLHVCQUNJLEFBQUM7O3NCQUFEO3dCQU5SLEFBS0ksQUFDSSxBQUdKO0FBSEk7QUFBQSx5QkFHSixjQUFBOzRDQUFBLEFBQWU7O3NCQUFmO3dCQUFBLEFBQ0s7QUFETDtBQUFBLE9BVEosQUFTSSxBQUlBLDJCQUFBLGNBQUE7NENBQUEsQUFBZTs7c0JBQWY7d0JBQUEsQUFDSTtBQURKO0FBQUEsdUJBQ0ksQUFBQzs7c0JBQUQ7d0JBZFIsQUFhSSxBQUNJO0FBQUE7QUFBQTtpQkFkUjthQUFBO0FBQUE7aUJBQUE7YUFEZ0IsQUFDaEI7QUFBQTtBQURKOztBQWlFQSxXQUFBLEFBQVcsY0FBWCxBQUF5QjtBQUN6QixXQUFBLEFBQVc7QUFBWCxBQUF1QixBQUNULEFBR2Q7QUFKdUIsQUFDbkI7O2tCQUdKLEFBQWUiLCJmaWxlIjoiQmFzZS5sYXlvdXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL1RKL3Byb2plY3RzL3NpbXBseS1zb2NpYWwifQ==