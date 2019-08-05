//Sort words by number inside: 'ads2aa 5qw asd1aa' => 'asd1aa ads2aa 5qw'
function sortWords(words) {
  return words.split(' ')
    .sort((a, b) => a.match(/\d+/) - b.match(/\d+/))
    .join(' ')
}
// console.log(sortWords('ads2aa 5qw asd1aa'));

// Find and collect anagramms: ['adsaa', 'asaad', 'gqw', 'qwg'] => [ [ 'adsaa', 'asaad' ], [ 'gqw', 'qwg' ] ]
function anagrams(wordsArr) {
  var cache = {};
  var result = [];

  for (var i = 0; i < wordsArr.length; i++) {
    let sorted = wordsArr[i].split('').sort().join('');

    if (!cache[sorted]){
      cache[sorted] = []

    }
    cache[sorted].push(wordsArr[i]);
  }

  for (var key in cache){
    result.push(cache[key]);
  }

  return result;
}

// console.log(anagrams(['adsaa', 'asaad', 'gqw', 'qwg']));

function funnyObj(str) {
  return str.split('.').reduceRight((acc, curr) => ({[curr]: acc}), null)
}

// console.log(funnyObj('a.b.c.g'));

//fibonacci
function fibonacci(number) {
  function fibo_count(prev, next, count){
    return count > 0 ? fibo_count(next, prev+next, --count): next;
  }

  return fibo_count(1, 1, number)
}

// console.log(fibonacci(4));

function monotype(arr) {
  var status;
  var prevStatus;
  for (var i = 0; i<arr.length-1; i++) {
    if (arr[i] == arr[i+1]) continue;
    if (prevStatus === undefined) {
      prevStatus = ((arr[i] - arr[i+1]) > 0)
      continue;
    }
    status = (arr[i] - arr[i+1] > 0)
    if (prevStatus == status) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}

//compress string
function compressor(string) {
  let result = '';
  let count = 1;

  for (let i = 0; i < string.length ; i++) {
    if (!result.length) {
      result = result.concat(string[i]);
      continue;
    }

    if (result[result.length - 1] !== string[i]){
      if (count > 1){
        result = result.concat(count);
        count = 1;
      }
      result = result.concat(string[i])
    }else {
      count++;
    }
  }

  return result;
}

// console.log(compressor('aaavvdeeemmmg'));

//Currying
function currying(a) {
  function addFunc(b) {
    a += b;
    return addFunc
  }

  addFunc.valueOf = function () {
    return a;
  }

  return addFunc;
}

// console.log(currying(4)(3)(2)(1));

//Promise.all

function PromiseAll(arr) {
  return arr.map(el => Promise.resolve(el))
}

// ObjectCreate

function ObjectCreate(proto) {
  function F() {}
  F.prototype = proto;
  return new F;
}
