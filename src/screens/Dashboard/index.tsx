import React from 'react';

import { 
  Container, 
  Header, 
  UserInfo, 
  UserWrapper,
  Photo, 
  User, 
  UserGreeging, 
  UserName,
  Icon
} from './styles';
export function Dashboard(){
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: "https://avatars.githubusercontent.com/u/47329665?v=4" }}/>
            <User>
              <UserGreeging>Olá, </UserGreeging>
              <UserName>Diovane</UserName>
            </User>
          </UserInfo>

          <Icon name="power"/>
        </UserWrapper>
      </Header>
    </Container>  
  );
}
