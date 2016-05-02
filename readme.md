# size-from-string [![Build Status](https://travis-ci.org/radiovisual/size-from-string.svg?branch=master)](https://travis-ci.org/radiovisual/size-from-string)

> Get a size object from a string. '100x200' → {width: 100, height: 200}


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

The size, represented as a string `'<width>x<height>'` that you want to convert into an object.   
**Example:** `"100x200"`


## License

MIT © [Michael Wuergler](http://numetriclabs.com)
