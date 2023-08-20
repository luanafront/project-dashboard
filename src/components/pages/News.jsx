import {InputSearch} from "../molecules/InputSearch.jsx";
import './styles/News.sass';
import PropTypes from "prop-types";
import {infoPropType} from "../propsTypes.js";
import {Footer} from "../templates/Footer.jsx";
import {useState} from "react";
import {CommentSection} from "./CommentSection.jsx";

export const News = ({infos}) => {
	const cardsPerPage = 4
	const pagesAmount = Math.ceil(infos.length / cardsPerPage)

	const [infosState, setInfosState] = useState(infos)
	const [currentPage, setCurrentPage] = useState(1)

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
					<CommentSection
						infos={infosState}
						pagesAmount={pagesAmount}
						currentPage={currentPage}
						setCurrentPage={setCurrentPage}
					/>
				</main>
			</article>
			<Footer/>
		</div>
	)
}

News.propTypes = {
	infos: PropTypes.arrayOf(infoPropType).isRequired
}
