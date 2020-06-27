const url = require('url');

const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=1&status=active');

console.log(myUrl.href);
console.log(myUrl.href.toString());
console.log(myUrl.host);
console.log(myUrl.hostname);
console.log(myUrl.pathname);
console.log(myUrl.search);

myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

myUrl.searchParams.forEach(param => console.log(param));
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));