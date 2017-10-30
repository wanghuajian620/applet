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
      navigationBarTitleText: '针织衫'
    }, _this.data = {
      imgUrls: [''],
      indicatorDots: true,
      autoplay: true,
      interval: 2000,
      duration: 1000,
      vertical: true,
      coin: '../image/钱-2.png',
      check: '../image/对勾-3.png',
      pass: '../image/大于号-2.png',
      width: '',
      height: '',
      item: '',
      // icon: '',
      title: '',
      pic: []
    }, _this.methods = {
      join: function join() {
        var self = this;

        _wepy2.default.showModal({
          title: '提示',
          content: '加入成功',
          showCancel: false,
          success: function success(res) {
            try {
              var value = _wepy2.default.getStorageSync('shopping');
              if (value) {
                value.push({
                  title: self.title,
                  pic: self.pic
                });

                _wepy2.default.setStorageSync('shopping', value);
              } else {
                var _value = [];

                _value.push({
                  title: self.title,
                  pic: self.pic
                });

                _wepy2.default.setStorageSync('shopping', _value);
              }
            } catch (e) {}
          }
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(data) {
      var self = this;
      self.title = data.title;
      self.pic = data.pic.split(','); // split(,)作用是把逗号隔开的字符串转换成数组
      console.log(data.pic);
      _wepy2.default.getSystemInfo({
        success: function success(res) {
          var self = this;
          self.width = res.windowWidth;
          self.height = res.windowHeight;
        }
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/IMG26'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklNRzI2LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJpbWdVcmxzIiwiaW5kaWNhdG9yRG90cyIsImF1dG9wbGF5IiwiaW50ZXJ2YWwiLCJkdXJhdGlvbiIsInZlcnRpY2FsIiwiY29pbiIsImNoZWNrIiwicGFzcyIsIndpZHRoIiwiaGVpZ2h0IiwiaXRlbSIsInRpdGxlIiwicGljIiwibWV0aG9kcyIsImpvaW4iLCJzZWxmIiwic2hvd01vZGFsIiwiY29udGVudCIsInNob3dDYW5jZWwiLCJzdWNjZXNzIiwicmVzIiwidmFsdWUiLCJnZXRTdG9yYWdlU3luYyIsInB1c2giLCJzZXRTdG9yYWdlU3luYyIsImUiLCJzcGxpdCIsImNvbnNvbGUiLCJsb2ciLCJnZXRTeXN0ZW1JbmZvIiwid2luZG93V2lkdGgiLCJ3aW5kb3dIZWlnaHQiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsZUFBUyxDQUFDLEVBQUQsQ0FESjtBQUdMQyxxQkFBZSxJQUhWO0FBSUxDLGdCQUFVLElBSkw7QUFLTEMsZ0JBQVUsSUFMTDtBQU1MQyxnQkFBVSxJQU5MO0FBT0xDLGdCQUFVLElBUEw7QUFRTEMsWUFBTSxrQkFSRDtBQVNMQyxhQUFPLG1CQVRGO0FBVUxDLFlBQU0sb0JBVkQ7QUFXTEMsYUFBTyxFQVhGO0FBWUxDLGNBQVEsRUFaSDtBQWFMQyxZQUFNLEVBYkQ7QUFjTDtBQUNBQyxhQUFPLEVBZkY7QUFnQkxDLFdBQUs7QUFoQkEsSyxRQWtCUEMsTyxHQUFVO0FBQ1JDLFVBRFEsa0JBQ0Q7QUFDTCxZQUFJQyxPQUFPLElBQVg7O0FBRUEsdUJBQUtDLFNBQUwsQ0FBZTtBQUNiTCxpQkFBTyxJQURNO0FBRWJNLG1CQUFTLE1BRkk7QUFHYkMsc0JBQVksS0FIQztBQUliQyxtQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCLGdCQUFJO0FBQ0Ysa0JBQUlDLFFBQVEsZUFBS0MsY0FBTCxDQUFvQixVQUFwQixDQUFaO0FBQ0Esa0JBQUlELEtBQUosRUFBVztBQUNUQSxzQkFBTUUsSUFBTixDQUFXO0FBQ1RaLHlCQUFPSSxLQUFLSixLQURIO0FBRVRDLHVCQUFLRyxLQUFLSDtBQUZELGlCQUFYOztBQUtBLCtCQUFLWSxjQUFMLENBQW9CLFVBQXBCLEVBQWdDSCxLQUFoQztBQUNELGVBUEQsTUFPTztBQUNMLG9CQUFJQSxTQUFRLEVBQVo7O0FBRUFBLHVCQUFNRSxJQUFOLENBQVc7QUFDVFoseUJBQU9JLEtBQUtKLEtBREg7QUFFVEMsdUJBQUtHLEtBQUtIO0FBRkQsaUJBQVg7O0FBS0EsK0JBQUtZLGNBQUwsQ0FBb0IsVUFBcEIsRUFBZ0NILE1BQWhDO0FBQ0Q7QUFDRixhQW5CRCxDQW1CRSxPQUFPSSxDQUFQLEVBQVUsQ0FDWDtBQUNGO0FBMUJZLFNBQWY7QUE0QkQ7QUFoQ08sSzs7Ozs7MkJBa0NIM0IsSSxFQUFNO0FBQ1gsVUFBSWlCLE9BQU8sSUFBWDtBQUNBQSxXQUFLSixLQUFMLEdBQWFiLEtBQUthLEtBQWxCO0FBQ0FJLFdBQUtILEdBQUwsR0FBV2QsS0FBS2MsR0FBTCxDQUFTYyxLQUFULENBQWUsR0FBZixDQUFYLENBSFcsQ0FHbUI7QUFDOUJDLGNBQVFDLEdBQVIsQ0FBWTlCLEtBQUtjLEdBQWpCO0FBQ0EscUJBQUtpQixhQUFMLENBQW1CO0FBQ2pCVixlQURpQixtQkFDVEMsR0FEUyxFQUNKO0FBQ1gsY0FBSUwsT0FBTyxJQUFYO0FBQ0FBLGVBQUtQLEtBQUwsR0FBYVksSUFBSVUsV0FBakI7QUFDQWYsZUFBS04sTUFBTCxHQUFjVyxJQUFJVyxZQUFsQjtBQUNEO0FBTGdCLE9BQW5CO0FBT0Q7Ozs7RUFwRWdDLGVBQUtDLEk7O2tCQUFuQnJDLEsiLCJmaWxlIjoiSU1HMjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfpkojnu4fooasnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBpbWdVcmxzOiBbJydcbiAgICBdLFxuICAgIGluZGljYXRvckRvdHM6IHRydWUsXG4gICAgYXV0b3BsYXk6IHRydWUsXG4gICAgaW50ZXJ2YWw6IDIwMDAsXG4gICAgZHVyYXRpb246IDEwMDAsXG4gICAgdmVydGljYWw6IHRydWUsXG4gICAgY29pbjogJy4uL2ltYWdlL+mSsS0yLnBuZycsXG4gICAgY2hlY2s6ICcuLi9pbWFnZS/lr7nli74tMy5wbmcnLFxuICAgIHBhc3M6ICcuLi9pbWFnZS/lpKfkuo7lj7ctMi5wbmcnLFxuICAgIHdpZHRoOiAnJyxcbiAgICBoZWlnaHQ6ICcnLFxuICAgIGl0ZW06ICcnLFxuICAgIC8vIGljb246ICcnLFxuICAgIHRpdGxlOiAnJyxcbiAgICBwaWM6IFtdXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBqb2luKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG5cbiAgICAgIHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICBjb250ZW50OiAn5Yqg5YWl5oiQ5YqfJyxcbiAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdzaG9wcGluZycpXG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgdmFsdWUucHVzaCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IHNlbGYudGl0bGUsXG4gICAgICAgICAgICAgICAgcGljOiBzZWxmLnBpY1xuICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ3Nob3BwaW5nJywgdmFsdWUpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBbXVxuXG4gICAgICAgICAgICAgIHZhbHVlLnB1c2goe1xuICAgICAgICAgICAgICAgIHRpdGxlOiBzZWxmLnRpdGxlLFxuICAgICAgICAgICAgICAgIHBpYzogc2VsZi5waWNcbiAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdzaG9wcGluZycsIHZhbHVlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIG9uTG9hZChkYXRhKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgc2VsZi50aXRsZSA9IGRhdGEudGl0bGVcbiAgICBzZWxmLnBpYyA9IGRhdGEucGljLnNwbGl0KCcsJykvLyBzcGxpdCgsKeS9nOeUqOaYr+aKiumAl+WPt+malOW8gOeahOWtl+espuS4sui9rOaNouaIkOaVsOe7hFxuICAgIGNvbnNvbGUubG9nKGRhdGEucGljKVxuICAgIHdlcHkuZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgICAgc2VsZi53aWR0aCA9IHJlcy53aW5kb3dXaWR0aFxuICAgICAgICBzZWxmLmhlaWdodCA9IHJlcy53aW5kb3dIZWlnaHRcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=