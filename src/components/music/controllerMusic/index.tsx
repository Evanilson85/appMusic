import { Container, Div, Progress, Title, Time, DivProgress, ProgressColor, MainController, DivController, DivButton } from './style'
import { FontAwesome, MaterialIcons, Entypo, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
//https://docs.swmansion.com/react-native-gesture-handler/docs/gestures/fling-gesture
export const ControllerMusic = () => {
  return (
    <Container>
      <Div>
        <Title>The one</Title>
        <Title>The Chainsmokers</Title>
      </Div>
      <DivProgress>
        <Time>
          1:30
        </Time>
        <Progress>
          <ProgressColor></ProgressColor>
        </Progress>
        <Time>
          1:30
        </Time>
      </DivProgress>
      <MainController>
        <DivButton>
          <FontAwesome name="random" size={20} color="#fff" />
        </DivButton>
        <DivController>
        <DivButton>
          <MaterialCommunityIcons name="skip-previous" size={35} color="#fff" />
        </DivButton>
        <DivButton>
          <AntDesign name="play" size={45} color="#fff" />
        </DivButton>
        <DivButton>
          <Entypo name="controller-next" size={35} color="#fff" />
        </DivButton>
        </DivController>
        <DivButton>
          <MaterialIcons name="favorite-border" size={20} color="#fff" />
        </DivButton>
      </MainController>
    </Container>
  )
}