#!/usr/bin/env node

var clone = require('./git-clone')
var options = process.argv.slice(2)
var folderName = options[0]
var gitUrl = 'https://github.com/snail-fed/snail-fed.git'
var cloneOptions = {}
clone(gitUrl, folderName, cloneOptions, cloneCb)
var cloneCb = function(err) {
    if (err) {
        console.log(err)
        return ''
    }
    console.log('snail init successfully')

}