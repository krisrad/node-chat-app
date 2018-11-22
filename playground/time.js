// timestamp 0 => jan 1st 1970 00:00:00 am
// -1000 => Dec 31st 1969 11:59:59 pm
// 1000 => jan 1st 1970 00:00:01 am
// timestamp in milliseconds in javascript

// getting timestamp: new Date().getTime()
// var date = new Date();
// console.log(date.getMonth());

var moment = require('moment');
var date = moment();
date.add(100, 'year').subtract(9, 'months');
// console.log(date.format('MMM Do, YYYY'));

// 10:35 am, 6:01 am, 12 hour clock
console.log(date.format('h:mm a'));
date.subtract(5, 'hours');
console.log(date.format('h:mm a'));
date.subtract(30, 'minutes');
console.log(date.format('h:mm a'));

var createdAt = 1234;
date = moment(createdAt);
console.log(date.format('h:mm a'));