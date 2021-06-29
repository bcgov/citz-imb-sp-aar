import React, { useEffect, useState } from 'react'
import {EditTodo} from './EditTodo'

const clusterUrl = 'http://back-end-pern-stack.apps-crc.testing'

export const ListTodos = () => {
	const [todos, setTodos] = useState([])

	const getTodos = async () => {
		try {
			const response = await fetch(`${clusterUrl}/todos`)
			const jsonData = await response.json()

			setTodos(jsonData)
		} catch (error) {
			console.error(error.message)
		}
	}

	const deleteTodo = async (todo_id) => {
		try {
			await fetch(`${clusterUrl}/todos/${todo_id}`, {
				method: 'DELETE',
			})
			await getTodos()
		} catch (error) {
			console.error(error.message)
		}
	}

	useEffect(() => {
		getTodos()
	}, [])

	return (
		<table className='table mt-5 text-center'>
			<thead>
				<tr>
					<th>Description</th>
					<th>Edit</th>
					<th>Delete</th>
				</tr>
			</thead>
			<tbody>
				{todos.map((todo) => {
					return (
						<tr key={todo.todo_id}>
							<td>{todo.description}</td>
							<td><EditTodo todo={todo} /></td>
							<td>
								<button
									className='btn btn-danger'
									onClick={() => deleteTodo(todo.todo_id)}>
									Delete
								</button>
							</td>

						</tr>
					)
				})}
			</tbody>
		</table>
	)
}
