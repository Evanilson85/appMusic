import styled from "styled-components/native";
import { heightStatusBar } from "../../../styles/global";

export const Container = styled.View`
  flex-direction: row;
  padding: 0 20px 0;
  height: 100px;
  align-items: center;
  justify-content: space-between;
  padding-top: ${Math.round(heightStatusBar)}px;
`

export const Div = styled.View``

export const Text = styled.Text`
  color: ${(props) => props.theme.colors.white};
  font-size: 20px;
`