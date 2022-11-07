/*let a = 5;
let b = 10;
let c = a + b;

if (c > 5) {
    console.log("i am a new programmer");
} else{
    console.log("i am only a newbie guyss")
}
for (let i = 0; i < a; i++) {
    console.log('i am here');
}

let swap = 0;
let j = 0;
let k = [4, 2, 5, 1, 3];

for (let i = 0; i <= k.length; i++) {

    if (k[i] > swap) {
        swap = k[i];
    }

}

console.log('the highest number is ', swap);

console.log(typeof (Boolean(swap)));
alert("Hello World");*/

/*let a = "2";
let b = 2;
console.log(+a + +b);*/

//Note: Strict equality: a === b will return false because of the datatype.. they are not eqaul. i.e String and Number.
//equality: a==b will return True. irrespective of their data types.  since they are both  have thesame value 2 and 2.

/*let score = 100;
switch (true) {
    case score > 100:
        console.log('more that 100');
        break;
    case score >= 70
        : 
        console.log('Grade A');
        break;
    case score >= 60: 
        console.log('Grade B');
        break;
    case score >= 50: 
        console.log('Grade C');
        break;
    case score >= 40:
        console.log("Pass");
        break;
    case score >= 0:
        console.log('Failed');
        break;
    default: console.log("score not correct");
        break;
}*/

/*
let firstname = 'chrisi';
console.log(firstname.length);
console.log(firstname[0]);
console.log(firstname.toUpperCase());
console.log(firstname.toLowerCase());
console.log(firstname.indexOf('i'));
console.log(firstname.lastIndexOf('i'));
console.log(firstname.slice(1,4));
*/

/*let arr = { name: "chris", class: "pry 2" };
console.log(arr.name);

let arr2 = [1, 2, 3, 4];
let arr3;
arr3 = arr2.shift();
console.log(arr3);
console.log(arr2);

let a = 2;
arr2.push(a);
console.log(arr2);

arr2.unshift(a);
console.log(arr2);

*//*arr3 = arr2.push();
console.log(arr3);
*/

let arr = [1, 2, 3, 4, 5, 6];
let mult = [];
for (let i = 0; i < arr.length; i++) {
    let c = arr[i] * 2;
    mult.push(c);
}

console.log(mult);
console.log(arr.length);