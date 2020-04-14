const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const loadData = loadNote()
    const duplicateNote = loadData.filter( (note) => note.title === title )

    debugger 
    
    if (duplicateNote.length === 0) {
        loadData.push({
            title: title,
            body: body
        })
        saveNote(loadData)
        console.log(chalk.red.inverse('Note is added with title: '+title) )
    } else {
        console.log(chalk.red.inverse('Note with title: ' + title+ ' already exist'))
    }
}

const loadNote = (title) => {
    try {
        const jsonData = fs.readFileSync('notes.json')
        const jsonDataString = jsonData.toString()
        const data = JSON.parse(jsonDataString)
        return data
    } catch(e){
        return []
    }
}

const saveNote = (loadData) => fs.writeFileSync('notes.json',JSON.stringify(loadData))

const removeNote = (title) => {
    const loadData = loadNote()
    const filteredData = loadData.find( (note) => note.title != title)
    if (filteredData.length  === loadData.length){
        console.log('No such title exist. title: '+chalk.bold.inverse.red(title))
    } else {
        saveNote(filteredData)
        console.log('Note is removed with title: '+ chalk.bold.inverse(title))
    }
}

const listNotes = () => { 
    const loadData = loadNote()
    console.log(chalk.bold.inverse('Your Notes!'))
    loadData.forEach((note) => {
        console.log(note.title)
    })
}
const readNote= (title)=>{
    const loadData = loadNote()
    const readNote = loadData.find( (note) => note.title === title)
    if (readNote.length != 0){
        console.log(chalk.bold.inverse('Title: '+title))
        console.log(readNote.body)
    }else {
        console.log(chalk.bold.inverse('Note is not found with title: '+title))
    }
    
}

module.exports = {
    addNote : addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}