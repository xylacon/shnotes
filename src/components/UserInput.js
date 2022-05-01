const UserInput = ({ handleChange, name, value }) => {
	return (
		<input
			type="text"
			className="user-input"
			name={name}
			onChange={handleChange}
			value={value}
		/>
	)
}

export default UserInput