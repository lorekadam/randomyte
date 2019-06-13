import styled from 'styled-components/native';

interface Props {
  alignItems?: string;
  justifyContent?: string;
  flex?: number;
}

export const Aligment = styled.View`
  ${(props: Props) => props.alignItems && `align-items:${props.alignItems}`};
  ${(props: Props) => props.justifyContent && `justify-content:${props.justifyContent}`};
  flex: ${(props: Props) => (props.flex ? props.flex : 1)};
`;

export const Row = styled(Aligment)`
  display: flex;
  flex-direction: row;
`;

export const RowColumn = styled(Aligment)`
  display: flex;
  flex-direction: column;
`;

export const Col = styled(Aligment)``;
