const Note = ({ openNote, note }) => {
	const optionsTime = {
		hour: "numeric",
		minute: "numeric",
		hour12: true
	}
	const optionsDate = {
		day: "numeric",
		month: "numeric",
		year: "numeric"
	}

	const noteDate = note.date.toLocaleString('en-US', optionsDate)
	const noteTime = note.date.toLocaleString('en-US', optionsTime)

	const today = new Date()
	const currentDate = today.toLocaleString('en-US', optionsDate)

	return (
		<div className="item note" onClick={() => openNote(note.id)}>
			<h2>{note.title}</h2>
			<div className="note-bottom">
				<p className="date">{currentDate === noteDate ? noteTime : noteDate}</p>
				<p className="content">{note.content}</p>
			</div>
		</div>
	)
}

export default Note