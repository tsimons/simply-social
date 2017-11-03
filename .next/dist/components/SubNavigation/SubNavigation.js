'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/TJ/projects/simply-social/components/SubNavigation/SubNavigation.js';


var SubNavigation = function SubNavigation(_ref) {
    var links = _ref.links;
    return _react2.default.createElement('nav', {
        className: 'jsx-601385405' + ' ' + 'sub-navigation',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    }, links.map(function (link) {
        return _react2.default.createElement(_link2.default, { key: link.href, href: link.href, __source: {
                fileName: _jsxFileName,
                lineNumber: 8
            }
        }, _react2.default.createElement('a', {
            className: 'jsx-601385405' + ' ' + 'sub-navigation-link',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 8
            }
        }, link.name));
    }), _react2.default.createElement(_style2.default, {
        styleId: '601385405',
        css: '.sub-navigation.jsx-601385405{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.sub-navigation-link.jsx-601385405{margin:0 0 0 39px;padding:5px 11px 19px;border-bottom:4px solid transparent;-webkit-transition:color .25s;transition:color .25s;text-align:center;}.sub-navigation-link.jsx-601385405:first-child{margin:0;}.sub-navigation-link.jsx-601385405,.layout-btn.jsx-601385405{font-weight:600;font-size:12px;text-transform:uppercase;text-decoration:none;color:#bec3cc;}.sub-navigation-link.active.jsx-601385405,.layout-btn.active.jsx-601385405{border-color:#00cc99;}.sub-navigation-link.jsx-601385405:hover,.sub-navigation-link.jsx-601385405:focus,.layout-btn.jsx-601385405:hover,.layout-btn.jsx-601385405:focus{color:#fff;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU3ViTmF2aWdhdGlvbi9TdWJOYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVvQixBQUc4QixBQUtLLEFBWVQsQUFLTyxBQVNLLEFBT1YsU0FwQmYsRUFxQkEsS0FoQm1CLEVBaEJPLEdBeUIxQixVQVI2QixTQWZXLGdCQWdCZixrQkF4QkYsRUFVRyxDQWVSLGNBQ2xCLHFDQWRzQixlQVh0QixHQVlBIiwiZmlsZSI6ImNvbXBvbmVudHMvU3ViTmF2aWdhdGlvbi9TdWJOYXZpZ2F0aW9uLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9USi9wcm9qZWN0cy9zaW1wbHktc29jaWFsIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGFycmF5T2YsIHNoYXBlLCBzdHJpbmcgfSBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNvbnN0IFN1Yk5hdmlnYXRpb24gPSAoeyBsaW5rcyB9KSA9PiAoXG4gICAgPG5hdiBjbGFzc05hbWU9XCJzdWItbmF2aWdhdGlvblwiPlxuICAgICAgICB7bGlua3MubWFwKGxpbmsgPT4gKFxuICAgICAgICAgICAgPExpbmsga2V5PXtsaW5rLmhyZWZ9IGhyZWY9e2xpbmsuaHJlZn0+PGEgY2xhc3NOYW1lPVwic3ViLW5hdmlnYXRpb24tbGlua1wiPnsgbGluay5uYW1lIH08L2E+PC9MaW5rPlxuICAgICAgICApKX1cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuc3ViLW5hdmlnYXRpb24ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnN1Yi1uYXZpZ2F0aW9uLWxpbmsge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDAgMzlweDtcblxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMXB4IDE5cHg7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIC4yNXM7XG5cbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5zdWItbmF2aWdhdGlvbi1saW5rOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zdWItbmF2aWdhdGlvbi1saW5rLFxuICAgICAgICAgICAgLmxheW91dC1idG4ge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjYmVjM2NjO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc3ViLW5hdmlnYXRpb24tbGluay5hY3RpdmUsXG4gICAgICAgICAgICAubGF5b3V0LWJ0bi5hY3RpdmUge1xuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzAwY2M5OTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnN1Yi1uYXZpZ2F0aW9uLWxpbms6aG92ZXIsXG4gICAgICAgICAgICAuc3ViLW5hdmlnYXRpb24tbGluazpmb2N1cyxcbiAgICAgICAgICAgIC5sYXlvdXQtYnRuOmhvdmVyLFxuICAgICAgICAgICAgLmxheW91dC1idG46Zm9jdXMge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgPC9uYXY+XG4pO1xuXG5TdWJOYXZpZ2F0aW9uLmRpc3BsYXlOYW1lID0gJ1N1Yk5hdmlnYXRpb24nO1xuU3ViTmF2aWdhdGlvbi5wcm9wVHlwZXMgPSB7XG4gICAgbGlua3M6IGFycmF5T2Yoc2hhcGUoe1xuICAgICAgICBocmVmOiBzdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgbmFtZTogc3RyaW5nLmlzUmVxdWlyZWRcbiAgICB9KSkuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU3ViTmF2aWdhdGlvbjsiXX0= */\n/*@ sourceURL=components/SubNavigation/SubNavigation.js */'
    }));
};

SubNavigation.displayName = 'SubNavigation';
SubNavigation.propTypes = {
    links: (0, _propTypes.arrayOf)((0, _propTypes.shape)({
        href: _propTypes.string.isRequired,
        name: _propTypes.string.isRequired
    })).isRequired
};

exports.default = SubNavigation;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU3ViTmF2aWdhdGlvbi9TdWJOYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiYXJyYXlPZiIsInNoYXBlIiwic3RyaW5nIiwiTGluayIsIlN1Yk5hdmlnYXRpb24iLCJsaW5rcyIsIm1hcCIsImxpbmsiLCJocmVmIiwibmFtZSIsImRpc3BsYXlOYW1lIiwicHJvcFR5cGVzIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFTLEFBQVMsQUFBTzs7QUFDekIsQUFBTzs7Ozs7Ozs7O0FBRVAsSUFBTSxnQkFBZ0IsU0FBaEIsQUFBZ0Isb0JBQUE7UUFBQSxBQUFHLGFBQUgsQUFBRzsyQkFDckIsY0FBQTsyQ0FBQSxBQUFlOztzQkFBZjt3QkFBQSxBQUNLO0FBREw7QUFBQSxLQUFBLFFBQ0ssQUFBTSxJQUFJLGdCQUFBOytCQUNQLEFBQUMsZ0NBQUssS0FBSyxLQUFYLEFBQWdCLE1BQU0sTUFBTSxLQUE1QixBQUFpQzswQkFBakM7NEJBQUEsQUFBdUM7QUFBdkM7U0FBQSxrQkFBdUMsY0FBQTsrQ0FBQSxBQUFhOzswQkFBYjs0QkFBQSxBQUFxQztBQUFyQztBQUFBLGdCQURoQyxBQUNQLEFBQXVDLEFBQTBDO0FBRnpGLEFBQ0s7aUJBREw7YUFEa0IsQUFDbEI7QUFBQTtBQURKOztBQW9EQSxjQUFBLEFBQWMsY0FBZCxBQUE0QjtBQUM1QixjQUFBLEFBQWM7O2NBRUEsa0JBRFcsQUFDSixBQUNiO2NBQU0sa0JBRkgsQUFBUSxBQUFNLEFBRUo7QUFGSSxBQUNqQixLQURXLENBQVIsRUFEWCxBQUEwQixBQUlsQixBQUdSO0FBUDBCLEFBQ3RCOztrQkFNSixBQUFlIiwiZmlsZSI6IlN1Yk5hdmlnYXRpb24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL1RKL3Byb2plY3RzL3NpbXBseS1zb2NpYWwifQ==