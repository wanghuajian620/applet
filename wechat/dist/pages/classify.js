'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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
      height: 0,
      width: 0,
      tab: ['javascript', 'css', 'html5', 'go', 'swift'],
      currentTargetId: 0,
      type: 'javascript',
      a: ''
      // pic: ''
    }, _this.methods = {
      tap: function tap(e) {
        var self = this;

        self.currentTargetId = e.currentTarget.id;
        self.type = self.tab[self.currentTargetId];
        _wepy2.default.request({
          url: 'http://127.0.0.1:7001/classify',
          method: 'POST',
          data: {
            type: self.type
          },
          success: function success(res) {
            self.a = res.data;
            self.setData({
              a: res.data
            });
          }
        });
      },
      click: function click(e) {
        var self = this;
        var id = e.currentTarget.dataset.index;
        var essay = self.a[id].content;
        console.log(id, 'oooooooooooooooo');
        console.log(self.a[id], 'iiiiiiiiiiiiii');
        try {
          _wepy2.default.setStorageSync('article', essay);
        } catch (err) {
          console.log(err);

          return;
        }

        _wepy2.default.navigateTo({
          url: './javascript'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var self;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                self = this;


                _wepy2.default.getSystemInfo({
                  success: function success(res) {
                    self.height = res.windowHeight;
                    self.width = res.windowWidth;
                  }
                });

                _context.next = 4;
                return _wepy2.default.request({
                  url: 'http://127.0.0.1:7001/classify',
                  method: 'POST',
                  data: {
                    type: self.type
                  },
                  success: function success(res) {
                    self.a = res.data;
                    self.setData({
                      a: res.data
                    });
                    console.log(res.data, 'ppppppppp');
                  }
                });

              case 4:

                this.$apply();

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLoad() {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYXNzaWZ5LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImVuYWJsZVB1bGxEb3duUmVmcmVzaCIsImRhdGEiLCJoZWlnaHQiLCJ3aWR0aCIsInRhYiIsImN1cnJlbnRUYXJnZXRJZCIsInR5cGUiLCJhIiwibWV0aG9kcyIsInRhcCIsImUiLCJzZWxmIiwiY3VycmVudFRhcmdldCIsImlkIiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsInN1Y2Nlc3MiLCJyZXMiLCJzZXREYXRhIiwiY2xpY2siLCJkYXRhc2V0IiwiaW5kZXgiLCJlc3NheSIsImNvbnRlbnQiLCJjb25zb2xlIiwibG9nIiwic2V0U3RvcmFnZVN5bmMiLCJlcnIiLCJuYXZpZ2F0ZVRvIiwiZ2V0U3lzdGVtSW5mbyIsIndpbmRvd0hlaWdodCIsIndpbmRvd1dpZHRoIiwiJGFwcGx5Iiwic3RhcnRQdWxsRG93blJlZnJlc2giLCJzZXRUaW1lb3V0Iiwic3RvcFB1bGxEb3duUmVmcmVzaCIsInRpdGxlIiwicGF0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLElBRGpCO0FBRVBDLDZCQUF1QjtBQUZoQixLLFFBSVRDLEksR0FBTztBQUNMQyxjQUFRLENBREg7QUFFTEMsYUFBTyxDQUZGO0FBR0xDLFdBQUssQ0FBQyxZQUFELEVBQWUsS0FBZixFQUFzQixPQUF0QixFQUErQixJQUEvQixFQUFxQyxPQUFyQyxDQUhBO0FBSUxDLHVCQUFpQixDQUpaO0FBS0xDLFlBQU0sWUFMRDtBQU1MQyxTQUFHO0FBQ0g7QUFQSyxLLFFBU1BDLE8sR0FBVTtBQUNSQyxTQURRLGVBQ0pDLENBREksRUFDRDtBQUNMLFlBQUlDLE9BQU8sSUFBWDs7QUFFQUEsYUFBS04sZUFBTCxHQUF1QkssRUFBRUUsYUFBRixDQUFnQkMsRUFBdkM7QUFDQUYsYUFBS0wsSUFBTCxHQUFZSyxLQUFLUCxHQUFMLENBQVNPLEtBQUtOLGVBQWQsQ0FBWjtBQUNBLHVCQUFLUyxPQUFMLENBQWE7QUFDWEMsZUFBSyxnQ0FETTtBQUVYQyxrQkFBUSxNQUZHO0FBR1hmLGdCQUFNO0FBQ0pLLGtCQUFNSyxLQUFLTDtBQURQLFdBSEs7QUFNWFcsbUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQlAsaUJBQUtKLENBQUwsR0FBU1csSUFBSWpCLElBQWI7QUFDQVUsaUJBQUtRLE9BQUwsQ0FBYTtBQUNYWixpQkFBR1csSUFBSWpCO0FBREksYUFBYjtBQUdEO0FBWFUsU0FBYjtBQWFELE9BbkJPO0FBb0JSbUIsV0FwQlEsaUJBb0JGVixDQXBCRSxFQW9CQztBQUNQLFlBQUlDLE9BQU8sSUFBWDtBQUNBLFlBQUlFLEtBQUtILEVBQUVFLGFBQUYsQ0FBZ0JTLE9BQWhCLENBQXdCQyxLQUFqQztBQUNBLFlBQUlDLFFBQVFaLEtBQUtKLENBQUwsQ0FBT00sRUFBUCxFQUFXVyxPQUF2QjtBQUNBQyxnQkFBUUMsR0FBUixDQUFZYixFQUFaLEVBQWdCLGtCQUFoQjtBQUNBWSxnQkFBUUMsR0FBUixDQUFZZixLQUFLSixDQUFMLENBQU9NLEVBQVAsQ0FBWixFQUF3QixnQkFBeEI7QUFDQSxZQUFJO0FBQ0YseUJBQUtjLGNBQUwsQ0FBb0IsU0FBcEIsRUFBK0JKLEtBQS9CO0FBQ0QsU0FGRCxDQUVFLE9BQU9LLEdBQVAsRUFBWTtBQUNaSCxrQkFBUUMsR0FBUixDQUFZRSxHQUFaOztBQUVBO0FBQ0Q7O0FBRUQsdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZGQsZUFBSztBQURTLFNBQWhCO0FBR0Q7QUFyQ08sSzs7Ozs7Ozs7Ozs7O0FBd0NKSixvQixHQUFPLEk7OztBQUVYLCtCQUFLbUIsYUFBTCxDQUFtQjtBQUNqQmIseUJBRGlCLG1CQUNUQyxHQURTLEVBQ0o7QUFDWFAseUJBQUtULE1BQUwsR0FBY2dCLElBQUlhLFlBQWxCO0FBQ0FwQix5QkFBS1IsS0FBTCxHQUFhZSxJQUFJYyxXQUFqQjtBQUNEO0FBSmdCLGlCQUFuQjs7O3VCQU9NLGVBQUtsQixPQUFMLENBQWE7QUFDakJDLHVCQUFLLGdDQURZO0FBRWpCQywwQkFBUSxNQUZTO0FBR2pCZix3QkFBTTtBQUNKSywwQkFBTUssS0FBS0w7QUFEUCxtQkFIVztBQU1qQlcsMkJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQlAseUJBQUtKLENBQUwsR0FBU1csSUFBSWpCLElBQWI7QUFDQVUseUJBQUtRLE9BQUwsQ0FBYTtBQUNYWix5QkFBR1csSUFBSWpCO0FBREkscUJBQWI7QUFHQXdCLDRCQUFRQyxHQUFSLENBQVlSLElBQUlqQixJQUFoQixFQUFzQixXQUF0QjtBQUNEO0FBWmdCLGlCQUFiLEM7Ozs7QUFlTixxQkFBS2dDLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3Q0FFa0I7QUFDbEIscUJBQUtDLG9CQUFMO0FBQ0FDLGlCQUFXLFlBQVc7QUFDcEIsdUJBQUtDLG1CQUFMO0FBQ0QsT0FGRCxFQUVHLElBRkg7QUFHRDs7O3dDQUVtQjtBQUNsQixhQUFPO0FBQ0xDLGVBQU8sSUFERjtBQUVMQyxjQUFNO0FBRkQsT0FBUDtBQUlEOzs7O0VBNUZnQyxlQUFLQyxJOztrQkFBbkIxQyxLIiwiZmlsZSI6ImNsYXNzaWZ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5YiG57G7JyxcbiAgICBlbmFibGVQdWxsRG93blJlZnJlc2g6IHRydWVcbiAgfVxuICBkYXRhID0ge1xuICAgIGhlaWdodDogMCxcbiAgICB3aWR0aDogMCxcbiAgICB0YWI6IFsnamF2YXNjcmlwdCcsICdjc3MnLCAnaHRtbDUnLCAnZ28nLCAnc3dpZnQnXSxcbiAgICBjdXJyZW50VGFyZ2V0SWQ6IDAsXG4gICAgdHlwZTogJ2phdmFzY3JpcHQnLFxuICAgIGE6ICcnXG4gICAgLy8gcGljOiAnJ1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgdGFwKGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuXG4gICAgICBzZWxmLmN1cnJlbnRUYXJnZXRJZCA9IGUuY3VycmVudFRhcmdldC5pZFxuICAgICAgc2VsZi50eXBlID0gc2VsZi50YWJbc2VsZi5jdXJyZW50VGFyZ2V0SWRdXG4gICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvY2xhc3NpZnknLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHR5cGU6IHNlbGYudHlwZVxuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICBzZWxmLmEgPSByZXMuZGF0YVxuICAgICAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgICAgICBhOiByZXMuZGF0YVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICBjbGljayhlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGxldCBpZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XG4gICAgICBsZXQgZXNzYXkgPSBzZWxmLmFbaWRdLmNvbnRlbnRcbiAgICAgIGNvbnNvbGUubG9nKGlkLCAnb29vb29vb29vb29vb29vbycpXG4gICAgICBjb25zb2xlLmxvZyhzZWxmLmFbaWRdLCAnaWlpaWlpaWlpaWlpaWknKVxuICAgICAgdHJ5IHtcbiAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnYXJ0aWNsZScsIGVzc2F5KVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcblxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9qYXZhc2NyaXB0J1xuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgYXN5bmMgb25Mb2FkKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuXG4gICAgd2VweS5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIHNlbGYuaGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodFxuICAgICAgICBzZWxmLndpZHRoID0gcmVzLndpbmRvd1dpZHRoXG4gICAgICB9XG4gICAgfSlcblxuICAgIGF3YWl0IHdlcHkucmVxdWVzdCh7XG4gICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvY2xhc3NpZnknLFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHR5cGU6IHNlbGYudHlwZVxuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBzZWxmLmEgPSByZXMuZGF0YVxuICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgIGE6IHJlcy5kYXRhXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhLCAncHBwcHBwcHBwJylcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy4kYXBwbHkoKVxuICB9XG4gIG9uUHVsbERvd25SZWZyZXNoKCkge1xuICAgIHdlcHkuc3RhcnRQdWxsRG93blJlZnJlc2goKVxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICB3ZXB5LnN0b3BQdWxsRG93blJlZnJlc2goKVxuICAgIH0sIDEwMDApXG4gIH1cblxuICBvblNoYXJlQXBwTWVzc2FnZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6ICfliIbnsbsnLFxuICAgICAgcGF0aDogJy9wYWdlcy9jbGFzc2lmeSdcbiAgICB9XG4gIH1cbn1cbiJdfQ==