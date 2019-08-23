// 选择排序 每次从数组中选出一个最大或者最小的数， 平局时间复杂度On2
var selectionSort = function (arr) {
  if (arr.length == null || arr.length <= 1) {
    return arr;
  }
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      minIndex = arr[minIndex] < arr[j] ? minIndex : j;
    }
    let temp = arr[i]
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr
}
var arrTest = [12, 2, 13, 15, 32, 3, 4, 1, 10, 43, 21, 9];
console.log(selectionSort(arrTest));