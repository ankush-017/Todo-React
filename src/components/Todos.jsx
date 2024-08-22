import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../slice/todoSlice/todoSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import {faSave} from '@fortawesome/free-solid-svg-icons';
import {faTimes} from '@fortawesome/free-solid-svg-icons';


function Todos() {
    const todos = useSelector((state) => state.todos);

    const dispatch = useDispatch()

    const [editingTodoId, setEditingTodoId] = useState(null);
    const [editText, setEditText] = useState('');
    const [editDescription, setEditDescription] = useState('');

     // Start editing a todo
     const startEditing = (todo) => {
      setEditingTodoId(todo.id);
      setEditText(todo.text);
      setEditDescription(todo.description); 
     };

  // Handle changes in the input field
      const handleEditChange = (e) => {
      setEditText(e.target.value);
      };
      const handleEditDescriptionChange = (e) => {
        setEditDescription(e.target.value);
      };

  // Save the edited todo
      const saveEdit = () => {
        console.log('Saving edit for ID:', editingTodoId, 'with text:', editText);
      if (editingTodoId) {
          dispatch(updateTodo({
              id: editingTodoId,
              text: editText,
              description: editDescription, 
          }));
          console.log('Saved');
          
          cancelEdit(); // Clear editing state after saving
      }
      };

  // Cancel editing
      const cancelEdit = () => {
      setEditingTodoId(null);
      setEditText('');
      setEditDescription('');
      };

      // useEffect(() => {
      //   const todos = JSON.parse(localStorage.getItem("todos"))
    
      //   if (todos && todos.length > 0) {
      //     setTodos(todos)
      //   }
      // }, [])
    
      // useEffect(() => {
      //   localStorage.setItem("todos", JSON.stringify(todos))
      // }, [todos])

  return (
    <>
    <ul className="list-none mt-11 md:mx-[50px] mx-3 ">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-[#103441] px-3 py-2 rounded"
            key={todo.id}
          >
            <div className='text-white font-semibold text-[18px]'>
              {editingTodoId === todo.id ? (
                   <>
                   <input
                       type="text"
                       value={editText}
                       onChange={handleEditChange}
                       className="bg-gray-800 w-[260px] rounded border outline-none border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base text-gray-100 py-[2px] px-3 md:py-1 leading-8 transition-colors duration-200 ease-in-out"
                   />
                   <input
                       type="text"
                       value={editDescription}
                       onChange={handleEditDescriptionChange}
                       className="bg-gray-800 w-[260px] mt-2 rounded border outline-none border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base text-gray-100 py-[2px] px-3 md:py-1 leading-8 transition-colors duration-200 ease-in-out"
                   />
               </>
                 ) : (
                  <>
                      <div>
                        <h1>{todo.text}</h1>
                        <p className="text-[#ed5b1c] text-sm">{todo.description}</p>
                      </div>
                  </>
              )}
            </div>
            <div className='button overflow-x-hidden flex flex-wrap md:gap-5 gap-1'>
            {editingTodoId === todo.id ? (
                                <>
                                    <button
                                        onClick={saveEdit}
                                        className='text-white bg-green-500 hover:bg-green-600 md:py-2 md:px-4 py-1 px-3 rounded-md text-[16px] md:text-xl '
                                    >
                                        <FontAwesomeIcon icon={faSave} />
                                    </button>
                                    <button
                                        onClick={cancelEdit}
                                        className='text-white bg-gray-500 hover:bg-gray-600 py-1 px-3 md:py-2 md:px-4 rounded-md text-[16px] md:text-xl'
                                    >
                                        <FontAwesomeIcon icon={faTimes} />
                                    </button>
                                </>
                            ) : (
                                <button
                                    onClick={() => startEditing(todo)}
                                    className='text-white hover:bg-[#999f1c] hover:text-black bg-[#b0a315] py-1 px-3 rounded-md md:py-2 md:px-4 md:text-xl text-[16px] '
                                >
                                    <FontAwesomeIcon icon={faPenToSquare} />
                                </button>
                            )}
            {/* <button onClick={() => {
              console.log('Dispatching updateTodo with:', { id: todo.id, text: todo.text });
              dispatch(updateTodo({ id: todo.id, text: todo.text }));
            }} className='text-white  hover:bg-red-600 bg-red-500 py-2 px-4 rounded-md text-xl'>
                <FontAwesomeIcon icon={faPenToSquare} />  
            </button> */}
            <button
             onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 hover:text-black border-0 md:py-2 md:px-4 py-1 px-2 focus:outline-none hover:bg-red-600 rounded text-[16px] md:text-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos