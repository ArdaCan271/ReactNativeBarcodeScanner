import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useCameraPermission } from 'react-native-vision-camera';

const PermissionScreen = ({ navigation }) => {
  const {hasCameraPermission, requestCameraPermission} = useCameraPermission();
  console.log(useCameraPermission());

  useEffect(() => {
    if (hasCameraPermission) {
      navigation.replace('Scan'); // Replace to avoid going back to permission screen
    }
  }, [hasCameraPermission, navigation]);

  const handlePermissionRequest = async () => {
    const newCameraPermission = await requestCameraPermission();
    if (newCameraPermission.status === 'authorized') {
      navigation.replace('Scan');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>This app needs camera permission to scan barcodes.</Text>
      <Pressable style={styles.button} onPress={handlePermissionRequest}>
        <Text style={styles.buttonText}>Grant Camera Permission</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#29A0B1',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default PermissionScreen;
