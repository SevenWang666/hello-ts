"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
var animal = /** @class */ (function () {
    function animal() {
        this.name = 'name';
        this.age = 123;
        this.x = 1;
        this.y = 2;
        console.log('初始化动物');
    }
    animal.getStaticName = function () {
        return 'pig';
    };
    animal.prototype.setName = function (name) {
        this.name = name;
    };
    animal.prototype.getName = function () {
        return this.name;
    };
    return animal;
}());
var pig = /** @class */ (function (_super) {
    __extends(pig, _super);
    function pig(name) {
        var _this = _super.call(this) || this;
        _this.setName(name);
        console.log(_this.getName());
        return _this;
    }
    return pig;
}(animal));
//module.exports=pig
exports["default"] = pig;
