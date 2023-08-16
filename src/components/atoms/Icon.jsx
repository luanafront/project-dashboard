import * as Icons from '../../assets/icons'
import PropTypes from "prop-types";
import './styles/Icon.sass';

export const Icon = ({icon}) => {
	const iconSvg = Icons[icon]

	return (
		<div className='iconBox'>
			<img className='iconBox__icon' src={iconSvg} alt={iconSvg}/>
		</div>
	)
}

Icon.propTypes = {
	icon: PropTypes.string.isRequired
}
