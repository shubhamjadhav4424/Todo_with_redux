import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  taskList:[],
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addToList:(state,actions)=>{
      state.taskList.unshift(actions.payload);
    },
    delete_task:(state,actions)=>{
      state.taskList.splice(actions.payload,1)
    },
    update_task:(state,actions)=>{
      state.taskList.splice(actions.payload.index,actions.payload.deleteNumber,actions.payload.dataUpdating)
    },
  },
})

export const { addToList, delete_task, update_task } = counterSlice.actions

export default counterSlice.reducer