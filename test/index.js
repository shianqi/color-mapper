var createLinearGradient = require('../index')

var gradient = createLinearGradient(0, 255);

gradient.addColorStop(1.0, '#1ec38e');
gradient.addColorStop(0.2, 'rgb(1, 2, 3)');
gradient.addColorStop(0.15, 'rgba(1,222,93,70)');
gradient.addColorStop(0.1, '#ef6');
gradient.addColorStop(0.05, '#dc3b');
gradient.addColorStop(0.0, '#9013342f');

console.log(gradient.getHex(24));
console.log(gradient.getHex(255));
console.log(gradient.getHex(0));
console.log(gradient.getHex(26));

