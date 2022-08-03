import {FaTimes} from 'react-icons/fa'


const CompleteTask = ({task, onDelete}) => {
  return (
    <div className='task'>
        <h3>{task.text}
        
        <FaTimes 
        onClick={() => onDelete(task.text)}
        style={{color:'red', cursor:'pointer', marginLeft:'15px'}}/>
        </h3>
    </div>
  )
}

export default CompleteTask