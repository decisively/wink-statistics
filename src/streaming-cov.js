//     wink-statistics
//     Fast and Numerically Stable Statistical Analysis Utilities.
//
//     Copyright (C) 2017-18  GRAYPE Systems Private Limited
//
//     This file is part of “wink-statistics”.
//
//     “wink-statistics” is free software: you can redistribute it
//     and/or modify it under the terms of the GNU Affero
//     General Public License as published by the Free
//     Software Foundation, version 3 of the License.
//
//     “wink-statistics” is distributed in the hope that it will
//     be useful, but WITHOUT ANY WARRANTY; without even
//     the implied warranty of MERCHANTABILITY or FITNESS
//     FOR A PARTICULAR PURPOSE.  See the GNU Affero General
//     Public License for more details.
//
//     You should have received a copy of the GNU Affero
//     General Public License along with “wink-statistics”.
//     If not, see <http://www.gnu.org/licenses/>.

// ## streaming

var getValidFD = require( './get-valid-fd.js' );

// ### cov (Covariance)
/**
 *
 * Covariance — **cov** is a higher order function that returns a {@link Stream}
 *
 * The `result()` returns an object containing sample covariance `cov`, along with
 * `meanX`, `meanY` and `size` of data i.e. number of x & y pairs. It also contains
 * population covariance `covp`.
 *
 * @memberof streaming
 * @return {Stream} A stream object to compute values and obtain results
 * @example
 * var covariance = cov();
 * covariance.compute( 10, 80 );
 * covariance.compute( 15, 75 );
 * covariance.compute( 16, 65 );
 * covariance.compute( 18, 50 );
 * covariance.compute( 21, 45 );
 * covariance.compute( 30, 30 );
 * covariance.compute( 36, 18 );
 * covariance.compute( 40, 9 );
 * covariance.result();
 * // returns { size: 8,
 * //   meanX: 23.25,
 * //   meanY: 46.5,
 * //   cov: -275.8571,
 * //   covp: -241.375
 * // }
 */
var covariance = function () {
  var meanX = 0;
  var meanY = 0;
  var covXY = 0;
  var items = 0;
  // Returned!
  var methods = Object.create( null );

  methods.compute = function ( xi, yi ) {
    var dx, dy;
    items += 1;
    dx = xi - meanX;
    dy = yi - meanY;
    meanX += dx / items;
    meanY += dy / items;
    covXY += dx * ( yi - meanY );
    return undefined;
  }; // compute()

  // This returns the sample standard deviation.
  methods.value = function ( fractionDigits ) {
    var fd = getValidFD( fractionDigits );
    return ( items > 1 ) ? +( covXY / ( items - 1 ) ).toFixed( fd ) : 0;
  }; // value()

  // This returns the sample covariance along with host of other statistics.
  methods.result = function ( fractionDigits ) {
    var obj = Object.create( null );
    var fd = getValidFD( fractionDigits );
    var cov = ( items > 1 ) ? ( covXY / ( items - 1 ) ) : 0;
    var covp = ( items ) ? ( covXY / items ) : 0;

    obj.size = items;
    obj.meanX = +meanX.toFixed( fd );
    obj.meanY = +meanY.toFixed( fd );
    // Sample covariance.
    obj.cov = +cov.toFixed( fd );
    // Population covariance.
    obj.covp = +covp.toFixed( fd );

    return obj;
  }; // result()

  methods.reset = function () {
    meanX = 0;
    meanY = 0;
    covXY = 0;
    items = 0;
  }; // reset()

  return methods;
}; // covariance()

module.exports = covariance;
