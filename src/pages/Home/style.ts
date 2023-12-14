import styled from "styled-components/native";
import { StatusBar } from "react-native";
const heightStatusBar = StatusBar.currentHeight ? StatusBar.currentHeight : 64;

export const Container = styled.View`
  background-color: ${(props) => props.theme.colors.screenPage};
  height: 100%;
  padding-top: ${Math.round(heightStatusBar)}px;
`

export const Div = styled.View`
   padding: 0 20px;
   margin: 15px 0;
`

export const DivScroll = styled.View`
   padding: 0 20px;
   flex-direction: row;
   gap: 30px;
`

export const Scroll = styled.View`
 padding: 0 20px;
`

export const Text = styled.Text`
  color: ${(props) => props.theme.colors.default};
`