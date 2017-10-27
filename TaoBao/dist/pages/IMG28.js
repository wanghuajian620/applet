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
      imgUrls: ['https://gd1.alicdn.com/imgextra/i1/143440491/TB2.Ev1cp9gSKJjSspbXXbeNXXa_!!143440491.jpg', 'https://gd1.alicdn.com/imgextra/i1/143440491/TB27aLyjOFTMKJjSZFAXXckJpXa_!!143440491.jpg', 'https://gd3.alicdn.com/imgextra/i3/143440491/TB2vhrkXEMgYeJjSZFGXXXsMXXa_!!143440491.jpg', 'https://gd2.alicdn.com/imgextra/i1/143440491/TB2OHPKklcHL1JjSZJiXXcKcpXa_!!143440491.jpg', 'https://gd4.alicdn.com/imgextra/i4/143440491/TB2RqFPeWmWQ1JjSZPhXXXCJFXa_!!143440491.jpg'],
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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/IMG28'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklNRzI4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJpbWdVcmxzIiwiaW5kaWNhdG9yRG90cyIsImF1dG9wbGF5IiwiaW50ZXJ2YWwiLCJkdXJhdGlvbiIsInZlcnRpY2FsIiwiY29pbiIsImNoZWNrIiwicGFzcyIsIndpZHRoIiwiaGVpZ2h0IiwibWV0aG9kcyIsImdldFN5c3RlbUluZm8iLCJzdWNjZXNzIiwicmVzIiwic2VsZiIsIndpbmRvd1dpZHRoIiwid2luZG93SGVpZ2h0IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLGVBQVMsQ0FDUCwwRkFETyxFQUVQLDBGQUZPLEVBR1AsMEZBSE8sRUFJUCwwRkFKTyxFQUtQLDBGQUxPLENBREo7QUFRTEMscUJBQWUsSUFSVjtBQVNMQyxnQkFBVSxJQVRMO0FBVUxDLGdCQUFVLElBVkw7QUFXTEMsZ0JBQVUsSUFYTDtBQVlMQyxnQkFBVSxJQVpMO0FBYUxDLFlBQU0sa0JBYkQ7QUFjTEMsYUFBTyxtQkFkRjtBQWVMQyxZQUFNLG9CQWZEO0FBZ0JMQyxhQUFPLEVBaEJGO0FBaUJMQyxjQUFRO0FBakJILEssUUFtQlBDLE8sR0FBVSxFOzs7Ozs2QkFDRDtBQUNQLHFCQUFLQyxhQUFMLENBQW1CO0FBQ2pCQyxlQURpQixtQkFDVEMsR0FEUyxFQUNKO0FBQ1gsY0FBSUMsT0FBTyxJQUFYO0FBQ0FBLGVBQUtOLEtBQUwsR0FBYUssSUFBSUUsV0FBakI7QUFDQUQsZUFBS0wsTUFBTCxHQUFjSSxJQUFJRyxZQUFsQjtBQUNEO0FBTGdCLE9BQW5CO0FBT0Q7Ozs7RUFoQ2dDLGVBQUtDLEk7O2tCQUFuQnRCLEsiLCJmaWxlIjoiSU1HMjguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfpkojnu4fooasnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBpbWdVcmxzOiBbXG4gICAgICAnaHR0cHM6Ly9nZDEuYWxpY2RuLmNvbS9pbWdleHRyYS9pMS8xNDM0NDA0OTEvVEIyLkV2MWNwOWdTS0pqU3NwYlhYYmVOWFhhXyEhMTQzNDQwNDkxLmpwZycsXG4gICAgICAnaHR0cHM6Ly9nZDEuYWxpY2RuLmNvbS9pbWdleHRyYS9pMS8xNDM0NDA0OTEvVEIyN2FMeWpPRlRNS0pqU1pGQVhYY2tKcFhhXyEhMTQzNDQwNDkxLmpwZycsXG4gICAgICAnaHR0cHM6Ly9nZDMuYWxpY2RuLmNvbS9pbWdleHRyYS9pMy8xNDM0NDA0OTEvVEIydmhya1hFTWdZZUpqU1pGR1hYWHNNWFhhXyEhMTQzNDQwNDkxLmpwZycsXG4gICAgICAnaHR0cHM6Ly9nZDIuYWxpY2RuLmNvbS9pbWdleHRyYS9pMS8xNDM0NDA0OTEvVEIyT0hQS2tsY0hMMUpqU1pKaVhYY0tjcFhhXyEhMTQzNDQwNDkxLmpwZycsXG4gICAgICAnaHR0cHM6Ly9nZDQuYWxpY2RuLmNvbS9pbWdleHRyYS9pNC8xNDM0NDA0OTEvVEIyUnFGUGVXbVdRMUpqU1pQaFhYWENKRlhhXyEhMTQzNDQwNDkxLmpwZydcbiAgICBdLFxuICAgIGluZGljYXRvckRvdHM6IHRydWUsXG4gICAgYXV0b3BsYXk6IHRydWUsXG4gICAgaW50ZXJ2YWw6IDIwMDAsXG4gICAgZHVyYXRpb246IDEwMDAsXG4gICAgdmVydGljYWw6IHRydWUsXG4gICAgY29pbjogJy4uL2ltYWdlL+mSsS0yLnBuZycsXG4gICAgY2hlY2s6ICcuLi9pbWFnZS/lr7nli74tMy5wbmcnLFxuICAgIHBhc3M6ICcuLi9pbWFnZS/lpKfkuo7lj7ctMi5wbmcnLFxuICAgIHdpZHRoOiAnJyxcbiAgICBoZWlnaHQ6ICcnXG4gIH1cbiAgbWV0aG9kcyA9IHt9XG4gIG9uTG9hZCgpIHtcbiAgICB3ZXB5LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICAgIHNlbGYud2lkdGggPSByZXMud2luZG93V2lkdGhcbiAgICAgICAgc2VsZi5oZWlnaHQgPSByZXMud2luZG93SGVpZ2h0XG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIl19