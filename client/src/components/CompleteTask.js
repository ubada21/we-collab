import {FaTimes} from 'react-icons/fa'


const CompleteTask = ({task, onDelete}) => {
  return (
    <div className='task'>
        <h3>{task.text}</h3>
        <div className='checkRow'>
          <FaTimes 
          onClick={() => onDelete(task.text)}
          style={{color:'red', cursor:'pointer', marginLeft:'15px'}}/>
        </div>
        
        
    </div>
  )
}

export default CompleteTask