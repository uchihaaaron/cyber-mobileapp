import { View, Text,Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
export default function Header() {
  return (
    <View style={{
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
      marginTop : 40,
      paddingRight: 20,
      paddingLeft:20,
    }}>
        <View style={{
          display:"flex",
          flexDirection:"row",
          alignItems:"center",
          gap:6
        }}>
        <Image source={require("./../../assets/images/profile.png")}/> 
      <Text style={{
        fontSize: 18,
        fontWeight: "500",
        display:"flex",
        alignItems:"center",
        gap:3
      }}>Abishek Pathak </Text></View>
      <View style={{
        display:"flex",
        flexDirection:"row",
        gap: 15
      }}>
       <Link href="/Search"><Ionicons name="search-outline" size={32} color="black" /></Link>
       <Link href="/Notification"><Ionicons name="notifications-outline" size={32} color="black" /></Link>
      <Link href="/Menu"><Ionicons name="menu-outline" size={32} color="black" /></Link>
      </View>
      
      
    </View>
  )
}