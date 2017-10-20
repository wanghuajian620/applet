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
      navigationBarTitleText: '我的'
    }, _this.data = {
      avatarUrl: '',
      nickName: '',
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
          self.avatarUrl = res.userInfo.avatarUrl;
          self.nickName = res.userInfo.nickName;
        }
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/me'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJhdmF0YXJVcmwiLCJuaWNrTmFtZSIsImNhdCIsImVtYWlsIiwiY29sb3IxIiwiY29sb3IyIiwibWV0aG9kcyIsImdpdGh1YiIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJzZWxmIiwib25TaGFyZUFwcE1lc3NhZ2UiLCJ0aXRsZSIsInBhdGgiLCJnZXRVc2VySW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJ1c2VySW5mbyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxpQkFBVyxFQUROO0FBRUxDLGdCQUFVLEVBRkw7QUFHTEMsV0FBSyxxQkFIQTtBQUlMQyxhQUFPLG1CQUpGO0FBS0xDLGNBQVEsT0FMSDtBQU1MQyxjQUFRO0FBTkgsSyxRQVFQQyxPLEdBQVU7QUFDUkMsWUFEUSxvQkFDQztBQUNQLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdBLFlBQUlDLE9BQU8sSUFBWDtBQUNBQSxhQUFLTixNQUFMLEdBQWMsT0FBZDtBQUNELE9BUE87QUFRUkQsV0FSUSxtQkFRQTtBQUNOLHVCQUFLSyxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdBLFlBQUlDLE9BQU8sSUFBWDtBQUNBQSxhQUFLTCxNQUFMLEdBQWMsT0FBZDtBQUNELE9BZE87QUFlUk0sdUJBZlEsK0JBZVk7QUFDbEIsZUFBTztBQUNMQyxpQkFBTyxJQURGO0FBRUxDLGdCQUFNO0FBRkQsU0FBUDtBQUlEO0FBcEJPLEs7Ozs7OzZCQXNCRDtBQUNQLFVBQUlILE9BQU8sSUFBWDtBQUNBLHFCQUFLSSxXQUFMLENBQWlCO0FBQ2ZDLGVBRGUsbUJBQ1BDLEdBRE8sRUFDRjtBQUNYO0FBQ0FOLGVBQUtWLFNBQUwsR0FBaUJnQixJQUFJQyxRQUFKLENBQWFqQixTQUE5QjtBQUNBVSxlQUFLVCxRQUFMLEdBQWdCZSxJQUFJQyxRQUFKLENBQWFoQixRQUE3QjtBQUNEO0FBTGMsT0FBakI7QUFPRDs7OztFQTNDZ0MsZUFBS2lCLEk7O2tCQUFuQnRCLEsiLCJmaWxlIjoibWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmiJHnmoQnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBhdmF0YXJVcmw6ICcnLFxuICAgIG5pY2tOYW1lOiAnJyxcbiAgICBjYXQ6ICcuLi9pbWFnZS9naXRodWIucG5nJyxcbiAgICBlbWFpbDogJy4uL2ltYWdlL+mCrueusS0yLnBuZycsXG4gICAgY29sb3IxOiAnYmxhY2snLFxuICAgIGNvbG9yMjogJ2JsYWNrJ1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgZ2l0aHViKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9naXRodWInXG4gICAgICB9KVxuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmNvbG9yMSA9ICdncmVlbidcbiAgICB9LFxuICAgIGVtYWlsKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9lbWFpbCdcbiAgICAgIH0pXG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuY29sb3IyID0gJ2dyZWVuJ1xuICAgIH0sXG4gICAgb25TaGFyZUFwcE1lc3NhZ2UoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZTogJ+WNmuWuoicsXG4gICAgICAgIHBhdGg6ICcvcGFnZXMvbWUnXG4gICAgICB9XG4gICAgfVxuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB3ZXB5LmdldFVzZXJJbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIC8vIHZhciB1c2VySW5mbyA9IHJlcy51c2VySW5mb1xuICAgICAgICBzZWxmLmF2YXRhclVybCA9IHJlcy51c2VySW5mby5hdmF0YXJVcmxcbiAgICAgICAgc2VsZi5uaWNrTmFtZSA9IHJlcy51c2VySW5mby5uaWNrTmFtZVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==