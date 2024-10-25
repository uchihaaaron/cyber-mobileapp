import { StyleSheet, View, FlatList, Image, Dimensions } from 'react-native';
import React, { useState } from 'react';

export default function Slider() {
  const [active, setActive] = useState(0);
  const images = [
    {
      id: "01",
      image: require("./../../assets/images/notice.png")
    },
    {
      id: "01",
      image: require("./../../assets/images/notice2.png")
    }

  ]
  const windowWidth = Dimensions.get("window").width;
  const renderItem = ({ item }) => {
    return <View>
      <Image source={item.image} style={{ height: 180, width: windowWidth }} />
    </View>
  };

  const scroll = (event: { nativeEvent: { contentOffset: { x: any; }; }; }) => {
    const scrollPosition = event.nativeEvent.contentOffset.x
    const index = scrollPosition / windowWidth;
    setActive(index)
  }

  
  return (
    <View style={{
      marginTop:20
    }}>
      <FlatList data={images} renderItem={renderItem} keyExtractor={(item) => item.id} horizontal pagingEnabled onScroll={scroll} />

    </View>
  );
}
