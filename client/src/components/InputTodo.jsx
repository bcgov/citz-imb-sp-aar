import React, { useState } from 'react'

const clusterUrl = 'http://back-end-pern-stack.apps-crc.testing'

export const InputTodo = () => {
	const [description, setDescription] = useState('')

	const onSubmitFrom = async (e) => {
		e.preventDefault()

		try {
			const body = { description }
			await fetch(`${clusterUrl}/todos`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(body),
			})

			window.location = "/"
		} catch (error) {
			console.error(error.message)
		}
	}

	return (
		<>
			<h1 className='text-center mt-5'>Pern Todo List</h1>
			<form className='d-flex mt-5' onSubmit={onSubmitFrom}>
				<input
					type='text'
					className='form-control'
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
				<button className='btn btn-success'>Add</button>
			</form>
		</>
	)
}
