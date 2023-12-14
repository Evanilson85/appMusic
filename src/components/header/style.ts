import styled from "styled-components/native";
import { StatusBar } from "react-native";

const heightStatusBar = StatusBar.currentHeight ? StatusBar.currentHeight : 64;
/* padding-top: ${Math.round(heightStatusBar)}px; */

export const Container = styled.View`
  display: flex;
  padding: 0 20px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.screenPage};
  height: 100px;
`;

export const DivContainerIcon = styled.View`
  background-color: ${(props) => props.theme.colors.transp};
  padding: 15px;
  border-radius: 10px;
`

export const Div = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
`

export const Text = styled.Text`
  color: ${(props) => props.theme.colors.white};
`

export const Input = styled.TextInput`
   background-color: ${(props) => props.theme.colors.transp};
   flex: 1;
   border-radius: 10px;
   padding: 10px;
   color:  ${(props) => props.theme.colors.grap};
`