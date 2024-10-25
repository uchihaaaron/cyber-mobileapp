import { View, Text,Image,ScrollView } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';

export default function Menu() {
  return (
    <ScrollView style = {styles.menuContainer}>
      <View style={styles.sandp}>
        <Text style={styles.menuHeading}>Setting and Privacy</Text>
        <View>
          <View style={styles.menuOptions}>
            <View style={{
              display:"flex",
              flexDirection:"row",
              alignItems:"center",
              gap: 15
            }}>
          <Ionicons name="id-card-outline" size={32} color="black" />
          <Text style={styles.menuoptText}>Personal Information</Text></View>
          <Ionicons name="chevron-forward-outline" size={25} color="black" />
          </View>
          <View style={styles.menuOptions}>
            <View style={{
              display:"flex",
              flexDirection:"row",
              alignItems:"center",
              gap: 15
            }}>
         <Ionicons name="key-outline" size={32} color="black" />
          <Text style={styles.menuoptText}>Password and Security</Text></View>
          <Ionicons name="chevron-forward-outline" size={25} color="black" />
          </View>
          <View style={styles.menuOptions}>
            <View style={{
              display:"flex",
              flexDirection:"row",
              alignItems:"center",
              gap: 15
            }}>
          <Ionicons name="notifications-outline" size={32} color="black" />
          <Text style={styles.menuoptText}>Notifications</Text></View>
          <Ionicons name="chevron-forward-outline" size={25} color="black" />
          </View>
          <View style={styles.menuOptions}>
            <View style={{
              display:"flex",
              flexDirection:"row",
              alignItems:"center",
              gap: 15
            }}>
         <Ionicons name="moon-outline" size={32} color="black" />
          <Text style={styles.menuoptText}>Dark Mode</Text></View>
          <Ionicons name="chevron-forward-outline" size={25} color="black" />
          </View>
          <View style={styles.menuOptions}>
            <View style={{
              display:"flex",
              flexDirection:"row",
              alignItems:"center",
              gap: 15
            }}>
          <Ionicons name="globe-outline" size={32} color="black" />
          <Text style={styles.menuoptText}>English</Text></View>
          <Ionicons name="chevron-forward-outline" size={25} color="black" />
          </View>
          <View style={styles.menuOptions}>
            <View style={{
              display:"flex",
              flexDirection:"row",
              alignItems:"center",
              gap: 15
            }}>
          <Ionicons name="reader-outline" size={32} color="black" />
          <Text style={styles.menuoptText}>Account Activity</Text></View>
          <Ionicons name="chevron-forward-outline" size={25} color="black" />
          </View>
          <View style={styles.menuOptions}>
            <View style={{
              display:"flex",
              flexDirection:"row",
              alignItems:"center",
              gap: 15
            }}>
          <Ionicons name="cloud-download-outline" size={32} color="black" />
          <Text style={styles.menuoptText}>Intregation</Text></View>
          <Ionicons name="chevron-forward-outline" size={25} color="black" />
          </View>
          </View>
          </View>

          <View style={styles.hands}>
        <Text style={styles.menuHeading}>Help and Support</Text>
        <View>
          <View style={styles.menuOptions}>
            <View style={{
              display:"flex",
              flexDirection:"row",
              alignItems:"center",
              gap: 15
            }}>
          <Ionicons name="bug-outline" size={32} color="black" />
          <Text style={styles.menuoptText}>Report a Problem</Text></View>
          <Ionicons name="chevron-forward-outline" size={25} color="black" />
          </View>
          <View style={styles.menuOptions}>
            <View style={{
              display:"flex",
              flexDirection:"row",
              alignItems:"center",
              gap: 15
            }}>
         <Ionicons name="help-buoy-outline" size={32} color="black" />
          <Text style={styles.menuoptText}>Help Center</Text></View>
          <Ionicons name="chevron-forward-outline" size={25} color="black" />
          </View>
          <View style={styles.menuOptions}>
            <View style={{
              display:"flex",
              flexDirection:"row",
              alignItems:"center",
              gap: 15
            }}>
          <Ionicons name="send-outline" size={32} color="black" />
          <Text style={styles.menuoptText}>Support Request</Text></View>
          <Ionicons name="chevron-forward-outline" size={25} color="black" />
          </View>
          <View style={styles.menuOptions}>
            <View style={{
              display:"flex",
              flexDirection:"row",
              alignItems:"center",
              gap: 15
            }}>
         <Ionicons name="file-tray-outline" size={32} color="black" />
          <Text style={styles.menuoptText}>Support Inbox</Text></View>
          <Ionicons name="chevron-forward-outline" size={25} color="black" />
          </View>
          <View style={styles.menuOptions}>
            <View style={{
              display:"flex",
              flexDirection:"row",
              alignItems:"center",
              gap: 15
            }}>
          <Ionicons name="chatbox-ellipses-outline" size={32} color="black" />
          <Text style={styles.menuoptText}>Feedback</Text></View>
          <Ionicons name="chevron-forward-outline" size={25} color="black" />
          </View>
          <View style={styles.menuOptions}>
            <View style={{
              display:"flex",
              flexDirection:"row",
              alignItems:"center",
              gap: 15
            }}>
          <Ionicons name="build-outline" size={32} color="black" />
          <Text style={styles.menuoptText}>Troubleshoot</Text></View>
          <Ionicons name="chevron-forward-outline" size={25} color="black" />
          </View>
          <View style={styles.menuOptions}>
            <View style={{
              display:"flex",
              flexDirection:"row",
              alignItems:"center",
              gap: 15
            }}>
          <Ionicons name="receipt-outline" size={32} color="black" />
          <Text style={styles.menuoptText}>Terms and Policies</Text></View>
          <Ionicons name="chevron-forward-outline" size={25} color="black" />
          </View>
          </View>
          </View>
          
        </ScrollView>
  )
}
const styles = StyleSheet.create({
  menuContainer:{
   
  },
  menuOptions:{
    marginTop:25,
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },
  menuoptText:{
    fontSize:16,

  },
  menuIcons:{
    height:30,
    width:30
  },
  menuHeading:{
    fontSize:14,
    fontWeight:"500",
    color:"#5E5C5C"
  },
  sandp:{
    backgroundColor:"white",
    padding:15,
    borderRadius:10,
  },
  hands:{
    backgroundColor:"white",
    padding:15,
    borderRadius:10,
    marginTop:10
  },
})