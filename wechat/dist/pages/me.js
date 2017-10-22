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
      sign: '../image/下一步.png'
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJhdmF0YXJVcmwiLCJuaWNrTmFtZSIsImNhdCIsInN5bWJvbCIsImVtYWlsIiwic2lnbiIsIm1ldGhvZHMiLCJnaXRodWIiLCJzZXRDbGlwYm9hcmREYXRhIiwic3VjY2VzcyIsInJlcyIsInNob3dBY3Rpb25TaGVldCIsIml0ZW1MaXN0IiwidGFwSW5kZXgiLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJvblNoYXJlQXBwTWVzc2FnZSIsInBhdGgiLCJzZWxmIiwiZ2V0VXNlckluZm8iLCJ1c2VySW5mbyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxpQkFBVyxFQUROO0FBRUxDLGdCQUFVLEVBRkw7QUFHTEMsV0FBSyx1QkFIQTtBQUlMQyxjQUFRLGtCQUpIO0FBS0xDLGFBQU8saUJBTEY7QUFNTEMsWUFBTTtBQU5ELEssUUFRUEMsTyxHQUFVO0FBQ1JDLFlBRFEsb0JBQ0M7QUFDUCx1QkFBS0MsZ0JBQUwsQ0FBc0I7QUFDcEJULGdCQUFNLGtDQURjO0FBRXBCVSxtQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCLDJCQUFLQyxlQUFMLENBQXFCO0FBQ25CQyx3QkFBVSxDQUFDLGtDQUFELENBRFM7QUFFbkJILHVCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckIsb0JBQUlBLElBQUlHLFFBQUosS0FBaUIsQ0FBckIsRUFBd0I7QUFDdEIsaUNBQUtDLFNBQUwsQ0FBZTtBQUNiQywyQkFBTyxJQURNO0FBRWJDLDZCQUFTO0FBRkksbUJBQWY7QUFJRDtBQUNGO0FBVGtCLGFBQXJCO0FBV0Q7QUFkbUIsU0FBdEI7QUFnQkQsT0FsQk87QUFtQlJaLFdBbkJRLG1CQW1CQTtBQUNOLHVCQUFLSSxnQkFBTCxDQUFzQjtBQUNwQlQsZ0JBQU0sMEJBRGM7QUFFcEJVLG1CQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckIsMkJBQUtDLGVBQUwsQ0FBcUI7QUFDbkJDLHdCQUFVLENBQUMsMEJBQUQsQ0FEUztBQUVuQkgsdUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQixvQkFBSUEsSUFBSUcsUUFBSixLQUFpQixDQUFyQixFQUF3QjtBQUN0QixpQ0FBS0MsU0FBTCxDQUFlO0FBQ2JDLDJCQUFPLElBRE07QUFFYkMsNkJBQVM7QUFGSSxtQkFBZjtBQUlEO0FBQ0Y7QUFUa0IsYUFBckI7QUFXRDtBQWRtQixTQUF0QjtBQWdCRCxPQXBDTztBQXFDUkMsdUJBckNRLCtCQXFDWTtBQUNsQixlQUFPO0FBQ0xGLGlCQUFPLElBREY7QUFFTEcsZ0JBQU07QUFGRCxTQUFQO0FBSUQ7QUExQ08sSzs7Ozs7NkJBNENEO0FBQ1AsVUFBSUMsT0FBTyxJQUFYO0FBQ0EscUJBQUtDLFdBQUwsQ0FBaUI7QUFDZlgsZUFEZSxtQkFDUEMsR0FETyxFQUNGO0FBQ1hTLGVBQUtuQixTQUFMLEdBQWlCVSxJQUFJVyxRQUFKLENBQWFyQixTQUE5QjtBQUNBbUIsZUFBS2xCLFFBQUwsR0FBZ0JTLElBQUlXLFFBQUosQ0FBYXBCLFFBQTdCO0FBQ0Q7QUFKYyxPQUFqQjtBQU1EOzs7O0VBaEVnQyxlQUFLcUIsSTs7a0JBQW5CMUIsSyIsImZpbGUiOiJtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahCdcbiAgfVxuICBkYXRhID0ge1xuICAgIGF2YXRhclVybDogJycsXG4gICAgbmlja05hbWU6ICcnLFxuICAgIGNhdDogJy4uL2ltYWdlL2dpdGh1Yi0zLnBuZycsXG4gICAgc3ltYm9sOiAnLi4vaW1hZ2Uv5LiL5LiA5q2lLnBuZycsXG4gICAgZW1haWw6ICcuLi9pbWFnZS/pgq7ku7YucG5nJyxcbiAgICBzaWduOiAnLi4vaW1hZ2Uv5LiL5LiA5q2lLnBuZydcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIGdpdGh1YigpIHtcbiAgICAgIHdlcHkuc2V0Q2xpcGJvYXJkRGF0YSh7XG4gICAgICAgIGRhdGE6ICdodHRwOi8vZ2l0aHViLmNvbS93YW5naHVhamlhbjYyMCcsXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgIHdlcHkuc2hvd0FjdGlvblNoZWV0KHtcbiAgICAgICAgICAgIGl0ZW1MaXN0OiBbJ2h0dHA6Ly9naXRodWIuY29tL3dhbmdodWFqaWFuNjIwJ10sXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgaWYgKHJlcy50YXBJbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICflpI3liLbmiJDlip8nXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICBlbWFpbCgpIHtcbiAgICAgIHdlcHkuc2V0Q2xpcGJvYXJkRGF0YSh7XG4gICAgICAgIGRhdGE6ICdzdW5zaGluZWJveV8xMDI2QDE2My5jb20nLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICB3ZXB5LnNob3dBY3Rpb25TaGVldCh7XG4gICAgICAgICAgICBpdGVtTGlzdDogWydzdW5zaGluZWJveV8xMDI2QDE2My5jb20nXSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgICBpZiAocmVzLnRhcEluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICAgICAgICAgICAgY29udGVudDogJ+WkjeWItuaIkOWKnydcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIG9uU2hhcmVBcHBNZXNzYWdlKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGU6ICfljZrlrqInLFxuICAgICAgICBwYXRoOiAnL3BhZ2VzL21lJ1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgd2VweS5nZXRVc2VySW5mbyh7XG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICBzZWxmLmF2YXRhclVybCA9IHJlcy51c2VySW5mby5hdmF0YXJVcmxcbiAgICAgICAgc2VsZi5uaWNrTmFtZSA9IHJlcy51c2VySW5mby5uaWNrTmFtZVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==