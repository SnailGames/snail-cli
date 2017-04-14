#!/usr/bin/env node

var SnailOptions = require('../bin/options')
var clone = require('./git-clone')
var ora = require('ora')
var chalk = require('chalk')

var error = chalk.bold.red
var succ = chalk.bold.green
var args = process.argv.slice(2)
var gitUrl = 'https://github.com/snail-fed/snail-fed.git'
var cloneOptions = {}

var SnailOptionsList = Object.keys(SnailOptions)
if (args[0].indexOf('-') !== -1) {
    //检测为参数
    var optionName = args[0].slice(1)
    if (SnailOptionsList.join('').indexOf(optionName) === -1) {
        //参数不合法
        console.log(error('option name is ilegal'))
    } else {
        switch (optionName) {
            case 'v':
                console.log('v1.0.0')
                break;
            case 'b':
                console.log('starting a http server')
                break;
            case 'h':
                console.log('help list >> \n')
                for (var optionName in SnailOptions) {
                    console.log('  -%s : %s \n', optionName, SnailOptions[optionName])
                }
                break;
            default:
                break;
        }
    }
} else {
    if (args[0].match(/^[^\\/:*?""<>|,]+$/)) {
        //文件名合法
        var folderName = args[0]
        var spinner = ora('building project ' + folderName + '...').start()

        clone(gitUrl, folderName, cloneOptions, function(err) {
            if (err) {
                spinner.fail(error(err))
                return ''
            }
            spinner.succeed(succ('build project ' + folderName + ' successfully'))
        })
    } else {
        console.log(error('folder name is illegal'))
    }
}