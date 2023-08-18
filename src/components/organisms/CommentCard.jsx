import {PostInfo} from "../molecules/PostInfo.jsx";
import {Tag} from "../atoms/Tag.jsx";
import './styles/CommentCard.sass'
import {Text} from "../molecules/Text.jsx";
import {Divisor} from "../atoms/Divisor.jsx";
import {infoPropType} from "../propsTypes.js";
export const CommentCard = ({info}) => {
	const {tier, tags, comment, commentTitle, font, section} = info

	return (
		<div className='commentCard'>
			<div className='commentCardBox boxInfoHeader'>
				<PostInfo info={info}/>
				<Tag color={tier.color} variant={tier.variant}>{tier.tier}</Tag>
			</div>
			<div className='commentCardBox boxInfoSection '>
				<p className='boxInfo__title'>Veículo e seção</p>
				<div className='boxInfo__subtitle fontAndSection'>
					<Text collapse={45} icon='NewsPaperBlack' className='fontAndSection__font'>
						{`Fonte: ${font}`}
					</Text>
					<Text collapse={25} className='fontAndSection__section'>
						{`Seção: ${section}`}
					</Text>
				</div>
			</div>
			<Divisor className={'commentCard__divisor'} color='#f5eaea'/>
			<div className='commentCardBox boxInfoSection'>
				<Text collapse={65} isBold className={'boxInfoSection__text'}>
					{commentTitle}
				</Text>
				<Text collapse={500} >
					{comment}
				</Text>
			</div>
			<Divisor className={'commentCard__divisor'} color='#f5eaea'/>
			<div className='commentCard__classification classificationBox'>
				<p className='classificationBox__title'>Classificações</p>
				<div className='classificationBox__tags tagBox'>
					<p className='tagBox__text'>Tags:</p>
					{tags.map((tag, index) => <Tag key={index} color={tag.color} variant={tag.variant}>{tag.tag}</Tag>)}
				</div>
			</div>
		</div>
	)
}


CommentCard.propTypes = {
	info: infoPropType
}
