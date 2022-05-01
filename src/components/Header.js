import Options from './Options'
import Search from './Search'
import Back from './Back'
import UserInput from './UserInput'

const Header = ({ addNote, addFolder, goBack, handleChange, active }) => {
	return (
		<header className="header">
			{
				active.view === "Main" &&
				<div className='header-main'>
					{
						active.folder.id ?
						<div className='back-container'>
							<Back goBack={goBack} />
							<h2 id='header-subtitle'>{active.folder.title}</h2>
						</div> :
						<h1 id="header-title">Shnotes</h1>
					}
					<Options addFolder={addFolder} />
				</div>
			}
			{ // Header when viewing specific notes
				active.view === "NoteView" &&
				<div className="header-main">
					<Back goBack={goBack} />
					<UserInput
						handleChange={handleChange}
						name="title"
						value={active.note.title}
					/>
				</div>
			}
			{
				active.view === "Main" &&
				<div className="search-add">
					<Search />
					<i className="fa-solid fa-circle-plus" onClick={addNote} />
				</div>
			}
		</header>
	)
}

export default Header