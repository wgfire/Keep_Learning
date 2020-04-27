
var LUR = /** @class */ (function () {
    function LUR(max) {
        this.max = max;
        this.cache = new Map();
    }
    LUR.prototype.add = function (key, value) {
        var cache = this.cache;
        if (cache.size > this.max - 1) {
            var keys = cache.keys().next().value;
            cache["delete"](keys);
        }
        cache.set(key, value);
    };
    LUR.prototype.get = function (key) {
        var Kvalue = 0;
        var cache = this.cache;
        Kvalue = cache.get(key);
        if (!Kvalue)
            return false;
        cache["delete"](key);
        cache.set(key, Kvalue);
        return Kvalue;
    };
    return LUR;
}());
