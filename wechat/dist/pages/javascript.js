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
      navigationBarTitleText: 'JavaScipt'
    }, _this.data = {
      content: '',
      container: ''
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(data) {
      var self = this;
      self.content = data.MD;
      console.log(data.MD);
      _wepy2.default.request({
        url: 'http://127.0.0.1:7001/classify/get',
        method: 'POST',
        success: function success(res) {
          self.container = res.data[self.content].content;
          self.setData({
            container: res.data[self.content].content
          });
          console.log(res.data, 'tttttttt');
        }
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/javascript'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImNvbnRlbnQiLCJjb250YWluZXIiLCJzZWxmIiwiTUQiLCJjb25zb2xlIiwibG9nIiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsInN1Y2Nlc3MiLCJyZXMiLCJzZXREYXRhIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLGVBQVMsRUFESjtBQUVMQyxpQkFBVztBQUZOLEs7Ozs7OzJCQUlBRixJLEVBQU07QUFDWCxVQUFJRyxPQUFPLElBQVg7QUFDQUEsV0FBS0YsT0FBTCxHQUFlRCxLQUFLSSxFQUFwQjtBQUNBQyxjQUFRQyxHQUFSLENBQVlOLEtBQUtJLEVBQWpCO0FBQ0EscUJBQUtHLE9BQUwsQ0FBYTtBQUNYQyxhQUFLLG9DQURNO0FBRVhDLGdCQUFRLE1BRkc7QUFHWEMsaUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQlIsZUFBS0QsU0FBTCxHQUFpQlMsSUFBSVgsSUFBSixDQUFTRyxLQUFLRixPQUFkLEVBQXVCQSxPQUF4QztBQUNBRSxlQUFLUyxPQUFMLENBQWE7QUFDWFYsdUJBQVdTLElBQUlYLElBQUosQ0FBU0csS0FBS0YsT0FBZCxFQUF1QkE7QUFEdkIsV0FBYjtBQUdBSSxrQkFBUUMsR0FBUixDQUFZSyxJQUFJWCxJQUFoQixFQUFzQixVQUF0QjtBQUNEO0FBVFUsT0FBYjtBQVdEOzs7O0VBdkJnQyxlQUFLYSxJOztrQkFBbkJoQixLIiwiZmlsZSI6ImphdmFzY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdKYXZhU2NpcHQnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBjb250ZW50OiAnJyxcbiAgICBjb250YWluZXI6ICcnXG4gIH1cbiAgb25Mb2FkKGRhdGEpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBzZWxmLmNvbnRlbnQgPSBkYXRhLk1EXG4gICAgY29uc29sZS5sb2coZGF0YS5NRClcbiAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL2NsYXNzaWZ5L2dldCcsXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBzZWxmLmNvbnRhaW5lciA9IHJlcy5kYXRhW3NlbGYuY29udGVudF0uY29udGVudFxuICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgIGNvbnRhaW5lcjogcmVzLmRhdGFbc2VsZi5jb250ZW50XS5jb250ZW50XG4gICAgICAgIH0pXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhLCAndHR0dHR0dHQnKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==