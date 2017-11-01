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
      navigationBarTitleText: '我的博客'
    }, _this.data = {
      teenager: '../image/ddb69b9490b27b2d6518589cddfcb557.jpeg',
      youth: '../image/ddb69b9490b27b2d6518589cddfcb557.jpeg',
      adult: '../image/ddb69b9490b27b2d6518589cddfcb557.jpeg',
      height: 0,
      width: 0,
      essay: ''
    }, _this.methods = {
      tree: function tree(e) {
        var id = e.currentTarget.dataset.index;
        _wepy2.default.navigateTo({
          url: './first?index=' + id
        });
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
      _wepy2.default.request({
        url: 'http://127.0.0.1:7001/virgo',
        method: 'POST',
        success: function success(res) {
          self.essay = res.data;
          self.setData({
            essay: res.data
          });
          console.log(res.data);
        }
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/virgo'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpcmdvLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJ0ZWVuYWdlciIsInlvdXRoIiwiYWR1bHQiLCJoZWlnaHQiLCJ3aWR0aCIsImVzc2F5IiwibWV0aG9kcyIsInRyZWUiLCJlIiwiaWQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImluZGV4IiwibmF2aWdhdGVUbyIsInVybCIsInNlbGYiLCJnZXRTeXN0ZW1JbmZvIiwic3VjY2VzcyIsInJlcyIsIndpbmRvd0hlaWdodCIsIndpbmRvd1dpZHRoIiwicmVxdWVzdCIsIm1ldGhvZCIsInNldERhdGEiLCJjb25zb2xlIiwibG9nIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLGdCQUFVLGdEQURMO0FBRUxDLGFBQU8sZ0RBRkY7QUFHTEMsYUFBTyxnREFIRjtBQUlMQyxjQUFRLENBSkg7QUFLTEMsYUFBTyxDQUxGO0FBTUxDLGFBQU87QUFORixLLFFBUVBDLE8sR0FBVTtBQUNSQyxVQURRLGdCQUNIQyxDQURHLEVBQ0E7QUFDTixZQUFJQyxLQUFLRCxFQUFFRSxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkMsS0FBakM7QUFDQSx1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxrQ0FBc0JMO0FBRFIsU0FBaEI7QUFHRDtBQU5PLEs7Ozs7OzZCQVFEO0FBQ1AsVUFBSU0sT0FBTyxJQUFYO0FBQ0EscUJBQUtDLGFBQUwsQ0FBbUI7QUFDakJDLGVBRGlCLG1CQUNUQyxHQURTLEVBQ0o7QUFDWEgsZUFBS1osTUFBTCxHQUFjZSxJQUFJQyxZQUFsQjtBQUNBSixlQUFLWCxLQUFMLEdBQWFjLElBQUlFLFdBQWpCO0FBQ0Q7QUFKZ0IsT0FBbkI7QUFNQSxxQkFBS0MsT0FBTCxDQUFhO0FBQ1hQLGFBQUssNkJBRE07QUFFWFEsZ0JBQVEsTUFGRztBQUdYTCxpQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCSCxlQUFLVixLQUFMLEdBQWFhLElBQUluQixJQUFqQjtBQUNBZ0IsZUFBS1EsT0FBTCxDQUFhO0FBQ1hsQixtQkFBT2EsSUFBSW5CO0FBREEsV0FBYjtBQUdBeUIsa0JBQVFDLEdBQVIsQ0FBWVAsSUFBSW5CLElBQWhCO0FBQ0Q7QUFUVSxPQUFiO0FBV0Q7Ozs7RUF2Q2dDLGVBQUsyQixJOztrQkFBbkI5QixLIiwiZmlsZSI6InZpcmdvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahOWNmuWuoidcbiAgfVxuICBkYXRhID0ge1xuICAgIHRlZW5hZ2VyOiAnLi4vaW1hZ2UvZGRiNjliOTQ5MGIyN2IyZDY1MTg1ODljZGRmY2I1NTcuanBlZycsXG4gICAgeW91dGg6ICcuLi9pbWFnZS9kZGI2OWI5NDkwYjI3YjJkNjUxODU4OWNkZGZjYjU1Ny5qcGVnJyxcbiAgICBhZHVsdDogJy4uL2ltYWdlL2RkYjY5Yjk0OTBiMjdiMmQ2NTE4NTg5Y2RkZmNiNTU3LmpwZWcnLFxuICAgIGhlaWdodDogMCxcbiAgICB3aWR0aDogMCxcbiAgICBlc3NheTogJydcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIHRyZWUoZSkge1xuICAgICAgbGV0IGlkID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC4vZmlyc3Q/aW5kZXg9JHtpZH1gXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgd2VweS5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIHNlbGYuaGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodFxuICAgICAgICBzZWxmLndpZHRoID0gcmVzLndpbmRvd1dpZHRoXG4gICAgICB9XG4gICAgfSlcbiAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL3ZpcmdvJyxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIHNlbGYuZXNzYXkgPSByZXMuZGF0YVxuICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgIGVzc2F5OiByZXMuZGF0YVxuICAgICAgICB9KVxuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=