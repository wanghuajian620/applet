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
      killer: '../image/77f73bfe6dcaf0e1426c430200b3d24a.jpg',
      music: '../audio/尚雯婕 - 最终信仰.mp3',
      name: '最终信仰',
      author: '尚雯婕',
      shangwenjie: '../image/19e8c807b18775ae8b35b61026d07420.jpg'
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }, {
    key: 'onReady',
    value: function onReady(e) {
      // 使用 wx.createAudioContext 获取 audio 上下文 context
      this.audioCtx = _wepy2.default.createAudioContext('myAudio');
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/virgo'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpcmdvLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJraWxsZXIiLCJtdXNpYyIsIm5hbWUiLCJhdXRob3IiLCJzaGFuZ3dlbmppZSIsImUiLCJhdWRpb0N0eCIsImNyZWF0ZUF1ZGlvQ29udGV4dCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxjQUFRLCtDQURIO0FBRUxDLGFBQU8seUJBRkY7QUFHTEMsWUFBTSxNQUhEO0FBSUxDLGNBQVEsS0FKSDtBQUtMQyxtQkFBYTtBQUxSLEs7Ozs7OzZCQU9FLENBQUU7Ozs0QkFDSEMsQyxFQUFHO0FBQ1Q7QUFDQSxXQUFLQyxRQUFMLEdBQWdCLGVBQUtDLGtCQUFMLENBQXdCLFNBQXhCLENBQWhCO0FBQ0Q7Ozs7RUFmZ0MsZUFBS0MsSTs7a0JBQW5CWixLIiwiZmlsZSI6InZpcmdvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5Y2a5a6iJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAga2lsbGVyOiAnLi4vaW1hZ2UvNzdmNzNiZmU2ZGNhZjBlMTQyNmM0MzAyMDBiM2QyNGEuanBnJyxcbiAgICBtdXNpYzogJy4uL2F1ZGlvL+Wwmumbr+WplSAtIOacgOe7iOS/oeS7sC5tcDMnLFxuICAgIG5hbWU6ICfmnIDnu4jkv6Hku7AnLFxuICAgIGF1dGhvcjogJ+Wwmumbr+WplScsXG4gICAgc2hhbmd3ZW5qaWU6ICcuLi9pbWFnZS8xOWU4YzgwN2IxODc3NWFlOGIzNWI2MTAyNmQwNzQyMC5qcGcnXG4gIH1cbiAgb25Mb2FkKCkge31cbiAgb25SZWFkeShlKSB7XG4gICAgLy8g5L2/55SoIHd4LmNyZWF0ZUF1ZGlvQ29udGV4dCDojrflj5YgYXVkaW8g5LiK5LiL5paHIGNvbnRleHRcbiAgICB0aGlzLmF1ZGlvQ3R4ID0gd2VweS5jcmVhdGVBdWRpb0NvbnRleHQoJ215QXVkaW8nKVxuICB9XG59XG4iXX0=