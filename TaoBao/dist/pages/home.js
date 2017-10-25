'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

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
      cotton: '../image/WechatIMG26.jpeg',
      jacket: '../image/WechatIMG28.jpeg',
      sweater: '../image/WechatIMG29.jpeg',
      wool: '../image/WechatIMG30.jpeg',
      downcoat: '../image/WechatIMG31.jpeg',
      downjacket: '../image/WechatIMG32.jpeg',
      surname: '../image/WechatIMG33.jpeg',
      gold: '../image/WechatIMG34.jpeg'
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Home;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Home , 'pages/home'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiSG9tZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiaW1nVXJscyIsImluZGljYXRvckRvdHMiLCJhdXRvcGxheSIsImludGVydmFsIiwiZHVyYXRpb24iLCJ2ZXJ0aWNhbCIsInNreWNhdCIsImdhdGhlciIsImdsb2JhbCIsInJlc3RhdXJhbnQiLCJzdXBlcm1hcmtldCIsInBheSIsInRyYXZlbCIsIm1vbmV5IiwiYXVjdGlvbiIsImNsYXNzaWZ5IiwiY290dG9uIiwiamFja2V0Iiwic3dlYXRlciIsIndvb2wiLCJkb3duY29hdCIsImRvd25qYWNrZXQiLCJzdXJuYW1lIiwiZ29sZCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsZUFBUyxDQUNQLHNFQURPLEVBRVAsdUVBRk8sRUFHUCx1RUFITyxFQUlQLHNFQUpPLEVBS1Asc0VBTE8sRUFNUCx1RUFOTyxDQURKO0FBU0xDLHFCQUFlLElBVFY7QUFVTEMsZ0JBQVUsSUFWTDtBQVdMQyxnQkFBVSxJQVhMO0FBWUxDLGdCQUFVLElBWkw7QUFhTEMsZ0JBQVUsSUFiTDtBQWNMQyxjQUFRLGlCQWRIO0FBZUxDLGNBQVEsa0JBZkg7QUFnQkxDLGNBQVEsbUJBaEJIO0FBaUJMQyxrQkFBWSxpQkFqQlA7QUFrQkxDLG1CQUFhLG1CQWxCUjtBQW1CTEMsV0FBSyxtQkFuQkE7QUFvQkxDLGNBQVEsaUJBcEJIO0FBcUJMQyxhQUFPLGdCQXJCRjtBQXNCTEMsZUFBUyxpQkF0Qko7QUF1QkxDLGdCQUFVLG1CQXZCTDtBQXdCTEMsY0FBUSwyQkF4Qkg7QUF5QkxDLGNBQVEsMkJBekJIO0FBMEJMQyxlQUFTLDJCQTFCSjtBQTJCTEMsWUFBTSwyQkEzQkQ7QUE0QkxDLGdCQUFVLDJCQTVCTDtBQTZCTEMsa0JBQVksMkJBN0JQO0FBOEJMQyxlQUFTLDJCQTlCSjtBQStCTEMsWUFBTTtBQS9CRCxLOzs7O0VBSnlCLGVBQUtDLEk7O2tCQUFsQjVCLEkiLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnVGFvQmFvJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgaW1nVXJsczogW1xuICAgICAgJ2h0dHA6Ly9pbWczLmltZ3RuLmJkaW1nLmNvbS9pdC91PTIwMjM1NTgzMzYsODM1NTMxMjQxJmZtPTI3JmdwPTAuanBnJyxcbiAgICAgICdodHRwOi8vaW1nMS5pbWd0bi5iZGltZy5jb20vaXQvdT0yMTQ4MDk4Njc3LDI1NTkyODMxOTImZm09MjcmZ3A9MC5qcGcnLFxuICAgICAgJ2h0dHA6Ly9pbWczLmltZ3RuLmJkaW1nLmNvbS9pdC91PTEwNjI0NDQ2OTYsMjA5NjIyODEwMyZmbT0yNyZncD0wLmpwZycsXG4gICAgICAnaHR0cDovL2ltZzAuaW1ndG4uYmRpbWcuY29tL2l0L3U9MjU2ODUzMTY3MSwzMDU1ODUyMjEmZm09MjcmZ3A9MC5qcGcnLFxuICAgICAgJ2h0dHA6Ly9pbWczLmltZ3RuLmJkaW1nLmNvbS9pdC91PTgyODM0Nzk5NywzNjA4OTg1MjA4JmZtPTI3JmdwPTAuanBnJyxcbiAgICAgICdodHRwOi8vaW1nNC5pbWd0bi5iZGltZy5jb20vaXQvdT0zMzExNjk4MTYyLDM4OTg2MzY5MzYmZm09MjcmZ3A9MC5qcGcnXG4gICAgXSxcbiAgICBpbmRpY2F0b3JEb3RzOiB0cnVlLFxuICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgIGludGVydmFsOiAyMDAwLFxuICAgIGR1cmF0aW9uOiAxMDAwLFxuICAgIHZlcnRpY2FsOiB0cnVlLFxuICAgIHNreWNhdDogJy4uL2ltYWdlL+WkqeeMqy5wbmcnLFxuICAgIGdhdGhlcjogJy4uL2ltYWdlL+iBmuWIkueuly5wbmcnLFxuICAgIGdsb2JhbDogJy4uL2ltYWdlL+i/m+WPo+WVhuWTgS5wbmcnLFxuICAgIHJlc3RhdXJhbnQ6ICcuLi9pbWFnZS/lpJbljZYucG5nJyxcbiAgICBzdXBlcm1hcmtldDogJy4uL2ltYWdlL+WkqeeMq+i2heW4gi5wbmcnLFxuICAgIHBheTogJy4uL2ltYWdlL+WFheWAvOS4reW/gy5wbmcnLFxuICAgIHRyYXZlbDogJy4uL2ltYWdlL+aXheihjC5wbmcnLFxuICAgIG1vbmV5OiAnLi4vaW1hZ2Uv5reYLnBuZycsXG4gICAgYXVjdGlvbjogJy4uL2ltYWdlL+aLjeWNli5wbmcnLFxuICAgIGNsYXNzaWZ5OiAnLi4vaW1hZ2Uv5YiG57G75pu+77yMLnBuZycsXG4gICAgY290dG9uOiAnLi4vaW1hZ2UvV2VjaGF0SU1HMjYuanBlZycsXG4gICAgamFja2V0OiAnLi4vaW1hZ2UvV2VjaGF0SU1HMjguanBlZycsXG4gICAgc3dlYXRlcjogJy4uL2ltYWdlL1dlY2hhdElNRzI5LmpwZWcnLFxuICAgIHdvb2w6ICcuLi9pbWFnZS9XZWNoYXRJTUczMC5qcGVnJyxcbiAgICBkb3duY29hdDogJy4uL2ltYWdlL1dlY2hhdElNRzMxLmpwZWcnLFxuICAgIGRvd25qYWNrZXQ6ICcuLi9pbWFnZS9XZWNoYXRJTUczMi5qcGVnJyxcbiAgICBzdXJuYW1lOiAnLi4vaW1hZ2UvV2VjaGF0SU1HMzMuanBlZycsXG4gICAgZ29sZDogJy4uL2ltYWdlL1dlY2hhdElNRzM0LmpwZWcnXG4gIH1cbn1cbiJdfQ==