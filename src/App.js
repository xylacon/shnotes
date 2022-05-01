import { useState, useEffect, useCallback } from 'react'
import debounce from 'lodash.debounce'
import './App.css'
import Main from './components/Main'
import NoteView from './components/NoteView'

function App() {
  const [notes, setNotes] = useState([])
  const [folders, setFolders] = useState([])
  const [active, setActive] = useState({
    view: "Main",
    folder: {id: ""},
    note: {}
  })

  useEffect(() => {
    const height = document.querySelector(".header").clientHeight
    document.querySelector(".header-space").style.height = `${height}px`
    
    // used with handleChange()
    // must be here to work properly
    active.note.id && updateNotes()
    return () => {updateNotes.cancel()}
  }, [active])

  function openNote(id) {
    notes.find(note => {
      id === note.id && setActive(oldActive => ({
        ...oldActive,
        view: "NoteView",
        note: {...note}
      }))
    })
  }

  function openFolder(id) {
    if (!id) {
      setActive({
        view: "Main",
        folder: {id: ""},
        note: {}
      })
    } else {
      folders.find(folder => {
        id === folder.id && setActive(oldActive => ({
          ...oldActive,
          view: "Main",
          folder: {...folder}
        }))
      })
    }
  }

  function addNote() {
    const date = new Date()
    setNotes(oldNotes => [...oldNotes, {
      id: String(oldNotes.length + String(date.getTime())),
      folderId: active.folder.id,
      date: date,
      title: oldNotes.length === 0 ? "New Note" : `New Note ${oldNotes.length}`,
      content: ""
    }])
  }

  function addFolder() {
    const date = new Date()
    setFolders(oldFolders => [...oldFolders, {
      id: String(oldFolders.length + String(date.getTime())),
      folderId: active.folder.id,
      title: oldFolders.length === 0 ? "New Folder" : `New Folder ${oldFolders.length}`
    }])
  }

  // update notes State using active.note State
  const updateNotes = useCallback(debounce(() => {
    setNotes(notes.map(note => {
      return note.id === active.note.id ? {...active.note} : note
    }))
  }, 500), [active.note])

  // apply changes to inputs to active State
  function handleChange(e) {
    const {name, value} = e.target

    setActive(oldActive => ({
      ...oldActive,
      note: {...oldActive.note, [name]: value}
    }))
  }

  function goBack() {
    if (active.view === "NoteView") {
      setActive(oldActive => ({
        ...oldActive,
        view: "Main",
        note: {}
      }))
    } else {
      openFolder(active.folder.folderId)
    }
  }

  return (
    <div className="App">
      {
        active.view === "Main" &&
        <Main
          openNote={openNote}
          openFolder={openFolder}
          addNote={addNote}
          addFolder={addFolder}
          goBack={goBack}
          notes={notes}
          folders={folders}
          active={active}
        />
      }
      
      {
        active.view === "NoteView" &&
        <NoteView
          handleChange={handleChange}
          goBack={goBack}
          active={active}
        />
      }
    </div>
  )
}

export default App