import Folder from "./Folder"

const Folders = ({ openFolder, myFolders, activeFolder }) => {
	// map to get all folders under current folder
	// filter to remove all false items from resulting array
	const folders = myFolders.map(folder => {
		return folder.folderId === activeFolder &&
		<Folder
			key={folder.id}
			openFolder={openFolder}
			id={folder.id}
			title={folder.title}
		/>
	})
		.filter(folder => {
			return folder
		})

	if (folders.length > 0) {
		return (
			<div className="folders">
				<h2>Folders</h2>
				<div className="items">
					{folders}
				</div>
			</div>
		)
	} else return null
}

export default Folders