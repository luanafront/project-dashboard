import {TopBar} from "./components/topBar/TopBar.jsx";
import {CommentCard} from "./components/organisms/CommentCard.jsx";

export const App = () => {

  return (
    <>
      <TopBar/>
      <CommentCard
        info={{
          tier: {
            color: '#730ca1',
            variant: 'primary',
            tier: 'Tier 1',
          },
          publishedAt: '20 de Maio de 2023',
          views: 100,
          img: 'https://picsum.photos/200/300',
          tags: [
            {
              color: '#aa0000',
              variant: 'secondary',
              tag: 'sentimento'
            },
            {
              color: '#007700',
              variant: 'primary',
              tag: 'citação'
            },
            {
              color: '#0000FF',
              variant: 'primary',
              tag: 'segmento'
            }
          ]
        }}
      />
    </>
  )
}
