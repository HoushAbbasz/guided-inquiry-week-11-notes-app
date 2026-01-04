const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
    const notes = loadNotes(); 
    const dupNote = notes.find((note)=> note.title === title);

    /* the keyword below will stop here if I do node inspect <node command> and do nothing if I run it normally
        go to chrome://inspect you can click inspect on the webpage to view things like variables and functions etc on a GUI*/
    // debugger 
    if(!dupNote){
        notes.push({
        title: title,
        body: body
        });
        console.log('A note was added!')
        saveNotes(notes); 
    } else {
        console.log('A not with this title already exists!');
    }

}

const loadNotes = () => {

    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);
    } catch(e){
        return []; 
    }
    
}

const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJson);
}

const removeNote = (title) => {
    const notes = loadNotes();

    const notesToKeep = notes.filter(note => note.title !== title);

    if (notes.length > notesToKeep.length) {
        saveNotes(notesToKeep);
        console.log(chalk.green.inverse(`Note titled "${title}" was removed!`));
    } else {
        console.log(chalk.red.inverse('No note found!'));
    }
};

const listNotes = () => {
    const notes = loadNotes();
    notes.forEach( (note)=>{
        console.log(note.title);
    })
}

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((note)=> note.title === title); 

    if (note){
        console.log(chalk.inverse(note.title));
        console.log(note.body);
    } else {
        console.log(chalk.red.inverse('Note not found!')); 
    }
}

const editNote = (title, newBody) => {
    const notes = loadNotes();
    const note = notes.find(note => note.title === title);

    if (note) {
        note.body = newBody;   
        saveNotes(notes);      
        console.log(chalk.green.inverse(`Note "${title}" was updated!`));
    } else {
        console.log(chalk.red.inverse('Note not found!'));
    }
};

const removeAll = () => {
    saveNotes([]);
    console.log(chalk.red.inverse('All notes have been removed!'));
};


module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote,
    editNote: editNote,
    removeAll: removeAll
    };

