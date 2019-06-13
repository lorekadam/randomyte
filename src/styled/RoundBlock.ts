import styled from 'styled-components/native';

interface Props {
  bgc?: string;
}

export const RoundBlock = styled.TouchableOpacity`
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  border-top-left-radius: 40px;
  border-bottom-right-radius: 40px;
  background-color: ${(props: Props) => (props.bgc ? props.bgc : 'transparent')};
  height: 100%;
`;
