import { Container, Images, Title, Div, SubTitle, DivContainer, ButtonSave } from './style'
import { AntDesign } from '@expo/vector-icons';
import { PropsList } from '../../interface/props';
import { useContext } from 'react'
import { ContextMusic } from '../../context/playMusicCurrent';

export const ListPlay = ({ name, uri, albumId }: PropsList) => {

  const { updateSetCurrentMusic } = useContext(ContextMusic)

  return(
    <Container onPress={() => updateSetCurrentMusic({ name, uri, albumId })}>
       <Images
          style={{
            flex: 1,
            width: '100%',
            backgroundColor: '#0553',
            borderRadius: 10,
            maxWidth: 80,
            height: 80
          }}
          source={{ uri: `asset:/asset_id/${albumId}/thumbnail` }}
        />
      <DivContainer >
        <Div>
          <Title>
            { name }
          </Title>
          {/* <Div>
            {/* <AntDesign name="user" size={24} color="black" /> 
          </Div> */}
            <SubTitle>
              The chainsmokers
            </SubTitle>
        </Div>
        <ButtonSave>
          <AntDesign name="hearto" size={24} color="#fff" />
        </ButtonSave>
      </DivContainer>
    </Container>
  )
}
