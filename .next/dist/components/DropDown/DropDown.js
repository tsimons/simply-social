'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/TJ/projects/simply-social/components/DropDown/DropDown.js';


var DropDown = function (_Component) {
    (0, _inherits3.default)(DropDown, _Component);

    function DropDown(props) {
        (0, _classCallCheck3.default)(this, DropDown);

        var _this = (0, _possibleConstructorReturn3.default)(this, (DropDown.__proto__ || (0, _getPrototypeOf2.default)(DropDown)).call(this, props));

        _this.state = {
            isOpen: false
        };

        _this.toggle = _this.toggle.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(DropDown, [{
        key: 'toggle',
        value: function toggle() {
            var _this2 = this;

            this.setState(function () {
                return { isOpen: !_this2.state.isOpen };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                trigger = _props.trigger,
                children = _props.children,
                className = _props.className;
            var isOpen = this.state.isOpen;

            return _react2.default.createElement('div', {
                className: 'jsx-3508283684' + ' ' + ((0, _classnames2.default)('drop-down', className) || ''),
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, _react2.default.createElement('div', { onClick: this.toggle, className: 'jsx-3508283684' + ' ' + 'drop-down__trigger',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, trigger, '\u25BE'), _react2.default.createElement('div', {
                className: 'jsx-3508283684' + ' ' + ((0, _classnames2.default)("drop-down__container", {
                    'is-open': isOpen
                }) || ''),
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, children), _react2.default.createElement(_style2.default, {
                styleId: '3508283684',
                css: '.drop-down.jsx-3508283684{position:relative;}.drop-down__trigger.jsx-3508283684{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.drop-down__container.jsx-3508283684{display:none;min-width:125px;padding:12px 0;position:absolute;top:calc(100% + 15px);right:-7px;border-radius:0 0 3px 3px;background:#dee1e5;}.drop-down__container.is-open.jsx-3508283684{display:block;}.drop-down__container.jsx-3508283684::before{content:"\u25BE";-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);position:absolute;bottom:calc(100% + 1px);right:8px;color:#dee1e5;line-height:.1;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRHJvcERvd24vRHJvcERvd24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEM0QixBQUcyQyxBQUlMLEFBTUEsQUFnQkMsQUFJRixZQUdhLENBckJULENBZXBCLElBMUJBLFdBYW1CLGVBRUcsa0JBQ0ksWUFaSCxVQWFSLFdBRWUsSUFlUixrQkFDTSxJQWRMLG1CQUN2QixDQWNjLEVBL0JTLFFBaUNMLGNBQ0MsZUFDbkIsd0RBbENBIiwiZmlsZSI6ImNvbXBvbmVudHMvRHJvcERvd24vRHJvcERvd24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL1RKL3Byb2plY3RzL3NpbXBseS1zb2NpYWwiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbm9kZSwgc3RyaW5nIH0gZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJvcERvd24gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBkaXNwbGF5TmFtZSA9ICdEcm9wRG93bic7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgY2hpbGRyZW46IG5vZGUsXG4gICAgICAgIHRyaWdnZXI6IG5vZGUsXG4gICAgICAgIGNsYXNzTmFtZTogc3RyaW5nXG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaXNPcGVuIDogZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudG9nZ2xlID0gdGhpcy50b2dnbGUuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICB0b2dnbGUgKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7IGlzT3BlbjogIXRoaXMuc3RhdGUuaXNPcGVuIH0pKTtcbiAgICB9XG4gICAgXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHRyaWdnZXIsIGNoaWxkcmVuLCBjbGFzc05hbWUgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHsgaXNPcGVuIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnZHJvcC1kb3duJywgY2xhc3NOYW1lKX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wLWRvd25fX3RyaWdnZXJcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZX0+XG4gICAgICAgICAgICAgICAgICAgIHsgdHJpZ2dlciB9XG4gICAgICAgICAgICAgICAgICAgICYjeDI1QkU7XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcImRyb3AtZG93bl9fY29udGFpbmVyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgJ2lzLW9wZW4nOiBpc09wZW5cbiAgICAgICAgICAgICAgICB9KX0+XG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgLmRyb3AtZG93biB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuZHJvcC1kb3duX190cmlnZ2VyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5kcm9wLWRvd25fX2NvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDEyNXB4O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogY2FsYygxMDAlICsgMTVweCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogLTdweDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDNweCAzcHg7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNkZWUxZTU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuZHJvcC1kb3duX19jb250YWluZXIuaXMtb3BlbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5kcm9wLWRvd25fX2NvbnRhaW5lcjo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwi4pa+XCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSB1cCB1dGYgc21hbGwgYXJyb3cgZG9lcyBub3QgbWF0Y2ggdGhlIHdpZHRoIG9mIHRoaXMgb25lICNmYWtlaXR0aWx5b3VtYWtlaXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogY2FsYygxMDAlICsgMXB4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiA4cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZGVlMWU1O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IC4xO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufSJdfQ== */\n/*@ sourceURL=components/DropDown/DropDown.js */'
            }));
        }
    }]);

    return DropDown;
}(_react.Component);

DropDown.displayName = 'DropDown';
DropDown.propTypes = {
    children: _propTypes.node,
    trigger: _propTypes.node,
    className: _propTypes.string
};
exports.default = DropDown;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRHJvcERvd24vRHJvcERvd24uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJub2RlIiwic3RyaW5nIiwiY2xhc3NOYW1lcyIsIkRyb3BEb3duIiwicHJvcHMiLCJzdGF0ZSIsImlzT3BlbiIsInRvZ2dsZSIsImJpbmQiLCJzZXRTdGF0ZSIsInRyaWdnZXIiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsImRpc3BsYXlOYW1lIiwicHJvcFR5cGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNOztBQUNmLEFBQU87Ozs7Ozs7OztJLEFBRWM7c0NBUWpCOztzQkFBQSxBQUFZLE9BQU87NENBQUE7OzhJQUFBLEFBQ1QsQUFDTjs7Y0FBQSxBQUFLO29CQUFMLEFBQWEsQUFDQSxBQUdiO0FBSmEsQUFDVDs7Y0FHSixBQUFLLFNBQVMsTUFBQSxBQUFLLE9BQUwsQUFBWSxLQU5YLEFBTWY7ZUFDSDs7Ozs7aUNBRVM7eUJBQ047O2lCQUFBLEFBQUssU0FBUyxZQUFBO3VCQUFPLEVBQUUsUUFBUSxDQUFDLE9BQUEsQUFBSyxNQUF2QixBQUFPLEFBQXNCO0FBQTNDLEFBQ0g7Ozs7aUNBRVE7eUJBQ29DLEtBRHBDLEFBQ3lDO2dCQUR6QyxBQUNHLGlCQURILEFBQ0c7Z0JBREgsQUFDWSxrQkFEWixBQUNZO2dCQURaLEFBQ3NCLG1CQUR0QixBQUNzQjtnQkFEdEIsQUFFRyxTQUFXLEtBRmQsQUFFbUIsTUFGbkIsQUFFRyxBQUVSOzttQ0FDSSxjQUFBO3FEQUFnQiwwQkFBQSxBQUFXLGFBQTNCLEFBQWdCLEFBQXdCLGNBQXhDOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLGNBQUEsU0FBb0MsU0FBUyxLQUE3QyxBQUFrRCw0Q0FBbEQsQUFBZTs7OEJBQWY7Z0NBQUEsQUFDTTtBQUROO2VBQUEsU0FESixBQUNJLEFBS0EsMkJBQUEsY0FBQTsrRUFBZ0IsQUFBVzsrQkFBM0IsQUFBZ0IsQUFBbUMsQUFDcEM7QUFEb0MsQUFDL0MsaUJBRFksS0FBaEI7OzhCQUFBO2dDQUFBLEFBR0s7QUFITDtBQUFBLGVBTkosQUFNSTt5QkFOSjtxQkFESixBQUNJLEFBMkRQO0FBM0RPOzs7OztBQTFCMEIsQTs7QUFBakIsQSxTLEFBQ1YsY0FBYyxBO0FBREosQSxTQUVWLEE7QUFBWSxBQUNMLEFBQ1Y7QUFGZSxBQUVOLEFBQ1Q7QUFIZSxBQUdKLEE7QUFISSxBQUNmO2tCQUhhLEEiLCJmaWxlIjoiRHJvcERvd24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL1RKL3Byb2plY3RzL3NpbXBseS1zb2NpYWwifQ==