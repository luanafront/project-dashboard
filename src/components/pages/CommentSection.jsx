import {CommentCard} from "../organisms/CommentCard.jsx";
import PropTypes from "prop-types";
import {infoPropType} from "../propsTypes.js";
import {PagePicker} from "../organisms/PagePicker.jsx";
import './styles/CommentSection.sass';

export const CommentSection = ({infos, currentPage = 1, pagesAmount, setCurrentPage}) => {
  const cardsPerPage = 4
  const indexOfLastCard = currentPage * cardsPerPage
  const indexOfFirstCard = indexOfLastCard - cardsPerPage
  const currentCards = infos.slice(indexOfFirstCard, indexOfLastCard)

  return (
    <>
      <div className='commentSectionHeader'>
        <p className='commentSectionHeader__title'>Comentários encontrados</p>
        <PagePicker
					pagesAmount={pagesAmount}
					setCurrentPage={setCurrentPage}
					currentPage={currentPage}
				/>
      </div>
      <ul className='newsMain__comments commentsGrid'>
        {
          currentCards.map(info => (
            <li className='commentsGrid__comment' key={info.id}>
              <CommentCard info={info}/>
            </li>
          ))
        }
      </ul>
    </>
  )
}

CommentSection.propTypes = {
  infos: PropTypes.arrayOf(infoPropType).isRequired,
  currentPage: PropTypes.number,
  pagesAmount: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired
}
