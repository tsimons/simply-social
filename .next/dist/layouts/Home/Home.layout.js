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

var _Base = require('../Base');

var _Base2 = _interopRequireDefault(_Base);

var _NewPost = require('../../components/NewPost');

var _NewPost2 = _interopRequireDefault(_NewPost);

var _SubNavigation = require('../../components/SubNavigation');

var _SubNavigation2 = _interopRequireDefault(_SubNavigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/TJ/projects/simply-social/layouts/Home/Home.layout.js';


var links = [{
    href: '/home',
    name: 'All Posts'
}, {
    href: '/home/photos',
    name: 'Photos'
}, {
    href: '/home/videos',
    name: 'Videos'
}];

var HomeLayout = function HomeLayout(_ref) {
    var children = _ref.children;
    return _react2.default.createElement(_Base2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 24
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-2638758683' + ' ' + 'home-layout__header',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 25
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-2638758683' + ' ' + 'home-layout__new-post',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 26
        }
    }, _react2.default.createElement(_NewPost2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 27
        }
    })), _react2.default.createElement('div', {
        className: 'jsx-2638758683' + ' ' + 'home-layout__sub-nav-container',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 29
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-2638758683' + ' ' + 'home-layout__sub-navigation',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 30
        }
    }, _react2.default.createElement(_SubNavigation2.default, { links: links, __source: {
            fileName: _jsxFileName,
            lineNumber: 31
        }
    })), _react2.default.createElement('ul', {
        className: 'jsx-2638758683' + ' ' + 'home-layout__layout-btns',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 34
        }
    }, _react2.default.createElement('li', {
        className: 'jsx-2638758683',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 35
        }
    }, _react2.default.createElement('a', { href: 'javascript:void(0)', className: 'jsx-2638758683' + ' ' + 'home-layout__layout-btn',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 35
        }
    }, _react2.default.createElement('img', { src: '/static/list-icon.png', alt: 'list layout', className: 'jsx-2638758683',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 35
        }
    }))), _react2.default.createElement('li', {
        className: 'jsx-2638758683',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 36
        }
    }, _react2.default.createElement('a', { href: 'javascript:void(0)', className: 'jsx-2638758683' + ' ' + 'home-layout__layout-btn',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 36
        }
    }, _react2.default.createElement('img', { src: '/static/tile-icon.png', alt: 'tile layout', className: 'jsx-2638758683',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 36
        }
    })))))), _react2.default.createElement('div', {
        className: 'jsx-2638758683' + ' ' + 'home-layout__content',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 42
        }
    }, children), _react2.default.createElement(_style2.default, {
        styleId: '2638758683',
        css: '.home-layout__header.jsx-2638758683{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:427px;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:123px 12px 0;background:url(/static/hero-background.jpg) center center no-repeat;background-size:cover;}.home-layout__new-post.jsx-2638758683{max-width:575px;background:rgba(0,178,134,.7);border-radius:3px;width:100%;max-width:575px;padding:49px 33px 29px;}.home-layout__layout-btns.jsx-2638758683{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.home-layout__layout-btns.jsx-2638758683 li.jsx-2638758683{margin:0 0 0 16px;}.home-layout__sub-nav-container.jsx-2638758683{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;width:100%;max-width:575px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dHMvSG9tZS9Ib21lLmxheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2Q29CLEFBRzhCLEFBYUcsQUFTSCxBQUlLLEFBSUwsZ0JBaEJvQixFQWFyQyw0QkFac0Isa0JBQ1AsVUFmRSxBQXNCTSxBQVFBLENBZEgsWUFmTSxJQWdCQyx1QkFDM0IsNkJBS0EsQUFRa0Msc0JBN0JYLDZGQUNXLEFBNkJQLDZHQUNaLE1BNUJVLEtBNkJMLGdCQTNCb0QsQUE0QnhFLG9FQTNCMEIsc0JBQzFCIiwiZmlsZSI6ImxheW91dHMvSG9tZS9Ib21lLmxheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvVEovcHJvamVjdHMvc2ltcGx5LXNvY2lhbCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBub2RlIH0gZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5pbXBvcnQgQmFzZSBmcm9tICcuLi9CYXNlJztcblxuaW1wb3J0IE5ld1Bvc3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9OZXdQb3N0JztcbmltcG9ydCBTdWJOYXZpZ2F0aW9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU3ViTmF2aWdhdGlvbic7XG5cbmNvbnN0IGxpbmtzID0gW1xuICAgIHtcbiAgICAgICAgaHJlZjogJy9ob21lJyxcbiAgICAgICAgbmFtZTogJ0FsbCBQb3N0cydcbiAgICB9LCB7XG4gICAgICAgIGhyZWY6ICcvaG9tZS9waG90b3MnLFxuICAgICAgICBuYW1lOiAnUGhvdG9zJ1xuICAgIH0sIHtcbiAgICAgICAgaHJlZjogJy9ob21lL3ZpZGVvcycsXG4gICAgICAgIG5hbWU6ICdWaWRlb3MnXG4gICAgfVxuXTtcblxuY29uc3QgSG9tZUxheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgICA8QmFzZT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lLWxheW91dF9faGVhZGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWUtbGF5b3V0X19uZXctcG9zdFwiPlxuICAgICAgICAgICAgICAgIDxOZXdQb3N0IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZS1sYXlvdXRfX3N1Yi1uYXYtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lLWxheW91dF9fc3ViLW5hdmlnYXRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPFN1Yk5hdmlnYXRpb24gbGlua3M9e2xpbmtzfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImhvbWUtbGF5b3V0X19sYXlvdXQtYnRuc1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPVwiaG9tZS1sYXlvdXRfX2xheW91dC1idG5cIiBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCI+PGltZyBzcmM9XCIvc3RhdGljL2xpc3QtaWNvbi5wbmdcIiBhbHQ9XCJsaXN0IGxheW91dFwiLz48L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT1cImhvbWUtbGF5b3V0X19sYXlvdXQtYnRuXCIgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiPjxpbWcgc3JjPVwiL3N0YXRpYy90aWxlLWljb24ucG5nXCIgYWx0PVwidGlsZSBsYXlvdXRcIi8+PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZS1sYXlvdXRfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLmhvbWUtbGF5b3V0X19oZWFkZXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MjdweDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTIzcHggMTJweCAwO1xuXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKC9zdGF0aWMvaGVyby1iYWNrZ3JvdW5kLmpwZykgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmhvbWUtbGF5b3V0X19uZXctcG9zdCB7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA1NzVweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDE3OCwgMTM0LCAuNyk7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogNTc1cHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNDlweCAzM3B4IDI5cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5ob21lLWxheW91dF9fbGF5b3V0LWJ0bnMge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ob21lLWxheW91dF9fbGF5b3V0LWJ0bnMgbGkge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDAgMTZweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmhvbWUtbGF5b3V0X19zdWItbmF2LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDU3NXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgPC9CYXNlPlxuKTtcblxuSG9tZUxheW91dC5kaXNwbGF5TmFtZSA9ICdIb21lTGF5b3V0JztcbkhvbWVMYXlvdXQucHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBub2RlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lTGF5b3V0OyJdfQ== */\n/*@ sourceURL=layouts/Home/Home.layout.js */'
    }));
};

HomeLayout.displayName = 'HomeLayout';
HomeLayout.propTypes = {
    children: _propTypes.node
};

exports.default = HomeLayout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dHMvSG9tZS9Ib21lLmxheW91dC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIm5vZGUiLCJMaW5rIiwiQmFzZSIsIk5ld1Bvc3QiLCJTdWJOYXZpZ2F0aW9uIiwibGlua3MiLCJocmVmIiwibmFtZSIsIkhvbWVMYXlvdXQiLCJjaGlsZHJlbiIsImRpc3BsYXlOYW1lIiwicHJvcFR5cGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVM7O0FBQ1QsQUFBTzs7OztBQUVQLEFBQU8sQUFBVTs7OztBQUVqQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFtQjs7Ozs7Ozs7O0FBRTFCLElBQU07VUFDRixBQUNVLEFBQ047VUFITSxBQUNWLEFBRVU7QUFGVixBQUNJLENBRk07VUFJUCxBQUNPLEFBQ047VUFOTSxBQUlQLEFBRU87QUFGUCxBQUNDO1VBRUQsQUFDTyxBQUNOO1VBVFIsQUFBYyxBQU9QLEFBRU87QUFGUCxBQUNDOztBQUtSLElBQU0sYUFBYSxTQUFiLEFBQWEsaUJBQUE7UUFBQSxBQUFHLGdCQUFILEFBQUc7MkJBQ2xCLEFBQUM7O3NCQUFEO3dCQUFBLEFBQ0k7QUFESjtBQUFBLEtBQUEsa0JBQ0ksY0FBQTs0Q0FBQSxBQUFlOztzQkFBZjt3QkFBQSxBQUNJO0FBREo7QUFBQSx1QkFDSSxjQUFBOzRDQUFBLEFBQWU7O3NCQUFmO3dCQUFBLEFBQ0k7QUFESjtBQUFBLHVCQUNJLEFBQUM7O3NCQUFEO3dCQUZSLEFBQ0ksQUFDSSxBQUVKO0FBRkk7QUFBQSx5QkFFSixjQUFBOzRDQUFBLEFBQWU7O3NCQUFmO3dCQUFBLEFBQ0k7QUFESjtBQUFBLHVCQUNJLGNBQUE7NENBQUEsQUFBZTs7c0JBQWY7d0JBQUEsQUFDSTtBQURKO0FBQUEsdUJBQ0ksQUFBQyx5Q0FBYyxPQUFmLEFBQXNCO3NCQUF0Qjt3QkFGUixBQUNJLEFBQ0ksQUFHSjtBQUhJO3lCQUdKLGNBQUE7NENBQUEsQUFBYzs7c0JBQWQ7d0JBQUEsQUFDSTtBQURKO0FBQUEsdUJBQ0ksY0FBQTttQkFBQTs7c0JBQUE7d0JBQUEsQUFBSTtBQUFKO0FBQUEsdUJBQUksY0FBQSxPQUF1QyxNQUF2QyxBQUE0QywwREFBNUMsQUFBYTs7c0JBQWI7d0JBQUEsQUFBaUU7QUFBakU7OENBQXNFLEtBQUwsQUFBUyx5QkFBd0IsS0FBakMsQUFBcUMsMEJBQXJDOztzQkFBQTt3QkFEekUsQUFDSSxBQUFJLEFBQWlFLEFBQ3JFO0FBRHFFOzBCQUNyRSxjQUFBO21CQUFBOztzQkFBQTt3QkFBQSxBQUFJO0FBQUo7QUFBQSx1QkFBSSxjQUFBLE9BQXVDLE1BQXZDLEFBQTRDLDBEQUE1QyxBQUFhOztzQkFBYjt3QkFBQSxBQUFpRTtBQUFqRTs4Q0FBc0UsS0FBTCxBQUFTLHlCQUF3QixLQUFqQyxBQUFxQywwQkFBckM7O3NCQUFBO3dCQVpyRixBQUNJLEFBSUksQUFLSSxBQUVJLEFBQUksQUFBaUUsQUFNakY7QUFOaUY7NkJBTWpGLGNBQUE7NENBQUEsQUFBZTs7c0JBQWY7d0JBQUEsQUFDSztBQURMO0FBQUEsT0FsQkosQUFrQkk7aUJBbEJKO2FBRGUsQUFDZjtBQUFBO0FBREo7O0FBa0VBLFdBQUEsQUFBVyxjQUFYLEFBQXlCO0FBQ3pCLFdBQUEsQUFBVztBQUFYLEFBQXVCLEFBQ1QsQUFHZDtBQUp1QixBQUNuQjs7a0JBR0osQUFBZSIsImZpbGUiOiJIb21lLmxheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvVEovcHJvamVjdHMvc2ltcGx5LXNvY2lhbCJ9