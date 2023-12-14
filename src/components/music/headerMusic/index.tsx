import { Container, Div, Text } from './style'
import { AntDesign } from '@expo/vector-icons';
export const HeaderMusic = () => {
  return (
    <Container>
      <Div>
        <AntDesign name="back" size={24} color="#fff" />
      </Div>
      <Div>
        <Text>New Music</Text>
      </Div>
      <Div>
        <AntDesign name="star" size={24} color="#fff" />
      </Div>
    </Container>
  )
}