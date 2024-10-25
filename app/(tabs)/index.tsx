
import * as React from 'react';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View, SafeAreaView,ScrollView } from 'react-native';
import Header from '@/components/TabOneScreen/Header';
import Slider from '@/components/TabOneScreen/Slider';
import Features from '@/components/TabOneScreen/Features';


export default function TabOneScreen() {
  return (
    <ScrollView style = {{
      backgroundColor: "none",
    }}>
      <SafeAreaView>
      <Header/>
      <Slider/>
      <Features/>
      </SafeAreaView>
    </ScrollView>
  );
}