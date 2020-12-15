import {connect} from 'react-redux'
import TodoList from './TodoList'


const mapStateToProps =  (state) => ({
    todos:state.todos
})

const mapDispatchToProps = (dispatch)=>({
    onDeleteTodo:dispatch({type:"DELETE_TODO"}),
    onloadTodos:dispatch({type:"LOAD_TODO"})
})


const TodoListContainer = connect(mapStateToProps,mapDispatchToProps)(TodoList)


export default TodoListContainer