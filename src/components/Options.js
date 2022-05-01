import { useState, useEffect } from "react"

const Options = ({ addFolder }) => {
	const [checkBox, setCheckBox] = useState(false)

	function handleChange(e) {
		const {checked} = e.target
		setCheckBox(checked)
	}

	function handleClick(e) {
		if (e.target.closest("#newFolder")) {
			addFolder()
		} else if (e.target.closest("#dataTheme")) {
			changeTheme(e)
		}
		
		closeBox()
	}

	function closeBox() {
		setCheckBox(false)
	}

	function changeTheme(e) {
		const { id } = e.target

		getCookie("bae")

		document.documentElement.setAttribute("data-theme", id)
	}

	function getCookie(name) {
		const cookieValue = document.cookie
			.split("; ")
			.find(row => row.startsWith(`${name}=`))
		
		if (cookieValue == undefined) {
			console.log("it is false")
		}

			// .find(row => row.startsWith(`${name}=`))
			// .split("=")[1]
	}

	useEffect(() => {
		function checkClick(e) {
			if (!e.target.closest(".options")) {
				closeBox()
			}
		}
		document.addEventListener("click", checkClick)

		return () => {
			document.removeEventListener("click", checkClick)
		}
	}, [checkBox])

	return (
		<div className="options">
			<input
				type="checkbox"
				id="option-toggle"
				checked={checkBox}
				onChange={handleChange}
			/>
			<label className="option-toggle-container" htmlFor="option-toggle">
				<i className="fa-solid fa-ellipsis" />
			</label>
			<ul className="option-items">
				<li id="newFolder" onClick={handleClick}>New Folder</li>
				<ul id="dataTheme" onClick={handleClick}>
					<li id="default">Default</li>
					<li id="light">Light</li>
					<li id="dark">Dark</li>
				</ul>
			</ul>
		</div>
	)
}

export default Options