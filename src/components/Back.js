const Back = ({ goBack }) => {
	return (
		<div className="back" onClick={goBack}>
			<i className="fa-solid fa-chevron-left" />
			<h3>Back</h3>
		</div>
	)
}

export default Back