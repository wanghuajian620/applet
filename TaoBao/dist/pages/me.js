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
      navigationBarTitleText: '我的淘宝'
    }, _this.data = {
      avatarUrl: '',
      nickName: '',
      order: '../image/订单-3.png',
      site: '../image/收货地址.png',
      wallet: '../image/待付款-2.png',
      shipments: '../image/待发货-2.png',
      deLivery: '../image/待收货-2.png',
      evaluate: '../image/待评价-2.png',
      refund: '../image/退款-2.png',
      brand: '../image/大于号-2.png',
      b: [{ icon: '../image/收货地址.png', text: '我的收货地址', check: '../image/大于号-2.png' }, { icon: '../image/待付款-2.png', text: '待付款', check: '../image/大于号-2.png' }, { icon: '../image/待发货-2.png', text: '待发货', check: '../image/大于号-2.png' }, { icon: '../image/待收货-2.png', text: '待收货', check: '../image/大于号-2.png' }, { icon: '../image/退款-2.png', text: '退款/售后', check: '../image/大于号-2.png' }]
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      _wepy2.default.getUserInfo({
        success: function success(res) {
          self.avatarUrl = res.userInfo.avatarUrl;
          self.nickName = res.userInfo.nickName;
        }
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/me'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJhdmF0YXJVcmwiLCJuaWNrTmFtZSIsIm9yZGVyIiwic2l0ZSIsIndhbGxldCIsInNoaXBtZW50cyIsImRlTGl2ZXJ5IiwiZXZhbHVhdGUiLCJyZWZ1bmQiLCJicmFuZCIsImIiLCJpY29uIiwidGV4dCIsImNoZWNrIiwic2VsZiIsImdldFVzZXJJbmZvIiwic3VjY2VzcyIsInJlcyIsInVzZXJJbmZvIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLGlCQUFXLEVBRE47QUFFTEMsZ0JBQVUsRUFGTDtBQUdMQyxhQUFPLG1CQUhGO0FBSUxDLFlBQU0sbUJBSkQ7QUFLTEMsY0FBUSxvQkFMSDtBQU1MQyxpQkFBVyxvQkFOTjtBQU9MQyxnQkFBVSxvQkFQTDtBQVFMQyxnQkFBVSxvQkFSTDtBQVNMQyxjQUFRLG1CQVRIO0FBVUxDLGFBQU8sb0JBVkY7QUFXTEMsU0FBRyxDQUNELEVBQUNDLE1BQU0sbUJBQVAsRUFBNEJDLE1BQU0sUUFBbEMsRUFBNENDLE9BQU8sb0JBQW5ELEVBREMsRUFFRCxFQUFDRixNQUFNLG9CQUFQLEVBQTZCQyxNQUFNLEtBQW5DLEVBQTBDQyxPQUFPLG9CQUFqRCxFQUZDLEVBR0QsRUFBQ0YsTUFBTSxvQkFBUCxFQUE2QkMsTUFBTSxLQUFuQyxFQUEwQ0MsT0FBTyxvQkFBakQsRUFIQyxFQUlELEVBQUNGLE1BQU0sb0JBQVAsRUFBNkJDLE1BQU0sS0FBbkMsRUFBMENDLE9BQU8sb0JBQWpELEVBSkMsRUFLRCxFQUFDRixNQUFNLG1CQUFQLEVBQTRCQyxNQUFNLE9BQWxDLEVBQTJDQyxPQUFPLG9CQUFsRCxFQUxDO0FBWEUsSzs7Ozs7NkJBbUJFO0FBQ1AsVUFBSUMsT0FBTyxJQUFYO0FBQ0EscUJBQUtDLFdBQUwsQ0FBaUI7QUFDZkMsZUFEZSxtQkFDUEMsR0FETyxFQUNGO0FBQ1hILGVBQUtkLFNBQUwsR0FBaUJpQixJQUFJQyxRQUFKLENBQWFsQixTQUE5QjtBQUNBYyxlQUFLYixRQUFMLEdBQWdCZ0IsSUFBSUMsUUFBSixDQUFhakIsUUFBN0I7QUFDRDtBQUpjLE9BQWpCO0FBTUQ7Ozs7RUEvQmdDLGVBQUtrQixJOztrQkFBbkJ2QixLIiwiZmlsZSI6Im1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5oiR55qE5reY5a6dJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgYXZhdGFyVXJsOiAnJyxcbiAgICBuaWNrTmFtZTogJycsXG4gICAgb3JkZXI6ICcuLi9pbWFnZS/orqLljZUtMy5wbmcnLFxuICAgIHNpdGU6ICcuLi9pbWFnZS/mlLbotKflnLDlnYAucG5nJyxcbiAgICB3YWxsZXQ6ICcuLi9pbWFnZS/lvoXku5jmrL4tMi5wbmcnLFxuICAgIHNoaXBtZW50czogJy4uL2ltYWdlL+W+heWPkei0py0yLnBuZycsXG4gICAgZGVMaXZlcnk6ICcuLi9pbWFnZS/lvoXmlLbotKctMi5wbmcnLFxuICAgIGV2YWx1YXRlOiAnLi4vaW1hZ2Uv5b6F6K+E5Lu3LTIucG5nJyxcbiAgICByZWZ1bmQ6ICcuLi9pbWFnZS/pgIDmrL4tMi5wbmcnLFxuICAgIGJyYW5kOiAnLi4vaW1hZ2Uv5aSn5LqO5Y+3LTIucG5nJyxcbiAgICBiOiBbXG4gICAgICB7aWNvbjogJy4uL2ltYWdlL+aUtui0p+WcsOWdgC5wbmcnLCB0ZXh0OiAn5oiR55qE5pS26LSn5Zyw5Z2AJywgY2hlY2s6ICcuLi9pbWFnZS/lpKfkuo7lj7ctMi5wbmcnfSxcbiAgICAgIHtpY29uOiAnLi4vaW1hZ2Uv5b6F5LuY5qy+LTIucG5nJywgdGV4dDogJ+W+heS7mOasvicsIGNoZWNrOiAnLi4vaW1hZ2Uv5aSn5LqO5Y+3LTIucG5nJ30sXG4gICAgICB7aWNvbjogJy4uL2ltYWdlL+W+heWPkei0py0yLnBuZycsIHRleHQ6ICflvoXlj5HotKcnLCBjaGVjazogJy4uL2ltYWdlL+Wkp+S6juWPty0yLnBuZyd9LFxuICAgICAge2ljb246ICcuLi9pbWFnZS/lvoXmlLbotKctMi5wbmcnLCB0ZXh0OiAn5b6F5pS26LSnJywgY2hlY2s6ICcuLi9pbWFnZS/lpKfkuo7lj7ctMi5wbmcnfSxcbiAgICAgIHtpY29uOiAnLi4vaW1hZ2Uv6YCA5qy+LTIucG5nJywgdGV4dDogJ+mAgOasvi/llK7lkI4nLCBjaGVjazogJy4uL2ltYWdlL+Wkp+S6juWPty0yLnBuZyd9XG4gICAgXVxuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB3ZXB5LmdldFVzZXJJbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIHNlbGYuYXZhdGFyVXJsID0gcmVzLnVzZXJJbmZvLmF2YXRhclVybFxuICAgICAgICBzZWxmLm5pY2tOYW1lID0gcmVzLnVzZXJJbmZvLm5pY2tOYW1lXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIl19