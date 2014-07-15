#!/usr/bin/env node

// This hook installs all your plugins

// Add your plugins to this list (either the identifier, the filesystem location or the URL)
var pluginlist = [
    'org.apache.cordova.device',
    'org.apache.cordova.inappbrowser',
    'org.apache.cordova.statusbar',
    'https://github.com/cmackay/google-analytics-plugin.git',
];


// no need to configure below
var fs = require('fs');
var path = require('path');
var sys = require('sys')
var exec = require('child_process').exec;

function puts(error, stdout, stderr) {
    sys.puts(stdout)
}

pluginlist.forEach(function(plug) {
    exec("cordova plugin add " + plug, puts);
});
