// sorts an array with n^2 time
function insertSort(arr) {
  const arr2 = [];
  for (let i = 1; i <= arr.length - 1; i++) {
    for (let x = 0; x <= i; x++) {
      if (arr[i] < arr[x]) {
        const t = arr[x];
        arr[x] = arr[i];
        arr[i] = t;
      } else {
      }
    }
  }
  console.log('fin', arr);
  return arr;
}

insertSort([2, 8, 5, 3, 9, 4]);
insertSort([5, 99, 12, 14, 17, 1, 400]);
