'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


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
      navigationBarTitleText: '针织衫'
    }, _this.data = {
      imgUrls: ['https://gd1.alicdn.com/imgextra/i4/TB1flZ9PFXXXXb8XVXXYXGcGpXX_M2.SS2', 'https://gd1.alicdn.com/imgextra/i1/TB1n_g4PFXXXXaSaXXXYXGcGpXX_M2.SS2', 'https://gd1.alicdn.com/imgextra/i4/TB1Vk.1PFXXXXbOaXXXYXGcGpXX_M2.SS2', 'https://gd1.alicdn.com/imgextra/i3/TB19IxGPVXXXXa3XXXXYXGcGpXX_M2.SS2', 'https://gd4.alicdn.com/imgextra/i4/1016299118/TB2eipMh00opuFjSZFxXXaDNVXa_!!1016299118.jpg'],
      indicatorDots: true,
      autoplay: true,
      interval: 2000,
      duration: 1000,
      vertical: true,
      coin: '../image/钱-2.png',
      check: '../image/对勾-2.png',
      pass: '../image/大于号-2.png'
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/IMG26'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklNRzI2LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJpbWdVcmxzIiwiaW5kaWNhdG9yRG90cyIsImF1dG9wbGF5IiwiaW50ZXJ2YWwiLCJkdXJhdGlvbiIsInZlcnRpY2FsIiwiY29pbiIsImNoZWNrIiwicGFzcyIsIm1ldGhvZHMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLGVBQVMsQ0FDUCx1RUFETyxFQUVQLHVFQUZPLEVBR1AsdUVBSE8sRUFJUCx1RUFKTyxFQUtQLDRGQUxPLENBREo7QUFRTEMscUJBQWUsSUFSVjtBQVNMQyxnQkFBVSxJQVRMO0FBVUxDLGdCQUFVLElBVkw7QUFXTEMsZ0JBQVUsSUFYTDtBQVlMQyxnQkFBVSxJQVpMO0FBYUxDLFlBQU0sa0JBYkQ7QUFjTEMsYUFBTyxtQkFkRjtBQWVMQyxZQUFNO0FBZkQsSyxRQWlCUEMsTyxHQUFVLEU7Ozs7RUFyQnVCLGVBQUtDLEk7O2tCQUFuQmQsSyIsImZpbGUiOiJJTUcyNi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+mSiOe7h+ihqydcbiAgfVxuICBkYXRhID0ge1xuICAgIGltZ1VybHM6IFtcbiAgICAgICdodHRwczovL2dkMS5hbGljZG4uY29tL2ltZ2V4dHJhL2k0L1RCMWZsWjlQRlhYWFhiOFhWWFhZWEdjR3BYWF9NMi5TUzInLFxuICAgICAgJ2h0dHBzOi8vZ2QxLmFsaWNkbi5jb20vaW1nZXh0cmEvaTEvVEIxbl9nNFBGWFhYWGFTYVhYWFlYR2NHcFhYX00yLlNTMicsXG4gICAgICAnaHR0cHM6Ly9nZDEuYWxpY2RuLmNvbS9pbWdleHRyYS9pNC9UQjFWay4xUEZYWFhYYk9hWFhYWVhHY0dwWFhfTTIuU1MyJyxcbiAgICAgICdodHRwczovL2dkMS5hbGljZG4uY29tL2ltZ2V4dHJhL2kzL1RCMTlJeEdQVlhYWFhhM1hYWFhZWEdjR3BYWF9NMi5TUzInLFxuICAgICAgJ2h0dHBzOi8vZ2Q0LmFsaWNkbi5jb20vaW1nZXh0cmEvaTQvMTAxNjI5OTExOC9UQjJlaXBNaDAwb3B1RmpTWkZ4WFhhRE5WWGFfISExMDE2Mjk5MTE4LmpwZydcbiAgICBdLFxuICAgIGluZGljYXRvckRvdHM6IHRydWUsXG4gICAgYXV0b3BsYXk6IHRydWUsXG4gICAgaW50ZXJ2YWw6IDIwMDAsXG4gICAgZHVyYXRpb246IDEwMDAsXG4gICAgdmVydGljYWw6IHRydWUsXG4gICAgY29pbjogJy4uL2ltYWdlL+mSsS0yLnBuZycsXG4gICAgY2hlY2s6ICcuLi9pbWFnZS/lr7nli74tMi5wbmcnLFxuICAgIHBhc3M6ICcuLi9pbWFnZS/lpKfkuo7lj7ctMi5wbmcnXG4gIH1cbiAgbWV0aG9kcyA9IHt9XG59XG4iXX0=