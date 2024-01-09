import TaskForm from '@/Components/TaskForm'
import TaskList from '@/Components/TaskList'
import React from 'react'

const Task = () => {
  return (
    <div className='max-w-lg mx-auto'>
      <TaskForm/>
      <TaskList/>
    </div>
  )
}

export default Task