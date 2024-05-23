import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

const Fallback = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/sticky-note.png')}
        style={styles.img}
      />
      <Text style={styles.txt}>Start Adding Your Task</Text>
    </View>
  );
};

export default Fallback;

const styles= StyleSheet.create({
    container: {alignItems: 'center', marginTop: 20},
    img: {height: 350, width: 350},
    txt: {fontWeight: 'bold', fontSize: 16, marginTop: 15}
})
