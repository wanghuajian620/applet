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
      content: '',
      type: '',
      a: ''
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
            console.log(res.data, 'ppppppppp');
          }
        });
        console.log(self.type, 'aaaaaaaaaaaa');
        // console.log(e, 'eeeeeeeeeeee')
      },
      click: function click(e) {
        var self = this;
        var id = e.currentTarget.dataset.index;
        var essay = self.a[id].content;
        // console.log(e, 'mmmmmmm')
        // console.log(id, 'dddddddddddddd')
        console.log(essay, 'gggggggggg');

        _wepy2.default.navigateTo({
          url: './javascript?MD=' + id
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
                  success: function success(res) {
                    self.content = res.data;
                    self.setData({
                      content: res.data
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYXNzaWZ5LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImVuYWJsZVB1bGxEb3duUmVmcmVzaCIsImRhdGEiLCJoZWlnaHQiLCJ3aWR0aCIsInRhYiIsImN1cnJlbnRUYXJnZXRJZCIsImNvbnRlbnQiLCJ0eXBlIiwiYSIsIm1ldGhvZHMiLCJ0YXAiLCJlIiwic2VsZiIsImN1cnJlbnRUYXJnZXQiLCJpZCIsInJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJzdWNjZXNzIiwicmVzIiwic2V0RGF0YSIsImNvbnNvbGUiLCJsb2ciLCJjbGljayIsImRhdGFzZXQiLCJpbmRleCIsImVzc2F5IiwibmF2aWdhdGVUbyIsImdldFN5c3RlbUluZm8iLCJ3aW5kb3dIZWlnaHQiLCJ3aW5kb3dXaWR0aCIsIiRhcHBseSIsInN0YXJ0UHVsbERvd25SZWZyZXNoIiwic2V0VGltZW91dCIsInN0b3BQdWxsRG93blJlZnJlc2giLCJ0aXRsZSIsInBhdGgiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixJQURqQjtBQUVQQyw2QkFBdUI7QUFGaEIsSyxRQUlUQyxJLEdBQU87QUFDTEMsY0FBUSxDQURIO0FBRUxDLGFBQU8sQ0FGRjtBQUdMQyxXQUFLLENBQUMsWUFBRCxFQUFlLEtBQWYsRUFBc0IsT0FBdEIsRUFBK0IsSUFBL0IsRUFBcUMsT0FBckMsQ0FIQTtBQUlMQyx1QkFBaUIsQ0FKWjtBQUtMQyxlQUFTLEVBTEo7QUFNTEMsWUFBTSxFQU5EO0FBT0xDLFNBQUc7QUFQRSxLLFFBU1BDLE8sR0FBVTtBQUNSQyxTQURRLGVBQ0pDLENBREksRUFDRDtBQUNMLFlBQUlDLE9BQU8sSUFBWDs7QUFFQUEsYUFBS1AsZUFBTCxHQUF1Qk0sRUFBRUUsYUFBRixDQUFnQkMsRUFBdkM7QUFDQUYsYUFBS0wsSUFBTCxHQUFZSyxLQUFLUixHQUFMLENBQVNRLEtBQUtQLGVBQWQsQ0FBWjtBQUNBLHVCQUFLVSxPQUFMLENBQWE7QUFDWEMsZUFBSyxnQ0FETTtBQUVYQyxrQkFBUSxNQUZHO0FBR1hoQixnQkFBTTtBQUNKTSxrQkFBTUssS0FBS0w7QUFEUCxXQUhLO0FBTVhXLG1CQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJQLGlCQUFLSixDQUFMLEdBQVNXLElBQUlsQixJQUFiO0FBQ0FXLGlCQUFLUSxPQUFMLENBQWE7QUFDWFosaUJBQUdXLElBQUlsQjtBQURJLGFBQWI7QUFHQW9CLG9CQUFRQyxHQUFSLENBQVlILElBQUlsQixJQUFoQixFQUFzQixXQUF0QjtBQUNEO0FBWlUsU0FBYjtBQWNBb0IsZ0JBQVFDLEdBQVIsQ0FBWVYsS0FBS0wsSUFBakIsRUFBdUIsY0FBdkI7QUFDQTtBQUNELE9BdEJPO0FBdUJSZ0IsV0F2QlEsaUJBdUJGWixDQXZCRSxFQXVCQztBQUNQLFlBQUlDLE9BQU8sSUFBWDtBQUNBLFlBQUlFLEtBQUtILEVBQUVFLGFBQUYsQ0FBZ0JXLE9BQWhCLENBQXdCQyxLQUFqQztBQUNBLFlBQUlDLFFBQVFkLEtBQUtKLENBQUwsQ0FBT00sRUFBUCxFQUFXUixPQUF2QjtBQUNBO0FBQ0E7QUFDQWUsZ0JBQVFDLEdBQVIsQ0FBWUksS0FBWixFQUFtQixZQUFuQjs7QUFFQSx1QkFBS0MsVUFBTCxDQUFnQjtBQUNkWCxvQ0FBd0JGO0FBRFYsU0FBaEI7QUFHRDtBQWxDTyxLOzs7Ozs7Ozs7Ozs7QUFxQ0pGLG9CLEdBQU8sSTs7QUFDWCwrQkFBS2dCLGFBQUwsQ0FBbUI7QUFDakJWLHlCQURpQixtQkFDVEMsR0FEUyxFQUNKO0FBQ1hQLHlCQUFLVixNQUFMLEdBQWNpQixJQUFJVSxZQUFsQjtBQUNBakIseUJBQUtULEtBQUwsR0FBYWdCLElBQUlXLFdBQWpCO0FBQ0Q7QUFKZ0IsaUJBQW5COzt1QkFNTSxlQUFLZixPQUFMLENBQWE7QUFDakJDLHVCQUFLLGdDQURZO0FBRWpCQywwQkFBUSxNQUZTO0FBR2pCQywyQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCUCx5QkFBS04sT0FBTCxHQUFlYSxJQUFJbEIsSUFBbkI7QUFDQVcseUJBQUtRLE9BQUwsQ0FBYTtBQUNYZCwrQkFBU2EsSUFBSWxCO0FBREYscUJBQWI7QUFHQW9CLDRCQUFRQyxHQUFSLENBQVlILElBQUlsQixJQUFoQixFQUFzQixXQUF0QjtBQUNEO0FBVGdCLGlCQUFiLEM7Ozs7QUFZTixxQkFBSzhCLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3Q0FFa0I7QUFDbEIscUJBQUtDLG9CQUFMO0FBQ0FDLGlCQUFXLFlBQVc7QUFDcEIsdUJBQUtDLG1CQUFMO0FBQ0QsT0FGRCxFQUVHLElBRkg7QUFHRDs7O3dDQUVtQjtBQUNsQixhQUFPO0FBQ0xDLGVBQU8sSUFERjtBQUVMQyxjQUFNO0FBRkQsT0FBUDtBQUlEOzs7O0VBcEZnQyxlQUFLQyxJOztrQkFBbkJ4QyxLIiwiZmlsZSI6ImNsYXNzaWZ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5YiG57G7JyxcbiAgICBlbmFibGVQdWxsRG93blJlZnJlc2g6IHRydWVcbiAgfVxuICBkYXRhID0ge1xuICAgIGhlaWdodDogMCxcbiAgICB3aWR0aDogMCxcbiAgICB0YWI6IFsnamF2YXNjcmlwdCcsICdjc3MnLCAnaHRtbDUnLCAnZ28nLCAnc3dpZnQnXSxcbiAgICBjdXJyZW50VGFyZ2V0SWQ6IDAsXG4gICAgY29udGVudDogJycsXG4gICAgdHlwZTogJycsXG4gICAgYTogJydcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIHRhcChlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcblxuICAgICAgc2VsZi5jdXJyZW50VGFyZ2V0SWQgPSBlLmN1cnJlbnRUYXJnZXQuaWRcbiAgICAgIHNlbGYudHlwZSA9IHNlbGYudGFiW3NlbGYuY3VycmVudFRhcmdldElkXVxuICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL2NsYXNzaWZ5JyxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICB0eXBlOiBzZWxmLnR5cGVcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgc2VsZi5hID0gcmVzLmRhdGFcbiAgICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgICAgYTogcmVzLmRhdGFcbiAgICAgICAgICB9KVxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhLCAncHBwcHBwcHBwJylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIGNvbnNvbGUubG9nKHNlbGYudHlwZSwgJ2FhYWFhYWFhYWFhYScpXG4gICAgICAvLyBjb25zb2xlLmxvZyhlLCAnZWVlZWVlZWVlZWVlJylcbiAgICB9LFxuICAgIGNsaWNrKGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgbGV0IGlkID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhcbiAgICAgIGxldCBlc3NheSA9IHNlbGYuYVtpZF0uY29udGVudFxuICAgICAgLy8gY29uc29sZS5sb2coZSwgJ21tbW1tbW0nKVxuICAgICAgLy8gY29uc29sZS5sb2coaWQsICdkZGRkZGRkZGRkZGRkZCcpXG4gICAgICBjb25zb2xlLmxvZyhlc3NheSwgJ2dnZ2dnZ2dnZ2cnKVxuXG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAuL2phdmFzY3JpcHQ/TUQ9JHtpZH1gXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBhc3luYyBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgd2VweS5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIHNlbGYuaGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodFxuICAgICAgICBzZWxmLndpZHRoID0gcmVzLndpbmRvd1dpZHRoXG4gICAgICB9XG4gICAgfSlcbiAgICBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL2NsYXNzaWZ5JyxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIHNlbGYuY29udGVudCA9IHJlcy5kYXRhXG4gICAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgICAgY29udGVudDogcmVzLmRhdGFcbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEsICdwcHBwcHBwcHAnKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLiRhcHBseSgpXG4gIH1cbiAgb25QdWxsRG93blJlZnJlc2goKSB7XG4gICAgd2VweS5zdGFydFB1bGxEb3duUmVmcmVzaCgpXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIHdlcHkuc3RvcFB1bGxEb3duUmVmcmVzaCgpXG4gICAgfSwgMTAwMClcbiAgfVxuXG4gIG9uU2hhcmVBcHBNZXNzYWdlKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogJ+WIhuexuycsXG4gICAgICBwYXRoOiAnL3BhZ2VzL2NsYXNzaWZ5J1xuICAgIH1cbiAgfVxufVxuIl19