'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/virgo', 'pages/classify', 'pages/me'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'my virgo blog',
        navigationBarTextStyle: 'black'
      },
      tabBar: {
        color: '#404040',
        selectedColor: '#00FF00',
        backgroundColor: '#F0F0F0',
        list: [{
          pagePath: 'pages/virgo',
          text: '首页',
          iconPath: './image/首页.png',
          selectedIconPath: './image/首页-2.png'
        }, {
          pagePath: 'pages/classify',
          text: '分类',
          iconPath: './image/分类-2.png',
          selectedIconPath: './image/分类-3.png'
        }, {
          pagePath: 'pages/me',
          text: '我',
          iconPath: './image/我.png',
          selectedIconPath: './image/我-2.png'
        }]
      }
    };
    _this.globalData = {
      userInfo: null
    };

    _this.use('requestfix');
    return _this;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function onLaunch() {
      this.testAsync();
    }
  }, {
    key: 'sleep',
    value: function sleep(s) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve('promise resolved');
        }, s * 1000);
      });
    }
  }, {
    key: 'testAsync',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.sleep(3);

              case 2:
                data = _context.sent;

                console.log(data);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function testAsync() {
        return _ref.apply(this, arguments);
      }

      return testAsync;
    }()
  }, {
    key: 'getUserInfo',
    value: function getUserInfo(cb) {
      var that = this;
      if (this.globalData.userInfo) {
        return this.globalData.userInfo;
      }
      _wepy2.default.getUserInfo({
        success: function success(res) {
          that.globalData.userInfo = res.userInfo;
          cb && cb(res.userInfo);
        }
      });
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, undefined));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJ0YWJCYXIiLCJjb2xvciIsInNlbGVjdGVkQ29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsaXN0IiwicGFnZVBhdGgiLCJ0ZXh0IiwiaWNvblBhdGgiLCJzZWxlY3RlZEljb25QYXRoIiwiZ2xvYmFsRGF0YSIsInVzZXJJbmZvIiwidXNlIiwidGVzdEFzeW5jIiwicyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsInNsZWVwIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJjYiIsInRoYXQiLCJnZXRVc2VySW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQTBDRSxzQkFBZTtBQUFBOztBQUFBOztBQUFBLFVBdkNmQSxNQXVDZSxHQXZDTjtBQUNQQyxhQUFPLENBQ0wsYUFESyxFQUVMLGdCQUZLLEVBR0wsVUFISyxDQURBO0FBTVBDLGNBQVE7QUFDTkMsNkJBQXFCLE9BRGY7QUFFTkMsc0NBQThCLE1BRnhCO0FBR05DLGdDQUF3QixlQUhsQjtBQUlOQyxnQ0FBd0I7QUFKbEIsT0FORDtBQVlQQyxjQUFRO0FBQ05DLGVBQU8sU0FERDtBQUVOQyx1QkFBZSxTQUZUO0FBR05DLHlCQUFpQixTQUhYO0FBSU5DLGNBQU0sQ0FBQztBQUNMQyxvQkFBVSxhQURMO0FBRUxDLGdCQUFNLElBRkQ7QUFHTEMsb0JBQVUsZ0JBSEw7QUFJTEMsNEJBQWtCO0FBSmIsU0FBRCxFQUtIO0FBQ0RILG9CQUFVLGdCQURUO0FBRURDLGdCQUFNLElBRkw7QUFHREMsb0JBQVUsa0JBSFQ7QUFJREMsNEJBQWtCO0FBSmpCLFNBTEcsRUFVSDtBQUNESCxvQkFBVSxVQURUO0FBRURDLGdCQUFNLEdBRkw7QUFHREMsb0JBQVUsZUFIVDtBQUlEQyw0QkFBa0I7QUFKakIsU0FWRztBQUpBO0FBWkQsS0F1Q007QUFBQSxVQUpmQyxVQUllLEdBSkY7QUFDWEMsZ0JBQVU7QUFEQyxLQUlFOztBQUViLFVBQUtDLEdBQUwsQ0FBUyxZQUFUO0FBRmE7QUFHZDs7OzsrQkFFVTtBQUNULFdBQUtDLFNBQUw7QUFDRDs7OzBCQUVNQyxDLEVBQUc7QUFDUixhQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdENDLG1CQUFXLFlBQU07QUFDZkYsa0JBQVEsa0JBQVI7QUFDRCxTQUZELEVBRUdGLElBQUksSUFGUDtBQUdELE9BSk0sQ0FBUDtBQUtEOzs7Ozs7Ozs7Ozt1QkFHb0IsS0FBS0ssS0FBTCxDQUFXLENBQVgsQzs7O0FBQWJDLG9COztBQUNOQyx3QkFBUUMsR0FBUixDQUFZRixJQUFaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0NBR1VHLEUsRUFBSTtBQUNkLFVBQU1DLE9BQU8sSUFBYjtBQUNBLFVBQUksS0FBS2QsVUFBTCxDQUFnQkMsUUFBcEIsRUFBOEI7QUFDNUIsZUFBTyxLQUFLRCxVQUFMLENBQWdCQyxRQUF2QjtBQUNEO0FBQ0QscUJBQUtjLFdBQUwsQ0FBaUI7QUFDZkMsZUFEZSxtQkFDTkMsR0FETSxFQUNEO0FBQ1pILGVBQUtkLFVBQUwsQ0FBZ0JDLFFBQWhCLEdBQTJCZ0IsSUFBSWhCLFFBQS9CO0FBQ0FZLGdCQUFNQSxHQUFHSSxJQUFJaEIsUUFBUCxDQUFOO0FBQ0Q7QUFKYyxPQUFqQjtBQU1EOzs7O0VBekUwQixlQUFLaUIsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgcGFnZXM6IFtcclxuICAgICAgJ3BhZ2VzL3ZpcmdvJyxcclxuICAgICAgJ3BhZ2VzL2NsYXNzaWZ5JyxcclxuICAgICAgJ3BhZ2VzL21lJ1xyXG4gICAgXSxcclxuICAgIHdpbmRvdzoge1xyXG4gICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnbGlnaHQnLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdteSB2aXJnbyBibG9nJyxcclxuICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ2JsYWNrJ1xyXG4gICAgfSxcclxuICAgIHRhYkJhcjoge1xyXG4gICAgICBjb2xvcjogJyM0MDQwNDAnLFxyXG4gICAgICBzZWxlY3RlZENvbG9yOiAnIzAwRkYwMCcsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGMEYwRjAnLFxyXG4gICAgICBsaXN0OiBbe1xyXG4gICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvdmlyZ28nLFxyXG4gICAgICAgIHRleHQ6ICfpppbpobUnLFxyXG4gICAgICAgIGljb25QYXRoOiAnLi9pbWFnZS/pppbpobUucG5nJyxcclxuICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnLi9pbWFnZS/pppbpobUtMi5wbmcnXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL2NsYXNzaWZ5JyxcclxuICAgICAgICB0ZXh0OiAn5YiG57G7JyxcclxuICAgICAgICBpY29uUGF0aDogJy4vaW1hZ2Uv5YiG57G7LTIucG5nJyxcclxuICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnLi9pbWFnZS/liIbnsbstMy5wbmcnXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL21lJyxcclxuICAgICAgICB0ZXh0OiAn5oiRJyxcclxuICAgICAgICBpY29uUGF0aDogJy4vaW1hZ2Uv5oiRLnBuZycsXHJcbiAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJy4vaW1hZ2Uv5oiRLTIucG5nJ1xyXG4gICAgICB9XVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2xvYmFsRGF0YSA9IHtcclxuICAgIHVzZXJJbmZvOiBudWxsXHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICB0aGlzLnVzZSgncmVxdWVzdGZpeCcpXHJcbiAgfVxyXG5cclxuICBvbkxhdW5jaCgpIHtcclxuICAgIHRoaXMudGVzdEFzeW5jKClcclxuICB9XHJcblxyXG4gIHNsZWVwIChzKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICByZXNvbHZlKCdwcm9taXNlIHJlc29sdmVkJylcclxuICAgICAgfSwgcyAqIDEwMDApXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgdGVzdEFzeW5jICgpIHtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLnNsZWVwKDMpXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gIH1cclxuXHJcbiAgZ2V0VXNlckluZm8oY2IpIHtcclxuICAgIGNvbnN0IHRoYXQgPSB0aGlzXHJcbiAgICBpZiAodGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmdsb2JhbERhdGEudXNlckluZm9cclxuICAgIH1cclxuICAgIHdlcHkuZ2V0VXNlckluZm8oe1xyXG4gICAgICBzdWNjZXNzIChyZXMpIHtcclxuICAgICAgICB0aGF0Lmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm9cclxuICAgICAgICBjYiAmJiBjYihyZXMudXNlckluZm8pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG59XHJcbiJdfQ==