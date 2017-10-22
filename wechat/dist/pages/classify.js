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
      text: 'js',
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

        self.text = 'javascript';
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

        self.text = 'client';
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

        self.text = 'server';
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

        self.text = 'jotting';
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

        self.text = 'CSS';
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYXNzaWZ5LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImVuYWJsZVB1bGxEb3duUmVmcmVzaCIsImRhdGEiLCJ0ZXh0IiwiSmF2YVNjcmlwdCIsIkphdmFTY3JpcHRsaW5lIiwiSFRNTCIsIkhUTUxsaW5lIiwiTm9kZSIsIk5vZGVsaW5lIiwiRVM2IiwiRVM2bGluZSIsIkNTUyIsIkNTU2xpbmUiLCJoZWlnaHQiLCJ3aWR0aCIsIm1ldGhvZHMiLCJqcyIsInNlbGYiLCJnZXRTeXN0ZW1JbmZvIiwic3VjY2VzcyIsInJlcyIsIndpbmRvd0hlaWdodCIsIndpbmRvd1dpZHRoIiwic3RhcnRQdWxsRG93blJlZnJlc2giLCJzZXRUaW1lb3V0Iiwic3RvcFB1bGxEb3duUmVmcmVzaCIsInRpdGxlIiwicGF0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixJQURqQjtBQUVQQyw2QkFBdUI7QUFGaEIsSyxRQUlUQyxJLEdBQU87QUFDTEMsWUFBTSxJQUREO0FBRUxDLGtCQUFZLFNBRlA7QUFHTEMsc0JBQWdCLFNBSFg7QUFJTEMsWUFBTSxTQUpEO0FBS0xDLGdCQUFVLFNBTEw7QUFNTEMsWUFBTSxTQU5EO0FBT0xDLGdCQUFVLFNBUEw7QUFRTEMsV0FBSyxTQVJBO0FBU0xDLGVBQVMsU0FUSjtBQVVMQyxXQUFLLFNBVkE7QUFXTEMsZUFBUyxTQVhKO0FBWUxDLGNBQVEsQ0FaSDtBQWFMQyxhQUFPO0FBYkYsSyxRQWVQQyxPLEdBQVU7QUFDUkMsUUFEUSxnQkFDSDtBQUNILFlBQUlDLE9BQU8sSUFBWDs7QUFFQUEsYUFBS2YsSUFBTCxHQUFZLFlBQVo7QUFDQWUsYUFBS2QsVUFBTCxHQUFrQixTQUFsQjtBQUNBYyxhQUFLYixjQUFMLEdBQXNCLFNBQXRCO0FBQ0FhLGFBQUtaLElB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QUFqQjtBQUNEO0FBSmdCLE9BQW5CO0FBTUQ7Ozt3Q0FDbUI7QUFDbEIscUJBQUtDLG9CQUFMO0FBQ0FDLGlCQUFXLFlBQVc7QUFDcEIsdUJBQUtDLG1CQUFMO0FBQ0QsT0FGRCxFQUVHLElBRkg7QUFHRDs7O3dDQUVtQjtBQUNsQixhQUFPO0FBQ0xDLGVBQU8sSUFERjtBQUVMQyxjQUFNO0FBRkQsT0FBUDtBQUlEOzs7O0VBdkhnQyxlQUFLQyxJOztrQkFBbkIvQixLIiwiZmlsZSI6ImNsYXNzaWZ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5YiG57G7JyxcbiAgICBlbmFibGVQdWxsRG93blJlZnJlc2g6IHRydWVcbiAgfVxuICBkYXRhID0ge1xuICAgIHRleHQ6ICdqcycsXG4gICAgSmF2YVNjcmlwdDogJyM2MmI5MDAnLFxuICAgIEphdmFTY3JpcHRsaW5lOiAnIzYyYjkwMCcsXG4gICAgSFRNTDogJyMyMDIwMjAnLFxuICAgIEhUTUxsaW5lOiAnI0ZGRkZGRicsXG4gICAgTm9kZTogJyMyMDIwMjAnLFxuICAgIE5vZGVsaW5lOiAnI0ZGRkZGRicsXG4gICAgRVM2OiAnIzIwMjAyMCcsXG4gICAgRVM2bGluZTogJyNGRkZGRkYnLFxuICAgIENTUzogJyMyMDIwMjAnLFxuICAgIENTU2xpbmU6ICcjRkZGRkZGJyxcbiAgICBoZWlnaHQ6IDAsXG4gICAgd2lkdGg6IDBcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIGpzKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG5cbiAgICAgIHNlbGYudGV4dCA9ICdqYXZhc2NyaXB0J1xuICAgICAgc2VsZi5KYXZhU2NyaXB0ID0gJyM2MmI5MDAnXG4gICAgICBzZWxmLkphdmFTY3JpcHRsaW5lID0gJyM2MmI5MDAnXG4gICAgICBzZWxmLkhUTUwgPSAnIzIwMjAyMCdcbiAgICAgIHNlbGYuSFRNTGxpbmUgPSAnI0ZGRkZGRidcbiAgICAgIHNlbGYuTm9kZSA9ICcjMjAyMDIwJ1xuICAgICAgc2VsZi5Ob2RlbGluZSA9ICcjRkZGRkZGJ1xuICAgICAgc2VsZi5FUzYgPSAnIzIwMjAyMCdcbiAgICAgIHNlbGYuRVM2bGluZSA9ICcjRkZGRkZGJ1xuICAgICAgc2VsZi5DU1MgPSAnIzIwMjAyMCdcbiAgICAgIHNlbGYuQ1NTbGluZSA9ICcjRkZGRkZGJ1xuICAgIH0sXG5cbiAgICBIVE1MKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG5cbiAgICAgIHNlbGYudGV4dCA9ICdjbGllbnQnXG4gICAgICBzZWxmLkphdmFTY3JpcHQgPSAnIzIwMjAyMCdcbiAgICAgIHNlbGYuSmF2YVNjcmlwdGxpbmUgPSAnI0ZGRkZGRidcbiAgICAgIHNlbGYuSFRNTCA9ICcjNjJiOTAwJ1xuICAgICAgc2VsZi5IVE1MbGluZSA9ICcjNjJiOTAwJ1xuICAgICAgc2VsZi5Ob2RlID0gJyMyMDIwMjAnXG4gICAgICBzZWxmLk5vZGVsaW5lID0gJyNGRkZGRkYnXG4gICAgICBzZWxmLkVTNiA9ICcjMjAyMDIwJ1xuICAgICAgc2VsZi5FUzZsaW5lID0gJyNGRkZGRkYnXG4gICAgICBzZWxmLkNTUyA9ICcjMjAyMDIwJ1xuICAgICAgc2VsZi5DU1NsaW5lID0gJyNGRkZGRkYnXG4gICAgfSxcbiAgICBOb2RlKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG5cbiAgICAgIHNlbGYudGV4dCA9ICdzZXJ2ZXInXG4gICAgICBzZWxmLkphdmFTY3JpcHQgPSAnIzIwMjAyMCdcbiAgICAgIHNlbGYuSmF2YVNjcmlwdGxpbmUgPSAnI0ZGRkZGRidcbiAgICAgIHNlbGYuSFRNTCA9ICcjMjAyMDIwJ1xuICAgICAgc2VsZi5IVE1MbGluZSA9ICcjRkZGRkZGJ1xuICAgICAgc2VsZi5Ob2RlID0gJyM2MmI5MDAnXG4gICAgICBzZWxmLk5vZGVsaW5lID0gJyM2MmI5MDAnXG4gICAgICBzZWxmLkVTNiA9ICcjMjAyMDIwJ1xuICAgICAgc2VsZi5FUzZsaW5lID0gJyNGRkZGRkYnXG4gICAgICBzZWxmLkNTUyA9ICcjMjAyMDIwJ1xuICAgICAgc2VsZi5DU1NsaW5lID0gJyNGRkZGRkYnXG4gICAgfSxcbiAgICBFUzYoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcblxuICAgICAgc2VsZi50ZXh0ID0gJ2pvdHRpbmcnXG4gICAgICBzZWxmLkphdmFTY3JpcHQgPSAnIzIwMjAyMCdcbiAgICAgIHNlbGYuSmF2YVNjcmlwdGxpbmUgPSAnI0ZGRkZGRidcbiAgICAgIHNlbGYuSFRNTCA9ICcjMjAyMDIwJ1xuICAgICAgc2VsZi5IVE1MbGluZSA9ICcjRkZGRkZGJ1xuICAgICAgc2VsZi5Ob2RlID0gJyMyMDIwMjAnXG4gICAgICBzZWxmLk5vZGVsaW5lID0gJyNGRkZGRkYnXG4gICAgICBzZWxmLkVTNiA9ICcjNjJiOTAwJ1xuICAgICAgc2VsZi5FUzZsaW5lID0gJyM2MmI5MDAnXG4gICAgICBzZWxmLkNTUyA9ICcjMjAyMDIwJ1xuICAgICAgc2VsZi5DU1NsaW5lID0gJyNGRkZGRkYnXG4gICAgfSxcbiAgICBDU1MoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcblxuICAgICAgc2VsZi50ZXh0ID0gJ0NTUydcbiAgICAgIHNlbGYuSmF2YVNjcmlwdCA9ICcjMjAyMDIwJ1xuICAgICAgc2VsZi5KYXZhU2NyaXB0bGluZSA9ICcjRkZGRkZGJ1xuICAgICAgc2VsZi5IVE1MID0gJyMyMDIwMjAnXG4gICAgICBzZWxmLkhUTUxsaW5lID0gJyNGRkZGRkYnXG4gICAgICBzZWxmLk5vZGUgPSAnIzIwMjAyMCdcbiAgICAgIHNlbGYuTm9kZWxpbmUgPSAnI0ZGRkZGRidcbiAgICAgIHNlbGYuRVM2ID0gJyMyMDIwMjAnXG4gICAgICBzZWxmLkVTNmxpbmUgPSAnI0ZGRkZGRidcbiAgICAgIHNlbGYuQ1NTID0gJyM2MmI5MDAnXG4gICAgICBzZWxmLkNTU2xpbmUgPSAnIzYyYjkwMCdcbiAgICB9XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHdlcHkuZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICBzZWxmLmhlaWdodCA9IHJlcy53aW5kb3dIZWlnaHRcbiAgICAgICAgc2VsZi53aWR0aCA9IHJlcy53aW5kb3dXaWR0aFxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgb25QdWxsRG93blJlZnJlc2goKSB7XG4gICAgd2VweS5zdGFydFB1bGxEb3duUmVmcmVzaCgpXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIHdlcHkuc3RvcFB1bGxEb3duUmVmcmVzaCgpXG4gICAgfSwgMTAwMClcbiAgfVxuXG4gIG9uU2hhcmVBcHBNZXNzYWdlKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogJ+WIhuexuycsXG4gICAgICBwYXRoOiAnL3BhZ2VzL2NsYXNzaWZ5J1xuICAgIH1cbiAgfVxufVxuIl19