import {TopBar} from "./components/topBar/TopBar.jsx";
import {NestedList} from "./components/nestedList /NestedList.jsx";
import {Tag} from "./components/atoms/Tag.jsx";
import {Text} from "./components/molecules/Text.jsx";
import {PublishedAt} from "./components/atoms/PublishedAt.jsx";
import {PostInfo} from "./components/molecules/PostInfo.jsx";

export const App = () => {
  return (
    <>
      <TopBar/>
      <NestedList/>
      <Tag color='#aa0000' variant='secondary'>SENTIMENTO</Tag>
      <Tag color='#007700' variant='secondary'>SENTIMENTO</Tag>
      <Tag color='#0000FF' variant='secondary'>SENTIMENTO</Tag>
      <Tag color='#770077' variant='primary'>LUANA</Tag>
      <Text collapse={20} icon='Email'>
        lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
      </Text>
      <Text collapse={5}>
        lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
      </Text>
      <Text collapse={65} icon='Article'>
        lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
      </Text>
      <PublishedAt date='20 de Maio de 2023'/>
      <PostInfo
        info={{
          publishedAt: '20 de Maio de 2023',
          views: 100,
          img: 'https://picsum.photos/200/300'
        }}
      />
    </>
  )
}
