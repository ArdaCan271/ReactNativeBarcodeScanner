import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{borderRadius: 10, overflow: "hidden", width: "50%", height: 50}}>
        <Pressable
          style={styles.goToScanButton}
          android_ripple={{ color: "#98D7C2" }}
          onPress={() => navigation.navigate('Permission')}
        >
          <Text style={styles.buttonText}>Scan A Barcode</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  goToScanButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#29A0B1",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    overflow: "hidden"
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
  }
});

export default HomeScreen;