"use strict";
class LUR {
    constructor(max) {
        this.max = max;
        this.cache = new Map();
    }
    add(key, value) {
        const { cache } = this;
        if (cache.size > this.max - 1) {
            const keys = cache.keys().next().value;
            cache.delete(keys);
        }
        cache.set(key, value);
    }
    get(key) {
        let Kvalue = 0;
        const { cache } = this;
        Kvalue = cache.get(key);
        if (!Kvalue)
            return false;
        cache.delete(key);
        cache.set(key, Kvalue);
        return Kvalue;
    }
}
