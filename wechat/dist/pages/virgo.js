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
        console.log(e, 'bbbbbb');
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
        }
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/virgo'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpcmdvLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJ0ZWVuYWdlciIsInlvdXRoIiwiYWR1bHQiLCJoZWlnaHQiLCJ3aWR0aCIsImVzc2F5IiwibWV0aG9kcyIsInRyZWUiLCJlIiwiaWQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImluZGV4IiwiY29uc29sZSIsImxvZyIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJzZWxmIiwiZ2V0U3lzdGVtSW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJ3aW5kb3dIZWlnaHQiLCJ3aW5kb3dXaWR0aCIsInJlcXVlc3QiLCJtZXRob2QiLCJzZXREYXRhIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLGdCQUFVLGdEQURMO0FBRUxDLGFBQU8sZ0RBRkY7QUFHTEMsYUFBTyxnREFIRjtBQUlMQyxjQUFRLENBSkg7QUFLTEMsYUFBTyxDQUxGO0FBTUxDLGFBQU87QUFORixLLFFBUVBDLE8sR0FBVTtBQUNSQyxVQURRLGdCQUNIQyxDQURHLEVBQ0E7QUFDTixZQUFJQyxLQUFLRCxFQUFFRSxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkMsS0FBakM7QUFDQUMsZ0JBQVFDLEdBQVIsQ0FBWU4sQ0FBWixFQUFlLFFBQWY7QUFDQSx1QkFBS08sVUFBTCxDQUFnQjtBQUNkQyxrQ0FBc0JQO0FBRFIsU0FBaEI7QUFHRDtBQVBPLEs7Ozs7OzZCQVNEO0FBQ1AsVUFBSVEsT0FBTyxJQUFYO0FBQ0EscUJBQUtDLGFBQUwsQ0FBbUI7QUFDakJDLGVBRGlCLG1CQUNUQyxHQURTLEVBQ0o7QUFDWEgsZUFBS2QsTUFBTCxHQUFjaUIsSUFBSUMsWUFBbEI7QUFDQUosZUFBS2IsS0FBTCxHQUFhZ0IsSUFBSUUsV0FBakI7QUFDRDtBQUpnQixPQUFuQjtBQU1BLHFCQUFLQyxPQUFMLENBQWE7QUFDWFAsYUFBSyw2QkFETTtBQUVYUSxnQkFBUSxNQUZHO0FBR1hMLGlCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJILGVBQUtaLEtBQUwsR0FBYWUsSUFBSXJCLElBQWpCO0FBQ0FrQixlQUFLUSxPQUFMLENBQWE7QUFDWHBCLG1CQUFPZSxJQUFJckI7QUFEQSxXQUFiO0FBR0Q7QUFSVSxPQUFiO0FBVUQ7Ozs7RUF2Q2dDLGVBQUsyQixJOztrQkFBbkI5QixLIiwiZmlsZSI6InZpcmdvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahOWNmuWuoidcbiAgfVxuICBkYXRhID0ge1xuICAgIHRlZW5hZ2VyOiAnLi4vaW1hZ2UvZGRiNjliOTQ5MGIyN2IyZDY1MTg1ODljZGRmY2I1NTcuanBlZycsXG4gICAgeW91dGg6ICcuLi9pbWFnZS9kZGI2OWI5NDkwYjI3YjJkNjUxODU4OWNkZGZjYjU1Ny5qcGVnJyxcbiAgICBhZHVsdDogJy4uL2ltYWdlL2RkYjY5Yjk0OTBiMjdiMmQ2NTE4NTg5Y2RkZmNiNTU3LmpwZWcnLFxuICAgIGhlaWdodDogMCxcbiAgICB3aWR0aDogMCxcbiAgICBlc3NheTogJydcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIHRyZWUoZSkge1xuICAgICAgbGV0IGlkID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhcbiAgICAgIGNvbnNvbGUubG9nKGUsICdiYmJiYmInKVxuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiBgLi9maXJzdD9pbmRleD0ke2lkfWBcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB3ZXB5LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgc2VsZi5oZWlnaHQgPSByZXMud2luZG93SGVpZ2h0XG4gICAgICAgIHNlbGYud2lkdGggPSByZXMud2luZG93V2lkdGhcbiAgICAgIH1cbiAgICB9KVxuICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvdmlyZ28nLFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgc2VsZi5lc3NheSA9IHJlcy5kYXRhXG4gICAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgICAgZXNzYXk6IHJlcy5kYXRhXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIl19