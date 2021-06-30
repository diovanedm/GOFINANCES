import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';
import { 
  Container, 
  Header, 
  UserInfo, 
  UserWrapper,
  Photo, 
  User, 
  UserGreeging, 
  UserName,
  Icon,
  HighlightCards
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
      <HighlightCards>
        <HighlightCard />
        <HighlightCard />
        <HighlightCard />
      </HighlightCards>
    </Container>  
  );
}
