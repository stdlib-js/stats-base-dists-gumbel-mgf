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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Moment-Generating Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Gumbel][gumbel-distribution] distribution moment-generating function (MGF).

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [moment-generating function][mgf] for a [Gumbel][gumbel-distribution] random variable is

<!-- <equation class="equation" label="eq:gumbel_mgf" align="center" raw="M_X(t) := \mathbb{E}\!\left[e^{tX}\right] = \Gamma(1+\beta\,t)\, e^{\mu\,t}" alt="Moment-generating function (MGF) for a Gumbel distribution."> -->

```math
M_X(t) := \mathbb{E}\!\left[e^{tX}\right] = \Gamma(1+\beta\,t)\, e^{\mu\,t}
```

<!-- <div class="equation" align="center" data-raw-text="M_X(t) := \mathbb{E}\!\left[e^{tX}\right] = \Gamma(1+\beta\,t)\, e^{\mu\,t}" data-equation="eq:gumbel_mgf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/gumbel/mgf/docs/img/equation_gumbel_mgf.svg" alt="Moment-generating function (MGF) for a Gumbel distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `mu` is the location parameter and `beta > 0` is the scale parameter.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-gumbel-mgf
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var mgf = require( '@stdlib/stats-base-dists-gumbel-mgf' );
```

#### mgf( t, mu, beta )

Evaluates the [moment-generating function][mgf] (MGF) for a [Gumbel][gumbel-distribution] distribution with parameters `mu` (location parameter) and `beta > 0` (scale parameter).

```javascript
var y = mgf( -1.0, 0.0, 3.0 );
// returns 6.0

y = mgf( 0.1, 0.0, 3.0 );
// returns ~1.298

y = mgf( 0.0, 0.0, 1.0 );
// returns 1.0
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = mgf( NaN, 0.0, 1.0 );
// returns NaN

y = mgf( 0.0, NaN, 1.0 );
// returns NaN

y = mgf( 0.0, 0.0, NaN );
// returns NaN
```

If provided `t >= 1/beta`, the function returns `NaN`.

```javascript
var y = mgf( 0.8, 0.0, 2.0 );
// returns NaN
```

If provided `beta <= 0`, the function returns `NaN`.

```javascript
var y = mgf( 0.5, 0.0, -1.0 );
// returns NaN

y = mgf( 0.5, 0.0, 0.0 );
// returns NaN
```

#### mgf.factory( mu, beta )

Returns a function for evaluating the [moment-generating function][mgf] of a [Gumbel][gumbel-distribution] distribution with parameters `mu` (location parameter) and `beta > 0` (scale parameter).

```javascript
var myMGF = mgf.factory( 0.0, 2.0 );
var y = myMGF( 0.2 );
// returns ~1.489

y = myMGF( -1.0 );
// returns 2.0
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var mgf = require( '@stdlib/stats-base-dists-gumbel-mgf' );

var beta;
var mu;
var t;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    t = randu();
    mu = (randu() * 10.0) - 5.0;
    beta = randu() * 20.0;
    y = mgf( t, mu, beta );
    console.log( 't: %d, µ: %d, β: %d, M_X(t;µ,β): %d', t.toFixed( 4 ), mu.toFixed( 4 ), beta.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/stats/base/dists/gumbel/mgf.h"
```

#### stdlib_base_dists_gumbel_mgf( t, mu, beta )

Evaluates the [moment-generating function][mgf] (MGF) for a [Gumbel][gumbel-distribution] distribution with parameters `mu` (location parameter) and `beta > 0` (scale parameter).

```c
double out = stdlib_base_dists_gumbel_mgf( -1.0, 0.0, 3.0 );
// returns 6.0
```

The function accepts the following arguments:

-   **t**: `[in] double` input value.
-   **mu**: `[in] double` location parameter.
-   **beta**: `[in] double` scale parameter.

```c
double stdlib_base_dists_gumbel_mgf( const double t, const double mu, const double beta );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/stats/base/dists/gumbel/mgf.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double beta;
    double mu;
    double t;
    double y;
    int i;

    for ( i = 0; i < 25; i++ ) {
        t = random_uniform( 0.0, 1.0 );
        mu = random_uniform( 0.0, 10.0 );
        beta = random_uniform( 0.0, 10.0 );
        y = stdlib_base_dists_gumbel_mgf( t, mu, beta );
        printf( "t: %lf, µ: %lf, β: %lf, M_X(t;µ,β): %lf\n", t, mu, beta, y );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


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

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-gumbel-mgf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-gumbel-mgf

[test-image]: https://github.com/stdlib-js/stats-base-dists-gumbel-mgf/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-gumbel-mgf/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-gumbel-mgf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-gumbel-mgf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-gumbel-mgf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-gumbel-mgf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-gumbel-mgf/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-dists-gumbel-mgf/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-dists-gumbel-mgf/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-dists-gumbel-mgf/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-dists-gumbel-mgf/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-dists-gumbel-mgf/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-dists-gumbel-mgf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-gumbel-mgf/main/LICENSE

[gumbel-distribution]: https://en.wikipedia.org/wiki/Gumbel_distribution

[mgf]: https://en.wikipedia.org/wiki/Moment-generating_function

</section>

<!-- /.links -->
