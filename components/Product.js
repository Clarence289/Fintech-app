import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TextInput, KeyboardAvoidingView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import 'react-native-gesture-handler';

const Product = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        {/* Card Section */}
        <View style={styles.cardContainer}>
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
        </View>

        {/* Body Content */}
        <View style={styles.body}>
          {/* Your body content goes here */}
          <View style={styles.imageSection}>
            <View style={styles.squaresContainer}>
              <View style={[styles.whiteSquare, { transform: [{ rotate: '45deg' }] }]} />
              <View style={[styles.whiteSquare, { transform: [{ rotate: '30deg' }] }]} />
              <View style={[styles.whiteSquare, { transform: [{ rotate: '60deg' }] }]} />
            </View>
            <Image source={require('../assets/image2.png')} style={[styles.receivingImage, { transform: [{ rotate: '18deg' }] }]}/>
          </View>
          <Text style={styles.productName}>PRODUCT NAME</Text>
          <View style={styles.lineContainer}>
            {/* TextInput */}
            <TextInput style={styles.textInput} placeholder="Enter Amount" />
          </View>
          
          <Text style={styles.priceText}>PRICE</Text>
          <Text style={styles.amountText}>AMOUNT</Text>
          <Text style={styles.Unit}>1 UNIT = UNIT EXPLAINER</Text>
          
          {/* Additional Boxes under the Unit text */}
          <View style={styles.additionalBoxes}>
            <View style={styles.box}>
              <Text style={styles.boxText}>DROP OFF</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.boxText}>PICK UP</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.boxText}>HIDDEN</Text>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Product;


const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  
  container: {
    flex: 1,
  },
  cardContainer: {
    alignItems: 'center',
    paddingTop: 34,
    paddingHorizontal: 10,
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
    width: 340,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10, // Rounded rectangle
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
  body: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black', 
    marginTop: 20,
  },
  imageSection: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  squaresContainer: {
    position: 'absolute',
    top: -340,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteSquare: {
    width: 120, 
    height: 150, 
    backgroundColor: 'black',
    borderRadius: 10, 
    borderWidth: 2,
    borderColor: 'white',
    position: 'absolute',
  },
  receivingImage: {
    width: 160, 
    height: 120, 
    borderRadius: 10, 
    position: 'absolute',
    top: -240,
  },
  productName: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute',
    top: 240, // Adjust the position as needed
  },
  lineContainer: {
    position: 'absolute',
    top: 320, // Adjust the position as needed
    left: '14%', // Adjust the position as needed
    width: 100, // Set the width of the line
    height: 3, // Set the height of the line
    alignItems: 'flex-start', // Align the line to the left
    justifyContent: 'flex-start', // Align the line to the top
  },
  textInput: {
    width: '140%', 
    height: 20, // Adjust the height as needed
    borderBottomColor: 'white',
    borderBottomWidth: 1, // Add bottom border
    color: 'white',
    fontSize: 16,
    paddingLeft: 14,
    marginTop: -28

  
  },
  priceText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute',
    top: '70%', // Center vertically
    left: '50%', // Center horizontally
    transform: [{ translateX: -50 }, { translateY: -50 }], // Centering trick
  },
  amountText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute',
    top: 280,
    right: '10%', 
  },
  Unit: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    position: 'absolute',
    top: 400, // Adjust the margin top as needed
  },
  additionalBoxes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    top: 430, // Adjust the top position as needed
    left: 0,
    right: 0,
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: 'black',
    borderRadius: 10, // Rounded corners
    borderWidth: 2,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxText: {
    color: 'white',
    fontWeight: 'bold',
  }
})