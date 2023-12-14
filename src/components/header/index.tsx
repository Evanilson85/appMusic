import { Container, Div, Text, DivContainerIcon, Input } from './style'
import { AntDesign } from '@expo/vector-icons';

import { useState } from 'react'

export const Header = () => {

  const [search, setSearch] = useState('')

  return (
    <Container>
      <Div>
        <DivContainerIcon>
          <AntDesign name="menuunfold" size={24} color="#fff" />
        </DivContainerIcon>
        <Input 
          value={search}
          onChangeText={(text) => setSearch(text)}
          placeholder="Pesquisar"
          placeholderTextColor="#FFFFFF"
        />
      </Div>
    </Container>
  )
}