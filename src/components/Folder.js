const Folder = ({ id, title, openFolder }) => {
	return (
		<div className="item folder" onClick={() => openFolder(id)}>
			<h2>{title}</h2>
			<i className="fa-solid fa-chevron-right" />
		</div>
	)
}

export default Folder