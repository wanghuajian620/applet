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
      navigationBarTitleText: '博客'
    }, _this.data = {
      killer: '../image/97051acc363360ca5dfc701b658580cf.jpg',
      music: '../audio/尚雯婕 - 最终信仰.mp3',
      name: '最终信仰',
      author: '尚雯婕',
      shangwenjie: '../image/19e8c807b18775ae8b35b61026d07420.jpg'
      // methods = {
      //   audioPlay() {
      //     let self = this
      //     self.audioCtx.play()
      //   },
      //   audioPause() {
      //     let self = this
      //     self.audioCtx.pause()
      //   }
      // }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }, {
    key: 'onReady',
    value: function onReady(e) {
      // 使用 wx.createAudioContext 获取 audio 上下文 context
      this.audioCtx = _wepy2.default.createAudioContext('myAudio');
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/virgo'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpcmdvLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJraWxsZXIiLCJtdXNpYyIsIm5hbWUiLCJhdXRob3IiLCJzaGFuZ3dlbmppZSIsImUiLCJhdWRpb0N0eCIsImNyZWF0ZUF1ZGlvQ29udGV4dCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxjQUFRLCtDQURIO0FBRUxDLGFBQU8seUJBRkY7QUFHTEMsWUFBTSxNQUhEO0FBSUxDLGNBQVEsS0FKSDtBQUtMQyxtQkFBYTtBQUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaEJPLEs7Ozs7OzZCQWlCRSxDQUFFOzs7NEJBQ0hDLEMsRUFBRztBQUNUO0FBQ0EsV0FBS0MsUUFBTCxHQUFnQixlQUFLQyxrQkFBTCxDQUF3QixTQUF4QixDQUFoQjtBQUNEOzs7O0VBekJnQyxlQUFLQyxJOztrQkFBbkJaLEsiLCJmaWxlIjoidmlyZ28uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfljZrlrqInXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBraWxsZXI6ICcuLi9pbWFnZS85NzA1MWFjYzM2MzM2MGNhNWRmYzcwMWI2NTg1ODBjZi5qcGcnLFxuICAgIG11c2ljOiAnLi4vYXVkaW8v5bCa6Zuv5amVIC0g5pyA57uI5L+h5LuwLm1wMycsXG4gICAgbmFtZTogJ+acgOe7iOS/oeS7sCcsXG4gICAgYXV0aG9yOiAn5bCa6Zuv5amVJyxcbiAgICBzaGFuZ3dlbmppZTogJy4uL2ltYWdlLzE5ZThjODA3YjE4Nzc1YWU4YjM1YjYxMDI2ZDA3NDIwLmpwZydcbiAgfVxuICAvLyBtZXRob2RzID0ge1xuICAvLyAgIGF1ZGlvUGxheSgpIHtcbiAgLy8gICAgIGxldCBzZWxmID0gdGhpc1xuICAvLyAgICAgc2VsZi5hdWRpb0N0eC5wbGF5KClcbiAgLy8gICB9LFxuICAvLyAgIGF1ZGlvUGF1c2UoKSB7XG4gIC8vICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgLy8gICAgIHNlbGYuYXVkaW9DdHgucGF1c2UoKVxuICAvLyAgIH1cbiAgLy8gfVxuICBvbkxvYWQoKSB7fVxuICBvblJlYWR5KGUpIHtcbiAgICAvLyDkvb/nlKggd3guY3JlYXRlQXVkaW9Db250ZXh0IOiOt+WPliBhdWRpbyDkuIrkuIvmlocgY29udGV4dFxuICAgIHRoaXMuYXVkaW9DdHggPSB3ZXB5LmNyZWF0ZUF1ZGlvQ29udGV4dCgnbXlBdWRpbycpXG4gIH1cbn1cbiJdfQ==