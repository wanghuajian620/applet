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
      avatarUrl: '',
      nickName: '',
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
      _wepy2.default.getUserInfo({
        success: function success(res) {
          self.avatarUrl = res.userInfo.avatarUrl;
          self.nickName = res.userInfo.nickName;
        }
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/me'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJhdmF0YXJVcmwiLCJuaWNrTmFtZSIsImNhdCIsInN5bWJvbCIsImVtYWlsIiwic2lnbiIsImhlaWdodCIsIndpZHRoIiwibWV0aG9kcyIsImdpdGh1YiIsInNldENsaXBib2FyZERhdGEiLCJzdWNjZXNzIiwicmVzIiwic2hvd0FjdGlvblNoZWV0IiwiaXRlbUxpc3QiLCJ0YXBJbmRleCIsInNob3dNb2RhbCIsInRpdGxlIiwiY29udGVudCIsIm9uU2hhcmVBcHBNZXNzYWdlIiwicGF0aCIsInNlbGYiLCJnZXRTeXN0ZW1JbmZvIiwid2luZG93SGVpZ2h0Iiwid2luZG93V2lkdGgiLCJnZXRVc2VySW5mbyIsInVzZXJJbmZvIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLGlCQUFXLEVBRE47QUFFTEMsZ0JBQVUsRUFGTDtBQUdMQyxXQUFLLHVCQUhBO0FBSUxDLGNBQVEsa0JBSkg7QUFLTEMsYUFBTyxpQkFMRjtBQU1MQyxZQUFNLGtCQU5EO0FBT0xDLGNBQVEsQ0FQSDtBQVFMQyxhQUFPO0FBUkYsSyxRQVVQQyxPLEdBQVU7QUFDUkMsWUFEUSxvQkFDQztBQUNQLHVCQUFLQyxnQkFBTCxDQUFzQjtBQUNwQlgsZ0JBQU0sa0NBRGM7QUFFcEJZLG1CQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckIsMkJBQUtDLGVBQUwsQ0FBcUI7QUFDbkJDLHdCQUFVLENBQUMsa0NBQUQsQ0FEUztBQUVuQkgsdUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQixvQkFBSUEsSUFBSUcsUUFBSixLQUFpQixDQUFyQixFQUF3QjtBQUN0QixpQ0FBS0MsU0FBTCxDQUFlO0FBQ2JDLDJCQUFPLElBRE07QUFFYkMsNkJBQVM7QUFGSSxtQkFBZjtBQUlEO0FBQ0Y7QUFUa0IsYUFBckI7QUFXRDtBQWRtQixTQUF0QjtBQWdCRCxPQWxCTztBQW1CUmQsV0FuQlEsbUJBbUJBO0FBQ04sdUJBQUtNLGdCQUFMLENBQXNCO0FBQ3BCWCxnQkFBTSwwQkFEYztBQUVwQlksbUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQiwyQkFBS0MsZUFBTCxDQUFxQjtBQUNuQkMsd0JBQVUsQ0FBQywwQkFBRCxDQURTO0FBRW5CSCx1QkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCLG9CQUFJQSxJQUFJRyxRQUFKLEtBQWlCLENBQXJCLEVBQXdCO0FBQ3RCLGlDQUFLQyxTQUFMLENBQWU7QUFDYkMsMkJBQU8sSUFETTtBQUViQyw2QkFBUztBQUZJLG1CQUFmO0FBSUQ7QUFDRjtBQVRrQixhQUFyQjtBQVdEO0FBZG1CLFNBQXRCO0FBZ0JELE9BcENPO0FBcUNSQyx1QkFyQ1EsK0JBcUNZO0FBQ2xCLGVBQU87QUFDTEYsaUJBQU8sSUFERjtBQUVMRyxnQkFBTTtBQUZELFNBQVA7QUFJRDtBQTFDTyxLOzs7Ozs2QkE0Q0Q7QUFDUCxVQUFJQyxPQUFPLElBQVg7QUFDQSxxQkFBS0MsYUFBTCxDQUFtQjtBQUNqQlgsZUFEaUIsbUJBQ1RDLEdBRFMsRUFDSjtBQUNYUyxlQUFLZixNQUFMLEdBQWNNLElBQUlXLFlBQWxCO0FBQ0FGLGVBQUtkLEtBQUwsR0FBYUssSUFBSVksV0FBakI7QUFDRDtBQUpnQixPQUFuQjtBQU1BLHFCQUFLQyxXQUFMLENBQWlCO0FBQ2ZkLGVBRGUsbUJBQ1BDLEdBRE8sRUFDRjtBQUNYUyxlQUFLckIsU0FBTCxHQUFpQlksSUFBSWMsUUFBSixDQUFhMUIsU0FBOUI7QUFDQXFCLGVBQUtwQixRQUFMLEdBQWdCVyxJQUFJYyxRQUFKLENBQWF6QixRQUE3QjtBQUNEO0FBSmMsT0FBakI7QUFNRDs7OztFQXhFZ0MsZUFBSzBCLEk7O2tCQUFuQi9CLEsiLCJmaWxlIjoibWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmiJHnmoQnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBhdmF0YXJVcmw6ICcnLFxuICAgIG5pY2tOYW1lOiAnJyxcbiAgICBjYXQ6ICcuLi9pbWFnZS9naXRodWItMy5wbmcnLFxuICAgIHN5bWJvbDogJy4uL2ltYWdlL+S4i+S4gOatpS5wbmcnLFxuICAgIGVtYWlsOiAnLi4vaW1hZ2Uv6YKu5Lu2LnBuZycsXG4gICAgc2lnbjogJy4uL2ltYWdlL+S4i+S4gOatpS5wbmcnLFxuICAgIGhlaWdodDogMCxcbiAgICB3aWR0aDogMFxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgZ2l0aHViKCkge1xuICAgICAgd2VweS5zZXRDbGlwYm9hcmREYXRhKHtcbiAgICAgICAgZGF0YTogJ2h0dHA6Ly9naXRodWIuY29tL3dhbmdodWFqaWFuNjIwJyxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgd2VweS5zaG93QWN0aW9uU2hlZXQoe1xuICAgICAgICAgICAgaXRlbUxpc3Q6IFsnaHR0cDovL2dpdGh1Yi5jb20vd2FuZ2h1YWppYW42MjAnXSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgICBpZiAocmVzLnRhcEluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICAgICAgICAgICAgY29udGVudDogJ+WkjeWItuaIkOWKnydcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIGVtYWlsKCkge1xuICAgICAgd2VweS5zZXRDbGlwYm9hcmREYXRhKHtcbiAgICAgICAgZGF0YTogJ3N1bnNoaW5lYm95XzEwMjZAMTYzLmNvbScsXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgIHdlcHkuc2hvd0FjdGlvblNoZWV0KHtcbiAgICAgICAgICAgIGl0ZW1MaXN0OiBbJ3N1bnNoaW5lYm95XzEwMjZAMTYzLmNvbSddLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAgIGlmIChyZXMudGFwSW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgICAgICAgICAgICAgICBjb250ZW50OiAn5aSN5Yi25oiQ5YqfJ1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgb25TaGFyZUFwcE1lc3NhZ2UoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZTogJ+WNmuWuoicsXG4gICAgICAgIHBhdGg6ICcvcGFnZXMvbWUnXG4gICAgICB9XG4gICAgfVxuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB3ZXB5LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgc2VsZi5oZWlnaHQgPSByZXMud2luZG93SGVpZ2h0XG4gICAgICAgIHNlbGYud2lkdGggPSByZXMud2luZG93V2lkdGhcbiAgICAgIH1cbiAgICB9KVxuICAgIHdlcHkuZ2V0VXNlckluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgc2VsZi5hdmF0YXJVcmwgPSByZXMudXNlckluZm8uYXZhdGFyVXJsXG4gICAgICAgIHNlbGYubmlja05hbWUgPSByZXMudXNlckluZm8ubmlja05hbWVcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=