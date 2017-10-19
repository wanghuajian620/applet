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
      teenager: '../image/3f828038d65fbf33d963fd56a1055593.jpeg',
      youth: '../image/3f828038d65fbf33d963fd56a1055593.jpeg',
      adult: '../image/3f828038d65fbf33d963fd56a1055593.jpeg'
    }, _this.methods = {
      a: function a() {
        _wepy2.default.navigateTo({
          url: './first'
        });
      },
      b: function b() {
        _wepy2.default.navigateTo({
          url: './second'
        });
      },
      c: function c() {
        _wepy2.default.navigateTo({
          url: './third'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/virgo'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpcmdvLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJ0ZWVuYWdlciIsInlvdXRoIiwiYWR1bHQiLCJtZXRob2RzIiwiYSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJiIiwiYyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxnQkFBVSxnREFETDtBQUVMQyxhQUFPLGdEQUZGO0FBR0xDLGFBQU87QUFIRixLLFFBS1BDLE8sR0FBVTtBQUNSQyxPQURRLGVBQ0o7QUFDRix1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQUxPO0FBTVJDLE9BTlEsZUFNSjtBQUNGLHVCQUFLRixVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdELE9BVk87QUFXUkUsT0FYUSxlQVdKO0FBQ0YsdUJBQUtILFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0Q7QUFmTyxLOzs7Ozs2QkFpQkQsQ0FBRTs7OztFQTFCc0IsZUFBS0csSTs7a0JBQW5CYixLIiwiZmlsZSI6InZpcmdvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WNmuWuoidcbiAgfVxuICBkYXRhID0ge1xuICAgIHRlZW5hZ2VyOiAnLi4vaW1hZ2UvM2Y4MjgwMzhkNjVmYmYzM2Q5NjNmZDU2YTEwNTU1OTMuanBlZycsXG4gICAgeW91dGg6ICcuLi9pbWFnZS8zZjgyODAzOGQ2NWZiZjMzZDk2M2ZkNTZhMTA1NTU5My5qcGVnJyxcbiAgICBhZHVsdDogJy4uL2ltYWdlLzNmODI4MDM4ZDY1ZmJmMzNkOTYzZmQ1NmExMDU1NTkzLmpwZWcnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBhKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9maXJzdCdcbiAgICAgIH0pXG4gICAgfSxcbiAgICBiKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9zZWNvbmQnXG4gICAgICB9KVxuICAgIH0sXG4gICAgYygpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vdGhpcmQnXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7fVxufVxuIl19