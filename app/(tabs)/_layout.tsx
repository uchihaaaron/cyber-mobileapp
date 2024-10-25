import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

import { useColorScheme } from '@/components/useColorScheme';
import { Ionicons } from '@expo/vector-icons';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "black",
        headerShown: false,
        tabBarLabelStyle: { fontSize: 13 },
        tabBarStyle: {
          paddingRight: 0,
          paddingLeft: 0, 
          paddingTop: 10, 
          paddingBottom: 10,
          height: 70,        
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({focused, color }) => (
          <Ionicons name={focused ? "home-sharp" :"home-outline"} size={25} color={color}/>)
        }}
      />
      <Tabs.Screen
         name="two"
         options={{
           title: 'Dashboard',
           tabBarIcon: ({focused, color }) => (
           <Ionicons name={focused ? "extension-puzzle-sharp" : "extension-puzzle-outline"} size={25} color={color}/>)
         }}
      />
      <Tabs.Screen
         name="three"
         options={{
           title: 'Notices',
           tabBarIcon: ({focused, color }) => (
           <Ionicons name={focused ? "newspaper-sharp" : "newspaper-outline"} size={25} color={color}/>)
         }}
      />
      <Tabs.Screen
         name="more"
         options={{
           title: 'More',
           tabBarIcon: ({focused, color }) => (
           <Ionicons name={focused ? "grid-sharp" : "grid-outline"} size={25} color={color}/>)
         }}
      />
  
    </Tabs>
  );
}
