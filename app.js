const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
    describe: "Title of note",
    demand: true,
    alias: 't'
};

const bodyOptions = {
        describe: "Body of note",
        demand: true,
        alias: 'b'
};

var argv = yargs
    .command('add', 'Add new note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'Print all note')
    .command('read', 'Read a note', {
        title: titleOptions
    })
    .command('remove', 'Remove a note', {
        title: titleOptions
    })
    .help()
    .argv;
var command = argv._[0];

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);

    if (note) {
        console.log('Note Created');
        notes.logNote(note);
    } else {
        console.log('Note title already taken');
    }
} else if (command === 'list') {
    var allNote = notes.getAll();
    allNote.forEach((note) => notes.logNote(note));
} else if (command === 'read') {
    var note = notes.getNote(argv.title);

    if (note) {
        console.log("Note found");
        notes.logNote(note);
    } else {
        console.log('Note not found');
    }
} else if (command === 'remove') {
    var removedNote = notes.removeNote(argv.title);
    var message = removedNote ? "Note removed" : "Note not found";
    console.log(message);
} else {
    console.log('Command not found');
}
