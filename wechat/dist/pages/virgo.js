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

var amapFile = require('./../libs/amap-wx.js');

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
    }, _this.methods = {
      photo: function photo() {
        _wepy2.default.navigateTo({
          url: './photo'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      var that = this;
      var myAmapFun = new amapFile.AMapWX({ key: 'c2cbd0e24e64f42a77408a348f11de87' });
      myAmapFun.getWeather({
        success: function success(data) {
          that.setData({
            weather: data
          });
        },
        fail: function fail(info) {
          console.log(info);
        }
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/virgo'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpcmdvLmpzIl0sIm5hbWVzIjpbImFtYXBGaWxlIiwicmVxdWlyZSIsIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm1ldGhvZHMiLCJwaG90byIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJ0aGF0IiwibXlBbWFwRnVuIiwiQU1hcFdYIiwia2V5IiwiZ2V0V2VhdGhlciIsInN1Y2Nlc3MiLCJkYXRhIiwic2V0RGF0YSIsIndlYXRoZXIiLCJmYWlsIiwiaW5mbyIsImNvbnNvbGUiLCJsb2ciLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSUEsV0FBV0MsUUFBUSxvQkFBUixDQUFmOztJQUNxQkMsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsTyxHQUFVO0FBQ1JDLFdBRFEsbUJBQ0E7QUFDTix1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRDtBQUxPLEs7Ozs7OzZCQU9EO0FBQ1AsVUFBSUMsT0FBTyxJQUFYO0FBQ0EsVUFBSUMsWUFBWSxJQUFJVixTQUFTVyxNQUFiLENBQW9CLEVBQUVDLEtBQUssa0NBQVAsRUFBcEIsQ0FBaEI7QUFDQUYsZ0JBQVVHLFVBQVYsQ0FBcUI7QUFDbkJDLGlCQUFTLGlCQUFTQyxJQUFULEVBQWU7QUFDdEJOLGVBQUtPLE9BQUwsQ0FBYTtBQUNYQyxxQkFBU0Y7QUFERSxXQUFiO0FBR0QsU0FMa0I7QUFNbkJHLGNBQU0sY0FBU0MsSUFBVCxFQUFlO0FBQ25CQyxrQkFBUUMsR0FBUixDQUFZRixJQUFaO0FBQ0Q7QUFSa0IsT0FBckI7QUFVRDs7OztFQXhCZ0MsZUFBS0csSTs7a0JBQW5CcEIsSyIsImZpbGUiOiJ2aXJnby5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbnZhciBhbWFwRmlsZSA9IHJlcXVpcmUoJy4uL2xpYnMvYW1hcC13eC5qcycpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5Y2a5a6iJ1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgcGhvdG8oKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL3Bob3RvJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIGxldCB0aGF0ID0gdGhpc1xuICAgIGxldCBteUFtYXBGdW4gPSBuZXcgYW1hcEZpbGUuQU1hcFdYKHsga2V5OiAnYzJjYmQwZTI0ZTY0ZjQyYTc3NDA4YTM0OGYxMWRlODcnIH0pXG4gICAgbXlBbWFwRnVuLmdldFdlYXRoZXIoe1xuICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICB0aGF0LnNldERhdGEoe1xuICAgICAgICAgIHdlYXRoZXI6IGRhdGFcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBmYWlsOiBmdW5jdGlvbihpbmZvKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGluZm8pXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIl19