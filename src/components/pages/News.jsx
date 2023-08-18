import {InputSearch} from "../molecules/InputSearch.jsx";
import './styles/News.sass';
import {CommentCard} from "../organisms/CommentCard.jsx";
import PropTypes from "prop-types";
import {infoPropType} from "../propsTypes.js";

export const News = ({infos}) => {
	return (
		<article className='pageNews'>
			<header className='pageNews__header newsHeader'>
				<h1 className='newsHeader__title'>Consulta de notícias</h1>
				<h4 className='newsHeader__subTitle'>Subtítulo de apoio</h4>
			</header>
			<main className='pageNews__main newsMain'>
				<InputSearch/>
				<p className='newsMain__commentsTitle'>Comentários encontrados</p>
				<ul className='newsMain__comments commentsGrid'>
					{
						infos.map(info => (
							<li className='commentsGrid__comment' key={info.id}>
								<CommentCard info={info}/>
							</li>
						))
					}
				</ul>
			</main>
		</article>
	)
}

News.propTypes = {
	infos: PropTypes.arrayOf(infoPropType).isRequired
}
