import { Container, Div, Text, DivScroll,Scroll } from './style'
import { Header } from '../../components/header'
import { ListPlay } from '../../components/List'

import { FlatList } from 'react-native'
import { useState, useEffect } from 'react'
import * as MediaLibrary from 'expo-media-library';
import { Asset } from 'expo-asset';

export const Home = () => {

  const [audioList, setAudioList] = useState<MediaLibrary.Asset[]>([]);
 
  useEffect(() => {
    getAudios();
  }, []);

  const getAudios = async () => {
    const { status } = await MediaLibrary.requestPermissionsAsync(
      
    );
    if (status !== 'granted') {
      console.log('Permissão não concedida para acessar a mídia.');
      return;
    }

    const { totalCount } = await MediaLibrary.getAssetsAsync({ mediaType: 'audio' });
    const { assets } = await MediaLibrary.getAssetsAsync({ first: totalCount, after: undefined, mediaType: 'audio' })
    setAudioList(assets);
    // console.log(assets)
  };

  return(
    <Container>
      <Header />
      <DivScroll>
        <Text>teste 123</Text>
        <Text>teste 123</Text>
        <Text>teste 123</Text>
      </DivScroll>
      <Scroll>
        <FlatList
          data={audioList}
          renderItem={({item, index}) => <ListPlay key={index} name={item.filename} uri={item.uri} albumId={item.albumId} />}
          keyExtractor={item => item.uri}
        />
        {/* {audioList.map((item, index) => (
          <ListPlay key={index} name={item.filename} uri={item.uri} albumId={item.albumId} />
        ))} */}
      </Scroll>
    </Container>
  )
}