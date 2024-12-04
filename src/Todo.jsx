import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToList,delete_task,update_task } from './counterSlice';

function Todo() {
    let [task,setTask]=useState([]);
    let [update, setUpdate]= useState();
    let [wantToUpdate, setWantToUpdate]= useState(false);
    
    let dispatch=useDispatch();
    let myTaskList=useSelector((state)=>state.counter.taskList);   

    function onChange_handler(e){
        setTask(e.target.value);
    }

    function onChange_update(e){
        setUpdate(e.target.value);
    }

    function onClickAdd(){
        dispatch(addToList(task));
        setTask('');
    }

    function onClick_update(){
        if(wantToUpdate==true){
            setWantToUpdate(false)
        }
        else(
            setWantToUpdate(true)
        )
    }

    function update_final(ind){
        let obj={
            "index":ind,
            "deleteNumber":1,
            "dataUpdating":update,
        }

        dispatch(update_task(obj))
        setClose(ind)
    }


    function onClick_delete(ind){
        dispatch(delete_task(ind))
    }
  return (
    <>
    <div className='flex justify-center'>
        <div className='flex items-center h-[100px] gap-[20px]'>
            <div><input className='border-[1px] border-[black]' type="text" value={task} onChange={(e)=>onChange_handler(e)} placeholder='Enter Your Task' name="Todo" id="task" /></div>
            <div><button onClick={()=>onClickAdd()}>Add</button></div>
        </div>
    </div>

    <div className='flex justify-center'>
        <div>
            {
                myTaskList.map((ele,ind)=>{
                    return(
                        <div key={ind} className='flex justify-center gap-[20px]'>
                            <div>{ele}</div>
                            <div><button onClick={()=>onClick_update(ind)}>Update</button></div>
                            {
                                wantToUpdate==ind?
                                <>
                                <div><input className='border-[1px] border-[black]' type="text" value={update} onChange={(e)=>onChange_update(e)} name="update" id="update" /></div><div onClick={()=>update_final(ind)}>Done</div>
                                </>
                                :
                                <>
                                </>
                            }
                            <div><button onClick={()=>onClick_delete(ind)}>Delete</button></div>
                        </div>
                    )
                })
            }
        </div>
    </div>
    </>
  )
}

export default Todo