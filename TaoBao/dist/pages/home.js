'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _content = require('./../parameter/content.js');

var _content2 = _interopRequireDefault(_content);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_wepy$page) {
  _inherits(Home, _wepy$page);

  function Home() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'TaoBao'
    }, _this.data = {
      imgUrls: ['http://img3.imgtn.bdimg.com/it/u=2023558336,835531241&fm=27&gp=0.jpg', 'http://img1.imgtn.bdimg.com/it/u=2148098677,2559283192&fm=27&gp=0.jpg', 'http://img3.imgtn.bdimg.com/it/u=1062444696,2096228103&fm=27&gp=0.jpg', 'http://img0.imgtn.bdimg.com/it/u=2568531671,305585221&fm=27&gp=0.jpg', 'http://img3.imgtn.bdimg.com/it/u=828347997,3608985208&fm=27&gp=0.jpg', 'http://img4.imgtn.bdimg.com/it/u=3311698162,3898636936&fm=27&gp=0.jpg'],
      indicatorDots: true,
      autoplay: true,
      interval: 2000,
      duration: 1000,
      vertical: true,
      skycat: '../image/天猫.png',
      gather: '../image/聚划算.png',
      global: '../image/进口商品.png',
      restaurant: '../image/外卖.png',
      supermarket: '../image/天猫超市.png',
      pay: '../image/充值中心.png',
      travel: '../image/旅行.png',
      money: '../image/淘.png',
      auction: '../image/拍卖.png',
      classify: '../image/分类曾，.png',
      a: null,
      width: 0,
      height: 0
    }, _this.methods = {
      IMG26: function IMG26(e) {
        var self = this;
        var item = self.a[e.currentTarget.id];
        console.log(e);
        _wepy2.default.navigateTo({
          url: './IMG26?title=' + item.title + '&icon=' + item.icon + '&pic=' + item.pic + '&num=' + item.num // IMG26中onLoad()中传入的参数即是这的字符串拼接中的title，icon，pic
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Home, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      self.a = _content2.default;
      console.log(self.a);
      _wepy2.default.getSystemInfo({
        success: function success(res) {
          self.width = res.windowWidth;
          self.height = res.windowHeight;
        }
      });
    }
  }]);

  return Home;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Home , 'pages/home'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiSG9tZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiaW1nVXJscyIsImluZGljYXRvckRvdHMiLCJhdXRvcGxheSIsImludGVydmFsIiwiZHVyYXRpb24iLCJ2ZXJ0aWNhbCIsInNreWNhdCIsImdhdGhlciIsImdsb2JhbCIsInJlc3RhdXJhbnQiLCJzdXBlcm1hcmtldCIsInBheSIsInRyYXZlbCIsIm1vbmV5IiwiYXVjdGlvbiIsImNsYXNzaWZ5IiwiYSIsIndpZHRoIiwiaGVpZ2h0IiwibWV0aG9kcyIsIklNRzI2IiwiZSIsInNlbGYiLCJpdGVtIiwiY3VycmVudFRhcmdldCIsImlkIiwiY29uc29sZSIsImxvZyIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJ0aXRsZSIsImljb24iLCJwaWMiLCJudW0iLCJnZXRTeXN0ZW1JbmZvIiwic3VjY2VzcyIsInJlcyIsIndpbmRvd1dpZHRoIiwid2luZG93SGVpZ2h0IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsZUFBUyxDQUNQLHNFQURPLEVBRVAsdUVBRk8sRUFHUCx1RUFITyxFQUlQLHNFQUpPLEVBS1Asc0VBTE8sRUFNUCx1RUFOTyxDQURKO0FBU0xDLHFCQUFlLElBVFY7QUFVTEMsZ0JBQVUsSUFWTDtBQVdMQyxnQkFBVSxJQVhMO0FBWUxDLGdCQUFVLElBWkw7QUFhTEMsZ0JBQVUsSUFiTDtBQWNMQyxjQUFRLGlCQWRIO0FBZUxDLGNBQVEsa0JBZkg7QUFnQkxDLGNBQVEsbUJBaEJIO0FBaUJMQyxrQkFBWSxpQkFqQlA7QUFrQkxDLG1CQUFhLG1CQWxCUjtBQW1CTEMsV0FBSyxtQkFuQkE7QUFvQkxDLGNBQVEsaUJBcEJIO0FBcUJMQyxhQUFPLGdCQXJCRjtBQXNCTEMsZUFBUyxpQkF0Qko7QUF1QkxDLGdCQUFVLG1CQXZCTDtBQXdCTEMsU0FBRyxJQXhCRTtBQXlCTEMsYUFBTyxDQXpCRjtBQTBCTEMsY0FBUTtBQTFCSCxLLFFBNEJQQyxPLEdBQVU7QUFDUkMsV0FEUSxpQkFDRkMsQ0FERSxFQUNDO0FBQ1AsWUFBSUMsT0FBTyxJQUFYO0FBQ0EsWUFBSUMsT0FBT0QsS0FBS04sQ0FBTCxDQUFPSyxFQUFFRyxhQUFGLENBQWdCQyxFQUF2QixDQUFYO0FBQ0FDLGdCQUFRQyxHQUFSLENBQVlOLENBQVo7QUFDQSx1QkFBS08sVUFBTCxDQUFnQjtBQUNkQyxrQ0FBc0JOLEtBQUtPLEtBQTNCLGNBQXlDUCxLQUFLUSxJQUE5QyxhQUEwRFIsS0FBS1MsR0FBL0QsYUFBMEVULEtBQUtVLEdBRGpFLENBQ3NFO0FBRHRFLFNBQWhCO0FBR0Q7QUFSTyxLOzs7Ozs2QkFVRDtBQUNQLFVBQUlYLE9BQU8sSUFBWDtBQUNBQSxXQUFLTixDQUFMO0FBQ0FVLGNBQVFDLEdBQVIsQ0FBWUwsS0FBS04sQ0FBakI7QUFDQSxxQkFBS2tCLGFBQUwsQ0FBbUI7QUFDakJDLGlCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJkLGVBQUtMLEtBQUwsR0FBYW1CLElBQUlDLFdBQWpCO0FBQ0FmLGVBQUtKLE1BQUwsR0FBY2tCLElBQUlFLFlBQWxCO0FBQ0Q7QUFKZ0IsT0FBbkI7QUFNRDs7OztFQXBEK0IsZUFBS0MsSTs7a0JBQWxCM0MsSSIsImZpbGUiOiJob21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IGEgZnJvbSAnLi4vcGFyYW1ldGVyL2NvbnRlbnQuanMnXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdUYW9CYW8nXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBpbWdVcmxzOiBbXG4gICAgICAnaHR0cDovL2ltZzMuaW1ndG4uYmRpbWcuY29tL2l0L3U9MjAyMzU1ODMzNiw4MzU1MzEyNDEmZm09MjcmZ3A9MC5qcGcnLFxuICAgICAgJ2h0dHA6Ly9pbWcxLmltZ3RuLmJkaW1nLmNvbS9pdC91PTIxNDgwOTg2NzcsMjU1OTI4MzE5MiZmbT0yNyZncD0wLmpwZycsXG4gICAgICAnaHR0cDovL2ltZzMuaW1ndG4uYmRpbWcuY29tL2l0L3U9MTA2MjQ0NDY5NiwyMDk2MjI4MTAzJmZtPTI3JmdwPTAuanBnJyxcbiAgICAgICdodHRwOi8vaW1nMC5pbWd0bi5iZGltZy5jb20vaXQvdT0yNTY4NTMxNjcxLDMwNTU4NTIyMSZmbT0yNyZncD0wLmpwZycsXG4gICAgICAnaHR0cDovL2ltZzMuaW1ndG4uYmRpbWcuY29tL2l0L3U9ODI4MzQ3OTk3LDM2MDg5ODUyMDgmZm09MjcmZ3A9MC5qcGcnLFxuICAgICAgJ2h0dHA6Ly9pbWc0LmltZ3RuLmJkaW1nLmNvbS9pdC91PTMzMTE2OTgxNjIsMzg5ODYzNjkzNiZmbT0yNyZncD0wLmpwZydcbiAgICBdLFxuICAgIGluZGljYXRvckRvdHM6IHRydWUsXG4gICAgYXV0b3BsYXk6IHRydWUsXG4gICAgaW50ZXJ2YWw6IDIwMDAsXG4gICAgZHVyYXRpb246IDEwMDAsXG4gICAgdmVydGljYWw6IHRydWUsXG4gICAgc2t5Y2F0OiAnLi4vaW1hZ2Uv5aSp54yrLnBuZycsXG4gICAgZ2F0aGVyOiAnLi4vaW1hZ2Uv6IGa5YiS566XLnBuZycsXG4gICAgZ2xvYmFsOiAnLi4vaW1hZ2Uv6L+b5Y+j5ZWG5ZOBLnBuZycsXG4gICAgcmVzdGF1cmFudDogJy4uL2ltYWdlL+WkluWNli5wbmcnLFxuICAgIHN1cGVybWFya2V0OiAnLi4vaW1hZ2Uv5aSp54yr6LaF5biCLnBuZycsXG4gICAgcGF5OiAnLi4vaW1hZ2Uv5YWF5YC85Lit5b+DLnBuZycsXG4gICAgdHJhdmVsOiAnLi4vaW1hZ2Uv5peF6KGMLnBuZycsXG4gICAgbW9uZXk6ICcuLi9pbWFnZS/mt5gucG5nJyxcbiAgICBhdWN0aW9uOiAnLi4vaW1hZ2Uv5ouN5Y2WLnBuZycsXG4gICAgY2xhc3NpZnk6ICcuLi9pbWFnZS/liIbnsbvmm77vvIwucG5nJyxcbiAgICBhOiBudWxsLFxuICAgIHdpZHRoOiAwLFxuICAgIGhlaWdodDogMFxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgSU1HMjYoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBsZXQgaXRlbSA9IHNlbGYuYVtlLmN1cnJlbnRUYXJnZXQuaWRdXG4gICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiBgLi9JTUcyNj90aXRsZT0ke2l0ZW0udGl0bGV9Jmljb249JHtpdGVtLmljb259JnBpYz0ke2l0ZW0ucGljfSZudW09JHtpdGVtLm51bX1gLy8gSU1HMjbkuK1vbkxvYWQoKeS4reS8oOWFpeeahOWPguaVsOWNs+aYr+i/meeahOWtl+espuS4suaLvOaOpeS4reeahHRpdGxl77yMaWNvbu+8jHBpY1xuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHNlbGYuYSA9IGFcbiAgICBjb25zb2xlLmxvZyhzZWxmLmEpXG4gICAgd2VweS5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBzZWxmLndpZHRoID0gcmVzLndpbmRvd1dpZHRoXG4gICAgICAgIHNlbGYuaGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodFxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==