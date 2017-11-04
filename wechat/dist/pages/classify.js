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
      icon: '../image/浏览-2.png',
      tab: ['javascript', 'css', 'html5', 'go', 'swift'],
      currentTargetId: 0, // 令当前任务ID为0， 目的是和index 判断
      type: 'javascript',
      a: ''
      // read: '0'
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYXNzaWZ5LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImVuYWJsZVB1bGxEb3duUmVmcmVzaCIsImRhdGEiLCJoZWlnaHQiLCJ3aWR0aCIsImljb24iLCJ0YWIiLCJjdXJyZW50VGFyZ2V0SWQiLCJ0eXBlIiwiYSIsIm1ldGhvZHMiLCJ0YXAiLCJlIiwic2VsZiIsImN1cnJlbnRUYXJnZXQiLCJpZCIsInJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJzdWNjZXNzIiwicmVzIiwic2V0RGF0YSIsImNsaWNrIiwiZGF0YXNldCIsImluZGV4IiwiZXNzYXkiLCJjb250ZW50IiwiY29uc29sZSIsImxvZyIsInNldFN0b3JhZ2VTeW5jIiwiZXJyIiwibmF2aWdhdGVUbyIsImdldFN5c3RlbUluZm8iLCJ3aW5kb3dIZWlnaHQiLCJ3aW5kb3dXaWR0aCIsIiRhcHBseSIsInN0YXJ0UHVsbERvd25SZWZyZXNoIiwic2V0VGltZW91dCIsInN0b3BQdWxsRG93blJlZnJlc2giLCJ0aXRsZSIsInBhdGgiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixJQURqQjtBQUVQQyw2QkFBdUI7QUFGaEIsSyxRQUlUQyxJLEdBQU87QUFDTEMsY0FBUSxDQURIO0FBRUxDLGFBQU8sQ0FGRjtBQUdMQyxZQUFNLG1CQUhEO0FBSUxDLFdBQUssQ0FBQyxZQUFELEVBQWUsS0FBZixFQUFzQixPQUF0QixFQUErQixJQUEvQixFQUFxQyxPQUFyQyxDQUpBO0FBS0xDLHVCQUFpQixDQUxaLEVBS2U7QUFDcEJDLFlBQU0sWUFORDtBQU9MQyxTQUFHO0FBQ0g7QUFDQTtBQVRLLEssUUFXUEMsTyxHQUFVO0FBQ1JDLFNBRFEsZUFDSkMsQ0FESSxFQUNEO0FBQ0wsWUFBSUMsT0FBTyxJQUFYOztBQUVBQSxhQUFLTixlQUFMLEdBQXVCSyxFQUFFRSxhQUFGLENBQWdCQyxFQUF2QztBQUNBRixhQUFLTCxJQUFMLEdBQVlLLEtBQUtQLEdBQUwsQ0FBU08sS0FBS04sZUFBZCxDQUFaO0FBQ0EsdUJBQUtTLE9BQUwsQ0FBYTtBQUNYQyxlQUFLLGdDQURNO0FBRVhDLGtCQUFRLE1BRkc7QUFHWGhCLGdCQUFNO0FBQ0pNLGtCQUFNSyxLQUFLTDtBQURQLFdBSEs7QUFNWFcsbUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQlAsaUJBQUtKLENBQUwsR0FBU1csSUFBSWxCLElBQWI7QUFDQVcsaUJBQUtRLE9BQUwsQ0FBYTtBQUNYWixpQkFBR1csSUFBSWxCO0FBREksYUFBYjtBQUdEO0FBWFUsU0FBYjtBQWFELE9BbkJPO0FBb0JSb0IsV0FwQlEsaUJBb0JGVixDQXBCRSxFQW9CQztBQUNQLFlBQUlDLE9BQU8sSUFBWDtBQUNBLFlBQUlFLEtBQUtILEVBQUVFLGFBQUYsQ0FBZ0JTLE9BQWhCLENBQXdCQyxLQUFqQztBQUNBLFlBQUlDLFFBQVFaLEtBQUtKLENBQUwsQ0FBT00sRUFBUCxFQUFXVyxPQUF2QjtBQUNBQyxnQkFBUUMsR0FBUixDQUFZYixFQUFaLEVBQWdCLGtCQUFoQjtBQUNBWSxnQkFBUUMsR0FBUixDQUFZZixLQUFLSixDQUFMLENBQU9NLEVBQVAsQ0FBWixFQUF3QixnQkFBeEI7QUFDQSxZQUFJO0FBQ0YseUJBQUtjLGNBQUwsQ0FBb0IsU0FBcEIsRUFBK0JKLEtBQS9CO0FBQ0QsU0FGRCxDQUVFLE9BQU9LLEdBQVAsRUFBWTtBQUNaSCxrQkFBUUMsR0FBUixDQUFZRSxHQUFaOztBQUVBO0FBQ0Q7O0FBRUQsdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZGQsZUFBSztBQURTLFNBQWhCO0FBR0Q7QUFyQ08sSzs7Ozs7Ozs7Ozs7O0FBd0NKSixvQixHQUFPLEk7OztBQUVYLCtCQUFLbUIsYUFBTCxDQUFtQjtBQUNqQmIseUJBRGlCLG1CQUNUQyxHQURTLEVBQ0o7QUFDWFAseUJBQUtWLE1BQUwsR0FBY2lCLElBQUlhLFlBQWxCO0FBQ0FwQix5QkFBS1QsS0FBTCxHQUFhZ0IsSUFBSWMsV0FBakI7QUFDRDtBQUpnQixpQkFBbkI7Ozt1QkFPTSxlQUFLbEIsT0FBTCxDQUFhO0FBQ2pCQyx1QkFBSyxnQ0FEWTtBQUVqQkMsMEJBQVEsTUFGUztBQUdqQmhCLHdCQUFNO0FBQ0pNLDBCQUFNSyxLQUFLTDtBQURQLG1CQUhXO0FBTWpCVywyQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCUCx5QkFBS0osQ0FBTCxHQUFTVyxJQUFJbEIsSUFBYjtBQUNBVyx5QkFBS1EsT0FBTCxDQUFhO0FBQ1haLHlCQUFHVyxJQUFJbEI7QUFESSxxQkFBYjtBQUdBeUIsNEJBQVFDLEdBQVIsQ0FBWVIsSUFBSWxCLElBQWhCLEVBQXNCLFdBQXRCO0FBQ0Q7QUFaZ0IsaUJBQWIsQzs7OztBQWVOLHFCQUFLaUMsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dDQUVrQjtBQUNsQixxQkFBS0Msb0JBQUw7QUFDQUMsaUJBQVcsWUFBVztBQUNwQix1QkFBS0MsbUJBQUw7QUFDRCxPQUZELEVBRUcsSUFGSDtBQUdEOzs7d0NBRW1CO0FBQ2xCLGFBQU87QUFDTEMsZUFBTyxJQURGO0FBRUxDLGNBQU07QUFGRCxPQUFQO0FBSUQ7Ozs7RUE5RmdDLGVBQUtDLEk7O2tCQUFuQjNDLEsiLCJmaWxlIjoiY2xhc3NpZnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfliIbnsbsnLFxuICAgIGVuYWJsZVB1bGxEb3duUmVmcmVzaDogdHJ1ZVxuICB9XG4gIGRhdGEgPSB7XG4gICAgaGVpZ2h0OiAwLFxuICAgIHdpZHRoOiAwLFxuICAgIGljb246ICcuLi9pbWFnZS/mtY/op4gtMi5wbmcnLFxuICAgIHRhYjogWydqYXZhc2NyaXB0JywgJ2NzcycsICdodG1sNScsICdnbycsICdzd2lmdCddLFxuICAgIGN1cnJlbnRUYXJnZXRJZDogMCwgLy8g5Luk5b2T5YmN5Lu75YqhSUTkuLow77yMIOebrueahOaYr+WSjGluZGV4IOWIpOaWrVxuICAgIHR5cGU6ICdqYXZhc2NyaXB0JyxcbiAgICBhOiAnJ1xuICAgIC8vIHJlYWQ6ICcwJ1xuICAgIC8vIHBpYzogJydcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIHRhcChlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcblxuICAgICAgc2VsZi5jdXJyZW50VGFyZ2V0SWQgPSBlLmN1cnJlbnRUYXJnZXQuaWRcbiAgICAgIHNlbGYudHlwZSA9IHNlbGYudGFiW3NlbGYuY3VycmVudFRhcmdldElkXVxuICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL2NsYXNzaWZ5JyxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICB0eXBlOiBzZWxmLnR5cGVcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgc2VsZi5hID0gcmVzLmRhdGFcbiAgICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgICAgYTogcmVzLmRhdGFcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgY2xpY2soZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBsZXQgaWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleFxuICAgICAgbGV0IGVzc2F5ID0gc2VsZi5hW2lkXS5jb250ZW50XG4gICAgICBjb25zb2xlLmxvZyhpZCwgJ29vb29vb29vb29vb29vb28nKVxuICAgICAgY29uc29sZS5sb2coc2VsZi5hW2lkXSwgJ2lpaWlpaWlpaWlpaWlpJylcbiAgICAgIHRyeSB7XG4gICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ2FydGljbGUnLCBlc3NheSlcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG5cbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vamF2YXNjcmlwdCdcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIGFzeW5jIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcblxuICAgIHdlcHkuZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICBzZWxmLmhlaWdodCA9IHJlcy53aW5kb3dIZWlnaHRcbiAgICAgICAgc2VsZi53aWR0aCA9IHJlcy53aW5kb3dXaWR0aFxuICAgICAgfVxuICAgIH0pXG5cbiAgICBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL2NsYXNzaWZ5JyxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgZGF0YToge1xuICAgICAgICB0eXBlOiBzZWxmLnR5cGVcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgc2VsZi5hID0gcmVzLmRhdGFcbiAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICBhOiByZXMuZGF0YVxuICAgICAgICB9KVxuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSwgJ3BwcHBwcHBwcCcpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuJGFwcGx5KClcbiAgfVxuICBvblB1bGxEb3duUmVmcmVzaCgpIHtcbiAgICB3ZXB5LnN0YXJ0UHVsbERvd25SZWZyZXNoKClcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgd2VweS5zdG9wUHVsbERvd25SZWZyZXNoKClcbiAgICB9LCAxMDAwKVxuICB9XG5cbiAgb25TaGFyZUFwcE1lc3NhZ2UoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiAn5YiG57G7JyxcbiAgICAgIHBhdGg6ICcvcGFnZXMvY2xhc3NpZnknXG4gICAgfVxuICB9XG59XG4iXX0=