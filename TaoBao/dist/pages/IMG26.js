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
      navigationBarTitleText: '针织衫'
    }, _this.data = {
      imgUrls: [''],
      indicatorDots: true,
      autoplay: true,
      interval: 2000,
      duration: 1000,
      vertical: true,
      coin: '../image/钱-2.png',
      check: '../image/对勾-3.png',
      pass: '../image/大于号-2.png',
      width: '',
      height: '',
      icon: '',
      title: '',
      pic: []
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(data) {
      var self = this;
      self.title = data.title;
      self.pic = data.pic.split(',');
      console.log(data.pic);
      _wepy2.default.getSystemInfo({
        success: function success(res) {
          var self = this;
          self.width = res.windowWidth;
          self.height = res.windowHeight;
        }
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/IMG26'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklNRzI2LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJpbWdVcmxzIiwiaW5kaWNhdG9yRG90cyIsImF1dG9wbGF5IiwiaW50ZXJ2YWwiLCJkdXJhdGlvbiIsInZlcnRpY2FsIiwiY29pbiIsImNoZWNrIiwicGFzcyIsIndpZHRoIiwiaGVpZ2h0IiwiaWNvbiIsInRpdGxlIiwicGljIiwibWV0aG9kcyIsInNlbGYiLCJzcGxpdCIsImNvbnNvbGUiLCJsb2ciLCJnZXRTeXN0ZW1JbmZvIiwic3VjY2VzcyIsInJlcyIsIndpbmRvd1dpZHRoIiwid2luZG93SGVpZ2h0IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLGVBQVMsQ0FBQyxFQUFELENBREo7QUFHTEMscUJBQWUsSUFIVjtBQUlMQyxnQkFBVSxJQUpMO0FBS0xDLGdCQUFVLElBTEw7QUFNTEMsZ0JBQVUsSUFOTDtBQU9MQyxnQkFBVSxJQVBMO0FBUUxDLFlBQU0sa0JBUkQ7QUFTTEMsYUFBTyxtQkFURjtBQVVMQyxZQUFNLG9CQVZEO0FBV0xDLGFBQU8sRUFYRjtBQVlMQyxjQUFRLEVBWkg7QUFhTEMsWUFBTSxFQWJEO0FBY0xDLGFBQU8sRUFkRjtBQWVMQyxXQUFLO0FBZkEsSyxRQWlCUEMsTyxHQUFVLEU7Ozs7OzJCQUNIZixJLEVBQU07QUFDWCxVQUFJZ0IsT0FBTyxJQUFYO0FBQ0FBLFdBQUtILEtBQUwsR0FBYWIsS0FBS2EsS0FBbEI7QUFDQUcsV0FBS0YsR0FBTCxHQUFXZCxLQUFLYyxHQUFMLENBQVNHLEtBQVQsQ0FBZSxHQUFmLENBQVg7QUFDQUMsY0FBUUMsR0FBUixDQUFZbkIsS0FBS2MsR0FBakI7QUFDQSxxQkFBS00sYUFBTCxDQUFtQjtBQUNqQkMsZUFEaUIsbUJBQ1RDLEdBRFMsRUFDSjtBQUNYLGNBQUlOLE9BQU8sSUFBWDtBQUNBQSxlQUFLTixLQUFMLEdBQWFZLElBQUlDLFdBQWpCO0FBQ0FQLGVBQUtMLE1BQUwsR0FBY1csSUFBSUUsWUFBbEI7QUFDRDtBQUxnQixPQUFuQjtBQU9EOzs7O0VBbENnQyxlQUFLQyxJOztrQkFBbkI1QixLIiwiZmlsZSI6IklNRzI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6ZKI57uH6KGrJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgaW1nVXJsczogWycnXG4gICAgXSxcbiAgICBpbmRpY2F0b3JEb3RzOiB0cnVlLFxuICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgIGludGVydmFsOiAyMDAwLFxuICAgIGR1cmF0aW9uOiAxMDAwLFxuICAgIHZlcnRpY2FsOiB0cnVlLFxuICAgIGNvaW46ICcuLi9pbWFnZS/pkrEtMi5wbmcnLFxuICAgIGNoZWNrOiAnLi4vaW1hZ2Uv5a+55Yu+LTMucG5nJyxcbiAgICBwYXNzOiAnLi4vaW1hZ2Uv5aSn5LqO5Y+3LTIucG5nJyxcbiAgICB3aWR0aDogJycsXG4gICAgaGVpZ2h0OiAnJyxcbiAgICBpY29uOiAnJyxcbiAgICB0aXRsZTogJycsXG4gICAgcGljOiBbXVxuICB9XG4gIG1ldGhvZHMgPSB7fVxuICBvbkxvYWQoZGF0YSkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHNlbGYudGl0bGUgPSBkYXRhLnRpdGxlXG4gICAgc2VsZi5waWMgPSBkYXRhLnBpYy5zcGxpdCgnLCcpXG4gICAgY29uc29sZS5sb2coZGF0YS5waWMpXG4gICAgd2VweS5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgICBzZWxmLndpZHRoID0gcmVzLndpbmRvd1dpZHRoXG4gICAgICAgIHNlbGYuaGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodFxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==