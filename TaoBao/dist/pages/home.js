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
      classify: '../image/分类曾，.png'
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Home;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Home , 'pages/home'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiSG9tZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiaW1nVXJscyIsImluZGljYXRvckRvdHMiLCJhdXRvcGxheSIsImludGVydmFsIiwiZHVyYXRpb24iLCJ2ZXJ0aWNhbCIsInNreWNhdCIsImdhdGhlciIsImdsb2JhbCIsInJlc3RhdXJhbnQiLCJzdXBlcm1hcmtldCIsInBheSIsInRyYXZlbCIsIm1vbmV5IiwiYXVjdGlvbiIsImNsYXNzaWZ5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxlQUFTLENBQ1Asc0VBRE8sRUFFUCx1RUFGTyxFQUdQLHVFQUhPLEVBSVAsc0VBSk8sRUFLUCxzRUFMTyxFQU1QLHVFQU5PLENBREo7QUFTTEMscUJBQWUsSUFUVjtBQVVMQyxnQkFBVSxJQVZMO0FBV0xDLGdCQUFVLElBWEw7QUFZTEMsZ0JBQVUsSUFaTDtBQWFMQyxnQkFBVSxJQWJMO0FBY0xDLGNBQVEsaUJBZEg7QUFlTEMsY0FBUSxrQkFmSDtBQWdCTEMsY0FBUSxtQkFoQkg7QUFpQkxDLGtCQUFZLGlCQWpCUDtBQWtCTEMsbUJBQWEsbUJBbEJSO0FBbUJMQyxXQUFLLG1CQW5CQTtBQW9CTEMsY0FBUSxpQkFwQkg7QUFxQkxDLGFBQU8sZ0JBckJGO0FBc0JMQyxlQUFTLGlCQXRCSjtBQXVCTEMsZ0JBQVU7QUF2QkwsSzs7OztFQUp5QixlQUFLQyxJOztrQkFBbEJwQixJIiwiZmlsZSI6ImhvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ1Rhb0JhbydcbiAgfVxuICBkYXRhID0ge1xuICAgIGltZ1VybHM6IFtcbiAgICAgICdodHRwOi8vaW1nMy5pbWd0bi5iZGltZy5jb20vaXQvdT0yMDIzNTU4MzM2LDgzNTUzMTI0MSZmbT0yNyZncD0wLmpwZycsXG4gICAgICAnaHR0cDovL2ltZzEuaW1ndG4uYmRpbWcuY29tL2l0L3U9MjE0ODA5ODY3NywyNTU5MjgzMTkyJmZtPTI3JmdwPTAuanBnJyxcbiAgICAgICdodHRwOi8vaW1nMy5pbWd0bi5iZGltZy5jb20vaXQvdT0xMDYyNDQ0Njk2LDIwOTYyMjgxMDMmZm09MjcmZ3A9MC5qcGcnLFxuICAgICAgJ2h0dHA6Ly9pbWcwLmltZ3RuLmJkaW1nLmNvbS9pdC91PTI1Njg1MzE2NzEsMzA1NTg1MjIxJmZtPTI3JmdwPTAuanBnJyxcbiAgICAgICdodHRwOi8vaW1nMy5pbWd0bi5iZGltZy5jb20vaXQvdT04MjgzNDc5OTcsMzYwODk4NTIwOCZmbT0yNyZncD0wLmpwZycsXG4gICAgICAnaHR0cDovL2ltZzQuaW1ndG4uYmRpbWcuY29tL2l0L3U9MzMxMTY5ODE2MiwzODk4NjM2OTM2JmZtPTI3JmdwPTAuanBnJ1xuICAgIF0sXG4gICAgaW5kaWNhdG9yRG90czogdHJ1ZSxcbiAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICBpbnRlcnZhbDogMjAwMCxcbiAgICBkdXJhdGlvbjogMTAwMCxcbiAgICB2ZXJ0aWNhbDogdHJ1ZSxcbiAgICBza3ljYXQ6ICcuLi9pbWFnZS/lpKnnjKsucG5nJyxcbiAgICBnYXRoZXI6ICcuLi9pbWFnZS/ogZrliJLnrpcucG5nJyxcbiAgICBnbG9iYWw6ICcuLi9pbWFnZS/ov5vlj6PllYblk4EucG5nJyxcbiAgICByZXN0YXVyYW50OiAnLi4vaW1hZ2Uv5aSW5Y2WLnBuZycsXG4gICAgc3VwZXJtYXJrZXQ6ICcuLi9pbWFnZS/lpKnnjKvotoXluIIucG5nJyxcbiAgICBwYXk6ICcuLi9pbWFnZS/lhYXlgLzkuK3lv4MucG5nJyxcbiAgICB0cmF2ZWw6ICcuLi9pbWFnZS/ml4XooYwucG5nJyxcbiAgICBtb25leTogJy4uL2ltYWdlL+a3mC5wbmcnLFxuICAgIGF1Y3Rpb246ICcuLi9pbWFnZS/mi43ljZYucG5nJyxcbiAgICBjbGFzc2lmeTogJy4uL2ltYWdlL+WIhuexu+abvu+8jC5wbmcnXG4gIH1cbn1cbiJdfQ==