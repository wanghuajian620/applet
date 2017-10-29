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
          url: './IMG26?title=' + item.title + '&icon=' + item.icon + '&pic=' + item.pic // IMG26中onLoad()中传入的参数即是这的字符串拼接中的title，icon，pic
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiSG9tZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiaW1nVXJscyIsImluZGljYXRvckRvdHMiLCJhdXRvcGxheSIsImludGVydmFsIiwiZHVyYXRpb24iLCJ2ZXJ0aWNhbCIsInNreWNhdCIsImdhdGhlciIsImdsb2JhbCIsInJlc3RhdXJhbnQiLCJzdXBlcm1hcmtldCIsInBheSIsInRyYXZlbCIsIm1vbmV5IiwiYXVjdGlvbiIsImNsYXNzaWZ5IiwiYSIsIndpZHRoIiwiaGVpZ2h0IiwibWV0aG9kcyIsIklNRzI2IiwiZSIsInNlbGYiLCJpdGVtIiwiY3VycmVudFRhcmdldCIsImlkIiwiY29uc29sZSIsImxvZyIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJ0aXRsZSIsImljb24iLCJwaWMiLCJnZXRTeXN0ZW1JbmZvIiwic3VjY2VzcyIsInJlcyIsIndpbmRvd1dpZHRoIiwid2luZG93SGVpZ2h0IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsZUFBUyxDQUNQLHNFQURPLEVBRVAsdUVBRk8sRUFHUCx1RUFITyxFQUlQLHNFQUpPLEVBS1Asc0VBTE8sRUFNUCx1RUFOTyxDQURKO0FBU0xDLHFCQUFlLElBVFY7QUFVTEMsZ0JBQVUsSUFWTDtBQVdMQyxnQkFBVSxJQVhMO0FBWUxDLGdCQUFVLElBWkw7QUFhTEMsZ0JBQVUsSUFiTDtBQWNMQyxjQUFRLGlCQWRIO0FBZUxDLGNBQVEsa0JBZkg7QUFnQkxDLGNBQVEsbUJBaEJIO0FBaUJMQyxrQkFBWSxpQkFqQlA7QUFrQkxDLG1CQUFhLG1CQWxCUjtBQW1CTEMsV0FBSyxtQkFuQkE7QUFvQkxDLGNBQVEsaUJBcEJIO0FBcUJMQyxhQUFPLGdCQXJCRjtBQXNCTEMsZUFBUyxpQkF0Qko7QUF1QkxDLGdCQUFVLG1CQXZCTDtBQXdCTEMsU0FBRyxJQXhCRTtBQXlCTEMsYUFBTyxDQXpCRjtBQTBCTEMsY0FBUTtBQTFCSCxLLFFBNEJQQyxPLEdBQVU7QUFDUkMsV0FEUSxpQkFDRkMsQ0FERSxFQUNDO0FBQ1AsWUFBSUMsT0FBTyxJQUFYO0FBQ0EsWUFBSUMsT0FBT0QsS0FBS04sQ0FBTCxDQUFPSyxFQUFFRyxhQUFGLENBQWdCQyxFQUF2QixDQUFYO0FBQ0FDLGdCQUFRQyxHQUFSLENBQVlOLENBQVo7QUFDQSx1QkFBS08sVUFBTCxDQUFnQjtBQUNkQyxrQ0FBc0JOLEtBQUtPLEtBQTNCLGNBQXlDUCxLQUFLUSxJQUE5QyxhQUEwRFIsS0FBS1MsR0FEakQsQ0FDc0Q7QUFEdEQsU0FBaEI7QUFHRDtBQVJPLEs7Ozs7OzZCQVVEO0FBQ1AsVUFBSVYsT0FBTyxJQUFYO0FBQ0FBLFdBQUtOLENBQUw7QUFDQVUsY0FBUUMsR0FBUixDQUFZTCxLQUFLTixDQUFqQjtBQUNBLHFCQUFLaUIsYUFBTCxDQUFtQjtBQUNqQkMsaUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQmIsZUFBS0wsS0FBTCxHQUFha0IsSUFBSUMsV0FBakI7QUFDQWQsZUFBS0osTUFBTCxHQUFjaUIsSUFBSUUsWUFBbEI7QUFDRDtBQUpnQixPQUFuQjtBQU1EOzs7O0VBcEQrQixlQUFLQyxJOztrQkFBbEIxQyxJIiwiZmlsZSI6ImhvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgYSBmcm9tICcuLi9wYXJhbWV0ZXIvY29udGVudC5qcydcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ1Rhb0JhbydcbiAgfVxuICBkYXRhID0ge1xuICAgIGltZ1VybHM6IFtcbiAgICAgICdodHRwOi8vaW1nMy5pbWd0bi5iZGltZy5jb20vaXQvdT0yMDIzNTU4MzM2LDgzNTUzMTI0MSZmbT0yNyZncD0wLmpwZycsXG4gICAgICAnaHR0cDovL2ltZzEuaW1ndG4uYmRpbWcuY29tL2l0L3U9MjE0ODA5ODY3NywyNTU5MjgzMTkyJmZtPTI3JmdwPTAuanBnJyxcbiAgICAgICdodHRwOi8vaW1nMy5pbWd0bi5iZGltZy5jb20vaXQvdT0xMDYyNDQ0Njk2LDIwOTYyMjgxMDMmZm09MjcmZ3A9MC5qcGcnLFxuICAgICAgJ2h0dHA6Ly9pbWcwLmltZ3RuLmJkaW1nLmNvbS9pdC91PTI1Njg1MzE2NzEsMzA1NTg1MjIxJmZtPTI3JmdwPTAuanBnJyxcbiAgICAgICdodHRwOi8vaW1nMy5pbWd0bi5iZGltZy5jb20vaXQvdT04MjgzNDc5OTcsMzYwODk4NTIwOCZmbT0yNyZncD0wLmpwZycsXG4gICAgICAnaHR0cDovL2ltZzQuaW1ndG4uYmRpbWcuY29tL2l0L3U9MzMxMTY5ODE2MiwzODk4NjM2OTM2JmZtPTI3JmdwPTAuanBnJ1xuICAgIF0sXG4gICAgaW5kaWNhdG9yRG90czogdHJ1ZSxcbiAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICBpbnRlcnZhbDogMjAwMCxcbiAgICBkdXJhdGlvbjogMTAwMCxcbiAgICB2ZXJ0aWNhbDogdHJ1ZSxcbiAgICBza3ljYXQ6ICcuLi9pbWFnZS/lpKnnjKsucG5nJyxcbiAgICBnYXRoZXI6ICcuLi9pbWFnZS/ogZrliJLnrpcucG5nJyxcbiAgICBnbG9iYWw6ICcuLi9pbWFnZS/ov5vlj6PllYblk4EucG5nJyxcbiAgICByZXN0YXVyYW50OiAnLi4vaW1hZ2Uv5aSW5Y2WLnBuZycsXG4gICAgc3VwZXJtYXJrZXQ6ICcuLi9pbWFnZS/lpKnnjKvotoXluIIucG5nJyxcbiAgICBwYXk6ICcuLi9pbWFnZS/lhYXlgLzkuK3lv4MucG5nJyxcbiAgICB0cmF2ZWw6ICcuLi9pbWFnZS/ml4XooYwucG5nJyxcbiAgICBtb25leTogJy4uL2ltYWdlL+a3mC5wbmcnLFxuICAgIGF1Y3Rpb246ICcuLi9pbWFnZS/mi43ljZYucG5nJyxcbiAgICBjbGFzc2lmeTogJy4uL2ltYWdlL+WIhuexu+abvu+8jC5wbmcnLFxuICAgIGE6IG51bGwsXG4gICAgd2lkdGg6IDAsXG4gICAgaGVpZ2h0OiAwXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBJTUcyNihlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGxldCBpdGVtID0gc2VsZi5hW2UuY3VycmVudFRhcmdldC5pZF1cbiAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAuL0lNRzI2P3RpdGxlPSR7aXRlbS50aXRsZX0maWNvbj0ke2l0ZW0uaWNvbn0mcGljPSR7aXRlbS5waWN9YC8vIElNRzI25Litb25Mb2FkKCnkuK3kvKDlhaXnmoTlj4LmlbDljbPmmK/ov5nnmoTlrZfnrKbkuLLmi7zmjqXkuK3nmoR0aXRsZe+8jGljb27vvIxwaWNcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBzZWxmLmEgPSBhXG4gICAgY29uc29sZS5sb2coc2VsZi5hKVxuICAgIHdlcHkuZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgc2VsZi53aWR0aCA9IHJlcy53aW5kb3dXaWR0aFxuICAgICAgICBzZWxmLmhlaWdodCA9IHJlcy53aW5kb3dIZWlnaHRcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=