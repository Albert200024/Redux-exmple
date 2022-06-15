export function todosReducer(state = [], action){
    switch (action.type) {
        case "todo-add":
    
        default:
            return state
    }
}

export const iitialTodos = [
    {id:Math.random(), text:"Learn JS", isCompleted:false},
    {id:Math.random(), text:"Learn CSS", isCompleted:false},
    {id:Math.random(), text:"Learn RJ", isCompleted:false},
]