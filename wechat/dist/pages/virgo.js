'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _text = require('./../audio/text.js');

var _text2 = _interopRequireDefault(_text);

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
      navigationBarTitleText: '博客'
    }, _this.data = {
      killer: '../image/31bf63aec9678fbdced765f51bd0a1f5.jpg',
      music: '../audio/尚雯婕 - 最终信仰.mp3',
      name: '最终信仰',
      author: '尚雯婕',
      shangwenjie: '../image/19e8c807b18775ae8b35b61026d07420.jpg',
      text: '',
      current: '',
      timestamp: ''
    }, _this.methods = {
      update: function update(e) {
        var self = this;
        for (var i = 0; i < self.text.length; i++) {
          console.log(self.text[i][0], e.detail.currentTime.toFixed(2));
          if (self.text[i][0] === e.detail.currentTime.toFixed(2)) {
            self.current = self.text[i][2];
          }
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      self.text = _text2.default;
      console.log(self.text);
    }
  }, {
    key: 'onReady',
    value: function onReady(e) {
      // 使用 wx.createAudioContext 获取 audio 上下文 context
      this.audioCtx = _wepy2.default.createAudioContext('myAudio');
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/virgo'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpcmdvLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJraWxsZXIiLCJtdXNpYyIsIm5hbWUiLCJhdXRob3IiLCJzaGFuZ3dlbmppZSIsInRleHQiLCJjdXJyZW50IiwidGltZXN0YW1wIiwibWV0aG9kcyIsInVwZGF0ZSIsImUiLCJzZWxmIiwiaSIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJkZXRhaWwiLCJjdXJyZW50VGltZSIsInRvRml4ZWQiLCJhdWRpb0N0eCIsImNyZWF0ZUF1ZGlvQ29udGV4dCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLGNBQVEsK0NBREg7QUFFTEMsYUFBTyx5QkFGRjtBQUdMQyxZQUFNLE1BSEQ7QUFJTEMsY0FBUSxLQUpIO0FBS0xDLG1CQUFhLCtDQUxSO0FBTUxDLFlBQU0sRUFORDtBQU9MQyxlQUFTLEVBUEo7QUFRTEMsaUJBQVc7QUFSTixLLFFBVVBDLE8sR0FBVTtBQUNSQyxZQURRLGtCQUNEQyxDQURDLEVBQ0U7QUFDUixZQUFJQyxPQUFPLElBQVg7QUFDQSxhQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSUQsS0FBS04sSUFBTCxDQUFVUSxNQUE5QixFQUFzQ0QsR0FBdEMsRUFBMkM7QUFDekNFLGtCQUFRQyxHQUFSLENBQVlKLEtBQUtOLElBQUwsQ0FBVU8sQ0FBVixFQUFhLENBQWIsQ0FBWixFQUE2QkYsRUFBRU0sTUFBRixDQUFTQyxXQUFULENBQXFCQyxPQUFyQixDQUE2QixDQUE3QixDQUE3QjtBQUNBLGNBQUlQLEtBQUtOLElBQUwsQ0FBVU8sQ0FBVixFQUFhLENBQWIsTUFBb0JGLEVBQUVNLE1BQUYsQ0FBU0MsV0FBVCxDQUFxQkMsT0FBckIsQ0FBNkIsQ0FBN0IsQ0FBeEIsRUFBeUQ7QUFDdkRQLGlCQUFLTCxPQUFMLEdBQWVLLEtBQUtOLElBQUwsQ0FBVU8sQ0FBVixFQUFhLENBQWIsQ0FBZjtBQUNEO0FBQ0Y7QUFDRjtBQVRPLEs7Ozs7OzZCQVdEO0FBQ1AsVUFBSUQsT0FBTyxJQUFYO0FBQ0FBLFdBQUtOLElBQUw7QUFDQVMsY0FBUUMsR0FBUixDQUFZSixLQUFLTixJQUFqQjtBQUNEOzs7NEJBQ09LLEMsRUFBRztBQUNUO0FBQ0EsV0FBS1MsUUFBTCxHQUFnQixlQUFLQyxrQkFBTCxDQUF3QixTQUF4QixDQUFoQjtBQUNEOzs7O0VBakNnQyxlQUFLQyxJOztrQkFBbkJ6QixLIiwiZmlsZSI6InZpcmdvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IHRleHQgZnJvbSAnLi4vYXVkaW8vdGV4dC5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WNmuWuoidcbiAgfVxuICBkYXRhID0ge1xuICAgIGtpbGxlcjogJy4uL2ltYWdlLzMxYmY2M2FlYzk2NzhmYmRjZWQ3NjVmNTFiZDBhMWY1LmpwZycsXG4gICAgbXVzaWM6ICcuLi9hdWRpby/lsJrpm6/lqZUgLSDmnIDnu4jkv6Hku7AubXAzJyxcbiAgICBuYW1lOiAn5pyA57uI5L+h5LuwJyxcbiAgICBhdXRob3I6ICflsJrpm6/lqZUnLFxuICAgIHNoYW5nd2VuamllOiAnLi4vaW1hZ2UvMTllOGM4MDdiMTg3NzVhZThiMzViNjEwMjZkMDc0MjAuanBnJyxcbiAgICB0ZXh0OiAnJyxcbiAgICBjdXJyZW50OiAnJyxcbiAgICB0aW1lc3RhbXA6ICcnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICB1cGRhdGUoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGYudGV4dC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zb2xlLmxvZyhzZWxmLnRleHRbaV1bMF0sIGUuZGV0YWlsLmN1cnJlbnRUaW1lLnRvRml4ZWQoMikpXG4gICAgICAgIGlmIChzZWxmLnRleHRbaV1bMF0gPT09IGUuZGV0YWlsLmN1cnJlbnRUaW1lLnRvRml4ZWQoMikpIHtcbiAgICAgICAgICBzZWxmLmN1cnJlbnQgPSBzZWxmLnRleHRbaV1bMl1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgc2VsZi50ZXh0ID0gdGV4dFxuICAgIGNvbnNvbGUubG9nKHNlbGYudGV4dClcbiAgfVxuICBvblJlYWR5KGUpIHtcbiAgICAvLyDkvb/nlKggd3guY3JlYXRlQXVkaW9Db250ZXh0IOiOt+WPliBhdWRpbyDkuIrkuIvmlocgY29udGV4dFxuICAgIHRoaXMuYXVkaW9DdHggPSB3ZXB5LmNyZWF0ZUF1ZGlvQ29udGV4dCgnbXlBdWRpbycpXG4gIH1cbn1cbiJdfQ==