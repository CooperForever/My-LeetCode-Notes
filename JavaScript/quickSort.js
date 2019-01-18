//快速排序 O(n^2)
var quickSort = function (arr) {
  if (arr.length <= 1) {
    return arr;
  }
  var pivotIndex = arr.length / 2;
  var pivot = arr.splice(pivotIndex, 1)[0];
  var left = [],
    right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([pivot], quickSort(right));
}
var arr = [91, 12, 25, 13, 15, 14, 23, 82, 71, 79, 45];

console.info("after:", quickSort(arr))