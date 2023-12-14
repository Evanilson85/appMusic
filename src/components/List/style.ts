import styled, { css } from "styled-components/native";

interface PROPS {
  flex?: boolean
}

export const Container = styled.TouchableOpacity`
  margin: 10px 0;
  padding: 0px 0 0;
  flex-direction: row;
  align-items: center;
`
export const Div = styled.View`
  width: 60%;
  padding: 0 10px;
  justify-content: center;
  ${({ flex }: PROPS) => flex && css`
    flex-direction: row;
    gap: 10px;
  `};
`

export const DivContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
  align-items: center;
`

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.white};
  font-size: 15px;
`

export const SubTitle = styled.Text`
 color: ${(props) => props.theme.colors.grap};
 font-size: 14px;
`

export const Images = styled.Image`
  height: 100%;
  background-color: red;
  width: 23%;
  border-radius: 10px;
`

export const ButtonSave = styled.TouchableOpacity`

`