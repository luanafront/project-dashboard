import './styles/AsideBar.sass';
import {Text} from "./Text.jsx";
import {Icon} from "../atoms/Icon.jsx";
import {useState} from "react";

export const AsideBar = () => {
	const [news, setNews] = useState(false);

	return (
		<div className='asideBar'>
			<ul className='asideBar__list listAside'>
				<li className='listAside__item listBoxAside'>
					<button className='listBoxAside__sectionNews sectionNewsButton' onClick={() => {
						setNews(!news)
					}}>
						<Text className='sectionNews__text sectionNews__text--new' icon='NewsPaper'>Notícias</Text>
						<Icon icon={news ? 'ArrowBottomNew' : 'ArrowRight'} className='listAside__item--icon'/>
					</button>
					{
						news &&
						<div className='listAside__item--subtitle itemSubtitle'>
							<p className='itemSubtitle__text'>Relatórios</p>
							<p className='itemSubtitle__text'>Consulta de notícias</p>
						</div>
					}
				</li>
				<li className='listAside__item listBoxAside'>
					<div className='listBoxAside__sectionNews sectionNews'>
						<Text className='sectionNews__text sectionNews__text--email' icon='Email'>Mailing</Text>
						<Icon icon='ArrowRight' className='listAside__item--icon'/>
					</div>
				</li>
				<li className='listAside__item listBoxAside'>
					<div className='listBoxAside__sectionNews sectionNews'>
						<Text className='sectionNews__text sectionNews__text--nps' icon='NPS'>NPS</Text>
						<Icon icon='ArrowRight' className='listAside__item--icon'/>
					</div>
				</li>
				<li className='listAside__item listBoxAside'>
					<div className='listBoxAside__sectionNews sectionNews'>
						<Text className='sectionNews__text sectionNews__admin' icon='Admin'>Administrativo</Text>
						<Icon icon='ArrowRight' className='listAside__item--icon'/>
					</div>
				</li>
			</ul>
		</div>
	)
}
