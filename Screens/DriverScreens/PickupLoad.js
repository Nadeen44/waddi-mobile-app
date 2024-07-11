import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, Image, Alert, Linking } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { AntDesign } from '@expo/vector-icons';
import PickupArrived from './Pickup_arrived';  // Ensure you import the PickupArrived component

const phoneNumber = '+201091922749'; // Replace with your actual phone number

const handleCallPress = () => {
  Alert.alert('Call', `Do you want to call ${phoneNumber}?`, [
    {
      text: 'Cancel',
      style: 'cancel',
    },
    {
      text: 'Call',
      onPress: () => {
        Linking.openURL(`tel:${phoneNumber}`);
      },
    },
  ]);
};

const handleMessagePress = () => {
  Alert.alert('Message', `Do you want to message ${phoneNumber}?`, [
    {
      text: 'Cancel',
      style: 'cancel',
    },
    {
      text: 'Message',
      onPress: () => {
        Linking.openURL(`whatsapp://send?phone=${phoneNumber}`);
      },
    },
  ]);
};

const handleRejectPress = (closeModal) => {
  // Implement reject functionality here
  closeModal();
};

const pickupLocation = { latitude: 31.043052, longitude: 31.380908 };
const dropoffLocation = { latitude: 31.04412, longitude: 31.38057 };

const routeCoordinates = [
  pickupLocation,
  dropoffLocation,
];

const MapModal = ({ modalVisible, closeModal }) => {
  const [showPickupArrived, setShowPickupArrived] = useState(false);

  const handlePickupPress = () => {
    setShowPickupArrived(true);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={closeModal}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
            <View style={styles.closeIconContainer}>
              <AntDesign name="close" size={25} color="#454545" />
            </View>
          </TouchableOpacity>
          <View style={styles.innerContainer}>
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: 31.0419,
                longitude: 31.3785,
                latitudeDelta: 0.007,
                longitudeDelta: 0.007,
              }}
            >
              <Marker
                coordinate={{ latitude: 31.04412, longitude: 31.38057 }}
                title="Dropoff Location"
                description="This is the dropoff point"
              >
                <Image
                  source={require('../../assets/images/dropoff_icon.png')}
                  style={{ width: 30, height: 30 }} // Adjust width and height as needed
                />
              </Marker>
              <Marker
                coordinate={{ latitude: 31.043052, longitude: 31.380908 }}
                title="Pickup Location"
                description="This is the pickup point"
              >
                <Image
                  source={require('../../assets/images/pickup_icon.png')}
                  style={{ width: 50, height: 50 }} // Adjust width and height as needed
                />
              </Marker>
              <Polyline
                coordinates={routeCoordinates}
                strokeColor="#415BF6" // Route line color
                strokeWidth={3} // Route line width
              />
            </MapView>

            <View style={styles.card}>
              <View style={styles.blueCard}>
                <View style={styles.blueCardContent}>
                  <View style={styles.blueCardLeft}>
                    <Text style={styles.blueCardTitle}>24 Port Said St. Mansoura</Text>
                    <Text style={styles.blueCardSubtitle}>13 km · You’re 30m away</Text>
                  </View>
                  <View style={styles.blueCardRight}>
                    <Image source={require('../../assets/images/ArrowUP.png')} style={styles.blueCardImage} />
                  </View>
                </View>
              </View>
              <View style={styles.leftContent}>
                <Text style={styles.title}>Solar Panel</Text>
                <Text style={styles.subtitle}>
                  Green Energy LTD - <Text style={styles.colorCode}>#DE6574</Text>
                </Text>
                <Text style={styles.Today}>
                  Today <Text style={styles.todaySubtext}>- Container, 32.4 Ibs</Text>
                </Text>
              </View>
              <View style={styles.rightContent}>
                <View style={styles.rightDetails}>
                  <Text style={styles.statusText}>ASSIGNED</Text>
                </View>
                <View style={styles.contactDetails}>
                  <TouchableOpacity onPress={handleCallPress}>
                    <Image source={require('../../assets/images/call.png')} style={styles.image} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handleMessagePress}>
                    <Image source={require('../../assets/images/message.png')} style={styles.image} />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.bottomButtons}>
                <TouchableOpacity style={styles.rejectButton} onPress={() => handleRejectPress(closeModal)}>
                  <Text style={styles.RejectText}>Reject</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.pickupButton} onPress={handlePickupPress}>
                  <Text style={styles.PickupText}>Pickup</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
      <PickupArrived
        modalVisible={showPickupArrived}
        closeModal={() => {
          setShowPickupArrived(false);
          closeModal();
        }}
      />
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 0,
    height: 500,
    width: '100%',
    borderRadius: 30,
    overflow: 'hidden',
    marginTop: 380,
  },
  closeButton: {
    position: 'absolute',
    top: 25,
    left: 20,
    zIndex: 2,
  },
  closeIconContainer: {
    backgroundColor: '#D9D9D9',
    borderRadius: 25,
    padding: 10,
  },
  innerContainer: {
    flex: 1,
    borderRadius: 30,
    overflow: 'hidden',
  },
  map: {
    flex: 1,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#F8F8F8',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 15,
    height: 240,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 1,

  },
  cardText: {
    fontSize: 16,
    color: '#333',
  },
  blueCard: {
    alignSelf: 'center',
    backgroundColor: '#415BF6',
    height: 75,
    width: 343,
    position: 'absolute',
    top: -75,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    overflow: 'hidden',
  },
  blueCardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  blueCardLeft: {
    marginTop: 2,
    marginLeft: 7,
  },
  blueCardRight: {},
  blueCardTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFF',
    paddingBottom: 5,
  },
  blueCardSubtitle: {
    fontSize: 14,
    color: '#FFF',
  },
  blueCardImage: {
    width: 40,
    height: 40,
  },
  leftContent: {
    marginTop: 15,
    // marginBottom:20,
    // flex: 1,
  },
  colorCode: {
    color: '#EFB26A', // or any other color you prefer
  },
  rightContent: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  rightDetails: {
    alignItems: 'center',
    height: 25,
    width: 79,
    borderRadius: 25,
    backgroundColor: '#FCF2E3',
    padding: 4,
    borderRadius: 20,
    marginTop: 13,
    marginRight: 7,
  },
  contactDetails: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 23,
    paddingRight: 10,
  },
  image: {
    width: 40,
    height: 40,
    marginLeft: 10,
  },
  statusText: {
    fontSize: 14,
    color: '#EFB26A',
    fontWeight: '400',
    alignSelf: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  stamp: {
    alignItems: 'center',
    height: 25,
    width: 79,
    borderRadius: 25,
    backgroundColor: '#FCF2E3',
    padding: 5,
    borderRadius: 20,

  },
  Today: {
    fontWeight: '600',
    fontSize: 16,
    color: '#415BF6',
    marginTop: 25,
  }
  ,
  todaySubtext: {
    color: '#666',
    fontWeight: '400',
  },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 50,
    left: 70,
    right: 70,
  },

  rejectButton: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#7F7E7E',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 153,
    height: 42,
    marginRight: 10, // Add margin to the right of the Reject button
  },

  pickupButton: {
    alignItems: 'center',
    backgroundColor: '#415BF6',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 153,
    height: 42,
    marginLeft: 5, // Add margin to the left of the Pickup button
  },

  RejectText: {
    color: '#F04248',
    fontWeight: '400',
    fontSize: 15,
  },

  PickupText: {
    color: '#FFF',
    fontWeight: '400',
    fontSize: 15,
  },


});


export default MapModal;
