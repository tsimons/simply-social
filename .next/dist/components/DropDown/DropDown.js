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
                className: 'jsx-1860475247' + ' ' + ((0, _classnames2.default)('drop-down', className) || ''),
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, _react2.default.createElement('div', { onClick: this.toggle, className: 'jsx-1860475247' + ' ' + 'drop-down__trigger',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, trigger, '\u25BE'), _react2.default.createElement('div', {
                className: 'jsx-1860475247' + ' ' + ((0, _classnames2.default)("drop-down__container", {
                    'is-open': isOpen
                }) || ''),
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, children), _react2.default.createElement(_style2.default, {
                styleId: '1860475247',
                css: '.drop-down.jsx-1860475247{position:relative;}.drop-down__container.jsx-1860475247{display:none;min-width:125px;padding:12px 0;position:absolute;top:calc(100% + 15px);right:-7px;border-radius:0 0 3px 3px;background:#dee1e5;}.drop-down__container.is-open.jsx-1860475247{display:block;}.drop-down__container.jsx-1860475247::before{content:"\u25BE";-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);position:absolute;bottom:100%;right:8px;color:#dee1e5;line-height:.1;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRHJvcERvd24vRHJvcERvd24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEM0QixBQUcyQyxBQUlMLEFBZ0JDLEFBSUYsWUFHYSxDQXJCVCxDQWVwQixJQXBCQSxXQU9tQixlQUVHLGtCQUNJLHNCQUNYLFdBRWUsSUFlUixrQkFDTixJQWRPLFFBZVQsVUFFSSxDQWhCbEIsYUFpQm1CLGVBQ25CIiwiZmlsZSI6ImNvbXBvbmVudHMvRHJvcERvd24vRHJvcERvd24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL1RKL3Byb2plY3RzL3NpbXBseS1zb2NpYWwiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbm9kZSwgc3RyaW5nIH0gZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJvcERvd24gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBkaXNwbGF5TmFtZSA9ICdEcm9wRG93bic7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgY2hpbGRyZW46IG5vZGUsXG4gICAgICAgIHRyaWdnZXI6IG5vZGUsXG4gICAgICAgIGNsYXNzTmFtZTogc3RyaW5nXG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaXNPcGVuIDogZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudG9nZ2xlID0gdGhpcy50b2dnbGUuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICB0b2dnbGUgKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7IGlzT3BlbjogIXRoaXMuc3RhdGUuaXNPcGVuIH0pKTtcbiAgICB9XG4gICAgXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHRyaWdnZXIsIGNoaWxkcmVuLCBjbGFzc05hbWUgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHsgaXNPcGVuIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnZHJvcC1kb3duJywgY2xhc3NOYW1lKX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wLWRvd25fX3RyaWdnZXJcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZX0+XG4gICAgICAgICAgICAgICAgICAgIHsgdHJpZ2dlciB9XG4gICAgICAgICAgICAgICAgICAgICYjeDI1QkU7XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcImRyb3AtZG93bl9fY29udGFpbmVyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgJ2lzLW9wZW4nOiBpc09wZW5cbiAgICAgICAgICAgICAgICB9KX0+XG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgLmRyb3AtZG93biB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuZHJvcC1kb3duX19jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxMjVweDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTJweCAwO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IGNhbGMoMTAwJSArIDE1cHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IC03cHg7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAzcHggM3B4O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZGVlMWU1O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmRyb3AtZG93bl9fY29udGFpbmVyLmlzLW9wZW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuZHJvcC1kb3duX19jb250YWluZXI6OmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIuKWvlwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgdXAgdXRmIHNtYWxsIGFycm93IGRvZXMgbm90IG1hdGNoIHRoZSB3aWR0aCBvZiB0aGlzIG9uZSAjZmFrZWl0dGlseW91bWFrZWl0XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogOHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2RlZTFlNTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAuMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn0iXX0= */\n/*@ sourceURL=components/DropDown/DropDown.js */'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRHJvcERvd24vRHJvcERvd24uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJub2RlIiwic3RyaW5nIiwiY2xhc3NOYW1lcyIsIkRyb3BEb3duIiwicHJvcHMiLCJzdGF0ZSIsImlzT3BlbiIsInRvZ2dsZSIsImJpbmQiLCJzZXRTdGF0ZSIsInRyaWdnZXIiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsImRpc3BsYXlOYW1lIiwicHJvcFR5cGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNOztBQUNmLEFBQU87Ozs7Ozs7OztJLEFBRWM7c0NBUWpCOztzQkFBQSxBQUFZLE9BQU87NENBQUE7OzhJQUFBLEFBQ1QsQUFDTjs7Y0FBQSxBQUFLO29CQUFMLEFBQWEsQUFDQSxBQUdiO0FBSmEsQUFDVDs7Y0FHSixBQUFLLFNBQVMsTUFBQSxBQUFLLE9BQUwsQUFBWSxLQU5YLEFBTWY7ZUFDSDs7Ozs7aUNBRVM7eUJBQ047O2lCQUFBLEFBQUssU0FBUyxZQUFBO3VCQUFPLEVBQUUsUUFBUSxDQUFDLE9BQUEsQUFBSyxNQUF2QixBQUFPLEFBQXNCO0FBQTNDLEFBQ0g7Ozs7aUNBRVE7eUJBQ29DLEtBRHBDLEFBQ3lDO2dCQUR6QyxBQUNHLGlCQURILEFBQ0c7Z0JBREgsQUFDWSxrQkFEWixBQUNZO2dCQURaLEFBQ3NCLG1CQUR0QixBQUNzQjtnQkFEdEIsQUFFRyxTQUFXLEtBRmQsQUFFbUIsTUFGbkIsQUFFRyxBQUVSOzttQ0FDSSxjQUFBO3FEQUFnQiwwQkFBQSxBQUFXLGFBQTNCLEFBQWdCLEFBQXdCLGNBQXhDOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLGNBQUEsU0FBb0MsU0FBUyxLQUE3QyxBQUFrRCw0Q0FBbEQsQUFBZTs7OEJBQWY7Z0NBQUEsQUFDTTtBQUROO2VBQUEsU0FESixBQUNJLEFBS0EsMkJBQUEsY0FBQTsrRUFBZ0IsQUFBVzsrQkFBM0IsQUFBZ0IsQUFBbUMsQUFDcEM7QUFEb0MsQUFDL0MsaUJBRFksS0FBaEI7OzhCQUFBO2dDQUFBLEFBR0s7QUFITDtBQUFBLGVBTkosQUFNSTt5QkFOSjtxQkFESixBQUNJLEFBcURQO0FBckRPOzs7OztBQTFCMEIsQTs7QUFBakIsQSxTLEFBQ1YsY0FBYyxBO0FBREosQSxTQUVWLEE7QUFBWSxBQUNMLEFBQ1Y7QUFGZSxBQUVOLEFBQ1Q7QUFIZSxBQUdKLEE7QUFISSxBQUNmO2tCQUhhLEEiLCJmaWxlIjoiRHJvcERvd24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL1RKL3Byb2plY3RzL3NpbXBseS1zb2NpYWwifQ==