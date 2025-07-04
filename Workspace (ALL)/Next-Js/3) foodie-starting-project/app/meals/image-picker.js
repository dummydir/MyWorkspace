"use client"

import {useRef} from "react"
import classes from "./image-picker.module.css"

export default function ImagePicker({label, name}) {
	const imageInput = useRef(null)

	function handlePickClick() {
		imageInput.current.click()
	}

	return (
		<div className={classes.picker}>
			<label htmlFor="image">{label}</label>
			<div className={classes.controls}>
				<input
					className={classes.input}
					type="file"
					id={name}
					accept="image/png ,image/jpeg, image/jpg"
					name={name}
					ref={imageInput}
				/>
				<button
					className={classes.button}
					type="button"
					onClick={handlePickClick()}>
					Pick an Image
				</button>
			</div>
		</div>
	)
}
