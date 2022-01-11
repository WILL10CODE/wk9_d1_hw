import React, { useState } from 'react'

export default function ToDo() {
    const [todos, setTodos] = useState([
        {text: 'Buy a basketball'},
        {text: 'Buy shoes'},
    ])

    const loopThroughToDo = (todos) => {
        return todos.map(todo => <li>
            <p>{todo.text}</p>
        </li>)
    }
    return (
        <div>
            <ul>
                {loopThroughToDo(todos)}
            </ul>
        </div>
    )

    const [ movies, setMovies ] = useState([
        {text: 'Harry Potter'},
        {text: 'The Matrix'},
        
    ])

    const loopForMovies = (movies) => {
        return movies.map(movie => <li>
            <p>{movie.text}</p>
        </li>)

    }
    return (
        <div>
            <ul>
                {loopForMovies(movies)}
            </ul>
        </div>
    )

};



