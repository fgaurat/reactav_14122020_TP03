const initialState = {
    todos: []
}

export const reducerTodoList = (state = initialState,action) => {

    switch(action.type){

        case "LOAD_TODOS_OK":
            const newState = {...state,todos : action.todos}
            return newState;
        default:
            return {...state};
    }

    
}