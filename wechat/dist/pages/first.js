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
      self.index = e.index;
      _wepy2.default.request({
        url: 'http://127.0.0.1:7001/virgo',
        method: 'POST',
        success: function success(res) {
          self.essay = res.data[self.index];
          self.setData({
            essay: res.data[self.index]
          });
        }
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/first'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpcnN0LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJoZWFydCIsImVzc2F5IiwiaW5kZXgiLCJtZXRob2RzIiwiZSIsInNlbGYiLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwic3VjY2VzcyIsInJlcyIsInNldERhdGEiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsYUFBTyxnQkFERjtBQUVMQyxhQUFPLEVBRkY7QUFHTEMsYUFBTztBQUhGLEssUUFLUEMsTyxHQUFVLEU7Ozs7OzJCQUVIQyxDLEVBQUc7QUFDUixVQUFJQyxPQUFPLElBQVg7QUFDQUEsV0FBS0gsS0FBTCxHQUFhRSxFQUFFRixLQUFmO0FBQ0EscUJBQUtJLE9BQUwsQ0FBYTtBQUNYQyxhQUFLLDZCQURNO0FBRVhDLGdCQUFRLE1BRkc7QUFHWEMsaUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQkwsZUFBS0osS0FBTCxHQUFhUyxJQUFJWCxJQUFKLENBQVNNLEtBQUtILEtBQWQsQ0FBYjtBQUNBRyxlQUFLTSxPQUFMLENBQWE7QUFDWFYsbUJBQU9TLElBQUlYLElBQUosQ0FBU00sS0FBS0gsS0FBZDtBQURJLFdBQWI7QUFHRDtBQVJVLE9BQWI7QUFVRDs7OztFQXhCZ0MsZUFBS1UsSTs7a0JBQW5CaEIsSyIsImZpbGUiOiJmaXJzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdqb3R0aW5nJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgaGVhcnQ6ICcuLi9pbWFnZS/lv4MucG5nJyxcbiAgICBlc3NheTogJycsXG4gICAgaW5kZXg6ICcnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgfVxuICBvbkxvYWQoZSkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHNlbGYuaW5kZXggPSBlLmluZGV4XG4gICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS92aXJnbycsXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBzZWxmLmVzc2F5ID0gcmVzLmRhdGFbc2VsZi5pbmRleF1cbiAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICBlc3NheTogcmVzLmRhdGFbc2VsZi5pbmRleF1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=