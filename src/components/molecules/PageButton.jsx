import {Icon} from "../atoms/Icon.jsx";
import PropTypes from "prop-types";
import './styles/PageButton.sass';

export const PageButton = ({onClick, icon, pageNumber = '', currentPage}) => {
	const iconWidth = '15px'

	const isCurrentPage = pageNumber === currentPage

	return (
		<li className='itemBox'>
			<button
				className={`itemBox__button ${isCurrentPage ? 'itemBox__button--active' : ''}`}
				onClick={onClick}
			>
				{pageNumber}
				<Icon icon={icon} width={iconWidth}/>
			</button>
		</li>
	)
}

PageButton.propTypes = {
	onClick: PropTypes.func.isRequired,
	icon: PropTypes.string,
	pageNumber: PropTypes.string,
	currentPage: PropTypes.number
}
