# size-from-string [![Build Status](https://travis-ci.org/radiovisual/size-from-string.svg?branch=master)](https://travis-ci.org/radiovisual/size-from-string)

> Get a size object from a string. '45x95' → {width: 45, height: 95}


## Install

```
$ npm install --save size-from-string
```


## Usage

```js
const sizeFromString = require('size-from-string');

sizeFromString('100x200');
//=> {width: 100, height: 200}
```


## API

### sizeFromString(input)

Returns an object with width and height properties.

#### input

*Required*  
Type: `string`

The size, represented as a string `'<width>x<height>'` that you want to convert into an object. You can pass in integers or floats.
If you pass in a single value, it will automatically square that value for you.

##### Examples: 

- `"100"` → `{width: 100, height: 100}`
- `"100x200"` → `{width: 100, height: 200}`
- `"-100 x -200"` → `{width: -100, height: -200}`
- `"-100.01 x -200.05"` → `{width: -100.01, height: -100.05}`



## License

MIT © [Michael Wuergler](http://numetriclabs.com)
