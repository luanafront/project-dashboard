import * as Icons from '../../assets/icons'
import PropTypes from "prop-types";
import './styles/Icon.sass';

export const Icon = ({icon, width}) => {
	const iconSvg = Icons[icon]

	return (
		<div className='iconBox'>
			<img className='iconBox__icon' src={iconSvg} alt={iconSvg} style={{width: width ? width : ''}}/>
		</div>
	)
}

Icon.propTypes = {
	icon: PropTypes.string,
	width: PropTypes.string
}
