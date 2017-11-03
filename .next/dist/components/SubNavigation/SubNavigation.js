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
        css: '.sub-navigation.jsx-601385405{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.sub-navigation-link.jsx-601385405{margin:0 0 0 39px;padding:5px 11px 19px;border-bottom:4px solid transparent;-webkit-transition:color .25s;transition:color .25s;text-align:center;}.sub-navigation-link.jsx-601385405:first-child{margin:0;}.sub-navigation-link.jsx-601385405,.layout-btn.jsx-601385405{font-weight:600;font-size:12px;text-transform:uppercase;text-decoration:none;color:#bec3cc;}.sub-navigation-link.active.jsx-601385405,.layout-btn.active.jsx-601385405{border-color:#00cc99;}.sub-navigation-link.jsx-601385405:hover,.sub-navigation-link.jsx-601385405:focus,.layout-btn.jsx-601385405:hover,.layout-btn.jsx-601385405:focus{color:#fff;}'
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