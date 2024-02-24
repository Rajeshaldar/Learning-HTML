const name = "javascript";
const file = 4;

//old 
const newString = name + file;
console.log(newString)

console.log(`hello my name is ${name},file: ${file}`) //best practice

const name1 = new String("javascript"); 
console.log("the lenght is: ",name1.length);
console.log(name1.toUpperCase());
console.log(name1.toLowerCase());
console.log(name1.indexOf("s"));
console.log(name1.__proto__);

const url = "https://google.com/rajesh%20haldar";
console.log(url.replace("%20", "-"));

const url1 = "https://google.com/rajesh%20haldar";
console.log(url.split("/"));

const url2 = "https://google.com/rajesh%20haldar";
console.log(url.includes("com"));
console.log(url.includes("30"));

const url3 = "https://google.com/rajesh%20haldar";
console.log(url.slice(0,4));

const url4 = "https://google.com/rajesh%20haldar";
console.log(url.substring(0,4));
