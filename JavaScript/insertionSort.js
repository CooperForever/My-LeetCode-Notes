//插入排序 O(n^2)
var insertionSort = function (arr) {
  for (let i = 1; i < arr.length; i++) {
    var j = i;
    while (j > 0 && arr[j] < arr[j - 1]) {
      arr[j] = arr[j] + arr[j - 1];
      arr[j - 1] = arr[j] - arr[j - 1];
      arr[j] = arr[j] - arr[j - 1];
      j--;
    }
  }
  return arr;
}
var arr = [91, 12, 25, 13, 15, 14, 23, 82, 71, 79, 45]
console.log("before", arr)

console.log("after", insertionSort(arr))