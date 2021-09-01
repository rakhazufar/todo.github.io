// import PropTypes from 'prop-types'
import Button from './Button'

function Header({title, onAdd, button}) {
    return (
        <header className="header">
            <h1>{title}</h1>
            {/* reuseble button */}
            <Button color='blue' text={button ? "Close" : "Add"} onAdd={onAdd} />
        </header>
    )
}

//default props
Header.defaultProps = {
    title: "Task Manager"
}

//make inline style
/*const headingStyle = {
    color: 'blue',
    backgroundColor: 'grey'
}*/

//PropTypes, make title must a string
/*Header.propTypes = {
    title: PropTypes.string,
}*/

export default Header
