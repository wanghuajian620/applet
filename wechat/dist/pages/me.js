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
        _wepy2.default.showModal({
          title: 'My Github',
          content: 'http://github.com/wanghuajian620',
          success: function success(res) {
            if (res.confirm) {
              console.log('true');
            } else if (res.cancel) {
              console.log('true');
            }
          }
        });
      },
      email: function email() {
        _wepy2.default.showModal({
          title: 'My Email',
          content: 'sunshineboy_1026@163.com',
          success: function success(res) {
            if (res.confirm) {
              console.log('true');
            } else if (res.cancel) {
              console.log('true');
            }
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJhdmF0YXJVcmwiLCJuaWNrTmFtZSIsImNhdCIsInN5bWJvbCIsImVtYWlsIiwic2lnbiIsIm1ldGhvZHMiLCJnaXRodWIiLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJzdWNjZXNzIiwicmVzIiwiY29uZmlybSIsImNvbnNvbGUiLCJsb2ciLCJjYW5jZWwiLCJvblNoYXJlQXBwTWVzc2FnZSIsInBhdGgiLCJzZWxmIiwiZ2V0VXNlckluZm8iLCJ1c2VySW5mbyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxpQkFBVyxFQUROO0FBRUxDLGdCQUFVLEVBRkw7QUFHTEMsV0FBSyx1QkFIQTtBQUlMQyxjQUFRLGtCQUpIO0FBS0xDLGFBQU8saUJBTEY7QUFNTEMsWUFBTTtBQU5ELEssUUFRUEMsTyxHQUFVO0FBQ1JDLFlBRFEsb0JBQ0M7QUFDUCx1QkFBS0MsU0FBTCxDQUFlO0FBQ2JDLGlCQUFPLFdBRE07QUFFYkMsbUJBQVMsa0NBRkk7QUFHYkMsbUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQixnQkFBSUEsSUFBSUMsT0FBUixFQUFpQjtBQUNmQyxzQkFBUUMsR0FBUixDQUFZLE1BQVo7QUFDRCxhQUZELE1BRU8sSUFBSUgsSUFBSUksTUFBUixFQUFnQjtBQUNyQkYsc0JBQVFDLEdBQVIsQ0FBWSxNQUFaO0FBQ0Q7QUFDRjtBQVRZLFNBQWY7QUFXRCxPQWJPO0FBY1JYLFdBZFEsbUJBY0E7QUFDTix1QkFBS0ksU0FBTCxDQUFlO0FBQ2JDLGlCQUFPLFVBRE07QUFFYkMsbUJBQVMsMEJBRkk7QUFHYkMsbUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQixnQkFBSUEsSUFBSUMsT0FBUixFQUFpQjtBQUNmQyxzQkFBUUMsR0FBUixDQUFZLE1BQVo7QUFDRCxhQUZELE1BRU8sSUFBSUgsSUFBSUksTUFBUixFQUFnQjtBQUNyQkYsc0JBQVFDLEdBQVIsQ0FBWSxNQUFaO0FBQ0Q7QUFDRjtBQVRZLFNBQWY7QUFXRCxPQTFCTztBQTJCUkUsdUJBM0JRLCtCQTJCWTtBQUNsQixlQUFPO0FBQ0xSLGlCQUFPLElBREY7QUFFTFMsZ0JBQU07QUFGRCxTQUFQO0FBSUQ7QUFoQ08sSzs7Ozs7NkJBa0NEO0FBQ1AsVUFBSUMsT0FBTyxJQUFYO0FBQ0EscUJBQUtDLFdBQUwsQ0FBaUI7QUFDZlQsZUFEZSxtQkFDUEMsR0FETyxFQUNGO0FBQ1hPLGVBQUtuQixTQUFMLEdBQWlCWSxJQUFJUyxRQUFKLENBQWFyQixTQUE5QjtBQUNBbUIsZUFBS2xCLFFBQUwsR0FBZ0JXLElBQUlTLFFBQUosQ0FBYXBCLFFBQTdCO0FBQ0Q7QUFKYyxPQUFqQjtBQU1EOzs7O0VBdERnQyxlQUFLcUIsSTs7a0JBQW5CMUIsSyIsImZpbGUiOiJtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahCdcbiAgfVxuICBkYXRhID0ge1xuICAgIGF2YXRhclVybDogJycsXG4gICAgbmlja05hbWU6ICcnLFxuICAgIGNhdDogJy4uL2ltYWdlL2dpdGh1Yi0zLnBuZycsXG4gICAgc3ltYm9sOiAnLi4vaW1hZ2Uv5LiL5LiA5q2lLnBuZycsXG4gICAgZW1haWw6ICcuLi9pbWFnZS/pgq7ku7YucG5nJyxcbiAgICBzaWduOiAnLi4vaW1hZ2Uv5LiL5LiA5q2lLnBuZydcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIGdpdGh1YigpIHtcbiAgICAgIHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgdGl0bGU6ICdNeSBHaXRodWInLFxuICAgICAgICBjb250ZW50OiAnaHR0cDovL2dpdGh1Yi5jb20vd2FuZ2h1YWppYW42MjAnLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0cnVlJylcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlcy5jYW5jZWwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0cnVlJylcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICBlbWFpbCgpIHtcbiAgICAgIHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgdGl0bGU6ICdNeSBFbWFpbCcsXG4gICAgICAgIGNvbnRlbnQ6ICdzdW5zaGluZWJveV8xMDI2QDE2My5jb20nLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0cnVlJylcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlcy5jYW5jZWwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0cnVlJylcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICBvblNoYXJlQXBwTWVzc2FnZSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlOiAn5Y2a5a6iJyxcbiAgICAgICAgcGF0aDogJy9wYWdlcy9tZSdcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHdlcHkuZ2V0VXNlckluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgc2VsZi5hdmF0YXJVcmwgPSByZXMudXNlckluZm8uYXZhdGFyVXJsXG4gICAgICAgIHNlbGYubmlja05hbWUgPSByZXMudXNlckluZm8ubmlja05hbWVcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=