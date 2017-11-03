'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _store = require('../../modules/store');

var _store2 = _interopRequireDefault(_store);

var _profile = require('../../modules/profile/profile.selectors');

var _Profile = require('../../layouts/Profile');

var _Profile2 = _interopRequireDefault(_Profile);

var _ProfileSummary = require('../../components/ProfileSummary');

var _ProfileSummary2 = _interopRequireDefault(_ProfileSummary);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/TJ/projects/simply-social/pages/profile/following.js?entry';


var FollowingView = function FollowingView(_ref) {
    var userProfile = _ref.userProfile,
        profiles = _ref.profiles;

    return _react2.default.createElement(_Profile2.default, { profile: userProfile, __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-1708124367' + ' ' + 'posts',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    }, profiles.map(function (p) {
        return _react2.default.createElement(_ProfileSummary2.default, { key: p.id, profile: p, __source: {
                fileName: _jsxFileName,
                lineNumber: 16
            }
        });
    })), _react2.default.createElement(_style2.default, {
        styleId: '1708124367',
        css: '.posts.jsx-1708124367{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;max-width:599px;margin:0 auto;padding:50px 12px 0;}.posts--tile.jsx-1708124367{max-width:1199px;}.post-container.jsx-1708124367{-webkit-flex:1 1 100%;-ms-flex:1 1 100%;flex:1 1 100%;}.posts--tile.jsx-1708124367 .post-container.jsx-1708124367{max-width:375px;margin:0 0 25px 25px;max-height:500px;}.posts--tile.jsx-1708124367 .post-container.jsx-1708124367:nth-child(3n + 1),.posts--tile.jsx-1708124367 .post-container.jsx-1708124367:first-child{margin-left:0;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Byb2ZpbGUvZm9sbG93aW5nLmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCd0IsQUFHa0MsQUFVSSxBQUlILEFBSUUsQUFPRixjQUNsQixFQVB5QixDQVJ6QixvQkFTcUIsaUJBTHJCLEFBTUEsb0JBcEJ1QixxRUFDSSw2R0FDTyxtSEFDZCxnQkFDRixjQUNNLG9CQUN4QiIsImZpbGUiOiJwYWdlcy9wcm9maWxlL2ZvbGxvd2luZy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvVEovcHJvamVjdHMvc2ltcGx5LXNvY2lhbCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHdpdGhSZWR1eCBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xuXG5pbXBvcnQgY3JlYXRlU3RvcmUgZnJvbSAnLi4vLi4vbW9kdWxlcy9zdG9yZSc7XG5pbXBvcnQgeyBnZXRBdXRob3IgfSBmcm9tICcuLi8uLi9tb2R1bGVzL3Byb2ZpbGUvcHJvZmlsZS5zZWxlY3RvcnMnO1xuXG5pbXBvcnQgUHJvZmlsZSBmcm9tICcuLi8uLi9sYXlvdXRzL1Byb2ZpbGUnO1xuXG5pbXBvcnQgUHJvZmlsZVN1bW1hcnkgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Qcm9maWxlU3VtbWFyeSc7XG5cbmNvbnN0IEZvbGxvd2luZ1ZpZXcgPSAoeyB1c2VyUHJvZmlsZSwgcHJvZmlsZXMgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxQcm9maWxlIHByb2ZpbGU9e3VzZXJQcm9maWxlfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdHNcIj5cbiAgICAgICAgICAgICAgICB7cHJvZmlsZXMubWFwKChwKSA9PiA8UHJvZmlsZVN1bW1hcnkga2V5PXtwLmlkfSBwcm9maWxlPXtwfSAvPil9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5wb3N0cyB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNTk5cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1MHB4IDEycHggMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAucG9zdHMtLXRpbGUge1xuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDExOTlweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAucG9zdC1jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICBmbGV4OiAxIDEgMTAwJTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAucG9zdHMtLXRpbGUgLnBvc3QtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzNzVweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMjVweCAyNXB4O1xuICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAucG9zdHMtLXRpbGUgLnBvc3QtY29udGFpbmVyOm50aC1jaGlsZCgzbiArIDEpLFxuICAgICAgICAgICAgICAgIC5wb3N0cy0tdGlsZSAucG9zdC1jb250YWluZXI6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvUHJvZmlsZT5cbiAgICApO1xufTtcblxuRm9sbG93aW5nVmlldy5kaXNwbGF5TmFtZSA9ICdGb2xsb3dpbmdWaWV3JztcbkZvbGxvd2luZ1ZpZXcuUHJvcFR5cGVzID0ge1xuXG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIGNvbnN0IHVzZXJQcm9maWxlID0gZ2V0QXV0aG9yKHN0YXRlLCBzdGF0ZS51c2VyLmRhdGEucHJvZmlsZUlkKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHVzZXJQcm9maWxlLFxuICAgICAgICBwcm9maWxlczogdXNlclByb2ZpbGUuZm9sbG93aW5nLm1hcCgoaWQpID0+IGdldEF1dGhvcihzdGF0ZSwgaWQpKVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eChjcmVhdGVTdG9yZSwgbWFwU3RhdGVUb1Byb3BzKShGb2xsb3dpbmdWaWV3KTsiXX0= */\n/*@ sourceURL=pages/profile/following.js?entry */'
    }));
};

FollowingView.displayName = 'FollowingView';
FollowingView.PropTypes = {};

var mapStateToProps = function mapStateToProps(state) {
    var userProfile = (0, _profile.getAuthor)(state, state.user.data.profileId);

    return {
        userProfile: userProfile,
        profiles: userProfile.following.map(function (id) {
            return (0, _profile.getAuthor)(state, id);
        })
    };
};

exports.default = (0, _nextReduxWrapper2.default)(_store2.default, mapStateToProps)(FollowingView);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Byb2ZpbGUvZm9sbG93aW5nLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwid2l0aFJlZHV4IiwiY3JlYXRlU3RvcmUiLCJnZXRBdXRob3IiLCJQcm9maWxlIiwiUHJvZmlsZVN1bW1hcnkiLCJGb2xsb3dpbmdWaWV3IiwidXNlclByb2ZpbGUiLCJwcm9maWxlcyIsIm1hcCIsInAiLCJpZCIsImRpc3BsYXlOYW1lIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJ1c2VyIiwiZGF0YSIsInByb2ZpbGVJZCIsImZvbGxvd2luZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUVQLEFBQU8sQUFBaUI7Ozs7QUFDeEIsQUFBUyxBQUFpQjs7QUFFMUIsQUFBTyxBQUFhOzs7O0FBRXBCLEFBQU8sQUFBb0I7Ozs7Ozs7OztBQUUzQixJQUFNLGdCQUFnQixTQUFoQixBQUFnQixvQkFBK0I7UUFBNUIsQUFBNEIsbUJBQTVCLEFBQTRCO1FBQWYsQUFBZSxnQkFBZixBQUFlLEFBQ2pEOzsyQkFDSSxBQUFDLG1DQUFRLFNBQVQsQUFBa0I7c0JBQWxCO3dCQUFBLEFBQ0k7QUFESjtLQUFBLGtCQUNJLGNBQUE7NENBQUEsQUFBZTs7c0JBQWY7d0JBQUEsQUFDSztBQURMO0FBQUEsZ0JBQ0ssQUFBUyxJQUFJLFVBQUEsQUFBQyxHQUFEOytCQUFPLEFBQUMsMENBQWUsS0FBSyxFQUFyQixBQUF1QixJQUFJLFNBQTNCLEFBQW9DOzBCQUFwQzs0QkFBUCxBQUFPO0FBQUE7U0FBQTtBQUY3QixBQUNJLEFBQ0s7aUJBRlQ7YUFESixBQUNJLEFBcUNQO0FBckNPO0FBRlI7O0FBeUNBLGNBQUEsQUFBYyxjQUFkLEFBQTRCO0FBQzVCLGNBQUEsQUFBYyxZQUFkLEFBQTBCOztBQUkxQixJQUFNLGtCQUFrQixTQUFsQixBQUFrQixnQkFBQSxBQUFDLE9BQVUsQUFDL0I7UUFBTSxjQUFjLHdCQUFBLEFBQVUsT0FBTyxNQUFBLEFBQU0sS0FBTixBQUFXLEtBQWhELEFBQW9CLEFBQWlDLEFBRXJEOzs7cUJBQU8sQUFFSDs4QkFBVSxBQUFZLFVBQVosQUFBc0IsSUFBSSxVQUFBLEFBQUMsSUFBRDttQkFBUSx3QkFBQSxBQUFVLE9BQWxCLEFBQVEsQUFBaUI7QUFGakUsQUFBTyxBQUVPLEFBRWpCLFNBRmlCO0FBRlAsQUFDSDtBQUpSLEFBU0E7O2tCQUFlLEFBQVUsaURBQVYsQUFBdUIsaUJBQXRDLEFBQWUsQUFBd0MiLCJmaWxlIjoiZm9sbG93aW5nLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9USi9wcm9qZWN0cy9zaW1wbHktc29jaWFsIn0=