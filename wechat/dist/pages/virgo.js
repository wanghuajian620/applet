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
      height: 0,
      width: 0,
      essay: ''
    }, _this.methods = {
      tree: function tree(e) {
        var current = e.currentTarget.id;
        console.log(e, 'bbbbbb');
        _wepy2.default.navigateTo({
          url: './first?index=' + current
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
        }
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/virgo'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpcmdvLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJoZWlnaHQiLCJ3aWR0aCIsImVzc2F5IiwibWV0aG9kcyIsInRyZWUiLCJlIiwiY3VycmVudCIsImN1cnJlbnRUYXJnZXQiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJuYXZpZ2F0ZVRvIiwidXJsIiwic2VsZiIsImdldFN5c3RlbUluZm8iLCJzdWNjZXNzIiwicmVzIiwid2luZG93SGVpZ2h0Iiwid2luZG93V2lkdGgiLCJyZXF1ZXN0IiwibWV0aG9kIiwic2V0RGF0YSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxjQUFRLENBREg7QUFFTEMsYUFBTyxDQUZGO0FBR0xDLGFBQU87QUFIRixLLFFBS1BDLE8sR0FBVTtBQUNSQyxVQURRLGdCQUNIQyxDQURHLEVBQ0E7QUFDTixZQUFJQyxVQUFVRCxFQUFFRSxhQUFGLENBQWdCQyxFQUE5QjtBQUNBQyxnQkFBUUMsR0FBUixDQUFZTCxDQUFaLEVBQWUsUUFBZjtBQUNBLHVCQUFLTSxVQUFMLENBQWdCO0FBQ2RDLGtDQUFzQk47QUFEUixTQUFoQjtBQUdEO0FBUE8sSzs7Ozs7NkJBU0Q7QUFDUCxVQUFJTyxPQUFPLElBQVg7QUFDQSxxQkFBS0MsYUFBTCxDQUFtQjtBQUNqQkMsZUFEaUIsbUJBQ1RDLEdBRFMsRUFDSjtBQUNYSCxlQUFLYixNQUFMLEdBQWNnQixJQUFJQyxZQUFsQjtBQUNBSixlQUFLWixLQUFMLEdBQWFlLElBQUlFLFdBQWpCO0FBQ0Q7QUFKZ0IsT0FBbkI7QUFNQSxxQkFBS0MsT0FBTCxDQUFhO0FBQ1hQLGFBQUssNkJBRE07QUFFWFEsZ0JBQVEsTUFGRztBQUdYTCxpQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCSCxlQUFLWCxLQUFMLEdBQWFjLElBQUlqQixJQUFqQjtBQUNBYyxlQUFLUSxPQUFMLENBQWE7QUFDWG5CLG1CQUFPYyxJQUFJakI7QUFEQSxXQUFiO0FBR0Q7QUFSVSxPQUFiO0FBVUQ7Ozs7RUFwQ2dDLGVBQUt1QixJOztrQkFBbkIxQixLIiwiZmlsZSI6InZpcmdvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahOWNmuWuoidcbiAgfVxuICBkYXRhID0ge1xuICAgIGhlaWdodDogMCxcbiAgICB3aWR0aDogMCxcbiAgICBlc3NheTogJydcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIHRyZWUoZSkge1xuICAgICAgbGV0IGN1cnJlbnQgPSBlLmN1cnJlbnRUYXJnZXQuaWRcbiAgICAgIGNvbnNvbGUubG9nKGUsICdiYmJiYmInKVxuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiBgLi9maXJzdD9pbmRleD0ke2N1cnJlbnR9YFxuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHdlcHkuZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICBzZWxmLmhlaWdodCA9IHJlcy53aW5kb3dIZWlnaHRcbiAgICAgICAgc2VsZi53aWR0aCA9IHJlcy53aW5kb3dXaWR0aFxuICAgICAgfVxuICAgIH0pXG4gICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS92aXJnbycsXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBzZWxmLmVzc2F5ID0gcmVzLmRhdGFcbiAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICBlc3NheTogcmVzLmRhdGFcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=