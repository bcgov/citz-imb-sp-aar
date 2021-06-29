const express = require('express');
const cors = require('cors');
const app = express();
const pool = require('./db')

//middleware
app.use(cors());
app.use(express.json());

const corsOptions = {
	origin: 'http://front-end-pern-stack.apps-crc.testing',
	optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}



//ROUTES//

//create a todo

app.post('/todos', async (req, res) => {
	try {
		const { description } = req.body
		const newTodo = await pool.query('INSERT INTO todo (description) VALUES($1) RETURNING *', [description])

		res.json(newTodo.rows[0])
	} catch (error) {
		console.error(error.message)
	}
})

//get all todos

app.get('/todos', cors(corsOptions), async (req, res) => {
	console.log('getting todos...')
	try {
		const allTodos = await pool.query('SELECT * FROM todo')
		console.log(`res`, res)
		res.json(allTodos.rows)
	} catch (error) {
		console.error(error.message)
	}
})

//get a todo
app.get('/todos/:id',cors(corsOptions), async (req, res) => {
	try {
		const { id } = req.params
		const todo = await pool.query('SELECT * FROM todo WHERE todo_id=$1', [id])

		res.json(todo.rows[0])
	} catch (error) {
		console.error(error.message)
	}
})

//update a todo
app.put('/todos/:id',cors(corsOptions), async (req, res) => {
	try {
		const { id } = req.params
		const { description } = req.body

		const updateTodo = await pool.query('UPDATE todo SET description=$1 WHERE todo_id=$2 RETURNING *', [description, id])

		res.json(updateTodo.rows[0])
	} catch (error) {
		console.error(error.message)
	}
})

//delete a todo
app.delete('/todos/:id',cors(corsOptions), async (req, res) => {
	try {
		const { id } = req.params

		const deleteTodo = await pool.query('DELETE FROM todo WHERE todo_id=$1', [id])

		res.json('todo was deleted')
	} catch (error) {
		console.error(error.message)
	}
})

app.listen(8080, () => {
	console.log('server has started on port 8080');
});
