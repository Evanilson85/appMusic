import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #000000ba;
  height: 100px;
  width: 100%;
  margin: 0 auto;
  border-radius: 15px;
  position: absolute;
  bottom: 20px;
  z-index: 100;
  flex-direction: row;
  align-items: center;
`

export const ContainerTitle = styled.TouchableOpacity`
  padding: 10px;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  flex: 1;
`

export const ContainerPlay = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 20px;
  padding: 10px;
`

export const Image = styled.Image`
  height: 70px;
  width: 70px;
  border-radius: 10px;
`

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.white};
  font-size: 15px;
`

export const Favorite = styled.TouchableOpacity``

export const Play = styled.TouchableOpacity``

export const Div = styled.View``