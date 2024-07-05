import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoslice';

function Todos() {
    const todos=useSelector(state=>state.todos)
    const dispatch=useDispatch()
    return (
        <>
          <ul className=' list-none'>
         {todos.map((todo)=>(
            <li className=' bg-gray-500 outline-none w-full mt-2 py-2 px-4 text-lg rounded-xl justify-between flex items-center  ' key={todo.id}>
                <div className=' text-white'>{todo.text}</div>
                <button className=' bg-black  p-1  rounded-md hover:bg-stone-300   ' onClick={()=> dispatch(removeTodo(todo.id))}>❌</button>
                
            </li>
             
         ))}
         
       </ul>
        </>
    );
}

export default Todos;