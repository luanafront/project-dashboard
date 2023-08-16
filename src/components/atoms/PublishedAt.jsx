import PropTypes from "prop-types";
import './styles/PublishedAt.sass'

export const PublishedAt = ({date}) => {
	return (
		<div className='publishedAtBox'>
			<p className='publishedAtBox__text'>Publicado em</p>
			<p className='publishedAtBox__date'>{date}</p>
		</div>
	)
}

PublishedAt.propTypes = {
	date: PropTypes.string.isRequired
}
