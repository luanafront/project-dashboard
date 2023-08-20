import {NewsCard} from "../organisms/NewsCard.jsx";
import PropTypes from "prop-types";
import {infoPropType} from "../propsTypes.js";

export const PaginatedNewsCard = ({infos, currentPage, cardsPerPage}) => {
	const indexOfLastCard = currentPage * cardsPerPage
	const indexOfFirstCard = indexOfLastCard - cardsPerPage
	const currentCards = infos.slice(indexOfFirstCard, indexOfLastCard)

	return (
		<ul className='newssGrid'>
			{
				currentCards.map(info => (
					<li className='newssGrid__news' key={info.id}>
						<NewsCard info={info}/>
					</li>
				))
			}
		</ul>
	)
}

PaginatedNewsCard.propTypes = {
	infos: PropTypes.arrayOf(infoPropType).isRequired,
	currentPage: PropTypes.number.isRequired,
	cardsPerPage: PropTypes.number.isRequired
}
