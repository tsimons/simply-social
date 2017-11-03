'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _Logo = require('../Logo');

var _Logo2 = _interopRequireDefault(_Logo);

var _DropDown = require('../DropDown');

var _DropDown2 = _interopRequireDefault(_DropDown);

var _NewPostModal = require('./NewPostModal');

var _NewPostModal2 = _interopRequireDefault(_NewPostModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/TJ/projects/simply-social/components/Navigation/Navigation.js';

exports.default = function () {
    return _react2.default.createElement('div', {
        className: 'jsx-709846349' + ' ' + 'navigation',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-709846349' + ' ' + 'navigation__logo-container',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }, _react2.default.createElement(_link2.default, { href: '/home', __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    }, _react2.default.createElement('a', {
        className: 'jsx-709846349',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    }, _react2.default.createElement(_Logo2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    })))), _react2.default.createElement('div', {
        className: 'jsx-709846349' + ' ' + 'navigation__tools',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 16
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-709846349' + ' ' + 'navigation__tools__new-message',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 17
        }
    }, _react2.default.createElement('a', { href: 'javascript:void(0)', className: 'jsx-709846349',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 18
        }
    }, _react2.default.createElement('img', { src: '/static/new-message.png', alt: 'new message', className: 'jsx-709846349',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 18
        }
    }))), _react2.default.createElement('div', {
        className: 'jsx-709846349' + ' ' + 'navigation__tools__search',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 20
        }
    }, _react2.default.createElement('input', { type: 'search', className: 'jsx-709846349' + ' ' + 'navigation__tools__search-input',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 21
        }
    }), _react2.default.createElement('span', {
        className: 'jsx-709846349' + ' ' + 'navigation__tools__search-icon',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 22
        }
    }, _react2.default.createElement('img', { src: '/static/search-icon.png', alt: '', className: 'jsx-709846349',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 22
        }
    }))), _react2.default.createElement('div', {
        className: 'jsx-709846349' + ' ' + 'navigation__tools__profile',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 25
        }
    }, _react2.default.createElement(_DropDown2.default, { trigger: _react2.default.createElement('img', {
            src: 'https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-1/p160x160/20228285_10156386606534638_4208836979691078674_n.jpg?oh=fbeb0943ca159be516c2eba0fd068152&oe=5A6A3C09',
            className: 'jsx-709846349' + ' ' + 'navigation__tools__profile-img',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 26
            }
        }), __source: {
            fileName: _jsxFileName,
            lineNumber: 26
        }
    }, _react2.default.createElement('ul', {
        className: 'jsx-709846349' + ' ' + 'navigation__tools__profile-links',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 30
        }
    }, _react2.default.createElement('li', {
        className: 'jsx-709846349',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 31
        }
    }, _react2.default.createElement(_link2.default, { href: '/profile', __source: {
            fileName: _jsxFileName,
            lineNumber: 31
        }
    }, _react2.default.createElement('a', {
        className: 'jsx-709846349' + ' ' + 'navigation__tools__profile-link',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 31
        }
    }, 'Profile'))), _react2.default.createElement('li', {
        className: 'jsx-709846349',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 32
        }
    }, _react2.default.createElement(_link2.default, { href: '/profile/settings', __source: {
            fileName: _jsxFileName,
            lineNumber: 32
        }
    }, _react2.default.createElement('a', {
        className: 'jsx-709846349' + ' ' + 'navigation__tools__profile-link',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 32
        }
    }, 'Settings'))), _react2.default.createElement('li', {
        className: 'jsx-709846349',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 33
        }
    }, _react2.default.createElement(_link2.default, { href: '/logout', __source: {
            fileName: _jsxFileName,
            lineNumber: 33
        }
    }, _react2.default.createElement('a', {
        className: 'jsx-709846349' + ' ' + 'navigation__tools__profile-link',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 33
        }
    }, 'Logout'))))))), _react2.default.createElement(_style2.default, {
        styleId: '709846349',
        css: '.navigation.jsx-709846349{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;padding:15px 103px;background:#262728;}.navigation__tools.jsx-709846349{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:325px;}.navigation__tools__new-message.jsx-709846349{-webkit-transition:opacity .25s;transition:opacity .25s;}.navigation__tools__new-message.jsx-709846349:hover,.navigation__tools__new-message.jsx-709846349:focus{opacity:.8;}.navigation__tools__search.jsx-709846349{position:relative;}.navigation__tools__search-input.jsx-709846349{background:transparent;border:1px solid #44474b;border-radius:4px;height:30px;width:200px;padding:4px 30px 4px 4px;font-size:13px;color:#262728;-webkit-transition:border-color .25s,background .25s;transition:border-color .25s,background .25s;}.navigation__tools__search-input.jsx-709846349:hover{border-color:#5c6166;}.navigation__tools__search-input.jsx-709846349:focus{background:white;outline:none;}.navigation__tools__search-icon.jsx-709846349{height:16px;position:absolute;top:5px;right:9px;display:block;color:#44474b;-webkit-transition:color .25s;transition:color .25s;}.navigation__tools__profile.jsx-709846349{text-decoration:none;color:#4b4f54;-webkit-transition:color .25s;transition:color .25s;}.navigation__tools__profile.jsx-709846349:hover{cursor:pointer;}.navigation__tools__profile.jsx-709846349:hover,.navigation__tools__profile.jsx-709846349:focus{color:#5c6166;}.navigation__tools__profile-img.jsx-709846349{width:30px;border-radius:4px;margin:0 10px 0 0;}.navigation__tools__profile-link.jsx-709846349,.navigation__tools__profile-link.jsx-709846349:link{display:inline-block;width:150px;padding:6px 32px;font-size:12px;color:#747c83;text-decoration:none;-webkit-transition:color .15s;transition:color .15s;}.navigation__tools__profile-link.jsx-709846349:hover,.navigation__tools__profile-link.jsx-709846349:active{background:#00cc99;color:#e3e8ed;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdDb0IsQUFHOEIsQUFZQSxBQVNXLEFBS2IsQUFJTyxBQUlLLEFBWUYsQUFJSixBQUtMLEFBVVMsQUFNTixBQUtELEFBSUgsQUFPVSxBQWNGLFdBMUV2QixBQXNEc0IsQ0F6QkEsRUFxQnRCLENBTEEsRUFyQmlCLENBcEJqQixDQXVFa0IsRUF2RGxCLEFBbUJrQixBQXNCRixFQXJEYSxNQStDUCxDQTlCdEIsQUFLWSxHQWlDUyxBQWFyQixFQXBDMEIsR0FUWixTQXlCZCxDQS9Dc0IsQUF1QkosRUFpQ0MsTUF0RW5CLE1Bc0NrQixHQWlDQSxDQXhERixRQXBDTyxBQVlBLEVBZ0RHLEVBdkJWLENBd0RTLFFBMUJ6QixHQTdCNkIsVUF5REgsZUF4RFAsYUFzQm5CLEVBckJrQixhQXZDZ0IsQUFZWCxDQTRCMkIsUUF1RGxELG9GQWxGa0MsTUE0QmxDLGdCQXhDdUIsNkZBRVAsQUFZQSxZQVhPLEFBWXZCLG1CQVZ1QixtQkFDdkIiLCJmaWxlIjoiY29tcG9uZW50cy9OYXZpZ2F0aW9uL05hdmlnYXRpb24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL1RKL3Byb2plY3RzL3NpbXBseS1zb2NpYWwiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuaW1wb3J0IExvZ28gZnJvbSAnLi4vTG9nbyc7XG5pbXBvcnQgRHJvcERvd24gZnJvbSAnLi4vRHJvcERvd24nO1xuaW1wb3J0IE5ld1Bvc3RNb2RhbCBmcm9tICcuL05ld1Bvc3RNb2RhbCc7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmlnYXRpb25cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uX19sb2dvLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ob21lXCI+XG4gICAgICAgICAgICAgICAgPGE+PExvZ28gLz48L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2aWdhdGlvbl9fdG9vbHNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2aWdhdGlvbl9fdG9vbHNfX25ldy1tZXNzYWdlXCI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiPjxpbWcgc3JjPVwiL3N0YXRpYy9uZXctbWVzc2FnZS5wbmdcIiBhbHQ9XCJuZXcgbWVzc2FnZVwiLz48L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2aWdhdGlvbl9fdG9vbHNfX3NlYXJjaFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic2VhcmNoXCIgY2xhc3NOYW1lPVwibmF2aWdhdGlvbl9fdG9vbHNfX3NlYXJjaC1pbnB1dFwiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2aWdhdGlvbl9fdG9vbHNfX3NlYXJjaC1pY29uXCI+PGltZyBzcmM9XCIvc3RhdGljL3NlYXJjaC1pY29uLnBuZ1wiIGFsdD1cIlwiLz48L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uX190b29sc19fcHJvZmlsZVwiPlxuICAgICAgICAgICAgICAgIDxEcm9wRG93biB0cmlnZ2VyPXs8aW1nXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vc2NvbnRlbnQtb3J0Mi0yLnh4LmZiY2RuLm5ldC92L3QxLjAtMS9wMTYweDE2MC8yMDIyODI4NV8xMDE1NjM4NjYwNjUzNDYzOF80MjA4ODM2OTc5NjkxMDc4Njc0X24uanBnP29oPWZiZWIwOTQzY2ExNTliZTUxNmMyZWJhMGZkMDY4MTUyJm9lPTVBNkEzQzA5XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2aWdhdGlvbl9fdG9vbHNfX3Byb2ZpbGUtaW1nXCJcbiAgICAgICAgICAgICAgICAvPn0+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uX190b29sc19fcHJvZmlsZS1saW5rc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvcHJvZmlsZVwiPjxhIGNsYXNzTmFtZT1cIm5hdmlnYXRpb25fX3Rvb2xzX19wcm9maWxlLWxpbmtcIj5Qcm9maWxlPC9hPjwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvcHJvZmlsZS9zZXR0aW5nc1wiPjxhIGNsYXNzTmFtZT1cIm5hdmlnYXRpb25fX3Rvb2xzX19wcm9maWxlLWxpbmtcIj5TZXR0aW5nczwvYT48L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiL2xvZ291dFwiPjxhIGNsYXNzTmFtZT1cIm5hdmlnYXRpb25fX3Rvb2xzX19wcm9maWxlLWxpbmtcIj5Mb2dvdXQ8L2E+PC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9Ecm9wRG93bj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogPE5ld1Bvc3RNb2RhbCBvbkNsb3NlPXsoKSA9PiB7fX0gLz4gKi99XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5uYXZpZ2F0aW9uIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTVweCAxMDNweDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjYyNzI4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubmF2aWdhdGlvbl9fdG9vbHMge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB3aWR0aDogMzI1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5uYXZpZ2F0aW9uX190b29sc19fbmV3LW1lc3NhZ2Uge1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjI1cztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm5hdmlnYXRpb25fX3Rvb2xzX19uZXctbWVzc2FnZTpob3ZlcixcbiAgICAgICAgICAgIC5uYXZpZ2F0aW9uX190b29sc19fbmV3LW1lc3NhZ2U6Zm9jdXMge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IC44O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubmF2aWdhdGlvbl9fdG9vbHNfX3NlYXJjaCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubmF2aWdhdGlvbl9fdG9vbHNfX3NlYXJjaC1pbnB1dCB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzQ0NDc0YjtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA0cHggMzBweCA0cHggNHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzI2MjcyODtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjI1cywgYmFja2dyb3VuZCAuMjVzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubmF2aWdhdGlvbl9fdG9vbHNfX3NlYXJjaC1pbnB1dDpob3ZlciB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjNWM2MTY2O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubmF2aWdhdGlvbl9fdG9vbHNfX3NlYXJjaC1pbnB1dDpmb2N1cyB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm5hdmlnYXRpb25fX3Rvb2xzX19zZWFyY2gtaWNvbiB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgICAgICAgICByaWdodDogOXB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNDQ0NzRiO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIC4yNXM7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubmF2aWdhdGlvbl9fdG9vbHNfX3Byb2ZpbGUge1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzRiNGY1NDtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAuMjVzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubmF2aWdhdGlvbl9fdG9vbHNfX3Byb2ZpbGU6aG92ZXIge1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm5hdmlnYXRpb25fX3Rvb2xzX19wcm9maWxlOmhvdmVyLFxuICAgICAgICAgICAgLm5hdmlnYXRpb25fX3Rvb2xzX19wcm9maWxlOmZvY3VzIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzVjNjE2NjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm5hdmlnYXRpb25fX3Rvb2xzX19wcm9maWxlLWltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxMHB4IDAgMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm5hdmlnYXRpb25fX3Rvb2xzX19wcm9maWxlLWxpbmssXG4gICAgICAgICAgICAubmF2aWdhdGlvbl9fdG9vbHNfX3Byb2ZpbGUtbGluazpsaW5rIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNnB4IDMycHg7XG5cbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM3NDdjODM7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgLjE1cztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm5hdmlnYXRpb25fX3Rvb2xzX19wcm9maWxlLWxpbms6aG92ZXIsXG4gICAgICAgICAgICAubmF2aWdhdGlvbl9fdG9vbHNfX3Byb2ZpbGUtbGluazphY3RpdmUge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMGNjOTk7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNlM2U4ZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbik7Il19 */\n/*@ sourceURL=components/Navigation/Navigation.js */'
    }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsIkxvZ28iLCJEcm9wRG93biIsIk5ld1Bvc3RNb2RhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBRVAsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQWtCLEFBRXpCOzs7Ozs7OztrQkFBZSxZQUFBOzJCQUNYLGNBQUE7MkNBQUEsQUFBZTs7c0JBQWY7d0JBQUEsQUFDSTtBQURKO0FBQUEsS0FBQSxrQkFDSSxjQUFBOzJDQUFBLEFBQWU7O3NCQUFmO3dCQUFBLEFBQ0k7QUFESjtBQUFBLHVCQUNJLEFBQUMsZ0NBQUssTUFBTixBQUFXO3NCQUFYO3dCQUFBLEFBQ0k7QUFESjt1QkFDSSxjQUFBO21CQUFBOztzQkFBQTt3QkFBQSxBQUFHO0FBQUg7QUFBQSx1QkFBRyxBQUFDOztzQkFBRDt3QkFIZixBQUNJLEFBQ0ksQUFDSSxBQUFHLEFBSVg7QUFKVztBQUFBLDJCQUlYLGNBQUE7MkNBQUEsQUFBZTs7c0JBQWY7d0JBQUEsQUFDSTtBQURKO0FBQUEsdUJBQ0ksY0FBQTsyQ0FBQSxBQUFlOztzQkFBZjt3QkFBQSxBQUNJO0FBREo7QUFBQSx1QkFDSSxjQUFBLE9BQUcsTUFBSCxBQUFRLGlDQUFSOztzQkFBQTt3QkFBQSxBQUE2QjtBQUE3Qjs4Q0FBa0MsS0FBTCxBQUFTLDJCQUEwQixLQUFuQyxBQUF1QywwQkFBdkM7O3NCQUFBO3dCQUZyQyxBQUNJLEFBQ0ksQUFBNkIsQUFFakM7QUFGaUM7MEJBRWpDLGNBQUE7MkNBQUEsQUFBZTs7c0JBQWY7d0JBQUEsQUFDSTtBQURKO0FBQUEsZ0RBQ1csTUFBUCxBQUFZLDZDQUFaLEFBQStCOztzQkFBL0I7d0JBREosQUFDSSxBQUNBO0FBREE7d0JBQ0EsY0FBQTsyQ0FBQSxBQUFnQjs7c0JBQWhCO3dCQUFBLEFBQWlEO0FBQWpEO0FBQUEsOENBQXNELEtBQUwsQUFBUywyQkFBMEIsS0FBbkMsQUFBdUMsZUFBdkM7O3NCQUFBO3dCQU56RCxBQUlJLEFBRUksQUFBaUQsQUFHckQ7QUFIcUQ7MEJBR3JELGNBQUE7MkNBQUEsQUFBZTs7c0JBQWY7d0JBQUEsQUFDSTtBQURKO0FBQUEsdUJBQ0ksQUFBQyxvQ0FBUztpQkFBUyxBQUNYOytDQURXLEFBRUw7OzBCQUZLOzRCQUFuQixBQUFtQjtBQUFBO0FBQ2YsU0FEZTtzQkFBbkI7d0JBQUEsQUFJSTtBQUpKO3VCQUlJLGNBQUE7MkNBQUEsQUFBYzs7c0JBQWQ7d0JBQUEsQUFDSTtBQURKO0FBQUEsdUJBQ0ksY0FBQTttQkFBQTs7c0JBQUE7d0JBQUEsQUFBSTtBQUFKO0FBQUEsdUJBQUksQUFBQyxnQ0FBSyxNQUFOLEFBQVc7c0JBQVg7d0JBQUEsQUFBc0I7QUFBdEI7dUJBQXNCLGNBQUE7MkNBQUEsQUFBYTs7c0JBQWI7d0JBQUE7QUFBQTtBQUFBLE9BRDlCLEFBQ0ksQUFBSSxBQUFzQixBQUMxQiw4QkFBQSxjQUFBO21CQUFBOztzQkFBQTt3QkFBQSxBQUFJO0FBQUo7QUFBQSx1QkFBSSxBQUFDLGdDQUFLLE1BQU4sQUFBVztzQkFBWDt3QkFBQSxBQUErQjtBQUEvQjt1QkFBK0IsY0FBQTsyQ0FBQSxBQUFhOztzQkFBYjt3QkFBQTtBQUFBO0FBQUEsT0FGdkMsQUFFSSxBQUFJLEFBQStCLEFBQ25DLCtCQUFBLGNBQUE7bUJBQUE7O3NCQUFBO3dCQUFBLEFBQUk7QUFBSjtBQUFBLHVCQUFJLEFBQUMsZ0NBQUssTUFBTixBQUFXO3NCQUFYO3dCQUFBLEFBQXFCO0FBQXJCO3VCQUFxQixjQUFBOzJDQUFBLEFBQWE7O3NCQUFiO3dCQUFBO0FBQUE7QUFBQSxPQXhCN0MsQUFPSSxBQVNJLEFBQ0ksQUFJSSxBQUdJLEFBQUksQUFBcUI7aUJBeEI3QzthQURXLEFBQ1g7QUFBQTtBQURKIiwiZmlsZSI6Ik5hdmlnYXRpb24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL1RKL3Byb2plY3RzL3NpbXBseS1zb2NpYWwifQ==