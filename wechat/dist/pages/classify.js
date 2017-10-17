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
      navigationBarTitleText: '博客',
      enablePullDownRefresh: true
    }, _this.data = {
      text: 'js',
      color1: '#CCFFFF',
      color2: '#202020',
      color3: '#202020',
      color4: '#202020'
    }, _this.methods = {
      js: function js() {
        var self = this;

        self.text = 'javascript';
        self.color1 = '#CCFFFF';
        self.color2 = '#202020';
        self.color3 = '#202020';
        self.color4 = '#202020';
      },
      client: function client() {
        var self = this;

        self.text = 'client';
        self.color1 = '#202020';
        self.color2 = '#CCFFFF';
        self.color3 = '#202020';
        self.color4 = '#202020';
      },
      server: function server() {
        var self = this;

        self.text = 'server';
        self.color1 = '#202020';
        self.color2 = '#202020';
        self.color3 = '#CCFFFF';
        self.color4 = '#202020';
      },
      jotting: function jotting() {
        var self = this;

        self.text = 'jotting';
        self.color1 = '#202020';
        self.color2 = '#202020';
        self.color3 = '#202020';
        self.color4 = '#CCFFFF';
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }, {
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {
      _wepy2.default.startPullDownRefresh();
      setTimeout(function () {
        _wepy2.default.stopPullDownRefresh();
      }, 1000);
    }
  }, {
    key: 'onShareAppMessage',
    value: function onShareAppMessage() {
      return {
        title: '博客',
        path: '/pages/classify'
      };
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/classify'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYXNzaWZ5LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImVuYWJsZVB1bGxEb3duUmVmcmVzaCIsImRhdGEiLCJ0ZXh0IiwiY29sb3IxIiwiY29sb3IyIiwiY29sb3IzIiwiY29sb3I0IiwibWV0aG9kcyIsImpzIiwic2VsZiIsImNsaWVudCIsInNlcnZlciIsImpvdHRpbmciLCJzdGFydFB1bGxEb3duUmVmcmVzaCIsInNldFRpbWVvdXQiLCJzdG9wUHVsbERvd25SZWZyZXNoIiwidGl0bGUiLCJwYXRoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLElBRGpCO0FBRVBDLDZCQUF1QjtBQUZoQixLLFFBSVRDLEksR0FBTztBQUNMQyxZQUFNLElBREQ7QUFFTEMsY0FBUSxTQUZIO0FBR0xDLGNBQVEsU0FISDtBQUlMQyxjQUFRLFNBSkg7QUFLTEMsY0FBUTtBQUxILEssUUFPUEMsTyxHQUFVO0FBQ1JDLFFBRFEsZ0JBQ0g7QUFDSCxZQUFJQyxPQUFPLElBQVg7O0FBRUFBLGFBQUtQLElBQUwsR0FBWSxZQUFaO0FBQ0FPLGFBQUtOLE1BQUwsR0FBYyxTQUFkO0FBQ0FNLGFBQUtMLE1BQUwsR0FBYyxTQUFkO0FBQ0FLLGFBQUtKLE1BQUwsR0FBYyxTQUFkO0FBQ0FJLGFBQUtILE1BQUwsR0FBYyxTQUFkO0FBQ0QsT0FUTztBQVdSSSxZQVhRLG9CQVdDO0FBQ1AsWUFBSUQsT0FBTyxJQUFYOztBQUVBQSxhQUFLUCxJQUFMLEdBQVksUUFBWjtBQUNBTyxhQUFLTixNQUFMLEdBQWMsU0FBZDtBQUNBTSxhQUFLTCxNQUFMLEdBQWMsU0FBZDtBQUNBSyxhQUFLSixNQUFMLEdBQWMsU0FBZDtBQUNBSSxhQUFLSCxNQUFMLEdBQWMsU0FBZDtBQUNELE9BbkJPO0FBb0JSSyxZQXBCUSxvQkFvQkM7QUFDUCxZQUFJRixPQUFPLElBQVg7O0FBRUFBLGFBQUtQLElBQUwsR0FBWSxRQUFaO0FBQ0FPLGFBQUtOLE1BQUwsR0FBYyxTQUFkO0FBQ0FNLGFBQUtMLE1BQUwsR0FBYyxTQUFkO0FBQ0FLLGFBQUtKLE1BQUwsR0FBYyxTQUFkO0FBQ0FJLGFBQUtILE1BQUwsR0FBYyxTQUFkO0FBQ0QsT0E1Qk87QUE2QlJNLGFBN0JRLHFCQTZCRTtBQUNSLFlBQUlILE9BQU8sSUFBWDs7QUFFQUEsYUFBS1AsSUFBTCxHQUFZLFNBQVo7QUFDQU8sYUFBS04sTUFBTCxHQUFjLFNBQWQ7QUFDQU0sYUFBS0wsTUFBTCxHQUFjLFNBQWQ7QUFDQUssYUFBS0osTUFBTCxHQUFjLFNBQWQ7QUFDQUksYUFBS0gsTUFBTCxHQUFjLFNBQWQ7QUFDRDtBQXJDTyxLOzs7Ozs2QkF1Q0QsQ0FBRzs7O3dDQUVRO0FBQ2xCLHFCQUFLTyxvQkFBTDtBQUNBQyxpQkFBVyxZQUFXO0FBQ3BCLHVCQUFLQyxtQkFBTDtBQUNELE9BRkQsRUFFRyxJQUZIO0FBR0Q7Ozt3Q0FFbUI7QUFDbEIsYUFBTztBQUNMQyxlQUFPLElBREY7QUFFTEMsY0FBTTtBQUZELE9BQVA7QUFJRDs7OztFQWpFZ0MsZUFBS0MsSTs7a0JBQW5CckIsSyIsImZpbGUiOiJjbGFzc2lmeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WNmuWuoicsXG4gICAgZW5hYmxlUHVsbERvd25SZWZyZXNoOiB0cnVlXG4gIH1cbiAgZGF0YSA9IHtcbiAgICB0ZXh0OiAnanMnLFxuICAgIGNvbG9yMTogJyNDQ0ZGRkYnLFxuICAgIGNvbG9yMjogJyMyMDIwMjAnLFxuICAgIGNvbG9yMzogJyMyMDIwMjAnLFxuICAgIGNvbG9yNDogJyMyMDIwMjAnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBqcygpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuXG4gICAgICBzZWxmLnRleHQgPSAnamF2YXNjcmlwdCdcbiAgICAgIHNlbGYuY29sb3IxID0gJyNDQ0ZGRkYnXG4gICAgICBzZWxmLmNvbG9yMiA9ICcjMjAyMDIwJ1xuICAgICAgc2VsZi5jb2xvcjMgPSAnIzIwMjAyMCdcbiAgICAgIHNlbGYuY29sb3I0ID0gJyMyMDIwMjAnXG4gICAgfSxcblxuICAgIGNsaWVudCgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuXG4gICAgICBzZWxmLnRleHQgPSAnY2xpZW50J1xuICAgICAgc2VsZi5jb2xvcjEgPSAnIzIwMjAyMCdcbiAgICAgIHNlbGYuY29sb3IyID0gJyNDQ0ZGRkYnXG4gICAgICBzZWxmLmNvbG9yMyA9ICcjMjAyMDIwJ1xuICAgICAgc2VsZi5jb2xvcjQgPSAnIzIwMjAyMCdcbiAgICB9LFxuICAgIHNlcnZlcigpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuXG4gICAgICBzZWxmLnRleHQgPSAnc2VydmVyJ1xuICAgICAgc2VsZi5jb2xvcjEgPSAnIzIwMjAyMCdcbiAgICAgIHNlbGYuY29sb3IyID0gJyMyMDIwMjAnXG4gICAgICBzZWxmLmNvbG9yMyA9ICcjQ0NGRkZGJ1xuICAgICAgc2VsZi5jb2xvcjQgPSAnIzIwMjAyMCdcbiAgICB9LFxuICAgIGpvdHRpbmcoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcblxuICAgICAgc2VsZi50ZXh0ID0gJ2pvdHRpbmcnXG4gICAgICBzZWxmLmNvbG9yMSA9ICcjMjAyMDIwJ1xuICAgICAgc2VsZi5jb2xvcjIgPSAnIzIwMjAyMCdcbiAgICAgIHNlbGYuY29sb3IzID0gJyMyMDIwMjAnXG4gICAgICBzZWxmLmNvbG9yNCA9ICcjQ0NGRkZGJ1xuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7IH1cblxuICBvblB1bGxEb3duUmVmcmVzaCgpIHtcbiAgICB3ZXB5LnN0YXJ0UHVsbERvd25SZWZyZXNoKClcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgd2VweS5zdG9wUHVsbERvd25SZWZyZXNoKClcbiAgICB9LCAxMDAwKVxuICB9XG5cbiAgb25TaGFyZUFwcE1lc3NhZ2UoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiAn5Y2a5a6iJyxcbiAgICAgIHBhdGg6ICcvcGFnZXMvY2xhc3NpZnknXG4gICAgfVxuICB9XG59XG4iXX0=