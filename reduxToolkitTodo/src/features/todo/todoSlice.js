import { createSlice,nanoid } from "@reduxjs/toolkit";
import { isValidElement } from "react";

 const initialState={
    todos:[{id:1,text:"Hello world",completed:true}]

 }

export const todoSlice=createSlice({
    name:'todo',
    initialState,
    // different from context hear we not only declare a function we write defination also 
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload,
                isTodoEditable:true,
                lastEdited:getTimeAndDate()
               }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        } ,
        updateTodo:(state,action)=>{
           state.todos=state.todos.map((todo)=>(todo.id==action.payload.id?{...todo,text:action.payload.text,isTodoEditable:action.payload.isTodoEditable}:todo))
        },
},
})

function getTimeAndDate(){
    const now = new Date();

const time = now.toLocaleTimeString(); // Get the current time
const date = now.toLocaleDateString(); // Get the current date

   return `last edited at: ${date} ; ${time} `
}

export const {addTodo,removeTodo}=todoSlice.actions

export default todoSlice.reducer