// class  类 和继承 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var parentClass = /** @class */ (function () {
    function parentClass(name) {
        this.sex = "男";
        this.name = name;
    }
    parentClass.prototype.saysex = function () {
        console.log('我的性别 是' + this.sex);
    };
    return parentClass;
}());
var childrenClass = /** @class */ (function (_super) {
    __extends(childrenClass, _super);
    function childrenClass(weight, name) {
        var _this = _super.call(this, name) || this;
        _this.weight = weight;
        return _this;
    }
    childrenClass.prototype.sayweight = function () {
        console.log('我的体重 是' + this.weight);
    };
    childrenClass.prototype.sayname = function () {
        console.log('我的名字 是' + this.name);
    };
    return childrenClass;
}(parentClass));
var parentObject = new parentClass('wg');
parentObject.saysex();
var childrenObject = new childrenClass(63, 'wg');
childrenObject.sayweight();
childrenObject.sayname();
