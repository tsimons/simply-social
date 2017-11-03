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

exports.default = function (_ref) {
    var isPostModalOpen = _ref.isPostModalOpen,
        openPostModal = _ref.openPostModal,
        closePostModal = _ref.closePostModal;
    return _react2.default.createElement('div', {
        className: 'jsx-2771106475' + ' ' + 'navigation',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-2771106475' + ' ' + 'navigation__logo-container',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }, _react2.default.createElement(_link2.default, { href: '/', __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    }, _react2.default.createElement('a', {
        className: 'jsx-2771106475',
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
        className: 'jsx-2771106475' + ' ' + 'navigation__tools',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 16
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-2771106475' + ' ' + 'navigation__tools__new-message',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 17
        }
    }, _react2.default.createElement('a', { href: 'javascript:void(0)', onClick: openPostModal, className: 'jsx-2771106475',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 18
        }
    }, _react2.default.createElement('img', { src: '/static/new-message.png', alt: 'new message', className: 'jsx-2771106475',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 18
        }
    }))), _react2.default.createElement('div', {
        className: 'jsx-2771106475' + ' ' + 'navigation__tools__search',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 20
        }
    }, _react2.default.createElement('input', { type: 'text', className: 'jsx-2771106475' + ' ' + 'navigation__tools__search-input',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 21
        }
    }), _react2.default.createElement('span', {
        className: 'jsx-2771106475' + ' ' + 'navigation__tools__search-icon',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 22
        }
    }, _react2.default.createElement('img', { src: '/static/search-icon.png', alt: '', className: 'jsx-2771106475',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 22
        }
    }))), _react2.default.createElement('div', {
        className: 'jsx-2771106475' + ' ' + 'navigation__tools__profile',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 25
        }
    }, _react2.default.createElement(_DropDown2.default, { trigger: _react2.default.createElement('img', {
            src: 'https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-1/p160x160/20228285_10156386606534638_4208836979691078674_n.jpg?oh=fbeb0943ca159be516c2eba0fd068152&oe=5A6A3C09',
            className: 'jsx-2771106475' + ' ' + 'navigation__tools__profile-img',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 26
            }
        }), __source: {
            fileName: _jsxFileName,
            lineNumber: 26
        }
    }, _react2.default.createElement('ul', {
        className: 'jsx-2771106475' + ' ' + 'navigation__tools__profile-links',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 30
        }
    }, _react2.default.createElement('li', {
        className: 'jsx-2771106475',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 31
        }
    }, _react2.default.createElement(_link2.default, { href: '/profile', __source: {
            fileName: _jsxFileName,
            lineNumber: 31
        }
    }, _react2.default.createElement('a', {
        className: 'jsx-2771106475' + ' ' + 'navigation__tools__profile-link',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 31
        }
    }, 'Profile'))), _react2.default.createElement('li', {
        className: 'jsx-2771106475',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 32
        }
    }, _react2.default.createElement(_link2.default, { href: '/profile/settings', __source: {
            fileName: _jsxFileName,
            lineNumber: 32
        }
    }, _react2.default.createElement('a', {
        className: 'jsx-2771106475' + ' ' + 'navigation__tools__profile-link',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 32
        }
    }, 'Settings'))), _react2.default.createElement('li', {
        className: 'jsx-2771106475',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 33
        }
    }, _react2.default.createElement(_link2.default, { href: '/logout', __source: {
            fileName: _jsxFileName,
            lineNumber: 33
        }
    }, _react2.default.createElement('a', {
        className: 'jsx-2771106475' + ' ' + 'navigation__tools__profile-link',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 33
        }
    }, 'Logout')))))), isPostModalOpen && _react2.default.createElement(_NewPostModal2.default, { onClose: closePostModal, __source: {
            fileName: _jsxFileName,
            lineNumber: 38
        }
    })), _react2.default.createElement(_style2.default, {
        styleId: '2771106475',
        css: '.navigation.jsx-2771106475{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;padding:15px 103px;background:#262728;}.navigation__logo-container.jsx-2771106475{-webkit-flex:0 0 137px;-ms-flex:0 0 137px;flex:0 0 137px;}.navigation__tools.jsx-2771106475{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:325px;}.navigation__tools__new-message.jsx-2771106475{-webkit-transition:opacity .25s;transition:opacity .25s;}.navigation__tools__new-message.jsx-2771106475:hover,.navigation__tools__new-message.jsx-2771106475:focus{opacity:.8;}.navigation__tools__search.jsx-2771106475{position:relative;}.navigation__tools__search-input.jsx-2771106475{background:transparent;border:1px solid #44474b;border-radius:4px;height:30px;width:200px;padding:4px 30px 4px 4px;font-size:13px;color:#262728;-webkit-transition:border-color .25s,background .25s;transition:border-color .25s,background .25s;}.navigation__tools__search-input.jsx-2771106475:hover{border-color:#5c6166;}.navigation__tools__search-input.jsx-2771106475:focus{background:white;outline:none;}.navigation__tools__search-icon.jsx-2771106475{height:16px;position:absolute;top:5px;right:9px;display:block;color:#44474b;-webkit-transition:color .25s;transition:color .25s;}.navigation__tools__profile.jsx-2771106475{text-decoration:none;color:#4b4f54;-webkit-transition:color .25s;transition:color .25s;}.navigation__tools__profile.jsx-2771106475:hover{cursor:pointer;}.navigation__tools__profile.jsx-2771106475:hover,.navigation__tools__profile.jsx-2771106475:focus{color:#5c6166;}.navigation__tools__profile-img.jsx-2771106475{width:30px;border-radius:4px;margin:0 10px 0 0;}.navigation__tools__profile-link.jsx-2771106475,.navigation__tools__profile-link.jsx-2771106475:link{display:inline-block;width:175px;padding:8px 45px;font-size:14px;color:#747c83;text-decoration:none;-webkit-transition:color .15s;transition:color .15s;cursor:pointer;}.navigation__tools__profile-link.jsx-2771106475:hover,.navigation__tools__profile-link.jsx-2771106475:active{background:#00cc99;color:#e3e8ed;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdDb0IsQUFHOEIsQUFXRSxBQUlGLEFBU1csQUFLYixBQUlPLEFBSUssQUFZRixBQUlKLEFBS0wsQUFVUyxBQU1OLEFBS0QsQUFJSCxBQU9VLEFBZUYsV0EzRXZCLEFBc0RzQixDQXpCQSxFQXFCdEIsQ0FMQSxFQXJCaUIsQ0FwQmpCLENBd0VrQixFQXhEbEIsQUFtQmtCLEFBc0JGLEVBckRhLE1BK0NQLENBOUJ0QixBQUtZLEdBaUNTLEFBY3JCLEVBckMwQixHQVRaLFNBeUJkLENBL0NzQixBQXVCSixFQWlDQyxNQXRFbkIsQ0FiQSxLQW1Ea0IsR0FpQ0EsQ0F4REYsUUF2Q08sQUFlQSxFQWdERyxFQXZCVixDQXdEUyxRQTFCekIsR0E3QjZCLFVBeURILGVBeERQLGFBc0JuQixFQXJCa0IsYUExQ2dCLEFBZVgsQ0E0QjJCLFFBdUQvQixlQUNuQixxRUFuRmtDLE1BNEJsQyxnQkEzQ3VCLDZGQUVQLEFBZUEsWUFkTyxBQWV2QixtQkFidUIsbUJBQ3ZCIiwiZmlsZSI6ImNvbXBvbmVudHMvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9USi9wcm9qZWN0cy9zaW1wbHktc29jaWFsIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmltcG9ydCBMb2dvIGZyb20gJy4uL0xvZ28nO1xuaW1wb3J0IERyb3BEb3duIGZyb20gJy4uL0Ryb3BEb3duJztcbmltcG9ydCBOZXdQb3N0TW9kYWwgZnJvbSAnLi9OZXdQb3N0TW9kYWwnO1xuXG5leHBvcnQgZGVmYXVsdCAoeyBpc1Bvc3RNb2RhbE9wZW4sIG9wZW5Qb3N0TW9kYWwsIGNsb3NlUG9zdE1vZGFsIH0pID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmlnYXRpb25cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uX19sb2dvLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICA8YT48TG9nbyAvPjwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uX190b29sc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uX190b29sc19fbmV3LW1lc3NhZ2VcIj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgb25DbGljaz17b3BlblBvc3RNb2RhbH0+PGltZyBzcmM9XCIvc3RhdGljL25ldy1tZXNzYWdlLnBuZ1wiIGFsdD1cIm5ldyBtZXNzYWdlXCIvPjwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uX190b29sc19fc2VhcmNoXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwibmF2aWdhdGlvbl9fdG9vbHNfX3NlYXJjaC1pbnB1dFwiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2aWdhdGlvbl9fdG9vbHNfX3NlYXJjaC1pY29uXCI+PGltZyBzcmM9XCIvc3RhdGljL3NlYXJjaC1pY29uLnBuZ1wiIGFsdD1cIlwiLz48L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uX190b29sc19fcHJvZmlsZVwiPlxuICAgICAgICAgICAgICAgIDxEcm9wRG93biB0cmlnZ2VyPXs8aW1nXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vc2NvbnRlbnQtb3J0Mi0yLnh4LmZiY2RuLm5ldC92L3QxLjAtMS9wMTYweDE2MC8yMDIyODI4NV8xMDE1NjM4NjYwNjUzNDYzOF80MjA4ODM2OTc5NjkxMDc4Njc0X24uanBnP29oPWZiZWIwOTQzY2ExNTliZTUxNmMyZWJhMGZkMDY4MTUyJm9lPTVBNkEzQzA5XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2aWdhdGlvbl9fdG9vbHNfX3Byb2ZpbGUtaW1nXCJcbiAgICAgICAgICAgICAgICAvPn0+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uX190b29sc19fcHJvZmlsZS1saW5rc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvcHJvZmlsZVwiPjxhIGNsYXNzTmFtZT1cIm5hdmlnYXRpb25fX3Rvb2xzX19wcm9maWxlLWxpbmtcIj5Qcm9maWxlPC9hPjwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvcHJvZmlsZS9zZXR0aW5nc1wiPjxhIGNsYXNzTmFtZT1cIm5hdmlnYXRpb25fX3Rvb2xzX19wcm9maWxlLWxpbmtcIj5TZXR0aW5nczwvYT48L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiL2xvZ291dFwiPjxhIGNsYXNzTmFtZT1cIm5hdmlnYXRpb25fX3Rvb2xzX19wcm9maWxlLWxpbmtcIj5Mb2dvdXQ8L2E+PC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9Ecm9wRG93bj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7aXNQb3N0TW9kYWxPcGVuICYmIDxOZXdQb3N0TW9kYWwgb25DbG9zZT17Y2xvc2VQb3N0TW9kYWx9IC8+fVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAubmF2aWdhdGlvbiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMTAzcHg7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzI2MjcyODtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5uYXZpZ2F0aW9uX19sb2dvLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgZmxleDogMCAwIDEzN3B4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubmF2aWdhdGlvbl9fdG9vbHMge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB3aWR0aDogMzI1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5uYXZpZ2F0aW9uX190b29sc19fbmV3LW1lc3NhZ2Uge1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjI1cztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm5hdmlnYXRpb25fX3Rvb2xzX19uZXctbWVzc2FnZTpob3ZlcixcbiAgICAgICAgICAgIC5uYXZpZ2F0aW9uX190b29sc19fbmV3LW1lc3NhZ2U6Zm9jdXMge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IC44O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubmF2aWdhdGlvbl9fdG9vbHNfX3NlYXJjaCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubmF2aWdhdGlvbl9fdG9vbHNfX3NlYXJjaC1pbnB1dCB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzQ0NDc0YjtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA0cHggMzBweCA0cHggNHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzI2MjcyODtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjI1cywgYmFja2dyb3VuZCAuMjVzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubmF2aWdhdGlvbl9fdG9vbHNfX3NlYXJjaC1pbnB1dDpob3ZlciB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjNWM2MTY2O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubmF2aWdhdGlvbl9fdG9vbHNfX3NlYXJjaC1pbnB1dDpmb2N1cyB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm5hdmlnYXRpb25fX3Rvb2xzX19zZWFyY2gtaWNvbiB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgICAgICAgICByaWdodDogOXB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNDQ0NzRiO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIC4yNXM7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubmF2aWdhdGlvbl9fdG9vbHNfX3Byb2ZpbGUge1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzRiNGY1NDtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAuMjVzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubmF2aWdhdGlvbl9fdG9vbHNfX3Byb2ZpbGU6aG92ZXIge1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm5hdmlnYXRpb25fX3Rvb2xzX19wcm9maWxlOmhvdmVyLFxuICAgICAgICAgICAgLm5hdmlnYXRpb25fX3Rvb2xzX19wcm9maWxlOmZvY3VzIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzVjNjE2NjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm5hdmlnYXRpb25fX3Rvb2xzX19wcm9maWxlLWltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxMHB4IDAgMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm5hdmlnYXRpb25fX3Rvb2xzX19wcm9maWxlLWxpbmssXG4gICAgICAgICAgICAubmF2aWdhdGlvbl9fdG9vbHNfX3Byb2ZpbGUtbGluazpsaW5rIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE3NXB4O1xuXG4gICAgICAgICAgICAgICAgcGFkZGluZzogOHB4IDQ1cHg7XG5cbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM3NDdjODM7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgLjE1cztcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5uYXZpZ2F0aW9uX190b29sc19fcHJvZmlsZS1saW5rOmhvdmVyLFxuICAgICAgICAgICAgLm5hdmlnYXRpb25fX3Rvb2xzX19wcm9maWxlLWxpbms6YWN0aXZlIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDBjYzk5O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZTNlOGVkO1xuICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4pOyJdfQ== */\n/*@ sourceURL=components/Navigation/Navigation.js */'
    }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsIkxvZ28iLCJEcm9wRG93biIsIk5ld1Bvc3RNb2RhbCIsImlzUG9zdE1vZGFsT3BlbiIsIm9wZW5Qb3N0TW9kYWwiLCJjbG9zZVBvc3RNb2RhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBRVAsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQWtCLEFBRXpCOzs7Ozs7OztrQkFBZSxnQkFBQTtRQUFBLEFBQUcsdUJBQUgsQUFBRztRQUFILEFBQW9CLHFCQUFwQixBQUFvQjtRQUFwQixBQUFtQyxzQkFBbkMsQUFBbUM7MkJBQzlDLGNBQUE7NENBQUEsQUFBZTs7c0JBQWY7d0JBQUEsQUFDSTtBQURKO0FBQUEsS0FBQSxrQkFDSSxjQUFBOzRDQUFBLEFBQWU7O3NCQUFmO3dCQUFBLEFBQ0k7QUFESjtBQUFBLHVCQUNJLEFBQUMsZ0NBQUssTUFBTixBQUFXO3NCQUFYO3dCQUFBLEFBQ0k7QUFESjt1QkFDSSxjQUFBO21CQUFBOztzQkFBQTt3QkFBQSxBQUFHO0FBQUg7QUFBQSx1QkFBRyxBQUFDOztzQkFBRDt3QkFIZixBQUNJLEFBQ0ksQUFDSSxBQUFHLEFBSVg7QUFKVztBQUFBLDJCQUlYLGNBQUE7NENBQUEsQUFBZTs7c0JBQWY7d0JBQUEsQUFDSTtBQURKO0FBQUEsdUJBQ0ksY0FBQTs0Q0FBQSxBQUFlOztzQkFBZjt3QkFBQSxBQUNJO0FBREo7QUFBQSx1QkFDSSxjQUFBLE9BQUcsTUFBSCxBQUFRLHNCQUFxQixTQUE3QixBQUFzQywwQkFBdEM7O3NCQUFBO3dCQUFBLEFBQXFEO0FBQXJEOzhDQUEwRCxLQUFMLEFBQVMsMkJBQTBCLEtBQW5DLEFBQXVDLDBCQUF2Qzs7c0JBQUE7d0JBRjdELEFBQ0ksQUFDSSxBQUFxRCxBQUV6RDtBQUZ5RDswQkFFekQsY0FBQTs0Q0FBQSxBQUFlOztzQkFBZjt3QkFBQSxBQUNJO0FBREo7QUFBQSxnREFDVyxNQUFQLEFBQVksNENBQVosQUFBNkI7O3NCQUE3Qjt3QkFESixBQUNJLEFBQ0E7QUFEQTt3QkFDQSxjQUFBOzRDQUFBLEFBQWdCOztzQkFBaEI7d0JBQUEsQUFBaUQ7QUFBakQ7QUFBQSw4Q0FBc0QsS0FBTCxBQUFTLDJCQUEwQixLQUFuQyxBQUF1QyxlQUF2Qzs7c0JBQUE7d0JBTnpELEFBSUksQUFFSSxBQUFpRCxBQUdyRDtBQUhxRDswQkFHckQsY0FBQTs0Q0FBQSxBQUFlOztzQkFBZjt3QkFBQSxBQUNJO0FBREo7QUFBQSx1QkFDSSxBQUFDLG9DQUFTO2lCQUFTLEFBQ1g7Z0RBRFcsQUFFTDs7MEJBRks7NEJBQW5CLEFBQW1CO0FBQUE7QUFDZixTQURlO3NCQUFuQjt3QkFBQSxBQUlJO0FBSko7dUJBSUksY0FBQTs0Q0FBQSxBQUFjOztzQkFBZDt3QkFBQSxBQUNJO0FBREo7QUFBQSx1QkFDSSxjQUFBO21CQUFBOztzQkFBQTt3QkFBQSxBQUFJO0FBQUo7QUFBQSx1QkFBSSxBQUFDLGdDQUFLLE1BQU4sQUFBVztzQkFBWDt3QkFBQSxBQUFzQjtBQUF0Qjt1QkFBc0IsY0FBQTs0Q0FBQSxBQUFhOztzQkFBYjt3QkFBQTtBQUFBO0FBQUEsT0FEOUIsQUFDSSxBQUFJLEFBQXNCLEFBQzFCLDhCQUFBLGNBQUE7bUJBQUE7O3NCQUFBO3dCQUFBLEFBQUk7QUFBSjtBQUFBLHVCQUFJLEFBQUMsZ0NBQUssTUFBTixBQUFXO3NCQUFYO3dCQUFBLEFBQStCO0FBQS9CO3VCQUErQixjQUFBOzRDQUFBLEFBQWE7O3NCQUFiO3dCQUFBO0FBQUE7QUFBQSxPQUZ2QyxBQUVJLEFBQUksQUFBK0IsQUFDbkMsK0JBQUEsY0FBQTttQkFBQTs7c0JBQUE7d0JBQUEsQUFBSTtBQUFKO0FBQUEsdUJBQUksQUFBQyxnQ0FBSyxNQUFOLEFBQVc7c0JBQVg7d0JBQUEsQUFBcUI7QUFBckI7dUJBQXFCLGNBQUE7NENBQUEsQUFBYTs7c0JBQWI7d0JBQUE7QUFBQTtBQUFBLE9BakJ6QyxBQVNJLEFBQ0ksQUFJSSxBQUdJLEFBQUksQUFBcUIsQUFLcEMsbURBQW1CLEFBQUMsd0NBQWEsU0FBZCxBQUF1QjtzQkFBdkI7d0JBN0I1QixBQU9JLEFBc0J3QjtBQUFBO0tBQUE7aUJBN0I1QjthQURXLEFBQ1g7QUFBQTtBQURKIiwiZmlsZSI6Ik5hdmlnYXRpb24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL1RKL3Byb2plY3RzL3NpbXBseS1zb2NpYWwifQ==