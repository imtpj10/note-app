const yargs = require('yargs')
const note = require('./notes.js')
// var chalk = require('chalk')





//add
yargs.command({
    command: 'add',
    describe: 'Adding a note!',
    builder: {
        title: {
            describe: 'My title',
            demandOption: true,
            type: 'strings'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
        
    },
    handler(argv){
        note.addNote(argv.title,argv.body)
    }
})
// remove

yargs.command({
    command: 'remove',
    describe: 'Remove a note!',
    builder: {
        title : {
            describe: 'Title of the note to remove',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        note.removeNote(argv.title)
    }
})

//List
yargs.command({
    command: 'list',
    describe: 'List all notes!',
    handler(){
        note.listNotes()
    }
})
//Read
yargs.command({
    command: 'read',
    describe: 'Read a note!',
    builder: {
        title: {
            describe: 'title',
            demandOption : true,
            type: 'string'
        }
    },
    handler(argv){
    note.readNote(argv.title)
    }
})

//ADD, REMOVE, LIST, READ

yargs.parse()
//  console.log(yargs.argv)





























