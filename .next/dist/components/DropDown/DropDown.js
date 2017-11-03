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
                css: '.drop-down.jsx-3508283684{position:relative;}.drop-down__trigger.jsx-3508283684{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.drop-down__container.jsx-3508283684{display:none;min-width:125px;padding:12px 0;position:absolute;top:calc(100% + 15px);right:-7px;border-radius:0 0 3px 3px;background:#dee1e5;}.drop-down__container.is-open.jsx-3508283684{display:block;}.drop-down__container.jsx-3508283684::before{content:"\u25BE";-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);position:absolute;bottom:calc(100% + 1px);right:8px;color:#dee1e5;line-height:.1;}'
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