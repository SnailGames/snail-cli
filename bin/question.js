var questions = [{
        type: 'input',
        name: 'frontend',
        message: 'frontend name:'
    },
    {
        type: 'input',
        name: 'designer',
        message: 'designer name:'
    }, {
        type: 'input',
        name: 'backend',
        message: 'backend name:'
    }, {
        type: "input",
        name: 'date',
        message: 'build date(default ' + new Date().toLocaleDateString() + ')'
    }
]
module.exports = questions