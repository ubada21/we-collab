import { useEffect, useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import CompleteTasks from "./components/CompleteTasks";
import AddTask from "./components/AddTask";
import axios from 'axios'
import React from "react";




const baseURL = "http://localhost:4000/"

// TODO collapse todo list part with button, and show with same button toggle. button text changes on toggle
function App() {

  const [tasks, setTasks] = useState([])
  const [inProgressTasks, setIPTasks] = useState ([])
  const [completedTasks, setCTasks] = useState ([])

  useEffect(() => {
    axios.get(baseURL + 'api/tasks').then((response) => {
      setTasks(response.data)
    })
    axios.get(baseURL + 'api/progresstasks').then((response) => {
      setIPTasks(response.data)
    })
    axios.get(baseURL + 'api/completedtasks').then((response) => {
      setCTasks(response.data)
    })
    
  }, [])

  


  //Add Task

  const addTask = (task) => {
    
    const newTask = {...task}
    // setTasks([...tasks, newTask])
    axios.post("http://localhost:4000/api/tasks", {
      text: newTask.text, 
    }).then((response) =>{ setTasks([...tasks, response.data]) })
    

  }



  const progressTask = (id) => {

    const newTask = tasks.find(task => task.text === id)

    axios.delete("http://localhost:4000/api/tasks/" + newTask._id).then((response) => {
      setTasks(tasks.filter((task) => task.text !== id))
    })
    

    axios.post("http://localhost:4000/api/progresstasks", {
      text: newTask.text,  
    }).then((response) =>{ setIPTasks([...inProgressTasks, response.data]) })
    
  }

  const completeTask = (id) => {
    const newTask = inProgressTasks.find(task => task.text === id)
    axios.delete(baseURL + 'api/progresstasks/' + newTask._id)
    .then((response) => { setIPTasks(inProgressTasks.filter((task) => task.text !== id))})
    

    axios.post(baseURL + "api/completedtasks", {
       text: newTask.text, 
      }).then((response) => {
        setCTasks([...completedTasks, response.data])
      })

    
  }

  //Delete Task
  const deleteTask = (id) => {
    const newTask = tasks.find((task) => task.text === id)
    axios.delete(baseURL + "api/tasks/" + newTask._id).then((response) => { setTasks(tasks.filter((task) => task.text !== id)) })
    
  }

  const deleteIPTask = (id) => {
    const newTask = inProgressTasks.find((task) => task.text === id)
    axios.delete(baseURL + "api/progresstasks/" + newTask._id).then((response) =>{ setIPTasks(inProgressTasks.filter((task) => task.text !== id)) })
    
  }

  const deleteCTask = (id) => {
    const newTask = completedTasks.find((task) => task.text === id)
    axios.delete(baseURL + "api/completedtasks/" + newTask._id).then((response) =>{ setCTasks(completedTasks.filter((task) => task.text !== id)) })
    
  }
  
  return (
    <div className='row'>
      <div className="container">
        <Header title="To-Do" />
        <Tasks tasks={tasks} onDelete={deleteTask} onProgress={progressTask}/>
        <AddTask onAdd={addTask}/>
      </div>
      <div className='container'>
        <Header title="In Progress"/>
        <Tasks tasks={inProgressTasks} onDelete={deleteIPTask} onProgress={completeTask}/>
      </div>
      <div className='container' style={{justifyContent:'center'}}>
        <Header title="Completed" />
        
        {/* On Complete, show image? sound? something to signal completion. */}
        <CompleteTasks tasks={completedTasks} onDelete={deleteCTask} onProgress={completeTask}/>
      </div>
    </div>
    

  );
}

export default App;
