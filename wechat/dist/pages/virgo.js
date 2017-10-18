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
    }, _this.data = {
      illustration: '../image/9534ecea81ffe552e76e0250f55a02bc.jpeg'
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
      var self = this;
      var myAmapFun = new amapFile.AMapWX({ key: 'c2cbd0e24e64f42a77408a348f11de87' });
      myAmapFun.getWeather({
        success: function success(data) {
          self.setData({
            weather: data
          });
          return data;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpcmdvLmpzIl0sIm5hbWVzIjpbImFtYXBGaWxlIiwicmVxdWlyZSIsIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJpbGx1c3RyYXRpb24iLCJtZXRob2RzIiwicGhvdG8iLCJuYXZpZ2F0ZVRvIiwidXJsIiwic2VsZiIsIm15QW1hcEZ1biIsIkFNYXBXWCIsImtleSIsImdldFdlYXRoZXIiLCJzdWNjZXNzIiwic2V0RGF0YSIsIndlYXRoZXIiLCJmYWlsIiwiaW5mbyIsImNvbnNvbGUiLCJsb2ciLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSUEsV0FBV0MsUUFBUSxvQkFBUixDQUFmOztJQUNxQkMsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLG9CQUFjO0FBRFQsSyxRQUdQQyxPLEdBQVU7QUFDUkMsV0FEUSxtQkFDQTtBQUNOLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdEO0FBTE8sSzs7Ozs7NkJBT0Q7QUFDUCxVQUFJQyxPQUFPLElBQVg7QUFDQSxVQUFJQyxZQUFZLElBQUlaLFNBQVNhLE1BQWIsQ0FBb0IsRUFBRUMsS0FBSyxrQ0FBUCxFQUFwQixDQUFoQjtBQUNBRixnQkFBVUcsVUFBVixDQUFxQjtBQUNuQkMsaUJBQVMsaUJBQVNYLElBQVQsRUFBZTtBQUN0Qk0sZUFBS00sT0FBTCxDQUFhO0FBQ1hDLHFCQUFTYjtBQURFLFdBQWI7QUFHQSxpQkFBT0EsSUFBUDtBQUNELFNBTmtCO0FBT25CYyxjQUFNLGNBQVNDLElBQVQsRUFBZTtBQUNuQkMsa0JBQVFDLEdBQVIsQ0FBWUYsSUFBWjtBQUNEO0FBVGtCLE9BQXJCO0FBV0Q7Ozs7RUE1QmdDLGVBQUtHLEk7O2tCQUFuQnJCLEsiLCJmaWxlIjoidmlyZ28uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG52YXIgYW1hcEZpbGUgPSByZXF1aXJlKCcuLi9saWJzL2FtYXAtd3guanMnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WNmuWuoidcbiAgfVxuICBkYXRhID0ge1xuICAgIGlsbHVzdHJhdGlvbjogJy4uL2ltYWdlLzk1MzRlY2VhODFmZmU1NTJlNzZlMDI1MGY1NWEwMmJjLmpwZWcnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBwaG90bygpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vcGhvdG8nXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgbGV0IG15QW1hcEZ1biA9IG5ldyBhbWFwRmlsZS5BTWFwV1goeyBrZXk6ICdjMmNiZDBlMjRlNjRmNDJhNzc0MDhhMzQ4ZjExZGU4NycgfSlcbiAgICBteUFtYXBGdW4uZ2V0V2VhdGhlcih7XG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgICAgd2VhdGhlcjogZGF0YVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gZGF0YVxuICAgICAgfSxcbiAgICAgIGZhaWw6IGZ1bmN0aW9uKGluZm8pIHtcbiAgICAgICAgY29uc29sZS5sb2coaW5mbylcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=