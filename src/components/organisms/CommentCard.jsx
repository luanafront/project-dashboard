import {PostInfo} from "../molecules/PostInfo.jsx";
import {Tag} from "../atoms/Tag.jsx";
import PropTypes from "prop-types";
import './styles/CommentCard.sass'
import {Text} from "../molecules/Text.jsx";
import {Divisor} from "../atoms/Divisor.jsx";

export const CommentCard = ({info}) => {
	const {tier, tags} = info

	return (
		<div className='commentCard'>
			<div className='commentCardBox boxInfoHeader'>
				<PostInfo info={info}/>
				<Tag color={tier.color} variant={tier.variant}>{tier.tier}</Tag>
			</div>
			<div className='commentCardBox boxInfoSection '>
				<p className='boxInfo__title'>Veículo e seção</p>
				<div className='boxInfo__subtitle fontAndSection'>
					<Text collapse={45} icon='News' className='fontAndSection__font'>
						Fonte: lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
					</Text>
					<Text collapse={25}>
						Seção: lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
					</Text>
				</div>
			</div>
			<Divisor className={'commentCard__divisor'} color='#f5eaea'/>
			<div className='commentCardBox boxInfoSection'>
				<Text collapse={65} isBold className={'boxInfoSection__text'}>
					lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
				</Text>
				<Text collapse={500} >
					lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
					lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
					lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
					lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
					lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
					lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
					lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
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
	info: PropTypes.shape({
		tier: PropTypes.shape({
			color: PropTypes.string.isRequired,
			variant: PropTypes.string.isRequired,
			tier: PropTypes.string.isRequired
		}).isRequired,
		publishedAt: PropTypes.string.isRequired,
		views: PropTypes.number.isRequired,
		img: PropTypes.string.isRequired,
		tags: PropTypes.arrayOf(PropTypes.shape({
			color: PropTypes.string.isRequired,
			variant: PropTypes.string.isRequired,
			tag: PropTypes.string.isRequired
		}).isRequired).isRequired
	})
}
