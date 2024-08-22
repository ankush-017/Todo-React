import React, { useState,useEffect } from "react"
import { Provider } from 'react-redux'
import { store } from '../../store/Store.js'
import AddTodo from "../../components/AddTodo.jsx"
import Todos from "../../components/Todos.jsx"

function Home() {

  return (
    <Provider store={store} >
      <h1 className='text-center text-white font-semibold mt-7 text-[23px]'>Manage Your Task</h1>
      <hr className="border-[2px] border-[#eb5534] mx-11 mt-3" />
      <AddTodo/>
      <Todos/>
    </Provider>
  )
}
export default Home