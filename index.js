
const name = 'Sir';
const greeting = 'good morning';
console.log(greeting + ' ' + name);

// let html;
// html = "<h1> this is heading</h1>" + "<p> this is my para </p>";
// html = html.concat('this', ' str2');
// console.log(html);
// console.log(html.length);
// console.log(html.toLowerCase());
// console.log(html.toUpperCase());
// console.log(html);

// console.log(html[1]);

// console.log(html.indexOf('this'));

// console.log(html.lastIndexOf('<'));

// console.log(html.charAt(5));

// console.log(html.endsWith('str2'));

// console.log(html.includes('is'));

// console.log(html.substring(0,10));

// console.log(html.slice(-9));
// //ye last ke 9 charector de dega

// console.log(html.split(' '));
// // jha-jha gap hoga use tor dega

// console.log(html.replace('this', 'it'));
// // ye pahle wale ko replace karta h


let fruit1 = 'Name-';
let fruit2 = 'Umesh Kumar Mehta';
let fruit3 = 'Village-'
let fruit4 = 'Pipra kala'
let fruit5 = 'Post-'
let fruit6 = 'Pipra kala'
let fruit7 = 'P.S-'
let fruit8 = 'Satbarwa'
let fruit9 = 'Dist-'
let fruit10 = 'Palamu'
let fruit11 = "Pin Code-"
let fruit12 = "822126"
let fruit13 = 'Contact No.-'
let fruit14 = '8757769547'
let myHtml = `Hello ${name} <h2> This is my intro </h2>  ${fruit1}  ${fruit2} <br> <br> ${fruit3}  ${fruit4}
<br> <br> ${fruit5}  ${fruit6}
<br> <br> ${fruit7}  ${fruit8}
<br> <br> ${fruit9}  ${fruit10}
<br> <br> ${fruit11}  ${fruit12}
<br> <br> ${fruit13}  ${fruit14}
<br> <br><p>gmail id-umeshkumarmehta306@gmail.com<p>
               `;
document.body.innerHTML = myHtml;