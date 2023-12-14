import { Container } from './style'
import { HeaderMusic } from '../../components/music/headerMusic'
import { DiscMusic } from '../../components/music/discMusic'
import { ControllerMusic } from '../../components/music/controllerMusic'

export const PlayMusic = () => {  
  return (
    <Container>
      <HeaderMusic />
      <DiscMusic />
      <ControllerMusic />
    </Container>
  )
}