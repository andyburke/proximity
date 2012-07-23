#!/usr/local/bin/node

var program = require('commander');

program
    .usage('command path [paths...]');

program.on('--help', function(){
    console.log('  Examples:');
    console.log('');
    console.log('    $ hook "./build.sh" ./static/js');
    console.log('');
});

program.parse(process.argv);

if (program.args.length < 2) {
    console.log(program.usage());
    process.exit(0);
}

var command = program.args[0],
    paths = program.args.slice(1),
    hook = require('hook')(command, paths);