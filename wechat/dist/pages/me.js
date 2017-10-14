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
      photo: '../image/WechatIMG12.jpeg',
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
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/me'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJwaG90byIsImNhdCIsImVtYWlsIiwiY29sb3IxIiwiY29sb3IyIiwibWV0aG9kcyIsImdpdGh1YiIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJzZWxmIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLGFBQU8sMkJBREY7QUFFTEMsV0FBSyxxQkFGQTtBQUdMQyxhQUFPLG1CQUhGO0FBSUxDLGNBQVEsT0FKSDtBQUtMQyxjQUFRO0FBTEgsSyxRQU9QQyxPLEdBQVU7QUFDUkMsWUFEUSxvQkFDQztBQUNQLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdBLFlBQUlDLE9BQU8sSUFBWDtBQUNBQSxhQUFLTixNQUFMLEdBQWMsT0FBZDtBQUNELE9BUE87QUFRUkQsV0FSUSxtQkFRQTtBQUNOLHVCQUFLSyxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdBLFlBQUlDLE9BQU8sSUFBWDtBQUNBQSxhQUFLTCxNQUFMLEdBQWMsT0FBZDtBQUNEO0FBZE8sSzs7Ozs7NkJBZ0JELENBQUU7Ozs7RUEzQnNCLGVBQUtNLEk7O2tCQUFuQmQsSyIsImZpbGUiOiJtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5Y2a5a6iJ1xuICAgIH1cbiAgICBkYXRhID0ge1xuICAgICAgcGhvdG86ICcuLi9pbWFnZS9XZWNoYXRJTUcxMi5qcGVnJyxcbiAgICAgIGNhdDogJy4uL2ltYWdlL2dpdGh1Yi5wbmcnLFxuICAgICAgZW1haWw6ICcuLi9pbWFnZS/pgq7nrrEtMi5wbmcnLFxuICAgICAgY29sb3IxOiAnYmxhY2snLFxuICAgICAgY29sb3IyOiAnYmxhY2snXG4gICAgfVxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBnaXRodWIoKSB7XG4gICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiAnLi9naXRodWInXG4gICAgICAgIH0pXG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgICBzZWxmLmNvbG9yMSA9ICdncmVlbidcbiAgICAgIH0sXG4gICAgICBlbWFpbCgpIHtcbiAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICcuL2VtYWlsJ1xuICAgICAgICB9KVxuICAgICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgICAgc2VsZi5jb2xvcjIgPSAnZ3JlZW4nXG4gICAgICB9XG4gICAgfVxuICAgIG9uTG9hZCgpIHt9XG4gIH1cbiJdfQ==