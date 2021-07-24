import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ScrollableTabStringDemo from './ScrollableTabStringDemo'

export default function App() {
  
const dataTabs = [
  {
    index: '0',
    title: 'Tab 1',
  },
  {
    index: '1',
    title: 'Tab 2',
  },
  {
    index: '2',
    title: 'Tab 3',
  },
  {
    index: '3',
    title: 'Tab 4',
  },
  {
    index: '4',
    title: 'Tab 5',
  },
  {
    index: '5',
    title: 'Tab 6',
  },
];

const dataSections = [
  {
    index: '0', 
    name: 'Section 1',
    data: [
      {
        id: '0',
        name: 'Section 1 - 1',
      },
      {
        id: '1',
        name: 'Section 1 - 2',
      },
      {
        id: '2',
        name: 'Section 1 - 3',
      },
      {
        id: '3',
        name: 'Section 1 - 4',
      },
      {
        id: '4',
        name: 'Section 1 - 5',
      },
    ],
  },
  {
    index: '1',
    name: 'Section 2',
    data: [
      {
        id: '5',
        name: 'Section 2 - 1',
      },
      {
        id: '6',
        name: 'Section 2 - 2',
      },
      {
        id: '7',
        name: 'Section 2 - 3',
      },
      {
        id: '8',
        name: 'Section 2 - 4',
      },
      {
        id: '9',
        name: 'Section 2 - 5',
      },
    ],
  },
  {
    index: '2',
    name: 'Section 3',
    data: [
      {
        id: '10',
        name: 'Section 3 - 1',
      },
      {
        id: '11',
        name: 'Section 3 - 2',
      },
    ],
  },
  {
    index: '3',
    name: 'Section 4',
    data: [
      {
        id: '15',
        name: 'Section 4 - 1',
      },
      {
        id: '16',
        name: 'Section 4 - 2',
      },
      {
        id: '17',
        name: 'Section 4 - 3',
      },
    ],
  },
  {
    index: '4',
    name: 'Section 5',
    data: [
      {
        id: '18',
        name: 'Section 5 - 1',
      },
      {
        id: '19',
        name: 'Section 5 - 2',
      },
      {
        id: '20',
        name: 'Section 5 - 3',
      },
      {
        id: '21',
        name: 'Section 5 - 2',
      },
      {
        id: '22',
        name: 'Section 5 - 3',
      },
    ],
  },
  {
    index: '5',
    name: 'Section 6',
    data: [
      {
        id: '18',
        name: 'Section 5 - 1',
      },
      {
        id: '19',
        name: 'Section 5 - 2',
      },
      {
        id: '20',
        name: 'Section 5 - 3',
      },
      {
        id: '21',
        name: 'Section 5 - 2',
      },
      {
        id: '22',
        name: 'Section 5 - 3',
      },
    ],
  }
];

const props = { dataTabs, dataSections };

  return (
    <View style={styles.container}>
      {/* <Text>Open up App.tsx to start working on your app!</Text> */}
      <ScrollableTabStringDemo dataTabs={dataTabs} dataSections={dataSections} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
