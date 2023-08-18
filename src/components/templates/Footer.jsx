import ImageGato from '.././../assets/gato.png'
import './styles/Footer.sass'

export const Footer = () => {
	return (
		<div className='footer'>
			<p className='footer__text'>© Todos os direitos reservados charisma</p>
			<img src={ImageGato} alt='gato' className='footer__image'/>
		</div>
	)
}
