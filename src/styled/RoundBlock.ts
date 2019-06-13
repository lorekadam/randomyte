import styled from 'styled-components/native';
import { heightPtoDPpx } from '../utils';

const initialRadius: number = 40;

export interface RoundBlockProps {
  height?: number;
  bgc?: string;
  padding?: number;
  alignItems?: string;
  justifyContent?: string;
  radius?: number;
  round?: boolean;
}

export const RoundBlock = styled.TouchableOpacity`
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: ${(props: RoundBlockProps) => (props.alignItems ? props.alignItems : 'flex-end')};
  justify-content: ${(props: RoundBlockProps) => (props.justifyContent ? props.justifyContent : 'flex-start')};
  border-top-left-radius: ${(props: RoundBlockProps) => (props.radius ? `${props.radius}px` : `${initialRadius}px`)};
  border-bottom-right-radius: ${(props: RoundBlockProps) => (props.radius ? `${props.radius}px` : `${initialRadius}px`)};
  ${(props: RoundBlockProps) => (props.round && props.radius ? `border-radius:${props.radius}px` : `${initialRadius}px`)};
  background-color: ${(props: RoundBlockProps) => (props.bgc ? props.bgc : 'transparent')};
  ${(props: RoundBlockProps) => props.height && `height:${props.height}%`};
  ${(props: RoundBlockProps) => props.padding && `padding:${heightPtoDPpx(props.padding)}`};
`;
