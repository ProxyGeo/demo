import * as React from 'react';
import { Text, View, TouchableOpacity, StatusBar } from 'react-native';
import ScrollableTabString from 'react-native-scrollable-tabstring';

// You can import from local file

type Section = {
    index: string;
    name: string;
    data: Array<{
        id: string;
        name: string;
    }>;
}
type Tab = {
    index: string;
    title: string;
}
interface ScrollableTabStringDemoProps  {
    dataTabs: Array<Tab>;
    dataSections: Array<Section>;
}

const ScrollableTabStringDemo  = ({dataTabs, dataSections}: ScrollableTabStringDemoProps):JSX.Element => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={{flex: 1, marginTop: StatusBar.currentHeight }}>
        <ScrollableTabString
            keyExtractor={(item:any) => item.id.toString()}
            dataTabs={dataTabs}
            renderTabName={(item: Tab) => (
                <TouchableOpacity>
                    <Text style={{padding: 10}}>{item.title}</Text>
                </TouchableOpacity>
            )}
            dataSections={dataSections}
            renderSection={(item: Section) => (
                <View>
                    <Text>{item.name}</Text>
                    {item.data.map((i) => {
                        return (
                            <Text key={i.id} style={{padding: 20}}>
                                {i.name}
                            </Text>
                        )
                    })}
                </View>
            )}
        />
      </View>
    </>
  );
};

export default ScrollableTabStringDemo;