import {useNavigate, useParams} from "react-router-dom";
import {mockInfo} from "../../mock.js";
import {Text} from "../molecules/Text.jsx";
import {Tag} from "../atoms/Tag.jsx";
import {Divisor} from "../atoms/Divisor.jsx";
import './styles/NewsDetail.sass'
import {Footer} from "../templates/Footer.jsx";
import {Icon} from "../atoms/Icon.jsx";

export const NewsDetail = () => {
  const params = useParams()
  const {id} = params

  const navigate = useNavigate()

  const info = mockInfo.find(info => info.id === +id)
  const {
    tier,
    tags,
    news,
    font,
    section,
    title,
    publishedAt,
    views,
    valuation,
    centimeter,
    additionalTags,
  } = info

  return (
    <div className='newsDetailBox'>
      <div className='newsDetail'>
        <header className='newsDetailHeader'>
          <div className='newsDetailHeader__boxTitle boxTitle'>
            <h1 className='boxTitle__title'>Detalhes da notícias</h1>
            <h4 className='boxTitle__subtitle'>Subtítulo de apoio</h4>
          </div>
          <section className='newsDetailHeaderSection'>
            <button
              className='newsDetailHeaderSection__text'
              onClick={() => navigate('/')}
            ><Icon icon='ChevronLeft'/>
              Consulta de notícias
            </button>
            <p className='newsDetailHeaderSection__detail'>Detalhe de notícias</p>
          </section>
        </header>
        <main className='newsDetailMain'>
          <div className='newsDetailMainSections sectionsMain'>
            <section className='sectionsMainNews mainNews'>
              <div className='mainNewsTitle'>
                <Text isBold className='mainNewsTitle__title' icon='Paperclip'>{title}</Text>
                <Tag color={tier.color} variant={tier.variant}>{tier.tier}</Tag>
              </div>
              <div className='mainNewsClassification'>
                <Text icon='Calendar' className='mainNewsClassification__text'>{publishedAt}</Text>
                <Text icon='Eye' className='mainNewsClassification__text'>{`Visualizações: ${views}`}</Text>
                <Text icon='Star' className='mainNewsClassification__text'>{`Valoração: ${valuation}`}</Text>
                <Text icon='Centimeter' className='mainNewsClassification__text'>{`Centimetragem: ${centimeter}`}</Text>
              </div>
              <div className='mainNewsInformation'>
                <Text collapse={65} icon='NewsPaperBlack'>{`Fonte: ${font}`}</Text>
                <Text collapse={40}>{`Seção: ${section}`}</Text>
              </div>
              <Divisor color={'#f5eaea'} className='divisorMainNews'/>
              <div className='mainNewsTags'>
                {
                  tags.map((tag, index) => <Tag key={index} color={tag.color} variant={tag.variant}>{tag.tag}</Tag>)
                }
                {
                  additionalTags.map((tag, index) => <Tag key={index} color='#6e6d6d'
                                                          variant='secondary'>{`${tag.name}: ${tag.value}`}</Tag>)
                }
              </div>
              <p>{news}</p>
            </section>
            <aside className='mainMetrics'>
              <div className='mainMetricsSection sectionMetrics'>
                <p className='sectionMetrics__title'>Métricas da notícia</p>
                <Text icon='Buildings' className='sectionMetrics__text'>Benchmarks</Text>
                <Divisor color={'#f5eaea'} className='divisorMetrics'/>
                <Text icon='Tag' className='sectionMetrics__text'>Subcategoria: XP</Text>
                <Divisor color={'#f5eaea'} className='divisorMetrics'/>
                <Text icon='Tag' className='sectionMetrics__text'>Marcas citadas: XP</Text>
                <Divisor color={'#f5eaea'} className='divisorMetrics'/>
                <Text icon='Voice' className='sectionMetrics__text'>Porta-vozes: Representa a marca</Text>
                <Divisor color={'#f5eaea'} className='divisorMetrics'/>
                <Text icon='Writer' className='sectionMetrics__text'>Autor:</Text>
                <Divisor color={'#f5eaea'} className='divisorMetrics'/>
                <Text icon='Gps' className='sectionMetrics__text'>UF: Circulação nacional</Text>
                <Divisor color={'#f5eaea'} className='divisorMetrics'/>
                <Text icon='Media' className='sectionMetrics__text'>Tipo de mídia: Online</Text>
              </div>
              <div className='mainMetricsButtons buttonsMatrics'>
                <button className='buttonsMatrics__button--delete'>Editar</button>
                <button className='buttonsMatrics__button--edit'>Excluir</button>
              </div>
            </aside>
          </div>
        </main>
      </div>
      <Footer/>
    </div>
  )
}
