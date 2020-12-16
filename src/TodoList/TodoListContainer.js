import {connect} from 'react-redux'
import { getAllTodos } from '../actions/todos.actions'
import TodoList from './TodoList'


const mapStateToProps =  (state) => ({
    todos:state.todoList.todos
})

const mapDispatchToProps = (dispatch)=>({
    onDeleteTodo: () => dispatch({type:"DELETE_TODO"}),
    loadTodos: () => dispatch(getAllTodos())
})


const TodoListContainer = connect(mapStateToProps,mapDispatchToProps)(TodoList)


export default TodoListContainer