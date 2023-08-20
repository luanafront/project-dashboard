import {PostInfo} from "../molecules/PostInfo.jsx";
import {Tag} from "../atoms/Tag.jsx";
import './styles/NewsCard.sass'
import {Text} from "../molecules/Text.jsx";
import {Divisor} from "../atoms/Divisor.jsx";
import {infoPropType} from "../propsTypes.js";
import {useNavigate} from "react-router-dom";
export const NewsCard = ({info}) => {
	const navigate = useNavigate()
	const {tier, tags, news, newsTitle, font, section} = info

	const goToDetailNews = () => {
		navigate(`/${info.id}`)
	}

	return (
		<div className='newsCard' onClick={goToDetailNews}>
			<div className='newsCardBox boxInfoHeader'>
				<PostInfo info={info}/>
				<Tag color={tier.color} variant={tier.variant}>{tier.tier}</Tag>
			</div>
			<div className='newsCardBox boxInfoSection '>
				<p className='boxInfo__title'>Veículo e seção {info.id}</p>
				<div className='boxInfo__subtitle fontAndSection'>
					<Text collapse={45} icon='NewsPaperBlack' className='fontAndSection__font'>
						{`Fonte: ${font}`}
					</Text>
					<Text collapse={25} className='fontAndSection__section'>
						{`Seção: ${section}`}
					</Text>
				</div>
			</div>
			<Divisor className={'newsCard__divisor'} color='#f5eaea'/>
			<div className='newsCardBox boxInfoSection'>
				<Text collapse={65} isBold className={'boxInfoSection__text'}>
					{newsTitle}
				</Text>
				<Text collapse={500} >
					{news}
				</Text>
			</div>
			<Divisor className={'newsCard__divisor'} color='#f5eaea'/>
			<div className='newsCard__classification classificationBox'>
				<p className='classificationBox__title'>Classificações</p>
				<div className='classificationBox__tags tagBox'>
					<p className='tagBox__text'>Tags:</p>
					{tags.map((tag, index) => <Tag key={index} color={tag.color} variant={tag.variant}>{tag.tag}</Tag>)}
				</div>
			</div>
		</div>
	)
}

NewsCard.propTypes = {
	info: infoPropType
}
