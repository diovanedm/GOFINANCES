import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/core';
import React, { useEffect, useState, useCallback } from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';
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
  TransactionList,
  LogoutButton,
  LoadContainer,
} from './styles';

export interface DataListProps extends TransactionCardProps {
  id: string;
}

interface HighlightProps{
  amount: string;
}
interface HighlightData {
  entries: HighlightProps;
  expensives: HighlightProps;
  total: HighlightProps;
}

export function Dashboard(){
  const [ isLoading, setIsLoading ] = useState(true);
  const [ transactions, setTransactions ] = useState<DataListProps[]>([]);
  const [ highlightData, setHighlightData ] = useState<HighlightData>({} as HighlightData);
  const theme = useTheme();

  async function loadTransactions() {
    const dataKey = '@gofinances:transactions';
    const response = await AsyncStorage.getItem(dataKey);
    const transaction = response ? JSON.parse(response) : [];

    let entriesTotal = 0;
    let expensiveTotal = 0;

    const transactionsFormatted: DataListProps[] = transaction
    .map((item: DataListProps) => {

      if(item.type === 'positive') {
        entriesTotal += Number(item.amount);
      } else {
        expensiveTotal += Number(item.amount);
      }
      

      const amount = Number(item.amount)
        .toLocaleString('pt-BR', { 
          style: 'currency', currency: 'BRL' 
        });
      
      const date = Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit'
      }).format(new Date(item.date));

      return {
        id: item.id,
        name: item.name,
        amount: amount,
        type: item.type,
        category: item.category,
        date: date
      }
    });

    const total = entriesTotal - expensiveTotal;

    setTransactions(transactionsFormatted);
    setHighlightData({
      entries: {
        amount: entriesTotal.toLocaleString('pt-BR', {
          style: 'currency', currency: 'BRL'
        })
      },
      expensives: {
        amount: expensiveTotal.toLocaleString('pt-BR', {
          style: 'currency', currency: 'BRL'
        })
      },
      total: {
        amount: total.toLocaleString('pt-BR', {
          style: 'currency', currency: 'BRL'
        })
      }
    });

    setIsLoading(false); 
  }

  useEffect(() => {
    loadTransactions();
  }, []);

  useEffect(() => {
    console.log("Aqui: ", highlightData.entries);
  }, [highlightData]);

  useFocusEffect(
    useCallback(() => {
      loadTransactions();
    }, [])
  )

  return (
    <Container>
      {
        isLoading ? 
          <LoadContainer> 
              <ActivityIndicator 
                color={theme.colors.primary}
                size='large'
              />
          </LoadContainer> 
        :
          <>
            <Header>
              <UserWrapper>
                <UserInfo>
                  <Photo source={{ uri: "https://avatars.githubusercontent.com/u/47329665?v=4" }}/>
                  <User>
                    <UserGreeging>Ol??, </UserGreeging>
                    <UserName>Diovane</UserName>
                  </User>
                </UserInfo>

                <LogoutButton onPress={() => {}}>
                  <Icon name="power"/>
                </LogoutButton>
              </UserWrapper>
            </Header>
            
            <HighlightCards>
              <HighlightCard 
                type='up'
                title={"Entradas"}
                amount={highlightData.entries.amount}
                lastTransaction={"??ltima entrada dia 13 de abril"}
              />
              <HighlightCard 
                type='down'
                title={"Sa??das"}
                amount={highlightData.expensives.amount}
                lastTransaction={"??ltima sa??da dia 13 de abril"}
              />        
              <HighlightCard 
                type='total'
                title={"Total"}
                amount={highlightData.entries ? highlightData.total.amount : '0,00'}
                lastTransaction={"??ltima entrada dia 13 de abril"}
              />
            </HighlightCards>
          
            <Transactions>
              <Title>Listagem</Title>

              <TransactionList 
                data={transactions}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <TransactionCard data={item} />}
              />
            </Transactions>
          </>
      }
    </Container>  
  )
}
