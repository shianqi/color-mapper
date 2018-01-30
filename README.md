# color-mapper

## install

With npm:

```bash
npm install color-mapper
```

## Usage

```javascript
var createLinearGradient = require('../index')

var gradient = createLinearGradient(0, 255);

gradient.addColorStop(1.0, '#1ec38e');
gradient.addColorStop(0.2, '#fed741');
gradient.addColorStop(0.15, '#fea429');
gradient.addColorStop(0.1, '#ef6b2f');
gradient.addColorStop(0.05, '#dc3b2a');
gradient.addColorStop(0.0, '#901334');

console.log(gradient.getHex(24));
console.log(gradient.getHex(255));
console.log(gradient.getHex(0));
console.log(gradient.getHex(26));
```