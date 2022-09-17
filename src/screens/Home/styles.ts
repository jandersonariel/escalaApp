import styled from 'styled-components/native'

export const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: ${({theme} ) => theme.colors.background}
`;

export const Text = styled.Text`

`;
