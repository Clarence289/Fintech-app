import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

const Confirm = () => {
  const screenHeight = Dimensions.get('window').height;
  const [productType, setProductType] = useState('');
  const [amountReceived, setAmountReceived] = useState('');
  const [initialInvestment, setInitialInvestment] = useState('');

  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        {/* Card Section */}
        <View style={styles.card}>
          <Image source={require('../assets/human.jpg')} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.greetingText}>Hello, Joseph!</Text>
            <View style={styles.iconsContainer}>
              <FontAwesome name="envelope" size={20} color="#000" style={styles.icon} />
              <Text style={styles.logoutText}>LOGOUT</Text>
            </View>
          </View>
        </View>

        {/* Receiving Section */}
        <View style={styles.receivingContainer}>
          <Text style={styles.receivingText}>RECEIVING</Text>
          <View style={styles.vendorContainer}>
            <Image source={require('../assets/image2.png')} style={styles.receivingImage} />
            <Text style={styles.vendorText}>VENDOR NAME</Text>
          </View>
        </View>

        {/* Dropdown Section */}
        <View style={styles.dropdownContainer}>
          <Text style={styles.dropdownLabel}></Text>
          <View style={styles.dropdown}>
            <Picker
              selectedValue={productType}
              onValueChange={(itemValue, itemIndex) => setProductType(itemValue)}
            >
              <Picker.Item label="SELECT TYPE" value="" />
              <Picker.Item label="Type 1" value="type1" />
              <Picker.Item label="Type 2" value="type2" />
              {/* Add more items as needed */}
            </Picker>
          </View>
        </View>

        {/* Inputs for AMOUNT RECEIVED and INITIAL INVESTMENT */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="AMOUNT RECEIVED"
            value={amountReceived}
            onChangeText={(text) => setAmountReceived(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="INITIAL INVESTMENT"
            value={initialInvestment}
            onChangeText={(text) => setInitialInvestment(text)}
          />
        </View>

        {/* Confirm Button */}
        <TouchableOpacity style={styles.confirmButton}>
          <Text style={styles.confirmButtonText}>CONFIRM</Text>
        </TouchableOpacity>
        
        {/* Card Section */}
        <View style={styles.bottomCard}>
          <View style={styles.leftSection}>
            {/* QR Code */}
            <Image source={require('../assets/qr-code.png')} style={styles.qrCode} />
          </View>
          <View style={styles.centerSection}>
            {/* Home Icon */}
            <Image source={require('../assets/home-icon.png')} style={styles.homeIcon} />
          </View>
          <View style={styles.rightSection}>
            {/* Human Icon */}
            <Image source={require('../assets/head-icon.png')} style={styles.humanIcon} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 5,
    alignItems: 'center',
    marginTop: 34,
    marginLeft: 10,
    marginRight: 10,
    width: 340,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  greetingText: {
    fontSize: 28,
    fontWeight: 'bold',
    width: '100%',
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  icon: {
    marginRight: 5,
  },
  logoutText: {
    marginLeft: 5,
    color: 'blue',
  },
  receivingContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  receivingText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginRight: 240,
  },
  vendorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  receivingImage: {
    width: 90,
    height: 90,
    borderRadius: 80,
    marginRight: 120,
  },
  vendorText: {
    fontSize: 18,
    marginLeft: -6,
  },
  dropdownContainer: {
    marginTop: 20,
    marginLeft: 12,
    width: 320
  },
  dropdownLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  dropdown: {
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
  },
  inputContainer: {
    marginTop: 28,
    marginLeft: 12,
    width: 320
  },
  input: {
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
  },
  confirmButton: {
    backgroundColor: 'white',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'black',
    padding: 14,
    alignItems: 'center',
    marginTop: 38,
    marginLeft: 10,
    marginRight: 10,
    height: 60
  },
  confirmButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    alignItems:'center'
  },
  qrCode: {
    width: 50,
    height: 50,
  },
  bottomCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 46,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    elevation: 5,
    alignItems: 'center',
    margin: -14,
    marginTop: 82,
    width:390
  },
  leftSection: {
    flex: 1,
    alignItems: 'center',
  },
  centerSection: {
    flex: 1,
    alignItems: 'center',
  },
  rightSection: {
    flex: 1,
    alignItems: 'center',
  },
  homeIcon: {
    width: 50,
    height: 50,
    marginTop: 5,
  },
  humanIcon: {
    width: 56,
    height: 56,
    marginTop: 5,
  },
});

export default Confirm;
