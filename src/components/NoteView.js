import Header from "./Header"

const NoteView = ({ handleChange, goBack, active }) => {
	return (
		<div className="note-view">
			<Header
				note={active.note}
				handleChange={handleChange}
				goBack={goBack}
				active={active}
			/>
			<div className="header-space"></div>
			<div className="user-content">
				<textarea
					name="content"
					className="user-input"
					onChange={handleChange}
					value={active.note.content}
				/>
			</div>
		</div>
	)
}

export default NoteView