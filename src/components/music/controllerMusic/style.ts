import styled from "styled-components/native";

export const Container = styled.View`
  padding: 20px;
  align-items: center;
`

export const Div = styled.View``

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  font-size: 20px;
`

export const DivProgress = styled.View`
  flex-direction: row;
  width: 100%;
  gap: 10px;
  margin: 20px;
  align-items: center;
`

export const Time = styled.Text`
  color: ${(props) => props.theme.colors.white};
`

export const Progress = styled.View`
  background-color: ${(props) => props.theme.colors.white};
  height: 4px;
  flex: 1;
`

export const ProgressColor = styled.View`
  width: 30%;
  background-color: ${(props) => props.theme.colors.default};
  height: 100%;
`

export const MainController = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 20px 0;
`

export const DivController = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 20px;
`

export const DivButton = styled.TouchableOpacity``