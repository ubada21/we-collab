import PropTypes from 'prop-types'

const Button = ({color, text}) => {

    const onClick = (e) => {
        console.log(e)
    }

  return (
    <button onClick = {onClick} className='btn' style={{backgroundColor: color}}>{text}</button>
  )
}

Button.defaultProps = {
    color: 'steelblue',
}

Button.propTypes = {
    color: PropTypes.string.isRequired,
}
export default Button