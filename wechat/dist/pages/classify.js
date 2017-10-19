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
      navigationBarTitleText: '博客',
      enablePullDownRefresh: true
    }, _this.data = {
      text: 'js',
      color1: '#CCFFFF',
      color2: '#202020',
      color3: '#202020',
      color4: '#202020',
      color5: '#202020'
    }, _this.methods = {
      js: function js() {
        var self = this;

        self.text = 'javascript';
        self.color1 = '#CCFFFF';
        self.color2 = '#202020';
        self.color3 = '#202020';
        self.color4 = '#202020';
        self.color5 = '#202020';
      },
      HTML: function HTML() {
        var self = this;

        self.text = 'client';
        self.color1 = '#202020';
        self.color2 = '#CCFFFF';
        self.color3 = '#202020';
        self.color4 = '#202020';
        self.color5 = '#202020';
      },
      Node: function Node() {
        var self = this;

        self.text = 'server';
        self.color1 = '#202020';
        self.color2 = '#202020';
        self.color3 = '#CCFFFF';
        self.color4 = '#202020';
        self.color5 = '#202020';
      },
      ES6: function ES6() {
        var self = this;

        self.text = 'jotting';
        self.color1 = '#202020';
        self.color2 = '#202020';
        self.color3 = '#202020';
        self.color4 = '#CCFFFF';
        self.color5 = '#202020';
      },
      CSS: function CSS() {
        var self = this;

        self.text = 'CSS';
        self.color1 = '#202020';
        self.color2 = '#202020';
        self.color3 = '#202020';
        self.color4 = '#202020';
        self.color5 = '#CCFFFF';
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }, {
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {
      _wepy2.default.startPullDownRefresh();
      setTimeout(function () {
        _wepy2.default.stopPullDownRefresh();
      }, 1000);
    }
  }, {
    key: 'onShareAppMessage',
    value: function onShareAppMessage() {
      return {
        title: '分类',
        path: '/pages/classify'
      };
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/classify'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYXNzaWZ5LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImVuYWJsZVB1bGxEb3duUmVmcmVzaCIsImRhdGEiLCJ0ZXh0IiwiY29sb3IxIiwiY29sb3IyIiwiY29sb3IzIiwiY29sb3I0IiwiY29sb3I1IiwibWV0aG9kcyIsImpzIiwic2VsZiIsIkhUTUwiLCJOb2RlIiwiRVM2IiwiQ1NTIiwic3RhcnRQdWxsRG93blJlZnJlc2giLCJzZXRUaW1lb3V0Iiwic3RvcFB1bGxEb3duUmVmcmVzaCIsInRpdGxlIiwicGF0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixJQURqQjtBQUVQQyw2QkFBdUI7QUFGaEIsSyxRQUlUQyxJLEdBQU87QUFDTEMsWUFBTSxJQUREO0FBRUxDLGNBQVEsU0FGSDtBQUdMQyxjQUFRLFNBSEg7QUFJTEMsY0FBUSxTQUpIO0FBS0xDLGNBQVEsU0FMSDtBQU1MQyxjQUFRO0FBTkgsSyxRQVFQQyxPLEdBQVU7QUFDUkMsUUFEUSxnQkFDSDtBQUNILFlBQUlDLE9BQU8sSUFBWDs7QUFFQUEsYUFBS1IsSUFBTCxHQUFZLFlBQVo7QUFDQVEsYUFBS1AsTUFBTCxHQUFjLFNBQWQ7QUFDQU8sYUFBS04sTUFBTCxHQUFjLFNBQWQ7QUFDQU0sYUFBS0wsTUFBTCxHQUFjLFNBQWQ7QUFDQUssYUFBS0osTUFBTCxHQUFjLFNBQWQ7QUFDQUksYUFBS0gsTUFBTCxHQUFjLFNBQWQ7QUFDRCxPQVZPO0FBWVJJLFVBWlEsa0JBWUQ7QUFDTCxZQUFJRCxPQUFPLElBQVg7O0FBRUFBLGFBQUtSLElBQUwsR0FBWSxRQUFaO0FBQ0FRLGFBQUtQLE1BQUwsR0FBYyxTQUFkO0FBQ0FPLGFBQUtOLE1BQUwsR0FBYyxTQUFkO0FBQ0FNLGFBQUtMLE1BQUwsR0FBYyxTQUFkO0FBQ0FLLGFBQUtKLE1BQUwsR0FBYyxTQUFkO0FBQ0FJLGFBQUtILE1BQUwsR0FBYyxTQUFkO0FBQ0QsT0FyQk87QUFzQlJLLFVBdEJRLGtCQXNCRDtBQUNMLFlBQUlGLE9BQU8sSUFBWDs7QUFFQUEsYUFBS1IsSUFBTCxHQUFZLFFBQVo7QUFDQVEsYUFBS1AsTUFBTCxHQUFjLFNBQWQ7QUFDQU8sYUFBS04sTUFBTCxHQUFjLFNBQWQ7QUFDQU0sYUFBS0wsTUFBTCxHQUFjLFNBQWQ7QUFDQUssYUFBS0osTUFBTCxHQUFjLFNBQWQ7QUFDQUksYUFBS0gsTUFBTCxHQUFjLFNBQWQ7QUFDRCxPQS9CTztBQWdDUk0sU0FoQ1EsaUJBZ0NGO0FBQ0osWUFBSUgsT0FBTyxJQUFYOztBQUVBQSxhQUFLUixJQUFMLEdBQVksU0FBWjtBQUNBUSxhQUFLUCxNQUFMLEdBQWMsU0FBZDtBQUNBTyxhQUFLTixNQUFMLEdBQWMsU0FBZDtBQUNBTSxhQUFLTCxNQUFMLEdBQWMsU0FBZDtBQUNBSyxhQUFLSixNQUFMLEdBQWMsU0FBZDtBQUNBSSxhQUFLSCxNQUFMLEdBQWMsU0FBZDtBQUNELE9BekNPO0FBMENSTyxTQTFDUSxpQkEwQ0Y7QUFDSixZQUFJSixPQUFPLElBQVg7O0FBRUFBLGFBQUtSLElBQUwsR0FBWSxLQUFaO0FBQ0FRLGFBQUtQLE1BQUwsR0FBYyxTQUFkO0FBQ0FPLGFBQUtOLE1BQUwsR0FBYyxTQUFkO0FBQ0FNLGFBQUtMLE1BQUwsR0FBYyxTQUFkO0FBQ0FLLGFBQUtKLE1BQUwsR0FBYyxTQUFkO0FBQ0FJLGFBQUtILE1BQUwsR0FBYyxTQUFkO0FBQ0Q7QUFuRE8sSzs7Ozs7NkJBcURELENBQUc7Ozt3Q0FFUTtBQUNsQixxQkFBS1Esb0JBQUw7QUFDQUMsaUJBQVcsWUFBVztBQUNwQix1QkFBS0MsbUJBQUw7QUFDRCxPQUZELEVBRUcsSUFGSDtBQUdEOzs7d0NBRW1CO0FBQ2xCLGFBQU87QUFDTEMsZUFBTyxJQURGO0FBRUxDLGNBQU07QUFGRCxPQUFQO0FBSUQ7Ozs7RUFoRmdDLGVBQUtDLEk7O2tCQUFuQnZCLEsiLCJmaWxlIjoiY2xhc3NpZnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfljZrlrqInLFxuICAgIGVuYWJsZVB1bGxEb3duUmVmcmVzaDogdHJ1ZVxuICB9XG4gIGRhdGEgPSB7XG4gICAgdGV4dDogJ2pzJyxcbiAgICBjb2xvcjE6ICcjQ0NGRkZGJyxcbiAgICBjb2xvcjI6ICcjMjAyMDIwJyxcbiAgICBjb2xvcjM6ICcjMjAyMDIwJyxcbiAgICBjb2xvcjQ6ICcjMjAyMDIwJyxcbiAgICBjb2xvcjU6ICcjMjAyMDIwJ1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAganMoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcblxuICAgICAgc2VsZi50ZXh0ID0gJ2phdmFzY3JpcHQnXG4gICAgICBzZWxmLmNvbG9yMSA9ICcjQ0NGRkZGJ1xuICAgICAgc2VsZi5jb2xvcjIgPSAnIzIwMjAyMCdcbiAgICAgIHNlbGYuY29sb3IzID0gJyMyMDIwMjAnXG4gICAgICBzZWxmLmNvbG9yNCA9ICcjMjAyMDIwJ1xuICAgICAgc2VsZi5jb2xvcjUgPSAnIzIwMjAyMCdcbiAgICB9LFxuXG4gICAgSFRNTCgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuXG4gICAgICBzZWxmLnRleHQgPSAnY2xpZW50J1xuICAgICAgc2VsZi5jb2xvcjEgPSAnIzIwMjAyMCdcbiAgICAgIHNlbGYuY29sb3IyID0gJyNDQ0ZGRkYnXG4gICAgICBzZWxmLmNvbG9yMyA9ICcjMjAyMDIwJ1xuICAgICAgc2VsZi5jb2xvcjQgPSAnIzIwMjAyMCdcbiAgICAgIHNlbGYuY29sb3I1ID0gJyMyMDIwMjAnXG4gICAgfSxcbiAgICBOb2RlKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG5cbiAgICAgIHNlbGYudGV4dCA9ICdzZXJ2ZXInXG4gICAgICBzZWxmLmNvbG9yMSA9ICcjMjAyMDIwJ1xuICAgICAgc2VsZi5jb2xvcjIgPSAnIzIwMjAyMCdcbiAgICAgIHNlbGYuY29sb3IzID0gJyNDQ0ZGRkYnXG4gICAgICBzZWxmLmNvbG9yNCA9ICcjMjAyMDIwJ1xuICAgICAgc2VsZi5jb2xvcjUgPSAnIzIwMjAyMCdcbiAgICB9LFxuICAgIEVTNigpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuXG4gICAgICBzZWxmLnRleHQgPSAnam90dGluZydcbiAgICAgIHNlbGYuY29sb3IxID0gJyMyMDIwMjAnXG4gICAgICBzZWxmLmNvbG9yMiA9ICcjMjAyMDIwJ1xuICAgICAgc2VsZi5jb2xvcjMgPSAnIzIwMjAyMCdcbiAgICAgIHNlbGYuY29sb3I0ID0gJyNDQ0ZGRkYnXG4gICAgICBzZWxmLmNvbG9yNSA9ICcjMjAyMDIwJ1xuICAgIH0sXG4gICAgQ1NTKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG5cbiAgICAgIHNlbGYudGV4dCA9ICdDU1MnXG4gICAgICBzZWxmLmNvbG9yMSA9ICcjMjAyMDIwJ1xuICAgICAgc2VsZi5jb2xvcjIgPSAnIzIwMjAyMCdcbiAgICAgIHNlbGYuY29sb3IzID0gJyMyMDIwMjAnXG4gICAgICBzZWxmLmNvbG9yNCA9ICcjMjAyMDIwJ1xuICAgICAgc2VsZi5jb2xvcjUgPSAnI0NDRkZGRidcbiAgICB9XG4gIH1cbiAgb25Mb2FkKCkgeyB9XG5cbiAgb25QdWxsRG93blJlZnJlc2goKSB7XG4gICAgd2VweS5zdGFydFB1bGxEb3duUmVmcmVzaCgpXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIHdlcHkuc3RvcFB1bGxEb3duUmVmcmVzaCgpXG4gICAgfSwgMTAwMClcbiAgfVxuXG4gIG9uU2hhcmVBcHBNZXNzYWdlKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogJ+WIhuexuycsXG4gICAgICBwYXRoOiAnL3BhZ2VzL2NsYXNzaWZ5J1xuICAgIH1cbiAgfVxufVxuIl19