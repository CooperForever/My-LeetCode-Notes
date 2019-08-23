//解法一 通过字符串翻转
var reverse = function (x) {
    var str;
    var res;
    if (x > 0) {
        res = parseInt(
            (x + '')
            .split('')
            .reverse()
            .join('')
        );
    } else {
        str = x + '';
        res = -parseInt(
            str
            .substring(1, str.length)
            .split('')
            .reverse()
            .join('')
        );
    }
    if (res > 2147483647 || res < -2147483648) res = 0;
    return res;
};
//console.log(reverse(2147483641)) 10
//解法二 数学计算法
var cac_reverse = function (x) {
    let res = 0;
    let flag = false;
    if (x <= 0) {
        x = -x;
        flag = !flag;
    }
    for (let length = (x + '').length; length--; length > 0) {
        let plus = (x % 10) * Math.pow(10, length);
        res = res + plus;
        x = parseInt(x / 10);
    }
    res = flag ? -res : res;
    //if (res > 2147483647 || res < -2147483648) res = 0;
    return res;
};