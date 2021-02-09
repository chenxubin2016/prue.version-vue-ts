// 获取url参数
export const getParams = (url: string, key?: string) => {
  // url参数不存在时
  if (!url) throw new Error("url is not defined!");
  //url没有参数时返回空对象
  if (!/\?/g.test(url)) return {};
  const keyValueArr = url.split("?")[1].split("&"),
    params: any = {};
  keyValueArr.map(item => {
    const keyVal = item.split("=");
    params[keyVal[0]] = keyVal[1];
  });
  // 有key时返回对应值
  if (key) return params[key];
  return params;
};

/**
 * @file: utils.ts
 * @method debounce
 * @param {fn} fn - 回调函数
 * @param {wait} wait - 防抖时间间隔
 * @param {immediate} immediate - 是否立即执行
 * @description: 防止高频触发回调函数
 * @author: chenxubin
 * @date: 2020/9/14
 */
// 防抖
export const debounce = (fn: any, wait: number, immediate: boolean) => {
  let timerId: number;
  // 定义debounced函数
  const debounced: any = function(...args: any) {
    // 清除定时器，保证是最新的
    if (timerId) clearTimeout(timerId);
    if (immediate) {
      const callNow = !timerId;
      // wait毫秒后取消定时器
      timerId = setTimeout(() => {
        timerId = 0;
      }, wait);
      // 首次立即执行
      if (callNow) fn(args);
    } else {
      timerId = setTimeout(() => {
        fn(args);
      }, wait);
    }
  };
  debounced.cancel = function() {
    clearTimeout(timerId);
    timerId = 0;
  };
  return debounced;
};
/**
 * @file: utils.js
 * @method throttle
 * @param {fn} fn - 回调函数
 * @param {delay} delay - 间隔毫秒数
 * @param {type} type - 采用哪种方式，默认定时器
 * @description: 减少高频触发回调函数
 * @author: chenxubin
 * @date: 2020/9/14
 */
export const throttle = (fn: any, delay: number, type: string) => {
  // 时间戳方式
  if (type === "stamp") {
    let prev = Date.now();
    return function(...args: any) {
      const now = Date.now();
      if (now - prev >= delay) {
        fn(args);
        prev = Date.now();
      }
    };
  } else {
    // 定时器方式
    let timer = 0,
      valid = true;
    return function(...args: any) {
      if (!valid) return false;
      if (valid || !timer) {
        valid = false;
        console.log(valid, timer, delay);
        timer = setTimeout(() => {
          fn(args);
          timer = 0;
          valid = true;
        }, delay);
      }
    };
  }
};
// 计算补充0数量
export const getZero = (a: number, b: number) => {
  let zero = "",
    len = 0;
  if (a > b) {
    len = a - b;
  } else {
    len = b - a;
  }
  for (let i = 0; i < len; i++) {
    zero += "0";
  }
  return zero;
};
// 浮点数转换整数
export const decimalToInteger = (a: number, b: number) => {
  let _a = a.toString(),
    _b = b.toString();
  if (!_a.match(/\./g) && !_b.match(/\./g)) {
    return {
      _a,
      _b,
      e: 1
    };
  } else {
    const al = _a.match(/\./g) ? _a.split(".")[1] : "",
      bl = _b.match(/\./g) ? _b.split(".")[1] : "",
      max = Math.max(al.length, bl.length),
      e = Math.pow(10, max);
    _b = _b.replace(/\./g, "");
    _a = _a.replace(/\./g, "");
    if (al.length > bl.length) {
      _b += getZero(al.length, bl.length);
    } else {
      _a += getZero(al.length, bl.length);
    }
    return {
      _a,
      _b,
      e
    };
  }
};
// 加
export const add = (a: number, b: number) => {
  const { _a, _b, e } = decimalToInteger(a, b);
  return (Number(_a) + Number(_b)) / e;
};
// 减
export const subtract = (a: number, b: number) => {
  const { _a, _b, e } = decimalToInteger(a, b);
  return (Number(_a) - Number(_b)) / e;
};
// 乘
export const multiply = (a: number, b: number) => {
  const { _a, _b, e } = decimalToInteger(a, b);
  return (Number(_a) * Number(_b)) / Math.pow(e, 2);
};
// 除以
export const divide = (a: number, b: number) => {
  const { _a, _b } = decimalToInteger(a, b);
  return Number(_a) / Number(_b);
};
// 数组去重
export const ArrNoRepeat = (arr: Array<any>, key: string) => {
  if (!Array.isArray(arr)) {
    throw new Error("type error");
  }
  const obj: any = {},
    Arr: Array<any> = [];
  arr.forEach(item => {
    if (typeof item === "object") {
      if (!obj[item[key]]) {
        obj[item[key]] = item[key];
        Arr.push(item);
      }
    }
    if (typeof item === "string" || typeof item === "number") {
      if (!obj[item]) {
        obj[item] = item;
        Arr.push(item);
      }
    }
  });
  return Arr;
};
// 价格千分位
export const formatPrice = (num: number) => {
  if (!num && num !== 0) {
    throw new Error("num is undefired!");
  }
  const reg = /\d{1,3}(?=(\d{3})+$)/g,
    numStr = num.toString();
  let integer = "",
    float = "",
    hasPoint = false;
  if (numStr.match(/\./g)) {
    integer = numStr.split(".")[0];
    float = numStr.split(".")[1];
    hasPoint = true;
  }
  if (!hasPoint) {
    return numStr.replace(reg, "$&,");
  } else {
    return integer.replace(reg, "$&,") + "." + float;
  }
};
