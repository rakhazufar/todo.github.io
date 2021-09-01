import PropTypes from 'prop-types'


function Button  ({color, text, onAdd}) {
    return (
    <button className="btn" onClick={onAdd} style={{backgroundColor:color}}>{text}</button>
    )
}

Button.defaultProps = {
    color: 'black',
    text: 'Button'
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func
}
export default Button
