import Note from "./Note"

const Notes = ({ openNote, myNotes, activeFolder }) => {
	const notes = myNotes.map(note => {
		// map to get all notes under current folder
		// filter to remove all false items from resulting array
		return note.folderId === activeFolder &&
		<Note
			key={note.id}
			openNote={openNote}
			note={note}
		/>
	})
		.filter(note => {
			return note
		})

	return (
		<div className="items notes">
			{notes.length > 0 ? notes : <div className='no-notes'>No notes found</div>}
		</div>
	)
}

export default Notes