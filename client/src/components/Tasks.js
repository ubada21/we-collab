import Task from "./Task"


const Tasks = ({ tasks, onDelete, onProgress }) => {

  return (
    <>
        {tasks?.map((task, index) => (

            <Task key={index} task = {task} onDelete = {onDelete} onProgress = {onProgress}/>

        ))}
    </>
  )
}

export default Tasks