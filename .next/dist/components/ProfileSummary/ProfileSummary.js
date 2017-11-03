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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/TJ/projects/simply-social/components/ProfileSummary/ProfileSummary.js';


var ProfileSummary = function ProfileSummary(_ref) {
    var profile = _ref.profile;
    return _react2.default.createElement('div', {
        className: 'jsx-597172903' + ' ' + 'profile',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 7
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-597172903' + ' ' + 'profile__image',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    }, _react2.default.createElement('img', { src: profile.image, alt: 'A photo of ' + profile.name, className: 'jsx-597172903',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    })), _react2.default.createElement('div', {
        className: 'jsx-597172903' + ' ' + 'profile__info',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    }, _react2.default.createElement('p', {
        className: 'jsx-597172903' + ' ' + 'profile__name',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    }, profile.name), _react2.default.createElement('div', {
        className: 'jsx-597172903' + ' ' + 'profile__details',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 13
        }
    }, _react2.default.createElement('span', {
        className: 'jsx-597172903' + ' ' + 'profile__post-count',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    }, (0, _formatNumber2.default)(profile.posts.length), ' posts'), _react2.default.createElement('span', {
        className: 'jsx-597172903' + ' ' + 'profile__follower-count',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    }, (0, _formatNumber2.default)(profile.followers.length), ' Followers'), _react2.default.createElement('span', {
        className: 'jsx-597172903' + ' ' + 'profile__following-count',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 16
        }
    }, (0, _formatNumber2.default)(profile.following.length), ' Following'))), _react2.default.createElement('div', {
        className: 'jsx-597172903' + ' ' + 'profile__is-following',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 19
        }
    }, _react2.default.createElement('img', { src: '/static/following-icon.png', alt: '', className: 'jsx-597172903',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 20
        }
    })), _react2.default.createElement(_style2.default, {
        styleId: '597172903',
        css: '.profile.jsx-597172903{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:stretch;-webkit-justify-content:stretch;-ms-flex-pack:stretch;justify-content:stretch;width:100%;padding:25px 0;border-bottom:1px solid #dee1e5;}.profile__image.jsx-597172903{-webkit-flex:0 0 40px;-ms-flex:0 0 40px;flex:0 0 40px;}.profile__image.jsx-597172903 img.jsx-597172903{border-radius:4px;}.profile__info.jsx-597172903{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:0 0 0 16px;}.profile__name.jsx-597172903{font-size:16px;color:#3f454d;margin:0 0 12px;}.profile__details.jsx-597172903{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}.profile__details.jsx-597172903 span.jsx-597172903{margin:0 22px 0 0;font-size:13px;color:#bec3cc;}.profile__is-following.jsx-597172903{-webkit-flex:0 0 30px;-ms-flex:0 0 30px;flex:0 0 30px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUHJvZmlsZVN1bW1hcnkvUHJvZmlsZVN1bW1hcnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JvQixBQUc4QixBQVlDLEFBSUksQUFJSixBQVNDLEFBTUYsQUFPSyxBQU9KLGVBbkJBLEdBYmxCLEFBMkJtQixXQWJDLElBY0YsWUFibEIsRUFjQSxPQWpDQSxBQVFpQixBQTZCakIsb0JBakR1QixBQW1DQSxzREFkRyxlQXBCSCxBQW1DQSwrREFiRCxrQkFFdEIsWUF2QjRCLEFBbUNHLHVHQWxDaEIsRUFtQ2YsU0FqQ21CLGVBRWlCLGdDQUNwQyIsImZpbGUiOiJjb21wb25lbnRzL1Byb2ZpbGVTdW1tYXJ5L1Byb2ZpbGVTdW1tYXJ5LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9USi9wcm9qZWN0cy9zaW1wbHktc29jaWFsIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHNoYXBlLCBzdHJpbmcsIG51bWJlciB9IGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgZm9ybWF0TnVtYmVyIGZyb20gJy4uLy4uL2hlbHBlcnMvZm9ybWF0TnVtYmVyJztcblxuY29uc3QgUHJvZmlsZVN1bW1hcnkgPSAoeyBwcm9maWxlIH0pID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlX19pbWFnZVwiPlxuICAgICAgICAgICAgPGltZyBzcmM9e3Byb2ZpbGUuaW1hZ2V9IGFsdD17YEEgcGhvdG8gb2YgJHtwcm9maWxlLm5hbWV9YH0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlX19pbmZvXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcm9maWxlX19uYW1lXCI+e3Byb2ZpbGUubmFtZX08L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGVfX2RldGFpbHNcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9maWxlX19wb3N0LWNvdW50XCI+e2Zvcm1hdE51bWJlcihwcm9maWxlLnBvc3RzLmxlbmd0aCl9IHBvc3RzPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2ZpbGVfX2ZvbGxvd2VyLWNvdW50XCI+e2Zvcm1hdE51bWJlcihwcm9maWxlLmZvbGxvd2Vycy5sZW5ndGgpfSBGb2xsb3dlcnM8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJvZmlsZV9fZm9sbG93aW5nLWNvdW50XCI+e2Zvcm1hdE51bWJlcihwcm9maWxlLmZvbGxvd2luZy5sZW5ndGgpfSBGb2xsb3dpbmc8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZV9faXMtZm9sbG93aW5nXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvZm9sbG93aW5nLWljb24ucG5nXCIgYWx0PVwiXCIvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAucHJvZmlsZSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMjVweCAwO1xuXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUxZTU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wcm9maWxlX19pbWFnZSB7XG4gICAgICAgICAgICAgICAgZmxleDogMCAwIDQwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wcm9maWxlX19pbWFnZSBpbWcge1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnByb2ZpbGVfX2luZm8ge1xuICAgICAgICAgICAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDAgMTZweDtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucHJvZmlsZV9fbmFtZSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjM2Y0NTRkO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDEycHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wcm9maWxlX19kZXRhaWxzIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wcm9maWxlX19kZXRhaWxzIHNwYW4ge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAyMnB4IDAgMDtcblxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2JlYzNjYztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnByb2ZpbGVfX2lzLWZvbGxvd2luZyB7XG4gICAgICAgICAgICAgICAgZmxleDogMCAwIDMwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbik7XG5cblByb2ZpbGVTdW1tYXJ5LmRpc3BsYXlOYW1lID0gJ1Byb2ZpbGVTdW1tYXJ5JztcblByb2ZpbGVTdW1tYXJ5LnByb3BUeXBlcyA9IHtcbiAgICBwcm9maWxlOiBzaGFwZSh7XG4gICAgICAgIG5hbWU6IHN0cmluZyxcbiAgICAgICAgaW1hZ2U6IHN0cmluZyxcbiAgICAgICAgcG9zdENvdW50OiBudW1iZXIsXG4gICAgICAgIGZvbGxvd2Vyc0NvdW50OiBudW1iZXIsXG4gICAgICAgIGZvbGxvd2luZ0NvdW50OiBudW1iZXJcbiAgICB9KS5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlU3VtbWFyeTsiXX0= */\n/*@ sourceURL=components/ProfileSummary/ProfileSummary.js */'
    }));
};

ProfileSummary.displayName = 'ProfileSummary';
ProfileSummary.propTypes = {
    profile: (0, _propTypes.shape)({
        name: _propTypes.string,
        image: _propTypes.string,
        postCount: _propTypes.number,
        followersCount: _propTypes.number,
        followingCount: _propTypes.number
    }).isRequired
};

exports.default = ProfileSummary;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUHJvZmlsZVN1bW1hcnkvUHJvZmlsZVN1bW1hcnkuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJzaGFwZSIsInN0cmluZyIsIm51bWJlciIsImZvcm1hdE51bWJlciIsIlByb2ZpbGVTdW1tYXJ5IiwicHJvZmlsZSIsImltYWdlIiwibmFtZSIsInBvc3RzIiwibGVuZ3RoIiwiZm9sbG93ZXJzIiwiZm9sbG93aW5nIiwiZGlzcGxheU5hbWUiLCJwcm9wVHlwZXMiLCJwb3N0Q291bnQiLCJmb2xsb3dlcnNDb3VudCIsImZvbGxvd2luZ0NvdW50IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFTLEFBQU8sQUFBUTs7QUFFeEIsQUFBTyxBQUFrQjs7Ozs7Ozs7O0FBRXpCLElBQU0saUJBQWlCLFNBQWpCLEFBQWlCLHFCQUFBO1FBQUEsQUFBRyxlQUFILEFBQUc7MkJBQ3RCLGNBQUE7MkNBQUEsQUFBZTs7c0JBQWY7d0JBQUEsQUFDSTtBQURKO0FBQUEsS0FBQSxrQkFDSSxjQUFBOzJDQUFBLEFBQWU7O3NCQUFmO3dCQUFBLEFBQ0k7QUFESjtBQUFBLDhDQUNTLEtBQUssUUFBVixBQUFrQixPQUFPLHFCQUFtQixRQUE1QyxBQUFvRCxpQkFBcEQ7O3NCQUFBO3dCQUZSLEFBQ0ksQUFDSSxBQUVKO0FBRkk7eUJBRUosY0FBQTsyQ0FBQSxBQUFlOztzQkFBZjt3QkFBQSxBQUNJO0FBREo7QUFBQSx1QkFDSSxjQUFBOzJDQUFBLEFBQWE7O3NCQUFiO3dCQUFBLEFBQThCO0FBQTlCO0FBQUEsZUFESixBQUNJLEFBQXNDLEFBQ3RDLHVCQUFBLGNBQUE7MkNBQUEsQUFBZTs7c0JBQWY7d0JBQUEsQUFDSTtBQURKO0FBQUEsdUJBQ0ksY0FBQTsyQ0FBQSxBQUFnQjs7c0JBQWhCO3dCQUFBLEFBQXVDO0FBQXZDO0FBQUEsbUNBQW9ELFFBQUEsQUFBUSxNQUE1RCxBQUF1QyxBQUEyQixTQUR0RSxBQUNJLEFBQ0EsMkJBQUEsY0FBQTsyQ0FBQSxBQUFnQjs7c0JBQWhCO3dCQUFBLEFBQTJDO0FBQTNDO0FBQUEsbUNBQXdELFFBQUEsQUFBUSxVQUFoRSxBQUEyQyxBQUErQixTQUY5RSxBQUVJLEFBQ0EsK0JBQUEsY0FBQTsyQ0FBQSxBQUFnQjs7c0JBQWhCO3dCQUFBLEFBQTRDO0FBQTVDO0FBQUEsbUNBQXlELFFBQUEsQUFBUSxVQUFqRSxBQUE0QyxBQUErQixTQVR2RixBQUlJLEFBRUksQUFHSSxBQUdSLGlDQUFBLGNBQUE7MkNBQUEsQUFBZTs7c0JBQWY7d0JBQUEsQUFDSTtBQURKO0FBQUEsOENBQ1MsS0FBTCxBQUFTLDhCQUE2QixLQUF0QyxBQUEwQyxlQUExQzs7c0JBQUE7d0JBYlIsQUFZSSxBQUNJO0FBQUE7O2lCQWJSO2FBRG1CLEFBQ25CO0FBQUE7QUFESjs7QUEwRUEsZUFBQSxBQUFlLGNBQWYsQUFBNkI7QUFDN0IsZUFBQSxBQUFlOztBQUNJLEFBQ0wsQUFDTjtBQUZXLEFBRUosQUFDUDtBQUhXLEFBR0EsQUFDWDtBQUpXLEFBSUssQUFDaEI7QUFMSyxBQUFNLEFBS0s7QUFMTCxBQUNYLEtBREssRUFEYixBQUEyQixBQU9wQixBQUdQO0FBVjJCLEFBQ3ZCOztrQkFTSixBQUFlIiwiZmlsZSI6IlByb2ZpbGVTdW1tYXJ5LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9USi9wcm9qZWN0cy9zaW1wbHktc29jaWFsIn0=