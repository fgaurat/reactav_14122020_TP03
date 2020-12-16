export function getAllTodos(){

    return async (dispatch) => {
        const r = await fetch(process.env.REACT_APP_TODO_URL)
        const todos= await r.json()
        dispatch({type:'LOAD_TODOS_OK',todos})
    }

}