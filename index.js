
const name = 'umesh';
const greeting = 'good morning';
console.log(greeting + ' ' + name);

let html;
html = "<h1> this is heading</h1>" + "<p> this is my para </p>";
html = html.concat('this', ' str2');
console.log(html);
console.log(html.length);
console.log(html.toLowerCase());
console.log(html.toUpperCase());
console.log(html);

console.log(html[1]);

console.log(html.indexOf('this'));

console.log(html.lastIndexOf('<'));

console.log(html.charAt(5));

console.log(html.endsWith('str2'));

console.log(html.includes('is'));

console.log(html.substring(0,10));

console.log(html.slice(-9));
//ye last ke 9 charector de dega

console.log(html.split(' '));
// jha-jha gap hoga use tor dega

console.log(html.replace('this', 'it'));
// ye pahle wale ko replace karta h


let fruit1 = 'Orange\'';
let fruit2 = 'Apple';
let myHtml = `Hello ${name} <h1> This is "my" heading </h1> <p> you like ${fruit1} and ${fruit2}
               `;
document.body.innerHTML = myHtml;