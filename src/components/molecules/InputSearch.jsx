import './styles/InputSearch.sass';
import {Icon} from "../atoms/Icon.jsx";
import PropTypes from "prop-types";

export const InputSearch = ({onSearchValue}) => {
	return (
		<div className='inputSearch'>
			<div className='inputSearch__box--marks boxTexts'>
				<p className='inputSearch__text'>Marcas</p>
				<Icon icon='ArrowBottom'/>
			</div>
			<div className='inputSearch__box--categories boxTexts'>
				<p className='inputSearch__text'>Categorias</p>
				<Icon icon='ArrowBottom'/>
			</div>
			<div className='inputSearch__box--search boxTexts'>
				<Icon icon='MagnifyingGlass'/>
				<input
					className='inputSearch__input'
					placeholder='Pesquise por: Titulos/Assuntos/Veiculos ou Tier'
					onChange={(e) => {
						onSearchValue(e.target.value)
					}}
				/>
			</div>
			<div className='inputSearch__box--filter boxTexts'>
				<Icon icon='Filter'/>
				<p className='inputSearch__text inputSearch__text--filter'>Filtro</p>
			</div>
		</div>
	)
}

InputSearch.propTypes = {
	onSearchValue: PropTypes.func.isRequired
}
