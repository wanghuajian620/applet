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
      navigationBarTitleText: '购物车'
    }, _this.data = {
      value: []
    }, _this.methods = {
      minus: function minus(e) {
        var self = this;
        var index = e.currentTarget.dataset.index;
        var num = self.value[index].num;
        self.num--;
        self.value[index].num = num;
        // this.setData({
        //   carts: value
        // })
      },
      plus: function plus(e) {
        var self = this;
        var index = e.currentTarget.dataset.index;
        console.log(e);
        var num = self.value[index].num;
        console.log(num);
        num++;
        self.value[index].num = num;
        // this.setData({
        //   carts: value
        // })
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      self.value = _wepy2.default.getStorageSync('shopping');
      console.log(self.value);
      // self.setData({
      //   value: wepy.getStorageSync('shopping')
      // })
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/shopping'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJ2YWx1ZSIsIm1ldGhvZHMiLCJtaW51cyIsImUiLCJzZWxmIiwiaW5kZXgiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsIm51bSIsInBsdXMiLCJjb25zb2xlIiwibG9nIiwiZ2V0U3RvcmFnZVN5bmMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsYUFBTztBQURGLEssUUFHUEMsTyxHQUFVO0FBQ1JDLFdBRFEsaUJBQ0ZDLENBREUsRUFDQztBQUNQLFlBQUlDLE9BQU8sSUFBWDtBQUNBLFlBQU1DLFFBQVFGLEVBQUVHLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCRixLQUF0QztBQUNBLFlBQUlHLE1BQU1KLEtBQUtKLEtBQUwsQ0FBV0ssS0FBWCxFQUFrQkcsR0FBNUI7QUFDQUosYUFBS0ksR0FBTDtBQUNBSixhQUFLSixLQUFMLENBQVdLLEtBQVgsRUFBa0JHLEdBQWxCLEdBQXdCQSxHQUF4QjtBQUNBO0FBQ0E7QUFDQTtBQUNELE9BVk87QUFXUkMsVUFYUSxnQkFXSE4sQ0FYRyxFQVdBO0FBQ04sWUFBSUMsT0FBTyxJQUFYO0FBQ0EsWUFBTUMsUUFBUUYsRUFBRUcsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JGLEtBQXRDO0FBQ0FLLGdCQUFRQyxHQUFSLENBQVlSLENBQVo7QUFDQSxZQUFJSyxNQUFNSixLQUFLSixLQUFMLENBQVdLLEtBQVgsRUFBa0JHLEdBQTVCO0FBQ0FFLGdCQUFRQyxHQUFSLENBQVlILEdBQVo7QUFDQUE7QUFDQUosYUFBS0osS0FBTCxDQUFXSyxLQUFYLEVBQWtCRyxHQUFsQixHQUF3QkEsR0FBeEI7QUFDQTtBQUNBO0FBQ0E7QUFDRDtBQXRCTyxLOzs7Ozs2QkF3QkQ7QUFDUCxVQUFJSixPQUFPLElBQVg7QUFDQUEsV0FBS0osS0FBTCxHQUFhLGVBQUtZLGNBQUwsQ0FBb0IsVUFBcEIsQ0FBYjtBQUNBRixjQUFRQyxHQUFSLENBQVlQLEtBQUtKLEtBQWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7Ozs7RUF0Q2dDLGVBQUthLEk7O2tCQUFuQmpCLEsiLCJmaWxlIjoic2hvcHBpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfotK3nianovaYnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICB2YWx1ZTogW11cbiAgfVxuICBtZXRob2RzID0ge1xuICAgIG1pbnVzKGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgY29uc3QgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleFxuICAgICAgbGV0IG51bSA9IHNlbGYudmFsdWVbaW5kZXhdLm51bVxuICAgICAgc2VsZi5udW0tLVxuICAgICAgc2VsZi52YWx1ZVtpbmRleF0ubnVtID0gbnVtXG4gICAgICAvLyB0aGlzLnNldERhdGEoe1xuICAgICAgLy8gICBjYXJ0czogdmFsdWVcbiAgICAgIC8vIH0pXG4gICAgfSxcbiAgICBwbHVzKGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgY29uc3QgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleFxuICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgIGxldCBudW0gPSBzZWxmLnZhbHVlW2luZGV4XS5udW1cbiAgICAgIGNvbnNvbGUubG9nKG51bSlcbiAgICAgIG51bSsrXG4gICAgICBzZWxmLnZhbHVlW2luZGV4XS5udW0gPSBudW1cbiAgICAgIC8vIHRoaXMuc2V0RGF0YSh7XG4gICAgICAvLyAgIGNhcnRzOiB2YWx1ZVxuICAgICAgLy8gfSlcbiAgICB9XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHNlbGYudmFsdWUgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdzaG9wcGluZycpXG4gICAgY29uc29sZS5sb2coc2VsZi52YWx1ZSlcbiAgICAvLyBzZWxmLnNldERhdGEoe1xuICAgIC8vICAgdmFsdWU6IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ3Nob3BwaW5nJylcbiAgICAvLyB9KVxuICB9XG59XG4iXX0=