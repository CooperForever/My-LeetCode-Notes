//罗马转整数 -正确解答
var romanToInt = function(s) {
  var arr = s.split('');
  var res = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (transform(arr[i]) >= transform(arr[i + 1])) {
      res = res + transform(arr[i]);
    } else {
      res = res - transform(arr[i]);
    }
  }
  res = res + transform(arr[arr.length - 1]);
  function transform(char) {
    switch (char) {
      case 'I':
        return 1;
        break;
      case 'V':
        return 5;
        break;
      case 'X':
        return 10;
        break;
      case 'L':
        return 50;
        break;
      case 'C':
        return 100;
      case 'D':
        return 500;
        break;
      case 'M':
        return 1000;
        break;
      default:
        break;
    }
  }
  return res;
};
console.log(romanToInt('MCDLXXVI'));

//错误解答-转换理解错误
var romanToInt2 = function(s) {
  var arr = [];
  var res = 0;
  for (let i = s.length; i >= 0; i = i - 2) {
    if (i - 2 >= 0) {
      arr.push(s.substring(i - 2, i));
    } else if (i - 1 >= 0) {
      arr.push(s.substring(0, i));
    }
  }
  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    let tempArr = arr[i].split('');
    if (tempArr.length > 1) {
      if (transform(tempArr[0]) >= transform(tempArr[1])) {
        res = res + transform(tempArr[0]) + transform(tempArr[1]);
      } else {
        res = res - transform(tempArr[0]) + transform(tempArr[1]);
      }
    } else {
      res = res + transform(tempArr[0]);
    }
  }
  function transform(char) {
    switch (char) {
      case 'I':
        return 1;
        break;
      case 'V':
        return 5;
        break;
      case 'X':
        return 10;
        break;
      case 'L':
        return 50;
        break;
      case 'C':
        return 100;
      case 'D':
        return 500;
        break;
      case 'M':
        return 1000;
        break;
      default:
        break;
    }
  }
  return res;
};
