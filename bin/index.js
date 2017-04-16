#!/usr/bin/env node

var readline = require('readline')
var SnailOptions = require('../bin/options')
var clone = require('./git-clone')
var ora = require('ora')
var chalk = require('chalk')
var inquirer = require('inquirer')
    // var info = {
    //     frontend: "",
    //     designer: "",
    //     backend: "",
    //     date: new Date().toLocaleDateString()
    // }
var questions = require('./question')
var error = chalk.bold.red
var succ = chalk.bold.green
var args = process.argv.slice(2)
var gitUrl = 'https://github.com/SnailGames/snail-fed.git'
var cloneOptions = {}

var SnailOptionsList = Object.keys(SnailOptions)
if (!args[0]) {
    console.log('you can input ' + chalk.yellow('snail -h') + ' to list help information \n')
    process.exit()
}
if (args[0].indexOf('-') !== -1) {
    //检测为参数
    var optionName = args[0].slice(1)
    if (SnailOptionsList.join('').indexOf(optionName) === -1) {
        //参数不合法
        console.log(error('option name is ilegal'))
        process.exit()
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
        process.exit()
    }
} else {
    if (args[0].match(/^[^\\/:*?""<>|,]+$/)) {
        //文件名合法
        var folderName = args[0]
        inquirer.prompt(questions).then(function(answers) {
            answers.date = new Date().toLocaleDateString()
            console.log(JSON.stringify(answers, null, '  '))
            var spinner = ora('building project ' + folderName + '...').start()
            clone(gitUrl, folderName, cloneOptions, function(err) {
                if (err) {
                    spinner.fail(error(err))
                    return ''
                }
                spinner.succeed(succ('build project ' + folderName + ' successfully'))

                // var projectInfo = require('./' + folderName + '/config/project-info.js')
                // console.log(projectInfo)
                process.exit()
            })
        })
    } else {
        console.log(error('folder name is illegal'))
        process.exit()
    }
}