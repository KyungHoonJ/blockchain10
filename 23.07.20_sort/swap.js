function swap(arr, idx1, idx2) {
  //   const temp = arr[idx1];
  //   arr[idx1] = arr[idx2];
  //   arr[idx2] = temp;
  // 강수빈 학생 :
  [arr[idx2], arr[idx1]] = [arr[idx1], arr[idx2]];
}

const arr = [8, 16, 88, 18, 343, 0, 100, 28, 90000, 0.5, 7, 13];

const testList = [
  { name: "gsb", time: 116933 },
  { name: "sort", time: 31 },
  { name: "bubble", time: 24975 },
  { name: "insert", time: 9772 },
  { name: "select", time: 6434 },
];
testList.sort((a, b) => a.time - b.time);

// quick
function quickSortHelper(arr, left, right) {
  // 퀵정렬을 도와주는 함수
  const pivotIdx = left++;
  while (left <= right) {
    while (arr[pivotIdx] > arr[left]) left++;
    while (arr[pivotIdx] < arr[right]) right--;
    if (left <= right) {
      const temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
  }
  const temp = arr[pivotIdx];
  arr[pivotIdx] = arr[right];
  arr[right] = temp;
  return right;
}

function quickSort(arr, left, right) {
  // 퀵정렬 함수
  let idx = quickSortHelper(arr, left, right);
  if (left < idx - 1) quickSort(arr, left, idx - 1);
  if (idx + 1 < right) quickSort(arr, idx + 1, right);
  return arr;
}
