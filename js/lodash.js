function chunk(array, size) {
  let result = [];

  for (let i = 0; i < array.length ; i+=size) {
    result.push(array.slice(i, i + size));
  }

  return result;
}

// console.log(chunk(['a','b','c','d','e','f','g','l','t'], 2));

function compact(array) {
  return array.filter((el) => !!el)
}

// console.log(compact([0, 1, false, 2, '', 3]));

function concat(array, ...rest) {
  let result = array;

  for (let i = 0; i < rest.length ; i++) {
    if (typeof rest[i] === 'object'){
      result = [...result, ...rest[i]];
    } else {
      result = [...result, rest[i]];
    }
  }

  return result;
}

// console.log(concat([1], [2], [[3]], 4));

function difference(arr1, arr2) {
  let cache = {};
  let result = [];

  for (let i = 0; i < arr1.length ; i++) {
    cache[arr1[i]] = true;
  }

  for (let i = 0; i < arr2.length ; i++) {
    if (cache[arr2[i]]){
      delete cache[arr2[i]];
    } else {
      cache[arr2[i]] = true;
    }
  }

  for (let key in cache){
    result.push(key);
  }

  return result;
}

// console.log(difference([1,2,3], [2,4,5]));

function differenceBy(arr1, arr2, iterateFunc) {
  let cache = {};
  let result = [];

  for (let i = 0; i < arr1.length ; i++) {
    cache[iterateFunc(arr1[i])] = true;
  }

  for (let i = 0; i < arr2.length ; i++) {
    if (cache[iterateFunc(arr2[i])]){
      delete cache[iterateFunc(arr2[i])];
    } else {
      cache[iterateFunc(arr2[i])] = true;
    }
  }

  for (let key in cache){
    result.push(key);
  }

  return result;
}

// console.log(differenceBy([1.4,2.2,3.4], [2.5,4.7,5.8], Math.floor));

function drop(arr, number) {
  return arr.slice(number, arr.length)
}

// console.log(drop([1, 2, 3, 4, 5], 2));

function dropRight(arr, number) {
  if (!number){
    number = arr.length
  }

  return arr.slice(0, number)
}

// console.log(dropRight([1, 2, 3, 4, 5], 4));

function dropRightWhile(arr, predicateFn) {
  let result = [];

  for (let i = arr.length - 1; i > 0 ; i--) {
    console.log(arr[i]);
    if (!predicateFn(arr[i])){
      return result;
    }
    result = [arr[i], ...result];
  }

  return result;
}

// console.log(dropRightWhile([
//   { 'user': 'barney',  'active': false },
//   { 'user': 'fred',    'active': false },
//   { 'user': 'pebbles', 'active': true }
// ], function (el) {return !el.active}));

function fill(arr, el, start, end) {
  if (!start) {
    start = 0;
  }

  if (!end) {
    end = arr.length;
  }

  for (let i = start; i < end ; i++) {
    arr[i] = el;
  }

  return arr;
}

// console.log(fill([2, 2, 2, 2], 1, 2, 4));

function findIndex(arr, predicateFn, fromIndex) {
  if (!fromIndex) {
    fromIndex = 0;
  }

  for (let i = fromIndex; i < arr.length ; i++) {
    if (predicateFn(arr[i])) {
      return i;
    }
  }

  return null;
}

// console.log(findIndex([
//   { 'user': 'barney',  'active': false },
//   { 'user': 'fred',    'active': false },
//   { 'user': 'pebbles', 'active': true }
// ], function(el) { return el.user == 'barney'; }))

function findLastIndex(arr, predicateFn, fromIndex) {
  if (!fromIndex) {
    fromIndex = arr.length - 1;
  }

  for (let i = fromIndex; i >= 0 ; i--) {
    console.log(arr[i]);
    if (predicateFn(arr[i])) {
      return i;
    }
  }

  return null;
}

// console.log(findLastIndex([
//   { 'user': 'barney',  'active': false },
//   { 'user': 'fred',    'active': false },
//   { 'user': 'pebbles', 'active': true }
// ], function(el) { return el.user == 'barney'; }));

function flatten(arr) {
  return  arr.flat();
}

// console.log(flatten([1, [2, [3, [4]], 5]]));


function flattenDepth(arr) {
  let result = [];

  arr.forEach(item => Array.isArray(item)
    ? result = [...result, ...flattenDepth(item)]
    : result = [...result, item]);

  return result;
}

// console.log(flattenDepth([1, [2, [3, [4]], 5]]));

function fromPairs(arr) {
  let result = {};

  for (let i = 0; i < arr.length ; i++) {
    result[arr[i][0]] = arr[i][1];
  }

  return result;
}

// console.log(fromPairs([['a', 1], ['b', 2]]))

function heead(arr) {
  return arr[0];
}

// console.log(heead([1, 2, 3]));

function indexOf(arr, value) {
  for (let i = 0; i < arr.length ; i++) {
    if (arr[i] === value) {
      return i;
    }
  }

  return -1;
}

// console.log(indexOf([1, 2, 3, 4], 3));

function initial(arr) {
  return  arr.slice(0, arr.length - 1)
}

// console.log(initial([1, 2, 3, 4]));

function intersection(arr1, arr2) {
  let cashe = {};
  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    cashe[arr1[i]] = true;
  }

  for (let i = 0; i < arr2.length ; i++) {
    if (!cashe[arr2[i]]){
      delete cashe[arr2[i]]
    }
  }

  for (key in cashe) {
    result = [...result, key]
  }

  return result;
}

console.log(intersection([2, 1], [2, 3]));

function union(arr1, arr2) {
  let first = null;
  let second = null;
  let result = [];

  if (arr1.length > arr2.length) {
    first = arr1.sort((a, b) => a - b);
    second = arr2.sort((a, b) => a - b);
  } else {
    first = arr2.sort((a, b) => a - b);
    second = arr1.sort((a, b) => a - b);
  }

  let i = 0;
  let j = 0;

  while (i < first.length && j < second.length) {
    if (first[i] < second[j]){
      result = [...result, first[i]];
      i++;
    }

    if (first[i] > second[j]){
      result = [...result, second[j]];
      j++;
    }

    if (first[i] === second[j]){
      result = [...result, first[i]];
      i++;
      j++;
    }

    if (!second[j]) {
      result = [...result, ...first.slice(i)];
      return result;
    }
  }
}

// console.log(union([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],[1, 2, 3, 8 ,9, 10]));
