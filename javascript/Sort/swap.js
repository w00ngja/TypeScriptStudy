// ES5
function swap(arr, idx1, idx2) {
  var tmp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = tmp;
}

// ES6
const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]][(arr[idx2], arr[idx1])];
};
