import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard } from '../../components/TransactionCard';

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
  HighlightCards,
  Transactions,
  Title,
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
        <HighlightCard 
          type='up'
          title={"Entradas"}
          amount={"R$ 17.400,00"}
          lastTransaction={"Última entrada dia 13 de abril"}
        />
        <HighlightCard 
          type='down'
          title={"Saídas"}
          amount={"R$ 1.000,00"}
          lastTransaction={"Última saída dia 13 de abril"}
        />        
        <HighlightCard 
          type='total'
          title={"Total"}
          amount={"R$ 18.400,00"}
          lastTransaction={"Última entrada dia 13 de abril"}
        />
      </HighlightCards>
    
      <Transactions>
        <Title>Listagem</Title>

        <TransactionCard />
      </Transactions>
    </Container>  
  );
}
