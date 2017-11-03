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
      type: 'javascript',
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
          }
        });
      },
      click: function click(e) {
        var self = this;
        var id = e.currentTarget.dataset.index;
        var essay = self.a[id].content;

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
                    console.log(res.data);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYXNzaWZ5LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImVuYWJsZVB1bGxEb3duUmVmcmVzaCIsImRhdGEiLCJoZWlnaHQiLCJ3aWR0aCIsInRhYiIsImN1cnJlbnRUYXJnZXRJZCIsImNvbnRlbnQiLCJ0eXBlIiwiYSIsIm1ldGhvZHMiLCJ0YXAiLCJlIiwic2VsZiIsImN1cnJlbnRUYXJnZXQiLCJpZCIsInJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJzdWNjZXNzIiwicmVzIiwic2V0RGF0YSIsImNsaWNrIiwiZGF0YXNldCIsImluZGV4IiwiZXNzYXkiLCJzZXRTdG9yYWdlU3luYyIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJuYXZpZ2F0ZVRvIiwiZ2V0U3lzdGVtSW5mbyIsIndpbmRvd0hlaWdodCIsIndpbmRvd1dpZHRoIiwiJGFwcGx5Iiwic3RhcnRQdWxsRG93blJlZnJlc2giLCJzZXRUaW1lb3V0Iiwic3RvcFB1bGxEb3duUmVmcmVzaCIsInRpdGxlIiwicGF0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLElBRGpCO0FBRVBDLDZCQUF1QjtBQUZoQixLLFFBSVRDLEksR0FBTztBQUNMQyxjQUFRLENBREg7QUFFTEMsYUFBTyxDQUZGO0FBR0xDLFdBQUssQ0FBQyxZQUFELEVBQWUsS0FBZixFQUFzQixPQUF0QixFQUErQixJQUEvQixFQUFxQyxPQUFyQyxDQUhBO0FBSUxDLHVCQUFpQixDQUpaO0FBS0xDLGVBQVMsRUFMSjtBQU1MQyxZQUFNLFlBTkQ7QUFPTEMsU0FBRztBQVBFLEssUUFTUEMsTyxHQUFVO0FBQ1JDLFNBRFEsZUFDSkMsQ0FESSxFQUNEO0FBQ0wsWUFBSUMsT0FBTyxJQUFYOztBQUVBQSxhQUFLUCxlQUFMLEdBQXVCTSxFQUFFRSxhQUFGLENBQWdCQyxFQUF2QztBQUNBRixhQUFLTCxJQUFMLEdBQVlLLEtBQUtSLEdBQUwsQ0FBU1EsS0FBS1AsZUFBZCxDQUFaO0FBQ0EsdUJBQUtVLE9BQUwsQ0FBYTtBQUNYQyxlQUFLLGdDQURNO0FBRVhDLGtCQUFRLE1BRkc7QUFHWGhCLGdCQUFNO0FBQ0pNLGtCQUFNSyxLQUFLTDtBQURQLFdBSEs7QUFNWFcsbUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQlAsaUJBQUtKLENBQUwsR0FBU1csSUFBSWxCLElBQWI7QUFDQVcsaUJBQUtRLE9BQUwsQ0FBYTtBQUNYWixpQkFBR1csSUFBSWxCO0FBREksYUFBYjtBQUdEO0FBWFUsU0FBYjtBQWFELE9BbkJPO0FBb0JSb0IsV0FwQlEsaUJBb0JGVixDQXBCRSxFQW9CQztBQUNQLFlBQUlDLE9BQU8sSUFBWDtBQUNBLFlBQUlFLEtBQUtILEVBQUVFLGFBQUYsQ0FBZ0JTLE9BQWhCLENBQXdCQyxLQUFqQztBQUNBLFlBQUlDLFFBQVFaLEtBQUtKLENBQUwsQ0FBT00sRUFBUCxFQUFXUixPQUF2Qjs7QUFFQSxZQUFJO0FBQ0YseUJBQUttQixjQUFMLENBQW9CLFNBQXBCLEVBQStCRCxLQUEvQjtBQUNELFNBRkQsQ0FFRSxPQUFPRSxHQUFQLEVBQVk7QUFDWkMsa0JBQVFDLEdBQVIsQ0FBWUYsR0FBWjs7QUFFQTtBQUNEOztBQUVELHVCQUFLRyxVQUFMLENBQWdCO0FBQ2RiO0FBRGMsU0FBaEI7QUFHRDtBQXBDTyxLOzs7Ozs7Ozs7Ozs7QUF1Q0pKLG9CLEdBQU8sSTs7O0FBRVgsK0JBQUtrQixhQUFMLENBQW1CO0FBQ2pCWix5QkFEaUIsbUJBQ1RDLEdBRFMsRUFDSjtBQUNYUCx5QkFBS1YsTUFBTCxHQUFjaUIsSUFBSVksWUFBbEI7QUFDQW5CLHlCQUFLVCxLQUFMLEdBQWFnQixJQUFJYSxXQUFqQjtBQUNEO0FBSmdCLGlCQUFuQjs7O3VCQU9NLGVBQUtqQixPQUFMLENBQWE7QUFDakJDLHVCQUFLLGdDQURZO0FBRWpCQywwQkFBUSxNQUZTO0FBR2pCaEIsd0JBQU07QUFDSk0sMEJBQU1LLEtBQUtMO0FBRFAsbUJBSFc7QUFNakJXLDJCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJRLDRCQUFRQyxHQUFSLENBQVlULElBQUlsQixJQUFoQjtBQUNBVyx5QkFBS0osQ0FBTCxHQUFTVyxJQUFJbEIsSUFBYjtBQUNBVyx5QkFBS1EsT0FBTCxDQUFhO0FBQ1haLHlCQUFHVyxJQUFJbEI7QUFESSxxQkFBYjtBQUdBO0FBQ0Q7QUFiZ0IsaUJBQWIsQzs7OztBQWdCTixxQkFBS2dDLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3Q0FFa0I7QUFDbEIscUJBQUtDLG9CQUFMO0FBQ0FDLGlCQUFXLFlBQVc7QUFDcEIsdUJBQUtDLG1CQUFMO0FBQ0QsT0FGRCxFQUVHLElBRkg7QUFHRDs7O3dDQUVtQjtBQUNsQixhQUFPO0FBQ0xDLGVBQU8sSUFERjtBQUVMQyxjQUFNO0FBRkQsT0FBUDtBQUlEOzs7O0VBNUZnQyxlQUFLQyxJOztrQkFBbkIxQyxLIiwiZmlsZSI6ImNsYXNzaWZ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5YiG57G7JyxcbiAgICBlbmFibGVQdWxsRG93blJlZnJlc2g6IHRydWVcbiAgfVxuICBkYXRhID0ge1xuICAgIGhlaWdodDogMCxcbiAgICB3aWR0aDogMCxcbiAgICB0YWI6IFsnamF2YXNjcmlwdCcsICdjc3MnLCAnaHRtbDUnLCAnZ28nLCAnc3dpZnQnXSxcbiAgICBjdXJyZW50VGFyZ2V0SWQ6IDAsXG4gICAgY29udGVudDogJycsXG4gICAgdHlwZTogJ2phdmFzY3JpcHQnLFxuICAgIGE6ICcnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICB0YXAoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG5cbiAgICAgIHNlbGYuY3VycmVudFRhcmdldElkID0gZS5jdXJyZW50VGFyZ2V0LmlkXG4gICAgICBzZWxmLnR5cGUgPSBzZWxmLnRhYltzZWxmLmN1cnJlbnRUYXJnZXRJZF1cbiAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS9jbGFzc2lmeScsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgdHlwZTogc2VsZi50eXBlXG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgIHNlbGYuYSA9IHJlcy5kYXRhXG4gICAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICAgIGE6IHJlcy5kYXRhXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIGNsaWNrKGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgbGV0IGlkID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhcbiAgICAgIGxldCBlc3NheSA9IHNlbGYuYVtpZF0uY29udGVudFxuXG4gICAgICB0cnkge1xuICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdhcnRpY2xlJywgZXNzYXkpXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAuL2phdmFzY3JpcHRgXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBhc3luYyBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG5cbiAgICB3ZXB5LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgc2VsZi5oZWlnaHQgPSByZXMud2luZG93SGVpZ2h0XG4gICAgICAgIHNlbGYud2lkdGggPSByZXMud2luZG93V2lkdGhcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgYXdhaXQgd2VweS5yZXF1ZXN0KHtcbiAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS9jbGFzc2lmeScsXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdHlwZTogc2VsZi50eXBlXG4gICAgICB9LFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKVxuICAgICAgICBzZWxmLmEgPSByZXMuZGF0YVxuICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgIGE6IHJlcy5kYXRhXG4gICAgICAgIH0pXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcy5kYXRhLCAncHBwcHBwcHBwJylcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy4kYXBwbHkoKVxuICB9XG4gIG9uUHVsbERvd25SZWZyZXNoKCkge1xuICAgIHdlcHkuc3RhcnRQdWxsRG93blJlZnJlc2goKVxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICB3ZXB5LnN0b3BQdWxsRG93blJlZnJlc2goKVxuICAgIH0sIDEwMDApXG4gIH1cblxuICBvblNoYXJlQXBwTWVzc2FnZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6ICfliIbnsbsnLFxuICAgICAgcGF0aDogJy9wYWdlcy9jbGFzc2lmeSdcbiAgICB9XG4gIH1cbn1cbiJdfQ==