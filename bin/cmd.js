#!/usr/bin/env node
'use strict';

var filt = require('filt');
var log = console.log;
var f = {};

filt(function (line) {
    var a, t = line.split(/\s+/);
    if (t[0] !== 'COVERAGE' && t[0] !== 'COVERED') {
        return;
    }
    a = t.slice(1).map(JSON.parse);
    if (t[0] === 'COVERAGE') {
        f[a[0]] = [];
        for (var i = 0; i < a[1].length; i++) {
            f[a[0]][i] = 0;
        }
    } else if (t[0] === 'COVERED') {
        f[a[0]][a[1]]++;
    }
});

process.on('exit', function () {
    var lh, lf;
    log('TN:');
    for (var n in f) {
        lh = 0;
        lf = 0;
        log('SF:' + n);
        for (var i = 0; i < f[n].length; i++) {
            if (f[n][i]) {
                lh++;
            }
            lf++;
            log('DA:' + i + ',' + f[n][i]);
        }
        log('LH:' + lh);
        log('LF:' + lf);
    }
    log('end_of_record');
});
