import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todos",
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload);
        },

        deleteTask: (state, action) =>{
            return state.filter((task)=> task.id !== action.payload);
        },

        toggleDone: (state, action) =>{
            return state.map((task) => task.id === action.payload? {...task, done: !task.done} : task);
        },
    },
});

export const {addTask, deleteTask, toggleDone} = todoSlice.actions;

export default todoSlice.reducer;