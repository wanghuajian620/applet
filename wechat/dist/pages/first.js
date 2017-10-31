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
    value: function onLoad(data) {
      var self = this;
      self.index = data.index;
      console.log(data.index);
      _wepy2.default.request({
        url: 'http://127.0.0.1:7001/virgo',
        method: 'POST',
        success: function success(res) {
          self.essay = res.data[self.index];
          self.setData({
            essay: res.data[self.index]
          });
          console.log(self.index);
        }
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/first'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpcnN0LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJoZWFydCIsImVzc2F5IiwiaW5kZXgiLCJtZXRob2RzIiwic2VsZiIsImNvbnNvbGUiLCJsb2ciLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwic3VjY2VzcyIsInJlcyIsInNldERhdGEiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsYUFBTyxnQkFERjtBQUVMQyxhQUFPLEVBRkY7QUFHTEMsYUFBTztBQUhGLEssUUFLUEMsTyxHQUFVLEU7Ozs7OzJCQUVISixJLEVBQU07QUFDWCxVQUFJSyxPQUFPLElBQVg7QUFDQUEsV0FBS0YsS0FBTCxHQUFhSCxLQUFLRyxLQUFsQjtBQUNBRyxjQUFRQyxHQUFSLENBQVlQLEtBQUtHLEtBQWpCO0FBQ0EscUJBQUtLLE9BQUwsQ0FBYTtBQUNYQyxhQUFLLDZCQURNO0FBRVhDLGdCQUFRLE1BRkc7QUFHWEMsaUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQlAsZUFBS0gsS0FBTCxHQUFhVSxJQUFJWixJQUFKLENBQVNLLEtBQUtGLEtBQWQsQ0FBYjtBQUNBRSxlQUFLUSxPQUFMLENBQWE7QUFDWFgsbUJBQU9VLElBQUlaLElBQUosQ0FBU0ssS0FBS0YsS0FBZDtBQURJLFdBQWI7QUFHQUcsa0JBQVFDLEdBQVIsQ0FBWUYsS0FBS0YsS0FBakI7QUFDRDtBQVRVLE9BQWI7QUFXRDs7OztFQTFCZ0MsZUFBS1csSTs7a0JBQW5CakIsSyIsImZpbGUiOiJmaXJzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdqb3R0aW5nJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgaGVhcnQ6ICcuLi9pbWFnZS/lv4MucG5nJyxcbiAgICBlc3NheTogJycsXG4gICAgaW5kZXg6ICcnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgfVxuICBvbkxvYWQoZGF0YSkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHNlbGYuaW5kZXggPSBkYXRhLmluZGV4XG4gICAgY29uc29sZS5sb2coZGF0YS5pbmRleClcbiAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL3ZpcmdvJyxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIHNlbGYuZXNzYXkgPSByZXMuZGF0YVtzZWxmLmluZGV4XVxuICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgIGVzc2F5OiByZXMuZGF0YVtzZWxmLmluZGV4XVxuICAgICAgICB9KVxuICAgICAgICBjb25zb2xlLmxvZyhzZWxmLmluZGV4KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==