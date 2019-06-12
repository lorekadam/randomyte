import styled from 'styled-components/native';
import { light } from './colors';

interface Props {
  color?: string;
}

export const Text = styled.Text`
  color: ${(props: Props) => (props.color ? props.color : light)};
`;
