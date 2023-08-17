import PropTypes from "prop-types";
import './styles/Divisor.sass'

export const Divisor = ({color, className}) => {
	return (
		<div className={`divisor ${className}`} style={{backgroundColor: color}}></div>
	)
}

Divisor.propTypes = {
	color: PropTypes.string.isRequired,
	className: PropTypes.string
}
