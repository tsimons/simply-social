'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/TJ/projects/simply-social/components/Modal/Modal.js';


var Modal = function Modal(_ref) {
    var children = _ref.children,
        onClose = _ref.onClose;
    return _react2.default.createElement('div', {
        className: 'jsx-2603556053' + ' ' + 'modal',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 5
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-2603556053' + ' ' + 'modal__shield',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    }), _react2.default.createElement('div', {
        className: 'jsx-2603556053' + ' ' + 'modal__container',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 7
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-2603556053' + ' ' + 'modal__content',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    }, _react2.default.createElement('a', { href: 'javascript:void(0)', onClick: onClose, className: 'jsx-2603556053' + ' ' + 'modal__close-btn',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }, '\xD7'), children)), _react2.default.createElement(_style2.default, {
        styleId: '2603556053',
        css: '.modal.jsx-2603556053{position:fixed;top:0;right:0;bottom:0;left:0;z-index:999;}.modal__shield.jsx-2603556053{background:rgba(0,0,0,.8);-webkit-filter:blur(5px);filter:blur(5px);position:absolute;height:100%;width:100%;}.modal__container.jsx-2603556053{position:absolute;top:183px;left:0;right:0;text-align:center;}.modal__content.jsx-2603556053{position:relative;display:inline-block;text-align:left;}.modal__close-btn.jsx-2603556053{position:absolute;left:calc(100% + 4px);bottom:calc(100% + 4px);display:inline-block;height:21px;width:21px;padding:8.5px 5.5px;color:#70767f;font-size:16px;border:1px solid #70767f;border-radius:21px;-webkit-transition:color .25s,border .25s;transition:color .25s,border .25s;text-align:center;text-decoration:none;line-height:0;}.modal__close-btn.jsx-2603556053:hover,.modal__close-btn.jsx-2603556053:focus{color:white;border-color:white;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTW9kYWwvTW9kYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYW9CLEFBR2dDLEFBU2MsQUFRWCxBQVFBLEFBTUEsQUF5Qk4sWUFDTyxHQXhEYixHQWlCSSxBQVFXLEFBTUMsR0E5QmQsS0FRUyxFQVNWLENBaEJFLEVBdURiLElBdENZLEdBaEJELENBdUJTLENBTVEsR0FaTixFQWhCTixVQXVCaEIsRUF0QkEsSUFnQkEsR0FheUIsSUF4QkgsaUJBeUJOLENBeEJBLFdBeUJELENBeEJBLFVBMEJTLENBekJ4QixtQkEyQmtCLGNBQ0MsZUFFVSx5QkFDTixtQkFFZ0IsNEVBRWpCLGtCQUNHLHFCQUNQLGNBQ2xCIiwiZmlsZSI6ImNvbXBvbmVudHMvTW9kYWwvTW9kYWwuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL1RKL3Byb2plY3RzL3NpbXBseS1zb2NpYWwiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbm9kZSwgZnVuYyB9IGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jb25zdCBNb2RhbCA9ICh7IGNoaWxkcmVuLCBvbkNsb3NlIH0pID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfX3NoaWVsZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX19jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgY2xhc3NOYW1lPVwibW9kYWxfX2Nsb3NlLWJ0blwiIG9uQ2xpY2s9e29uQ2xvc2V9PiYjMjE1OzwvYT5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLm1vZGFsIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDk5OTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1vZGFsX19zaGllbGQge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjgpO1xuICAgICAgICAgICAgICAgIGZpbHRlcjogYmx1cig1cHgpO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tb2RhbF9fY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAxODNweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1vZGFsX19jb250ZW50IHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tb2RhbF9fY2xvc2UtYnRuIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDogY2FsYygxMDAlICsgNHB4KTtcbiAgICAgICAgICAgICAgICBib3R0b206IGNhbGMoMTAwJSArIDRweCk7XG5cbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMXB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyMXB4O1xuXG4gICAgICAgICAgICAgICAgcGFkZGluZzogOC41cHggNS41cHg7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29sb3I6ICM3MDc2N2Y7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM3MDc2N2Y7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjFweDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAuMjVzLCBib3JkZXIgLjI1cztcblxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tb2RhbF9fY2xvc2UtYnRuOmhvdmVyLFxuICAgICAgICAgICAgLm1vZGFsX19jbG9zZS1idG46Zm9jdXMge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4pO1xuXG5Nb2RhbC5kaXNwbGF5TmFtZSA9ICdNb2RhbCc7XG5Nb2RhbC5wcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IG5vZGUuaXNSZXF1aXJlZCxcbiAgICBvbkNsb3NlOiBmdW5jLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsOyJdfQ== */\n/*@ sourceURL=components/Modal/Modal.js */'
    }));
};

Modal.displayName = 'Modal';
Modal.propTypes = {
    children: _propTypes.node.isRequired,
    onClose: _propTypes.func.isRequired
};

exports.default = Modal;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTW9kYWwvTW9kYWwuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJub2RlIiwiZnVuYyIsIk1vZGFsIiwiY2hpbGRyZW4iLCJvbkNsb3NlIiwiZGlzcGxheU5hbWUiLCJwcm9wVHlwZXMiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVMsQUFBTTs7Ozs7OztBQUVmLElBQU0sUUFBUSxTQUFSLEFBQVEsWUFBQTtRQUFBLEFBQUcsZ0JBQUgsQUFBRztRQUFILEFBQWEsZUFBYixBQUFhOzJCQUN2QixjQUFBOzRDQUFBLEFBQWU7O3NCQUFmO3dCQUFBLEFBQ0k7QUFESjtBQUFBLEtBQUE7NENBQ0ksQUFBZTs7c0JBQWY7d0JBREosQUFDSSxBQUNBO0FBREE7QUFBQSx3QkFDQSxjQUFBOzRDQUFBLEFBQWU7O3NCQUFmO3dCQUFBLEFBQ0k7QUFESjtBQUFBLHVCQUNJLGNBQUE7NENBQUEsQUFBZTs7c0JBQWY7d0JBQUEsQUFDSTtBQURKO0FBQUEsdUJBQ0ksY0FBQSxPQUFHLE1BQUgsQUFBUSxzQkFBa0QsU0FBMUQsQUFBbUUsNkNBQW5FLEFBQXVDOztzQkFBdkM7d0JBQUE7QUFBQTtPQURKLEFBQ0ksQUFDQyxTQUxiLEFBRUksQUFDSTtpQkFIUjthQURVLEFBQ1Y7QUFBQTtBQURKOztBQTJFQSxNQUFBLEFBQU0sY0FBTixBQUFvQjtBQUNwQixNQUFBLEFBQU07Y0FDUSxnQkFESSxBQUNDLEFBQ2Y7YUFBUyxnQkFGYixBQUFrQixBQUVBLEFBR2xCO0FBTGtCLEFBQ2Q7O2tCQUlKLEFBQWUiLCJmaWxlIjoiTW9kYWwuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL1RKL3Byb2plY3RzL3NpbXBseS1zb2NpYWwifQ==