

class LUR {
  max: number;
  cache: Map<string, number>;
  constructor(max: number) {
    this.max = max;
    this.cache = new Map<string, number>();
  }

  add(key: string, value: number) {
    const { cache } = this;
    if (cache.size > this.max - 1) {
      const keys = cache.keys().next().value;
      cache.delete(keys);
    }
    cache.set(key, value);
  }
  get(key: string): number|boolean {
    let  Kvalue: number = 0;
    const { cache } = this;
    Kvalue = cache.get(key)!;
    if (!Kvalue) return false;
    cache.delete(key);
    cache.set(key, Kvalue);
    return Kvalue;
  }
}
