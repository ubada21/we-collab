import CompleteTask from "./CompleteTask"


const CompleteTasks = ({ tasks, onDelete}) => {

  return (
    <>
        {tasks?.map((task, index) => (

            <CompleteTask key={index} task = {task} onDelete = {onDelete}/>

        ))}
    </>
  )
}

export default CompleteTasks