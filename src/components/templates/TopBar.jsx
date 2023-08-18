import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import './styles/style.sass';
import ImgGato from '../../assets/gato.png';

export const TopBar = () => {
	return (
		<div className='topBar'>
			<p className='topBarText'>Dashboard</p>
			<SettingsIcon className='topBarIcon'/>
			<NotificationsNoneIcon className='topBarIcon'/>
			<img className='topBarImg' src={ImgGato} alt="gato" />
		</div>
	)
}
