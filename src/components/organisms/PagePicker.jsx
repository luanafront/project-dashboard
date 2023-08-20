import PropTypes from "prop-types";
import {PageButton} from "../molecules/PageButton.jsx";
import './styles/PagePicker.sass';

const PreviousButtons = ({setCurrentPage, currentPage}) => {
	const goToPreviousPage = () => {
		if (currentPage === 1) return
		setCurrentPage(prev => prev - 1)
	}

	const goToFirstPage = () => setCurrentPage(1)

	return (
		<>
			<PageButton
				onClick={goToFirstPage}
				icon={'FirstPage'}
			/>
			<PageButton
				onClick={goToPreviousPage}
				icon={'PreviousPage'}
			/>
		</>
	)
}

const NextButtons = ({setCurrentPage, currentPage, pagesAmount}) => {
	const goToNextPage = () => {
		if (currentPage === pagesAmount) return
		setCurrentPage(prev => prev + 1)
	}

	const goToLastPage = () => setCurrentPage(pagesAmount)

	return (
		<>
			<PageButton
				onClick={goToNextPage}
				icon={'NextPage'}
			/>
			<PageButton
				onClick={goToLastPage}
				icon={'LastPage'}
			/>
		</>
	)
}

export const PagePicker = ({pagesAmount, setCurrentPage, currentPage}) => {
	const pages = Array.from({length: pagesAmount}, (_, i) => i + 1)

  return (
    <ul className='pagePicker'>
			<PreviousButtons
				setCurrentPage={setCurrentPage}
				currentPage={currentPage}
			/>
      {
        pages.map((page, index) => (
					<PageButton
						key={index}
						onClick={() => setCurrentPage(page)}
						pageNumber={page}
						currentPage={currentPage}
					/>
        ))
      }
			<NextButtons
				setCurrentPage={setCurrentPage}
				currentPage={currentPage}
				pagesAmount={pagesAmount}
			/>
    </ul>
  )
}

PagePicker.propTypes = {
  pagesAmount: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
	currentPage: PropTypes.number.isRequired
}

PreviousButtons.propTypes = {
	setCurrentPage: PropTypes.func.isRequired,
	currentPage: PropTypes.number.isRequired
}

NextButtons.propTypes = {
	setCurrentPage: PropTypes.func.isRequired,
	currentPage: PropTypes.number.isRequired,
	pagesAmount: PropTypes.number.isRequired
}
