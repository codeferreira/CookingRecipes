import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #fafafa;
  padding: 32px;
`;

export const CardImage = styled.ImageBackground.attrs({
  source: {
    uri:
      'https://images.unsplash.com/photo-1562500901-a497eb5f3813?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
  },
})`
  margin-top: 16px;
  elevation: 2;
  height: 250px;
  border-radius: 12px;
`;

export const CardContainer = styled.View`
  flex: 1;
  background: #000;
`;
