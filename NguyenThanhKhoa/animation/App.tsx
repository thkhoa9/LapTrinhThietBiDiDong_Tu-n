import React, {useRef} from 'react';
import {
  Animated,
  View,
  StyleSheet,
  Button,
  SafeAreaView,
  Image, 
} from 'react-native';

const App = () => {
  const kichThuoc = useRef(new Animated.Value(100)).current;
  const diChuyen = useRef(new Animated.Value(-100)).current;


  const position = function(translateY: number, translateX: number) {
    return {
      width: 100,
      height: 100, 
      transform: [{translateY: translateY}, {translateX: translateX}],
    }
  }

  const kichThuocIn = () => {
    Animated.timing(kichThuoc, {
      toValue: 100,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const kichThuocOut = () => {
    Animated.timing(kichThuoc, {
      toValue: -100,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const translateXIn = () => {
    Animated.timing(diChuyen, {
      toValue: 100,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const translateXOut = () => {
    Animated.timing(diChuyen, {
      toValue: -100,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };



  return (
    <SafeAreaView style={styles.container}>

      <Animated.Image
        style={[
          {
            width: kichThuoc,
            height: kichThuoc, 
            transform: [{translateY: diChuyen}, {translateX: diChuyen}],
          }  
        ]}
        source={{uri: 'https://media.guitarcenter.com/is/image/MMGS7/L46478000004000-00-600x600.jpg'}}  
      >
      </Animated.Image>

      <Image style={position(0, 0)} source={{uri: 'https://media.guitarcenter.com/is/image/MMGS7/L46478000004000-00-600x600.jpg'}} />

      <View style={styles.buttonRow}>
        <Button title="Fade In View" onPress={kichThuocIn} />
        <Button title="Fade Out View" onPress={kichThuocOut} />
        <Button title="diChuyen X In View" onPress={translateXIn} />
        <Button title="diChuyen X Out View" onPress={translateXOut} />
        // 
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green", 
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',

  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: 'space-evenly',
    marginVertical: 16,
  }, 

});

export default App;