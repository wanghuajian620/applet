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
      navigationBarTitleText: '我的'
    }, _this.data = {
      avatarUrl: '../image/WechatIMG25.jpeg',
      nickName: 'A∞(华健)',
      cat: '../image/github-3.png',
      symbol: '../image/下一步.png',
      email: '../image/邮件.png',
      sign: '../image/下一步.png',
      height: 0,
      width: 0
    }, _this.methods = {
      github: function github() {
        _wepy2.default.setClipboardData({
          data: 'http://github.com/wanghuajian620',
          success: function success(res) {
            _wepy2.default.showActionSheet({
              itemList: ['http://github.com/wanghuajian620'],
              success: function success(res) {
                if (res.tapIndex === 0) {
                  _wepy2.default.showModal({
                    title: '提示',
                    content: '复制成功'
                  });
                }
              }
            });
          }
        });
      },
      email: function email() {
        _wepy2.default.setClipboardData({
          data: 'sunshineboy_1026@163.com',
          success: function success(res) {
            _wepy2.default.showActionSheet({
              itemList: ['sunshineboy_1026@163.com'],
              success: function success(res) {
                if (res.tapIndex === 0) {
                  _wepy2.default.showModal({
                    title: '提示',
                    content: '复制成功'
                  });
                }
              }
            });
          }
        });
      },
      onShareAppMessage: function onShareAppMessage() {
        return {
          title: '博客',
          path: '/pages/me'
        };
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
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/me'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJhdmF0YXJVcmwiLCJuaWNrTmFtZSIsImNhdCIsInN5bWJvbCIsImVtYWlsIiwic2lnbiIsImhlaWdodCIsIndpZHRoIiwibWV0aG9kcyIsImdpdGh1YiIsInNldENsaXBib2FyZERhdGEiLCJzdWNjZXNzIiwicmVzIiwic2hvd0FjdGlvblNoZWV0IiwiaXRlbUxpc3QiLCJ0YXBJbmRleCIsInNob3dNb2RhbCIsInRpdGxlIiwiY29udGVudCIsIm9uU2hhcmVBcHBNZXNzYWdlIiwicGF0aCIsInNlbGYiLCJnZXRTeXN0ZW1JbmZvIiwid2luZG93SGVpZ2h0Iiwid2luZG93V2lkdGgiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsaUJBQVcsMkJBRE47QUFFTEMsZ0JBQVUsUUFGTDtBQUdMQyxXQUFLLHVCQUhBO0FBSUxDLGNBQVEsa0JBSkg7QUFLTEMsYUFBTyxpQkFMRjtBQU1MQyxZQUFNLGtCQU5EO0FBT0xDLGNBQVEsQ0FQSDtBQVFMQyxhQUFPO0FBUkYsSyxRQVVQQyxPLEdBQVU7QUFDUkMsWUFEUSxvQkFDQztBQUNQLHVCQUFLQyxnQkFBTCxDQUFzQjtBQUNwQlgsZ0JBQU0sa0NBRGM7QUFFcEJZLG1CQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckIsMkJBQUtDLGVBQUwsQ0FBcUI7QUFDbkJDLHdCQUFVLENBQUMsa0NBQUQsQ0FEUztBQUVuQkgsdUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQixvQkFBSUEsSUFBSUcsUUFBSixLQUFpQixDQUFyQixFQUF3QjtBQUN0QixpQ0FBS0MsU0FBTCxDQUFlO0FBQ2JDLDJCQUFPLElBRE07QUFFYkMsNkJBQVM7QUFGSSxtQkFBZjtBQUlEO0FBQ0Y7QUFUa0IsYUFBckI7QUFXRDtBQWRtQixTQUF0QjtBQWdCRCxPQWxCTztBQW1CUmQsV0FuQlEsbUJBbUJBO0FBQ04sdUJBQUtNLGdCQUFMLENBQXNCO0FBQ3BCWCxnQkFBTSwwQkFEYztBQUVwQlksbUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQiwyQkFBS0MsZUFBTCxDQUFxQjtBQUNuQkMsd0JBQVUsQ0FBQywwQkFBRCxDQURTO0FBRW5CSCx1QkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCLG9CQUFJQSxJQUFJRyxRQUFKLEtBQWlCLENBQXJCLEVBQXdCO0FBQ3RCLGlDQUFLQyxTQUFMLENBQWU7QUFDYkMsMkJBQU8sSUFETTtBQUViQyw2QkFBUztBQUZJLG1CQUFmO0FBSUQ7QUFDRjtBQVRrQixhQUFyQjtBQVdEO0FBZG1CLFNBQXRCO0FBZ0JELE9BcENPO0FBcUNSQyx1QkFyQ1EsK0JBcUNZO0FBQ2xCLGVBQU87QUFDTEYsaUJBQU8sSUFERjtBQUVMRyxnQkFBTTtBQUZELFNBQVA7QUFJRDtBQTFDTyxLOzs7Ozs2QkE0Q0Q7QUFDUCxVQUFJQyxPQUFPLElBQVg7QUFDQSxxQkFBS0MsYUFBTCxDQUFtQjtBQUNqQlgsZUFEaUIsbUJBQ1RDLEdBRFMsRUFDSjtBQUNYUyxlQUFLZixNQUFMLEdBQWNNLElBQUlXLFlBQWxCO0FBQ0FGLGVBQUtkLEtBQUwsR0FBYUssSUFBSVksV0FBakI7QUFDRDtBQUpnQixPQUFuQjtBQU1EOzs7O0VBbEVnQyxlQUFLQyxJOztrQkFBbkI3QixLIiwiZmlsZSI6Im1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5oiR55qEJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgYXZhdGFyVXJsOiAnLi4vaW1hZ2UvV2VjaGF0SU1HMjUuanBlZycsXG4gICAgbmlja05hbWU6ICdB4oieKOWNjuWBpSknLFxuICAgIGNhdDogJy4uL2ltYWdlL2dpdGh1Yi0zLnBuZycsXG4gICAgc3ltYm9sOiAnLi4vaW1hZ2Uv5LiL5LiA5q2lLnBuZycsXG4gICAgZW1haWw6ICcuLi9pbWFnZS/pgq7ku7YucG5nJyxcbiAgICBzaWduOiAnLi4vaW1hZ2Uv5LiL5LiA5q2lLnBuZycsXG4gICAgaGVpZ2h0OiAwLFxuICAgIHdpZHRoOiAwXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBnaXRodWIoKSB7XG4gICAgICB3ZXB5LnNldENsaXBib2FyZERhdGEoe1xuICAgICAgICBkYXRhOiAnaHR0cDovL2dpdGh1Yi5jb20vd2FuZ2h1YWppYW42MjAnLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICB3ZXB5LnNob3dBY3Rpb25TaGVldCh7XG4gICAgICAgICAgICBpdGVtTGlzdDogWydodHRwOi8vZ2l0aHViLmNvbS93YW5naHVhamlhbjYyMCddLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAgIGlmIChyZXMudGFwSW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgICAgICAgICAgICAgICBjb250ZW50OiAn5aSN5Yi25oiQ5YqfJ1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgZW1haWwoKSB7XG4gICAgICB3ZXB5LnNldENsaXBib2FyZERhdGEoe1xuICAgICAgICBkYXRhOiAnc3Vuc2hpbmVib3lfMTAyNkAxNjMuY29tJyxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgd2VweS5zaG93QWN0aW9uU2hlZXQoe1xuICAgICAgICAgICAgaXRlbUxpc3Q6IFsnc3Vuc2hpbmVib3lfMTAyNkAxNjMuY29tJ10sXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgaWYgKHJlcy50YXBJbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICflpI3liLbmiJDlip8nXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICBvblNoYXJlQXBwTWVzc2FnZSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlOiAn5Y2a5a6iJyxcbiAgICAgICAgcGF0aDogJy9wYWdlcy9tZSdcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHdlcHkuZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICBzZWxmLmhlaWdodCA9IHJlcy53aW5kb3dIZWlnaHRcbiAgICAgICAgc2VsZi53aWR0aCA9IHJlcy53aW5kb3dXaWR0aFxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==