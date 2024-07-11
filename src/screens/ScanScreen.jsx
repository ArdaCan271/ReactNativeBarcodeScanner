import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { Camera, useCameraDevices } from 'react-native-vision-camera';

const ScanScreen = () => {
  // const devices = useCameraDevices('back');
  // const device = devices.back;

  // if (device == null) {
  //   return (
  //     <View style={styles.container}>
  //       <Text>No camera device found.</Text>
  //     </View>
  //   );
  // }

  return (
    <View style={styles.container}>
      {/* <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default ScanScreen;
