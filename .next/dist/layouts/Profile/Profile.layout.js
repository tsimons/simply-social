'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _Base = require('../Base');

var _Base2 = _interopRequireDefault(_Base);

var _SubNavigation = require('../../components/SubNavigation');

var _SubNavigation2 = _interopRequireDefault(_SubNavigation);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/TJ/projects/simply-social/layouts/Profile/Profile.layout.js';


var defaultProfile = {
    name: 'TJ Simons',
    bio: 'Engineer in the Twin Cities Area',
    site: 'http://tjsimons.com',
    img: 'https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-1/p160x160/20228285_10156386606534638_4208836979691078674_n.jpg?oh=fbeb0943ca159be516c2eba0fd068152&oe=5A6A3C09',
    followersCount: 2542,
    followingCount: 517
};

var thirdDigitPattern = /\B(?=(\d{3})+(?!\d))/g;
var formatNumber = function formatNumber() {
    var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    return num.toString().replace(thirdDigitPattern, ",");
};

var ProfileLayout = function ProfileLayout(_ref) {
    var profile = _ref.profile,
        children = _ref.children;

    var followersCount = formatNumber(profile.followersCount);
    var followingCount = formatNumber(profile.followingCount);

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
            lineNumber: 39
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-2729932527' + ' ' + 'profile-layout__header',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 40
        }
    }, _react2.default.createElement(_Header2.default, { profile: profile, __source: {
            fileName: _jsxFileName,
            lineNumber: 41
        }
    }), _react2.default.createElement(_SubNavigation2.default, { links: links, __source: {
            fileName: _jsxFileName,
            lineNumber: 43
        }
    })), _react2.default.createElement('div', {
        className: 'jsx-2729932527' + ' ' + 'profile-layout__content',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 45
        }
    }, children), _react2.default.createElement(_style2.default, {
        styleId: '2729932527',
        css: '.profile-layout__header.jsx-2729932527{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:427px;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding-top:90px;background:url(/static/hero-background.jpg) center center no-repeat;background-size:cover;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dHMvUHJvZmlsZS9Qcm9maWxlLmxheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRHdCLEFBR2tDLDBFQUNBLGFBQ1MsOEVBQ0gsNkZBQ1csbUhBRWIsaUJBQ21ELG9FQUM5QyxzQkFDMUIiLCJmaWxlIjoibGF5b3V0cy9Qcm9maWxlL1Byb2ZpbGUubGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9USi9wcm9qZWN0cy9zaW1wbHktc29jaWFsIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG5vZGUgfSBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IEJhc2UgZnJvbSAnLi4vQmFzZSc7XG5cbmltcG9ydCBTdWJOYXZpZ2F0aW9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU3ViTmF2aWdhdGlvbic7XG5cbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xuXG5jb25zdCBkZWZhdWx0UHJvZmlsZSA9IHtcbiAgICBuYW1lOiAnVEogU2ltb25zJyxcbiAgICBiaW86ICdFbmdpbmVlciBpbiB0aGUgVHdpbiBDaXRpZXMgQXJlYScsXG4gICAgc2l0ZTogJ2h0dHA6Ly90anNpbW9ucy5jb20nLFxuICAgIGltZzogJ2h0dHBzOi8vc2NvbnRlbnQtb3J0Mi0yLnh4LmZiY2RuLm5ldC92L3QxLjAtMS9wMTYweDE2MC8yMDIyODI4NV8xMDE1NjM4NjYwNjUzNDYzOF80MjA4ODM2OTc5NjkxMDc4Njc0X24uanBnP29oPWZiZWIwOTQzY2ExNTliZTUxNmMyZWJhMGZkMDY4MTUyJm9lPTVBNkEzQzA5JyxcbiAgICBmb2xsb3dlcnNDb3VudDogMjU0MixcbiAgICBmb2xsb3dpbmdDb3VudDogNTE3XG59O1xuXG5jb25zdCB0aGlyZERpZ2l0UGF0dGVybiA9IC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nO1xuY29uc3QgZm9ybWF0TnVtYmVyID0gKG51bSA9IDEpID0+IG51bS50b1N0cmluZygpLnJlcGxhY2UodGhpcmREaWdpdFBhdHRlcm4sIFwiLFwiKTtcblxuXG5jb25zdCBQcm9maWxlTGF5b3V0ID0gKHsgcHJvZmlsZSwgY2hpbGRyZW4gfSkgPT4ge1xuICAgIGNvbnN0IGZvbGxvd2Vyc0NvdW50ID0gZm9ybWF0TnVtYmVyKHByb2ZpbGUuZm9sbG93ZXJzQ291bnQpO1xuICAgIGNvbnN0IGZvbGxvd2luZ0NvdW50ID0gZm9ybWF0TnVtYmVyKHByb2ZpbGUuZm9sbG93aW5nQ291bnQpO1xuICAgIFxuICAgIGNvbnN0IGxpbmtzID0gW3tcbiAgICAgICAgaHJlZjogJy9wcm9maWxlJyxcbiAgICAgICAgbmFtZTogYCR7cHJvZmlsZS5uYW1lfSdzIEZlZWRgXG4gICAgfSwge1xuICAgICAgICBocmVmOiAnL3Byb2ZpbGUvZm9sbG93ZXJzJyxcbiAgICAgICAgbmFtZTogYCR7Zm9sbG93ZXJzQ291bnR9IEZvbGxvd2Vyc2BcbiAgICB9LCB7XG4gICAgICAgIGhyZWY6ICcvcHJvZmlsZS9mb2xsb3dpbmcnLFxuICAgICAgICBuYW1lOiBgJHtmb2xsb3dpbmdDb3VudH0gZm9sbG93aW5nYFxuICAgIH1dO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEJhc2U+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtbGF5b3V0X19oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8SGVhZGVyIHByb2ZpbGU9e3Byb2ZpbGV9IC8+XG5cbiAgICAgICAgICAgICAgICA8U3ViTmF2aWdhdGlvbiBsaW5rcz17bGlua3N9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1sYXlvdXRfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5wcm9maWxlLWxheW91dF9faGVhZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MjdweDtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA5MHB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoL3N0YXRpYy9oZXJvLWJhY2tncm91bmQuanBnKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvQmFzZT5cbiAgICApO1xufTtcblxuUHJvZmlsZUxheW91dC5kaXNwbGF5TmFtZSA9ICdQcm9maWxlTGF5b3V0JztcblByb2ZpbGVMYXlvdXQucHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBub2RlLmlzUmVxdWlyZWRcbn07XG5Qcm9maWxlTGF5b3V0LmRlZmF1bHRQcm9wcyA9IHtcbiAgICBwcm9maWxlOiBkZWZhdWx0UHJvZmlsZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZUxheW91dDsiXX0= */\n/*@ sourceURL=layouts/Profile/Profile.layout.js */'
    }));
};

ProfileLayout.displayName = 'ProfileLayout';
ProfileLayout.propTypes = {
    children: _propTypes.node.isRequired
};
ProfileLayout.defaultProps = {
    profile: defaultProfile
};

exports.default = ProfileLayout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dHMvUHJvZmlsZS9Qcm9maWxlLmxheW91dC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIm5vZGUiLCJCYXNlIiwiU3ViTmF2aWdhdGlvbiIsIkhlYWRlciIsImRlZmF1bHRQcm9maWxlIiwibmFtZSIsImJpbyIsInNpdGUiLCJpbWciLCJmb2xsb3dlcnNDb3VudCIsImZvbGxvd2luZ0NvdW50IiwidGhpcmREaWdpdFBhdHRlcm4iLCJmb3JtYXROdW1iZXIiLCJudW0iLCJ0b1N0cmluZyIsInJlcGxhY2UiLCJQcm9maWxlTGF5b3V0IiwicHJvZmlsZSIsImNoaWxkcmVuIiwibGlua3MiLCJocmVmIiwiZGlzcGxheU5hbWUiLCJwcm9wVHlwZXMiLCJpc1JlcXVpcmVkIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVM7O0FBRVQsQUFBTyxBQUFVOzs7O0FBRWpCLEFBQU8sQUFBbUI7Ozs7QUFFMUIsQUFBTyxBQUFZOzs7Ozs7Ozs7QUFFbkIsSUFBTTtVQUFpQixBQUNiLEFBQ047U0FGbUIsQUFFZCxBQUNMO1VBSG1CLEFBR2IsQUFDTjtTQUptQixBQUlkLEFBQ0w7b0JBTG1CLEFBS0gsQUFDaEI7b0JBTkosQUFBdUIsQUFNSDtBQU5HLEFBQ25COztBQVFKLElBQU0sb0JBQU4sQUFBMEI7QUFDMUIsSUFBTSxlQUFlLFNBQWYsQUFBZSxlQUFBO1FBQUEsQUFBQywwRUFBRCxBQUFPO1dBQU0sSUFBQSxBQUFJLFdBQUosQUFBZSxRQUFmLEFBQXVCLG1CQUFwQyxBQUFhLEFBQTBDO0FBQTVFOztBQUdBLElBQU0sZ0JBQWdCLFNBQWhCLEFBQWdCLG9CQUEyQjtRQUF4QixBQUF3QixlQUF4QixBQUF3QjtRQUFmLEFBQWUsZ0JBQWYsQUFBZSxBQUM3Qzs7UUFBTSxpQkFBaUIsYUFBYSxRQUFwQyxBQUF1QixBQUFxQixBQUM1QztRQUFNLGlCQUFpQixhQUFhLFFBQXBDLEFBQXVCLEFBQXFCLEFBRTVDOztRQUFNO2NBQVMsQUFDTCxBQUNOO2NBQVMsUUFBVCxBQUFpQixPQUZQLEFBQUM7QUFBQSxBQUNYLEtBRFU7Y0FHWCxBQUNPLEFBQ047Y0FBQSxBQUFTLGlCQUxDLEFBR1g7QUFBQSxBQUNDO2NBRUQsQUFDTyxBQUNOO2NBQUEsQUFBUyxpQkFSYixBQUFjLEFBTVgsQUFLSDtBQUxHLEFBQ0M7OzJCQUtBLEFBQUM7O3NCQUFEO3dCQUFBLEFBQ0k7QUFESjtBQUFBLEtBQUEsa0JBQ0ksY0FBQTs0Q0FBQSxBQUFlOztzQkFBZjt3QkFBQSxBQUNJO0FBREo7QUFBQSx1QkFDSSxBQUFDLGtDQUFPLFNBQVIsQUFBaUI7c0JBQWpCO3dCQURKLEFBQ0ksQUFFQTtBQUZBO3dCQUVBLEFBQUMseUNBQWMsT0FBZixBQUFzQjtzQkFBdEI7d0JBSlIsQUFDSSxBQUdJLEFBRUo7QUFGSTt5QkFFSixjQUFBOzRDQUFBLEFBQWU7O3NCQUFmO3dCQUFBLEFBQ0s7QUFETDtBQUFBLE9BTkosQUFNSTtpQkFOSjthQURKLEFBQ0ksQUF5QlA7QUF6Qk87QUFoQlI7O0FBMkNBLGNBQUEsQUFBYyxjQUFkLEFBQTRCO0FBQzVCLGNBQUEsQUFBYztjQUNBLGdCQURkLEFBQTBCLEFBQ1A7QUFETyxBQUN0QjtBQUVKLGNBQUEsQUFBYzthQUFkLEFBQTZCLEFBQ2hCLEFBR2I7QUFKNkIsQUFDekI7O2tCQUdKLEFBQWUiLCJmaWxlIjoiUHJvZmlsZS5sYXlvdXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL1RKL3Byb2plY3RzL3NpbXBseS1zb2NpYWwifQ==