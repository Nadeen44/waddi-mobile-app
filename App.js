// import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import EmailScreen from './Screens/UserScreens/EmailScreen';
import PaymentScreen from './Screens/UserScreens/PaymentScreen';
import SignUpScreen from "./Screens/UserScreens/SignUpScreen";
import WelcomeScreen from './Screens/UserScreens/WelcomeScreen'
import CodScreen from './Screens/UserScreens/CodScreen';
import ProfileScreen from './Screens/UserScreens/ProfileScreen';
import CreateOrder_address from './Screens/UserScreens/CreateOrder_address';
import NextButton from './Components/NexButton';
import BackButton from './Components/BackButton';
import Commedities from './Screens/UserScreens/Commedities';
import CardScreen from './Screens/UserScreens/CardScreen';
import ProgressBar from './Components/ProgressBar';
import SplashScreen from './Screens/UserScreens/SplashScreen';
import PhoneNumber from './Screens/UserScreens/PhoneNumber';
import OTPVerification from './Screens/UserScreens/OTPVerification';
import Verified from './Screens/UserScreens/Verified';
import CreateOrder_trucks from './Screens/UserScreens/CreateOrder_trucks';
import ChooseTruck from './Screens/UserScreens/ChooseTruck';
import CreateOrder_addons from './Screens/UserScreens/CreateOrder_addons';
import ChooseAddons from './Screens/UserScreens/ChooseAddons';
import CreateOrder_review from './Screens/UserScreens/CreateOrder_review';
import ReviewOrder from './Screens/UserScreens/ReviewOrder';
import AddressMap from './Screens/UserScreens/AddressMap';
import AddressDetails from './Screens/UserScreens/AddressDetails';
import ChooseCommedity from './Screens/UserScreens/ChooseCommedity';
import ReviewCommedity from './Screens/UserScreens/ReviewCommedity';
import DriverProfile from './Screens/DriverScreens/DriverProfile';
import DriverTask from './Screens/DriverScreens/DriverTask';
import PickupLoad from './Screens/DriverScreens/PickupLoad';
import PickupConfirmation from './Screens/DriverScreens/PickupConfirmation';
import Pickup_arrived from './Screens/DriverScreens/Pickup_arrived';
import PickupTask from './Screens/DriverScreens/PickupTask';



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen"
        screenOptions={{ headerMode: 'none' }}>
        <Stack.Screen name="Email" component={EmailScreen} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Cod" component={CodScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Order" component={CreateOrder_address} />
        <Stack.Screen name="Next" component={NextButton} />
        <Stack.Screen name="Back" component={BackButton} />
        <Stack.Screen name="Commedity" component={Commedities} />
        <Stack.Screen name="Card" component={CardScreen} />
        <Stack.Screen name="PhoneNumber" component={PhoneNumber} />
        <Stack.Screen name="OTPVerification" component={OTPVerification} />
        <Stack.Screen name="Verified" component={Verified} />
        <Stack.Screen name="CreateOrder_trucks" component={CreateOrder_trucks}  />
        <Stack.Screen name="ChooseTruck" component={ChooseTruck}/>
        <Stack.Screen name="CreateOrder_addons" component={CreateOrder_addons}  />
        <Stack.Screen name="ChooseAddons" component={ChooseAddons} />
        <Stack.Screen name="CreateOrder_review" component={CreateOrder_review} />
        <Stack.Screen name="ReviewOrder" component={ReviewOrder} /> 
        <Stack.Screen name="AddressMap" component={AddressMap} /> 
        <Stack.Screen name="AddressDetails" component={AddressDetails} />  
        <Stack.Screen name="ChooseCommedity" component={ChooseCommedity} />  
        <Stack.Screen name="ReviewCommedity" component={ReviewCommedity} /> 
        <Stack.Screen name="DriverProfile" component={DriverProfile} /> 
        <Stack.Screen name="DriverTask" component={DriverTask} />  
        <Stack.Screen name="PickupLoad" component={PickupLoad} /> 
        <Stack.Screen name="PickupConfirmation" component={PickupConfirmation} /> 
        <Stack.Screen name="Pickup_arrived" component={Pickup_arrived} /> 
        <Stack.Screen name="PickupTask" component={PickupTask} /> 

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
