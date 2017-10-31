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
      avatarUrl: '../image/WechatIMG12.jpeg',
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
                    content: '复制成功',
                    showCancel: false
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
                    content: '复制成功',
                    showCancel: false
                  });
                }
              }
            });
          }
        });
      },
      click: function click() {
        _wepy2.default.previewImage({
          current: '',
          urls: ['../image/WechatIMG12.jpeg']
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJhdmF0YXJVcmwiLCJuaWNrTmFtZSIsImNhdCIsInN5bWJvbCIsImVtYWlsIiwic2lnbiIsImhlaWdodCIsIndpZHRoIiwibWV0aG9kcyIsImdpdGh1YiIsInNldENsaXBib2FyZERhdGEiLCJzdWNjZXNzIiwicmVzIiwic2hvd0FjdGlvblNoZWV0IiwiaXRlbUxpc3QiLCJ0YXBJbmRleCIsInNob3dNb2RhbCIsInRpdGxlIiwiY29udGVudCIsInNob3dDYW5jZWwiLCJjbGljayIsInByZXZpZXdJbWFnZSIsImN1cnJlbnQiLCJ1cmxzIiwib25TaGFyZUFwcE1lc3NhZ2UiLCJwYXRoIiwic2VsZiIsImdldFN5c3RlbUluZm8iLCJ3aW5kb3dIZWlnaHQiLCJ3aW5kb3dXaWR0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxpQkFBVywyQkFETjtBQUVMQyxnQkFBVSxRQUZMO0FBR0xDLFdBQUssdUJBSEE7QUFJTEMsY0FBUSxrQkFKSDtBQUtMQyxhQUFPLGlCQUxGO0FBTUxDLFlBQU0sa0JBTkQ7QUFPTEMsY0FBUSxDQVBIO0FBUUxDLGFBQU87QUFSRixLLFFBVVBDLE8sR0FBVTtBQUNSQyxZQURRLG9CQUNDO0FBQ1AsdUJBQUtDLGdCQUFMLENBQXNCO0FBQ3BCWCxnQkFBTSxrQ0FEYztBQUVwQlksbUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQiwyQkFBS0MsZUFBTCxDQUFxQjtBQUNuQkMsd0JBQVUsQ0FBQyxrQ0FBRCxDQURTO0FBRW5CSCx1QkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCLG9CQUFJQSxJQUFJRyxRQUFKLEtBQWlCLENBQXJCLEVBQXdCO0FBQ3RCLGlDQUFLQyxTQUFMLENBQWU7QUFDYkMsMkJBQU8sSUFETTtBQUViQyw2QkFBUyxNQUZJO0FBR2JDLGdDQUFZO0FBSEMsbUJBQWY7QUFLRDtBQUNGO0FBVmtCLGFBQXJCO0FBWUQ7QUFmbUIsU0FBdEI7QUFpQkQsT0FuQk87QUFvQlJmLFdBcEJRLG1CQW9CQTtBQUNOLHVCQUFLTSxnQkFBTCxDQUFzQjtBQUNwQlgsZ0JBQU0sMEJBRGM7QUFFcEJZLG1CQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckIsMkJBQUtDLGVBQUwsQ0FBcUI7QUFDbkJDLHdCQUFVLENBQUMsMEJBQUQsQ0FEUztBQUVuQkgsdUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQixvQkFBSUEsSUFBSUcsUUFBSixLQUFpQixDQUFyQixFQUF3QjtBQUN0QixpQ0FBS0MsU0FBTCxDQUFlO0FBQ2JDLDJCQUFPLElBRE07QUFFYkMsNkJBQVMsTUFGSTtBQUdiQyxnQ0FBWTtBQUhDLG1CQUFmO0FBS0Q7QUFDRjtBQVZrQixhQUFyQjtBQVlEO0FBZm1CLFNBQXRCO0FBaUJELE9BdENPO0FBdUNSQyxXQXZDUSxtQkF1Q0E7QUFDTix1QkFBS0MsWUFBTCxDQUFrQjtBQUNoQkMsbUJBQVMsRUFETztBQUVoQkMsZ0JBQU0sQ0FBQywyQkFBRDtBQUZVLFNBQWxCO0FBSUQsT0E1Q087QUE2Q1JDLHVCQTdDUSwrQkE2Q1k7QUFDbEIsZUFBTztBQUNMUCxpQkFBTyxJQURGO0FBRUxRLGdCQUFNO0FBRkQsU0FBUDtBQUlEO0FBbERPLEs7Ozs7OzZCQW9ERDtBQUNQLFVBQUlDLE9BQU8sSUFBWDtBQUNBLHFCQUFLQyxhQUFMLENBQW1CO0FBQ2pCaEIsZUFEaUIsbUJBQ1RDLEdBRFMsRUFDSjtBQUNYYyxlQUFLcEIsTUFBTCxHQUFjTSxJQUFJZ0IsWUFBbEI7QUFDQUYsZUFBS25CLEtBQUwsR0FBYUssSUFBSWlCLFdBQWpCO0FBQ0Q7QUFKZ0IsT0FBbkI7QUFNRDs7OztFQTFFZ0MsZUFBS0MsSTs7a0JBQW5CbEMsSyIsImZpbGUiOiJtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahCdcbiAgfVxuICBkYXRhID0ge1xuICAgIGF2YXRhclVybDogJy4uL2ltYWdlL1dlY2hhdElNRzEyLmpwZWcnLFxuICAgIG5pY2tOYW1lOiAnQeKInijljY7lgaUpJyxcbiAgICBjYXQ6ICcuLi9pbWFnZS9naXRodWItMy5wbmcnLFxuICAgIHN5bWJvbDogJy4uL2ltYWdlL+S4i+S4gOatpS5wbmcnLFxuICAgIGVtYWlsOiAnLi4vaW1hZ2Uv6YKu5Lu2LnBuZycsXG4gICAgc2lnbjogJy4uL2ltYWdlL+S4i+S4gOatpS5wbmcnLFxuICAgIGhlaWdodDogMCxcbiAgICB3aWR0aDogMFxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgZ2l0aHViKCkge1xuICAgICAgd2VweS5zZXRDbGlwYm9hcmREYXRhKHtcbiAgICAgICAgZGF0YTogJ2h0dHA6Ly9naXRodWIuY29tL3dhbmdodWFqaWFuNjIwJyxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgd2VweS5zaG93QWN0aW9uU2hlZXQoe1xuICAgICAgICAgICAgaXRlbUxpc3Q6IFsnaHR0cDovL2dpdGh1Yi5jb20vd2FuZ2h1YWppYW42MjAnXSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgICBpZiAocmVzLnRhcEluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICAgICAgICAgICAgY29udGVudDogJ+WkjeWItuaIkOWKnycsXG4gICAgICAgICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgZW1haWwoKSB7XG4gICAgICB3ZXB5LnNldENsaXBib2FyZERhdGEoe1xuICAgICAgICBkYXRhOiAnc3Vuc2hpbmVib3lfMTAyNkAxNjMuY29tJyxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgd2VweS5zaG93QWN0aW9uU2hlZXQoe1xuICAgICAgICAgICAgaXRlbUxpc3Q6IFsnc3Vuc2hpbmVib3lfMTAyNkAxNjMuY29tJ10sXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgaWYgKHJlcy50YXBJbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICflpI3liLbmiJDlip8nLFxuICAgICAgICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2VcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIGNsaWNrKCkge1xuICAgICAgd2VweS5wcmV2aWV3SW1hZ2Uoe1xuICAgICAgICBjdXJyZW50OiAnJyxcbiAgICAgICAgdXJsczogWycuLi9pbWFnZS9XZWNoYXRJTUcxMi5qcGVnJ11cbiAgICAgIH0pXG4gICAgfSxcbiAgICBvblNoYXJlQXBwTWVzc2FnZSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlOiAn5Y2a5a6iJyxcbiAgICAgICAgcGF0aDogJy9wYWdlcy9tZSdcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHdlcHkuZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICBzZWxmLmhlaWdodCA9IHJlcy53aW5kb3dIZWlnaHRcbiAgICAgICAgc2VsZi53aWR0aCA9IHJlcy53aW5kb3dXaWR0aFxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==