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
    }, _react2.default.createElement('input', { type: 'search', className: 'jsx-2771106475' + ' ' + 'navigation__tools__search-input',
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
        css: '.navigation.jsx-2771106475{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;padding:15px 103px;background:#262728;}.navigation__logo-container.jsx-2771106475{-webkit-flex:0 0 137px;-ms-flex:0 0 137px;flex:0 0 137px;}.navigation__tools.jsx-2771106475{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:325px;}.navigation__tools__new-message.jsx-2771106475{-webkit-transition:opacity .25s;transition:opacity .25s;}.navigation__tools__new-message.jsx-2771106475:hover,.navigation__tools__new-message.jsx-2771106475:focus{opacity:.8;}.navigation__tools__search.jsx-2771106475{position:relative;}.navigation__tools__search-input.jsx-2771106475{background:transparent;border:1px solid #44474b;border-radius:4px;height:30px;width:200px;padding:4px 30px 4px 4px;font-size:13px;color:#262728;-webkit-transition:border-color .25s,background .25s;transition:border-color .25s,background .25s;}.navigation__tools__search-input.jsx-2771106475:hover{border-color:#5c6166;}.navigation__tools__search-input.jsx-2771106475:focus{background:white;outline:none;}.navigation__tools__search-icon.jsx-2771106475{height:16px;position:absolute;top:5px;right:9px;display:block;color:#44474b;-webkit-transition:color .25s;transition:color .25s;}.navigation__tools__profile.jsx-2771106475{text-decoration:none;color:#4b4f54;-webkit-transition:color .25s;transition:color .25s;}.navigation__tools__profile.jsx-2771106475:hover{cursor:pointer;}.navigation__tools__profile.jsx-2771106475:hover,.navigation__tools__profile.jsx-2771106475:focus{color:#5c6166;}.navigation__tools__profile-img.jsx-2771106475{width:30px;border-radius:4px;margin:0 10px 0 0;}.navigation__tools__profile-link.jsx-2771106475,.navigation__tools__profile-link.jsx-2771106475:link{display:inline-block;width:175px;padding:8px 45px;font-size:14px;color:#747c83;text-decoration:none;-webkit-transition:color .15s;transition:color .15s;cursor:pointer;}.navigation__tools__profile-link.jsx-2771106475:hover,.navigation__tools__profile-link.jsx-2771106475:active{background:#00cc99;color:#e3e8ed;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdDb0IsQUFHOEIsQUFXRSxBQUlGLEFBU1csQUFLYixBQUlPLEFBSUssQUFZRixBQUlKLEFBS0wsQUFVUyxBQU1OLEFBS0QsQUFJSCxBQU9VLEFBZUYsV0EzRXZCLEFBc0RzQixDQXpCQSxFQXFCdEIsQ0FMQSxFQXJCaUIsQ0FwQmpCLENBd0VrQixFQXhEbEIsQUFtQmtCLEFBc0JGLEVBckRhLE1BK0NQLENBOUJ0QixBQUtZLEdBaUNTLEFBY3JCLEVBckMwQixHQVRaLFNBeUJkLENBL0NzQixBQXVCSixFQWlDQyxNQXRFbkIsQ0FiQSxLQW1Ea0IsR0FpQ0EsQ0F4REYsUUF2Q08sQUFlQSxFQWdERyxFQXZCVixDQXdEUyxRQTFCekIsR0E3QjZCLFVBeURILGVBeERQLGFBc0JuQixFQXJCa0IsYUExQ2dCLEFBZVgsQ0E0QjJCLFFBdUQvQixlQUNuQixxRUFuRmtDLE1BNEJsQyxnQkEzQ3VCLDZGQUVQLEFBZUEsWUFkTyxBQWV2QixtQkFidUIsbUJBQ3ZCIiwiZmlsZSI6ImNvbXBvbmVudHMvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9USi9wcm9qZWN0cy9zaW1wbHktc29jaWFsIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmltcG9ydCBMb2dvIGZyb20gJy4uL0xvZ28nO1xuaW1wb3J0IERyb3BEb3duIGZyb20gJy4uL0Ryb3BEb3duJztcbmltcG9ydCBOZXdQb3N0TW9kYWwgZnJvbSAnLi9OZXdQb3N0TW9kYWwnO1xuXG5leHBvcnQgZGVmYXVsdCAoeyBpc1Bvc3RNb2RhbE9wZW4sIG9wZW5Qb3N0TW9kYWwsIGNsb3NlUG9zdE1vZGFsIH0pID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmlnYXRpb25cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uX19sb2dvLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICA8YT48TG9nbyAvPjwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uX190b29sc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uX190b29sc19fbmV3LW1lc3NhZ2VcIj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgb25DbGljaz17b3BlblBvc3RNb2RhbH0+PGltZyBzcmM9XCIvc3RhdGljL25ldy1tZXNzYWdlLnBuZ1wiIGFsdD1cIm5ldyBtZXNzYWdlXCIvPjwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uX190b29sc19fc2VhcmNoXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzZWFyY2hcIiBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uX190b29sc19fc2VhcmNoLWlucHV0XCIgLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uX190b29sc19fc2VhcmNoLWljb25cIj48aW1nIHNyYz1cIi9zdGF0aWMvc2VhcmNoLWljb24ucG5nXCIgYWx0PVwiXCIvPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmlnYXRpb25fX3Rvb2xzX19wcm9maWxlXCI+XG4gICAgICAgICAgICAgICAgPERyb3BEb3duIHRyaWdnZXI9ezxpbWdcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9zY29udGVudC1vcnQyLTIueHguZmJjZG4ubmV0L3YvdDEuMC0xL3AxNjB4MTYwLzIwMjI4Mjg1XzEwMTU2Mzg2NjA2NTM0NjM4XzQyMDg4MzY5Nzk2OTEwNzg2NzRfbi5qcGc/b2g9ZmJlYjA5NDNjYTE1OWJlNTE2YzJlYmEwZmQwNjgxNTImb2U9NUE2QTNDMDlcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uX190b29sc19fcHJvZmlsZS1pbWdcIlxuICAgICAgICAgICAgICAgIC8+fT5cbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmlnYXRpb25fX3Rvb2xzX19wcm9maWxlLWxpbmtzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi9wcm9maWxlXCI+PGEgY2xhc3NOYW1lPVwibmF2aWdhdGlvbl9fdG9vbHNfX3Byb2ZpbGUtbGlua1wiPlByb2ZpbGU8L2E+PC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi9wcm9maWxlL3NldHRpbmdzXCI+PGEgY2xhc3NOYW1lPVwibmF2aWdhdGlvbl9fdG9vbHNfX3Byb2ZpbGUtbGlua1wiPlNldHRpbmdzPC9hPjwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvbG9nb3V0XCI+PGEgY2xhc3NOYW1lPVwibmF2aWdhdGlvbl9fdG9vbHNfX3Byb2ZpbGUtbGlua1wiPkxvZ291dDwvYT48L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L0Ryb3BEb3duPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHtpc1Bvc3RNb2RhbE9wZW4gJiYgPE5ld1Bvc3RNb2RhbCBvbkNsb3NlPXtjbG9zZVBvc3RNb2RhbH0gLz59XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5uYXZpZ2F0aW9uIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTVweCAxMDNweDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjYyNzI4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm5hdmlnYXRpb25fX2xvZ28tY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBmbGV4OiAwIDAgMTM3cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5uYXZpZ2F0aW9uX190b29scyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMjVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm5hdmlnYXRpb25fX3Rvb2xzX19uZXctbWVzc2FnZSB7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMjVzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubmF2aWdhdGlvbl9fdG9vbHNfX25ldy1tZXNzYWdlOmhvdmVyLFxuICAgICAgICAgICAgLm5hdmlnYXRpb25fX3Rvb2xzX19uZXctbWVzc2FnZTpmb2N1cyB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogLjg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5uYXZpZ2F0aW9uX190b29sc19fc2VhcmNoIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5uYXZpZ2F0aW9uX190b29sc19fc2VhcmNoLWlucHV0IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNDQ0NzRiO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDRweCAzMHB4IDRweCA0cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMjYyNzI4O1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuMjVzLCBiYWNrZ3JvdW5kIC4yNXM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5uYXZpZ2F0aW9uX190b29sc19fc2VhcmNoLWlucHV0OmhvdmVyIHtcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICM1YzYxNjY7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5uYXZpZ2F0aW9uX190b29sc19fc2VhcmNoLWlucHV0OmZvY3VzIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubmF2aWdhdGlvbl9fdG9vbHNfX3NlYXJjaC1pY29uIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogNXB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiA5cHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM0NDQ3NGI7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgLjI1czsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5uYXZpZ2F0aW9uX190b29sc19fcHJvZmlsZSB7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNGI0ZjU0O1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIC4yNXM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5uYXZpZ2F0aW9uX190b29sc19fcHJvZmlsZTpob3ZlciB7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubmF2aWdhdGlvbl9fdG9vbHNfX3Byb2ZpbGU6aG92ZXIsXG4gICAgICAgICAgICAubmF2aWdhdGlvbl9fdG9vbHNfX3Byb2ZpbGU6Zm9jdXMge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNWM2MTY2O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubmF2aWdhdGlvbl9fdG9vbHNfX3Byb2ZpbGUtaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDEwcHggMCAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubmF2aWdhdGlvbl9fdG9vbHNfX3Byb2ZpbGUtbGluayxcbiAgICAgICAgICAgIC5uYXZpZ2F0aW9uX190b29sc19fcHJvZmlsZS1saW5rOmxpbmsge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICB3aWR0aDogMTc1cHg7XG5cbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHggNDVweDtcblxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzc0N2M4MztcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAuMTVzO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm5hdmlnYXRpb25fX3Rvb2xzX19wcm9maWxlLWxpbms6aG92ZXIsXG4gICAgICAgICAgICAubmF2aWdhdGlvbl9fdG9vbHNfX3Byb2ZpbGUtbGluazphY3RpdmUge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMGNjOTk7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNlM2U4ZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbik7Il19 */\n/*@ sourceURL=components/Navigation/Navigation.js */'
    }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsIkxvZ28iLCJEcm9wRG93biIsIk5ld1Bvc3RNb2RhbCIsImlzUG9zdE1vZGFsT3BlbiIsIm9wZW5Qb3N0TW9kYWwiLCJjbG9zZVBvc3RNb2RhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBRVAsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQWtCLEFBRXpCOzs7Ozs7OztrQkFBZSxnQkFBQTtRQUFBLEFBQUcsdUJBQUgsQUFBRztRQUFILEFBQW9CLHFCQUFwQixBQUFvQjtRQUFwQixBQUFtQyxzQkFBbkMsQUFBbUM7MkJBQzlDLGNBQUE7NENBQUEsQUFBZTs7c0JBQWY7d0JBQUEsQUFDSTtBQURKO0FBQUEsS0FBQSxrQkFDSSxjQUFBOzRDQUFBLEFBQWU7O3NCQUFmO3dCQUFBLEFBQ0k7QUFESjtBQUFBLHVCQUNJLEFBQUMsZ0NBQUssTUFBTixBQUFXO3NCQUFYO3dCQUFBLEFBQ0k7QUFESjt1QkFDSSxjQUFBO21CQUFBOztzQkFBQTt3QkFBQSxBQUFHO0FBQUg7QUFBQSx1QkFBRyxBQUFDOztzQkFBRDt3QkFIZixBQUNJLEFBQ0ksQUFDSSxBQUFHLEFBSVg7QUFKVztBQUFBLDJCQUlYLGNBQUE7NENBQUEsQUFBZTs7c0JBQWY7d0JBQUEsQUFDSTtBQURKO0FBQUEsdUJBQ0ksY0FBQTs0Q0FBQSxBQUFlOztzQkFBZjt3QkFBQSxBQUNJO0FBREo7QUFBQSx1QkFDSSxjQUFBLE9BQUcsTUFBSCxBQUFRLHNCQUFxQixTQUE3QixBQUFzQywwQkFBdEM7O3NCQUFBO3dCQUFBLEFBQXFEO0FBQXJEOzhDQUEwRCxLQUFMLEFBQVMsMkJBQTBCLEtBQW5DLEFBQXVDLDBCQUF2Qzs7c0JBQUE7d0JBRjdELEFBQ0ksQUFDSSxBQUFxRCxBQUV6RDtBQUZ5RDswQkFFekQsY0FBQTs0Q0FBQSxBQUFlOztzQkFBZjt3QkFBQSxBQUNJO0FBREo7QUFBQSxnREFDVyxNQUFQLEFBQVksOENBQVosQUFBK0I7O3NCQUEvQjt3QkFESixBQUNJLEFBQ0E7QUFEQTt3QkFDQSxjQUFBOzRDQUFBLEFBQWdCOztzQkFBaEI7d0JBQUEsQUFBaUQ7QUFBakQ7QUFBQSw4Q0FBc0QsS0FBTCxBQUFTLDJCQUEwQixLQUFuQyxBQUF1QyxlQUF2Qzs7c0JBQUE7d0JBTnpELEFBSUksQUFFSSxBQUFpRCxBQUdyRDtBQUhxRDswQkFHckQsY0FBQTs0Q0FBQSxBQUFlOztzQkFBZjt3QkFBQSxBQUNJO0FBREo7QUFBQSx1QkFDSSxBQUFDLG9DQUFTO2lCQUFTLEFBQ1g7Z0RBRFcsQUFFTDs7MEJBRks7NEJBQW5CLEFBQW1CO0FBQUE7QUFDZixTQURlO3NCQUFuQjt3QkFBQSxBQUlJO0FBSko7dUJBSUksY0FBQTs0Q0FBQSxBQUFjOztzQkFBZDt3QkFBQSxBQUNJO0FBREo7QUFBQSx1QkFDSSxjQUFBO21CQUFBOztzQkFBQTt3QkFBQSxBQUFJO0FBQUo7QUFBQSx1QkFBSSxBQUFDLGdDQUFLLE1BQU4sQUFBVztzQkFBWDt3QkFBQSxBQUFzQjtBQUF0Qjt1QkFBc0IsY0FBQTs0Q0FBQSxBQUFhOztzQkFBYjt3QkFBQTtBQUFBO0FBQUEsT0FEOUIsQUFDSSxBQUFJLEFBQXNCLEFBQzFCLDhCQUFBLGNBQUE7bUJBQUE7O3NCQUFBO3dCQUFBLEFBQUk7QUFBSjtBQUFBLHVCQUFJLEFBQUMsZ0NBQUssTUFBTixBQUFXO3NCQUFYO3dCQUFBLEFBQStCO0FBQS9CO3VCQUErQixjQUFBOzRDQUFBLEFBQWE7O3NCQUFiO3dCQUFBO0FBQUE7QUFBQSxPQUZ2QyxBQUVJLEFBQUksQUFBK0IsQUFDbkMsK0JBQUEsY0FBQTttQkFBQTs7c0JBQUE7d0JBQUEsQUFBSTtBQUFKO0FBQUEsdUJBQUksQUFBQyxnQ0FBSyxNQUFOLEFBQVc7c0JBQVg7d0JBQUEsQUFBcUI7QUFBckI7dUJBQXFCLGNBQUE7NENBQUEsQUFBYTs7c0JBQWI7d0JBQUE7QUFBQTtBQUFBLE9BakJ6QyxBQVNJLEFBQ0ksQUFJSSxBQUdJLEFBQUksQUFBcUIsQUFLcEMsbURBQW1CLEFBQUMsd0NBQWEsU0FBZCxBQUF1QjtzQkFBdkI7d0JBN0I1QixBQU9JLEFBc0J3QjtBQUFBO0tBQUE7aUJBN0I1QjthQURXLEFBQ1g7QUFBQTtBQURKIiwiZmlsZSI6Ik5hdmlnYXRpb24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL1RKL3Byb2plY3RzL3NpbXBseS1zb2NpYWwifQ==