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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJhdmF0YXJVcmwiLCJjYXQiLCJlbWFpbCIsImNvbG9yMSIsImNvbG9yMiIsIm1ldGhvZHMiLCJnaXRodWIiLCJuYXZpZ2F0ZVRvIiwidXJsIiwic2VsZiIsImdldFVzZXJJbmZvIiwic3VjY2VzcyIsInJlcyIsInVzZXJJbmZvIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLGlCQUFXLEVBRE47QUFFTDtBQUNBQyxXQUFLLHFCQUhBO0FBSUxDLGFBQU8sbUJBSkY7QUFLTEMsY0FBUSxPQUxIO0FBTUxDLGNBQVE7QUFOSCxLLFFBUVBDLE8sR0FBVTtBQUNSQyxZQURRLG9CQUNDO0FBQ1AsdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0EsWUFBSUMsT0FBTyxJQUFYO0FBQ0FBLGFBQUtOLE1BQUwsR0FBYyxPQUFkO0FBQ0QsT0FQTztBQVFSRCxXQVJRLG1CQVFBO0FBQ04sdUJBQUtLLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0EsWUFBSUMsT0FBTyxJQUFYO0FBQ0FBLGFBQUtMLE1BQUwsR0FBYyxPQUFkO0FBQ0Q7QUFkTyxLOzs7Ozs2QkFnQkQ7QUFDUCxVQUFJSyxPQUFPLElBQVg7QUFDQSxxQkFBS0MsV0FBTCxDQUFpQjtBQUNmQyxlQURlLG1CQUNQQyxHQURPLEVBQ0Y7QUFDWDtBQUNBO0FBQ0FILGVBQUtULFNBQUwsR0FBaUJZLElBQUlDLFFBQUosQ0FBYWIsU0FBOUI7QUFDRDtBQUxjLE9BQWpCO0FBT0Q7Ozs7RUFyQ2dDLGVBQUtjLEk7O2tCQUFuQmxCLEsiLCJmaWxlIjoibWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfljZrlrqInXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBhdmF0YXJVcmw6ICcnLFxuICAgIC8vIG5pY2tOYW1lOiAnJyxcbiAgICBjYXQ6ICcuLi9pbWFnZS9naXRodWIucG5nJyxcbiAgICBlbWFpbDogJy4uL2ltYWdlL+mCrueusS0yLnBuZycsXG4gICAgY29sb3IxOiAnYmxhY2snLFxuICAgIGNvbG9yMjogJ2JsYWNrJ1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgZ2l0aHViKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9naXRodWInXG4gICAgICB9KVxuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmNvbG9yMSA9ICdncmVlbidcbiAgICB9LFxuICAgIGVtYWlsKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9lbWFpbCdcbiAgICAgIH0pXG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuY29sb3IyID0gJ2dyZWVuJ1xuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgd2VweS5nZXRVc2VySW5mbyh7XG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICAvLyB2YXIgdXNlckluZm8gPSByZXMudXNlckluZm9cbiAgICAgICAgLy8gc2VsZi5uaWNrTmFtZSA9IHJlcy51c2VySW5mby5uaWNrTmFtZVxuICAgICAgICBzZWxmLmF2YXRhclVybCA9IHJlcy51c2VySW5mby5hdmF0YXJVcmxcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=