import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';

import React, {useState} from 'react';
import BottomTab from '../BottomTab/BottomTab';
import {launchImageLibrary} from 'react-native-image-picker';
import {PermissionsAndroid} from 'react-native';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore'
const AddItems = () => {
  const [imageData, setImageData] = useState(null);
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [discountPrice, setDiscountPrice] = useState(0);
  const [descryption, setDescryption] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Food Delivery App',
          message:
            'Food Delivery App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
        openGallery();
      } else {
        console.log('Camera permission denied');
      }
    } catch (result) {
      console.warn(result);
      setImageData(result);
    }
  };

  const openGallery = async () => {
    const result = await launchImageLibrary({mediaType: 'photo'});
    if (!result.didCancel) {
      setImageData(result.assets[0]);
    } else {
      console.warn(result);
    }
  };

  const uploadImg = async () => {

    const reference = storage().ref(imageData.fileName);
    const pathToFile = imageData.uri;
    await reference.putFile(pathToFile);
    const url = await storage()
      .ref(imageData.fileName)
      .getDownloadURL();
    console.log(url);
    uploadItem(url);
  };

  const uploadItem = url => {
    firestore().collection('items').add({
      name: name,

      price: price,
      discountPrice: discountPrice,
      descryption:descryption,
      imageUrl:url+" "
    })
    .then(()=>{
      console.log("user added")
    })
  };
  return (
    <View style={styles.container}>
      <BottomTab />

      <ScrollView style={styles.containe} showsVerticalScrollIndicator={false}>
        <View>
          <View style={styles.header}>
            <Text style={styles.headerText}>Add Items</Text>
          </View>
          {imageData != null ? (
            <Image
              source={{uri: imageData.uri}}
              style={{
                width: '90%',
                height: 200,
                borderRadius: 10,
                alignSelf: 'center',
                marginTop: 20,
              }}
            />
          ) : null}
          <TextInput placeholder="Enter Item Name" style={styles.textInput} value={name}
          onChangeText={text => setName(text)} />
          <TextInput placeholder="Enter Item Price" style={styles.textInput} value={price}
          onChangeText={text => setPrice(text)}  />
          <TextInput
            placeholder="Enter Item Discount Price"
            style={styles.textInput}
            value={discountPrice}
          onChangeText={text => setDiscountPrice(text)}
          />
          <TextInput
            placeholder="Enter Item Descryption"
            style={styles.textInput}
            value={descryption}
          onChangeText={text => setDescryption(text)}
          />
          <Text style={{marginTop: 20, alignItems: 'center'}}>OR</Text>
          <TouchableOpacity
            style={styles.pickBtn}
            onPress={() => requestCameraPermission()}>
            <Text>Upload Image From Gallery</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.pressable}
            onPress={() => uploadImg()}>
            <Text style={styles.next}>Upload Item</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default AddItems;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containe: {
    flex: 1,
    // alignItems: 'center',
    marginBottom: 50,
  },
  header: {
    height: 70,
    width: '100%',
    backgroundColor: '#FFF',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: '700',
    marginLeft: 15,
  },
  textInput: {
    paddingRight: 15,
    paddingLeft: 15,
    width: '90%',
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 30,
    marginHorizontal: 15,
  },
  pickBtn: {
    width: '90%',
    height: 50,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    borderRadius: 10,
    alignSelf: 'center',
  },
  pressable: {
    backgroundColor: '#FF4B3A',
    width: 327,
    height: 62,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 3,
    marginTop: 20,
  },
  next: {
    fontSize: 20,
    color: '#FFF',
    fontWeight: 'bold',
  },
});
