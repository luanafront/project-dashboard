import {InputSearch} from "../molecules/InputSearch.jsx";
import './styles/News.sass';
import {CommentCard} from "../organisms/CommentCard.jsx";
import PropTypes from "prop-types";
import {infoPropType} from "../propsTypes.js";
import {Footer} from "../templates/Footer.jsx";
import {useState} from "react";

export const News = ({infos}) => {
	const [infosState, setInfosState] = useState(infos)

	const filterInfos = (value) => {
		if (!value) return setInfosState(infos)

		const newInfos = infosState.filter(info => {
			const valueLower = value.toLowerCase()
			const title = info.title.toLowerCase()
			const tags = info.tags.map(tag => tag.tag.toLowerCase())
			const tier = info.tier.tier.toLowerCase()

			const filterBy = [title, ...tags, tier]

			return filterBy.some(filter => filter.includes(valueLower))
		})
		setInfosState(newInfos)
	}


	return (
		<div style={{overflowY: 'scroll', height: '100%'}} >
			<article className='pageNews'>
				<header className='pageNews__header newsHeader'>
					<h1 className='newsHeader__title'>Consulta de notícias</h1>
					<h4 className='newsHeader__subTitle'>Subtítulo de apoio</h4>
				</header>
				<main className='pageNews__main newsMain'>
					<InputSearch onSearchValue={filterInfos} />
					<p className='newsMain__commentsTitle'>Comentários encontrados</p>
					<ul className='newsMain__comments commentsGrid'>
						{
							infosState.map(info => (
								<li className='commentsGrid__comment' key={info.id}>
									<CommentCard info={info}/>
								</li>
							))
						}
					</ul>
				</main>
			</article>
			<Footer/>
		</div>
	)
}

News.propTypes = {
	infos: PropTypes.arrayOf(infoPropType).isRequired
}
