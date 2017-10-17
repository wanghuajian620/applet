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
      navigationBarTitleText: '博客'
    }, _this.data = {
      avatarUrl: '',
      // nickName: '',
      cat: '../image/github.png',
      email: '../image/邮箱-2.png',
      color1: 'black',
      color2: 'black'
    }, _this.methods = {
      github: function github() {
        _wepy2.default.navigateTo({
          url: './github'
        });
        var self = this;
        self.color1 = 'green';
      },
      email: function email() {
        _wepy2.default.navigateTo({
          url: './email'
        });
        var self = this;
        self.color2 = 'green';
      },
      onShareAppMessage: function onShareAppMessage() {
        return {
          title: '博客',
          path: '/pages/me'
        };
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      _wepy2.default.getUserInfo({
        success: function success(res) {
          // var userInfo = res.userInfo
          // self.nickName = res.userInfo.nickName
          self.avatarUrl = res.userInfo.avatarUrl;
        }
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/me'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJhdmF0YXJVcmwiLCJjYXQiLCJlbWFpbCIsImNvbG9yMSIsImNvbG9yMiIsIm1ldGhvZHMiLCJnaXRodWIiLCJuYXZpZ2F0ZVRvIiwidXJsIiwic2VsZiIsIm9uU2hhcmVBcHBNZXNzYWdlIiwidGl0bGUiLCJwYXRoIiwiZ2V0VXNlckluZm8iLCJzdWNjZXNzIiwicmVzIiwidXNlckluZm8iLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsaUJBQVcsRUFETjtBQUVMO0FBQ0FDLFdBQUsscUJBSEE7QUFJTEMsYUFBTyxtQkFKRjtBQUtMQyxjQUFRLE9BTEg7QUFNTEMsY0FBUTtBQU5ILEssUUFRUEMsTyxHQUFVO0FBQ1JDLFlBRFEsb0JBQ0M7QUFDUCx1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHQSxZQUFJQyxPQUFPLElBQVg7QUFDQUEsYUFBS04sTUFBTCxHQUFjLE9BQWQ7QUFDRCxPQVBPO0FBUVJELFdBUlEsbUJBUUE7QUFDTix1QkFBS0ssVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHQSxZQUFJQyxPQUFPLElBQVg7QUFDQUEsYUFBS0wsTUFBTCxHQUFjLE9BQWQ7QUFDRCxPQWRPO0FBZVJNLHVCQWZRLCtCQWVZO0FBQ2xCLGVBQU87QUFDTEMsaUJBQU8sSUFERjtBQUVMQyxnQkFBTTtBQUZELFNBQVA7QUFJRDtBQXBCTyxLOzs7Ozs2QkFzQkQ7QUFDUCxVQUFJSCxPQUFPLElBQVg7QUFDQSxxQkFBS0ksV0FBTCxDQUFpQjtBQUNmQyxlQURlLG1CQUNQQyxHQURPLEVBQ0Y7QUFDWDtBQUNBO0FBQ0FOLGVBQUtULFNBQUwsR0FBaUJlLElBQUlDLFFBQUosQ0FBYWhCLFNBQTlCO0FBQ0Q7QUFMYyxPQUFqQjtBQU9EOzs7O0VBM0NnQyxlQUFLaUIsSTs7a0JBQW5CckIsSyIsImZpbGUiOiJtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WNmuWuoidcbiAgfVxuICBkYXRhID0ge1xuICAgIGF2YXRhclVybDogJycsXG4gICAgLy8gbmlja05hbWU6ICcnLFxuICAgIGNhdDogJy4uL2ltYWdlL2dpdGh1Yi5wbmcnLFxuICAgIGVtYWlsOiAnLi4vaW1hZ2Uv6YKu566xLTIucG5nJyxcbiAgICBjb2xvcjE6ICdibGFjaycsXG4gICAgY29sb3IyOiAnYmxhY2snXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBnaXRodWIoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL2dpdGh1YidcbiAgICAgIH0pXG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuY29sb3IxID0gJ2dyZWVuJ1xuICAgIH0sXG4gICAgZW1haWwoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL2VtYWlsJ1xuICAgICAgfSlcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5jb2xvcjIgPSAnZ3JlZW4nXG4gICAgfSxcbiAgICBvblNoYXJlQXBwTWVzc2FnZSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlOiAn5Y2a5a6iJyxcbiAgICAgICAgcGF0aDogJy9wYWdlcy9tZSdcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHdlcHkuZ2V0VXNlckluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgLy8gdmFyIHVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXG4gICAgICAgIC8vIHNlbGYubmlja05hbWUgPSByZXMudXNlckluZm8ubmlja05hbWVcbiAgICAgICAgc2VsZi5hdmF0YXJVcmwgPSByZXMudXNlckluZm8uYXZhdGFyVXJsXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIl19