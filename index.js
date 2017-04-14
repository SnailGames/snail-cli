#!/usr/bin/env node  
var fs = require("fs")
var clone = require('git-clone')

var options=process.argv.slice(2)
var folderName=options[0]
clone('https://github.com/snail-fed/snail-fed.git',folderName,function(){
    console.log('clone over')
})
