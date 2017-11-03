'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _store = require('../../modules/store');

var _store2 = _interopRequireDefault(_store);

var _Home = require('../../layouts/Home');

var _Home2 = _interopRequireDefault(_Home);

var _Post = require('../../components/Post');

var _Post2 = _interopRequireDefault(_Post);

var _mockPosts = require('../../mockPosts');

var _mockPosts2 = _interopRequireDefault(_mockPosts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/TJ/projects/simply-social/pages/home/photos.js?entry';


var Photos = function Photos() {
    return _react2.default.createElement(_Home2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    }, _react2.default.createElement('div', { style: { height: _mockPosts2.default.length * 250 }, className: 'jsx-2597281251' + ' ' + 'posts posts--tile',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 13
        }
    }, _mockPosts2.default.filter(function (p) {
        return p.post.image;
    }).map(function (p) {
        return _react2.default.createElement('div', {
            className: 'jsx-2597281251' + ' ' + 'post-container',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 15
            }
        }, _react2.default.createElement(_Post2.default, { key: p.post.message, post: p.post, author: p.author, liked: p.liked, layout: 'tile', __source: {
                fileName: _jsxFileName,
                lineNumber: 16
            }
        }));
    })), _react2.default.createElement(_style2.default, {
        styleId: '2597281251',
        css: '.posts.jsx-2597281251{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;max-width:599px;margin:0 auto;padding:50px 12px 0;}.posts--tile.jsx-2597281251{max-width:1199px;}.posts--tile.jsx-2597281251 .post-container.jsx-2597281251{max-width:375px;margin:0 0 25px 25px;max-height:500px;}.posts--tile.jsx-2597281251 .post-container.jsx-2597281251:nth-child(3n + 1),.posts--tile.jsx-2597281251 .post-container.jsx-2597281251:first-child{margin-left:0;}'
    }));
};

exports.default = (0, _nextReduxWrapper2.default)(_store2.default)(Photos);