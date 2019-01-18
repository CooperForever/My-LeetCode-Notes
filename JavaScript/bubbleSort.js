//冒泡排序 O(n^2)
function sort(elements) {
  for (let i = 0; i < elements.length; i++) {
    for (let j = i; j < elements.length - i; j++) {
      if (elements[j] > elements[j + 1]) {
        var temp = elements[j + 1];
        elements[j + 1] = elements[j];
        elements[j] = temp;
      }
    }
  }
}
var arr = [91, 12, 25, 13, 15, 14, 23, 82, 71, 79, 45]
console.log("before" + arr)
sort(arr)
console.log("after" + arr)