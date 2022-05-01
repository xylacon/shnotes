import { useState, useEffect } from 'react'

const ContextMenu = () => {
	const [location, setLocation] = useState({
		xPos: "0px",
		yPos: "0px",
		showMenu: false
	})

	useEffect(() => {
		document.addEventListener("click", handleClick)
		document.addEventListener("contextmenu", handleContextMenu)

		return () => {
			document.removeEventListener("click", handleClick)
			document.removeEventListener("contextmenu", handleContextMenu)
		}
	}, [location])

	function handleClick(e) {
		location.showMenu && setLocation(oldLocation => ({
			...oldLocation,
			showMenu: true
		}))
	}

	function handleContextMenu(e) {
		e.preventDefault()
		setLocation({
			xPos: `${e.pageX}px`,
			yPos: `${e.pageY}px`,
			showMenu: true
		})
	}

	return (
		<div>ContextMenu</div>
	)
}

export default ContextMenu