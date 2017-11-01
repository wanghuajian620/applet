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
      content: '',
      tab: ['JavaScript', 'css', 'html5', 'go', 'swift'],
      currentTargetId: 0
    }, _this.methods = {
      tap: function tap(e) {
        var self = this;

        self.currentTargetId = e.currentTarget.id;
      },
      click: function click(e) {
        var self = this;
        var id = e.currentTarget.dataset.index;
        var essay = self.content[id].content;
        // self.currentTargetId = e.currentTarget.id
        console.log(e, 'aaaaaaaaaaaaa');
        // console.log(self.content[0], 'essay')
        // console.log(essay)
        _wepy2.default.navigateTo({
          url: './javascript?MD=' + essay
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
                  success: function success(res) {
                    self.content = res.data;
                    self.setData({
                      content: res.data
                    });
                    console.log(self.content);
                    console.log(self.content[0].content, 'essay');
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYXNzaWZ5LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImVuYWJsZVB1bGxEb3duUmVmcmVzaCIsImRhdGEiLCJoZWlnaHQiLCJ3aWR0aCIsImNvbnRlbnQiLCJ0YWIiLCJjdXJyZW50VGFyZ2V0SWQiLCJtZXRob2RzIiwidGFwIiwiZSIsInNlbGYiLCJjdXJyZW50VGFyZ2V0IiwiaWQiLCJjbGljayIsImRhdGFzZXQiLCJpbmRleCIsImVzc2F5IiwiY29uc29sZSIsImxvZyIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJnZXRTeXN0ZW1JbmZvIiwic3VjY2VzcyIsInJlcyIsIndpbmRvd0hlaWdodCIsIndpbmRvd1dpZHRoIiwicmVxdWVzdCIsInNldERhdGEiLCIkYXBwbHkiLCJzdGFydFB1bGxEb3duUmVmcmVzaCIsInNldFRpbWVvdXQiLCJzdG9wUHVsbERvd25SZWZyZXNoIiwidGl0bGUiLCJwYXRoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsSUFEakI7QUFFUEMsNkJBQXVCO0FBRmhCLEssUUFJVEMsSSxHQUFPO0FBQ0xDLGNBQVEsQ0FESDtBQUVMQyxhQUFPLENBRkY7QUFHTEMsZUFBUyxFQUhKO0FBSUxDLFdBQUssQ0FBQyxZQUFELEVBQWUsS0FBZixFQUFzQixPQUF0QixFQUErQixJQUEvQixFQUFxQyxPQUFyQyxDQUpBO0FBS0xDLHVCQUFpQjtBQUxaLEssUUFPUEMsTyxHQUFVO0FBQ1JDLFNBRFEsZUFDSkMsQ0FESSxFQUNEO0FBQ0wsWUFBSUMsT0FBTyxJQUFYOztBQUVBQSxhQUFLSixlQUFMLEdBQXVCRyxFQUFFRSxhQUFGLENBQWdCQyxFQUF2QztBQUNELE9BTE87QUFNUkMsV0FOUSxpQkFNRkosQ0FORSxFQU1DO0FBQ1AsWUFBSUMsT0FBTyxJQUFYO0FBQ0EsWUFBSUUsS0FBS0gsRUFBRUUsYUFBRixDQUFnQkcsT0FBaEIsQ0FBd0JDLEtBQWpDO0FBQ0EsWUFBSUMsUUFBUU4sS0FBS04sT0FBTCxDQUFhUSxFQUFiLEVBQWlCUixPQUE3QjtBQUNBO0FBQ0FhLGdCQUFRQyxHQUFSLENBQVlULENBQVosRUFBZSxlQUFmO0FBQ0E7QUFDQTtBQUNBLHVCQUFLVSxVQUFMLENBQWdCO0FBQ2RDLG9DQUF3Qko7QUFEVixTQUFoQjtBQUdEO0FBakJPLEs7Ozs7Ozs7Ozs7OztBQW9CSk4sb0IsR0FBTyxJOztBQUNYLCtCQUFLVyxhQUFMLENBQW1CO0FBQ2pCQyx5QkFEaUIsbUJBQ1RDLEdBRFMsRUFDSjtBQUNYYix5QkFBS1IsTUFBTCxHQUFjcUIsSUFBSUMsWUFBbEI7QUFDQWQseUJBQUtQLEtBQUwsR0FBYW9CLElBQUlFLFdBQWpCO0FBQ0Q7QUFKZ0IsaUJBQW5COzt1QkFNTSxlQUFLQyxPQUFMLENBQWE7QUFDakJOLHVCQUFLLGdDQURZO0FBRWpCRSwyQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCYix5QkFBS04sT0FBTCxHQUFlbUIsSUFBSXRCLElBQW5CO0FBQ0FTLHlCQUFLaUIsT0FBTCxDQUFhO0FBQ1h2QiwrQkFBU21CLElBQUl0QjtBQURGLHFCQUFiO0FBR0FnQiw0QkFBUUMsR0FBUixDQUFZUixLQUFLTixPQUFqQjtBQUNBYSw0QkFBUUMsR0FBUixDQUFZUixLQUFLTixPQUFMLENBQWEsQ0FBYixFQUFnQkEsT0FBNUIsRUFBcUMsT0FBckM7QUFDRDtBQVRnQixpQkFBYixDOzs7O0FBWU4scUJBQUt3QixNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7d0NBRWtCO0FBQ2xCLHFCQUFLQyxvQkFBTDtBQUNBQyxpQkFBVyxZQUFXO0FBQ3BCLHVCQUFLQyxtQkFBTDtBQUNELE9BRkQsRUFFRyxJQUZIO0FBR0Q7Ozt3Q0FFbUI7QUFDbEIsYUFBTztBQUNMQyxlQUFPLElBREY7QUFFTEMsY0FBTTtBQUZELE9BQVA7QUFJRDs7OztFQWpFZ0MsZUFBS0MsSTs7a0JBQW5CckMsSyIsImZpbGUiOiJjbGFzc2lmeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WIhuexuycsXG4gICAgZW5hYmxlUHVsbERvd25SZWZyZXNoOiB0cnVlXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBoZWlnaHQ6IDAsXG4gICAgd2lkdGg6IDAsXG4gICAgY29udGVudDogJycsXG4gICAgdGFiOiBbJ0phdmFTY3JpcHQnLCAnY3NzJywgJ2h0bWw1JywgJ2dvJywgJ3N3aWZ0J10sXG4gICAgY3VycmVudFRhcmdldElkOiAwXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICB0YXAoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG5cbiAgICAgIHNlbGYuY3VycmVudFRhcmdldElkID0gZS5jdXJyZW50VGFyZ2V0LmlkXG4gICAgfSxcbiAgICBjbGljayhlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGxldCBpZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XG4gICAgICBsZXQgZXNzYXkgPSBzZWxmLmNvbnRlbnRbaWRdLmNvbnRlbnRcbiAgICAgIC8vIHNlbGYuY3VycmVudFRhcmdldElkID0gZS5jdXJyZW50VGFyZ2V0LmlkXG4gICAgICBjb25zb2xlLmxvZyhlLCAnYWFhYWFhYWFhYWFhYScpXG4gICAgICAvLyBjb25zb2xlLmxvZyhzZWxmLmNvbnRlbnRbMF0sICdlc3NheScpXG4gICAgICAvLyBjb25zb2xlLmxvZyhlc3NheSlcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC4vamF2YXNjcmlwdD9NRD0ke2Vzc2F5fWBcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIGFzeW5jIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB3ZXB5LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgc2VsZi5oZWlnaHQgPSByZXMud2luZG93SGVpZ2h0XG4gICAgICAgIHNlbGYud2lkdGggPSByZXMud2luZG93V2lkdGhcbiAgICAgIH1cbiAgICB9KVxuICAgIGF3YWl0IHdlcHkucmVxdWVzdCh7XG4gICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvY2xhc3NpZnknLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIHNlbGYuY29udGVudCA9IHJlcy5kYXRhXG4gICAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgICAgY29udGVudDogcmVzLmRhdGFcbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5sb2coc2VsZi5jb250ZW50KVxuICAgICAgICBjb25zb2xlLmxvZyhzZWxmLmNvbnRlbnRbMF0uY29udGVudCwgJ2Vzc2F5JylcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy4kYXBwbHkoKVxuICB9XG4gIG9uUHVsbERvd25SZWZyZXNoKCkge1xuICAgIHdlcHkuc3RhcnRQdWxsRG93blJlZnJlc2goKVxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICB3ZXB5LnN0b3BQdWxsRG93blJlZnJlc2goKVxuICAgIH0sIDEwMDApXG4gIH1cblxuICBvblNoYXJlQXBwTWVzc2FnZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6ICfliIbnsbsnLFxuICAgICAgcGF0aDogJy9wYWdlcy9jbGFzc2lmeSdcbiAgICB9XG4gIH1cbn1cbiJdfQ==