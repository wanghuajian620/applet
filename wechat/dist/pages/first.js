'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'jotting'
    }, _this.data = {
      heart: '../image/心.png',
      essay: '',
      index: ''
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(e) {
      var self = this;
      self.index = e.index; // 令data里面的index为 virgo传过来的是同一篇文章的索引
      _wepy2.default.request({
        url: 'http://127.0.0.1:7001/virgo',
        method: 'POST',
        success: function success(res) {
          self.essay = res.data[self.index].essay; // 让data中的essay等于后台数据库表格中的essay，以便显示出来
          self.setData({
            essay: res.data[self.index].essay
          });
        }
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/first'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpcnN0LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJoZWFydCIsImVzc2F5IiwiaW5kZXgiLCJtZXRob2RzIiwiZSIsInNlbGYiLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwic3VjY2VzcyIsInJlcyIsInNldERhdGEiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsYUFBTyxnQkFERjtBQUVMQyxhQUFPLEVBRkY7QUFHTEMsYUFBTztBQUhGLEssUUFLUEMsTyxHQUFVLEU7Ozs7OzJCQUVIQyxDLEVBQUc7QUFDUixVQUFJQyxPQUFPLElBQVg7QUFDQUEsV0FBS0gsS0FBTCxHQUFhRSxFQUFFRixLQUFmLENBRlEsQ0FFWTtBQUNwQixxQkFBS0ksT0FBTCxDQUFhO0FBQ1hDLGFBQUssNkJBRE07QUFFWEMsZ0JBQVEsTUFGRztBQUdYQyxpQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCTCxlQUFLSixLQUFMLEdBQWFTLElBQUlYLElBQUosQ0FBU00sS0FBS0gsS0FBZCxFQUFxQkQsS0FBbEMsQ0FEcUIsQ0FDa0I7QUFDdkNJLGVBQUtNLE9BQUwsQ0FBYTtBQUNYVixtQkFBT1MsSUFBSVgsSUFBSixDQUFTTSxLQUFLSCxLQUFkLEVBQXFCRDtBQURqQixXQUFiO0FBR0Q7QUFSVSxPQUFiO0FBVUQ7Ozs7RUF4QmdDLGVBQUtXLEk7O2tCQUFuQmhCLEsiLCJmaWxlIjoiZmlyc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnam90dGluZydcbiAgfVxuICBkYXRhID0ge1xuICAgIGhlYXJ0OiAnLi4vaW1hZ2Uv5b+DLnBuZycsXG4gICAgZXNzYXk6ICcnLFxuICAgIGluZGV4OiAnJ1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gIH1cbiAgb25Mb2FkKGUpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBzZWxmLmluZGV4ID0gZS5pbmRleC8vIOS7pGRhdGHph4zpnaLnmoRpbmRleOS4uiB2aXJnb+S8oOi/h+adpeeahOaYr+WQjOS4gOevh+aWh+eroOeahOe0ouW8lVxuICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvdmlyZ28nLFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgc2VsZi5lc3NheSA9IHJlcy5kYXRhW3NlbGYuaW5kZXhdLmVzc2F5Ly8g6K6pZGF0YeS4reeahGVzc2F5562J5LqO5ZCO5Y+w5pWw5o2u5bqT6KGo5qC85Lit55qEZXNzYXnvvIzku6Xkvr/mmL7npLrlh7rmnaVcbiAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICBlc3NheTogcmVzLmRhdGFbc2VsZi5pbmRleF0uZXNzYXlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=