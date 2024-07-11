import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NextButton from '../../Components/NexButton';
import BackButton from '../../Components/BackButton';

const commodityData = [
    {
      name: 'Plastic & Rubber',
      imagePath: require('../../assets/images/plastic (1).png')
    },
    {
      name: 'Appliances',
      imagePath: require('../../assets/images/electronics (1).png')
    },
    {
      name: 'Glass',
      imagePath: require('../../assets/images/fragile-glass 1.png')
    },
    {
      name: 'Wood',
      imagePath: require('../../assets/images/wood (1).png')
    },
    {
      name: 'Food',
      imagePath: require('../../assets/images/food 1.png')
    },
    {
      name: 'Furnitures',
      imagePath: require('../../assets/images/sofa 1.png')
    },
    {
      name: 'Multiple Commodities',
      imagePath: require('../../assets/images/Frame 380899.png')
    }
  ];
  
  function MyComponent() {
    const navigation = useNavigation();
    const [selectedCommodities, setSelectedCommodities] = useState([]);
  
    const onCommoditySelect = (commodityName) => {
      setSelectedCommodities((prevSelectedCommodities) => {
        if (prevSelectedCommodities.includes(commodityName)) {
          // Deselect commodity if already selected
          return prevSelectedCommodities.filter((name) => name !== commodityName);
        } else {
          // Select commodity if not already selected
          return [...prevSelectedCommodities, commodityName];
        }
      });
    };
  
    const onNextPress = () => {
      navigation.navigate('ReviewCommedity');
    };
  
    const handleScreenPress = () => {
      // Deselect all commodities when the screen is touched
      setSelectedCommodities([]);
    };
  
    return (
      <TouchableWithoutFeedback onPress={handleScreenPress}>
        <View style={styles.container}>
          <Text style={styles.title}>Choose Commodity</Text>
          <View style={styles.grid}>
            {commodityData.map((commodity, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.commodityContainer,
                  selectedCommodities.includes(commodity.name) && styles.selectedCommodity
                ]}
                onPress={() => onCommoditySelect(commodity.name)}
              >
                <Image resizeMode="contain" source={commodity.imagePath} style={styles.commodityImage} />
                <Text style={styles.commodityText}>{commodity.name}</Text>
                {/* Show tick icon if selected */}
                {selectedCommodities.includes(commodity.name) && (
                  <Image source={require('../../assets/images/tick.png')} style={styles.tickIcon} />
                )}
              </TouchableOpacity>
            ))}
          </View>
          <NextButton  onPress={onNextPress} />
          <BackButton onPress={() => navigation.navigate('ChooseCommedity')} />
        </View>
      </TouchableWithoutFeedback>
    );
  }
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    alignItems: 'flex-start',
    paddingVertical: 55,
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#212121',
    marginBottom: 25,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  commodityContainer: {
    backgroundColor: '#F2F3F9',
    borderRadius: 7.2,
    width: '48%',
    aspectRatio: 0.88,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedCommodity: {
    borderColor: '#415BF6', // Example border color for selected commodities
    borderWidth: 2,
  },
  commodityImage: {
    width: 67.5,
    height: 67.5,
    aspectRatio: 1,
  },
  commodityText: {
    marginTop: 8,
    // fontFamily: 'SF Pro, sans-serif',
  },
  tickIcon: {
    position: 'absolute',
    bottom: -10,
    right: -10,
    width: 40,
    height: 40,
  },
});
  
export default MyComponent;
