import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';

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

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard(){
  const data: DataListProps[] = [{          
    id: '1',
    type: 'positive',
    title:"Desenvolvimento de site",
    amount:"R$ 12.000,00",
    category:{
      icon:"dollar-sign",
      name: "Vendas",
    },
    date:"13/04/2020",
  },
  {          
    id: '2',
    type: 'negative',
    title:"Hamburgueria Pizzy",
    amount:"R$ 59,00",
    category:{
      icon:"coffee",
      name: "Alimentação",
    },
    date:"10/04/2020",
  },{          
    id: '3',
    type: 'negative',
    title:"Aluguel do apartamento",
    amount:"R$ 1.2000,00",
    category:{
      icon:"shopping-bag",
      name: "Casa",
    },
    date:"27/03/2020",
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
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>  
  );
}
