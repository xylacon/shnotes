import Header from './Header'
import Notes from './Notes'
import Folders from './Folders'

const Main = ({ openNote, openFolder, addNote, addFolder, goBack, notes, folders, active }) => {
	return (
		<div className="main">
			<Header
				addNote={addNote}
				addFolder={addFolder}
				goBack={goBack}
				active={active}
			/>
      <div className="header-space"></div>
			<Folders
				openFolder={openFolder}
				myFolders={folders}
				activeFolder={active.folder.id}
			/>
      <Notes
				openNote={openNote}
				myNotes={notes}
				activeFolder={active.folder.id}
			/>
		</div>
	)
}

export default Main