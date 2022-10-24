console.log(1)
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let result = arr1.concat(arr2);
console.log(result);

console.log('\n');
console.log(2)

let arr3 = [1, 2, 3];
arr3.reverse();
console.log(arr3);

console.log('\n');
console.log(3)

let arr4 = [1, 2, 3];
arr4.push(4, 5, 6);
console.log(arr4);

console.log('\n');

let arr5 = [1, 2, 3];
arr5.unshift(4, 5, 6);
console.log(arr5);

console.log('\n');
console.log(4)

let arr6  = ['js', 'css', 'jq'];
let elem = arr6.shift();
console.log(elem);

console.log('\n');

let arr7 = ['js', 'css', 'jq'];
let del = arr7.pop();

console.log(del);

console.log('\n');
console.log(5)

let arr8 = [1, 2, 3, 4, 5];
let sub = arr8.slice(0, 3);
console.log(sub);

console.log('\n');

let arr9 = [1, 2, 3, 4, 5];
let sub1 = arr9.slice(3);
console.log(sub1);

console.log('\n');
console.log(6)

let arr10 = [1, 2, 3, 4, 5];
arr10.splice(1, 2);
console.log(arr10);

console.log('\n');

let arr11 = [1, 2, 3, 4, 5];
let del1 = arr11.splice(1, 3);
console.log(del1);

console.log('\n');

let arr12 = [1, 2, 3, 4, 5];
arr12.splice(3, 0, 'a', 'b', 'c');
console.log(arr12);

console.log('\n');

let arr13 = [1, 2, 3, 4, 5];
arr13.splice(1, 0, 'a','b');
arr13.splice(6, 0, 'c');
arr13.splice(8, 0, 'e');
console.log(arr13);

console.log('\n');
console.log(7)

let arr14 = [3, 4, 1, 2, 7];
arr14.sort();
console.log(arr14);

console.log('\n');
console.log(8)

var obj = {js: 'test', jq: 'hello', css: 'world'};
console.log(Object.keys(obj));
