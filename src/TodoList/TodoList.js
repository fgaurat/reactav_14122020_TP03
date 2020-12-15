import React from 'react'

export default function TodoList({todos}) {
    return (
        <>
            <table className="table">
                <tbody>
                    {todos.map((todo) =>
                        <TodoRow todo={todo} key={todo.id} ></TodoRow>
                    )}
                </tbody>
            </table>
        </>
    )
}

function TodoRow({todo}) {

    return (
        <tr>
            <td>{todo.userId}</td>
            <td>{todo.id}</td>
            <td>{todo.title}</td>
            <td>{todo.dueDate}</td>
            <td>{todo.completed?'true':'false'}</td>
        </tr>
    );
}