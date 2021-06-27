<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# To Binary String

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Return a string giving the literal bit representation of a [single-precision floating-point number][ieee754].

<section class="installation">

## Installation

```bash
npm install @stdlib/number-float32-base-to-binary-string
```

</section>

<section class="usage">

## Usage

```javascript
var toBinaryStringf = require( '@stdlib/number-float32-base-to-binary-string' );
```

#### toBinaryStringf( x )

Returns a `string` giving the literal bit representation of a [single-precision floating-point number][ieee754].

```javascript
var toFloat32 = require( '@stdlib/number-float64-base-to-float32' );

var str = toBinaryStringf( toFloat32( 4.0 ) );
// returns '01000000100000000000000000000000'

str = toBinaryStringf( toFloat32( 3.141592653589793 ) );
// returns '01000000010010010000111111011011'

str = toBinaryStringf( toFloat32( -1.0e38 ) );
// returns '11111110100101100111011010011001'
```

The function handles [subnormals][subnormals].

```javascript
var toFloat32 = require( '@stdlib/number-float64-base-to-float32' );

str = toBinaryStringf( toFloat32( -3.14e-39 ) );
// returns '10000000001000100011000100001011'

str = toBinaryStringf( toFloat32( 1.4e-45 ) );
// returns '00000000000000000000000000000001'
```

The function handles special values.

```javascript
var PINF = require( '@stdlib/constants-float32-pinf' );
var NINF = require( '@stdlib/constants-float32-ninf' );

str = toBinaryStringf( 0.0 );
// returns '00000000000000000000000000000000'

str = toBinaryStringf( -0.0 );
// returns '10000000000000000000000000000000'

str = toBinaryStringf( NaN );
// returns '01111111110000000000000000000000'

str = toBinaryStringf( PINF );
// returns '01111111100000000000000000000000'

str = toBinaryStringf( NINF );
// returns '11111111100000000000000000000000'
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var round = require( '@stdlib/math-base-special-round' );
var pow = require( '@stdlib/math-base-special-pow' );
var float64ToFloat32 = require( '@stdlib/number-float64-base-to-float32' );
var toBinaryStringf = require( '@stdlib/number-float32-base-to-binary-string' );

var frac;
var sign;
var exp;
var b;
var x;
var i;

// Convert random numbers to literal bit representations...
for ( i = 0; i < 100; i++ ) {
    if ( randu() < 0.5 ) {
        sign = -1.0;
    } else {
        sign = 1.0;
    }
    frac = randu() * 10.0;
    exp = round( randu()*100.0 );
    if ( randu() < 0.5 ) {
        exp = -exp;
    }
    x = sign * frac * pow( 2.0, exp );
    x = float64ToFloat32( x );
    b = toBinaryStringf( x );
    console.log( b );
}
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/number-float32-base-to-binary-string.svg
[npm-url]: https://npmjs.org/package/@stdlib/number-float32-base-to-binary-string

[test-image]: https://github.com/stdlib-js/number-float32-base-to-binary-string/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/number-float32-base-to-binary-string/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/number-float32-base-to-binary-string/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/number-float32-base-to-binary-string?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/number-float32-base-to-binary-string.svg
[dependencies-url]: https://david-dm.org/stdlib-js/number-float32-base-to-binary-string/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/number-float32-base-to-binary-string/main/LICENSE

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-2008

[subnormals]: https://en.wikipedia.org/wiki/Denormal_number

</section>

<!-- /.links -->
