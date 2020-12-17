var myLogModule = require('./utilities/my-moudles/log.js');
myLogModule.info('Welcome,app started');
console.log('----------------------------');

var myMathOpertion=require('./math.js');
myMathOpertion.add(10,2);
myMathOpertion.divide(11,10);
myMathOpertion.multiply(10,2);
myMathOpertion.subtract(1,100);
