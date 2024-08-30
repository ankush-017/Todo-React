import React, { useState } from 'react'
import { addTodo, updateTodo } from '../slice/todoSlice/todoSlice'
import {useDispatch} from 'react-redux'
import { text } from '@fortawesome/fontawesome-svg-core';

function AddTodo() {
    
    const [input,setInput] = useState('');
    const [desc,setDesc] = useState('');
    const dispatch = useDispatch(); 

    const handleDescChange = (e) => {
      setDesc(e.target.value);
    }

    const handleChange = (e) => {
      const newText = e.target.value;
      setInput(newText);
    }

    // const handleDescSubmit = (e) => {
    //   e.preventDefault();
    //   if(desc.trim()!==''){
    //     dispatch(addTodo(desc));
    //     }
    //     setDesc('');
    // }

    const handleSubmit = (e) => {
      e.preventDefault();
      if(input.trim()!=='' || desc.trim()!==''){
      dispatch(addTodo({
        text: input,
        description:desc // goes to action.payload
      }));
      }

      setInput('');
      setDesc('');
    }
  

  return (
<>
    <form onSubmit={handleSubmit}  className="flex flex-col items-center justify-center mt-9">
      <div>
        <input
        type="text"
        className="bg-gray-800 rounded mr-3 border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-[2px] px-3 md:py-1 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Task..."
        value={input}
        onChange={handleChange}
        required
        />
        <button
        type="submit"
        className="text-white bg-[#ed5b1c] border-0 md:py-2 md:px-6 px-2 py-2 focus:outline-none hover:bg-[#0bb302] duration-500 rounded text-lg"
        >
        Add Task
        </button>
      </div>

      <input
          type="text"
          className="bg-gray-800 rounded mt-5 mx-5 border h-9 md:h-10 md:w-[500px] w-full border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-[2px] px-2 md:py-1 transition-colors duration-200 ease-in-out"
          placeholder="Enter task description..."
          value={desc}
          onChange={handleDescChange}
          required
      />
      
    </form> 

</>
  )
}

export default AddTodo
