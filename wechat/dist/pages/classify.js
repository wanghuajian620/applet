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
      color1: '#62b900',
      color11: '#62b900',
      color2: '#202020',
      color22: '#FFFFFF',
      color3: '#202020',
      color33: '#FFFFFF',
      color4: '#202020',
      color44: '#FFFFFF',
      color5: '#202020',
      color55: '#FFFFFF',
      height: 0,
      width: 0
    }, _this.methods = {
      js: function js() {
        var self = this;

        self.text = 'javascript';
        self.color1 = '#62b900';
        self.color11 = '#62b900';
        self.color2 = '#202020';
        self.color22 = '#FFFFFF';
        self.color3 = '#202020';
        self.color33 = '#FFFFFF';
        self.color4 = '#202020';
        self.color44 = '#FFFFFF';
        self.color5 = '#202020';
        self.color55 = '#FFFFFF';
      },
      HTML: function HTML() {
        var self = this;

        self.text = 'client';
        self.color1 = '#202020';
        self.color11 = '#FFFFFF';
        self.color2 = '#62b900';
        self.color22 = '#62b900';
        self.color3 = '#202020';
        self.color33 = '#FFFFFF';
        self.color4 = '#202020';
        self.color44 = '#FFFFFF';
        self.color5 = '#202020';
        self.color55 = '#FFFFFF';
      },
      Node: function Node() {
        var self = this;

        self.text = 'server';
        self.color1 = '#202020';
        self.color11 = '#FFFFFF';
        self.color2 = '#202020';
        self.color22 = '#FFFFFF';
        self.color3 = '#62b900';
        self.color33 = '#62b900';
        self.color4 = '#202020';
        self.color44 = '#FFFFFF';
        self.color5 = '#202020';
        self.color55 = '#FFFFFF';
      },
      ES6: function ES6() {
        var self = this;

        self.text = 'jotting';
        self.color1 = '#202020';
        self.color11 = '#FFFFFF';
        self.color2 = '#202020';
        self.color22 = '#FFFFFF';
        self.color3 = '#202020';
        self.color33 = '#FFFFFF';
        self.color4 = '#62b900';
        self.color44 = '#62b900';
        self.color5 = '#202020';
        self.color55 = '#FFFFFF';
      },
      CSS: function CSS() {
        var self = this;

        self.text = 'CSS';
        self.color1 = '#202020';
        self.color11 = '#FFFFFF';
        self.color2 = '#202020';
        self.color22 = '#FFFFFF';
        self.color3 = '#202020';
        self.color33 = '#FFFFFF';
        self.color4 = '#202020';
        self.color44 = '#FFFFFF';
        self.color5 = '#62b900';
        self.color55 = '#62b900';
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYXNzaWZ5LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImVuYWJsZVB1bGxEb3duUmVmcmVzaCIsImRhdGEiLCJ0ZXh0IiwiY29sb3IxIiwiY29sb3IxMSIsImNvbG9yMiIsImNvbG9yMjIiLCJjb2xvcjMiLCJjb2xvcjMzIiwiY29sb3I0IiwiY29sb3I0NCIsImNvbG9yNSIsImNvbG9yNTUiLCJoZWlnaHQiLCJ3aWR0aCIsIm1ldGhvZHMiLCJqcyIsInNlbGYiLCJIVE1MIiwiTm9kZSIsIkVTNiIsIkNTUyIsImdldFN5c3RlbUluZm8iLCJzdWNjZXNzIiwicmVzIiwid2luZG93SGVpZ2h0Iiwid2luZG93V2lkdGgiLCJzdGFydFB1bGxEb3duUmVmcmVzaCIsInNldFRpbWVvdXQiLCJzdG9wUHVsbERvd25SZWZyZXNoIiwidGl0bGUiLCJwYXRoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLElBRGpCO0FBRVBDLDZCQUF1QjtBQUZoQixLLFFBSVRDLEksR0FBTztBQUNMQyxZQUFNLElBREQ7QUFFTEMsY0FBUSxTQUZIO0FBR0xDLGVBQVMsU0FISjtBQUlMQyxjQUFRLFNBSkg7QUFLTEMsZUFBUyxTQUxKO0FBTUxDLGNBQVEsU0FOSDtBQU9MQyxlQUFTLFNBUEo7QUFRTEMsY0FBUSxTQVJIO0FBU0xDLGVBQVMsU0FUSjtBQVVMQyxjQUFRLFNBVkg7QUFXTEMsZUFBUyxTQVhKO0FBWUxDLGNBQVEsQ0FaSDtBQWFMQyxhQUFPO0FBYkYsSyxRQWVQQyxPLEdBQVU7QUFDUkMsUUFEUSxnQkFDSDtBQUNILFlBQUlDLE9BQU8sSUFBWDs7QUFFQUEsYUFBS2YsSUFBTCxHQUFZLFlBQVo7QUFDQWUsYUFBS2QsTUFBTCxHQUFjLFNBQWQ7QUFDQWMsYUFBS2IsT0FBTCxHQUFlLFNBQWY7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QUFNRDs7O3dDQUNtQjtBQUNsQixxQkFBS0Msb0JBQUw7QUFDQUMsaUJBQVcsWUFBVztBQUNwQix1QkFBS0MsbUJBQUw7QUFDRCxPQUZELEVBRUcsSUFGSDtBQUdEOzs7d0NBRW1CO0FBQ2xCLGFBQU87QUFDTEMsZUFBTyxJQURGO0FBRUxDLGNBQU07QUFGRCxPQUFQO0FBSUQ7Ozs7RUF2SGdDLGVBQUtDLEk7O2tCQUFuQm5DLEsiLCJmaWxlIjoiY2xhc3NpZnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfliIbnsbsnLFxuICAgIGVuYWJsZVB1bGxEb3duUmVmcmVzaDogdHJ1ZVxuICB9XG4gIGRhdGEgPSB7XG4gICAgdGV4dDogJ2pzJyxcbiAgICBjb2xvcjE6ICcjNjJiOTAwJyxcbiAgICBjb2xvcjExOiAnIzYyYjkwMCcsXG4gICAgY29sb3IyOiAnIzIwMjAyMCcsXG4gICAgY29sb3IyMjogJyNGRkZGRkYnLFxuICAgIGNvbG9yMzogJyMyMDIwMjAnLFxuICAgIGNvbG9yMzM6ICcjRkZGRkZGJyxcbiAgICBjb2xvcjQ6ICcjMjAyMDIwJyxcbiAgICBjb2xvcjQ0OiAnI0ZGRkZGRicsXG4gICAgY29sb3I1OiAnIzIwMjAyMCcsXG4gICAgY29sb3I1NTogJyNGRkZGRkYnLFxuICAgIGhlaWdodDogMCxcbiAgICB3aWR0aDogMFxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAganMoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcblxuICAgICAgc2VsZi50ZXh0ID0gJ2phdmFzY3JpcHQnXG4gICAgICBzZWxmLmNvbG9yMSA9ICcjNjJiOTAwJ1xuICAgICAgc2VsZi5jb2xvcjExID0gJyM2MmI5MDAnXG4gICAgICBzZWxmLmNvbG9yMiA9ICcjMjAyMDIwJ1xuICAgICAgc2VsZi5jb2xvcjIyID0gJyNGRkZGRkYnXG4gICAgICBzZWxmLmNvbG9yMyA9ICcjMjAyMDIwJ1xuICAgICAgc2VsZi5jb2xvcjMzID0gJyNGRkZGRkYnXG4gICAgICBzZWxmLmNvbG9yNCA9ICcjMjAyMDIwJ1xuICAgICAgc2VsZi5jb2xvcjQ0ID0gJyNGRkZGRkYnXG4gICAgICBzZWxmLmNvbG9yNSA9ICcjMjAyMDIwJ1xuICAgICAgc2VsZi5jb2xvcjU1ID0gJyNGRkZGRkYnXG4gICAgfSxcblxuICAgIEhUTUwoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcblxuICAgICAgc2VsZi50ZXh0ID0gJ2NsaWVudCdcbiAgICAgIHNlbGYuY29sb3IxID0gJyMyMDIwMjAnXG4gICAgICBzZWxmLmNvbG9yMTEgPSAnI0ZGRkZGRidcbiAgICAgIHNlbGYuY29sb3IyID0gJyM2MmI5MDAnXG4gICAgICBzZWxmLmNvbG9yMjIgPSAnIzYyYjkwMCdcbiAgICAgIHNlbGYuY29sb3IzID0gJyMyMDIwMjAnXG4gICAgICBzZWxmLmNvbG9yMzMgPSAnI0ZGRkZGRidcbiAgICAgIHNlbGYuY29sb3I0ID0gJyMyMDIwMjAnXG4gICAgICBzZWxmLmNvbG9yNDQgPSAnI0ZGRkZGRidcbiAgICAgIHNlbGYuY29sb3I1ID0gJyMyMDIwMjAnXG4gICAgICBzZWxmLmNvbG9yNTUgPSAnI0ZGRkZGRidcbiAgICB9LFxuICAgIE5vZGUoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcblxuICAgICAgc2VsZi50ZXh0ID0gJ3NlcnZlcidcbiAgICAgIHNlbGYuY29sb3IxID0gJyMyMDIwMjAnXG4gICAgICBzZWxmLmNvbG9yMTEgPSAnI0ZGRkZGRidcbiAgICAgIHNlbGYuY29sb3IyID0gJyMyMDIwMjAnXG4gICAgICBzZWxmLmNvbG9yMjIgPSAnI0ZGRkZGRidcbiAgICAgIHNlbGYuY29sb3IzID0gJyM2MmI5MDAnXG4gICAgICBzZWxmLmNvbG9yMzMgPSAnIzYyYjkwMCdcbiAgICAgIHNlbGYuY29sb3I0ID0gJyMyMDIwMjAnXG4gICAgICBzZWxmLmNvbG9yNDQgPSAnI0ZGRkZGRidcbiAgICAgIHNlbGYuY29sb3I1ID0gJyMyMDIwMjAnXG4gICAgICBzZWxmLmNvbG9yNTUgPSAnI0ZGRkZGRidcbiAgICB9LFxuICAgIEVTNigpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuXG4gICAgICBzZWxmLnRleHQgPSAnam90dGluZydcbiAgICAgIHNlbGYuY29sb3IxID0gJyMyMDIwMjAnXG4gICAgICBzZWxmLmNvbG9yMTEgPSAnI0ZGRkZGRidcbiAgICAgIHNlbGYuY29sb3IyID0gJyMyMDIwMjAnXG4gICAgICBzZWxmLmNvbG9yMjIgPSAnI0ZGRkZGRidcbiAgICAgIHNlbGYuY29sb3IzID0gJyMyMDIwMjAnXG4gICAgICBzZWxmLmNvbG9yMzMgPSAnI0ZGRkZGRidcbiAgICAgIHNlbGYuY29sb3I0ID0gJyM2MmI5MDAnXG4gICAgICBzZWxmLmNvbG9yNDQgPSAnIzYyYjkwMCdcbiAgICAgIHNlbGYuY29sb3I1ID0gJyMyMDIwMjAnXG4gICAgICBzZWxmLmNvbG9yNTUgPSAnI0ZGRkZGRidcbiAgICB9LFxuICAgIENTUygpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuXG4gICAgICBzZWxmLnRleHQgPSAnQ1NTJ1xuICAgICAgc2VsZi5jb2xvcjEgPSAnIzIwMjAyMCdcbiAgICAgIHNlbGYuY29sb3IxMSA9ICcjRkZGRkZGJ1xuICAgICAgc2VsZi5jb2xvcjIgPSAnIzIwMjAyMCdcbiAgICAgIHNlbGYuY29sb3IyMiA9ICcjRkZGRkZGJ1xuICAgICAgc2VsZi5jb2xvcjMgPSAnIzIwMjAyMCdcbiAgICAgIHNlbGYuY29sb3IzMyA9ICcjRkZGRkZGJ1xuICAgICAgc2VsZi5jb2xvcjQgPSAnIzIwMjAyMCdcbiAgICAgIHNlbGYuY29sb3I0NCA9ICcjRkZGRkZGJ1xuICAgICAgc2VsZi5jb2xvcjUgPSAnIzYyYjkwMCdcbiAgICAgIHNlbGYuY29sb3I1NSA9ICcjNjJiOTAwJ1xuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgd2VweS5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIHNlbGYuaGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodFxuICAgICAgICBzZWxmLndpZHRoID0gcmVzLndpbmRvd1dpZHRoXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBvblB1bGxEb3duUmVmcmVzaCgpIHtcbiAgICB3ZXB5LnN0YXJ0UHVsbERvd25SZWZyZXNoKClcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgd2VweS5zdG9wUHVsbERvd25SZWZyZXNoKClcbiAgICB9LCAxMDAwKVxuICB9XG5cbiAgb25TaGFyZUFwcE1lc3NhZ2UoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiAn5YiG57G7JyxcbiAgICAgIHBhdGg6ICcvcGFnZXMvY2xhc3NpZnknXG4gICAgfVxuICB9XG59XG4iXX0=