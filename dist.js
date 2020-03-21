"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

btnCircle.onclick = function () {
  new Circle();
};

btnRect.onclick = function () {
  new Rect();
};

var Circle = /*#__PURE__*/function () {
  //位置 大小 颜色 
  function Circle() {
    (0, _classCallCheck2["default"])(this, Circle);
    this.x = this.random(0, 1200);
    this.y = this.random(0, 300);
    this.r = this.random(0, 100); //   this.color='blue';

    this.color = this.randomColor(); //调用

    this.createEl(); //   this.randomColor()
  }

  (0, _createClass2["default"])(Circle, [{
    key: "createEl",
    value: function createEl() {
      var r = this.r,
          color = this.color,
          x = this.x,
          y = this.y; //创建小球 

      this.circle = document.createElement('div');
      this.circle.classList.add('circle'); // this. circle.classList.add("rect")

      this.circle.style.width = "".concat(r * 2, "px");
      this.circle.style.height = "".concat(r * 2, "px");
      this.circle.style.backgroundColor = color;
      this.circle.style.left = "".concat(x, "px");
      this.circle.style.top = "".concat(y, "px");
      box.appendChild(this.circle); // this.render(this.circle);
      // 
    } //随机数

  }, {
    key: "random",
    value: function random(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    } //随机颜色console.log(srts)

  }, {
    key: "randomColor",
    value: function randomColor() {
      var letters = ['a', 'b', 'c', 'd', 'e', 'f'];
      var strs = [].concat(letters);
      console.log(strs);

      for (var _i = 0; _i < 10; _i++) {
        strs.push(_i + "");
      }

      var i = 0;
      var colors = '#';

      while (i < 6) {
        colors += strs[this.random(0, strs.length)];
        i++;
      }

      console.log(colors);
      return colors;
    }
  }]);
  return Circle;
}();

var Rect = /*#__PURE__*/function () {
  //位置 大小 颜色 
  function Rect() {
    (0, _classCallCheck2["default"])(this, Rect);
    this.x = this.random(0, 1200);
    this.y = this.random(0, 300); //   this.color='blue';

    this.color = this.randomColor(); //调用

    this.createEl(); //   this.randomColor()
  }

  (0, _createClass2["default"])(Rect, [{
    key: "createEl",
    value: function createEl() {
      var r = this.r,
          color = this.color,
          x = this.x,
          y = this.y; //创建小球 

      this.circle = document.createElement('div');
      this.circle.classList.add("rect");
      this.circle.style.width = "".concat(this.random(10, 100), "px");
      this.circle.style.height = "".concat(this.random(10, 20), "px");
      this.circle.style.backgroundColor = color;
      this.circle.style.left = "".concat(x, "px");
      this.circle.style.top = "".concat(y, "px");
      box.appendChild(this.circle); // this.render(this.circle);
      // 
    } //随机数

  }, {
    key: "random",
    value: function random(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    } //随机颜色console.log(srts)

  }, {
    key: "randomColor",
    value: function randomColor() {
      var letters = ['a', 'b', 'c', 'd', 'e', 'f'];
      var strs = [].concat(letters);
      console.log(strs);

      for (var _i2 = 0; _i2 < 10; _i2++) {
        strs.push(_i2 + "");
      }

      var i = 0;
      var colors = '#';

      while (i < 6) {
        colors += strs[this.random(0, strs.length)];
        i++;
      }

      console.log(colors);
      return colors;
    }
  }]);
  return Rect;
}();
