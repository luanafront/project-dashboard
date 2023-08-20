import {Text} from "./Text.jsx";
import {PublishedAt} from "../atoms/PublishedAt.jsx";
import './styles/PostInfo.sass'
import PropTypes from "prop-types";

export const PostInfo = ({info}) => {
	const {publishedAt, views, img} = info

	return (
		<div className='postInfoBox'>
			<figure className='postInfoBox__figure postInfoFigure'>
				<img className='postInfoFigure__img' src={img} alt={img}/>
			</figure>
			<div className='postInfoBox__info info'>
				<PublishedAt date={publishedAt}/>
				<Text icon='Eye'>
					{`Visualizações: ${views}`}
				</Text>
			</div>
		</div>
	)
}

PostInfo.propTypes = {
	info: PropTypes.shape({
		publishedAt: PropTypes.string.isRequired,
		views: PropTypes.number.isRequired,
		img: PropTypes.string.isRequired
	}).isRequired
}
