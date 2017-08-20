const ejs = require('ejs');

const people = ['111','222','333'];
const html = ejs.render('<%= people.join(","); %>',{people:people});
console.log(`html${html}`);