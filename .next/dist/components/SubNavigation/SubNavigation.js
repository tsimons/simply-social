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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/TJ/projects/simply-social/components/SubNavigation/SubNavigation.js';


var SubNavigation = function SubNavigation(_ref) {
    var links = _ref.links,
        active = _ref.active;
    return _react2.default.createElement('nav', {
        className: 'jsx-601385405' + ' ' + 'sub-navigation',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 7
        }
    }, links.map(function (link) {
        return _react2.default.createElement(_link2.default, { key: link.href, href: link.href, __source: {
                fileName: _jsxFileName,
                lineNumber: 9
            }
        }, _react2.default.createElement('a', {
            className: 'jsx-601385405' + ' ' + ((0, _classnames2.default)('sub-navigation-link', { active: active === link.name }) || ''),
            __source: {
                fileName: _jsxFileName,
                lineNumber: 9
            }
        }, link.name));
    }), _react2.default.createElement(_style2.default, {
        styleId: '601385405',
        css: '.sub-navigation.jsx-601385405{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.sub-navigation-link.jsx-601385405{margin:0 0 0 39px;padding:5px 11px 19px;border-bottom:4px solid transparent;-webkit-transition:color .25s;transition:color .25s;text-align:center;}.sub-navigation-link.jsx-601385405:first-child{margin:0;}.sub-navigation-link.jsx-601385405,.layout-btn.jsx-601385405{font-weight:600;font-size:12px;text-transform:uppercase;text-decoration:none;color:#bec3cc;}.sub-navigation-link.active.jsx-601385405,.layout-btn.active.jsx-601385405{border-color:#00cc99;}.sub-navigation-link.jsx-601385405:hover,.sub-navigation-link.jsx-601385405:focus,.layout-btn.jsx-601385405:hover,.layout-btn.jsx-601385405:focus{color:#fff;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU3ViTmF2aWdhdGlvbi9TdWJOYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdvQixBQUc4QixBQUtLLEFBWVQsQUFLTyxBQVNLLEFBT1YsU0FwQmYsRUFxQkEsS0FoQm1CLEVBaEJPLEdBeUIxQixVQVI2QixTQWZXLGdCQWdCZixrQkF4QkYsRUFVRyxDQWVSLGNBQ2xCLHFDQWRzQixlQVh0QixHQVlBIiwiZmlsZSI6ImNvbXBvbmVudHMvU3ViTmF2aWdhdGlvbi9TdWJOYXZpZ2F0aW9uLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9USi9wcm9qZWN0cy9zaW1wbHktc29jaWFsIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGFycmF5T2YsIHNoYXBlLCBzdHJpbmcgfSBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuY29uc3QgU3ViTmF2aWdhdGlvbiA9ICh7IGxpbmtzLCBhY3RpdmUgfSkgPT4gKFxuICAgIDxuYXYgY2xhc3NOYW1lPVwic3ViLW5hdmlnYXRpb25cIj5cbiAgICAgICAge2xpbmtzLm1hcChsaW5rID0+IChcbiAgICAgICAgICAgIDxMaW5rIGtleT17bGluay5ocmVmfSBocmVmPXtsaW5rLmhyZWZ9PjxhIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnc3ViLW5hdmlnYXRpb24tbGluaycsIHsgYWN0aXZlOiBhY3RpdmUgPT09IGxpbmsubmFtZSB9KX0+eyBsaW5rLm5hbWUgfTwvYT48L0xpbms+XG4gICAgICAgICkpfVxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5zdWItbmF2aWdhdGlvbiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc3ViLW5hdmlnYXRpb24tbGluayB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMCAzOXB4O1xuXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDExcHggMTlweDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgLjI1cztcblxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLnN1Yi1uYXZpZ2F0aW9uLWxpbms6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnN1Yi1uYXZpZ2F0aW9uLWxpbmssXG4gICAgICAgICAgICAubGF5b3V0LWJ0biB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNiZWMzY2M7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zdWItbmF2aWdhdGlvbi1saW5rLmFjdGl2ZSxcbiAgICAgICAgICAgIC5sYXlvdXQtYnRuLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDBjYzk5O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc3ViLW5hdmlnYXRpb24tbGluazpob3ZlcixcbiAgICAgICAgICAgIC5zdWItbmF2aWdhdGlvbi1saW5rOmZvY3VzLFxuICAgICAgICAgICAgLmxheW91dC1idG46aG92ZXIsXG4gICAgICAgICAgICAubGF5b3V0LWJ0bjpmb2N1cyB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L25hdj5cbik7XG5cblN1Yk5hdmlnYXRpb24uZGlzcGxheU5hbWUgPSAnU3ViTmF2aWdhdGlvbic7XG5TdWJOYXZpZ2F0aW9uLnByb3BUeXBlcyA9IHtcbiAgICBsaW5rczogYXJyYXlPZihzaGFwZSh7XG4gICAgICAgIGhyZWY6IHN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICBuYW1lOiBzdHJpbmcuaXNSZXF1aXJlZFxuICAgIH0pKS5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdWJOYXZpZ2F0aW9uOyJdfQ== */\n/*@ sourceURL=components/SubNavigation/SubNavigation.js */'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU3ViTmF2aWdhdGlvbi9TdWJOYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiYXJyYXlPZiIsInNoYXBlIiwic3RyaW5nIiwiTGluayIsImNsYXNzTmFtZXMiLCJTdWJOYXZpZ2F0aW9uIiwibGlua3MiLCJhY3RpdmUiLCJtYXAiLCJsaW5rIiwiaHJlZiIsIm5hbWUiLCJkaXNwbGF5TmFtZSIsInByb3BUeXBlcyIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUyxBQUFTLEFBQU87O0FBQ3pCLEFBQU87Ozs7QUFDUCxBQUFPOzs7Ozs7Ozs7QUFFUCxJQUFNLGdCQUFnQixTQUFoQixBQUFnQixvQkFBQTtRQUFBLEFBQUcsYUFBSCxBQUFHO1FBQUgsQUFBVSxjQUFWLEFBQVU7MkJBQzVCLGNBQUE7MkNBQUEsQUFBZTs7c0JBQWY7d0JBQUEsQUFDSztBQURMO0FBQUEsS0FBQSxRQUNLLEFBQU0sSUFBSSxnQkFBQTsrQkFDUCxBQUFDLGdDQUFLLEtBQUssS0FBWCxBQUFnQixNQUFNLE1BQU0sS0FBNUIsQUFBaUM7MEJBQWpDOzRCQUFBLEFBQXVDO0FBQXZDO1NBQUEsa0JBQXVDLGNBQUE7Z0RBQWMsMEJBQUEsQUFBVyx1QkFBdUIsRUFBRSxRQUFRLFdBQVcsS0FBckUsQUFBYyxBQUFrQyxBQUEwQixXQUExRTs7MEJBQUE7NEJBQUEsQUFBcUY7QUFBckY7QUFBQSxnQkFEaEMsQUFDUCxBQUF1QyxBQUEwRjtBQUZ6SSxBQUNLO2lCQURMO2FBRGtCLEFBQ2xCO0FBQUE7QUFESjs7QUFvREEsY0FBQSxBQUFjLGNBQWQsQUFBNEI7QUFDNUIsY0FBQSxBQUFjOztjQUVBLGtCQURXLEFBQ0osQUFDYjtjQUFNLGtCQUZILEFBQVEsQUFBTSxBQUVKO0FBRkksQUFDakIsS0FEVyxDQUFSLEVBRFgsQUFBMEIsQUFJbEIsQUFHUjtBQVAwQixBQUN0Qjs7a0JBTUosQUFBZSIsImZpbGUiOiJTdWJOYXZpZ2F0aW9uLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9USi9wcm9qZWN0cy9zaW1wbHktc29jaWFsIn0=