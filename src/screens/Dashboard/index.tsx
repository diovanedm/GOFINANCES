import React from 'react';
import { getBottomSpace } from 'react-native-iphone-x-helper';
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
  TransactionList
} from './styles';

export function Dashboard(){
  const data = [{          
    title:"Desenvolvimento de site",
    amount:"R$ 12.000,00",
    category:{
      icon:"dollar-sign",
      name: "Vendas",
    },
    date:"13/04/2020",
  },
  {          
    title:"Desenvolvimento de site",
    amount:"R$ 12.000,00",
    category:{
      icon:"dollar-sign",
      name: "Vendas",
    },
    date:"13/04/2020",
  },{          
    title:"Desenvolvimento de site",
    amount:"R$ 12.000,00",
    category:{
      icon:"dollar-sign",
      name: "Vendas",
    },
    date:"13/04/2020",
  },]

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

        <TransactionList 
          data={data}
          renderItem={({ item }) => <TransactionCard data={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: getBottomSpace() 
          }}
        />
      </Transactions>
    </Container>  
  );
}
