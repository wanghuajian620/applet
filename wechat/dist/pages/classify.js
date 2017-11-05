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
        var read = self.a[id].read;
        read++;
        self.a[id].read = read;
        console.log(id, 'oooooooooooooooo');
        // console.log(self.a[id], 'iiiiiiiiiiiiii')
        _wepy2.default.request({
          url: 'http://127.0.0.1:7001/classify/update',
          method: 'POST',
          data: {
            type: self.type,
            id: self.a[id].id,
            read: read
          }
        });
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
                    // console.log(res.data, 'ppppppppp')
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYXNzaWZ5LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImVuYWJsZVB1bGxEb3duUmVmcmVzaCIsImRhdGEiLCJoZWlnaHQiLCJ3aWR0aCIsImljb24iLCJ0YWIiLCJjdXJyZW50VGFyZ2V0SWQiLCJ0eXBlIiwiYSIsIm1ldGhvZHMiLCJ0YXAiLCJlIiwic2VsZiIsImN1cnJlbnRUYXJnZXQiLCJpZCIsInJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJzdWNjZXNzIiwicmVzIiwic2V0RGF0YSIsImNsaWNrIiwiZGF0YXNldCIsImluZGV4IiwiZXNzYXkiLCJjb250ZW50IiwicmVhZCIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdG9yYWdlU3luYyIsImVyciIsIm5hdmlnYXRlVG8iLCJnZXRTeXN0ZW1JbmZvIiwid2luZG93SGVpZ2h0Iiwid2luZG93V2lkdGgiLCIkYXBwbHkiLCJzdGFydFB1bGxEb3duUmVmcmVzaCIsInNldFRpbWVvdXQiLCJzdG9wUHVsbERvd25SZWZyZXNoIiwidGl0bGUiLCJwYXRoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsSUFEakI7QUFFUEMsNkJBQXVCO0FBRmhCLEssUUFJVEMsSSxHQUFPO0FBQ0xDLGNBQVEsQ0FESDtBQUVMQyxhQUFPLENBRkY7QUFHTEMsWUFBTSxtQkFIRDtBQUlMQyxXQUFLLENBQUMsWUFBRCxFQUFlLEtBQWYsRUFBc0IsT0FBdEIsRUFBK0IsSUFBL0IsRUFBcUMsT0FBckMsQ0FKQTtBQUtMQyx1QkFBaUIsQ0FMWixFQUtlO0FBQ3BCQyxZQUFNLFlBTkQ7QUFPTEMsU0FBRztBQUNIO0FBQ0E7QUFUSyxLLFFBV1BDLE8sR0FBVTtBQUNSQyxTQURRLGVBQ0pDLENBREksRUFDRDtBQUNMLFlBQUlDLE9BQU8sSUFBWDs7QUFFQUEsYUFBS04sZUFBTCxHQUF1QkssRUFBRUUsYUFBRixDQUFnQkMsRUFBdkM7QUFDQUYsYUFBS0wsSUFBTCxHQUFZSyxLQUFLUCxHQUFMLENBQVNPLEtBQUtOLGVBQWQsQ0FBWjtBQUNBLHVCQUFLUyxPQUFMLENBQWE7QUFDWEMsZUFBSyxnQ0FETTtBQUVYQyxrQkFBUSxNQUZHO0FBR1hoQixnQkFBTTtBQUNKTSxrQkFBTUssS0FBS0w7QUFEUCxXQUhLO0FBTVhXLG1CQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJQLGlCQUFLSixDQUFMLEdBQVNXLElBQUlsQixJQUFiO0FBQ0FXLGlCQUFLUSxPQUFMLENBQWE7QUFDWFosaUJBQUdXLElBQUlsQjtBQURJLGFBQWI7QUFHRDtBQVhVLFNBQWI7QUFhRCxPQW5CTztBQW9CUm9CLFdBcEJRLGlCQW9CRlYsQ0FwQkUsRUFvQkM7QUFDUCxZQUFJQyxPQUFPLElBQVg7QUFDQSxZQUFJRSxLQUFLSCxFQUFFRSxhQUFGLENBQWdCUyxPQUFoQixDQUF3QkMsS0FBakM7QUFDQSxZQUFJQyxRQUFRWixLQUFLSixDQUFMLENBQU9NLEVBQVAsRUFBV1csT0FBdkI7QUFDQSxZQUFJQyxPQUFPZCxLQUFLSixDQUFMLENBQU9NLEVBQVAsRUFBV1ksSUFBdEI7QUFDQUE7QUFDQWQsYUFBS0osQ0FBTCxDQUFPTSxFQUFQLEVBQVdZLElBQVgsR0FBa0JBLElBQWxCO0FBQ0FDLGdCQUFRQyxHQUFSLENBQVlkLEVBQVosRUFBZ0Isa0JBQWhCO0FBQ0E7QUFDQSx1QkFBS0MsT0FBTCxDQUFhO0FBQ1hDLGVBQUssdUNBRE07QUFFWEMsa0JBQVEsTUFGRztBQUdYaEIsZ0JBQU07QUFDSk0sa0JBQU1LLEtBQUtMLElBRFA7QUFFSk8sZ0JBQUlGLEtBQUtKLENBQUwsQ0FBT00sRUFBUCxFQUFXQSxFQUZYO0FBR0pZLGtCQUFNQTtBQUhGO0FBSEssU0FBYjtBQVNBLFlBQUk7QUFDRix5QkFBS0csY0FBTCxDQUFvQixTQUFwQixFQUErQkwsS0FBL0I7QUFDRCxTQUZELENBRUUsT0FBT00sR0FBUCxFQUFZO0FBQ1pILGtCQUFRQyxHQUFSLENBQVlFLEdBQVo7O0FBRUE7QUFDRDs7QUFFRCx1QkFBS0MsVUFBTCxDQUFnQjtBQUNkZixlQUFLO0FBRFMsU0FBaEI7QUFHRDtBQWpETyxLOzs7Ozs7Ozs7Ozs7QUFvREpKLG9CLEdBQU8sSTs7O0FBRVgsK0JBQUtvQixhQUFMLENBQW1CO0FBQ2pCZCx5QkFEaUIsbUJBQ1RDLEdBRFMsRUFDSjtBQUNYUCx5QkFBS1YsTUFBTCxHQUFjaUIsSUFBSWMsWUFBbEI7QUFDQXJCLHlCQUFLVCxLQUFMLEdBQWFnQixJQUFJZSxXQUFqQjtBQUNEO0FBSmdCLGlCQUFuQjs7O3VCQU9NLGVBQUtuQixPQUFMLENBQWE7QUFDakJDLHVCQUFLLGdDQURZO0FBRWpCQywwQkFBUSxNQUZTO0FBR2pCaEIsd0JBQU07QUFDSk0sMEJBQU1LLEtBQUtMO0FBRFAsbUJBSFc7QUFNakJXLDJCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJQLHlCQUFLSixDQUFMLEdBQVNXLElBQUlsQixJQUFiO0FBQ0FXLHlCQUFLUSxPQUFMLENBQWE7QUFDWFoseUJBQUdXLElBQUlsQjtBQURJLHFCQUFiO0FBR0E7QUFDRDtBQVpnQixpQkFBYixDOzs7O0FBZU4scUJBQUtrQyxNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7d0NBRWtCO0FBQ2xCLHFCQUFLQyxvQkFBTDtBQUNBQyxpQkFBVyxZQUFXO0FBQ3BCLHVCQUFLQyxtQkFBTDtBQUNELE9BRkQsRUFFRyxJQUZIO0FBR0Q7Ozt3Q0FFbUI7QUFDbEIsYUFBTztBQUNMQyxlQUFPLElBREY7QUFFTEMsY0FBTTtBQUZELE9BQVA7QUFJRDs7OztFQTFHZ0MsZUFBS0MsSTs7a0JBQW5CNUMsSyIsImZpbGUiOiJjbGFzc2lmeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WIhuexuycsXG4gICAgZW5hYmxlUHVsbERvd25SZWZyZXNoOiB0cnVlXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBoZWlnaHQ6IDAsXG4gICAgd2lkdGg6IDAsXG4gICAgaWNvbjogJy4uL2ltYWdlL+a1j+iniC0yLnBuZycsXG4gICAgdGFiOiBbJ2phdmFzY3JpcHQnLCAnY3NzJywgJ2h0bWw1JywgJ2dvJywgJ3N3aWZ0J10sXG4gICAgY3VycmVudFRhcmdldElkOiAwLCAvLyDku6TlvZPliY3ku7vliqFJROS4ujDvvIwg55uu55qE5piv5ZKMaW5kZXgg5Yik5patXG4gICAgdHlwZTogJ2phdmFzY3JpcHQnLFxuICAgIGE6ICcnXG4gICAgLy8gcmVhZDogJzAnXG4gICAgLy8gcGljOiAnJ1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgdGFwKGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuXG4gICAgICBzZWxmLmN1cnJlbnRUYXJnZXRJZCA9IGUuY3VycmVudFRhcmdldC5pZFxuICAgICAgc2VsZi50eXBlID0gc2VsZi50YWJbc2VsZi5jdXJyZW50VGFyZ2V0SWRdXG4gICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvY2xhc3NpZnknLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHR5cGU6IHNlbGYudHlwZVxuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICBzZWxmLmEgPSByZXMuZGF0YVxuICAgICAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgICAgICBhOiByZXMuZGF0YVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICBjbGljayhlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGxldCBpZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XG4gICAgICBsZXQgZXNzYXkgPSBzZWxmLmFbaWRdLmNvbnRlbnRcbiAgICAgIGxldCByZWFkID0gc2VsZi5hW2lkXS5yZWFkXG4gICAgICByZWFkKytcbiAgICAgIHNlbGYuYVtpZF0ucmVhZCA9IHJlYWRcbiAgICAgIGNvbnNvbGUubG9nKGlkLCAnb29vb29vb29vb29vb29vbycpXG4gICAgICAvLyBjb25zb2xlLmxvZyhzZWxmLmFbaWRdLCAnaWlpaWlpaWlpaWlpaWknKVxuICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL2NsYXNzaWZ5L3VwZGF0ZScsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgdHlwZTogc2VsZi50eXBlLFxuICAgICAgICAgIGlkOiBzZWxmLmFbaWRdLmlkLFxuICAgICAgICAgIHJlYWQ6IHJlYWRcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHRyeSB7XG4gICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ2FydGljbGUnLCBlc3NheSlcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG5cbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vamF2YXNjcmlwdCdcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIGFzeW5jIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcblxuICAgIHdlcHkuZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICBzZWxmLmhlaWdodCA9IHJlcy53aW5kb3dIZWlnaHRcbiAgICAgICAgc2VsZi53aWR0aCA9IHJlcy53aW5kb3dXaWR0aFxuICAgICAgfVxuICAgIH0pXG5cbiAgICBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL2NsYXNzaWZ5JyxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgZGF0YToge1xuICAgICAgICB0eXBlOiBzZWxmLnR5cGVcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgc2VsZi5hID0gcmVzLmRhdGFcbiAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICBhOiByZXMuZGF0YVxuICAgICAgICB9KVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMuZGF0YSwgJ3BwcHBwcHBwcCcpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuJGFwcGx5KClcbiAgfVxuICBvblB1bGxEb3duUmVmcmVzaCgpIHtcbiAgICB3ZXB5LnN0YXJ0UHVsbERvd25SZWZyZXNoKClcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgd2VweS5zdG9wUHVsbERvd25SZWZyZXNoKClcbiAgICB9LCAxMDAwKVxuICB9XG5cbiAgb25TaGFyZUFwcE1lc3NhZ2UoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiAn5YiG57G7JyxcbiAgICAgIHBhdGg6ICcvcGFnZXMvY2xhc3NpZnknXG4gICAgfVxuICB9XG59XG4iXX0=