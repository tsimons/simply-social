'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _formatNumber = require('../../helpers/formatNumber');

var _formatNumber2 = _interopRequireDefault(_formatNumber);

var _Base = require('../Base');

var _Base2 = _interopRequireDefault(_Base);

var _SubNavigation = require('../../components/SubNavigation');

var _SubNavigation2 = _interopRequireDefault(_SubNavigation);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/TJ/projects/simply-social/layouts/Profile/Profile.layout.js';


var ProfileLayout = function ProfileLayout(_ref) {
    var profile = _ref.profile,
        children = _ref.children;

    var followersCount = (0, _formatNumber2.default)(profile.followers.length);
    var followingCount = (0, _formatNumber2.default)(profile.following.length);

    var links = [{
        href: '/profile',
        name: profile.name + '\'s Feed'
    }, {
        href: '/profile/followers',
        name: followersCount + ' Followers'
    }, {
        href: '/profile/following',
        name: followingCount + ' following'
    }];

    return _react2.default.createElement(_Base2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 30
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-2729932527' + ' ' + 'profile-layout__header',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 31
        }
    }, _react2.default.createElement(_Header2.default, { profile: profile, __source: {
            fileName: _jsxFileName,
            lineNumber: 32
        }
    }), _react2.default.createElement(_SubNavigation2.default, { links: links, __source: {
            fileName: _jsxFileName,
            lineNumber: 34
        }
    })), _react2.default.createElement('div', {
        className: 'jsx-2729932527' + ' ' + 'profile-layout__content',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 36
        }
    }, children), _react2.default.createElement(_style2.default, {
        styleId: '2729932527',
        css: '.profile-layout__header.jsx-2729932527{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:427px;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding-top:90px;background:url(/static/hero-background.jpg) center center no-repeat;background-size:cover;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dHMvUHJvZmlsZS9Qcm9maWxlLmxheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Q3dCLEFBR2tDLDBFQUNBLGFBQ1MsOEVBQ0gsNkZBQ1csbUhBRWIsaUJBQ21ELG9FQUM5QyxzQkFDMUIiLCJmaWxlIjoibGF5b3V0cy9Qcm9maWxlL1Byb2ZpbGUubGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9USi9wcm9qZWN0cy9zaW1wbHktc29jaWFsIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG5vZGUgfSBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IGZvcm1hdE51bWJlciBmcm9tICcuLi8uLi9oZWxwZXJzL2Zvcm1hdE51bWJlcic7XG5cbmltcG9ydCBCYXNlIGZyb20gJy4uL0Jhc2UnO1xuXG5pbXBvcnQgU3ViTmF2aWdhdGlvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL1N1Yk5hdmlnYXRpb24nO1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcblxuXG5jb25zdCBQcm9maWxlTGF5b3V0ID0gKHsgcHJvZmlsZSwgY2hpbGRyZW4gfSkgPT4ge1xuICAgIGNvbnN0IGZvbGxvd2Vyc0NvdW50ID0gZm9ybWF0TnVtYmVyKHByb2ZpbGUuZm9sbG93ZXJzLmxlbmd0aCk7XG4gICAgY29uc3QgZm9sbG93aW5nQ291bnQgPSBmb3JtYXROdW1iZXIocHJvZmlsZS5mb2xsb3dpbmcubGVuZ3RoKTtcbiAgICBcbiAgICBjb25zdCBsaW5rcyA9IFt7XG4gICAgICAgIGhyZWY6ICcvcHJvZmlsZScsXG4gICAgICAgIG5hbWU6IGAke3Byb2ZpbGUubmFtZX0ncyBGZWVkYFxuICAgIH0sIHtcbiAgICAgICAgaHJlZjogJy9wcm9maWxlL2ZvbGxvd2VycycsXG4gICAgICAgIG5hbWU6IGAke2ZvbGxvd2Vyc0NvdW50fSBGb2xsb3dlcnNgXG4gICAgfSwge1xuICAgICAgICBocmVmOiAnL3Byb2ZpbGUvZm9sbG93aW5nJyxcbiAgICAgICAgbmFtZTogYCR7Zm9sbG93aW5nQ291bnR9IGZvbGxvd2luZ2BcbiAgICB9XTtcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEJhc2U+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtbGF5b3V0X19oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8SGVhZGVyIHByb2ZpbGU9e3Byb2ZpbGV9IC8+XG5cbiAgICAgICAgICAgICAgICA8U3ViTmF2aWdhdGlvbiBsaW5rcz17bGlua3N9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1sYXlvdXRfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5wcm9maWxlLWxheW91dF9faGVhZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MjdweDtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA5MHB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoL3N0YXRpYy9oZXJvLWJhY2tncm91bmQuanBnKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvQmFzZT5cbiAgICApO1xufTtcblxuUHJvZmlsZUxheW91dC5kaXNwbGF5TmFtZSA9ICdQcm9maWxlTGF5b3V0JztcblByb2ZpbGVMYXlvdXQucHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBub2RlLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVMYXlvdXQ7Il19 */\n/*@ sourceURL=layouts/Profile/Profile.layout.js */'
    }));
};

ProfileLayout.displayName = 'ProfileLayout';
ProfileLayout.propTypes = {
    children: _propTypes.node.isRequired
};

exports.default = ProfileLayout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dHMvUHJvZmlsZS9Qcm9maWxlLmxheW91dC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIm5vZGUiLCJmb3JtYXROdW1iZXIiLCJCYXNlIiwiU3ViTmF2aWdhdGlvbiIsIkhlYWRlciIsIlByb2ZpbGVMYXlvdXQiLCJwcm9maWxlIiwiY2hpbGRyZW4iLCJmb2xsb3dlcnNDb3VudCIsImZvbGxvd2VycyIsImxlbmd0aCIsImZvbGxvd2luZ0NvdW50IiwiZm9sbG93aW5nIiwibGlua3MiLCJocmVmIiwibmFtZSIsImRpc3BsYXlOYW1lIiwicHJvcFR5cGVzIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFTOztBQUVULEFBQU8sQUFBa0I7Ozs7QUFFekIsQUFBTyxBQUFVOzs7O0FBRWpCLEFBQU8sQUFBbUI7Ozs7QUFFMUIsQUFBTyxBQUFZOzs7Ozs7Ozs7QUFHbkIsSUFBTSxnQkFBZ0IsU0FBaEIsQUFBZ0Isb0JBQTJCO1FBQXhCLEFBQXdCLGVBQXhCLEFBQXdCO1FBQWYsQUFBZSxnQkFBZixBQUFlLEFBQzdDOztRQUFNLGlCQUFpQiw0QkFBYSxRQUFBLEFBQVEsVUFBNUMsQUFBdUIsQUFBK0IsQUFDdEQ7UUFBTSxpQkFBaUIsNEJBQWEsUUFBQSxBQUFRLFVBQTVDLEFBQXVCLEFBQStCLEFBRXREOztRQUFNO2NBQVMsQUFDTCxBQUNOO2NBQVMsUUFBVCxBQUFpQixPQUZQLEFBQUM7QUFBQSxBQUNYLEtBRFU7Y0FHWCxBQUNPLEFBQ047Y0FBQSxBQUFTLGlCQUxDLEFBR1g7QUFBQSxBQUNDO2NBRUQsQUFDTyxBQUNOO2NBQUEsQUFBUyxpQkFSYixBQUFjLEFBTVgsQUFNSDtBQU5HLEFBQ0M7OzJCQU1BLEFBQUM7O3NCQUFEO3dCQUFBLEFBQ0k7QUFESjtBQUFBLEtBQUEsa0JBQ0ksY0FBQTs0Q0FBQSxBQUFlOztzQkFBZjt3QkFBQSxBQUNJO0FBREo7QUFBQSx1QkFDSSxBQUFDLGtDQUFPLFNBQVIsQUFBaUI7c0JBQWpCO3dCQURKLEFBQ0ksQUFFQTtBQUZBO3dCQUVBLEFBQUMseUNBQWMsT0FBZixBQUFzQjtzQkFBdEI7d0JBSlIsQUFDSSxBQUdJLEFBRUo7QUFGSTt5QkFFSixjQUFBOzRDQUFBLEFBQWU7O3NCQUFmO3dCQUFBLEFBQ0s7QUFETDtBQUFBLE9BTkosQUFNSTtpQkFOSjthQURKLEFBQ0ksQUF5QlA7QUF6Qk87QUFqQlI7O0FBNENBLGNBQUEsQUFBYyxjQUFkLEFBQTRCO0FBQzVCLGNBQUEsQUFBYztjQUNBLGdCQURkLEFBQTBCLEFBQ1AsQUFHbkI7QUFKMEIsQUFDdEI7O2tCQUdKLEFBQWUiLCJmaWxlIjoiUHJvZmlsZS5sYXlvdXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL1RKL3Byb2plY3RzL3NpbXBseS1zb2NpYWwifQ==