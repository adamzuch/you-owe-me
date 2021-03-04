export function replaceObjectInArray(arr, i, obj) {
  return Array.prototype.concat(
    arr.slice(0, i),
    [obj],
    arr.slice(i + 1)
  );
}

export function findObjectInArray(arr, prop, value) {
  const i = arr.findIndex(item => item[prop] === value);
  return [ arr[i], i ];
}

export function deleteObjectInArray(arr, i) {
  return Array.prototype.concat(
    arr.slice(0, i),
    arr.slice(i + 1)
  )
}
