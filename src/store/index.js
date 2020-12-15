const initialState = {
    todos: [{
            "userId": 1,
            "id": 5,
            "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
            "completed": false,
            "dueDate": 1582620058000
        },
        {
            "userId": 1,
            "id": 6,
            "title": "qui ullam ratione quibusdam voluptatem quia omnis",
            "completed": false,
            "dueDate": 1582620058000
        },
        {
            "userId": 1,
            "id": 7,
            "title": "illo expedita consequatur quia in",
            "completed": false,
            "dueDate": 1582620058000
        },
    ]
}

export const reducerTodoList = (state = initialState,action) => {

    const newState = {...state}

    return newState;
}