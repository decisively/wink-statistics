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

var ws = Object.create( null );

/**
 * Probability
 * @namespace probability
 */
ws.probability = Object.create( null );
// 1. range4CI
ws.probability.range4CI = require( './probability-range-4ci.js' );
// 2. aggregate
ws.probability.aggregate = require( './probability-aggregate.js' );

/**
 * Data
 * @namespace data
 */
ws.data = Object.create( null );
// 1. boxplot
ws.data.boxplot = require( './data-boxplot.js' );
// 2. fiveNumSummary
ws.data.fiveNumSummary = require( './data-five-num-summary.js' );
// 3. histogram
ws.data.histogram = require( './data-histogram.js' );
// 4. mad
ws.data.mad = require( './data-mad.js' );
// 5. max
ws.data.max = require( './data-max.js' );
// 6. mean
ws.data.mean = require( './data-mean.js' );
// 7. median
ws.data.median = require( './data-median.js' );
// 8. min
ws.data.min = require( './data-min.js' );
// 9. percentile
ws.data.percentile = require( './data-percentile.js' );
// 10. stdev
ws.data.stdev = require( './data-stdev.js' );

// Alias TODO
ws.stats = ws.data;

/**
 * Streaming
 * @namespace streaming
 */
ws.streaming = Object.create( null );
// 1. cov
ws.streaming.cov = require( './streaming-cov.js' );
// 2. freqTable
ws.streaming.freqTable = require( './streaming-freq-table.js' );
// 3. max
ws.streaming.max = require( './streaming-max.js' );
// 4. mean
ws.streaming.mean = require( './streaming-mean.js' );
// 5. min
ws.streaming.min = require( './streaming-min.js' );
// 6. slr
ws.streaming.slr = require( './streaming-slr.js' );
ws.streaming.simpleLinearRegression = require( './streaming-slr.js' );
// 7. stdev
ws.streaming.stdev = require( './streaming-stdev.js' );
// 8. sum
ws.streaming.sum = require( './streaming-sum.js' );
// 9. summary
ws.streaming.summary = require( './streaming-summary.js' );

module.exports = ws;
