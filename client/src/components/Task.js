import {FaTimes, FaCheck} from 'react-icons/fa'


const Task = ({task, onDelete, onProgress}) => {
  return (
    <div className='task'>
        <h3>{task.text}
        
        <div>
        <FaCheck
          onClick={() => onProgress(task.text)}
          style={{color:'green', cursor:'pointer'}}
        />
        <FaTimes 
        onClick={() => onDelete(task.text)}
        style={{color:'red', cursor:'pointer', marginLeft:'15px'}}/></div>
        </h3>
    </div>
  )
}

export default Task