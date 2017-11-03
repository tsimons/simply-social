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

var _Base = require('../Base');

var _Base2 = _interopRequireDefault(_Base);

var _NewPostContainer = require('../../containers/NewPostContainer');

var _NewPostContainer2 = _interopRequireDefault(_NewPostContainer);

var _SubNavigation = require('../../components/SubNavigation');

var _SubNavigation2 = _interopRequireDefault(_SubNavigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/TJ/projects/simply-social/layouts/Home/Home.layout.js';


var links = [{
    href: '/',
    name: 'All Posts'
}, {
    href: '/photos',
    name: 'Photos'
}, {
    href: '/videos',
    name: 'Videos'
}];

var HomeLayout = function HomeLayout(_ref) {
    var children = _ref.children,
        setPostLayout = _ref.setPostLayout,
        layout = _ref.layout,
        route = _ref.route,
        addPost = _ref.addPost;
    return _react2.default.createElement(_Base2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 25
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-575942036' + ' ' + 'home-layout__header',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 26
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-575942036' + ' ' + 'home-layout__new-post',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 27
        }
    }, _react2.default.createElement(_NewPostContainer2.default, { theme: 'light', __source: {
            fileName: _jsxFileName,
            lineNumber: 28
        }
    })), _react2.default.createElement('div', {
        className: 'jsx-575942036' + ' ' + 'home-layout__sub-nav-container',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 30
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-575942036' + ' ' + 'home-layout__sub-navigation',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 31
        }
    }, _react2.default.createElement(_SubNavigation2.default, { links: links, active: route, __source: {
            fileName: _jsxFileName,
            lineNumber: 32
        }
    })), setPostLayout && _react2.default.createElement('ul', {
        className: 'jsx-575942036' + ' ' + 'home-layout__layout-btns',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 37
        }
    }, _react2.default.createElement('li', {
        className: 'jsx-575942036',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 38
        }
    }, _react2.default.createElement('a', { href: 'javascript:void(0)', onClick: function onClick() {
            return setPostLayout('list');
        }, className: 'jsx-575942036' + ' ' + ((0, _classnames2.default)("home-layout__layout-btn", { active: layout === 'list' }) || ''),
        __source: {
            fileName: _jsxFileName,
            lineNumber: 39
        }
    }, _react2.default.createElement('img', { src: '/static/list-icon.png', alt: 'list layout', className: 'jsx-575942036',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 40
        }
    }))), _react2.default.createElement('li', {
        className: 'jsx-575942036',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 43
        }
    }, _react2.default.createElement('a', { href: 'javascript:void(0)', onClick: function onClick() {
            return setPostLayout('tile');
        }, className: 'jsx-575942036' + ' ' + ((0, _classnames2.default)("home-layout__layout-btn", { active: layout === 'tile' }) || ''),
        __source: {
            fileName: _jsxFileName,
            lineNumber: 44
        }
    }, _react2.default.createElement('img', { src: '/static/tile-icon.png', alt: 'tile layout', className: 'jsx-575942036',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 45
        }
    })))))), _react2.default.createElement('div', {
        className: 'jsx-575942036' + ' ' + 'home-layout__content',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 54
        }
    }, children), _react2.default.createElement(_style2.default, {
        styleId: '575942036',
        css: '.home-layout__header.jsx-575942036{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:427px;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:123px 12px 0;background:url(/static/hero-background.jpg) center center no-repeat;background-size:cover;}.home-layout__new-post.jsx-575942036{max-width:575px;background:rgba(0,178,134,.7);border-radius:3px;width:100%;max-width:575px;padding:49px 33px 29px;}.home-layout__layout-btns.jsx-575942036{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.home-layout__layout-btns.jsx-575942036 li.jsx-575942036{margin:0 0 0 16px;}.home-layout__layout-btn.jsx-575942036{opacity:.5;-webkit-transition:opacity .35s;transition:opacity .35s;}.home-layout__layout-btn.jsx-575942036:hover,.home-layout__layout-btn.jsx-575942036:active{opacity:.8;}.home-layout__layout-btn.active.jsx-575942036{opacity:1;}.home-layout__sub-nav-container.jsx-575942036{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;width:100%;max-width:575px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dHMvSG9tZS9Ib21lLmxheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5RG9CLEFBRzhCLEFBYUcsQUFTSCxBQUlLLEFBR1AsQUFLQSxBQUdELEFBSUcsVUFIakIsQ0FSNEIsQUFLNUIsS0FyQnFDLEVBYXJDLDRCQVpzQixrQkFDUCxHQWVmLE9BOUJpQixBQXNCTSxBQW1CQSxDQXpCSCxZQWZNLElBZ0JDLHVCQUMzQiw2QkFLQSxBQW1Ca0Msc0JBeENYLDZGQUNXLEFBd0NQLDZHQUNaLE1BdkNVLEtBd0NMLGdCQXRDb0QsQUF1Q3hFLG9FQXRDMEIsc0JBQzFCIiwiZmlsZSI6ImxheW91dHMvSG9tZS9Ib21lLmxheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvVEovcHJvamVjdHMvc2ltcGx5LXNvY2lhbCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBub2RlIH0gZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmltcG9ydCBCYXNlIGZyb20gJy4uL0Jhc2UnO1xuXG5pbXBvcnQgTmV3UG9zdCBmcm9tICcuLi8uLi9jb250YWluZXJzL05ld1Bvc3RDb250YWluZXInO1xuaW1wb3J0IFN1Yk5hdmlnYXRpb24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TdWJOYXZpZ2F0aW9uJztcblxuY29uc3QgbGlua3MgPSBbXG4gICAge1xuICAgICAgICBocmVmOiAnLycsXG4gICAgICAgIG5hbWU6ICdBbGwgUG9zdHMnXG4gICAgfSwge1xuICAgICAgICBocmVmOiAnL3Bob3RvcycsXG4gICAgICAgIG5hbWU6ICdQaG90b3MnXG4gICAgfSwge1xuICAgICAgICBocmVmOiAnL3ZpZGVvcycsXG4gICAgICAgIG5hbWU6ICdWaWRlb3MnXG4gICAgfVxuXTtcblxuY29uc3QgSG9tZUxheW91dCA9ICh7IGNoaWxkcmVuLCBzZXRQb3N0TGF5b3V0LCBsYXlvdXQsIHJvdXRlLCBhZGRQb3N0IH0pID0+IChcbiAgICA8QmFzZT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lLWxheW91dF9faGVhZGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWUtbGF5b3V0X19uZXctcG9zdFwiPlxuICAgICAgICAgICAgICAgIDxOZXdQb3N0IHRoZW1lPVwibGlnaHRcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWUtbGF5b3V0X19zdWItbmF2LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZS1sYXlvdXRfX3N1Yi1uYXZpZ2F0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxTdWJOYXZpZ2F0aW9uIGxpbmtzPXtsaW5rc30gYWN0aXZlPXtyb3V0ZX0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0UG9zdExheW91dCAmJlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiaG9tZS1sYXlvdXRfX2xheW91dC1idG5zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFwiaG9tZS1sYXlvdXRfX2xheW91dC1idG5cIiwgeyBhY3RpdmU6IGxheW91dCA9PT0gJ2xpc3QnIH0pfSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgb25DbGljaz17KCkgPT4gc2V0UG9zdExheW91dCgnbGlzdCcpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2xpc3QtaWNvbi5wbmdcIiBhbHQ9XCJsaXN0IGxheW91dFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXCJob21lLWxheW91dF9fbGF5b3V0LWJ0blwiLCB7IGFjdGl2ZTogbGF5b3V0ID09PSAndGlsZScgfSl9IGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiBvbkNsaWNrPXsoKSA9PiBzZXRQb3N0TGF5b3V0KCd0aWxlJyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvdGlsZS1pY29uLnBuZ1wiIGFsdD1cInRpbGUgbGF5b3V0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZS1sYXlvdXRfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLmhvbWUtbGF5b3V0X19oZWFkZXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MjdweDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTIzcHggMTJweCAwO1xuXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKC9zdGF0aWMvaGVyby1iYWNrZ3JvdW5kLmpwZykgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmhvbWUtbGF5b3V0X19uZXctcG9zdCB7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA1NzVweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDE3OCwgMTM0LCAuNyk7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogNTc1cHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNDlweCAzM3B4IDI5cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5ob21lLWxheW91dF9fbGF5b3V0LWJ0bnMge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ob21lLWxheW91dF9fbGF5b3V0LWJ0bnMgbGkge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDAgMTZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ob21lLWxheW91dF9fbGF5b3V0LWJ0biB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogLjU7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMzVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmhvbWUtbGF5b3V0X19sYXlvdXQtYnRuOmhvdmVyLFxuICAgICAgICAgICAgLmhvbWUtbGF5b3V0X19sYXlvdXQtYnRuOmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogLjg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaG9tZS1sYXlvdXRfX2xheW91dC1idG4uYWN0aXZlIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaG9tZS1sYXlvdXRfX3N1Yi1uYXYtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogNTc1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0Jhc2U+XG4pO1xuXG5Ib21lTGF5b3V0LmRpc3BsYXlOYW1lID0gJ0hvbWVMYXlvdXQnO1xuSG9tZUxheW91dC5wcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IG5vZGVcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVMYXlvdXQ7Il19 */\n/*@ sourceURL=layouts/Home/Home.layout.js */'
    }));
};

HomeLayout.displayName = 'HomeLayout';
HomeLayout.propTypes = {
    children: _propTypes.node
};

exports.default = HomeLayout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dHMvSG9tZS9Ib21lLmxheW91dC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIm5vZGUiLCJMaW5rIiwiY2xhc3NOYW1lcyIsIkJhc2UiLCJOZXdQb3N0IiwiU3ViTmF2aWdhdGlvbiIsImxpbmtzIiwiaHJlZiIsIm5hbWUiLCJIb21lTGF5b3V0IiwiY2hpbGRyZW4iLCJzZXRQb3N0TGF5b3V0IiwibGF5b3V0Iiwicm91dGUiLCJhZGRQb3N0IiwiYWN0aXZlIiwiZGlzcGxheU5hbWUiLCJwcm9wVHlwZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUzs7QUFDVCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUVQLEFBQU8sQUFBVTs7OztBQUVqQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFtQjs7Ozs7Ozs7O0FBRTFCLElBQU07VUFDRixBQUNVLEFBQ047VUFITSxBQUNWLEFBRVU7QUFGVixBQUNJLENBRk07VUFJUCxBQUNPLEFBQ047VUFOTSxBQUlQLEFBRU87QUFGUCxBQUNDO1VBRUQsQUFDTyxBQUNOO1VBVFIsQUFBYyxBQU9QLEFBRU87QUFGUCxBQUNDOztBQUtSLElBQU0sYUFBYSxTQUFiLEFBQWEsaUJBQUE7UUFBQSxBQUFHLGdCQUFILEFBQUc7UUFBSCxBQUFhLHFCQUFiLEFBQWE7UUFBYixBQUE0QixjQUE1QixBQUE0QjtRQUE1QixBQUFvQyxhQUFwQyxBQUFvQztRQUFwQyxBQUEyQyxlQUEzQyxBQUEyQzsyQkFDMUQsQUFBQzs7c0JBQUQ7d0JBQUEsQUFDSTtBQURKO0FBQUEsS0FBQSxrQkFDSSxjQUFBOzJDQUFBLEFBQWU7O3NCQUFmO3dCQUFBLEFBQ0k7QUFESjtBQUFBLHVCQUNJLGNBQUE7MkNBQUEsQUFBZTs7c0JBQWY7d0JBQUEsQUFDSTtBQURKO0FBQUEsdUJBQ0ksQUFBQyw0Q0FBUSxPQUFULEFBQWU7c0JBQWY7d0JBRlIsQUFDSSxBQUNJLEFBRUo7QUFGSTt5QkFFSixjQUFBOzJDQUFBLEFBQWU7O3NCQUFmO3dCQUFBLEFBQ0k7QUFESjtBQUFBLHVCQUNJLGNBQUE7MkNBQUEsQUFBZTs7c0JBQWY7d0JBQUEsQUFDSTtBQURKO0FBQUEsdUJBQ0ksQUFBQyx5Q0FBYyxPQUFmLEFBQXNCLE9BQU8sUUFBN0IsQUFBcUM7c0JBQXJDO3dCQUZSLEFBQ0ksQUFDSSxBQUlBO0FBSkE7MENBS0EsY0FBQTsyQ0FBQSxBQUFjOztzQkFBZDt3QkFBQSxBQUNJO0FBREo7QUFBQSxLQUFBLGtCQUNJLGNBQUE7bUJBQUE7O3NCQUFBO3dCQUFBLEFBQ0k7QUFESjtBQUFBLHVCQUNJLGNBQUEsT0FBb0YsTUFBcEYsQUFBeUYsc0JBQXFCLFNBQVMsbUJBQUE7bUJBQU0sY0FBTixBQUFNLEFBQWM7QUFBM0ksK0NBQWMsMEJBQUEsQUFBVywyQkFBMkIsRUFBRSxRQUFRLFdBQTlELEFBQWMsQUFBc0MsQUFBcUIsYUFBekU7O3NCQUFBO3dCQUFBLEFBQ0k7QUFESjs4Q0FDUyxLQUFMLEFBQVMseUJBQXdCLEtBQWpDLEFBQXFDLDBCQUFyQzs7c0JBQUE7d0JBSFosQUFDSSxBQUNJLEFBQ0ksQUFHUjtBQUhROzBCQUdSLGNBQUE7bUJBQUE7O3NCQUFBO3dCQUFBLEFBQ0k7QUFESjtBQUFBLHVCQUNJLGNBQUEsT0FBb0YsTUFBcEYsQUFBeUYsc0JBQXFCLFNBQVMsbUJBQUE7bUJBQU0sY0FBTixBQUFNLEFBQWM7QUFBM0ksK0NBQWMsMEJBQUEsQUFBVywyQkFBMkIsRUFBRSxRQUFRLFdBQTlELEFBQWMsQUFBc0MsQUFBcUIsYUFBekU7O3NCQUFBO3dCQUFBLEFBQ0k7QUFESjs4Q0FDUyxLQUFMLEFBQVMseUJBQXdCLEtBQWpDLEFBQXFDLDBCQUFyQzs7c0JBQUE7d0JBcEI1QixBQUNJLEFBSUksQUFPUSxBQU1JLEFBQ0ksQUFDSSxBQVN4QjtBQVR3Qjs2QkFTeEIsY0FBQTsyQ0FBQSxBQUFlOztzQkFBZjt3QkFBQSxBQUNLO0FBREw7QUFBQSxPQTdCSixBQTZCSTtpQkE3Qko7YUFEZSxBQUNmO0FBQUE7QUFESjs7QUF3RkEsV0FBQSxBQUFXLGNBQVgsQUFBeUI7QUFDekIsV0FBQSxBQUFXO0FBQVgsQUFBdUIsQUFDVCxBQUdkO0FBSnVCLEFBQ25COztrQkFHSixBQUFlIiwiZmlsZSI6IkhvbWUubGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9USi9wcm9qZWN0cy9zaW1wbHktc29jaWFsIn0=