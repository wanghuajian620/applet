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
      text: 'js',
      color1: '#CCFFFF',
      color2: '#202020',
      color3: '#202020',
      color4: '#202020'
    }, _this.methods = {
      js: function js() {
        var self = this;

        self.text = 'javascript';
        self.color1 = '#CCFFFF';
        self.color2 = '#202020';
        self.color3 = '#202020';
        self.color4 = '#202020';
      },
      client: function client() {
        var self = this;

        self.text = 'client';
        self.color1 = '#202020';
        self.color2 = '#CCFFFF';
        self.color3 = '#202020';
        self.color4 = '#202020';
      },
      server: function server() {
        var self = this;

        self.text = 'server';
        self.color1 = '#202020';
        self.color2 = '#202020';
        self.color3 = '#CCFFFF';
        self.color4 = '#202020';
      },
      jotting: function jotting() {
        var self = this;

        self.text = 'jotting';
        self.color1 = '#202020';
        self.color2 = '#202020';
        self.color3 = '#202020';
        self.color4 = '#CCFFFF';
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/classify'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYXNzaWZ5LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJ0ZXh0IiwiY29sb3IxIiwiY29sb3IyIiwiY29sb3IzIiwiY29sb3I0IiwibWV0aG9kcyIsImpzIiwic2VsZiIsImNsaWVudCIsInNlcnZlciIsImpvdHRpbmciLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsWUFBTSxJQUREO0FBRUxDLGNBQVEsU0FGSDtBQUdMQyxjQUFRLFNBSEg7QUFJTEMsY0FBUSxTQUpIO0FBS0xDLGNBQVE7QUFMSCxLLFFBT1BDLE8sR0FBVTtBQUNSQyxRQURRLGdCQUNIO0FBQ0gsWUFBSUMsT0FBTyxJQUFYOztBQUVBQSxhQUFLUCxJQUFMLEdBQVksWUFBWjtBQUNBTyxhQUFLTixNQUFMLEdBQWMsU0FBZDtBQUNBTSxhQUFLTCxNQUFMLEdBQWMsU0FBZDtBQUNBSyxhQUFLSixNQUFMLEdBQWMsU0FBZDtBQUNBSSxhQUFLSCxNQUFMLEdBQWMsU0FBZDtBQUNELE9BVE87QUFXUkksWUFYUSxvQkFXQztBQUNQLFlBQUlELE9BQU8sSUFBWDs7QUFFQUEsYUFBS1AsSUFBTCxHQUFZLFFBQVo7QUFDQU8sYUFBS04sTUFBTCxHQUFjLFNBQWQ7QUFDQU0sYUFBS0wsTUFBTCxHQUFjLFNBQWQ7QUFDQUssYUFBS0osTUFBTCxHQUFjLFNBQWQ7QUFDQUksYUFBS0gsTUFBTCxHQUFjLFNBQWQ7QUFDRCxPQW5CTztBQW9CUkssWUFwQlEsb0JBb0JDO0FBQ1AsWUFBSUYsT0FBTyxJQUFYOztBQUVBQSxhQUFLUCxJQUFMLEdBQVksUUFBWjtBQUNBTyxhQUFLTixNQUFMLEdBQWMsU0FBZDtBQUNBTSxhQUFLTCxNQUFMLEdBQWMsU0FBZDtBQUNBSyxhQUFLSixNQUFMLEdBQWMsU0FBZDtBQUNBSSxhQUFLSCxNQUFMLEdBQWMsU0FBZDtBQUNELE9BNUJPO0FBNkJSTSxhQTdCUSxxQkE2QkU7QUFDUixZQUFJSCxPQUFPLElBQVg7O0FBRUFBLGFBQUtQLElBQUwsR0FBWSxTQUFaO0FBQ0FPLGFBQUtOLE1BQUwsR0FBYyxTQUFkO0FBQ0FNLGFBQUtMLE1BQUwsR0FBYyxTQUFkO0FBQ0FLLGFBQUtKLE1BQUwsR0FBYyxTQUFkO0FBQ0FJLGFBQUtILE1BQUwsR0FBYyxTQUFkO0FBQ0Q7QUFyQ08sSzs7Ozs7NkJBdUNELENBQUU7Ozs7RUFsRHNCLGVBQUtPLEk7O2tCQUFuQmYsSyIsImZpbGUiOiJjbGFzc2lmeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WNmuWuoidcbiAgfVxuICBkYXRhID0ge1xuICAgIHRleHQ6ICdqcycsXG4gICAgY29sb3IxOiAnI0NDRkZGRicsXG4gICAgY29sb3IyOiAnIzIwMjAyMCcsXG4gICAgY29sb3IzOiAnIzIwMjAyMCcsXG4gICAgY29sb3I0OiAnIzIwMjAyMCdcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIGpzKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG5cbiAgICAgIHNlbGYudGV4dCA9ICdqYXZhc2NyaXB0J1xuICAgICAgc2VsZi5jb2xvcjEgPSAnI0NDRkZGRidcbiAgICAgIHNlbGYuY29sb3IyID0gJyMyMDIwMjAnXG4gICAgICBzZWxmLmNvbG9yMyA9ICcjMjAyMDIwJ1xuICAgICAgc2VsZi5jb2xvcjQgPSAnIzIwMjAyMCdcbiAgICB9LFxuXG4gICAgY2xpZW50KCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG5cbiAgICAgIHNlbGYudGV4dCA9ICdjbGllbnQnXG4gICAgICBzZWxmLmNvbG9yMSA9ICcjMjAyMDIwJ1xuICAgICAgc2VsZi5jb2xvcjIgPSAnI0NDRkZGRidcbiAgICAgIHNlbGYuY29sb3IzID0gJyMyMDIwMjAnXG4gICAgICBzZWxmLmNvbG9yNCA9ICcjMjAyMDIwJ1xuICAgIH0sXG4gICAgc2VydmVyKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG5cbiAgICAgIHNlbGYudGV4dCA9ICdzZXJ2ZXInXG4gICAgICBzZWxmLmNvbG9yMSA9ICcjMjAyMDIwJ1xuICAgICAgc2VsZi5jb2xvcjIgPSAnIzIwMjAyMCdcbiAgICAgIHNlbGYuY29sb3IzID0gJyNDQ0ZGRkYnXG4gICAgICBzZWxmLmNvbG9yNCA9ICcjMjAyMDIwJ1xuICAgIH0sXG4gICAgam90dGluZygpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuXG4gICAgICBzZWxmLnRleHQgPSAnam90dGluZydcbiAgICAgIHNlbGYuY29sb3IxID0gJyMyMDIwMjAnXG4gICAgICBzZWxmLmNvbG9yMiA9ICcjMjAyMDIwJ1xuICAgICAgc2VsZi5jb2xvcjMgPSAnIzIwMjAyMCdcbiAgICAgIHNlbGYuY29sb3I0ID0gJyNDQ0ZGRkYnXG4gICAgfVxuICB9XG4gIG9uTG9hZCgpIHt9XG59XG4iXX0=