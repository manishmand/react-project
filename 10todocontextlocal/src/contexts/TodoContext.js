import {createContext,useContext} from "react"


export const TodoContext =createContext({
    todos:[
        {
            id:1,
            todo:"Todo msg",
            complete:false,
        }
    ],
    addTodo:(todo)=>{},
    updatedTodo:(id,todo)=>{},
    deleteTOdo:(id)=>{},
    toggleComplete:(id)=>{}
})


export const useTodo =()=>{
    return useContext(TodoContext)
}

export const Todoprovider=TodoContext.Provider