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
        // console.log(e)
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpcmdvLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJ0ZWVuYWdlciIsInlvdXRoIiwiYWR1bHQiLCJoZWlnaHQiLCJ3aWR0aCIsImVzc2F5IiwibWV0aG9kcyIsInRyZWUiLCJlIiwiaWQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImluZGV4IiwibmF2aWdhdGVUbyIsInVybCIsInNlbGYiLCJnZXRTeXN0ZW1JbmZvIiwic3VjY2VzcyIsInJlcyIsIndpbmRvd0hlaWdodCIsIndpbmRvd1dpZHRoIiwicmVxdWVzdCIsIm1ldGhvZCIsInNldERhdGEiLCJjb25zb2xlIiwibG9nIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLGdCQUFVLGdEQURMO0FBRUxDLGFBQU8sZ0RBRkY7QUFHTEMsYUFBTyxnREFIRjtBQUlMQyxjQUFRLENBSkg7QUFLTEMsYUFBTyxDQUxGO0FBTUxDLGFBQU87QUFORixLLFFBUVBDLE8sR0FBVTtBQUNSQyxVQURRLGdCQUNIQyxDQURHLEVBQ0E7QUFDTixZQUFJQyxLQUFLRCxFQUFFRSxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkMsS0FBakM7QUFDQTtBQUNBLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLGtDQUFzQkw7QUFEUixTQUFoQjtBQUdEO0FBUE8sSzs7Ozs7NkJBU0Q7QUFDUCxVQUFJTSxPQUFPLElBQVg7QUFDQSxxQkFBS0MsYUFBTCxDQUFtQjtBQUNqQkMsZUFEaUIsbUJBQ1RDLEdBRFMsRUFDSjtBQUNYSCxlQUFLWixNQUFMLEdBQWNlLElBQUlDLFlBQWxCO0FBQ0FKLGVBQUtYLEtBQUwsR0FBYWMsSUFBSUUsV0FBakI7QUFDRDtBQUpnQixPQUFuQjtBQU1BLHFCQUFLQyxPQUFMLENBQWE7QUFDWFAsYUFBSyw2QkFETTtBQUVYUSxnQkFBUSxNQUZHO0FBR1hMLGlCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJILGVBQUtWLEtBQUwsR0FBYWEsSUFBSW5CLElBQWpCO0FBQ0FnQixlQUFLUSxPQUFMLENBQWE7QUFDWGxCLG1CQUFPYSxJQUFJbkI7QUFEQSxXQUFiO0FBR0F5QixrQkFBUUMsR0FBUixDQUFZUCxJQUFJbkIsSUFBaEI7QUFDRDtBQVRVLE9BQWI7QUFXRDs7OztFQXhDZ0MsZUFBSzJCLEk7O2tCQUFuQjlCLEsiLCJmaWxlIjoidmlyZ28uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5oiR55qE5Y2a5a6iJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgdGVlbmFnZXI6ICcuLi9pbWFnZS9kZGI2OWI5NDkwYjI3YjJkNjUxODU4OWNkZGZjYjU1Ny5qcGVnJyxcbiAgICB5b3V0aDogJy4uL2ltYWdlL2RkYjY5Yjk0OTBiMjdiMmQ2NTE4NTg5Y2RkZmNiNTU3LmpwZWcnLFxuICAgIGFkdWx0OiAnLi4vaW1hZ2UvZGRiNjliOTQ5MGIyN2IyZDY1MTg1ODljZGRmY2I1NTcuanBlZycsXG4gICAgaGVpZ2h0OiAwLFxuICAgIHdpZHRoOiAwLFxuICAgIGVzc2F5OiAnJ1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgdHJlZShlKSB7XG4gICAgICBsZXQgaWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleFxuICAgICAgLy8gY29uc29sZS5sb2coZSlcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC4vZmlyc3Q/aW5kZXg9JHtpZH1gXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgd2VweS5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIHNlbGYuaGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodFxuICAgICAgICBzZWxmLndpZHRoID0gcmVzLndpbmRvd1dpZHRoXG4gICAgICB9XG4gICAgfSlcbiAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL3ZpcmdvJyxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIHNlbGYuZXNzYXkgPSByZXMuZGF0YVxuICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgIGVzc2F5OiByZXMuZGF0YVxuICAgICAgICB9KVxuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=