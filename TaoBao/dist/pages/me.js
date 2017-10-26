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
      wallet: '../image/待付款-2.png',
      shipments: '../image/待发货-2.png',
      deLivery: '../image/待收货-2.png',
      evaluate: '../image/待评价-2.png',
      refund: '../image/退款-2.png',
      brand: '../image/大于号-2.png'
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJhdmF0YXJVcmwiLCJuaWNrTmFtZSIsIm9yZGVyIiwid2FsbGV0Iiwic2hpcG1lbnRzIiwiZGVMaXZlcnkiLCJldmFsdWF0ZSIsInJlZnVuZCIsImJyYW5kIiwic2VsZiIsImdldFVzZXJJbmZvIiwic3VjY2VzcyIsInJlcyIsInVzZXJJbmZvIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLGlCQUFXLEVBRE47QUFFTEMsZ0JBQVUsRUFGTDtBQUdMQyxhQUFPLG1CQUhGO0FBSUxDLGNBQVEsb0JBSkg7QUFLTEMsaUJBQVcsb0JBTE47QUFNTEMsZ0JBQVUsb0JBTkw7QUFPTEMsZ0JBQVUsb0JBUEw7QUFRTEMsY0FBUSxtQkFSSDtBQVNMQyxhQUFPO0FBVEYsSzs7Ozs7NkJBV0U7QUFDUCxVQUFJQyxPQUFPLElBQVg7QUFDQSxxQkFBS0MsV0FBTCxDQUFpQjtBQUNmQyxlQURlLG1CQUNQQyxHQURPLEVBQ0Y7QUFDWEgsZUFBS1QsU0FBTCxHQUFpQlksSUFBSUMsUUFBSixDQUFhYixTQUE5QjtBQUNBUyxlQUFLUixRQUFMLEdBQWdCVyxJQUFJQyxRQUFKLENBQWFaLFFBQTdCO0FBQ0Q7QUFKYyxPQUFqQjtBQU1EOzs7O0VBdkJnQyxlQUFLYSxJOztrQkFBbkJsQixLIiwiZmlsZSI6Im1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5oiR55qE5reY5a6dJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgYXZhdGFyVXJsOiAnJyxcbiAgICBuaWNrTmFtZTogJycsXG4gICAgb3JkZXI6ICcuLi9pbWFnZS/orqLljZUtMy5wbmcnLFxuICAgIHdhbGxldDogJy4uL2ltYWdlL+W+heS7mOasvi0yLnBuZycsXG4gICAgc2hpcG1lbnRzOiAnLi4vaW1hZ2Uv5b6F5Y+R6LSnLTIucG5nJyxcbiAgICBkZUxpdmVyeTogJy4uL2ltYWdlL+W+heaUtui0py0yLnBuZycsXG4gICAgZXZhbHVhdGU6ICcuLi9pbWFnZS/lvoXor4Tku7ctMi5wbmcnLFxuICAgIHJlZnVuZDogJy4uL2ltYWdlL+mAgOasvi0yLnBuZycsXG4gICAgYnJhbmQ6ICcuLi9pbWFnZS/lpKfkuo7lj7ctMi5wbmcnXG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHdlcHkuZ2V0VXNlckluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgc2VsZi5hdmF0YXJVcmwgPSByZXMudXNlckluZm8uYXZhdGFyVXJsXG4gICAgICAgIHNlbGYubmlja05hbWUgPSByZXMudXNlckluZm8ubmlja05hbWVcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=