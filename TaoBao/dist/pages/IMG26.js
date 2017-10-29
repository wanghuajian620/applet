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
      item: '',
      // icon: '',
      title: '',
      pic: []
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(data) {
      var self = this;
      self.title = data.title;
      self.pic = data.pic.split(','); // split(,)作用是把逗号隔开的字符串转换成数组
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklNRzI2LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJpbWdVcmxzIiwiaW5kaWNhdG9yRG90cyIsImF1dG9wbGF5IiwiaW50ZXJ2YWwiLCJkdXJhdGlvbiIsInZlcnRpY2FsIiwiY29pbiIsImNoZWNrIiwicGFzcyIsIndpZHRoIiwiaGVpZ2h0IiwiaXRlbSIsInRpdGxlIiwicGljIiwibWV0aG9kcyIsInNlbGYiLCJzcGxpdCIsImNvbnNvbGUiLCJsb2ciLCJnZXRTeXN0ZW1JbmZvIiwic3VjY2VzcyIsInJlcyIsIndpbmRvd1dpZHRoIiwid2luZG93SGVpZ2h0IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLGVBQVMsQ0FBQyxFQUFELENBREo7QUFHTEMscUJBQWUsSUFIVjtBQUlMQyxnQkFBVSxJQUpMO0FBS0xDLGdCQUFVLElBTEw7QUFNTEMsZ0JBQVUsSUFOTDtBQU9MQyxnQkFBVSxJQVBMO0FBUUxDLFlBQU0sa0JBUkQ7QUFTTEMsYUFBTyxtQkFURjtBQVVMQyxZQUFNLG9CQVZEO0FBV0xDLGFBQU8sRUFYRjtBQVlMQyxjQUFRLEVBWkg7QUFhTEMsWUFBTSxFQWJEO0FBY0w7QUFDQUMsYUFBTyxFQWZGO0FBZ0JMQyxXQUFLO0FBaEJBLEssUUFrQlBDLE8sR0FBVSxFOzs7OzsyQkFDSGYsSSxFQUFNO0FBQ1gsVUFBSWdCLE9BQU8sSUFBWDtBQUNBQSxXQUFLSCxLQUFMLEdBQWFiLEtBQUthLEtBQWxCO0FBQ0FHLFdBQUtGLEdBQUwsR0FBV2QsS0FBS2MsR0FBTCxDQUFTRyxLQUFULENBQWUsR0FBZixDQUFYLENBSFcsQ0FHbUI7QUFDOUJDLGNBQVFDLEdBQVIsQ0FBWW5CLEtBQUtjLEdBQWpCO0FBQ0EscUJBQUtNLGFBQUwsQ0FBbUI7QUFDakJDLGVBRGlCLG1CQUNUQyxHQURTLEVBQ0o7QUFDWCxjQUFJTixPQUFPLElBQVg7QUFDQUEsZUFBS04sS0FBTCxHQUFhWSxJQUFJQyxXQUFqQjtBQUNBUCxlQUFLTCxNQUFMLEdBQWNXLElBQUlFLFlBQWxCO0FBQ0Q7QUFMZ0IsT0FBbkI7QUFPRDs7OztFQW5DZ0MsZUFBS0MsSTs7a0JBQW5CNUIsSyIsImZpbGUiOiJJTUcyNi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+mSiOe7h+ihqydcbiAgfVxuICBkYXRhID0ge1xuICAgIGltZ1VybHM6IFsnJ1xuICAgIF0sXG4gICAgaW5kaWNhdG9yRG90czogdHJ1ZSxcbiAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICBpbnRlcnZhbDogMjAwMCxcbiAgICBkdXJhdGlvbjogMTAwMCxcbiAgICB2ZXJ0aWNhbDogdHJ1ZSxcbiAgICBjb2luOiAnLi4vaW1hZ2Uv6ZKxLTIucG5nJyxcbiAgICBjaGVjazogJy4uL2ltYWdlL+WvueWLvi0zLnBuZycsXG4gICAgcGFzczogJy4uL2ltYWdlL+Wkp+S6juWPty0yLnBuZycsXG4gICAgd2lkdGg6ICcnLFxuICAgIGhlaWdodDogJycsXG4gICAgaXRlbTogJycsXG4gICAgLy8gaWNvbjogJycsXG4gICAgdGl0bGU6ICcnLFxuICAgIHBpYzogW11cbiAgfVxuICBtZXRob2RzID0ge31cbiAgb25Mb2FkKGRhdGEpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBzZWxmLnRpdGxlID0gZGF0YS50aXRsZVxuICAgIHNlbGYucGljID0gZGF0YS5waWMuc3BsaXQoJywnKS8vIHNwbGl0KCwp5L2c55So5piv5oqK6YCX5Y+36ZqU5byA55qE5a2X56ym5Liy6L2s5o2i5oiQ5pWw57uEXG4gICAgY29uc29sZS5sb2coZGF0YS5waWMpXG4gICAgd2VweS5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgICBzZWxmLndpZHRoID0gcmVzLndpbmRvd1dpZHRoXG4gICAgICAgIHNlbGYuaGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodFxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==