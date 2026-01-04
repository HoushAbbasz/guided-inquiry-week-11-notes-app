const note = require('./notes.js');
const chalk = require('chalk');
const yargs = require('yargs');

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true, 
            type: 'string'
        }, 
        body:{
            describe: 'Note body',
            demandOption: true, 
            type: 'string'
        }
    },
    handler(argv){
        note.addNote(argv.title, argv.body);
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true, 
            type: 'string'
        }
    },
    handler(argv){
        note.removeNote(argv.title);
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'Lists all the notes',
    handler(){
        note.listNotes(); 
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Reads a note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
       note.readNote(argv.title);  
    }
})

// Create edit command
yargs.command({
    command: 'edit',
    describe: 'edit a note',
           title:{
            describe: 'Note title',
            demandOption: true, 
            type: 'string'
        }, 
        body:{
            describe: 'Note body',
            demandOption: true, 
            type: 'string'
    },
    handler(argv){
       note.editNote(argv.title, argv.body);  
    }
})

// Create remove all command
yargs.command({
    command: 'removeAll',
    describe: 'removes all the notes',
    handler(){
        note.removeAll(); 
    }
})

yargs.argv;