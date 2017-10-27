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
      imgUrls: ['https://gd2.alicdn.com/imgextra/i2/2537026158/TB2Pcy9lbsTMeJjy1zeXXcOCVXa_!!2537026158.jpg', 'https://gd1.alicdn.com/imgextra/i1/2537026158/TB26Hh4hjuhSKJjSspaXXXFgFXa_!!2537026158.jpg', 'https://gd4.alicdn.com/imgextra/i4/2537026158/TB26Aa6lbsTMeJjSsziXXcdwXXa_!!2537026158.jpg', 'https://gd1.alicdn.com/imgextra/i1/2537026158/TB2IBm2gvNNTKJjSspfXXbXIFXa_!!2537026158.jpg', 'https://gd1.alicdn.com/imgextra/i1/2537026158/TB2s4LbXJjv4eJjSZFvXXawyFXa_!!2537026158.jpg'],
      indicatorDots: true,
      autoplay: true,
      interval: 2000,
      duration: 1000,
      vertical: true,
      coin: '../image/钱-2.png',
      check: '../image/对勾-3.png',
      pass: '../image/大于号-2.png',
      width: '',
      height: ''
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/IMG30'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklNRzMwLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJpbWdVcmxzIiwiaW5kaWNhdG9yRG90cyIsImF1dG9wbGF5IiwiaW50ZXJ2YWwiLCJkdXJhdGlvbiIsInZlcnRpY2FsIiwiY29pbiIsImNoZWNrIiwicGFzcyIsIndpZHRoIiwiaGVpZ2h0IiwibWV0aG9kcyIsImdldFN5c3RlbUluZm8iLCJzdWNjZXNzIiwicmVzIiwic2VsZiIsIndpbmRvd1dpZHRoIiwid2luZG93SGVpZ2h0IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLGVBQVMsQ0FDUCw0RkFETyxFQUVQLDRGQUZPLEVBR1AsNEZBSE8sRUFJUCw0RkFKTyxFQUtQLDRGQUxPLENBREo7QUFRTEMscUJBQWUsSUFSVjtBQVNMQyxnQkFBVSxJQVRMO0FBVUxDLGdCQUFVLElBVkw7QUFXTEMsZ0JBQVUsSUFYTDtBQVlMQyxnQkFBVSxJQVpMO0FBYUxDLFlBQU0sa0JBYkQ7QUFjTEMsYUFBTyxtQkFkRjtBQWVMQyxZQUFNLG9CQWZEO0FBZ0JMQyxhQUFPLEVBaEJGO0FBaUJMQyxjQUFRO0FBakJILEssUUFtQlBDLE8sR0FBVSxFOzs7Ozs2QkFDRDtBQUNQLHFCQUFLQyxhQUFMLENBQW1CO0FBQ2pCQyxlQURpQixtQkFDVEMsR0FEUyxFQUNKO0FBQ1gsY0FBSUMsT0FBTyxJQUFYO0FBQ0FBLGVBQUtOLEtBQUwsR0FBYUssSUFBSUUsV0FBakI7QUFDQUQsZUFBS0wsTUFBTCxHQUFjSSxJQUFJRyxZQUFsQjtBQUNEO0FBTGdCLE9BQW5CO0FBT0Q7Ozs7RUFoQ2dDLGVBQUtDLEk7O2tCQUFuQnRCLEsiLCJmaWxlIjoiSU1HMzAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfpkojnu4fooasnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBpbWdVcmxzOiBbXG4gICAgICAnaHR0cHM6Ly9nZDIuYWxpY2RuLmNvbS9pbWdleHRyYS9pMi8yNTM3MDI2MTU4L1RCMlBjeTlsYnNUTWVKankxemVYWGNPQ1ZYYV8hITI1MzcwMjYxNTguanBnJyxcbiAgICAgICdodHRwczovL2dkMS5hbGljZG4uY29tL2ltZ2V4dHJhL2kxLzI1MzcwMjYxNTgvVEIyNkhoNGhqdWhTS0pqU3NwYVhYWEZnRlhhXyEhMjUzNzAyNjE1OC5qcGcnLFxuICAgICAgJ2h0dHBzOi8vZ2Q0LmFsaWNkbi5jb20vaW1nZXh0cmEvaTQvMjUzNzAyNjE1OC9UQjI2QWE2bGJzVE1lSmpTc3ppWFhjZHdYWGFfISEyNTM3MDI2MTU4LmpwZycsXG4gICAgICAnaHR0cHM6Ly9nZDEuYWxpY2RuLmNvbS9pbWdleHRyYS9pMS8yNTM3MDI2MTU4L1RCMklCbTJndk5OVEtKalNzcGZYWGJYSUZYYV8hITI1MzcwMjYxNTguanBnJyxcbiAgICAgICdodHRwczovL2dkMS5hbGljZG4uY29tL2ltZ2V4dHJhL2kxLzI1MzcwMjYxNTgvVEIyczRMYlhKanY0ZUpqU1pGdlhYYXd5RlhhXyEhMjUzNzAyNjE1OC5qcGcnXG4gICAgXSxcbiAgICBpbmRpY2F0b3JEb3RzOiB0cnVlLFxuICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgIGludGVydmFsOiAyMDAwLFxuICAgIGR1cmF0aW9uOiAxMDAwLFxuICAgIHZlcnRpY2FsOiB0cnVlLFxuICAgIGNvaW46ICcuLi9pbWFnZS/pkrEtMi5wbmcnLFxuICAgIGNoZWNrOiAnLi4vaW1hZ2Uv5a+55Yu+LTMucG5nJyxcbiAgICBwYXNzOiAnLi4vaW1hZ2Uv5aSn5LqO5Y+3LTIucG5nJyxcbiAgICB3aWR0aDogJycsXG4gICAgaGVpZ2h0OiAnJ1xuICB9XG4gIG1ldGhvZHMgPSB7fVxuICBvbkxvYWQoKSB7XG4gICAgd2VweS5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgICBzZWxmLndpZHRoID0gcmVzLndpbmRvd1dpZHRoXG4gICAgICAgIHNlbGYuaGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodFxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==