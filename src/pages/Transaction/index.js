import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Gap, TransactionCard } from "../../component";

function TransactionScreen() {

  const transactionData = [
    {
      id: "1",
      number: "Rp. 80.000",
      rekening: "081234567890",
      date : '20/08/2020'
    },
    {
      id: "2",
      number: "Rp. 80.000",
      rekening: "081234567890",
      date : '20/08/2020'
    },
    {
      id: "3",
      number: "Rp. 80.000",
      rekening: "081234567890",
      date : '20/08/2020'
    },
    {
      id: "4",
      number: "Rp. 80.000",
      rekening: "081234567890",
      date : '20/08/2020'
    },
    {
      id: "5",
      number: "Rp. 80.000",
      rekening: "081234567890",
      date : '20/08/2020'
    },
    {
      id: "6",
      number: "Rp. 80.000",
      rekening: "081234567890",
      date : '20/08/2020'
    },
    {
      id: "7",
      number: "Rp. 80.000",
      rekening: "081234567890",
      date : '20/08/2020'
    },
    {
      id: "8",
      number: "Rp. 80.000",
      rekening: "081234567890",
      date : '20/08/2020'
    },
    {
      id: "9",
      number: "Rp. 80.000",
      rekening: "081234567890",
      date : '20/08/2020'
    },
    {
      id: "10",
      number: "Rp. 80.000",
      rekening: "081234567890",
      date : '20/08/2020'
    },
  ];

  return (
    <>
      <ScrollView contentContainerStyle={styles.transaction}>
        <Gap height={20}/>
        {transactionData.map(transaction => {
            return(
              <TransactionCard
                key={transaction.id}
                nominal={transaction.number} 
                rekening={transaction.rekening} 
                date={transaction.date}
              />
            )
          })
        }
        <Gap height={20}/>
      </ScrollView>
    </>
  );
}

export default TransactionScreen;

const styles = StyleSheet.create({
  //------------- TRANSACTION
  transaction: {
    margin: 13
  },
  transactionTitle: {
    fontSize: 16,
    fontWeight: '300',
    color: "#000"
  }
});