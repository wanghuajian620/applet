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
    }, _this.methods = {
      join: function join(e) {
        var self = this;

        _wepy2.default.showModal({
          title: '提示',
          content: '加入成功',
          showCancel: false,
          success: function success(res) {
            try {
              // const index = e.cuurentTarget.dataset.index
              var value = _wepy2.default.getStorageSync('shopping');
              if (value) {
                value.push({
                  title: self.title,
                  pic: self.pic[0],
                  num: self.num
                });

                _wepy2.default.setStorageSync('shopping', value);
              } else {
                var _value = [];

                _value.push({
                  title: self.title,
                  pic: self.pic[0],
                  num: self.num
                });

                _wepy2.default.setStorageSync('shopping', _value);
              }
            } catch (e) {}
          }
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(data) {
      var self = this;
      self.title = data.title;
      self.num = data.num;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklNRzI2LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJpbWdVcmxzIiwiaW5kaWNhdG9yRG90cyIsImF1dG9wbGF5IiwiaW50ZXJ2YWwiLCJkdXJhdGlvbiIsInZlcnRpY2FsIiwiY29pbiIsImNoZWNrIiwicGFzcyIsIndpZHRoIiwiaGVpZ2h0IiwiaXRlbSIsInRpdGxlIiwicGljIiwibWV0aG9kcyIsImpvaW4iLCJlIiwic2VsZiIsInNob3dNb2RhbCIsImNvbnRlbnQiLCJzaG93Q2FuY2VsIiwic3VjY2VzcyIsInJlcyIsInZhbHVlIiwiZ2V0U3RvcmFnZVN5bmMiLCJwdXNoIiwibnVtIiwic2V0U3RvcmFnZVN5bmMiLCJzcGxpdCIsImNvbnNvbGUiLCJsb2ciLCJnZXRTeXN0ZW1JbmZvIiwid2luZG93V2lkdGgiLCJ3aW5kb3dIZWlnaHQiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsZUFBUyxDQUFDLEVBQUQsQ0FESjtBQUdMQyxxQkFBZSxJQUhWO0FBSUxDLGdCQUFVLElBSkw7QUFLTEMsZ0JBQVUsSUFMTDtBQU1MQyxnQkFBVSxJQU5MO0FBT0xDLGdCQUFVLElBUEw7QUFRTEMsWUFBTSxrQkFSRDtBQVNMQyxhQUFPLG1CQVRGO0FBVUxDLFlBQU0sb0JBVkQ7QUFXTEMsYUFBTyxFQVhGO0FBWUxDLGNBQVEsRUFaSDtBQWFMQyxZQUFNLEVBYkQ7QUFjTDtBQUNBQyxhQUFPLEVBZkY7QUFnQkxDLFdBQUs7QUFoQkEsSyxRQWtCUEMsTyxHQUFVO0FBQ1JDLFVBRFEsZ0JBQ0hDLENBREcsRUFDQTtBQUNOLFlBQUlDLE9BQU8sSUFBWDs7QUFFQSx1QkFBS0MsU0FBTCxDQUFlO0FBQ2JOLGlCQUFPLElBRE07QUFFYk8sbUJBQVMsTUFGSTtBQUdiQyxzQkFBWSxLQUhDO0FBSWJDLG1CQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckIsZ0JBQUk7QUFDRjtBQUNBLGtCQUFJQyxRQUFRLGVBQUtDLGNBQUwsQ0FBb0IsVUFBcEIsQ0FBWjtBQUNBLGtCQUFJRCxLQUFKLEVBQVc7QUFDVEEsc0JBQU1FLElBQU4sQ0FBVztBQUNUYix5QkFBT0ssS0FBS0wsS0FESDtBQUVUQyx1QkFBS0ksS0FBS0osR0FBTCxDQUFTLENBQVQsQ0FGSTtBQUdUYSx1QkFBS1QsS0FBS1M7QUFIRCxpQkFBWDs7QUFNQSwrQkFBS0MsY0FBTCxDQUFvQixVQUFwQixFQUFnQ0osS0FBaEM7QUFDRCxlQVJELE1BUU87QUFDTCxvQkFBSUEsU0FBUSxFQUFaOztBQUVBQSx1QkFBTUUsSUFBTixDQUFXO0FBQ1RiLHlCQUFPSyxLQUFLTCxLQURIO0FBRVRDLHVCQUFLSSxLQUFLSixHQUFMLENBQVMsQ0FBVCxDQUZJO0FBR1RhLHVCQUFLVCxLQUFLUztBQUhELGlCQUFYOztBQU1BLCtCQUFLQyxjQUFMLENBQW9CLFVBQXBCLEVBQWdDSixNQUFoQztBQUNEO0FBQ0YsYUF0QkQsQ0FzQkUsT0FBT1AsQ0FBUCxFQUFVLENBQ1g7QUFDRjtBQTdCWSxTQUFmO0FBK0JEO0FBbkNPLEs7Ozs7OzJCQXFDSGpCLEksRUFBTTtBQUNYLFVBQUlrQixPQUFPLElBQVg7QUFDQUEsV0FBS0wsS0FBTCxHQUFhYixLQUFLYSxLQUFsQjtBQUNBSyxXQUFLUyxHQUFMLEdBQVczQixLQUFLMkIsR0FBaEI7QUFDQVQsV0FBS0osR0FBTCxHQUFXZCxLQUFLYyxHQUFMLENBQVNlLEtBQVQsQ0FBZSxHQUFmLENBQVgsQ0FKVyxDQUltQjtBQUM5QkMsY0FBUUMsR0FBUixDQUFZL0IsS0FBS2MsR0FBakI7QUFDQSxxQkFBS2tCLGFBQUwsQ0FBbUI7QUFDakJWLGVBRGlCLG1CQUNUQyxHQURTLEVBQ0o7QUFDWCxjQUFJTCxPQUFPLElBQVg7QUFDQUEsZUFBS1IsS0FBTCxHQUFhYSxJQUFJVSxXQUFqQjtBQUNBZixlQUFLUCxNQUFMLEdBQWNZLElBQUlXLFlBQWxCO0FBQ0Q7QUFMZ0IsT0FBbkI7QUFPRDs7OztFQXhFZ0MsZUFBS0MsSTs7a0JBQW5CdEMsSyIsImZpbGUiOiJJTUcyNi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+mSiOe7h+ihqydcbiAgfVxuICBkYXRhID0ge1xuICAgIGltZ1VybHM6IFsnJ1xuICAgIF0sXG4gICAgaW5kaWNhdG9yRG90czogdHJ1ZSxcbiAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICBpbnRlcnZhbDogMjAwMCxcbiAgICBkdXJhdGlvbjogMTAwMCxcbiAgICB2ZXJ0aWNhbDogdHJ1ZSxcbiAgICBjb2luOiAnLi4vaW1hZ2Uv6ZKxLTIucG5nJyxcbiAgICBjaGVjazogJy4uL2ltYWdlL+WvueWLvi0zLnBuZycsXG4gICAgcGFzczogJy4uL2ltYWdlL+Wkp+S6juWPty0yLnBuZycsXG4gICAgd2lkdGg6ICcnLFxuICAgIGhlaWdodDogJycsXG4gICAgaXRlbTogJycsXG4gICAgLy8gaWNvbjogJycsXG4gICAgdGl0bGU6ICcnLFxuICAgIHBpYzogW11cbiAgfVxuICBtZXRob2RzID0ge1xuICAgIGpvaW4oZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG5cbiAgICAgIHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICBjb250ZW50OiAn5Yqg5YWl5oiQ5YqfJyxcbiAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBjb25zdCBpbmRleCA9IGUuY3V1cmVudFRhcmdldC5kYXRhc2V0LmluZGV4XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdzaG9wcGluZycpXG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgdmFsdWUucHVzaCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IHNlbGYudGl0bGUsXG4gICAgICAgICAgICAgICAgcGljOiBzZWxmLnBpY1swXSxcbiAgICAgICAgICAgICAgICBudW06IHNlbGYubnVtXG4gICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnc2hvcHBpbmcnLCB2YWx1ZSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGxldCB2YWx1ZSA9IFtdXG5cbiAgICAgICAgICAgICAgdmFsdWUucHVzaCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IHNlbGYudGl0bGUsXG4gICAgICAgICAgICAgICAgcGljOiBzZWxmLnBpY1swXSxcbiAgICAgICAgICAgICAgICBudW06IHNlbGYubnVtXG4gICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnc2hvcHBpbmcnLCB2YWx1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBvbkxvYWQoZGF0YSkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHNlbGYudGl0bGUgPSBkYXRhLnRpdGxlXG4gICAgc2VsZi5udW0gPSBkYXRhLm51bVxuICAgIHNlbGYucGljID0gZGF0YS5waWMuc3BsaXQoJywnKS8vIHNwbGl0KCwp5L2c55So5piv5oqK6YCX5Y+36ZqU5byA55qE5a2X56ym5Liy6L2s5o2i5oiQ5pWw57uEXG4gICAgY29uc29sZS5sb2coZGF0YS5waWMpXG4gICAgd2VweS5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgICBzZWxmLndpZHRoID0gcmVzLndpbmRvd1dpZHRoXG4gICAgICAgIHNlbGYuaGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodFxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==