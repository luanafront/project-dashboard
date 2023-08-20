import PropTypes from "prop-types";
import {infoPropType} from "../propsTypes.js";
import {PagePicker} from "../organisms/PagePicker.jsx";
import './styles/NewsSection.sass';
import {PaginatedNewsCard} from "./PaginatedNewsCard.jsx";

export const NewsSection = ({infos, currentPage = 1, pagesAmount, setCurrentPage}) => {

  return (
    <>
      <div className='newsSectionHeader'>
        <p className='newsSectionHeader__title'>Comentários encontrados</p>
        <PagePicker
					pagesAmount={pagesAmount}
					setCurrentPage={setCurrentPage}
					currentPage={currentPage}
				/>
      </div>
      <PaginatedNewsCard
        infos={infos}
        currentPage={currentPage}
        cardsPerPage={4}
      />
      <div className='paginationBotton'>
        <PagePicker
          pagesAmount={pagesAmount}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </>
  )
}

NewsSection.propTypes = {
  infos: PropTypes.arrayOf(infoPropType).isRequired,
  currentPage: PropTypes.number,
  pagesAmount: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired
}
