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
      navigationBarTitleText: '分类',
      enablePullDownRefresh: true
    }, _this.data = {
      // text: 'js',
      JavaScript: '#62b900',
      JavaScriptline: '#62b900',
      HTML: '#202020',
      HTMLline: '#FFFFFF',
      Node: '#202020',
      Nodeline: '#FFFFFF',
      ES6: '#202020',
      ES6line: '#FFFFFF',
      CSS: '#202020',
      CSSline: '#FFFFFF',
      height: 0,
      width: 0
    }, _this.methods = {
      js: function js() {
        var self = this;

        // self.text = 'javascript'
        self.JavaScript = '#62b900';
        self.JavaScriptline = '#62b900';
        self.HTML = '#202020';
        self.HTMLline = '#FFFFFF';
        self.Node = '#202020';
        self.Nodeline = '#FFFFFF';
        self.ES6 = '#202020';
        self.ES6line = '#FFFFFF';
        self.CSS = '#202020';
        self.CSSline = '#FFFFFF';
      },
      HTML: function HTML() {
        var self = this;

        // self.text = 'client'
        self.JavaScript = '#202020';
        self.JavaScriptline = '#FFFFFF';
        self.HTML = '#62b900';
        self.HTMLline = '#62b900';
        self.Node = '#202020';
        self.Nodeline = '#FFFFFF';
        self.ES6 = '#202020';
        self.ES6line = '#FFFFFF';
        self.CSS = '#202020';
        self.CSSline = '#FFFFFF';
      },
      Node: function Node() {
        var self = this;

        // self.text = 'server'
        self.JavaScript = '#202020';
        self.JavaScriptline = '#FFFFFF';
        self.HTML = '#202020';
        self.HTMLline = '#FFFFFF';
        self.Node = '#62b900';
        self.Nodeline = '#62b900';
        self.ES6 = '#202020';
        self.ES6line = '#FFFFFF';
        self.CSS = '#202020';
        self.CSSline = '#FFFFFF';
      },
      ES6: function ES6() {
        var self = this;

        // self.text = 'jotting'
        self.JavaScript = '#202020';
        self.JavaScriptline = '#FFFFFF';
        self.HTML = '#202020';
        self.HTMLline = '#FFFFFF';
        self.Node = '#202020';
        self.Nodeline = '#FFFFFF';
        self.ES6 = '#62b900';
        self.ES6line = '#62b900';
        self.CSS = '#202020';
        self.CSSline = '#FFFFFF';
      },
      CSS: function CSS() {
        var self = this;

        // self.text = 'CSS'
        self.JavaScript = '#202020';
        self.JavaScriptline = '#FFFFFF';
        self.HTML = '#202020';
        self.HTMLline = '#FFFFFF';
        self.Node = '#202020';
        self.Nodeline = '#FFFFFF';
        self.ES6 = '#202020';
        self.ES6line = '#FFFFFF';
        self.CSS = '#62b900';
        self.CSSline = '#62b900';
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      _wepy2.default.getSystemInfo({
        success: function success(res) {
          self.height = res.windowHeight;
          self.width = res.windowWidth;
        }
      });
    }
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
        title: '分类',
        path: '/pages/classify'
      };
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/classify'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYXNzaWZ5LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImVuYWJsZVB1bGxEb3duUmVmcmVzaCIsImRhdGEiLCJKYXZhU2NyaXB0IiwiSmF2YVNjcmlwdGxpbmUiLCJIVE1MIiwiSFRNTGxpbmUiLCJOb2RlIiwiTm9kZWxpbmUiLCJFUzYiLCJFUzZsaW5lIiwiQ1NTIiwiQ1NTbGluZSIsImhlaWdodCIsIndpZHRoIiwibWV0aG9kcyIsImpzIiwic2VsZiIsImdldFN5c3RlbUluZm8iLCJzdWNjZXNzIiwicmVzIiwid2luZG93SGVpZ2h0Iiwid2luZG93V2lkdGgiLCJzdGFydFB1bGxEb3duUmVmcmVzaCIsInNldFRpbWVvdXQiLCJzdG9wUHVsbERvd25SZWZyZXNoIiwidGl0bGUiLCJwYXRoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLElBRGpCO0FBRVBDLDZCQUF1QjtBQUZoQixLLFFBSVRDLEksR0FBTztBQUNMO0FBQ0FDLGtCQUFZLFNBRlA7QUFHTEMsc0JBQWdCLFNBSFg7QUFJTEMsWUFBTSxTQUpEO0FBS0xDLGdCQUFVLFNBTEw7QUFNTEMsWUFBTSxTQU5EO0FBT0xDLGdCQUFVLFNBUEw7QUFRTEMsV0FBSyxTQVJBO0FBU0xDLGVBQVMsU0FUSjtBQVVMQyxXQUFLLFNBVkE7QUFXTEMsZUFBUyxTQVhKO0FBWUxDLGNBQVEsQ0FaSDtBQWFMQyxhQUFPO0FBYkYsSyxRQWVQQyxPLEdBQVU7QUFDUkMsUUFEUSxnQkFDSDtBQUNILFlBQUlDLE9BQU8sSUFBWDs7QUFFQTtBQUNBQSxhQUFLZCxVQUFMLEdBQWtCLFNBQWxCO0FBQ0FjLGFBQUtiLGNBQUwsR0FBc0IsU0FBdEI7QUFDQWEsYUFBS1osSUFBTCxHQUFZLFNBQVo7QUFDQVksYUFBS1gsUUFBTCxHQUFnQixTQUFo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bEIsYUFBTztBQUNMQyxlQUFPLElBREY7QUFFTEMsY0FBTTtBQUZELE9BQVA7QUFJRDs7OztFQXZIZ0MsZUFBS0MsSTs7a0JBQW5COUIsSyIsImZpbGUiOiJjbGFzc2lmeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WIhuexuycsXG4gICAgZW5hYmxlUHVsbERvd25SZWZyZXNoOiB0cnVlXG4gIH1cbiAgZGF0YSA9IHtcbiAgICAvLyB0ZXh0OiAnanMnLFxuICAgIEphdmFTY3JpcHQ6ICcjNjJiOTAwJyxcbiAgICBKYXZhU2NyaXB0bGluZTogJyM2MmI5MDAnLFxuICAgIEhUTUw6ICcjMjAyMDIwJyxcbiAgICBIVE1MbGluZTogJyNGRkZGRkYnLFxuICAgIE5vZGU6ICcjMjAyMDIwJyxcbiAgICBOb2RlbGluZTogJyNGRkZGRkYnLFxuICAgIEVTNjogJyMyMDIwMjAnLFxuICAgIEVTNmxpbmU6ICcjRkZGRkZGJyxcbiAgICBDU1M6ICcjMjAyMDIwJyxcbiAgICBDU1NsaW5lOiAnI0ZGRkZGRicsXG4gICAgaGVpZ2h0OiAwLFxuICAgIHdpZHRoOiAwXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBqcygpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuXG4gICAgICAvLyBzZWxmLnRleHQgPSAnamF2YXNjcmlwdCdcbiAgICAgIHNlbGYuSmF2YVNjcmlwdCA9ICcjNjJiOTAwJ1xuICAgICAgc2VsZi5KYXZhU2NyaXB0bGluZSA9ICcjNjJiOTAwJ1xuICAgICAgc2VsZi5IVE1MID0gJyMyMDIwMjAnXG4gICAgICBzZWxmLkhUTUxsaW5lID0gJyNGRkZGRkYnXG4gICAgICBzZWxmLk5vZGUgPSAnIzIwMjAyMCdcbiAgICAgIHNlbGYuTm9kZWxpbmUgPSAnI0ZGRkZGRidcbiAgICAgIHNlbGYuRVM2ID0gJyMyMDIwMjAnXG4gICAgICBzZWxmLkVTNmxpbmUgPSAnI0ZGRkZGRidcbiAgICAgIHNlbGYuQ1NTID0gJyMyMDIwMjAnXG4gICAgICBzZWxmLkNTU2xpbmUgPSAnI0ZGRkZGRidcbiAgICB9LFxuXG4gICAgSFRNTCgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuXG4gICAgICAvLyBzZWxmLnRleHQgPSAnY2xpZW50J1xuICAgICAgc2VsZi5KYXZhU2NyaXB0ID0gJyMyMDIwMjAnXG4gICAgICBzZWxmLkphdmFTY3JpcHRsaW5lID0gJyNGRkZGRkYnXG4gICAgICBzZWxmLkhUTUwgPSAnIzYyYjkwMCdcbiAgICAgIHNlbGYuSFRNTGxpbmUgPSAnIzYyYjkwMCdcbiAgICAgIHNlbGYuTm9kZSA9ICcjMjAyMDIwJ1xuICAgICAgc2VsZi5Ob2RlbGluZSA9ICcjRkZGRkZGJ1xuICAgICAgc2VsZi5FUzYgPSAnIzIwMjAyMCdcbiAgICAgIHNlbGYuRVM2bGluZSA9ICcjRkZGRkZGJ1xuICAgICAgc2VsZi5DU1MgPSAnIzIwMjAyMCdcbiAgICAgIHNlbGYuQ1NTbGluZSA9ICcjRkZGRkZGJ1xuICAgIH0sXG4gICAgTm9kZSgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuXG4gICAgICAvLyBzZWxmLnRleHQgPSAnc2VydmVyJ1xuICAgICAgc2VsZi5KYXZhU2NyaXB0ID0gJyMyMDIwMjAnXG4gICAgICBzZWxmLkphdmFTY3JpcHRsaW5lID0gJyNGRkZGRkYnXG4gICAgICBzZWxmLkhUTUwgPSAnIzIwMjAyMCdcbiAgICAgIHNlbGYuSFRNTGxpbmUgPSAnI0ZGRkZGRidcbiAgICAgIHNlbGYuTm9kZSA9ICcjNjJiOTAwJ1xuICAgICAgc2VsZi5Ob2RlbGluZSA9ICcjNjJiOTAwJ1xuICAgICAgc2VsZi5FUzYgPSAnIzIwMjAyMCdcbiAgICAgIHNlbGYuRVM2bGluZSA9ICcjRkZGRkZGJ1xuICAgICAgc2VsZi5DU1MgPSAnIzIwMjAyMCdcbiAgICAgIHNlbGYuQ1NTbGluZSA9ICcjRkZGRkZGJ1xuICAgIH0sXG4gICAgRVM2KCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG5cbiAgICAgIC8vIHNlbGYudGV4dCA9ICdqb3R0aW5nJ1xuICAgICAgc2VsZi5KYXZhU2NyaXB0ID0gJyMyMDIwMjAnXG4gICAgICBzZWxmLkphdmFTY3JpcHRsaW5lID0gJyNGRkZGRkYnXG4gICAgICBzZWxmLkhUTUwgPSAnIzIwMjAyMCdcbiAgICAgIHNlbGYuSFRNTGxpbmUgPSAnI0ZGRkZGRidcbiAgICAgIHNlbGYuTm9kZSA9ICcjMjAyMDIwJ1xuICAgICAgc2VsZi5Ob2RlbGluZSA9ICcjRkZGRkZGJ1xuICAgICAgc2VsZi5FUzYgPSAnIzYyYjkwMCdcbiAgICAgIHNlbGYuRVM2bGluZSA9ICcjNjJiOTAwJ1xuICAgICAgc2VsZi5DU1MgPSAnIzIwMjAyMCdcbiAgICAgIHNlbGYuQ1NTbGluZSA9ICcjRkZGRkZGJ1xuICAgIH0sXG4gICAgQ1NTKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG5cbiAgICAgIC8vIHNlbGYudGV4dCA9ICdDU1MnXG4gICAgICBzZWxmLkphdmFTY3JpcHQgPSAnIzIwMjAyMCdcbiAgICAgIHNlbGYuSmF2YVNjcmlwdGxpbmUgPSAnI0ZGRkZGRidcbiAgICAgIHNlbGYuSFRNTCA9ICcjMjAyMDIwJ1xuICAgICAgc2VsZi5IVE1MbGluZSA9ICcjRkZGRkZGJ1xuICAgICAgc2VsZi5Ob2RlID0gJyMyMDIwMjAnXG4gICAgICBzZWxmLk5vZGVsaW5lID0gJyNGRkZGRkYnXG4gICAgICBzZWxmLkVTNiA9ICcjMjAyMDIwJ1xuICAgICAgc2VsZi5FUzZsaW5lID0gJyNGRkZGRkYnXG4gICAgICBzZWxmLkNTUyA9ICcjNjJiOTAwJ1xuICAgICAgc2VsZi5DU1NsaW5lID0gJyM2MmI5MDAnXG4gICAgfVxuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB3ZXB5LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgc2VsZi5oZWlnaHQgPSByZXMud2luZG93SGVpZ2h0XG4gICAgICAgIHNlbGYud2lkdGggPSByZXMud2luZG93V2lkdGhcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIG9uUHVsbERvd25SZWZyZXNoKCkge1xuICAgIHdlcHkuc3RhcnRQdWxsRG93blJlZnJlc2goKVxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICB3ZXB5LnN0b3BQdWxsRG93blJlZnJlc2goKVxuICAgIH0sIDEwMDApXG4gIH1cblxuICBvblNoYXJlQXBwTWVzc2FnZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6ICfliIbnsbsnLFxuICAgICAgcGF0aDogJy9wYWdlcy9jbGFzc2lmeSdcbiAgICB9XG4gIH1cbn1cbiJdfQ==